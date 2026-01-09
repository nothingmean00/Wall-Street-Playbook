import type { Metadata } from "next"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { PlaybookCard } from "@/components/playbooks/playbook-card"
import { playbooks } from "@/lib/data"
import { ArrowRight, BookOpen, Shield, Zap, Sparkles } from "lucide-react"
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
      <main className="flex-grow pt-0">
        {/* Page Header */}
        <section className="relative bg-navy-deep pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
          {/* Background effects */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-navy-deep via-navy to-navy-deep" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,_rgba(201,168,110,0.15),_transparent)]" />
            <div 
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 30h60M30 0v60' stroke='%23C9A86E' stroke-width='0.5' fill='none'/%3E%3C/svg%3E")`,
              }}
            />
          </div>
          
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 mb-6">
                <Sparkles className="w-4 h-4 text-gold" />
                <span className="text-xs font-semibold uppercase tracking-widest text-gold">Premium Resources</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Tactical <span className="text-gradient-gold">Playbooks</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-white/60">
                Tactical preparation guides for IB, PE, and hedge fund recruiting. Technical questions, networking
                scripts, and interview frameworks.
              </p>

              {/* Value props */}
              <div className="mt-12 flex flex-wrap justify-center gap-8">
                <div className="flex items-center gap-2.5 text-white/70">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gold/10">
                    <BookOpen className="h-4 w-4 text-gold" />
                  </div>
                  <span className="text-sm font-medium">Instant PDF Download</span>
                </div>
                <div className="flex items-center gap-2.5 text-white/70">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gold/10">
                    <Zap className="h-4 w-4 text-gold" />
                  </div>
                  <span className="text-sm font-medium">Lifetime Updates</span>
                </div>
                <div className="flex items-center gap-2.5 text-white/70">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gold/10">
                    <Shield className="h-4 w-4 text-gold" />
                  </div>
                  <span className="text-sm font-medium">Money-Back Guarantee</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-cream to-transparent" />
        </section>

        {/* Bundle Offer */}
        <section className="relative -mt-10 z-10 mx-auto max-w-4xl px-6 lg:px-8">
          <div className="rounded-2xl bg-gradient-to-r from-gold via-gold-light to-gold p-px shadow-xl shadow-gold/20">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row rounded-2xl bg-navy px-8 py-6">
              <div className="text-center sm:text-left">
                <p className="text-lg font-bold text-white">Complete Bundle: All 10 Playbooks</p>
                <p className="text-sm text-white/60 mt-1">
                  <span className="line-through text-white/40">${totalValue}</span>
                  <span className="ml-2 text-2xl font-bold text-gold">${bundlePrice}</span>
                  <span className="ml-2 text-gold font-medium">— Save 30%</span>
                </p>
              </div>
              <button className="group rounded-xl bg-gold px-8 py-3.5 text-base font-semibold text-navy transition-all hover:bg-white hover:shadow-lg">
                Get the Bundle
              </button>
            </div>
          </div>
        </section>

        {/* Playbooks Grid */}
        <section className="bg-cream py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {playbooks.map((playbook, index) => (
                <PlaybookCard key={playbook.slug} playbook={playbook} isBestseller={index === 0} />
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="relative bg-navy py-20 lg:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,168,110,0.1),_transparent_70%)]" />
          <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
            <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">Not Sure Where to Start?</h2>
            <p className="mt-4 text-base sm:text-lg text-white/60">
              Most candidates begin with the Investment Banking Technical Guide. It covers the core concepts tested
              across all finance interviews.
            </p>
            <Link
              href="/playbooks/ib-technical-guide"
              className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-gold px-8 py-4 text-base font-semibold text-navy transition-all hover:bg-white hover:shadow-lg hover:shadow-gold/20"
            >
              Start with the Technical Guide
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
