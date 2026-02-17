import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { ArrowRight, CheckCircle, Layers } from "lucide-react"

export const metadata: Metadata = {
  title: "M&A Interview Questions 2026 | Accretion/Dilution, Merger Models",
  description:
    "Master M&A interview questions for 2026 IB recruiting. Accretion/dilution analysis, P/E rule, goodwill, purchase price allocation, stock vs. cash deals, and merger model walkthroughs.",
  keywords: [
    "M&A interview questions 2026",
    "merger and acquisition interview",
    "accretion dilution interview",
    "merger model interview questions",
    "investment banking M&A questions",
    "goodwill interview questions",
    "stock deal vs cash deal",
    "purchase price allocation",
  ],
  openGraph: {
    title: "M&A Interview Questions 2026 | Accretion/Dilution, Merger Models",
    description: "The M&A questions tested at top banks—accretion/dilution, merger models, and deal mechanics.",
    url: "https://wallstreetplaybook.org/ma-interview-questions-2026",
    images: [{ url: "https://wallstreetplaybook.org/og-interview-prep.jpg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://wallstreetplaybook.org/ma-interview-questions-2026",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://wallstreetplaybook.org/og-interview-prep.jpg"],
  },
}

const maQuestions = [
  { question: "Is this deal accretive or dilutive?", frequency: "ALWAYS ASKED", answer: "Compare combined pro forma EPS to the acquirer's standalone EPS. Higher = accretive. For stock deals, use the P/E shortcut: if acquirer's P/E > target's P/E, it's accretive." },
  { question: "Walk me through a merger model.", frequency: "ALWAYS ASKED", answer: "Combine standalone financials, calculate PPA/goodwill, layer in financing (new debt, shares issued), add synergies, compute pro forma EPS vs. standalone." },
  { question: "What is goodwill?", frequency: "ALWAYS ASKED", answer: "The excess of purchase price over the fair market value of net identifiable assets. Not amortized under GAAP—tested for impairment annually." },
  { question: "Stock deal vs. cash deal—which is better?", frequency: "FREQUENTLY ASKED", answer: "Depends. Stock when shares are overvalued (using expensive currency). Cash when confident in returns and shares are undervalued. Cash is immediately taxable to sellers; stock deals can be tax-deferred." },
  { question: "What are synergies?", frequency: "FREQUENTLY ASKED", answer: "Cost synergies: eliminating redundancies (5-10% of smaller company's cost base). Revenue synergies: cross-selling, new markets. Cost synergies are more predictable and valued higher by the market." },
  { question: "Walk me through purchase price allocation.", frequency: "SOMETIMES ASKED", answer: "Step up target's assets/liabilities to FMV, identify intangible assets (brand, customer lists, patents), remainder = goodwill. Stepped-up assets increase future depreciation." },
  { question: "What's a stock deal vs. an asset deal?", frequency: "SOMETIMES ASKED", answer: "Stock deal: buy shares, assume all assets/liabilities. Asset deal: cherry-pick specific assets. Sellers prefer stock (capital gains). Buyers prefer asset (tax basis step-up on assets)." },
  { question: "Why would an acquirer pay a premium?", frequency: "SOMETIMES ASKED", answer: "Control premium (20-40%) reflects synergies, strategic value of control, and competitive bidding dynamics. Without a premium, target shareholders have no reason to sell above market price." },
]

export default function MAInterviewQuestions2026Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-navy pt-28 pb-16 lg:pt-32 lg:pb-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gold/10 px-4 py-2">
                <Layers className="h-4 w-4 text-gold" />
                <span className="text-sm font-medium text-gold">2026 Interview Prep</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                M&A Interview Questions
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-white/70">
                M&A is where IB interviews get serious. Accretion/dilution, merger models, purchase price allocation—these questions test whether you can think about deals, not just memorize formulas.
              </p>
              <div className="mt-8">
                <Link
                  href="/playbooks/finance-technical-interview-guide"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-gold px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-gold/90"
                >
                  Full M&A Chapter + 5 More Topics — $79
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Rule */}
        <section className="bg-off-white py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-2xl font-bold text-navy">The P/E Rule for Stock Deals</h2>
              <div className="mt-2 h-1 w-12 bg-gold" />
              <div className="mt-6 p-6 bg-white rounded-xl border-2 border-gold/30">
                <p className="text-lg font-semibold text-navy mb-4">The Shortcut Every Banker Uses:</p>
                <div className="space-y-3">
                  <div className="flex gap-3 items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-charcoal/80">If <strong>acquirer's P/E {'>'} target's P/E</strong> → deal is <span className="text-green-600 font-semibold">accretive</span> (buying earnings cheaply)</p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <CheckCircle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <p className="text-charcoal/80">If <strong>acquirer's P/E {'<'} target's P/E</strong> → deal is <span className="text-red-500 font-semibold">dilutive</span> (buying earnings expensively)</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-charcoal/60">For cash deals, compare the earnings yield on the target to the after-tax cost of debt financing.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Questions */}
        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-2xl font-bold text-navy">M&A Questions by Frequency</h2>
              <div className="mt-2 h-1 w-12 bg-gold" />

              <div className="mt-8 space-y-6">
                {maQuestions.map((q, idx) => (
                  <div key={idx} className="p-6 rounded-xl border border-border shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`text-xs font-bold px-2 py-1 rounded ${
                        q.frequency === "ALWAYS ASKED" ? "bg-gold/20 text-gold" : q.frequency === "FREQUENTLY ASKED" ? "bg-navy/10 text-navy" : "bg-charcoal/10 text-charcoal/60"
                      }`}>{q.frequency}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-navy">{q.question}</h3>
                    <p className="mt-3 text-sm text-charcoal/80">{q.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-navy py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold text-white">Master All 6 Technical Topics</h2>
              <p className="mt-4 text-white/70">
                M&A is Chapter 5 of 8 in the Finance Technical Interview Guide. Get the full picture—Accounting, EV, DCF, Comps, M&A, LBOs, Advanced Valuation, and Complex Accounting—in 80+ pages.
              </p>
              <div className="mt-8">
                <Link
                  href="/playbooks/finance-technical-interview-guide"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-gold px-8 py-4 text-sm font-semibold text-navy transition-colors hover:bg-gold/90"
                >
                  Get the Finance Technical Interview Guide — $79
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
              <Link href="/lbo-interview-questions-2026" className="p-4 bg-white rounded-lg border border-border hover:border-gold/50 transition-colors">
                <p className="font-medium text-navy text-sm">LBO Interview Questions</p>
                <p className="text-xs text-charcoal/50 mt-1">Return drivers, debt structure</p>
              </Link>
              <Link href="/valuation-methods-investment-banking" className="p-4 bg-white rounded-lg border border-border hover:border-gold/50 transition-colors">
                <p className="font-medium text-navy text-sm">Valuation Methods</p>
                <p className="text-xs text-charcoal/50 mt-1">DCF vs comps vs precedent</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
