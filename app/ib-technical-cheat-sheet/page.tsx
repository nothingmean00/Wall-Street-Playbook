import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { LeadMagnetCapture } from "@/components/lead-magnet-capture"
import { ArrowRight, CheckCircle, BookOpen, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "Free: 20 Must-Know Finance Technical Questions (Cheat Sheet PDF)",
  description:
    "Download the free cheat sheet with the 20 most frequently asked technical questions in investment banking interviews. Quick-reference answers for accounting, DCF, comps, M&A, and LBOs.",
  keywords: [
    "IB technical interview cheat sheet",
    "investment banking interview questions free",
    "free finance interview prep",
    "technical interview cheat sheet",
    "IB interview questions PDF",
    "banking interview prep free",
    "Goldman Sachs interview questions free",
  ],
  openGraph: {
    title: "Free: 20 Must-Know Finance Technical Questions",
    description: "The 20 questions tagged 'Always Asked' across all 6 technical topics. Free PDF cheat sheet.",
    url: "https://wallstreetplaybook.org/ib-technical-cheat-sheet",
  },
  alternates: {
    canonical: "https://wallstreetplaybook.org/ib-technical-cheat-sheet",
  },
}

const cheatSheetQuestions = [
  { topic: "Accounting", questions: ["Walk me through the 3 financial statements", "How are they linked?", "D&A increases by $10—walk through it", "What is working capital?"] },
  { topic: "EV / Equity Value", questions: ["What's the difference between EV and equity value?", "Walk me through the EV bridge", "When is equity value > EV?"] },
  { topic: "DCF", questions: ["Walk me through a DCF", "How do you calculate UFCF?", "What are the two terminal value methods?", "How do you calculate WACC?"] },
  { topic: "Comps", questions: ["Walk me through a comps analysis", "Why are transaction multiples higher than trading comps?", "Which valuation method gives the highest value?"] },
  { topic: "M&A", questions: ["Is this deal accretive or dilutive?", "Walk me through a merger model", "What is goodwill?"] },
  { topic: "LBO", questions: ["Walk me through an LBO", "What makes a good LBO candidate?", "What are the 4 return drivers?"] },
]

export default function IBTechnicalCheatSheetPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-navy pt-28 pb-16 lg:pt-32 lg:pb-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <div className="grid gap-12 lg:grid-cols-2 items-center">
                <div>
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gold/10 px-4 py-2">
                    <Zap className="h-4 w-4 text-gold" />
                    <span className="text-sm font-medium text-gold">Free Download</span>
                  </div>
                  <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    20 Must-Know Technical Interview Questions
                  </h1>
                  <p className="mt-6 text-lg leading-relaxed text-white/70">
                    The questions tagged "Always Asked" from every major technical topic. Quick-reference answers you can review 15 minutes before your interview.
                  </p>
                  <div className="mt-6 space-y-3">
                    {[
                      "3-4 questions from each of the 6 core topics",
                      "30-second crisp answers for quick review",
                      "Red flag warnings for common mistakes",
                      "Printable PDF format",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 text-gold flex-shrink-0" />
                        <span className="text-sm text-white/80">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <LeadMagnetCapture
                    magnetName="20 Must-Know Technical Questions"
                    magnetDescription="Get instant access to the 20 most frequently asked technical interview questions with concise, interview-ready answers. Perfect for last-minute prep."
                    buttonText="Get Free Cheat Sheet"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Preview of What's Inside */}
        <section className="bg-off-white py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-2xl font-bold text-navy text-center">What's in the Cheat Sheet</h2>
              <div className="mt-3 h-1 w-12 bg-gold mx-auto" />
              <p className="mt-4 text-center text-charcoal/70">
                20 questions across 6 topics—each tagged "Always Asked" based on real interview data.
              </p>

              <div className="mt-8 space-y-6">
                {cheatSheetQuestions.map((section) => (
                  <div key={section.topic} className="p-5 bg-white rounded-xl border border-border">
                    <h3 className="font-bold text-navy flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-gold" />
                      {section.topic}
                    </h3>
                    <div className="mt-3 space-y-2">
                      {section.questions.map((q) => (
                        <div key={q} className="flex gap-2 items-start">
                          <span className="text-xs font-bold text-gold mt-0.5">Q:</span>
                          <span className="text-sm text-charcoal/80">{q}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-3 p-2 bg-navy/5 rounded text-xs text-charcoal/50 italic">
                      Answers included in the download...
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Upgrade CTA */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <div className="rounded-2xl border-2 border-gold/30 bg-gradient-to-br from-gold/5 to-transparent p-8">
                <h2 className="text-2xl font-bold text-navy">Want the Full Picture?</h2>
                <p className="mt-3 text-charcoal/70">
                  The cheat sheet covers 20 "Always Asked" questions. The full Finance Technical Interview Guide covers <strong>all 6 chapters</strong> with hundreds of questions, dual-format answers, red flag warnings, interviewer perspective boxes, and self-assessment scorecards.
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <div className="flex gap-2 items-start">
                    <CheckCircle className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-charcoal/80">88 pages of deep content</span>
                  </div>
                  <div className="flex gap-2 items-start">
                    <CheckCircle className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-charcoal/80">Interview frequency tags on every concept</span>
                  </div>
                  <div className="flex gap-2 items-start">
                    <CheckCircle className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-charcoal/80">30-second + 3-minute answer formats</span>
                  </div>
                  <div className="flex gap-2 items-start">
                    <CheckCircle className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-charcoal/80">Self-assessment scorecards per chapter</span>
                  </div>
                </div>
                <div className="mt-6">
                  <Link
                    href="/playbooks/finance-technical-interview-guide"
                    className="inline-flex items-center gap-2 rounded-lg bg-gold px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-gold/90"
                  >
                    Get the Full Guide — $79
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Content */}
        <section className="bg-off-white py-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h3 className="text-lg font-bold text-navy mb-6">Free Deep-Dive Articles</h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Link href="/blog/how-three-financial-statements-linked" className="p-4 bg-white rounded-lg border border-border hover:border-gold/50 transition-colors">
                <p className="font-medium text-navy text-sm">How the 3 Statements Are Linked</p>
                <p className="text-xs text-charcoal/50 mt-1">The #1 interview question explained</p>
              </Link>
              <Link href="/blog/walk-me-through-dcf-perfect-answer" className="p-4 bg-white rounded-lg border border-border hover:border-gold/50 transition-colors">
                <p className="font-medium text-navy text-sm">Walk Me Through a DCF</p>
                <p className="text-xs text-charcoal/50 mt-1">6-step framework with follow-ups</p>
              </Link>
              <Link href="/blog/enterprise-value-vs-equity-value-explained" className="p-4 bg-white rounded-lg border border-border hover:border-gold/50 transition-colors">
                <p className="font-medium text-navy text-sm">EV vs. Equity Value</p>
                <p className="text-xs text-charcoal/50 mt-1">The house analogy that makes it click</p>
              </Link>
              <Link href="/blog/accretion-dilution-analysis-explained" className="p-4 bg-white rounded-lg border border-border hover:border-gold/50 transition-colors">
                <p className="font-medium text-navy text-sm">Accretion/Dilution Explained</p>
                <p className="text-xs text-charcoal/50 mt-1">P/E rule and merger model basics</p>
              </Link>
              <Link href="/blog/lbo-model-walkthrough-5-steps" className="p-4 bg-white rounded-lg border border-border hover:border-gold/50 transition-colors">
                <p className="font-medium text-navy text-sm">LBO Model: 5 Steps</p>
                <p className="text-xs text-charcoal/50 mt-1">Return drivers and debt structure</p>
              </Link>
              <Link href="/blog/trading-comps-vs-precedent-transactions" className="p-4 bg-white rounded-lg border border-border hover:border-gold/50 transition-colors">
                <p className="font-medium text-navy text-sm">Trading Comps vs. Precedent</p>
                <p className="text-xs text-charcoal/50 mt-1">Control premium and football field</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
