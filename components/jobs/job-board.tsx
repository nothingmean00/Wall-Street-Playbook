"use client"

import { useState, useEffect } from "react"
import { Search, MapPin, Building2, Clock, ExternalLink, Filter, ChevronDown, Loader2 } from "lucide-react"

interface Job {
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

const FINANCE_CATEGORIES = [
  "All Categories",
  "Investment Banking",
  "Private Equity",
  "Hedge Fund",
  "Asset Management",
  "Equity Research",
  "Sales & Trading",
  "Venture Capital",
  "Risk Management",
  "Corporate Finance",
  "Finance",
]

const LOCATIONS = [
  "All Locations",
  "New York",
  "San Francisco",
  "Chicago",
  "Boston",
  "Los Angeles",
  "Dallas",
  "Charlotte",
  "Houston",
  "Remote",
]

export function JobBoard() {
  const [jobs, setJobs] = useState<Job[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All Categories")
  const [selectedLocation, setSelectedLocation] = useState("All Locations")
  const [showFilters, setShowFilters] = useState(false)

  useEffect(() => {
    fetchJobs()
  }, [selectedCategory, selectedLocation])

  const fetchJobs = async () => {
    setLoading(true)
    try {
      const params = new URLSearchParams()
      if (selectedCategory !== "All Categories") {
        params.set("category", selectedCategory)
      }
      if (selectedLocation !== "All Locations") {
        params.set("location", selectedLocation)
      }

      const response = await fetch(`/api/jobs?${params.toString()}`)
      const data = await response.json()
      setJobs(data.jobs || [])
    } catch (error) {
      console.error("Failed to fetch jobs:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    fetchJobs()
  }

  const filteredJobs = jobs.filter((job) => {
    if (!searchQuery) return true
    const query = searchQuery.toLowerCase()
    return (
      job.title.toLowerCase().includes(query) ||
      job.company.toLowerCase().includes(query) ||
      job.description?.toLowerCase().includes(query)
    )
  })

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      "Investment Banking": "bg-blue-100 text-blue-800",
      "Private Equity": "bg-purple-100 text-purple-800",
      "Hedge Fund": "bg-green-100 text-green-800",
      "Asset Management": "bg-amber-100 text-amber-800",
      "Equity Research": "bg-cyan-100 text-cyan-800",
      "Sales & Trading": "bg-red-100 text-red-800",
      "Venture Capital": "bg-pink-100 text-pink-800",
      "Risk Management": "bg-orange-100 text-orange-800",
      "Corporate Finance": "bg-indigo-100 text-indigo-800",
      "Finance": "bg-navy/10 text-navy",
    }
    return colors[category] || "bg-gray-100 text-gray-800"
  }

  return (
    <div>
      {/* Search and Filters */}
      <div className="mb-8">
        {/* Search Bar */}
        <form onSubmit={handleSearch} className="relative mb-4">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search jobs & internships by title, company, or keyword..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-xl border border-gray-200 bg-white py-4 pl-12 pr-4 text-sm shadow-sm transition-shadow focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
          />
        </form>

        {/* Filter Toggle (Mobile) */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="mb-4 flex w-full items-center justify-between rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-navy md:hidden"
        >
          <span className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            Filters
          </span>
          <ChevronDown className={`h-4 w-4 transition-transform ${showFilters ? "rotate-180" : ""}`} />
        </button>

        {/* Filters */}
        <div className={`grid gap-4 md:grid-cols-2 ${showFilters ? "block" : "hidden md:grid"}`}>
          {/* Category Filter */}
          <div className="relative">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full appearance-none rounded-lg border border-gray-200 bg-white px-4 py-3 pr-10 text-sm text-navy shadow-sm focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
            >
              {FINANCE_CATEGORIES.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          </div>

          {/* Location Filter */}
          <div className="relative">
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="w-full appearance-none rounded-lg border border-gray-200 bg-white px-4 py-3 pr-10 text-sm text-navy shadow-sm focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
            >
              {LOCATIONS.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        {/* Active Filters */}
        {(selectedCategory !== "All Categories" || selectedLocation !== "All Locations") && (
          <div className="mt-4 flex flex-wrap gap-2">
            {selectedCategory !== "All Categories" && (
              <button
                onClick={() => setSelectedCategory("All Categories")}
                className="inline-flex items-center gap-1 rounded-full bg-navy/10 px-3 py-1 text-xs font-medium text-navy"
              >
                {selectedCategory}
                <span className="ml-1">×</span>
              </button>
            )}
            {selectedLocation !== "All Locations" && (
              <button
                onClick={() => setSelectedLocation("All Locations")}
                className="inline-flex items-center gap-1 rounded-full bg-navy/10 px-3 py-1 text-xs font-medium text-navy"
              >
                {selectedLocation}
                <span className="ml-1">×</span>
              </button>
            )}
          </div>
        )}
      </div>

      {/* Results Count */}
      <div className="mb-6 flex items-center justify-between">
        <p className="text-sm text-gray-600">
          {loading ? "Loading opportunities..." : `${filteredJobs.length} opportunities found`}
        </p>
      </div>

      {/* Job Listings */}
      {loading ? (
        <div className="flex items-center justify-center py-20">
          <Loader2 className="h-8 w-8 animate-spin text-gold" />
        </div>
      ) : filteredJobs.length === 0 ? (
        <div className="rounded-xl border border-gray-200 bg-white py-16 text-center">
          <p className="text-gray-600">No jobs found matching your criteria.</p>
          <button
            onClick={() => {
              setSelectedCategory("All Categories")
              setSelectedLocation("All Locations")
              setSearchQuery("")
            }}
            className="mt-4 text-sm font-medium text-gold hover:underline"
          >
            Clear all filters
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredJobs.map((job) => (
            <article
              key={job.id}
              className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-gold/30 hover:shadow-md"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex-grow">
                  {/* Category Badge */}
                  <span className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${getCategoryColor(job.category)}`}>
                    {job.category}
                  </span>

                  {/* Job Title */}
                  <h3 className="mt-3 text-lg font-semibold text-navy group-hover:text-gold transition-colors">
                    {job.title}
                  </h3>

                  {/* Company & Location */}
                  <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1.5">
                      <Building2 className="h-4 w-4" />
                      {job.company}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-4 w-4" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-4 w-4" />
                      {job.posted}
                    </span>
                  </div>

                  {/* Description */}
                  {job.description && (
                    <p className="mt-3 text-sm text-gray-600 line-clamp-2">{job.description}</p>
                  )}

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    <span className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700">
                      {job.type}
                    </span>
                    {job.salary && (
                      <span className="rounded-md bg-green-50 px-2.5 py-1 text-xs font-medium text-green-700">
                        {job.salary}
                      </span>
                    )}
                  </div>
                </div>

                {/* Apply Button */}
                <div className="flex-shrink-0">
                  <a
                    href={job.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-navy px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-charcoal"
                  >
                    Apply
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* Results Info */}
      {filteredJobs.length > 0 && (
        <div className="mt-8 rounded-lg bg-navy/5 p-4 text-center">
          <p className="text-sm text-gray-600">
            <span className="font-medium text-navy">{filteredJobs.length} opportunities</span> matching your criteria. 
            Jobs are sourced from top finance employers across the US.
          </p>
        </div>
      )}
    </div>
  )
}

