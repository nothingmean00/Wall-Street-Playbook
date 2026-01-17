import type { Metadata } from "next"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { JobBoard } from "@/components/jobs/job-board"
import { Briefcase, Bell, Target } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Finance Jobs & Internships | Investment Banking, PE & Hedge Fund Careers",
  description:
    "Browse finance jobs and internships in investment banking, private equity, hedge funds, and asset management. Summer analyst programs, full-time roles, and internships at top US firms.",
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
  ],
  openGraph: {
    title: "Finance Jobs & Internships | Wall Street Playbook",
    description:
      "Browse jobs and internships in investment banking, private equity, hedge funds, and asset management at top US firms.",
    url: "https://wallstreetplaybook.org/jobs",
  },
  alternates: {
    canonical: "https://wallstreetplaybook.org/jobs",
  },
}

export default function JobsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-navy py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-gold/10 px-4 py-2 text-sm font-medium text-gold mb-6">
                <Briefcase className="h-4 w-4" />
                US Opportunities • Updated Daily
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Finance Jobs & Internships
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-white/70 max-w-2xl mx-auto">
                Full-time roles, summer analyst programs, and internships in investment banking, private equity, 
                hedge funds, and asset management at top US firms.
              </p>

              {/* Quick Stats */}
              <div className="mt-10 flex flex-wrap justify-center gap-8">
                <div className="text-center">
                  <p className="text-3xl font-bold text-gold">IB</p>
                  <p className="text-sm text-white/60">Investment Banking</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-gold">PE</p>
                  <p className="text-sm text-white/60">Private Equity</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-gold">HF</p>
                  <p className="text-sm text-white/60">Hedge Funds</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-gold">VC</p>
                  <p className="text-sm text-white/60">Venture Capital</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Value Props Bar */}
        <section className="bg-gold/10 border-y border-gold/20 py-4">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
              <div className="flex items-center gap-2 text-navy">
                <Target className="h-4 w-4 text-gold" />
                <span>Full-Time & Internships</span>
              </div>
              <div className="flex items-center gap-2 text-navy">
                <Bell className="h-4 w-4 text-gold" />
                <span>Summer Analyst Programs</span>
              </div>
              <div className="flex items-center gap-2 text-navy">
                <Briefcase className="h-4 w-4 text-gold" />
                <span>Top US Firms</span>
              </div>
            </div>
          </div>
        </section>

        {/* Job Board */}
        <section className="bg-off-white py-12 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <JobBoard />
          </div>
        </section>

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

