import type { Metadata } from "next"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { PlaybookCard } from "@/components/playbooks/playbook-card"
import { playbooks } from "@/lib/data"
import { ArrowRight, BookOpen, Shield, Zap } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Premium Finance Interview Playbooks",
  description:
    "Tactical preparation guides for investment banking, private equity, and hedge fund interviews. Technical questions, networking scripts, LBO modeling, and behavioral frameworks.",
  keywords: [
    "investment banking interview guide",
    "PE recruiting playbook",
    "hedge fund interview prep",
    "technical interview questions finance",
    "LBO modeling guide",
    "networking scripts wall street",
  ],
  openGraph: {
    title: "Premium Finance Interview Playbooks | Wall Street Playbook",
    description:
      "Tactical preparation guides for IB, PE, and hedge fund interviews. Technical questions, networking scripts, and behavioral frameworks.",
    url: "https://wallstreetplaybook.org/playbooks",
  },
  alternates: {
    canonical: "https://wallstreetplaybook.org/playbooks",
  },
}

export default function PlaybooksPage() {
  const totalValue = playbooks.reduce((sum, p) => sum + p.price, 0)
  const bundlePrice = Math.round(totalValue * 0.7)

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Page Header */}
        <section className="bg-navy py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-gold">Premium Resources</p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">Playbooks</h1>
              <p className="mt-6 text-lg leading-relaxed text-white/70">
                Tactical preparation guides for IB, PE, and hedge fund recruiting. Technical questions, networking
                scripts, and interview frameworks.
              </p>

              {/* Value props */}
              <div className="mt-12 flex flex-wrap justify-center gap-8">
                <div className="flex items-center gap-2 text-white/80">
                  <BookOpen className="h-5 w-5 text-gold" />
                  <span className="text-sm">Instant PDF Download</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <Zap className="h-5 w-5 text-gold" />
                  <span className="text-sm">Lifetime Updates</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <Shield className="h-5 w-5 text-gold" />
                  <span className="text-sm">Money-Back Guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bundle Offer */}
        <section className="bg-gold py-6">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              <div className="text-center sm:text-left">
                <p className="text-sm font-semibold text-navy">Complete Bundle: All 6 Playbooks</p>
                <p className="text-sm text-navy/70">
                  <span className="line-through">${totalValue}</span> <span className="font-bold">${bundlePrice}</span>{" "}
                  — Save 30%
                </p>
              </div>
              <button className="rounded-lg bg-navy px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-charcoal">
                Get the Bundle
              </button>
            </div>
          </div>
        </section>

        {/* Playbooks Grid */}
        <section className="bg-off-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* Category headers could go here in the future */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {playbooks.map((playbook, index) => (
                <PlaybookCard key={playbook.slug} playbook={playbook} isBestseller={index === 0} />
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-navy py-16">
          <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Not Sure Where to Start?</h2>
            <p className="mt-4 text-base text-white/70">
              Most candidates begin with the Investment Banking Technical Guide. It covers the core concepts tested
              across all finance interviews.
            </p>
            <Link
              href="/playbooks/ib-technical-guide"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-gold px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-white"
            >
              Start with the Technical Guide
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
