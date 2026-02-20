"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight, Building2, MapPin, Briefcase, ExternalLink } from "lucide-react"

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

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  "Investment Banking": { bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-200" },
  "Private Equity": { bg: "bg-violet-50", text: "text-violet-700", border: "border-violet-200" },
  "Hedge Fund": { bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-200" },
  "Asset Management": { bg: "bg-amber-50", text: "text-amber-700", border: "border-amber-200" },
  "Equity Research": { bg: "bg-cyan-50", text: "text-cyan-700", border: "border-cyan-200" },
  "Sales & Trading": { bg: "bg-rose-50", text: "text-rose-700", border: "border-rose-200" },
  "Venture Capital": { bg: "bg-pink-50", text: "text-pink-700", border: "border-pink-200" },
  "Risk Management": { bg: "bg-orange-50", text: "text-orange-700", border: "border-orange-200" },
  "Corporate Finance": { bg: "bg-indigo-50", text: "text-indigo-700", border: "border-indigo-200" },
  Finance: { bg: "bg-navy/5", text: "text-navy", border: "border-navy/20" },
}

function CompanyLogo({ logo, company }: { logo?: string; company: string }) {
  const [imgError, setImgError] = useState(false)

  if (!logo || imgError) {
    return (
      <div className="flex-shrink-0">
        <div className="h-14 w-14 rounded-xl bg-navy/5 flex items-center justify-center">
          <Building2 className="h-6 w-6 text-navy/40" />
        </div>
      </div>
    )
  }

  return (
    <div className="flex-shrink-0">
      <div className="h-14 w-14 rounded-xl bg-gray-50 p-2 flex items-center justify-center overflow-hidden">
        <img
          src={logo}
          alt={`${company} logo`}
          className="h-full w-full object-contain"
          onError={() => setImgError(true)}
        />
      </div>
    </div>
  )
}

export function JobsPreview() {
  const [jobs, setJobs] = useState<Job[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchJobs() {
      try {
        const response = await fetch("/api/jobs")
        const data = await response.json()
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
      <section className="relative bg-cream py-16 sm:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(201,168,110,0.08),_transparent_70%)]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-gold mb-4">Career Opportunities</p>
              <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">Latest Opportunities</h2>
              <p className="mt-2 text-base text-charcoal/60">
                Fresh job listings from top finance employers.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="animate-pulse rounded-2xl border border-gray-200 bg-white p-6">
                <div className="flex items-start gap-4">
                  <div className="h-14 w-14 bg-gray-100 rounded-xl" />
                  <div className="flex-1">
                    <div className="h-4 w-20 bg-gray-100 rounded mb-3" />
                    <div className="h-5 w-3/4 bg-gray-100 rounded mb-2" />
                    <div className="h-4 w-1/2 bg-gray-100 rounded" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (jobs.length === 0) return null

  return (
    <section className="relative bg-cream py-16 sm:py-24 lg:py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(201,168,110,0.08),_transparent_70%)]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-gold to-transparent" />
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-gold mb-4">Career Opportunities</p>
            <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-5xl">
              Latest <span className="text-gradient-gold">Opportunities</span>
            </h2>
            <p className="mt-2 text-base sm:text-lg text-charcoal/60">
              Fresh job listings from top finance employers.
            </p>
          </div>
          <Link
            href="/jobs"
            className="group flex items-center gap-2 text-sm font-semibold text-navy hover:text-gold transition-colors"
          >
            View All Jobs
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Job Cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {jobs.map((job, index) => {
            const colors = categoryColors[job.category] || categoryColors.Finance
            
            return (
              <a
                key={job.id}
                href={job.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-start gap-3 sm:gap-5 rounded-2xl bg-white p-4 sm:p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-transparent hover:border-gold/20"
              >
                {/* Company Logo */}
                <CompanyLogo logo={job.companyLogo} company={job.company} />

                <div className="flex-grow min-w-0">
                  {/* Category & Type */}
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className={`inline-block rounded-lg px-2.5 py-1 text-xs font-semibold ${colors.bg} ${colors.text}`}>
                      {job.category}
                    </span>
                    <span className="text-xs text-charcoal/50 flex items-center gap-1">
                      <Briefcase className="h-3 w-3" />
                      {job.type}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-navy line-clamp-1 group-hover:text-gold transition-colors">
                    {job.title}
                  </h3>

                  {/* Company & Location */}
                  <div className="mt-1 flex flex-wrap items-center gap-3 text-sm text-charcoal/60">
                    <span className="font-medium">{job.company}</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" />
                      {job.location}
                    </span>
                  </div>

                  {/* Salary if available */}
                  {job.salary && (
                    <span className="mt-3 inline-block rounded-lg bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                      {job.salary}
                    </span>
                  )}
                </div>

                {/* Arrow */}
                <ExternalLink className="h-5 w-5 text-charcoal/30 group-hover:text-gold transition-colors flex-shrink-0 mt-1" />
                
                {/* Hover border glow */}
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-navy/5 group-hover:ring-gold/30 transition-all" />
              </a>
            )
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/jobs"
            className="group inline-flex items-center gap-2 rounded-xl bg-navy px-8 py-4 text-base font-semibold text-white transition-all hover:bg-gold hover:text-navy hover:shadow-lg"
          >
            Browse All Jobs & Internships
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
