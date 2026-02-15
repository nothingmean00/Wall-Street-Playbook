"use client"

import { useState, useEffect, useMemo } from "react"
import {
  Search,
  MapPin,
  Building2,
  Clock,
  ExternalLink,
  Filter,
  ChevronDown,
  Loader2,
  Briefcase,
  GraduationCap,
  DollarSign,
  X,
  SlidersHorizontal,
} from "lucide-react"

interface Job {
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

interface FilterMeta {
  cities: { name: string; count: number }[]
  types: { name: string; count: number }[]
  categories: { name: string; count: number }[]
}

interface JobBoardProps {
  initialJobs?: Job[]
  initialFilters?: FilterMeta
  initialTotal?: number
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

export function JobBoard({ initialJobs, initialFilters, initialTotal }: JobBoardProps) {
  const [allJobs, setAllJobs] = useState<Job[]>(initialJobs || [])
  const [loading, setLoading] = useState(!initialJobs || initialJobs.length === 0)
  const [filterMeta, setFilterMeta] = useState<FilterMeta | null>(initialFilters || null)
  const [totalJobs, setTotalJobs] = useState(initialTotal || initialJobs?.length || 0)

  // Filters
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState<"all" | "fulltime" | "internship">("all")
  const [selectedCategory, setSelectedCategory] = useState("")
  const [selectedCity, setSelectedCity] = useState("")
  const [sortBy, setSortBy] = useState<"newest" | "salary">("newest")
  const [showMobileFilters, setShowMobileFilters] = useState(false)

  // Only fetch client-side if we didn't get server-rendered data
  useEffect(() => {
    if (!initialJobs || initialJobs.length === 0) {
      fetchJobs()
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const fetchJobs = async () => {
    setLoading(true)
    try {
      const response = await fetch("/api/jobs")
      const data = await response.json()
      setAllJobs(data.jobs || [])
      setFilterMeta(data.filters || null)
      setTotalJobs(data.total || 0)
    } catch (error) {
      console.error("Failed to fetch jobs:", error)
    } finally {
      setLoading(false)
    }
  }

  // Client-side filtering — all done in memory, no extra API calls
  const filteredJobs = useMemo(() => {
    let jobs = allJobs

    // Tab filter
    if (activeTab === "fulltime") {
      jobs = jobs.filter((j) => j.type !== "Internship")
    } else if (activeTab === "internship") {
      jobs = jobs.filter((j) => j.type === "Internship")
    }

    // Category filter
    if (selectedCategory) {
      jobs = jobs.filter((j) => j.category === selectedCategory)
    }

    // City filter
    if (selectedCity) {
      if (selectedCity.toLowerCase() === "remote") {
        jobs = jobs.filter((j) => j.location.toLowerCase().includes("remote"))
      } else {
        jobs = jobs.filter((j) => j.location.toLowerCase().includes(selectedCity.toLowerCase()))
      }
    }

    // Search filter
    if (searchQuery) {
      const q = searchQuery.toLowerCase()
      jobs = jobs.filter(
        (j) =>
          j.title.toLowerCase().includes(q) ||
          j.company.toLowerCase().includes(q) ||
          j.location.toLowerCase().includes(q) ||
          j.description?.toLowerCase().includes(q)
      )
    }

    // Sort
    if (sortBy === "salary") {
      jobs = [...jobs].sort((a, b) => {
        const sa = parseSalaryNum(a.salary)
        const sb = parseSalaryNum(b.salary)
        return sb - sa
      })
    }
    // "newest" is already default order from API

    return jobs
  }, [allJobs, activeTab, selectedCategory, selectedCity, searchQuery, sortBy])

  const activeFilterCount =
    (selectedCategory ? 1 : 0) +
    (selectedCity ? 1 : 0) +
    (activeTab !== "all" ? 1 : 0)

  const clearAllFilters = () => {
    setActiveTab("all")
    setSelectedCategory("")
    setSelectedCity("")
    setSearchQuery("")
    setSortBy("newest")
  }

  // Stats
  const internshipCount = allJobs.filter((j) => j.type === "Internship").length
  const fulltimeCount = allJobs.filter((j) => j.type !== "Internship").length

  return (
    <div>
      {/* ---------------------------------------------------------------- */}
      {/* Tabs: All / Full-Time / Internships & Summer Programs           */}
      {/* ---------------------------------------------------------------- */}
      <div className="mb-6 flex items-center gap-1 rounded-xl bg-white p-1.5 shadow-sm border border-gray-200">
        <TabButton
          active={activeTab === "all"}
          onClick={() => setActiveTab("all")}
          icon={<Briefcase className="h-4 w-4" />}
          label="All Jobs"
          count={allJobs.length}
        />
        <TabButton
          active={activeTab === "fulltime"}
          onClick={() => setActiveTab("fulltime")}
          icon={<Building2 className="h-4 w-4" />}
          label="Full-Time"
          count={fulltimeCount}
        />
        <TabButton
          active={activeTab === "internship"}
          onClick={() => setActiveTab("internship")}
          icon={<GraduationCap className="h-4 w-4" />}
          label="Internships & Summer"
          count={internshipCount}
        />
      </div>

      {/* ---------------------------------------------------------------- */}
      {/* Search Bar                                                      */}
      {/* ---------------------------------------------------------------- */}
      <div className="relative mb-4">
        <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search by title, company, city, or keyword..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full rounded-xl border border-gray-200 bg-white py-3.5 pl-12 pr-4 text-sm shadow-sm transition-all focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* ---------------------------------------------------------------- */}
      {/* Filters Row                                                     */}
      {/* ---------------------------------------------------------------- */}
      {/* Mobile toggle */}
      <button
        onClick={() => setShowMobileFilters(!showMobileFilters)}
        className="mb-4 flex w-full items-center justify-between rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-navy md:hidden"
      >
        <span className="flex items-center gap-2">
          <SlidersHorizontal className="h-4 w-4" />
          Filters
          {activeFilterCount > 0 && (
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold text-[10px] font-bold text-navy">
              {activeFilterCount}
            </span>
          )}
        </span>
        <ChevronDown className={`h-4 w-4 transition-transform ${showMobileFilters ? "rotate-180" : ""}`} />
      </button>

      {/* Desktop always visible, mobile toggleable */}
      <div className={`mb-6 grid gap-3 md:grid-cols-3 ${showMobileFilters ? "grid" : "hidden md:grid"}`}>
        {/* Category */}
        <div className="relative">
          <Filter className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full appearance-none rounded-xl border border-gray-200 bg-white py-3 pl-10 pr-10 text-sm text-navy shadow-sm focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
          >
            <option value="">All Categories</option>
            {(filterMeta?.categories || [])
              .filter((c) => c.count > 0)
              .map((c) => (
                <option key={c.name} value={c.name}>
                  {c.name} ({c.count})
                </option>
              ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
        </div>

        {/* City */}
        <div className="relative">
          <MapPin className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            className="w-full appearance-none rounded-xl border border-gray-200 bg-white py-3 pl-10 pr-10 text-sm text-navy shadow-sm focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
          >
            <option value="">All Cities</option>
            {(filterMeta?.cities || []).map((c) => (
              <option key={c.name} value={c.name}>
                {c.name} ({c.count})
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
        </div>

        {/* Sort */}
        <div className="relative">
          <DollarSign className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as "newest" | "salary")}
            className="w-full appearance-none rounded-xl border border-gray-200 bg-white py-3 pl-10 pr-10 text-sm text-navy shadow-sm focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
          >
            <option value="newest">Sort: Newest First</option>
            <option value="salary">Sort: Highest Salary</option>
          </select>
          <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
        </div>
      </div>

      {/* ---------------------------------------------------------------- */}
      {/* Active Filter Chips                                             */}
      {/* ---------------------------------------------------------------- */}
      {activeFilterCount > 0 && (
        <div className="mb-6 flex flex-wrap items-center gap-2">
          {activeTab !== "all" && (
            <Chip
              label={activeTab === "fulltime" ? "Full-Time" : "Internships & Summer"}
              onRemove={() => setActiveTab("all")}
            />
          )}
          {selectedCategory && (
            <Chip label={selectedCategory} onRemove={() => setSelectedCategory("")} />
          )}
          {selectedCity && (
            <Chip label={selectedCity} onRemove={() => setSelectedCity("")} />
          )}
          <button
            onClick={clearAllFilters}
            className="text-xs font-medium text-gray-500 hover:text-navy transition-colors underline decoration-dashed underline-offset-2"
          >
            Clear all
          </button>
        </div>
      )}

      {/* ---------------------------------------------------------------- */}
      {/* Results Summary                                                 */}
      {/* ---------------------------------------------------------------- */}
      <div className="mb-6 flex items-center justify-between">
        <p className="text-sm text-gray-600">
          {loading ? (
            "Loading opportunities..."
          ) : (
            <>
              <span className="font-semibold text-navy">{filteredJobs.length}</span>
              {filteredJobs.length !== totalJobs && (
                <span> of {totalJobs}</span>
              )}{" "}
              opportunities
            </>
          )}
        </p>
        {!loading && filteredJobs.length > 0 && (
          <p className="hidden text-xs text-gray-400 sm:block">
            Updated every 12 hours &bull; Real job listings
          </p>
        )}
      </div>

      {/* ---------------------------------------------------------------- */}
      {/* Job Cards                                                       */}
      {/* ---------------------------------------------------------------- */}
      {loading ? (
        <div className="flex flex-col items-center justify-center py-20">
          <Loader2 className="h-8 w-8 animate-spin text-gold" />
          <p className="mt-3 text-sm text-gray-500">Loading finance opportunities...</p>
        </div>
      ) : filteredJobs.length === 0 ? (
        <div className="rounded-2xl border border-gray-200 bg-white py-16 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
            <Search className="h-7 w-7 text-gray-400" />
          </div>
          <h3 className="text-lg font-semibold text-navy">No jobs match your filters</h3>
          <p className="mt-2 text-sm text-gray-500">Try adjusting your search or removing some filters</p>
          <button
            onClick={clearAllFilters}
            className="mt-6 rounded-lg bg-gold px-6 py-2.5 text-sm font-semibold text-navy hover:bg-gold/90 transition-colors"
          >
            Clear all filters
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          {filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      )}

      {/* ---------------------------------------------------------------- */}
      {/* Footer Info                                                     */}
      {/* ---------------------------------------------------------------- */}
      {filteredJobs.length > 0 && (
        <div className="mt-8 rounded-2xl bg-gradient-to-r from-navy/5 to-gold/5 border border-navy/10 p-5 text-center">
          <p className="text-sm text-gray-600">
            Showing <span className="font-semibold text-navy">{filteredJobs.length}</span> finance opportunities.
            Jobs are refreshed every 12 hours from top employers across the US.
          </p>
        </div>
      )}
    </div>
  )
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

function TabButton({
  active,
  onClick,
  icon,
  label,
  count,
}: {
  active: boolean
  onClick: () => void
  icon: React.ReactNode
  label: string
  count: number
}) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-1 items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-all ${
        active
          ? "bg-navy text-white shadow-sm"
          : "text-gray-600 hover:bg-gray-50 hover:text-navy"
      }`}
    >
      {icon}
      <span className="hidden sm:inline">{label}</span>
      <span
        className={`flex h-5 min-w-[20px] items-center justify-center rounded-full px-1.5 text-[10px] font-bold ${
          active ? "bg-gold text-navy" : "bg-gray-200 text-gray-600"
        }`}
      >
        {count}
      </span>
    </button>
  )
}

function Chip({ label, onRemove }: { label: string; onRemove: () => void }) {
  return (
    <button
      onClick={onRemove}
      className="inline-flex items-center gap-1.5 rounded-full bg-navy/10 px-3 py-1.5 text-xs font-medium text-navy transition-colors hover:bg-navy/20"
    >
      {label}
      <X className="h-3 w-3" />
    </button>
  )
}

function JobCard({ job }: { job: Job }) {
  const isInternship = job.type === "Internship"

  return (
    <article
      className={`group relative rounded-2xl border bg-white p-5 shadow-sm transition-all hover:shadow-md ${
        isInternship
          ? "border-purple-200/60 hover:border-purple-300"
          : "border-gray-200 hover:border-gold/40"
      }`}
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex gap-4 flex-grow min-w-0">
          {/* Company Logo */}
          {job.companyLogo ? (
            <div className="flex-shrink-0">
              <img
                src={job.companyLogo}
                alt={`${job.company} logo`}
                className="h-12 w-12 rounded-xl object-contain bg-gray-50 p-1 border border-gray-100"
                onError={(e) => {
                  e.currentTarget.style.display = "none"
                  e.currentTarget.nextElementSibling?.classList.remove("hidden")
                }}
              />
              <div className="hidden h-12 w-12 rounded-xl bg-gradient-to-br from-navy/5 to-gold/5 border border-gray-100 items-center justify-center">
                <Building2 className="h-5 w-5 text-navy/40" />
              </div>
            </div>
          ) : (
            <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-gradient-to-br from-navy/5 to-gold/5 border border-gray-100 flex items-center justify-center">
              <Building2 className="h-5 w-5 text-navy/40" />
            </div>
          )}

          <div className="flex-grow min-w-0">
            {/* Row: Category + Type */}
            <div className="flex flex-wrap items-center gap-2">
              <span className={`inline-block rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${getCategoryColor(job.category)}`}>
                {job.category}
              </span>
              <span
                className={`inline-block rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${
                  isInternship
                    ? "bg-purple-100 text-purple-700"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {job.type}
              </span>
            </div>

            {/* Title */}
            <h3 className="mt-2 text-base font-bold text-navy leading-snug group-hover:text-gold transition-colors line-clamp-1">
              {job.title}
            </h3>

            {/* Meta row */}
            <div className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <Building2 className="h-3.5 w-3.5" />
                {job.companyWebsite ? (
                  <a
                    href={job.companyWebsite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-gray-700 hover:text-gold transition-colors"
                  >
                    {job.company}
                  </a>
                ) : (
                  <span className="font-medium text-gray-700">{job.company}</span>
                )}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5" />
                {job.location}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                {job.posted}
              </span>
              {job.salary && (
                <span className="flex items-center gap-1 font-medium text-green-700">
                  <DollarSign className="h-3.5 w-3.5" />
                  {job.salary}
                </span>
              )}
            </div>

            {/* Description */}
            {job.description && (
              <p className="mt-2 text-sm text-gray-500 line-clamp-2 leading-relaxed">{job.description}</p>
            )}
          </div>
        </div>

        {/* Apply Button */}
        <div className="flex-shrink-0 self-start">
          <a
            href={job.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all ${
              isInternship
                ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700 shadow-sm"
                : "bg-navy text-white hover:bg-charcoal"
            }`}
          >
            Apply
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </article>
  )
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function getCategoryColor(category: string) {
  const colors: Record<string, string> = {
    "Investment Banking": "bg-blue-100 text-blue-800",
    "Private Equity": "bg-purple-100 text-purple-800",
    "Hedge Fund": "bg-emerald-100 text-emerald-800",
    "Asset Management": "bg-amber-100 text-amber-800",
    "Equity Research": "bg-cyan-100 text-cyan-800",
    "Sales & Trading": "bg-red-100 text-red-800",
    "Venture Capital": "bg-pink-100 text-pink-800",
    "Risk Management": "bg-orange-100 text-orange-800",
    "Corporate Finance": "bg-indigo-100 text-indigo-800",
    Finance: "bg-navy/10 text-navy",
  }
  return colors[category] || "bg-gray-100 text-gray-800"
}

function parseSalaryNum(salary?: string): number {
  if (!salary) return 0
  const match = salary.match(/\$?([\d,]+)k?/i)
  if (!match) return 0
  let n = Number(match[1].replace(/,/g, ""))
  if (salary.toLowerCase().includes("k") && n < 1000) n *= 1000
  return n
}
