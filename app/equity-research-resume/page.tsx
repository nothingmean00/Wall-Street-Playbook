import type { Metadata } from "next"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import Link from "next/link"
import { ArrowRight, CheckCircle, FileText, Pencil, LineChart, Target, BookOpen } from "lucide-react"

export const metadata: Metadata = {
  title: "Equity Research Resume Review | Research Analyst Resume 2026",
  description:
    "Expert resume review for equity research analysts. Showcase your stock picks, sector expertise, and analytical process. Stand out for both sell-side and buy-side research roles.",
  keywords: [
    "equity research resume",
    "research analyst resume",
    "sell side analyst resume",
    "buy side research resume",
    "equity research resume examples 2026",
    "stock research resume",
    "investment research resume",
  ],
  openGraph: {
    title: "Equity Research Analyst Resume Review | Wall Street Playbook",
    description:
      "Professional resume review for research roles. Highlight your investment insights and analytical rigor.",
    url: "https://wallstreetplaybook.org/equity-research-resume",
    images: [{ url: "https://wallstreetplaybook.org/og-resume-services.jpg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://wallstreetplaybook.org/equity-research-resume",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://wallstreetplaybook.org/og-resume-services.jpg"],
  },
}

const beforeAfterItems = [
  {
    context: "Generic coverage → Quantified research impact",
    before: "Covered technology sector stocks and wrote research reports",
    after: "Initiated coverage on 8 mid-cap software companies, with stock recommendations generating average 18% alpha vs. sector index over 12-month holding periods",
  },
  {
    context: "Vague analysis → Clear investment process",
    before: "Conducted financial analysis and built valuation models",
    after: "Developed proprietary SaaS metrics framework analyzing 50+ companies quarterly, identifying 3 high-conviction ideas that drove $15M in incremental trading commissions",
  },
  {
    context: "Missing context → Full analytical story",
    before: "Met with company management teams",
    after: "Conducted 100+ management meetings annually including 12 non-deal roadshows, providing institutional clients with differentiated channel insights on inventory trends",
  },
]

const whoItsFor = [
  "Sell-side research analysts at bulge brackets or boutiques",
  "Buy-side research analysts at asset managers or hedge funds",
  "Junior analysts seeking senior analyst or associate promotions",
  "Investment banking analysts transitioning to research",
  "Graduate students targeting research rotational programs",
  "Sector specialists looking to highlight industry expertise",
]

const faqs = [
  {
    question: "How do I present my stock picks and performance?",
    answer:
      "We'll help you quantify your research impact—recommendation performance vs. benchmarks, alpha generated, and client engagement metrics. Compliance-appropriate framing is essential, and we understand the nuances of presenting investment performance.",
  },
  {
    question: "What's the difference between sell-side and buy-side resumes?",
    answer:
      "Sell-side emphasizes coverage breadth, client relationships, and trading commissions generated. Buy-side focuses on portfolio impact, idea generation hit rate, and investment process. We tailor feedback to your target side.",
  },
  {
    question: "Should I highlight specific sector expertise?",
    answer:
      "Absolutely. Sector specialization is valued in research. We'll help you demonstrate deep industry knowledge while showing you can apply rigorous analytical frameworks across your coverage universe.",
  },
  {
    question: "I'm transitioning from IB to research. Can you help?",
    answer:
      "Yes. Many analysts make this move. We'll help you reframe your transaction experience to highlight analytical depth, industry knowledge, and the foundation for developing investment opinions.",
  },
]

export default function EquityResearchResumePage() {
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
                <LineChart className="h-4 w-4" />
                Investment Research Excellence
              </div>

              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Equity Research{" "}
                <span className="text-gold">Resume Review</span>
              </h1>

              <p className="mt-6 text-lg leading-8 text-white/70 max-w-2xl mx-auto">
                Your resume must demonstrate investment insight, not just analytical capability. Show hiring managers 
                your track record of generating ideas that create value for clients and portfolios.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/submit-resume?service=resume-review&role=equity-research"
                  className="group flex items-center gap-2 rounded-xl bg-gold px-8 py-4 text-base font-semibold text-navy hover:bg-white transition-colors"
                >
                  Get Resume Review — $197
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/submit-resume?service=resume-rewrite&role=equity-research"
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
              Research roles require demonstrating <strong>investment judgment and analytical rigor</strong>. Your resume must show you can generate ideas that move the needle.
            </p>
          </div>
        </section>

        {/* What Matters */}
        <section className="bg-cream py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">
                What Research Hiring Managers Look For
              </h2>
              <div className="mt-2 h-1 w-20 bg-gold" />

              <div className="mt-12 grid gap-6 sm:grid-cols-3">
                <div className="rounded-xl bg-white p-6 shadow-sm text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gold/10">
                    <Target className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-navy">Stock Pick Track Record</h3>
                  <p className="mt-2 text-sm text-charcoal/70">Recommendation performance, alpha generation, hit rate on calls</p>
                </div>
                <div className="rounded-xl bg-white p-6 shadow-sm text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gold/10">
                    <BookOpen className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-navy">Sector Expertise</h3>
                  <p className="mt-2 text-sm text-charcoal/70">Deep industry knowledge, proprietary frameworks, differentiated insights</p>
                </div>
                <div className="rounded-xl bg-white p-6 shadow-sm text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gold/10">
                    <LineChart className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-navy">Analytical Process</h3>
                  <p className="mt-2 text-sm text-charcoal/70">Modeling rigor, valuation methodology, research quality</p>
                </div>
              </div>

              <div className="mt-12 rounded-xl bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-navy mb-4">We Review For:</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    "Investment thesis articulation",
                    "Coverage universe presentation",
                    "Performance quantification",
                    "Client engagement metrics",
                    "Analytical methodology",
                    "Sector expertise depth",
                    "Management access evidence",
                    "Research production quality",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-gold" />
                      <span className="text-sm text-charcoal/80">{item}</span>
                    </div>
                  ))}
                </div>
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
                      "Coverage universe optimization",
                      "Investment thesis articulation",
                      "Client impact quantification",
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
                      href="/submit-resume?service=resume-review&role=equity-research"
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
                      "Research narrative development",
                      "Performance story articulation",
                      "Sector expertise highlighting",
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
                      href="/submit-resume?service=resume-rewrite&role=equity-research"
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
              Ready to Advance Your Research Career?
            </h2>
            <p className="mt-4 text-lg text-white/60">
              Show hiring managers your investment acumen and analytical excellence.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/submit-resume?service=resume-review&role=equity-research"
                className="group flex items-center gap-2 rounded-xl bg-gold px-8 py-4 text-base font-semibold text-navy hover:bg-white transition-colors"
              >
                Get Resume Review — $197
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/submit-resume?service=resume-rewrite&role=equity-research"
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
