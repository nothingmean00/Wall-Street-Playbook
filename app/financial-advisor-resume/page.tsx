import type { Metadata } from "next"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import Link from "next/link"
import { ArrowRight, CheckCircle, FileText, Pencil, Shield, Users, Clock, TrendingUp, Award, Target } from "lucide-react"

export const metadata: Metadata = {
  title: "Financial Advisor Resume Review | Wealth Management Resume Help 2026",
  description:
    "Professional resume review for financial advisors and wealth managers. Get expert feedback on your CFP, Series 7/66, and wealth management resume. Stand out in a field growing 17% through 2033.",
  keywords: [
    "financial advisor resume",
    "wealth management resume",
    "CFP resume",
    "financial planner resume",
    "wealth advisor resume review",
    "RIA resume",
    "financial advisor resume examples",
    "wealth management resume 2026",
  ],
  openGraph: {
    title: "Financial Advisor Resume Review | Wall Street Playbook",
    description:
      "Expert resume review for financial advisors and wealth managers. Showcase your AUM, certifications, and client relationships effectively.",
    url: "https://wallstreetplaybook.org/financial-advisor-resume",
  },
  alternates: {
    canonical: "https://wallstreetplaybook.org/financial-advisor-resume",
  },
}

const whatMakesGreatResume = [
  {
    title: "Credentials Front and Center",
    description: "CFP®, CFA, Series 7/66/63 licenses prominently displayed to establish immediate credibility",
  },
  {
    title: "Quantified Client Impact",
    description: "AUM growth, client retention rates, portfolio returns, and new client acquisition numbers",
  },
  {
    title: "Relationship Building Evidence",
    description: "Demonstrated ability to build trust and maintain long-term client relationships",
  },
  {
    title: "Technical + Interpersonal Balance",
    description: "Financial planning expertise combined with communication and empathy skills",
  },
]

const beforeAfterItems = [
  {
    context: "Generic duty → Quantified book growth",
    before: "Managed client portfolios and provided financial advice",
    after: "Grew client book from $15M to $45M AUM over 3 years while maintaining 97% client retention rate",
  },
  {
    context: "Vague scope → Specific client impact",
    before: "Helped clients with retirement planning",
    after: "Developed comprehensive retirement plans for 120+ clients, identifying average tax savings of $12K annually through Roth conversion strategies",
  },
  {
    context: "Missing metrics → Clear performance",
    before: "Responsible for new client acquisition",
    after: "Acquired 35 new HNW clients ($500K+ investable assets) in 2025, generating $180K in new annual revenue",
  },
]

const whoItsFor = [
  "Financial advisors at wirehouses (Merrill, Morgan Stanley, UBS, Wells Fargo)",
  "Independent RIA advisors building their own practice",
  "CFP® candidates or newly certified planners entering the field",
  "Wealth managers at private banks or family offices",
  "Insurance-licensed advisors transitioning to fee-based planning",
  "Career changers entering wealth management from other finance roles",
]

const faqs = [
  {
    question: "Do you understand wealth management vs. investment banking?",
    answer:
      "Yes. Wealth management resumes require a completely different approach than IB—emphasizing client relationships, holistic planning, AUM growth, and retention rather than deal tombstones. Our reviewers understand the wealth management hiring landscape.",
  },
  {
    question: "Should I include my Series licenses?",
    answer:
      "Absolutely. Series 7, 66, 63, and insurance licenses (life, health, variable annuity) should be prominently featured. For CFP® candidates, include your expected certification date.",
  },
  {
    question: "How do I quantify success as an advisor?",
    answer:
      "Focus on AUM growth, client acquisition, retention rates, portfolio performance vs. benchmarks, revenue generated, and client satisfaction scores. We'll help you identify the right metrics for your experience level.",
  },
  {
    question: "I'm transitioning from another finance role. Can you help?",
    answer:
      "Yes. We work with many candidates moving from banking, insurance, or corporate finance into wealth management. We'll help you position transferable skills while addressing the relationship-focused nature of advisory work.",
  },
]

export default function FinancialAdvisorResumePage() {
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
                <TrendingUp className="h-4 w-4" />
                17% Job Growth Through 2033
              </div>

              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Financial Advisor{" "}
                <span className="text-gold">Resume Review</span>
              </h1>

              <p className="mt-6 text-lg leading-8 text-white/70 max-w-2xl mx-auto">
                Your resume needs to showcase more than credentials—it must demonstrate your ability to build 
                trust, grow client relationships, and deliver results. Get expert feedback from people who 
                understand wealth management hiring.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/submit-resume?service=resume-review&role=financial-advisor"
                  className="group flex items-center gap-2 rounded-xl bg-gold px-8 py-4 text-base font-semibold text-navy hover:bg-white transition-colors"
                >
                  Get Resume Review — $197
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/submit-resume?service=resume-rewrite&role=financial-advisor"
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
              <strong>400,000+ financial advisors</strong> in the US compete for top clients. Your resume is often your first impression with hiring managers at wirehouses, RIAs, and private banks.
            </p>
          </div>
        </section>

        {/* What Makes a Great Advisor Resume */}
        <section className="bg-cream py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">
                What Makes a Standout Advisor Resume
              </h2>
              <div className="mt-2 h-1 w-20 bg-gold" />
              <p className="mt-6 text-lg text-charcoal/70">
                Wealth management hiring focuses on trust, relationships, and measurable growth—not just credentials.
              </p>

              <div className="mt-12 grid gap-6 sm:grid-cols-2">
                {whatMakesGreatResume.map((item, index) => (
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
              <p className="mt-6 text-center text-white/60">
                See how we transform generic advisor bullets into compelling achievements.
              </p>

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
                {/* Resume Review */}
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
                      "Line-by-line feedback on every section",
                      "Credential positioning recommendations",
                      "AUM/metrics optimization suggestions",
                      "Client relationship language improvements",
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
                      href="/submit-resume?service=resume-review&role=financial-advisor"
                      className="flex items-center gap-2 rounded-lg bg-navy px-6 py-3 text-sm font-semibold text-white hover:bg-gold hover:text-navy transition-colors"
                    >
                      Get Review
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>

                {/* Resume Rewrite */}
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
                      "Credential and license optimization",
                      "Client impact story development",
                      "AUM and growth metrics highlighting",
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
                      href="/submit-resume?service=resume-rewrite&role=financial-advisor"
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

        {/* Trust Signals */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl grid grid-cols-1 gap-8 sm:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gold/10">
                  <Shield className="h-6 w-6 text-gold" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-navy">Money-Back Guarantee</h3>
                <p className="mt-2 text-sm text-charcoal/60">Not satisfied? Full refund, no questions asked.</p>
              </div>
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gold/10">
                  <Users className="h-6 w-6 text-gold" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-navy">Industry Experts</h3>
                <p className="mt-2 text-sm text-charcoal/60">Reviewed by people who understand wealth management.</p>
              </div>
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gold/10">
                  <Clock className="h-6 w-6 text-gold" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-navy">Fast Turnaround</h3>
                <p className="mt-2 text-sm text-charcoal/60">Reviews in 3-5 days. Rewrites in 5-7 days.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-cream py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl text-center">Frequently Asked Questions</h2>
              <div className="mt-2 flex justify-center">
                <div className="h-1 w-20 bg-gold" />
              </div>

              <div className="mt-12 space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="rounded-xl bg-white p-6 shadow-sm">
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
              Ready to Stand Out in Wealth Management?
            </h2>
            <p className="mt-4 text-lg text-white/60">
              In a field where trust is everything, your resume is your first chance to demonstrate credibility.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/submit-resume?service=resume-review&role=financial-advisor"
                className="group flex items-center gap-2 rounded-xl bg-gold px-8 py-4 text-base font-semibold text-navy hover:bg-white transition-colors"
              >
                Get Resume Review — $197
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/submit-resume?service=resume-rewrite&role=financial-advisor"
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
