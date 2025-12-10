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

// Cache for storing jobs - longer cache for free plan (6 hours instead of 1)
let jobsCache: { jobs: Job[]; timestamp: number } | null = null
const CACHE_DURATION = 1000 * 60 * 60 * 6 // 6 hour cache to conserve API credits

// Track daily API calls to avoid exceeding limits
let dailyApiCalls = 0
let lastApiCallDate = new Date().toDateString()
const MAX_DAILY_API_CALLS = 6 // ~200 credits / 30 days = ~6 calls per day max

// Track job source for response
let lastFetchReason = "sample"

async function fetchFromTheirStack(query: string): Promise<Job[]> {
  const apiKey = process.env.THEIRSTACK_API_KEY

  if (!apiKey) {
    lastFetchReason = "sample"
    return getSampleJobs()
  }

  // Reset daily counter if it's a new day
  const today = new Date().toDateString()
  if (today !== lastApiCallDate) {
    dailyApiCalls = 0
    lastApiCallDate = today
  }

  // Check if we've exceeded daily limit
  if (dailyApiCalls >= MAX_DAILY_API_CALLS) {
    lastFetchReason = jobsCache ? "live" : "sample"
    return jobsCache?.jobs || getSampleJobs()
  }

  try {
    // Build request body - keep it simple for free plan
    const requestBody: Record<string, unknown> = {
      page: 0,
      limit: 25, // Moderate limit for free plan
      posted_at_max_age_days: 30,
      job_title_or: [
        "Investment Banking",
        "Private Equity", 
        "Hedge Fund",
        "Financial Analyst",
        "M&A",
        "Equity Research",
        "Asset Management",
        "Venture Capital",
      ],
      order_by: [{ desc: true, field: "date_posted" }],
    }
    
    // Only add query filter if specified
    if (query) {
      requestBody.job_title_pattern_and = [query]
    }
    
    const response = await fetch("https://api.theirstack.com/v1/jobs/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(requestBody),
    })

    if (!response.ok) {
      throw new Error(`TheirStack API error: ${response.status}`)
    }

    // Increment API call counter
    dailyApiCalls++

    const data = await response.json()

    if (!data.data || !Array.isArray(data.data)) {
      lastFetchReason = "sample"
      return getSampleJobs()
    }

    const jobs = data.data.map((job: any) => ({
      id: String(job.id) || crypto.randomUUID(),
      title: job.job_title || "Finance Role",
      company: job.company || job.company_object?.name || "Confidential",
      location: job.location || job.short_location || job.country || "Remote",
      type: job.employment_statuses?.[0] === "internship" ? "Internship" : "Full-time",
      salary: job.salary_string || undefined,
      posted: formatPostedDate(job.date_posted),
      url: job.url || job.source_url || "#",
      description: job.description?.substring(0, 300) || undefined,
      category: categorizeJob(job.job_title || ""),
    }))

    // Merge with sample jobs if we got few results
    if (jobs.length < 10) {
      const sampleJobs = getSampleJobs()
      lastFetchReason = "success"
      return [...jobs, ...sampleJobs.slice(0, 10 - jobs.length)]
    }

    lastFetchReason = "success"
    return jobs
  } catch (error) {
    lastFetchReason = "sample"
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
    {
      id: "1",
      title: "Investment Banking Analyst",
      company: "Goldman Sachs",
      location: "New York, NY",
      type: "Full-time",
      salary: "$110,000 - $130,000",
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
      salary: "$200,000 - $350,000",
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
      salary: "$150,000 - $300,000",
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
      salary: "$175,000 - $225,000",
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
      salary: "$125,000 - $175,000",
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
      salary: "$300,000 - $500,000+",
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
      salary: "$175,000 - $250,000",
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
      salary: "$200,000 - $400,000",
      posted: "2 days ago",
      url: "https://www.janestreet.com/join-jane-street",
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
      url: "https://www.evercore.com/careers",
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
      url: "https://www.blackrock.com/careers",
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
      url: "https://www.kkr.com/careers",
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
      salary: "$110,000 - $130,000",
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
      salary: "$200,000 - $300,000",
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
      salary: "$200,000 - $400,000",
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
      salary: "$130,000 - $180,000",
      posted: "2 days ago",
      url: "https://www.amazon.jobs",
      description: "Lead financial planning and analysis for AWS business unit.",
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

    return NextResponse.json({ 
      jobs, 
      categories: FINANCE_CATEGORIES, 
      cached: true,
      source: "live"
    })
  }

  // Fetch fresh jobs (this uses API credits)
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

  return NextResponse.json({ 
    jobs: filteredJobs, 
    categories: FINANCE_CATEGORIES, 
    cached: false,
    source: lastFetchReason === "success" ? "live" : "sample"
  })
}
