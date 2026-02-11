import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { playbooks } from "@/lib/data"
import { Check, ArrowRight, BookOpen, Lock, Star, Shield, Sparkles, TrendingUp, Target, Mic, Wrench, Building2, CreditCard, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "Finance Recruiting Playbooks | Wall Street Playbook",
  description:
    "Premium guides for IB, PE, and hedge fund recruiting. Technical interview frameworks, PE recruiting intel, networking systems, and LBO modeling — built from real placement data.",
  openGraph: {
    title: "Finance Recruiting Playbooks | Wall Street Playbook",
    description:
      "Premium guides for IB, PE, and hedge fund recruiting. Technical interview frameworks, PE recruiting intel, networking systems, and LBO modeling — built from real placement data.",
    url: "https://wallstreetplaybook.org/playbooks",
  },
  alternates: {
    canonical: "https://wallstreetplaybook.org/playbooks",
  },
}

// Playbooks that are live and purchasable
const livePlaybookSlugs = ["ib-technical-guide", "pe-recruiting-playbook", "networking-cold-email-playbook"]

// Upcoming playbooks with descriptions
const upcomingPlaybooks = [
  {
    title: "LBO Modeling Crash Course",
    description: "Build full LBO models from scratch. Includes Excel templates used in actual PE interviews.",
    price: 127,
    icon: TrendingUp,
  },
  {
    title: "Stock Pitch Template & Examples",
    description: "The exact framework top hedge funds want, plus 5 fully-written example pitches.",
    price: 77,
    icon: Target,
  },
  {
    title: "Walk Me Through Your Resume Playbook",
    description: "Transform your background into a compelling 2-minute narrative. 30+ real examples.",
    price: 57,
    icon: Mic,
  },
  {
    title: "Restructuring & Distressed Debt Guide",
    description: "Chapter 11 mechanics, distressed valuation, and RX-specific interview frameworks.",
    price: 97,
    icon: Wrench,
  },
  {
    title: "Real Estate PE Modeling Guide",
    description: "Property-level cash flows, GP/LP waterfalls, and sector-specific REPE knowledge.",
    price: 127,
    icon: Building2,
  },
  {
    title: "Private Credit & Direct Lending Playbook",
    description: "Credit analysis frameworks, memo writing, and downside-focused thinking for Ares, Golub, Owl Rock.",
    price: 97,
    icon: CreditCard,
  },
  {
    title: "The Superday Survival Guide",
    description: "Hour-by-hour playbook for the 48 hours before, during, and after your Superday.",
    price: 47,
    icon: Zap,
  },
]

export default function PlaybooksPage() {
  const livePlaybooks = playbooks.filter((p) => livePlaybookSlugs.includes(p.slug))

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero */}
        <section className="relative bg-navy py-16 lg:py-24 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,_rgba(201,168,110,0.15),_transparent)]" />
          </div>

          <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 mb-6">
              <BookOpen className="w-4 h-4 text-gold" />
              <span className="text-xs font-semibold uppercase tracking-widest text-gold">
                Premium Guides
              </span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Wall Street <span className="text-gradient-gold">Playbooks</span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-white/60 max-w-2xl mx-auto">
              Tactical guides built from real recruiting data — not recycled forum advice.
              Each playbook is a focused system designed to give you an unfair advantage
              in finance recruiting.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-white/50">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-gold" />
                30-day money-back guarantee
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-gold" />
                Instant PDF download
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-gold" />
                Lifetime updates included
              </div>
            </div>
          </div>
        </section>

        {/* Live Playbooks */}
        <section className="bg-off-white py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-12">
              <h2 className="text-2xl font-bold text-navy sm:text-3xl">Available Now</h2>
              <div className="mt-2 mx-auto h-1 w-12 bg-gold" />
            </div>

            <div className="mx-auto max-w-6xl grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {livePlaybooks.map((playbook) => (
                <Link
                  key={playbook.slug}
                  href={`/playbooks/${playbook.slug}`}
                  className="group relative rounded-2xl border border-border bg-white shadow-sm hover:shadow-xl hover:border-gold/40 transition-all duration-300 overflow-hidden flex flex-col"
                >
                  {/* Top accent */}
                  <div className="h-1.5 bg-gradient-to-r from-gold via-gold/80 to-gold/50" />

                  <div className="p-6 sm:p-8 flex-1 flex flex-col">
                    {/* Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 border border-green-200 px-3 py-1 text-xs font-semibold text-green-700">
                        <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                        Available Now
                      </span>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
                        ))}
                      </div>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-xl font-bold text-navy group-hover:text-gold transition-colors">
                      {playbook.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-charcoal/60 flex-1">
                      {playbook.description}
                    </p>

                    {/* Contents preview */}
                    <div className="mt-5 space-y-2">
                      {playbook.contents.slice(0, 4).map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                          <span className="text-xs text-charcoal/70">{item}</span>
                        </div>
                      ))}
                      {playbook.contents.length > 4 && (
                        <p className="text-xs text-charcoal/40 pl-6">
                          + {playbook.contents.length - 4} more sections
                        </p>
                      )}
                    </div>

                    {/* Footer */}
                    <div className="mt-6 pt-5 border-t border-border flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-navy">${playbook.price}</span>
                        <span className="text-sm text-charcoal/50 ml-1.5">one-time</span>
                      </div>
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-gold group-hover:gap-3 transition-all">
                        View Playbook
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Playbooks */}
        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-12">
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 mb-4">
                <Sparkles className="w-4 h-4 text-gold" />
                <span className="text-xs font-semibold uppercase tracking-widest text-gold">
                  More Coming
                </span>
              </div>
              <h2 className="text-2xl font-bold text-navy sm:text-3xl">Coming Soon</h2>
              <p className="mt-3 text-charcoal/60 text-sm max-w-lg mx-auto">
                The most comprehensive library of finance recruiting playbooks. New guides ship regularly — 
                join our email list to get notified at launch.
              </p>
            </div>

            <div className="mx-auto max-w-6xl grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {upcomingPlaybooks.map((playbook) => (
                <div
                  key={playbook.title}
                  className="relative rounded-xl border border-border/60 bg-off-white/50 p-5 transition-all hover:border-gold/30 hover:shadow-sm"
                >
                  {/* Coming soon badge */}
                  <div className="absolute top-3 right-3">
                    <span className="inline-flex items-center gap-1 rounded-full bg-gold/10 px-2 py-0.5 text-[10px] font-semibold text-gold">
                      <Lock className="h-2.5 w-2.5" />
                      Soon
                    </span>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy/5 mb-3">
                    <playbook.icon className="h-5 w-5 text-gold" />
                  </div>

                  <h3 className="text-sm font-bold text-navy leading-tight pr-12">
                    {playbook.title}
                  </h3>
                  <p className="mt-2 text-xs text-charcoal/50 leading-relaxed">
                    {playbook.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-border/40">
                    <span className="text-sm font-bold text-navy">${playbook.price}</span>
                    <span className="text-xs text-charcoal/40 ml-1">at launch</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bundle Teaser */}
        <section className="bg-navy py-16">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Need more than one?
            </h2>
            <p className="mt-4 text-white/60 text-base max-w-xl mx-auto">
              As we release more playbooks, bundles with significant discounts will become available.
              Start with the guide that matches your immediate recruiting timeline.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
              <Link
                href="/playbooks/pe-recruiting-playbook"
                className="inline-flex items-center gap-2 rounded-xl bg-gold px-6 py-3.5 text-sm font-semibold text-navy hover:bg-white transition-colors"
              >
                PE Recruiting Playbook — $97
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/playbooks/ib-technical-guide"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Finance Technical Guide — $127
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/playbooks/networking-cold-email-playbook"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Networking Playbook — $67
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
