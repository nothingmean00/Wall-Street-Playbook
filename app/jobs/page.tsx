import type { Metadata } from "next"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { JobBoard } from "@/components/jobs/job-board"
import { Briefcase, Bell, Target } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Finance Jobs | Investment Banking, PE & Hedge Fund Careers",
  description:
    "Browse the latest finance jobs in investment banking, private equity, hedge funds, and asset management. Updated daily with opportunities from top firms.",
  keywords: [
    "investment banking jobs",
    "private equity careers",
    "hedge fund jobs",
    "finance jobs",
    "wall street careers",
    "M&A analyst jobs",
    "trading jobs",
    "asset management careers",
  ],
  openGraph: {
    title: "Finance Jobs | Wall Street Playbook",
    description:
      "Browse the latest jobs in investment banking, private equity, hedge funds, and asset management.",
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
                Updated Daily
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Finance Jobs
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-white/70 max-w-2xl mx-auto">
                The latest opportunities in investment banking, private equity, hedge funds, and asset management. 
                Find your next role at a top firm.
              </p>

              {/* Quick Stats */}
              <div className="mt-10 flex flex-wrap justify-center gap-8">
                <div className="text-center">
                  <p className="text-3xl font-bold text-gold">500+</p>
                  <p className="text-sm text-white/60">Active Listings</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-gold">50+</p>
                  <p className="text-sm text-white/60">Top Firms</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-gold">Daily</p>
                  <p className="text-sm text-white/60">Updates</p>
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
                <span>Curated for Finance Careers</span>
              </div>
              <div className="flex items-center gap-2 text-navy">
                <Bell className="h-4 w-4 text-gold" />
                <span>Real-Time Job Alerts</span>
              </div>
              <div className="flex items-center gap-2 text-navy">
                <Briefcase className="h-4 w-4 text-gold" />
                <span>From Top Firms</span>
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
                href="/resume-services"
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

