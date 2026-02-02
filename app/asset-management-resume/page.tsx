import type { Metadata } from "next"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import Link from "next/link"
import { ArrowRight, CheckCircle, FileText, Pencil, Shield, Users, Clock, TrendingUp, PieChart, Target } from "lucide-react"

export const metadata: Metadata = {
  title: "Asset Management Resume Review | Portfolio Manager Resume 2026",
  description:
    "Expert resume review for asset management and portfolio manager roles. Showcase your AUM, returns, and investment process. Stand out for buy-side positions at asset managers and institutional investors.",
  keywords: [
    "asset management resume",
    "portfolio manager resume",
    "buy side resume",
    "investment management resume",
    "asset manager resume review",
    "portfolio manager resume examples",
    "buy side resume 2026",
    "institutional investor resume",
  ],
  openGraph: {
    title: "Asset Management & Portfolio Manager Resume Review | Wall Street Playbook",
    description:
      "Professional resume review for buy-side roles. Highlight your track record, investment process, and AUM effectively.",
    url: "https://wallstreetplaybook.org/asset-management-resume",
  },
  alternates: {
    canonical: "https://wallstreetplaybook.org/asset-management-resume",
  },
}

const whatMatters = [
  {
    title: "Track Record & Returns",
    description: "Quantified performance vs. benchmarks, risk-adjusted returns, and attribution analysis",
  },
  {
    title: "Investment Process",
    description: "Your analytical framework, research methodology, and decision-making approach",
  },
  {
    title: "AUM & Scope",
    description: "Portfolio size, asset classes covered, and investment mandate complexity",
  },
  {
    title: "Technical Depth",
    description: "Bloomberg, FactSet, modeling capabilities, and quantitative skills",
  },
]

const beforeAfterItems = [
  {
    context: "Generic responsibility → Quantified track record",
    before: "Managed equity portfolios and conducted investment research",
    after: "Managed $450M US large-cap equity portfolio, outperforming S&P 500 by 280bps annually over 3-year period with 0.85 beta",
  },
  {
    context: "Vague analysis → Clear investment process",
    before: "Analyzed companies for potential investment opportunities",
    after: "Developed proprietary screening model analyzing 500+ mid-cap companies quarterly, generating 15 high-conviction ideas that drove 40% of portfolio alpha",
  },
  {
    context: "Missing context → Full investment story",
    before: "Participated in investment committee meetings",
    after: "Presented 25+ stock pitches to investment committee, with 18 approved positions generating average return of 23% vs. 12% benchmark",
  },
]

const whoItsFor = [
  "Portfolio managers at mutual funds, ETFs, or separately managed accounts",
  "Research analysts seeking PM or senior analyst roles",
  "Sell-side analysts transitioning to buy-side",
  "CFA charterholders advancing their asset management careers",
  "Hedge fund professionals moving to traditional asset management",
  "MBA candidates targeting asset management rotational programs",
]

const faqs = [
  {
    question: "How do I present performance numbers appropriately?",
    answer:
      "We'll help you present returns in context—showing benchmark-relative performance, risk-adjusted metrics (Sharpe, Sortino), and time periods. Compliance-friendly framing is essential, and we understand the nuances.",
  },
  {
    question: "Should I include my CFA designation?",
    answer:
      "Absolutely—CFA is highly valued in asset management. We'll ensure proper placement and formatting per CFA Institute guidelines. If you're a candidate, we'll appropriately note your progress.",
  },
  {
    question: "I'm transitioning from sell-side. Can you help?",
    answer:
      "Yes. Sell-side to buy-side transitions are common. We'll help you reframe your coverage experience to emphasize investment judgment, idea generation, and analytical depth rather than client service.",
  },
  {
    question: "How do you handle different asset classes?",
    answer:
      "Whether you're in equities, fixed income, alternatives, or multi-asset, we tailor feedback to your specific asset class. The metrics and language differ between a credit analyst and an equity PM.",
  },
]

export default function AssetManagementResumePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-navy-deep pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent" />
          <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-gold/10 px-4 py-2 text-sm font-medium text-gold mb-8">
                <PieChart className="h-4 w-4" />
                Buy-Side Excellence
              </div>

              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Asset Management{" "}
                <span className="text-gold">Resume Review</span>
              </h1>

              <p className="mt-6 text-lg leading-8 text-white/70 max-w-2xl mx-auto">
                Your resume must demonstrate investment acumen, not just experience. Show hiring managers 
                your track record, process, and ability to generate alpha. Get expert feedback from 
                professionals who understand buy-side hiring.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/submit-resume?service=resume-review&role=asset-management"
                  className="group flex items-center gap-2 rounded-xl bg-gold px-8 py-4 text-base font-semibold text-navy hover:bg-white transition-colors"
                >
                  Get Resume Review — $197
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/submit-resume?service=resume-rewrite&role=asset-management"
                  className="rounded-xl border-2 border-white/20 px-8 py-4 text-base font-semibold text-white hover:border-gold hover:text-gold transition-colors"
                >
                  Full Rewrite — $497
                </Link>
              </div>

              <p className="mt-6 text-sm text-white/50">3-5 Day Turnaround • Money-Back Guarantee</p>
            </div>
          </div>
        </section>

        {/* Industry Context */}
        <section className="bg-gold py-6">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <p className="text-center text-navy font-medium">
              <strong>$100+ trillion in global AUM</strong> managed by professionals competing for top roles. Your resume must demonstrate investment judgment, not just analytical capability.
            </p>
          </div>
        </section>

        {/* What Matters */}
        <section className="bg-cream py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">
                What Buy-Side Hiring Managers Look For
              </h2>
              <div className="mt-2 h-1 w-20 bg-gold" />

              <div className="mt-12 grid gap-6 sm:grid-cols-2">
                {whatMatters.map((item, index) => (
                  <div key={index} className="rounded-xl bg-white p-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-navy">{item.title}</h3>
                    <p className="mt-2 text-sm text-charcoal/70">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Before/After */}
        <section className="bg-navy py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-white sm:text-4xl text-center">
                Before & After Examples
              </h2>
              <div className="mt-2 flex justify-center">
                <div className="h-1 w-20 bg-gold" />
              </div>

              <div className="mt-12 space-y-8">
                {beforeAfterItems.map((item, index) => (
                  <div key={index} className="rounded-xl bg-white/5 p-6">
                    <p className="text-sm text-gold mb-4">{item.context}</p>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="rounded-lg bg-red-500/10 p-4">
                        <p className="text-xs font-medium text-red-400 mb-2">BEFORE</p>
                        <p className="text-sm text-white/80">{item.before}</p>
                      </div>
                      <div className="rounded-lg bg-green-500/10 p-4">
                        <p className="text-xs font-medium text-green-400 mb-2">AFTER</p>
                        <p className="text-sm text-white/80">{item.after}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Who It's For */}
        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">Who This Is For</h2>
              <div className="mt-2 h-1 w-20 bg-gold" />

              <ul className="mt-10 space-y-4">
                {whoItsFor.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 text-gold" />
                    <span className="text-charcoal/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Service Options */}
        <section className="bg-cream py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl text-center">Choose Your Service</h2>
              <div className="mt-2 flex justify-center">
                <div className="h-1 w-20 bg-gold" />
              </div>

              <div className="mt-12 grid gap-8 lg:grid-cols-2">
                <div className="rounded-2xl border border-border bg-white p-8 shadow-sm">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-navy">
                      <FileText className="h-7 w-7 text-gold" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-navy">Resume Review</h3>
                      <p className="text-sm text-charcoal/60">Expert feedback & suggestions</p>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {[
                      "Track record presentation feedback",
                      "Investment process articulation",
                      "Technical skills positioning",
                      "CFA/credential optimization",
                      "One round of follow-up questions",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm">
                        <CheckCircle className="h-5 w-5 flex-shrink-0 text-gold" />
                        <span className="text-charcoal/80">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex items-center justify-between">
                    <span className="text-3xl font-bold text-navy">$197</span>
                    <Link
                      href="/submit-resume?service=resume-review&role=asset-management"
                      className="flex items-center gap-2 rounded-lg bg-navy px-6 py-3 text-sm font-semibold text-white hover:bg-gold hover:text-navy transition-colors"
                    >
                      Get Review
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>

                <div className="rounded-2xl border-2 border-gold bg-white p-8 shadow-lg relative">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gold text-navy text-xs font-bold px-4 py-1 rounded-full">RECOMMENDED</span>
                  </div>

                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gold">
                      <Pencil className="h-7 w-7 text-navy" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-navy">Resume Rewrite</h3>
                      <p className="text-sm text-charcoal/60">Complete reconstruction</p>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {[
                      "Full resume reconstruction",
                      "Performance narrative development",
                      "Investment philosophy articulation",
                      "Quantified achievements throughout",
                      "Two revision rounds included",
                      "Final PDF + Word delivery",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm">
                        <CheckCircle className="h-5 w-5 flex-shrink-0 text-gold" />
                        <span className="text-charcoal/80">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex items-center justify-between">
                    <span className="text-3xl font-bold text-navy">$497</span>
                    <Link
                      href="/submit-resume?service=resume-rewrite&role=asset-management"
                      className="flex items-center gap-2 rounded-lg bg-gold px-6 py-3 text-sm font-semibold text-navy hover:bg-navy hover:text-white transition-colors"
                    >
                      Get Rewrite
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>

              <p className="mt-8 text-center text-sm text-charcoal/50">
                100% money-back guarantee. Not satisfied? Full refund.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl text-center">Frequently Asked Questions</h2>
              <div className="mt-2 flex justify-center">
                <div className="h-1 w-20 bg-gold" />
              </div>

              <div className="mt-12 space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="rounded-xl bg-off-white p-6">
                    <h3 className="text-lg font-semibold text-navy">{faq.question}</h3>
                    <p className="mt-2 text-charcoal/70">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-navy py-20 lg:py-28">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Ready to Advance Your Buy-Side Career?
            </h2>
            <p className="mt-4 text-lg text-white/60">
              In asset management, your track record speaks loudest. Make sure your resume tells the right story.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/submit-resume?service=resume-review&role=asset-management"
                className="group flex items-center gap-2 rounded-xl bg-gold px-8 py-4 text-base font-semibold text-navy hover:bg-white transition-colors"
              >
                Get Resume Review — $197
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/submit-resume?service=resume-rewrite&role=asset-management"
                className="rounded-xl border-2 border-white/20 px-8 py-4 text-base font-semibold text-white hover:border-gold hover:text-gold transition-colors"
              >
                Full Rewrite — $497
              </Link>
            </div>

            <p className="mt-8 text-sm text-white/40">
              100% Money-Back Guarantee • Confidential • Fast Turnaround
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
