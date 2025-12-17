import { NextResponse } from "next/server"

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
  benefits?: string[]
  applyOptions?: { publisher: string; url: string }[]
}

// Finance job categories for filtering
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

// Finance job search queries - multiple queries to get more results
const FINANCE_QUERIES = [
  "investment banking analyst",
  "investment banking summer analyst intern",
  "private equity associate",
  "private equity summer associate intern",
  "hedge fund analyst",
  "financial analyst intern",
  "M&A analyst",
  "equity research analyst intern",
  "asset management analyst",
  "venture capital associate intern",
  "trading analyst intern",
  "finance internship summer 2025",
  "investment banking internship",
  "corporate finance analyst",
]

// Cache for storing jobs
let jobsCache: { jobs: Job[]; timestamp: number } | null = null
const CACHE_DURATION = 1000 * 60 * 60 * 4 // 4 hour cache

// Track job source for response
let lastFetchReason = "sample"

async function fetchFromJSearch(query: string): Promise<Job[]> {
  const apiKey = process.env.RAPIDAPI_KEY

  if (!apiKey) {
    console.error("❌ RAPIDAPI_KEY environment variable is not set!")
    lastFetchReason = "no_key"
    return getSampleJobs()
  }
  
  console.log("✅ RAPIDAPI_KEY is set, fetching from JSearch...")

  try {
    const allJobs: Job[] = []
    const seenIds = new Set<string>()

    // Simple queries - internships and full-time
    const queries = query ? [query] : [
      "investment banking analyst",
      "private equity associate",
      "finance intern 2025",
      "investment banking summer analyst",
      "financial analyst intern"
    ]
    
    const fetchPromises = queries.map(async (q) => {
      const response = await fetch(
        `https://jsearch.p.rapidapi.com/search?query=${encodeURIComponent(q)}&page=1&num_pages=5&date_posted=month`,
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Key": apiKey,
            "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
          },
        }
      )

      if (!response.ok) {
        console.error(`JSearch API error for query "${q}": ${response.status}`)
        return []
      }

      const data = await response.json()
      return data.data || []
    })

    const results = await Promise.all(fetchPromises)
    
    // Combine all results
    for (const jobsData of results) {
      for (const job of jobsData) {
        const jobId = job.job_id || crypto.randomUUID()
        
        // Skip duplicates
        if (seenIds.has(jobId)) continue
        seenIds.add(jobId)
        
        const mappedJob: Job = {
          id: jobId,
          title: job.job_title || "Finance Role",
          company: job.employer_name || "Confidential",
          companyLogo: job.employer_logo || undefined,
          companyWebsite: job.employer_website || undefined,
          location: formatLocation(job),
          type: determineJobType(job),
          salary: formatSalary(job),
          posted: formatPostedDate(job.job_posted_at_datetime_utc),
          url: job.job_apply_link || job.job_google_link || "#",
          description: job.job_description?.substring(0, 300) || undefined,
          category: categorizeJob(job.job_title || ""),
          benefits: job.job_benefits || undefined,
          applyOptions: job.apply_options?.map((opt: any) => ({
            publisher: opt.publisher,
            url: opt.apply_link,
          })) || undefined,
        }
        
        // Only include finance-related jobs
        if (isFinanceRelated(mappedJob.title, mappedJob.description)) {
          allJobs.push(mappedJob)
        }
      }
    }

    console.log(`Fetched ${allJobs.length} finance jobs from JSearch`)

    // If we have live jobs, return them directly without merging samples
    // The user requested "no samples" when live data is available
    if (allJobs.length > 0) {
      lastFetchReason = "success"
      return allJobs
    }

    // Only fallback to samples if absolutely no live jobs were found (API down)
    console.warn("⚠️ No live jobs found, falling back to samples")
    lastFetchReason = "sample"
    return getSampleJobs()
  } catch (error) {
    console.error("❌ JSearch fetch error:", error instanceof Error ? error.message : error)
    lastFetchReason = "sample"
    return getSampleJobs()
  }
}

function formatLocation(job: any): string {
  if (job.job_is_remote) return "Remote"
  const city = job.job_city || ""
  const state = job.job_state || ""
  if (city && state) return `${city}, ${state}`
  if (city) return city
  if (state) return state
  return job.job_country || "United States"
}

function determineJobType(job: any): string {
  const title = (job.job_title || "").toLowerCase()
  const type = (job.job_employment_type || "").toLowerCase()
  
  if (
    title.includes("intern") || 
    title.includes("summer analyst") || 
    title.includes("summer associate") ||
    title.includes("summer 20") || // Catch Summer 2025, 2026 etc
    (title.includes("summer") && title.includes("analyst")) ||
    title.includes("co-op")
  ) {
    return "Internship"
  }
  if (type.includes("intern")) return "Internship"
  if (type.includes("contract")) return "Contract"
  if (type.includes("part")) return "Part-time"
  return "Full-time"
}

function formatSalary(job: any): string | undefined {
  const min = job.job_min_salary
  const max = job.job_max_salary
  const period = job.job_salary_period
  
  if (!min && !max) return undefined
  
  const formatNum = (n: number) => {
    if (n >= 1000) return `$${(n / 1000).toFixed(0)}k`
    return `$${n}`
  }
  
  if (min && max) {
    if (period === "YEAR") {
      return `${formatNum(min)} - ${formatNum(max)}`
    }
    return `$${min.toLocaleString()} - $${max.toLocaleString()}${period ? ` / ${period.toLowerCase()}` : ""}`
  }
  
  if (min) return `From ${formatNum(min)}${period === "YEAR" ? "" : ` / ${period?.toLowerCase() || ""}`}`
  if (max) return `Up to ${formatNum(max)}${period === "YEAR" ? "" : ` / ${period?.toLowerCase() || ""}`}`
  
  return undefined
}

function formatPostedDate(dateStr: string): string {
  if (!dateStr) return "Recently"
  const date = new Date(dateStr)
  const now = new Date()
  const diffDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24))

  if (diffDays === 0) return "Today"
  if (diffDays === 1) return "Yesterday"
  if (diffDays < 7) return `${diffDays} days ago`
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`
  return `${Math.floor(diffDays / 30)} months ago`
}

function isFinanceRelated(title: string, description?: string): boolean {
  const text = `${title} ${description || ""}`.toLowerCase()
  const financeKeywords = [
    "finance", "financial", "banking", "investment", "analyst", "associate",
    "equity", "trading", "hedge", "private equity", "venture", "capital",
    "asset management", "wealth", "portfolio", "m&a", "merger", "acquisition",
    "underwriting", "credit", "risk", "treasury", "fp&a", "cfo", "controller",
    "accounting", "audit", "valuation", "due diligence", "leveraged", "buyout",
    "intern", "summer analyst", "summer associate", "internship", "wall street",
    "securities", "quantitative", "quant", "fixed income", "derivatives",
    "fintech", "blockchain", "crypto", "defi"
  ]
  return financeKeywords.some(keyword => text.includes(keyword))
}

function categorizeJob(title: string): string {
  const titleLower = title.toLowerCase()

  if (titleLower.includes("investment bank") || titleLower.includes("m&a") || titleLower.includes("ib analyst") || titleLower.includes("ib associate"))
    return "Investment Banking"
  if (titleLower.includes("private equity") || titleLower.includes("pe ") || titleLower.includes("buyout") || titleLower.includes("lbo"))
    return "Private Equity"
  if (titleLower.includes("hedge fund") || titleLower.includes("portfolio manager") || titleLower.includes("hf ") || titleLower.includes("long short"))
    return "Hedge Fund"
  if (titleLower.includes("asset management") || titleLower.includes("wealth") || titleLower.includes("aum"))
    return "Asset Management"
  if (titleLower.includes("equity research") || titleLower.includes("research analyst") || titleLower.includes("stock analyst"))
    return "Equity Research"
  if (titleLower.includes("trading") || titleLower.includes("trader") || titleLower.includes("sales") || titleLower.includes("market maker"))
    return "Sales & Trading"
  if (titleLower.includes("venture") || titleLower.includes("vc ") || titleLower.includes("startup"))
    return "Venture Capital"
  if (titleLower.includes("risk") || titleLower.includes("compliance"))
    return "Risk Management"
  if (titleLower.includes("corporate finance") || titleLower.includes("fp&a") || titleLower.includes("treasury"))
    return "Corporate Finance"

  return "Finance"
}

function getSampleJobs(): Job[] {
  return [
    // Full-time positions
    {
      id: "1",
      title: "Investment Banking Analyst",
      company: "Goldman Sachs",
      location: "New York, NY",
      type: "Full-time",
      salary: "$110k - $130k",
      posted: "2 days ago",
      url: "https://www.goldmansachs.com/careers",
      description: "Join our M&A team advising Fortune 500 companies on strategic transactions.",
      category: "Investment Banking",
    },
    {
      id: "2",
      title: "Private Equity Associate",
      company: "Blackstone",
      location: "New York, NY",
      type: "Full-time",
      salary: "$200k - $350k",
      posted: "1 day ago",
      url: "https://www.blackstone.com/careers",
      description: "Evaluate and execute investments across diverse sectors.",
      category: "Private Equity",
    },
    {
      id: "3",
      title: "Hedge Fund Analyst - L/S Equity",
      company: "Citadel",
      location: "Chicago, IL",
      type: "Full-time",
      salary: "$150k - $300k",
      posted: "3 days ago",
      url: "https://www.citadel.com/careers",
      description: "Fundamental equity research and stock picking for long/short portfolio.",
      category: "Hedge Fund",
    },
    {
      id: "4",
      title: "M&A Associate",
      company: "Morgan Stanley",
      location: "New York, NY",
      type: "Full-time",
      salary: "$175k - $225k",
      posted: "Today",
      url: "https://www.morganstanley.com/careers",
      description: "Lead transaction execution and client advisory for middle-market deals.",
      category: "Investment Banking",
    },
    {
      id: "5",
      title: "Equity Research Associate",
      company: "J.P. Morgan",
      location: "New York, NY",
      type: "Full-time",
      salary: "$125k - $175k",
      posted: "4 days ago",
      url: "https://www.jpmorgan.com/careers",
      description: "Coverage of technology sector with focus on software companies.",
      category: "Equity Research",
    },
    {
      id: "6",
      title: "Portfolio Manager - Global Macro",
      company: "Bridgewater Associates",
      location: "Westport, CT",
      type: "Full-time",
      salary: "$300k - $500k+",
      posted: "1 week ago",
      url: "https://www.bridgewater.com/careers",
      description: "Develop and manage macro trading strategies across asset classes.",
      category: "Hedge Fund",
    },
    {
      id: "7",
      title: "VC Associate",
      company: "Andreessen Horowitz",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$175k - $250k",
      posted: "5 days ago",
      url: "https://a16z.com/careers",
      description: "Source and evaluate early-stage technology investments.",
      category: "Venture Capital",
    },
    {
      id: "8",
      title: "Trading Analyst",
      company: "Jane Street",
      location: "New York, NY",
      type: "Full-time",
      salary: "$200k - $400k",
      posted: "2 days ago",
      url: "https://www.janestreet.com/join-jane-street",
      description: "Quantitative trading and market making across global markets.",
      category: "Sales & Trading",
    },
    {
      id: "10",
      title: "Asset Management Analyst",
      company: "BlackRock",
      location: "New York, NY",
      type: "Full-time",
      salary: "$100k - $140k",
      posted: "3 days ago",
      url: "https://www.blackrock.com/careers",
      description: "Support portfolio management and client advisory across fixed income strategies.",
      category: "Asset Management",
    },
    {
      id: "12",
      title: "Risk Analyst",
      company: "Two Sigma",
      location: "New York, NY",
      type: "Full-time",
      salary: "$140k - $200k",
      posted: "4 days ago",
      url: "https://www.twosigma.com/careers",
      description: "Quantitative risk analysis for systematic trading strategies.",
      category: "Risk Management",
    },
    {
      id: "13",
      title: "Investment Banking Analyst - TMT",
      company: "Lazard",
      location: "New York, NY",
      type: "Full-time",
      salary: "$110k - $130k",
      posted: "3 days ago",
      url: "https://www.lazard.com/careers",
      description: "M&A advisory for technology, media, and telecommunications sectors.",
      category: "Investment Banking",
    },
    {
      id: "14",
      title: "Growth Equity Associate",
      company: "General Atlantic",
      location: "New York, NY",
      type: "Full-time",
      salary: "$200k - $300k",
      posted: "5 days ago",
      url: "https://www.generalatlantic.com/careers",
      description: "Evaluate growth-stage technology and healthcare investments.",
      category: "Private Equity",
    },
    {
      id: "15",
      title: "Quantitative Researcher",
      company: "DE Shaw",
      location: "New York, NY",
      type: "Full-time",
      salary: "$200k - $400k",
      posted: "1 week ago",
      url: "https://www.deshaw.com/careers",
      description: "Develop systematic trading strategies using quantitative methods.",
      category: "Hedge Fund",
    },
    {
      id: "16",
      title: "FP&A Manager",
      company: "Amazon",
      location: "Seattle, WA",
      type: "Full-time",
      salary: "$130k - $180k",
      posted: "2 days ago",
      url: "https://www.amazon.jobs",
      description: "Lead financial planning and analysis for AWS business unit.",
      category: "Corporate Finance",
    },
    // INTERNSHIPS
    {
      id: "100",
      title: "Investment Banking Summer Analyst 2025",
      company: "Goldman Sachs",
      location: "New York, NY",
      type: "Internship",
      salary: "$85k prorated",
      posted: "Today",
      url: "https://www.goldmansachs.com/careers/students/programs/americas/investment-banking-summer-analyst.html",
      description: "10-week summer internship in Investment Banking Division. Work on live M&A and capital markets transactions.",
      category: "Investment Banking",
    },
    {
      id: "101",
      title: "Investment Banking Summer Analyst 2025",
      company: "Morgan Stanley",
      location: "New York, NY",
      type: "Internship",
      salary: "$85k prorated",
      posted: "1 day ago",
      url: "https://www.morganstanley.com/careers",
      description: "Summer analyst program with rotations across M&A, ECM, and DCM groups.",
      category: "Investment Banking",
    },
    {
      id: "102",
      title: "Investment Banking Summer Analyst 2025",
      company: "J.P. Morgan",
      location: "New York, NY",
      type: "Internship",
      salary: "$85k prorated",
      posted: "2 days ago",
      url: "https://careers.jpmorgan.com/us/en/students/programs/investment-banking-summer-analyst",
      description: "9-week program gaining hands-on experience in financial analysis, modeling, and client interaction.",
      category: "Investment Banking",
    },
    {
      id: "103",
      title: "Investment Banking Summer Analyst 2025",
      company: "Bank of America",
      location: "New York, NY",
      type: "Internship",
      salary: "$85k prorated",
      posted: "3 days ago",
      url: "https://campus.bankofamerica.com",
      description: "Summer analyst internship in Global Corporate & Investment Banking division.",
      category: "Investment Banking",
    },
    {
      id: "104",
      title: "Investment Banking Summer Analyst 2025",
      company: "Citi",
      location: "New York, NY",
      type: "Internship",
      salary: "$85k prorated",
      posted: "Today",
      url: "https://www.citigroup.com/citi/careers",
      description: "10-week summer program in Investment Banking with training and deal exposure.",
      category: "Investment Banking",
    },
    {
      id: "105",
      title: "Investment Banking Summer Analyst 2025",
      company: "Barclays",
      location: "New York, NY",
      type: "Internship",
      salary: "$85k prorated",
      posted: "4 days ago",
      url: "https://www.barclays.com/careers",
      description: "Summer internship in Investment Banking with mentorship and live deal experience.",
      category: "Investment Banking",
    },
    {
      id: "106",
      title: "Investment Banking Summer Analyst 2025",
      company: "UBS",
      location: "New York, NY",
      type: "Internship",
      salary: "$85k prorated",
      posted: "5 days ago",
      url: "https://www.ubs.com/careers",
      description: "Summer analyst program across M&A, Capital Markets, and Leveraged Finance.",
      category: "Investment Banking",
    },
    {
      id: "107",
      title: "Investment Banking Summer Analyst",
      company: "Evercore",
      location: "New York, NY",
      type: "Internship",
      salary: "$85k prorated",
      posted: "Today",
      url: "https://www.evercore.com/careers",
      description: "10-week summer program with exposure to live M&A transactions at elite boutique.",
      category: "Investment Banking",
    },
    {
      id: "108",
      title: "Investment Banking Summer Analyst",
      company: "Moelis & Company",
      location: "New York, NY",
      type: "Internship",
      salary: "$85k prorated",
      posted: "2 days ago",
      url: "https://www.moelis.com/careers",
      description: "Summer analyst program at leading independent investment bank.",
      category: "Investment Banking",
    },
    {
      id: "109",
      title: "Investment Banking Summer Analyst",
      company: "Centerview Partners",
      location: "New York, NY",
      type: "Internship",
      salary: "$90k prorated",
      posted: "1 week ago",
      url: "https://www.centerviewpartners.com",
      description: "Elite boutique summer program focused on high-profile M&A transactions.",
      category: "Investment Banking",
    },
    {
      id: "110",
      title: "Private Equity Summer Associate",
      company: "KKR",
      location: "New York, NY",
      type: "Internship",
      salary: "$100k prorated",
      posted: "1 week ago",
      url: "https://www.kkr.com/careers",
      description: "Summer program with direct deal team exposure and LBO modeling.",
      category: "Private Equity",
    },
    {
      id: "111",
      title: "Private Equity Summer Associate",
      company: "Blackstone",
      location: "New York, NY",
      type: "Internship",
      salary: "$100k prorated",
      posted: "3 days ago",
      url: "https://www.blackstone.com/careers",
      description: "10-week summer associate program in Private Equity group.",
      category: "Private Equity",
    },
    {
      id: "112",
      title: "Private Equity Summer Associate",
      company: "Carlyle Group",
      location: "Washington, DC",
      type: "Internship",
      salary: "$100k prorated",
      posted: "5 days ago",
      url: "https://www.carlyle.com/careers",
      description: "Summer internship with exposure to deal sourcing, due diligence, and portfolio management.",
      category: "Private Equity",
    },
    {
      id: "113",
      title: "Private Equity Summer Associate",
      company: "Apollo Global",
      location: "New York, NY",
      type: "Internship",
      salary: "$100k prorated",
      posted: "Today",
      url: "https://www.apollo.com/careers",
      description: "Summer program across private equity, credit, and real assets strategies.",
      category: "Private Equity",
    },
    {
      id: "114",
      title: "Hedge Fund Summer Analyst",
      company: "Citadel",
      location: "Chicago, IL",
      type: "Internship",
      salary: "$100k prorated",
      posted: "2 days ago",
      url: "https://www.citadel.com/careers",
      description: "10-week summer program in investment research and portfolio management.",
      category: "Hedge Fund",
    },
    {
      id: "115",
      title: "Quantitative Research Intern",
      company: "Two Sigma",
      location: "New York, NY",
      type: "Internship",
      salary: "$95k prorated",
      posted: "4 days ago",
      url: "https://www.twosigma.com/careers",
      description: "Summer internship developing quantitative models and trading strategies.",
      category: "Hedge Fund",
    },
    {
      id: "116",
      title: "Trading Intern",
      company: "Jane Street",
      location: "New York, NY",
      type: "Internship",
      salary: "$120k prorated",
      posted: "Today",
      url: "https://www.janestreet.com/join-jane-street",
      description: "Summer internship in quantitative trading and market making.",
      category: "Sales & Trading",
    },
    {
      id: "117",
      title: "Asset Management Summer Analyst",
      company: "BlackRock",
      location: "New York, NY",
      type: "Internship",
      salary: "$80k prorated",
      posted: "3 days ago",
      url: "https://www.blackrock.com/careers",
      description: "Summer analyst program across portfolio management and client solutions.",
      category: "Asset Management",
    },
    {
      id: "118",
      title: "Venture Capital Summer Associate",
      company: "Sequoia Capital",
      location: "Menlo Park, CA",
      type: "Internship",
      salary: "$90k prorated",
      posted: "1 week ago",
      url: "https://www.sequoiacap.com/careers",
      description: "Summer program evaluating early and growth-stage technology investments.",
      category: "Venture Capital",
    },
    {
      id: "119",
      title: "Equity Research Summer Analyst",
      company: "J.P. Morgan",
      location: "New York, NY",
      type: "Internship",
      salary: "$85k prorated",
      posted: "5 days ago",
      url: "https://www.jpmorgan.com/careers",
      description: "Summer analyst program in Equity Research covering technology sector.",
      category: "Equity Research",
    },
    {
      id: "120",
      title: "Sales & Trading Summer Analyst",
      company: "Goldman Sachs",
      location: "New York, NY",
      type: "Internship",
      salary: "$85k prorated",
      posted: "2 days ago",
      url: "https://www.goldmansachs.com/careers",
      description: "Summer program with rotations across equities, FICC, and derivatives.",
      category: "Sales & Trading",
    },
    {
      id: "121",
      title: "Corporate Finance Intern",
      company: "Google",
      location: "Mountain View, CA",
      type: "Internship",
      salary: "$75k prorated",
      posted: "Today",
      url: "https://careers.google.com",
      description: "Summer internship in FP&A supporting strategic initiatives.",
      category: "Corporate Finance",
    },
    {
      id: "122",
      title: "Finance Intern - Summer 2025",
      company: "Meta",
      location: "Menlo Park, CA",
      type: "Internship",
      salary: "$70k prorated",
      posted: "4 days ago",
      url: "https://www.metacareers.com",
      description: "Summer finance internship across FP&A, treasury, and corporate development.",
      category: "Corporate Finance",
    },
  ]
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get("q") || ""
  const category = searchParams.get("category") || ""
  const location = searchParams.get("location") || ""
  const refresh = searchParams.get("refresh") === "true"

  // Check cache first (unless refresh is requested)
  const cacheValid = jobsCache && Date.now() - jobsCache.timestamp < CACHE_DURATION
  
  if (cacheValid && !refresh && !query) {
    let jobs = jobsCache.jobs

    // Apply filters
    if (category) {
      jobs = jobs.filter((job) => job.category === category)
    }
    if (location) {
      jobs = jobs.filter((job) => job.location.toLowerCase().includes(location.toLowerCase()))
    }

    const response = NextResponse.json({ 
      jobs, 
      categories: FINANCE_CATEGORIES, 
      cached: true,
      source: "live"
    })
    
    // Cache at CDN level for 4 hours
    response.headers.set('Cache-Control', 's-maxage=14400, stale-while-revalidate=3600')
    
    return response
  }

  // Fetch fresh jobs
  // Use category-specific query or rotate through finance queries
  let searchQuery = query
  if (!searchQuery && category) {
    searchQuery = category
  }
  if (!searchQuery) {
    // Rotate through queries for variety
    const queryIndex = Math.floor(Date.now() / (1000 * 60 * 60)) % FINANCE_QUERIES.length
    searchQuery = FINANCE_QUERIES[queryIndex]
  }
  
  const jobs = await fetchFromJSearch(searchQuery)

  // Update cache if no specific query
  if (!query) {
    jobsCache = { jobs, timestamp: Date.now() }
  }

  // Apply filters
  let filteredJobs = jobs
  if (category) {
    filteredJobs = filteredJobs.filter((job) => job.category === category)
  }
  if (location) {
    filteredJobs = filteredJobs.filter((job) => job.location.toLowerCase().includes(location.toLowerCase()))
  }

  const response = NextResponse.json({ 
    jobs: filteredJobs, 
    categories: FINANCE_CATEGORIES, 
    cached: false,
    source: lastFetchReason === "success" ? "live" : "sample"
  })
  
  // Cache at CDN level for 4 hours
  response.headers.set('Cache-Control', 's-maxage=14400, stale-while-revalidate=3600')
  
  return response
}
