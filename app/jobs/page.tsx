import type { Metadata } from "next"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { JobBoard } from "@/components/jobs/job-board"
import { getCachedJobs, buildJobPostingSchema } from "@/lib/jobs"
import { Briefcase, Bell, Target, GraduationCap, Building2, TrendingUp } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Finance Jobs & Internships | Investment Banking, PE & Hedge Fund Careers",
  description:
    "Browse finance jobs, internships, and summer analyst programs in investment banking, private equity, hedge funds, and asset management at top US firms. Filter by city, category, and job type.",
  keywords: [
    "investment banking jobs",
    "private equity careers",
    "hedge fund jobs",
    "finance internships",
    "summer analyst programs",
    "wall street careers",
    "M&A analyst jobs",
    "IB summer analyst",
    "PE internship",
    "finance jobs USA",
    "investment banking internship 2026",
    "summer analyst 2026",
  ],
  openGraph: {
    title: "Finance Jobs & Internships | Wall Street Playbook",
    description:
      "Browse jobs, internships, and summer analyst programs in IB, PE, hedge funds, and asset management. Filter by city and category.",
    url: "https://wallstreetplaybook.org/jobs",
    type: "website",
    images: [{ url: "https://wallstreetplaybook.org/og-jobs.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Finance Jobs & Internships | Wall Street Playbook",
    description:
      "Browse jobs, internships, and summer analyst programs in IB, PE, hedge funds, and asset management.",
    images: ["https://wallstreetplaybook.org/og-jobs.jpg"],
  },
  alternates: {
    canonical: "https://wallstreetplaybook.org/jobs",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large" as const,
    "max-video-preview": -1,
  },
}

// Revalidate every 6 hours to keep SSR content fresh
export const revalidate = 21600

export default async function JobsPage() {
  // Fetch jobs server-side from DB cache — crawlers see real content
  const cached = await getCachedJobs()
  const jobs = cached?.jobs || []
  const filters = cached?.filters || undefined
  const total = cached?.total || 0

  // Build structured data
  const jobPostingSchemas = jobs.length > 0 ? buildJobPostingSchema(jobs) : []

  // Page-level structured data
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Finance Jobs & Internships",
    description:
      "Browse finance jobs, internships, and summer analyst programs in investment banking, private equity, hedge funds, and asset management at top US firms.",
    url: "https://wallstreetplaybook.org/jobs",
    publisher: {
      "@type": "Organization",
      name: "Wall Street Playbook",
      url: "https://wallstreetplaybook.org",
    },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: jobs.length,
      itemListElement: jobs.slice(0, 30).map((job, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: `${job.title} at ${job.company}`,
        url: job.url,
      })),
    },
  }

  const internCount = jobs.filter((j) => j.type === "Internship").length
  const ftCount = jobs.filter((j) => j.type !== "Internship").length

  return (
    <div className="flex min-h-screen flex-col">
      {/* Structured data — page schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      {/* Structured data — individual JobPosting schemas (up to 50) */}
      {jobPostingSchemas.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jobPostingSchemas),
          }}
        />
      )}

      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-navy pt-28 pb-16 lg:pt-32 lg:pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-gold/10 border border-gold/20 px-4 py-2 text-sm font-medium text-gold mb-6">
                <Briefcase className="h-4 w-4" />
                {total > 0 ? `${total} Live Opportunities` : "Live US Opportunities"} &bull; Refreshed Every 12 Hours
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Finance Jobs &{" "}
                <span className="text-gold">Internships</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-white/70 max-w-2xl mx-auto">
                Full-time roles, summer analyst programs, and internships at top Wall Street firms.
                Filter by city, category, and job type to find your next opportunity.
              </p>

              {/* Live stats — server rendered for SEO */}
              {total > 0 && (
                <div className="mt-10 flex flex-wrap justify-center gap-6 sm:gap-10">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-gold">{ftCount}</p>
                    <p className="text-sm text-white/60">Full-Time Roles</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-gold">{internCount}</p>
                    <p className="text-sm text-white/60">Internships & Summer</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-gold">
                      {new Set(jobs.map((j) => j.company)).size}
                    </p>
                    <p className="text-sm text-white/60">Companies Hiring</p>
                  </div>
                </div>
              )}
            </div>

            {/* Category Pills */}
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {[
                { icon: <TrendingUp className="h-3.5 w-3.5" />, label: "Investment Banking" },
                { icon: <Building2 className="h-3.5 w-3.5" />, label: "Private Equity" },
                { icon: <TrendingUp className="h-3.5 w-3.5" />, label: "Hedge Funds" },
                { icon: <GraduationCap className="h-3.5 w-3.5" />, label: "Summer Programs" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2 text-sm text-white/80"
                >
                  {item.icon}
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Value Props Bar */}
        <section className="bg-gradient-to-r from-gold/5 to-gold/10 border-b border-gold/20 py-4">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
              <div className="flex items-center gap-2 text-navy">
                <Target className="h-4 w-4 text-gold" />
                <span className="font-medium">Filter by City & Category</span>
              </div>
              <div className="flex items-center gap-2 text-navy">
                <GraduationCap className="h-4 w-4 text-gold" />
                <span className="font-medium">Summer Analyst Programs</span>
              </div>
              <div className="flex items-center gap-2 text-navy">
                <Bell className="h-4 w-4 text-gold" />
                <span className="font-medium">Updated Daily from Real Employers</span>
              </div>
              <div className="flex items-center gap-2 text-navy">
                <Briefcase className="h-4 w-4 text-gold" />
                <span className="font-medium">IB, PE, HF, VC & More</span>
              </div>
            </div>
          </div>
        </section>

        {/* Job Board — SSR with initial data, hydrates to interactive */}
        <section className="bg-off-white py-10 lg:py-16">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <JobBoard
              initialJobs={jobs}
              initialFilters={filters}
              initialTotal={total}
            />
          </div>
        </section>

        {/* SEO: Hidden server-rendered job list for crawlers
            This ensures Google indexes every job title + company + location
            even if JS doesn't execute */}
        {jobs.length > 0 && (
          <section className="sr-only" aria-label="All finance job listings">
            <h2>All Finance Jobs & Internships</h2>
            <ul>
              {jobs.map((job) => (
                <li key={job.id}>
                  <a href={job.url}>
                    {job.title} at {job.company} — {job.location} ({job.type})
                    {job.salary && ` — ${job.salary}`}
                    {job.description && ` — ${job.description}`}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* CTA Section */}
        <section className="bg-navy py-16">
          <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Ready to Land Your Dream Role?
            </h2>
            <p className="mt-4 text-base text-white/70">
              Prepare for your interviews with our proven playbooks and get your resume reviewed by finance professionals.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/playbooks"
                className="rounded-lg bg-gold px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-white"
              >
                Browse Playbooks
              </Link>
              <Link
                href="/submit-resume?service=resume-review"
                className="rounded-lg border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Resume Services
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
