import { NextResponse } from "next/server"

// Allow up to 120s on Vercel Pro for the full refresh cycle
export const maxDuration = 120

export interface Job {
  id: string
  title: string
  company: string
  companyLogo?: string
  companyWebsite?: string
  location: string
  type: string
  salary?: string
  posted: string
  url: string
  description?: string
  category: string
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const FINANCE_CATEGORIES = [
  "Investment Banking",
  "Private Equity",
  "Hedge Fund",
  "Asset Management",
  "Corporate Finance",
  "Equity Research",
  "Sales & Trading",
  "Risk Management",
  "Financial Planning",
  "Venture Capital",
]

// Query config: { q, dateRange, pages }
// Target: ~40% of 10k quota = 4,000 calls/month
// 6×3 + 12×3 = 54 API calls/refresh × 60 = 3,240/month (32%)
// Batches of 9 = only 2 batch rounds = fast execution
const FINANCE_QUERIES: { q: string; dateRange: string; pages: number }[] = [
  // ===== Full-time roles (6 queries × 3 pages = 18 calls) =====
  { q: "investment banking analyst", dateRange: "month", pages: 3 },
  { q: "private equity associate", dateRange: "month", pages: 3 },
  { q: "hedge fund analyst portfolio manager", dateRange: "month", pages: 3 },
  { q: "M&A equity research analyst", dateRange: "month", pages: 3 },
  { q: "asset management wealth analyst", dateRange: "month", pages: 3 },
  { q: "quantitative trading analyst", dateRange: "month", pages: 3 },

  // ===== Internships & Summer Programs (15 queries × 3 pages = 45 calls) =====
  // 2026 programs
  { q: "investment banking summer analyst 2026", dateRange: "all", pages: 3 },
  { q: "investment banking internship 2026", dateRange: "all", pages: 3 },
  { q: "private equity internship summer 2026", dateRange: "all", pages: 3 },
  { q: "finance internship summer 2026", dateRange: "all", pages: 3 },
  { q: "financial analyst intern 2026", dateRange: "all", pages: 3 },
  // 2027 programs
  { q: "investment banking summer analyst 2027", dateRange: "all", pages: 3 },
  { q: "summer analyst program 2027", dateRange: "all", pages: 3 },
  { q: "finance internship 2027", dateRange: "all", pages: 3 },
  // General internships (catches both years)
  { q: "hedge fund trading internship", dateRange: "all", pages: 3 },
  { q: "equity research internship summer analyst", dateRange: "all", pages: 3 },
  { q: "venture capital internship", dateRange: "all", pages: 3 },
  { q: "asset management internship summer", dateRange: "all", pages: 3 },
  { q: "corporate finance internship", dateRange: "all", pages: 3 },
  { q: "wealth management internship", dateRange: "all", pages: 3 },
  { q: "risk management internship summer", dateRange: "all", pages: 3 },
]

// ---------------------------------------------------------------------------
// Budget-safe caching strategy
//
// JSearch Pro plan: 10,000 requests/month
//   • 6×3 + 15×3 = 63 API calls per refresh
//   • Refresh every 12 hours via cron = ~60 refreshes/month = 3,780 calls
//   • Leaves ~6,220 calls headroom (62%)
//
// Layer 1 — In-memory cache  (survives within a single serverless instance)
// Layer 2 — Neon DB cache     (survives cold starts & multi-instance)
// Layer 3 — CDN cache header  (visitors never even hit the function)
// ---------------------------------------------------------------------------

let memoryCache: { jobs: Job[]; timestamp: number } | null = null
const MEMORY_TTL = 1000 * 60 * 60 * 6 // 6 hours in-memory
const DB_TTL     = 1000 * 60 * 60 * 12 // 12 hours in DB before considered stale

// ---------------------------------------------------------------------------
// JSearch API  (RapidAPI)
// ---------------------------------------------------------------------------

async function fetchFromJSearch(query: string, pages = 3, dateRange = "week"): Promise<Job[]> {
  const apiKey = process.env.RAPIDAPI_KEY
  if (!apiKey) {
    console.error("❌ RAPIDAPI_KEY not set")
    return []
  }

  const allJobs: Job[] = []
  const seenIds = new Set<string>()

  for (let page = 1; page <= pages; page++) {
    try {
      const url = new URL("https://jsearch.p.rapidapi.com/search")
      url.searchParams.set("query", query)
      url.searchParams.set("page", String(page))
      url.searchParams.set("num_pages", "1")
      url.searchParams.set("country", "us")
      url.searchParams.set("date_posted", dateRange)

      const res = await fetch(url.toString(), {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": apiKey,
          "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
        },
      })

      if (!res.ok) {
        console.error(`JSearch error for "${query}" page ${page}: ${res.status}`)
        break // stop paging on error (don't burn more calls)
      }

      const json = await res.json()
      const data = json.data || []

      for (const hit of data) {
        const id = hit.job_id || crypto.randomUUID()
        if (seenIds.has(id)) continue
        seenIds.add(id)

        // Only keep finance-related results
        if (!isFinanceRelated(hit.job_title, hit.job_description)) continue

        allJobs.push({
          id,
          title: hit.job_title || "Finance Role",
          company: hit.employer_name || "Confidential",
          companyLogo: hit.employer_logo || undefined,
          companyWebsite: hit.employer_website || undefined,
          location: formatLocation(hit),
          type: determineJobType(hit),
          salary: formatSalary(hit),
          posted: formatPostedDate(hit.job_posted_at_datetime_utc),
          url: hit.job_apply_link || hit.job_google_link || "#",
          description: (hit.job_description || "").substring(0, 300),
          category: categorizeJob(hit.job_title || ""),
        })
      }

      // If fewer than 10 results, no more pages
      if (data.length < 10) break
    } catch (err) {
      console.error(`JSearch fetch error for "${query}" page ${page}:`, err)
      break
    }
  }

  return allJobs
}

// Full refresh: runs queries in batches of 6 to avoid timeouts
async function fullRefresh(): Promise<Job[]> {
  console.log("🔄 Running full JSearch refresh (batched)...")

  const allJobs: Job[] = []
  const seenIds = new Set<string>()
  const BATCH_SIZE = 7

  for (let i = 0; i < FINANCE_QUERIES.length; i += BATCH_SIZE) {
    const batch = FINANCE_QUERIES.slice(i, i + BATCH_SIZE)
    const results = await Promise.all(
      batch.map(({ q, dateRange, pages }) => fetchFromJSearch(q, pages, dateRange))
    )
    for (const jobs of results) {
      for (const job of jobs) {
        if (!seenIds.has(job.id)) {
          seenIds.add(job.id)
          allJobs.push(job)
        }
      }
    }
    console.log(`  Batch ${Math.floor(i / BATCH_SIZE) + 1}: ${allJobs.length} unique jobs so far`)
  }

  console.log(`✅ Full refresh complete: ${allJobs.length} jobs`)
  return allJobs
}

// ---------------------------------------------------------------------------
// Neon DB cache helpers
// ---------------------------------------------------------------------------

async function getDbCachedJobs(): Promise<{ jobs: Job[]; fetchedAt: Date } | null> {
  try {
    const { getDb } = await import("@/lib/db")
    const db = getDb()
    const rows = await db`
      SELECT jobs_data, fetched_at FROM jobs_cache
      WHERE query_set = 'default'
      ORDER BY fetched_at DESC LIMIT 1
    `
    if (rows.length === 0) return null
    const row = rows[0]
    return {
      jobs: (typeof row.jobs_data === "string" ? JSON.parse(row.jobs_data) : row.jobs_data) as Job[],
      fetchedAt: new Date(row.fetched_at),
    }
  } catch (err) {
    console.error("DB cache read error:", err)
    return null
  }
}

async function setDbCachedJobs(jobs: Job[]): Promise<void> {
  try {
    const { getDb } = await import("@/lib/db")
    const db = getDb()
    // Upsert: delete old, insert new
    await db`DELETE FROM jobs_cache WHERE query_set = 'default'`
    await db`
      INSERT INTO jobs_cache (jobs_data, query_set, fetched_at)
      VALUES (${JSON.stringify(jobs)}::jsonb, 'default', NOW())
    `
    console.log(`💾 Saved ${jobs.length} jobs to DB cache`)
  } catch (err) {
    console.error("DB cache write error:", err)
  }
}

// ---------------------------------------------------------------------------
// Helper functions
// ---------------------------------------------------------------------------

function formatLocation(hit: any): string {
  if (hit.job_is_remote) return "Remote"
  const city = hit.job_city || ""
  const state = hit.job_state || ""
  if (city && state) return `${city}, ${state}`
  if (city) return city
  if (state) return state
  return hit.job_country || "United States"
}

function determineJobType(hit: any): string {
  const title = (hit.job_title || "").toLowerCase()
  const desc = ((hit.job_description || "").substring(0, 500)).toLowerCase()
  const type = (hit.job_employment_type || "").toLowerCase()

  // Title-based detection (most reliable)
  const internTitlePatterns = [
    "intern",           // covers "intern", "internship"
    "summer analyst",
    "summer associate",
    "co-op",
    "coop",
    "summer 20",        // "Summer 2025", "Summer 2026", "Summer 2027"
    "spring analyst",
    "spring 20",
    "fall analyst",
    "fall 20",
    "analyst program",  // "Summer Analyst Program"
    "rotational program",
    "early careers",
    "early career",
    "campus ",          // "Campus Recruiting", "Campus Hire"
    "new grad",
    "graduate program",
    "rising senior",
    "rising junior",
    "undergraduate",
  ]
  if (internTitlePatterns.some((p) => title.includes(p))) return "Internship"

  // Employment type field
  if (type.includes("intern")) return "Internship"

  // Description-based fallback (only first 500 chars)
  const internDescPatterns = [
    "summer intern",
    "summer analyst program",
    "10-week",
    "10 week",
    "8-week",
    "12-week",
    "internship program",
    "summer associate program",
    "return offer",
    "rising seniors",
    "rising juniors",
    "current undergraduate",
    "expected graduation",
    "graduating in",
  ]
  if (internDescPatterns.some((p) => desc.includes(p))) return "Internship"

  if (type.includes("contract") || type.includes("contractor")) return "Contract"
  if (type.includes("part")) return "Part-time"
  return "Full-time"
}

function formatSalary(hit: any): string | undefined {
  const min = hit.job_min_salary
  const max = hit.job_max_salary
  const period = hit.job_salary_period
  if (!min && !max) return undefined
  const fmt = (n: number) => (n >= 1000 ? `$${(n / 1000).toFixed(0)}k` : `$${n}`)
  if (min && max) {
    if (period === "YEAR") return `${fmt(min)} - ${fmt(max)}`
    return `$${min.toLocaleString()} - $${max.toLocaleString()}${period ? ` / ${period.toLowerCase()}` : ""}`
  }
  if (min) return `From ${fmt(min)}`
  if (max) return `Up to ${fmt(max)}`
  return undefined
}

function formatPostedDate(dateStr: string): string {
  if (!dateStr) return "Recently"
  const diffDays = Math.floor((Date.now() - new Date(dateStr).getTime()) / 86_400_000)
  if (diffDays === 0) return "Today"
  if (diffDays === 1) return "Yesterday"
  if (diffDays < 7) return `${diffDays} days ago`
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`
  return `${Math.floor(diffDays / 30)} months ago`
}

function isFinanceRelated(title: string, description?: string): boolean {
  const text = `${title} ${(description || "").substring(0, 500)}`.toLowerCase()
  const keywords = [
    "finance","financial","banking","investment","analyst","associate",
    "equity","trading","hedge","private equity","venture","capital",
    "asset management","wealth","portfolio","m&a","merger","acquisition",
    "underwriting","credit","risk","treasury","fp&a","cfo","controller",
    "accounting","audit","valuation","due diligence","leveraged","buyout",
    "intern","summer analyst","summer associate","internship","wall street",
    "securities","quantitative","quant","fixed income","derivatives",
  ]
  return keywords.some((kw) => text.includes(kw))
}

function categorizeJob(title: string): string {
  const t = title.toLowerCase()
  if (t.includes("investment bank") || t.includes("m&a") || t.includes("ib analyst") || t.includes("ib associate"))
    return "Investment Banking"
  if (t.includes("private equity") || t.includes("pe ") || t.includes("buyout") || t.includes("lbo"))
    return "Private Equity"
  if (t.includes("hedge fund") || t.includes("portfolio manager") || t.includes("hf ") || t.includes("long short"))
    return "Hedge Fund"
  if (t.includes("asset management") || t.includes("wealth") || t.includes("aum"))
    return "Asset Management"
  if (t.includes("equity research") || t.includes("research analyst") || t.includes("stock analyst"))
    return "Equity Research"
  if (t.includes("trading") || t.includes("trader") || t.includes("sales") || t.includes("market maker"))
    return "Sales & Trading"
  if (t.includes("venture") || t.includes("vc ") || t.includes("startup"))
    return "Venture Capital"
  if (t.includes("risk") || t.includes("compliance"))
    return "Risk Management"
  if (t.includes("corporate finance") || t.includes("fp&a") || t.includes("treasury"))
    return "Corporate Finance"
  return "Finance"
}

// ---------------------------------------------------------------------------
// Sample jobs (fallback when no API key / no DB / fresh deploy)
// ---------------------------------------------------------------------------

function getSampleJobs(): Job[] {
  return [
    { id: "s1", title: "Investment Banking Analyst", company: "Goldman Sachs", location: "New York, NY", type: "Full-time", salary: "$110k - $130k", posted: "2 days ago", url: "https://www.goldmansachs.com/careers", description: "Join our M&A team advising Fortune 500 companies on strategic transactions.", category: "Investment Banking" },
    { id: "s2", title: "Private Equity Associate", company: "Blackstone", location: "New York, NY", type: "Full-time", salary: "$200k - $350k", posted: "1 day ago", url: "https://www.blackstone.com/careers", description: "Evaluate and execute investments across diverse sectors.", category: "Private Equity" },
    { id: "s3", title: "Hedge Fund Analyst - L/S Equity", company: "Citadel", location: "Chicago, IL", type: "Full-time", salary: "$150k - $300k", posted: "3 days ago", url: "https://www.citadel.com/careers", description: "Fundamental equity research and stock picking for long/short portfolio.", category: "Hedge Fund" },
    { id: "s4", title: "M&A Associate", company: "Morgan Stanley", location: "New York, NY", type: "Full-time", salary: "$175k - $225k", posted: "Today", url: "https://www.morganstanley.com/careers", description: "Lead transaction execution and client advisory for middle-market deals.", category: "Investment Banking" },
    { id: "s5", title: "Equity Research Associate", company: "J.P. Morgan", location: "New York, NY", type: "Full-time", salary: "$125k - $175k", posted: "4 days ago", url: "https://www.jpmorgan.com/careers", description: "Coverage of technology sector with focus on software companies.", category: "Equity Research" },
    { id: "s6", title: "Trading Analyst", company: "Jane Street", location: "New York, NY", type: "Full-time", salary: "$200k - $400k", posted: "2 days ago", url: "https://www.janestreet.com/join-jane-street", description: "Quantitative trading and market making across global markets.", category: "Sales & Trading" },
    { id: "s7", title: "VC Associate", company: "Andreessen Horowitz", location: "San Francisco, CA", type: "Full-time", salary: "$175k - $250k", posted: "5 days ago", url: "https://a16z.com/careers", description: "Source and evaluate early-stage technology investments.", category: "Venture Capital" },
    { id: "s8", title: "Asset Management Analyst", company: "BlackRock", location: "New York, NY", type: "Full-time", salary: "$100k - $140k", posted: "3 days ago", url: "https://www.blackrock.com/careers", description: "Support portfolio management and client advisory across fixed income strategies.", category: "Asset Management" },
    { id: "s9", title: "Investment Banking Summer Analyst", company: "Evercore", location: "New York, NY", type: "Internship", salary: "$85k prorated", posted: "Today", url: "https://www.evercore.com/careers", description: "10-week summer program with exposure to live M&A transactions at elite boutique.", category: "Investment Banking" },
    { id: "s10", title: "Private Equity Summer Associate", company: "KKR", location: "New York, NY", type: "Internship", salary: "$100k prorated", posted: "1 week ago", url: "https://www.kkr.com/careers", description: "Summer program with direct deal team exposure and LBO modeling.", category: "Private Equity" },
    { id: "s11", title: "Finance Intern - Summer 2026", company: "Google", location: "Mountain View, CA", type: "Internship", salary: "$75k prorated", posted: "Today", url: "https://careers.google.com", description: "Summer internship in FP&A supporting strategic initiatives.", category: "Corporate Finance" },
    { id: "s12", title: "Risk Analyst", company: "Two Sigma", location: "New York, NY", type: "Full-time", salary: "$140k - $200k", posted: "4 days ago", url: "https://www.twosigma.com/careers", description: "Quantitative risk analysis for systematic trading strategies.", category: "Risk Management" },
  ]
}

// ---------------------------------------------------------------------------
// GET /api/jobs  — serves visitors from cache, never burns API calls on reads
// ---------------------------------------------------------------------------

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const category = searchParams.get("category") || ""
  const location = searchParams.get("location") || ""
  const type     = searchParams.get("type") || ""
  const refresh  = searchParams.get("refresh") === "true"
  // Secret key protects manual refresh from being abused
  const cronSecret = searchParams.get("cron_secret") || ""
  const isAuthorizedRefresh = refresh && (
    cronSecret === (process.env.CRON_SECRET || "") ||
    cronSecret === "admin" // fallback for dev
  )

  // ------------------------------------------------------------------
  // 1) Try in-memory cache first (fastest, free)
  // ------------------------------------------------------------------
  if (!isAuthorizedRefresh && memoryCache && Date.now() - memoryCache.timestamp < MEMORY_TTL) {
    return respond(memoryCache.jobs, category, location, type, "memory")
  }

  // ------------------------------------------------------------------
  // 2) Try DB cache (survives cold starts)
  // ------------------------------------------------------------------
  let dbJobs: Job[] | null = null
  try {
    const dbCache = await getDbCachedJobs()
    if (dbCache) {
      // Populate memory cache from DB
      memoryCache = { jobs: dbCache.jobs, timestamp: dbCache.fetchedAt.getTime() }

      // If not forcing refresh, serve DB cache regardless of age
      if (!isAuthorizedRefresh) {
        return respond(dbCache.jobs, category, location, type, "db")
      }
      dbJobs = dbCache.jobs
    }
  } catch {
    // DB table may not exist yet — that's fine, we'll fall through
    console.warn("DB cache read failed (table may not exist yet)")
  }

  // ------------------------------------------------------------------
  // 3) Fetch fresh from JSearch — ONLY on authorized cron refresh
  // ------------------------------------------------------------------
  if (isAuthorizedRefresh) {
    try {
      // Ensure the jobs_cache table exists
      const { initDatabase } = await import("@/lib/db")
      await initDatabase()
    } catch {
      console.warn("DB init failed during refresh")
    }

    const freshJobs = await fullRefresh()

    if (freshJobs.length > 0) {
      memoryCache = { jobs: freshJobs, timestamp: Date.now() }
      await setDbCachedJobs(freshJobs)
      return respond(freshJobs, category, location, type, "jsearch")
    }

    // If API returned nothing, serve whatever we had before
    if (dbJobs && dbJobs.length > 0) {
      return respond(dbJobs, category, location, type, "stale")
    }
  }

  // ------------------------------------------------------------------
  // 4) Fallback: sample jobs (no cache and not a refresh request)
  // ------------------------------------------------------------------
  return respond(getSampleJobs(), category, location, type, "sample")
}

// ---------------------------------------------------------------------------
// Response helper with CDN caching
// ---------------------------------------------------------------------------

function respond(allJobs: Job[], category: string, location: string, type: string, source: string) {
  let jobs = allJobs

  if (category) {
    jobs = jobs.filter((j) => j.category === category)
  }
  if (location) {
    jobs = jobs.filter((j) => j.location.toLowerCase().includes(location.toLowerCase()))
  }
  if (type) {
    jobs = jobs.filter((j) => j.type === type)
  }

  // Build dynamic filter metadata from ALL jobs (before filtering)
  const cityCounts: Record<string, number> = {}
  const typeCounts: Record<string, number> = {}
  const categoryCounts: Record<string, number> = {}
  // Generic/non-city values to skip in city filter
  const genericLocations = new Set(["us", "united states", "remote", "usa", "nationwide"])

  for (const j of allJobs) {
    const city = j.location.split(",")[0].trim()
    // Only count real cities
    if (city && !genericLocations.has(city.toLowerCase())) {
      cityCounts[city] = (cityCounts[city] || 0) + 1
    }
    typeCounts[j.type] = (typeCounts[j.type] || 0) + 1
    categoryCounts[j.category] = (categoryCounts[j.category] || 0) + 1
  }

  // Always include Remote as a filter option
  const remoteCount = allJobs.filter(
    (j) => j.location.toLowerCase().includes("remote")
  ).length

  // Top cities sorted by count, plus Remote at end
  const cities = Object.entries(cityCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 20)
    .map(([name, count]) => ({ name, count }))
  if (remoteCount > 0) {
    cities.push({ name: "Remote", count: remoteCount })
  }

  const types = Object.entries(typeCounts)
    .sort((a, b) => b[1] - a[1])
    .map(([name, count]) => ({ name, count }))

  const categories = FINANCE_CATEGORIES.map((name) => ({
    name,
    count: categoryCounts[name] || 0,
  }))

  const res = NextResponse.json({
    jobs,
    total: allJobs.length,
    filtered: jobs.length,
    source,
    filters: { cities, types, categories },
  })

  // CDN caches the response for 6 hours; stale-while-revalidate for another 6
  res.headers.set("Cache-Control", "s-maxage=21600, stale-while-revalidate=21600")
  return res
}
