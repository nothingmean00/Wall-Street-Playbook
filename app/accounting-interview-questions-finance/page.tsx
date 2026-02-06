import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { ArrowRight, CheckCircle, BookOpen, AlertTriangle } from "lucide-react"

export const metadata: Metadata = {
  title: "Accounting Interview Questions for Finance Jobs | IB, PE, HF",
  description:
    "The accounting questions asked in investment banking, private equity, and finance interviews. 3-statement linkage, depreciation walkthroughs, working capital, and the traps that get candidates dinged.",
  keywords: [
    "accounting interview questions finance",
    "accounting questions investment banking",
    "3 financial statements interview",
    "depreciation interview question",
    "working capital interview",
    "accounting for finance interviews",
    "IB accounting questions",
    "balance sheet interview questions",
  ],
  openGraph: {
    title: "Accounting Interview Questions for Finance Jobs | IB, PE, HF",
    description: "The 12 accounting questions asked at every top bank and fund, with model answers and red flag warnings.",
    url: "https://wallstreetplaybook.org/accounting-interview-questions-finance",
  },
  alternates: {
    canonical: "https://wallstreetplaybook.org/accounting-interview-questions-finance",
  },
}

const accountingQuestions = [
  { question: "Walk me through the 3 financial statements.", frequency: "ALWAYS ASKED", answer: "Income statement: revenue → expenses → net income over a period. Balance sheet: assets = liabilities + equity at a point in time. Cash flow statement: starts with NI, adjusts for non-cash items and working capital, then investing and financing activities." },
  { question: "How are the 3 statements linked?", frequency: "ALWAYS ASKED", answer: "Net income flows to both the cash flow statement (top) and retained earnings on the balance sheet. The CFS adjusts for non-cash items and working capital, producing net change in cash—which updates the balance sheet." },
  { question: "D&A increases by $10. Walk through the impact.", frequency: "ALWAYS ASKED", answer: "IS: Pre-tax income ↓$10, taxes ↓$4 (at 40%), NI ↓$6. CFS: NI ↓$6 but D&A add-back ↑$10, net cash ↑$4. BS: Cash ↑$4, PP&E ↓$10, assets ↓$6, RE ↓$6. Balances." },
  { question: "What is working capital?", frequency: "ALWAYS ASKED", answer: "Current assets - current liabilities. Represents the short-term liquidity needed to run the business. Increases in NWC are a use of cash; decreases are a source of cash." },
  { question: "Cash vs. accrual accounting?", frequency: "FREQUENTLY ASKED", answer: "Cash: records when cash moves. Accrual: records when earned/incurred regardless of cash timing. All public companies use accrual. This is why profitable companies can run out of cash." },
  { question: "Walk me through a $100 inventory write-down.", frequency: "FREQUENTLY ASKED", answer: "IS: COGS ↑$100, NI ↓$60 (40% tax). CFS: NI ↓$60 + $100 non-cash add-back = cash ↑$40. BS: Inventory ↓$100, cash ↑$40, assets ↓$60, RE ↓$60. Balances." },
  { question: "What is goodwill?", frequency: "FREQUENTLY ASKED", answer: "Premium paid above FMV of net identifiable assets in an acquisition. Not amortized under GAAP—tested for impairment annually. Impairment = non-cash charge on the IS." },
  { question: "Capitalizing vs. expensing?", frequency: "SOMETIMES ASKED", answer: "Expensing: full cost hits IS immediately. Capitalizing: cost goes on BS as asset, depreciated/amortized over time. Capitalizing spreads the income statement impact, boosting current earnings at the expense of future earnings." },
]

export default function AccountingInterviewFinancePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-navy py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gold/10 px-4 py-2">
                <BookOpen className="h-4 w-4 text-gold" />
                <span className="text-sm font-medium text-gold">Technical Interview Prep</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Accounting Interview Questions for Finance
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-white/70">
                Accounting is the foundation of every finance interview. Whether you're targeting IB, PE, or equity research, the first technical questions always test 3-statement mastery. Here are the questions that appear most frequently.
              </p>
              <div className="mt-8">
                <Link
                  href="/playbooks/ib-technical-guide"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-gold px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-gold/90"
                >
                  Full Accounting Chapter + 5 More Topics — $127
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* The Core Pattern */}
        <section className="bg-off-white py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-2xl font-bold text-navy">The Pattern Behind Every Accounting Question</h2>
              <div className="mt-2 h-1 w-12 bg-gold" />
              <p className="mt-4 text-charcoal/80">
                Every accounting interview question tests the same core skill: <strong>can you trace a transaction through all three statements?</strong>
              </p>
              <div className="mt-6 space-y-3">
                {[
                  "Step 1: What hits the income statement? (Revenue or expense impact)",
                  "Step 2: Is it cash or non-cash? (Determines the CFS adjustment)",
                  "Step 3: What changes on the balance sheet? (Assets, liabilities, or equity)",
                  "Step 4: Does it balance? (Always verify Assets = L + E)",
                ].map((step, idx) => (
                  <div key={idx} className="flex gap-3 p-3 bg-white rounded-lg border border-border">
                    <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-navy text-white text-xs font-bold">{idx + 1}</div>
                    <span className="text-sm text-charcoal/80 mt-0.5">{step}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-gold/10 rounded-lg border border-gold/30">
                <div className="flex gap-3">
                  <AlertTriangle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-charcoal/70">
                    <strong>Master this framework</strong> and you can handle any accounting question they throw at you, even ones you've never seen before. Interviewers can always tell who understands the logic vs. who memorized answers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Questions */}
        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-2xl font-bold text-navy">Accounting Questions by Frequency</h2>
              <div className="mt-2 h-1 w-12 bg-gold" />

              <div className="mt-8 space-y-6">
                {accountingQuestions.map((q, idx) => (
                  <div key={idx} className="p-6 rounded-xl border border-border shadow-sm">
                    <span className={`text-xs font-bold px-2 py-1 rounded ${
                      q.frequency === "ALWAYS ASKED" ? "bg-gold/20 text-gold" : q.frequency === "FREQUENTLY ASKED" ? "bg-navy/10 text-navy" : "bg-charcoal/10 text-charcoal/60"
                    }`}>{q.frequency}</span>
                    <h3 className="text-lg font-semibold text-navy mt-3">{q.question}</h3>
                    <p className="mt-3 text-sm text-charcoal/80">{q.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Deep Dive Links */}
        <section className="bg-navy/5 py-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h3 className="font-bold text-navy mb-4">Go Deeper</h3>
              <div className="space-y-3">
                <Link href="/blog/how-three-financial-statements-linked" className="flex items-center gap-2 text-sm text-gold hover:text-gold/80">
                  <ArrowRight className="h-3.5 w-3.5" /> How the 3 Financial Statements Are Linked (Full Walkthrough)
                </Link>
                <Link href="/blog/accounting-interview-questions-investment-banking" className="flex items-center gap-2 text-sm text-gold hover:text-gold/80">
                  <ArrowRight className="h-3.5 w-3.5" /> 12 Accounting Interview Questions (With Model Answers)
                </Link>
                <Link href="/ib-technical-cheat-sheet" className="flex items-center gap-2 text-sm text-gold hover:text-gold/80">
                  <ArrowRight className="h-3.5 w-3.5" /> Free: 20 Must-Know Technical Questions Cheat Sheet
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-navy py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold text-white">Accounting Is Just the Foundation</h2>
              <p className="mt-4 text-white/70">
                Chapter 1 covers accounting in depth. But interviews don't stop there—you'll need DCF, comps, M&A, and LBO mastery too. The full guide covers all 6 topics in 87 pages.
              </p>
              <div className="mt-8">
                <Link
                  href="/playbooks/ib-technical-guide"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-gold px-8 py-4 text-sm font-semibold text-navy transition-colors hover:bg-gold/90"
                >
                  Get the IB Technical Interview Guide — $127
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
                <p className="font-medium text-navy text-sm">IB Technical Interview 2026</p>
                <p className="text-xs text-charcoal/50 mt-1">All 6 topics overview</p>
              </Link>
              <Link href="/dcf-interview-questions-2026" className="p-4 bg-white rounded-lg border border-border hover:border-gold/50 transition-colors">
                <p className="font-medium text-navy text-sm">DCF Interview Questions</p>
                <p className="text-xs text-charcoal/50 mt-1">6-step valuation framework</p>
              </Link>
              <Link href="/valuation-methods-investment-banking" className="p-4 bg-white rounded-lg border border-border hover:border-gold/50 transition-colors">
                <p className="font-medium text-navy text-sm">Valuation Methods</p>
                <p className="text-xs text-charcoal/50 mt-1">DCF vs comps vs precedent</p>
              </Link>
              <Link href="/ma-interview-questions-2026" className="p-4 bg-white rounded-lg border border-border hover:border-gold/50 transition-colors">
                <p className="font-medium text-navy text-sm">M&A Interview Questions</p>
                <p className="text-xs text-charcoal/50 mt-1">Accretion/dilution, deal mechanics</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
