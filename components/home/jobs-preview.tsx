"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight, Building2, MapPin, Briefcase } from "lucide-react"

interface Job {
  id: string
  title: string
  company: string
  companyLogo?: string
  location: string
  type: string
  salary?: string
  category: string
  url: string
}

const categoryColors: Record<string, string> = {
  "Investment Banking": "bg-blue-100 text-blue-800",
  "Private Equity": "bg-purple-100 text-purple-800",
  "Hedge Fund": "bg-green-100 text-green-800",
  "Asset Management": "bg-amber-100 text-amber-800",
  "Equity Research": "bg-cyan-100 text-cyan-800",
  "Sales & Trading": "bg-red-100 text-red-800",
  "Venture Capital": "bg-pink-100 text-pink-800",
  "Risk Management": "bg-orange-100 text-orange-800",
  "Corporate Finance": "bg-indigo-100 text-indigo-800",
  Finance: "bg-navy/10 text-navy",
}

export function JobsPreview() {
  const [jobs, setJobs] = useState<Job[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchJobs() {
      try {
        const response = await fetch("/api/jobs")
        const data = await response.json()
        // Get a mix of job types - prioritize variety
        const allJobs = data.jobs || []
        const internships = allJobs.filter((j: Job) => j.type === "Internship").slice(0, 2)
        const fullTime = allJobs.filter((j: Job) => j.type === "Full-time").slice(0, 2)
        setJobs([...internships, ...fullTime].slice(0, 4))
      } catch (error) {
        console.error("Failed to fetch jobs:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchJobs()
  }, [])

  if (loading) {
    return (
      <section className="bg-off-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-navy sm:text-3xl">Latest Opportunities</h2>
              <p className="mt-2 text-base text-charcoal/70">
                Fresh job listings from top finance employers.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="animate-pulse rounded-xl border border-gray-200 bg-white p-5">
                <div className="h-4 w-20 bg-gray-200 rounded mb-3"></div>
                <div className="h-5 w-3/4 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (jobs.length === 0) return null

  return (
    <section className="bg-off-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-navy sm:text-3xl">Latest Opportunities</h2>
            <p className="mt-2 text-base text-charcoal/70">
              Fresh job listings from top finance employers.
            </p>
          </div>
          <Link
            href="/jobs"
            className="flex items-center gap-2 text-sm font-medium text-navy hover:text-gold transition-colors"
          >
            View All Jobs
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Job Cards */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {jobs.map((job) => (
            <a
              key={job.id}
              href={job.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-5 transition-all hover:border-gold/40 hover:shadow-md"
            >
              {/* Company Logo */}
              {job.companyLogo ? (
                <img
                  src={job.companyLogo}
                  alt={`${job.company} logo`}
                  className="h-12 w-12 rounded-lg object-contain bg-gray-50 p-1 flex-shrink-0"
                  onError={(e) => {
                    e.currentTarget.style.display = "none"
                  }}
                />
              ) : (
                <div className="h-12 w-12 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                  <Building2 className="h-6 w-6 text-gray-400" />
                </div>
              )}

              <div className="flex-grow min-w-0">
                {/* Category & Type */}
                <div className="flex items-center gap-2 mb-1.5">
                  <span
                    className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      categoryColors[job.category] || "bg-navy/10 text-navy"
                    }`}
                  >
                    {job.category}
                  </span>
                  <span className="text-xs text-gray-500 flex items-center gap-1">
                    <Briefcase className="h-3 w-3" />
                    {job.type}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-semibold text-navy line-clamp-1 group-hover:text-gold transition-colors">
                  {job.title}
                </h3>

                {/* Company & Location */}
                <div className="mt-1 flex items-center gap-3 text-sm text-charcoal/70">
                  <span>{job.company}</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {job.location}
                  </span>
                </div>

                {/* Salary if available */}
                {job.salary && (
                  <span className="mt-2 inline-block rounded-md bg-green-50 px-2 py-0.5 text-xs font-medium text-green-700">
                    {job.salary}
                  </span>
                )}
              </div>

              {/* Arrow */}
              <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-gold transition-colors flex-shrink-0 mt-1" />
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <Link
            href="/jobs"
            className="inline-flex items-center gap-2 rounded-lg bg-navy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-charcoal"
          >
            Browse All Jobs & Internships
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

