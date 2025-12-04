import { NextResponse } from "next/server"

export interface Job {
  id: string
  title: string
  company: string
  location: string
  type: string
  salary?: string
  posted: string
  url: string
  description?: string
  category: string
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

// Cache for storing jobs (in production, use Redis or DB)
let jobsCache: { jobs: Job[]; timestamp: number } | null = null
const CACHE_DURATION = 1000 * 60 * 60 // 1 hour cache

async function fetchFromTheirStack(query: string): Promise<Job[]> {
  const apiKey = process.env.THEIRSTACK_API_KEY

  if (!apiKey) {
    console.warn("TheirStack API key not configured, using sample data")
    return getSampleJobs()
  }

  try {
    const response = await fetch("https://api.theirstack.com/v1/jobs/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        page: 0,
        limit: 25,
        posted_at_max_age_days: 30,
        job_title_or: [
          "Investment Banking",
          "Private Equity",
          "Hedge Fund",
          "Financial Analyst",
          "M&A",
          "Equity Research",
          "Portfolio Manager",
          "Trader",
          "Asset Management",
          "Corporate Finance",
          "Venture Capital",
          "Risk Analyst",
        ],
        job_title_pattern_and: query ? [query] : undefined,
        order_by: [{ desc: true, field: "posted_at" }],
      }),
    })

    if (!response.ok) {
      throw new Error(`TheirStack API error: ${response.status}`)
    }

    const data = await response.json()

    return data.data.map((job: any) => ({
      id: job.id || crypto.randomUUID(),
      title: job.job_title || "Finance Role",
      company: job.company_name || "Confidential",
      location: job.location || "Remote",
      type: job.job_type || "Full-time",
      salary: job.salary_string || undefined,
      posted: formatPostedDate(job.posted_at),
      url: job.url || "#",
      description: job.description_summary || undefined,
      category: categorizeJob(job.job_title || ""),
    }))
  } catch (error) {
    console.error("TheirStack API error:", error)
    return getSampleJobs()
  }
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

function categorizeJob(title: string): string {
  const titleLower = title.toLowerCase()

  if (titleLower.includes("investment bank") || titleLower.includes("m&a") || titleLower.includes("ib analyst"))
    return "Investment Banking"
  if (titleLower.includes("private equity") || titleLower.includes("pe ") || titleLower.includes("buyout"))
    return "Private Equity"
  if (titleLower.includes("hedge fund") || titleLower.includes("portfolio manager") || titleLower.includes("hf "))
    return "Hedge Fund"
  if (titleLower.includes("asset management") || titleLower.includes("wealth"))
    return "Asset Management"
  if (titleLower.includes("equity research") || titleLower.includes("research analyst"))
    return "Equity Research"
  if (titleLower.includes("trading") || titleLower.includes("trader") || titleLower.includes("sales"))
    return "Sales & Trading"
  if (titleLower.includes("venture") || titleLower.includes("vc "))
    return "Venture Capital"
  if (titleLower.includes("risk"))
    return "Risk Management"
  if (titleLower.includes("corporate finance") || titleLower.includes("fp&a"))
    return "Corporate Finance"

  return "Finance"
}

function getSampleJobs(): Job[] {
  return [
    {
      id: "1",
      title: "Investment Banking Analyst",
      company: "Goldman Sachs",
      location: "New York, NY",
      type: "Full-time",
      salary: "$110,000 - $130,000",
      posted: "2 days ago",
      url: "#",
      description: "Join our M&A team advising Fortune 500 companies on strategic transactions.",
      category: "Investment Banking",
    },
    {
      id: "2",
      title: "Private Equity Associate",
      company: "Blackstone",
      location: "New York, NY",
      type: "Full-time",
      salary: "$200,000 - $350,000",
      posted: "1 day ago",
      url: "#",
      description: "Evaluate and execute investments across diverse sectors.",
      category: "Private Equity",
    },
    {
      id: "3",
      title: "Hedge Fund Analyst - L/S Equity",
      company: "Citadel",
      location: "Chicago, IL",
      type: "Full-time",
      salary: "$150,000 - $300,000",
      posted: "3 days ago",
      url: "#",
      description: "Fundamental equity research and stock picking for long/short portfolio.",
      category: "Hedge Fund",
    },
    {
      id: "4",
      title: "M&A Associate",
      company: "Morgan Stanley",
      location: "New York, NY",
      type: "Full-time",
      salary: "$175,000 - $225,000",
      posted: "Today",
      url: "#",
      description: "Lead transaction execution and client advisory for middle-market deals.",
      category: "Investment Banking",
    },
    {
      id: "5",
      title: "Equity Research Associate",
      company: "J.P. Morgan",
      location: "New York, NY",
      type: "Full-time",
      salary: "$125,000 - $175,000",
      posted: "4 days ago",
      url: "#",
      description: "Coverage of technology sector with focus on software companies.",
      category: "Equity Research",
    },
    {
      id: "6",
      title: "Portfolio Manager - Global Macro",
      company: "Bridgewater Associates",
      location: "Westport, CT",
      type: "Full-time",
      salary: "$300,000 - $500,000+",
      posted: "1 week ago",
      url: "#",
      description: "Develop and manage macro trading strategies across asset classes.",
      category: "Hedge Fund",
    },
    {
      id: "7",
      title: "VC Associate",
      company: "Andreessen Horowitz",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$175,000 - $250,000",
      posted: "5 days ago",
      url: "#",
      description: "Source and evaluate early-stage technology investments.",
      category: "Venture Capital",
    },
    {
      id: "8",
      title: "Trading Analyst",
      company: "Jane Street",
      location: "New York, NY",
      type: "Full-time",
      salary: "$200,000 - $400,000",
      posted: "2 days ago",
      url: "#",
      description: "Quantitative trading and market making across global markets.",
      category: "Sales & Trading",
    },
    {
      id: "9",
      title: "Investment Banking Summer Analyst",
      company: "Evercore",
      location: "New York, NY",
      type: "Internship",
      salary: "$85,000 prorated",
      posted: "Today",
      url: "#",
      description: "10-week summer program with exposure to live M&A transactions.",
      category: "Investment Banking",
    },
    {
      id: "10",
      title: "Asset Management Analyst",
      company: "BlackRock",
      location: "New York, NY",
      type: "Full-time",
      salary: "$100,000 - $140,000",
      posted: "3 days ago",
      url: "#",
      description: "Support portfolio management and client advisory across fixed income strategies.",
      category: "Asset Management",
    },
    {
      id: "11",
      title: "Private Equity Summer Associate",
      company: "KKR",
      location: "New York, NY",
      type: "Internship",
      salary: "$100,000 prorated",
      posted: "1 week ago",
      url: "#",
      description: "Summer program with direct deal team exposure and LBO modeling.",
      category: "Private Equity",
    },
    {
      id: "12",
      title: "Risk Analyst",
      company: "Two Sigma",
      location: "New York, NY",
      type: "Full-time",
      salary: "$140,000 - $200,000",
      posted: "4 days ago",
      url: "#",
      description: "Quantitative risk analysis for systematic trading strategies.",
      category: "Risk Management",
    },
  ]
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get("q") || ""
  const category = searchParams.get("category") || ""
  const location = searchParams.get("location") || ""

  // Check cache
  if (jobsCache && Date.now() - jobsCache.timestamp < CACHE_DURATION && !query) {
    let jobs = jobsCache.jobs

    // Apply filters
    if (category) {
      jobs = jobs.filter((job) => job.category === category)
    }
    if (location) {
      jobs = jobs.filter((job) => job.location.toLowerCase().includes(location.toLowerCase()))
    }

    return NextResponse.json({ jobs, categories: FINANCE_CATEGORIES, cached: true })
  }

  // Fetch fresh jobs
  const jobs = await fetchFromTheirStack(query)

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

  return NextResponse.json({ jobs: filteredJobs, categories: FINANCE_CATEGORIES, cached: false })
}

