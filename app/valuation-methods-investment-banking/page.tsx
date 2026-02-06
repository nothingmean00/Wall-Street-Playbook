import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { ArrowRight, CheckCircle, BarChart3, TrendingUp, Layers, DollarSign } from "lucide-react"

export const metadata: Metadata = {
  title: "Valuation Methods in Investment Banking | DCF, Comps, Precedent",
  description:
    "The 3 core valuation methods used in investment banking—DCF, trading comps, and precedent transactions. When to use each, which gives the highest value, and the football field framework.",
  keywords: [
    "valuation methods investment banking",
    "DCF vs comps vs precedent transactions",
    "investment banking valuation",
    "company valuation interview",
    "valuation football field",
    "intrinsic vs relative valuation",
    "IB valuation methods",
    "how to value a company",
  ],
  openGraph: {
    title: "Valuation Methods in Investment Banking | DCF, Comps, Precedent",
    description: "The 3 core valuation methods: DCF, trading comps, and precedent transactions. When to use each and how they compare.",
    url: "https://wallstreetplaybook.org/valuation-methods-investment-banking",
  },
  alternates: {
    canonical: "https://wallstreetplaybook.org/valuation-methods-investment-banking",
  },
}

const valuationMethods = [
  {
    name: "Discounted Cash Flow (DCF)",
    icon: TrendingUp,
    type: "Intrinsic Value",
    description: "Values a company based on the present value of its future free cash flows. The most theoretically rigorous method.",
    pros: ["Based on fundamentals, not market mood", "Capital-structure neutral", "Forward-looking"],
    cons: ["Highly sensitive to assumptions", "Terminal value dominates", "Less useful for unprofitable companies"],
    bestFor: "Mature companies with predictable cash flows",
    link: "/blog/walk-me-through-dcf-perfect-answer",
  },
  {
    name: "Comparable Company Analysis",
    icon: BarChart3,
    type: "Relative Value (Minority)",
    description: "Values a company by comparing it to similar publicly traded companies. Reflects current market pricing and sentiment.",
    pros: ["Market-based, grounded in real prices", "Quick to compute", "Easy to explain"],
    cons: ["No two companies are truly comparable", "Affected by market sentiment", "Reflects minority value only"],
    bestFor: "Quick valuation benchmarks, IPO pricing",
    link: "/blog/trading-comps-vs-precedent-transactions",
  },
  {
    name: "Precedent Transactions",
    icon: Layers,
    type: "Relative Value (Control)",
    description: "Values a company based on what acquirers have paid for similar companies in past M&A deals. Includes control premium.",
    pros: ["Reflects actual prices paid", "Includes control premium", "Most relevant for M&A"],
    cons: ["Data can be stale", "Deal-specific factors distort comparability", "Fewer data points"],
    bestFor: "M&A advisory, sell-side valuations",
    link: "/blog/trading-comps-vs-precedent-transactions",
  },
]

export default function ValuationMethodsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-navy py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gold/10 px-4 py-2">
                <DollarSign className="h-4 w-4 text-gold" />
                <span className="text-sm font-medium text-gold">Valuation Fundamentals</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Valuation Methods in Investment Banking
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-white/70">
                "What are the main valuation methodologies?" is asked in every single IB interview. Here's how each method works, when to use it, and the common interview traps around choosing between them.
              </p>
              <div className="mt-8">
                <Link
                  href="/playbooks/ib-technical-guide"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-gold px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-gold/90"
                >
                  Full Valuation Coverage in the Technical Guide — $127
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* The 3 Methods */}
        <section className="bg-off-white py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-2xl font-bold text-navy text-center">The 3 Core Valuation Methods</h2>
              <div className="mt-3 h-1 w-12 bg-gold mx-auto" />

              <div className="mt-12 space-y-8">
                {valuationMethods.map((method) => (
                  <div key={method.name} className="p-8 bg-white rounded-xl border border-border shadow-sm">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gold/10">
                        <method.icon className="h-6 w-6 text-gold" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold text-navy">{method.name}</h3>
                          <span className="text-xs font-medium px-2 py-1 rounded bg-navy/10 text-navy">{method.type}</span>
                        </div>
                        <p className="text-charcoal/70 mb-4">{method.description}</p>

                        <div className="grid gap-4 sm:grid-cols-3 mb-4">
                          <div>
                            <p className="text-xs font-semibold text-green-600 uppercase mb-2">Strengths</p>
                            {method.pros.map((p) => (
                              <div key={p} className="flex gap-2 items-start mb-1">
                                <CheckCircle className="h-3.5 w-3.5 text-green-500 flex-shrink-0 mt-0.5" />
                                <span className="text-xs text-charcoal/70">{p}</span>
                              </div>
                            ))}
                          </div>
                          <div>
                            <p className="text-xs font-semibold text-red-400 uppercase mb-2">Limitations</p>
                            {method.cons.map((c) => (
                              <div key={c} className="flex gap-2 items-start mb-1">
                                <span className="text-red-400 text-xs flex-shrink-0 mt-0.5">✕</span>
                                <span className="text-xs text-charcoal/70">{c}</span>
                              </div>
                            ))}
                          </div>
                          <div>
                            <p className="text-xs font-semibold text-navy uppercase mb-2">Best For</p>
                            <p className="text-xs text-charcoal/70">{method.bestFor}</p>
                          </div>
                        </div>

                        <Link href={method.link} className="inline-flex items-center gap-1 text-sm font-medium text-gold hover:text-gold/80">
                          Full walkthrough <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* The Football Field */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-2xl font-bold text-navy">The Valuation Football Field</h2>
              <div className="mt-2 h-1 w-12 bg-gold" />
              <p className="mt-4 text-charcoal/80">
                In practice, analysts present all three methodologies side by side in a "football field" chart—horizontal bars showing the valuation range from each approach.
              </p>
              <div className="mt-6 p-6 bg-navy/5 rounded-xl border border-border">
                <p className="text-sm font-semibold text-navy mb-4">Typical Ordering (Highest to Lowest):</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="h-6 bg-gold/30 rounded" style={{width: '85%'}}></div>
                    <span className="text-xs font-medium text-charcoal/70 whitespace-nowrap">Precedent Transactions</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-6 bg-gold/50 rounded" style={{width: '70%'}}></div>
                    <span className="text-xs font-medium text-charcoal/70 whitespace-nowrap">DCF Analysis</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-6 bg-gold/70 rounded" style={{width: '60%'}}></div>
                    <span className="text-xs font-medium text-charcoal/70 whitespace-nowrap">Trading Comps</span>
                  </div>
                </div>
                <p className="mt-4 text-xs text-charcoal/50">Note: This ordering is a general rule of thumb and varies by situation. The overlap zone is the most defensible valuation range.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Interview Questions */}
        <section className="bg-off-white py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-2xl font-bold text-navy">Common Interview Questions</h2>
              <div className="mt-2 h-1 w-12 bg-gold" />
              <div className="mt-8 space-y-6">
                <div className="p-5 bg-white rounded-lg border border-border">
                  <h3 className="font-semibold text-navy">"Which method gives the highest value?"</h3>
                  <p className="mt-2 text-sm text-charcoal/80">Generally: Precedent transactions {'>'} DCF {'>'} Trading comps. Precedent includes control premium. But this varies—in hot markets, comps can exceed transactions.</p>
                </div>
                <div className="p-5 bg-white rounded-lg border border-border">
                  <h3 className="font-semibold text-navy">"If you could only pick one method, which would you choose?"</h3>
                  <p className="mt-2 text-sm text-charcoal/80">DCF—because it's based on the company's intrinsic cash-generating ability, not market sentiment or deal-specific factors. But always cross-check with comps to verify reasonableness.</p>
                </div>
                <div className="p-5 bg-white rounded-lg border border-border">
                  <h3 className="font-semibold text-navy">"When would you NOT use a DCF?"</h3>
                  <p className="mt-2 text-sm text-charcoal/80">Early-stage companies (no predictable cash flows), financial institutions (use DDM), and highly cyclical companies where a single forecast path is misleading.</p>
                </div>
                <div className="p-5 bg-white rounded-lg border border-border">
                  <h3 className="font-semibold text-navy">"Why do precedent transactions include a control premium?"</h3>
                  <p className="mt-2 text-sm text-charcoal/80">Acquirers pay above market price for synergies, strategic control, and competitive bidding dynamics. The premium (typically 20-40%) reflects the value of owning 100% vs. holding a minority stake.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-navy py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold text-white">Master All Valuation Methods</h2>
              <p className="mt-4 text-white/70">
                DCF is Chapter 3. Comps are Chapter 4. M&A (including precedent transactions) is Chapter 5. Plus Accounting, EV/Equity Value, and LBOs. 88 pages covering everything you'll be asked.
              </p>
              <div className="mt-8">
                <Link
                  href="/playbooks/ib-technical-guide"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-gold px-8 py-4 text-sm font-semibold text-navy transition-colors hover:bg-gold/90"
                >
                  Get the Finance Technical Interview Guide — $127
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Related */}
        <section className="bg-off-white py-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h3 className="text-lg font-bold text-navy mb-6">Related Resources</h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Link href="/ib-technical-interview-2026" className="p-4 bg-white rounded-lg border border-border hover:border-gold/50 transition-colors">
                <p className="font-medium text-navy text-sm">Finance Technical Interview 2026</p>
                <p className="text-xs text-charcoal/50 mt-1">All 6 topics overview</p>
              </Link>
              <Link href="/dcf-interview-questions-2026" className="p-4 bg-white rounded-lg border border-border hover:border-gold/50 transition-colors">
                <p className="font-medium text-navy text-sm">DCF Interview Questions</p>
                <p className="text-xs text-charcoal/50 mt-1">6-step framework</p>
              </Link>
              <Link href="/ma-interview-questions-2026" className="p-4 bg-white rounded-lg border border-border hover:border-gold/50 transition-colors">
                <p className="font-medium text-navy text-sm">M&A Interview Questions</p>
                <p className="text-xs text-charcoal/50 mt-1">Accretion/dilution, merger models</p>
              </Link>
              <Link href="/accounting-interview-questions-finance" className="p-4 bg-white rounded-lg border border-border hover:border-gold/50 transition-colors">
                <p className="font-medium text-navy text-sm">Accounting for Finance</p>
                <p className="text-xs text-charcoal/50 mt-1">3-statement mastery</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
