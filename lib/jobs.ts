import { getDb } from "@/lib/db"

/**
 * Server-side only: read cached jobs from Neon DB.
 * Used by the jobs page Server Component for SSR so crawlers see real content.
 */

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

export interface FilterMeta {
  cities: { name: string; count: number }[]
  types: { name: string; count: number }[]
  categories: { name: string; count: number }[]
}

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

const genericLocations = new Set(["us", "united states", "remote", "usa", "nationwide"])

/**
 * Get cached jobs from DB. Returns null if table doesn't exist or no data.
 */
export async function getCachedJobs(): Promise<{
  jobs: Job[]
  filters: FilterMeta
  total: number
} | null> {
  try {
    const db = getDb()
    const rows = await db`
      SELECT jobs_data FROM jobs_cache
      WHERE query_set = 'default'
      ORDER BY fetched_at DESC LIMIT 1
    `
    if (rows.length === 0) return null

    const jobs: Job[] =
      typeof rows[0].jobs_data === "string"
        ? JSON.parse(rows[0].jobs_data)
        : rows[0].jobs_data

    if (!jobs || jobs.length === 0) return null

    // Build filter metadata
    const cityCounts: Record<string, number> = {}
    const typeCounts: Record<string, number> = {}
    const categoryCounts: Record<string, number> = {}

    for (const j of jobs) {
      const city = j.location.split(",")[0].trim()
      if (city && !genericLocations.has(city.toLowerCase())) {
        cityCounts[city] = (cityCounts[city] || 0) + 1
      }
      typeCounts[j.type] = (typeCounts[j.type] || 0) + 1
      categoryCounts[j.category] = (categoryCounts[j.category] || 0) + 1
    }

    const remoteCount = jobs.filter((j) =>
      j.location.toLowerCase().includes("remote")
    ).length

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

    return {
      jobs,
      filters: { cities, types, categories },
      total: jobs.length,
    }
  } catch (err) {
    console.error("getCachedJobs error:", err)
    return null
  }
}

/**
 * Build JobPosting JSON-LD structured data for Google Jobs.
 * See https://developers.google.com/search/docs/appearance/structured-data/job-posting
 */
export function buildJobPostingSchema(jobs: Job[]) {
  return jobs.slice(0, 50).map((job) => {
    const schema: Record<string, unknown> = {
      "@context": "https://schema.org",
      "@type": "JobPosting",
      title: job.title,
      description: job.description || `${job.title} at ${job.company}`,
      datePosted: new Date().toISOString().split("T")[0], // today (we don't have exact post date in ISO)
      hiringOrganization: {
        "@type": "Organization",
        name: job.company,
        ...(job.companyLogo && { logo: job.companyLogo }),
        ...(job.companyWebsite && { sameAs: job.companyWebsite }),
      },
      jobLocation: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressLocality: job.location.split(",")[0]?.trim(),
          addressRegion: job.location.split(",")[1]?.trim(),
          addressCountry: "US",
        },
      },
      employmentType: mapEmploymentType(job.type),
      url: job.url,
    }

    // Remote jobs
    if (job.location.toLowerCase().includes("remote")) {
      schema.jobLocationType = "TELECOMMUTE"
    }

    // Salary
    if (job.salary) {
      const salaryData = parseSalaryRange(job.salary)
      if (salaryData) {
        schema.baseSalary = {
          "@type": "MonetaryAmount",
          currency: "USD",
          value: {
            "@type": "QuantitativeValue",
            ...(salaryData.min && salaryData.max
              ? { minValue: salaryData.min, maxValue: salaryData.max }
              : { value: salaryData.min || salaryData.max }),
            unitText: "YEAR",
          },
        }
      }
    }

    // Industry
    schema.industry = "Finance"
    schema.occupationalCategory = job.category

    return schema
  })
}

function mapEmploymentType(type: string): string {
  switch (type) {
    case "Full-time":
      return "FULL_TIME"
    case "Part-time":
      return "PART_TIME"
    case "Contract":
      return "CONTRACTOR"
    case "Internship":
      return "INTERN"
    default:
      return "FULL_TIME"
  }
}

function parseSalaryRange(
  salary: string
): { min?: number; max?: number } | null {
  // Match patterns like "$110k - $130k", "From $100k", "$200k - $350k", "$85k prorated"
  const matches = salary.match(/\$?([\d,]+)k?/gi)
  if (!matches || matches.length === 0) return null

  const nums = matches.map((m) => {
    let n = Number(m.replace(/[$,]/g, ""))
    if (m.toLowerCase().includes("k") && n < 1000) n *= 1000
    // If it looks like "110" in "$110k" context, it's 110000
    if (n < 1000 && salary.toLowerCase().includes("k")) n *= 1000
    return n
  })

  if (nums.length >= 2) {
    return { min: Math.min(...nums), max: Math.max(...nums) }
  }
  return { min: nums[0] }
}
