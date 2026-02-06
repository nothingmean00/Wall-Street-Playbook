import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { ArrowRight, CheckCircle, DollarSign, AlertTriangle } from "lucide-react"

export const metadata: Metadata = {
  title: "LBO Interview Questions 2026 | PE & IB Technical Prep",
  description:
    "Master LBO interview questions for 2026. 4 return drivers, sources & uses, debt structure, IRR/MOIC calculations, and what makes a good LBO candidate—for PE and IB interviews.",
  keywords: [
    "LBO interview questions 2026",
    "leveraged buyout interview",
    "PE interview questions",
    "LBO model interview",
    "paper LBO interview",
    "private equity technical questions",
    "IRR MOIC interview",
    "LBO return drivers",
  ],
  openGraph: {
    title: "LBO Interview Questions 2026 | PE & IB Technical Prep",
    description: "The LBO questions tested at top PE firms and banks—return drivers, deal mechanics, and paper LBO frameworks.",
    url: "https://wallstreetplaybook.org/lbo-interview-questions-2026",
  },
  alternates: {
    canonical: "https://wallstreetplaybook.org/lbo-interview-questions-2026",
  },
}

const returnDrivers = [
  { driver: "EBITDA Growth", description: "Revenue growth + margin expansion. Most valued by PE firms—indicates actual value creation.", icon: "📈" },
  { driver: "Multiple Expansion", description: "Buy at 10x, sell at 12x. Partially market-driven, partially operational improvement.", icon: "📊" },
  { driver: "Debt Paydown", description: "Company's cash flows repay debt, growing the equity slice. Works even with zero growth.", icon: "💰" },
  { driver: "Cash Generation", description: "Dividend recaps and cash accumulation return capital before exit, boosting IRR.", icon: "🏦" },
]

const lboQuestions = [
  { question: "Walk me through an LBO.", frequency: "ALWAYS ASKED", answer: "PE fund buys a company using mostly debt. Company's cash flows service the debt over 3-7 years. Fund exits at a profit. Returns driven by EBITDA growth, multiple expansion, debt paydown, and cash generation." },
  { question: "What makes a good LBO candidate?", frequency: "ALWAYS ASKED", answer: "Stable/predictable cash flows, strong market position, low CapEx needs, operational improvement opportunity, and experienced management. The company must reliably service debt regardless of economic cycles." },
  { question: "What are sources and uses?", frequency: "ALWAYS ASKED", answer: "Uses: purchase price + fees + refinancing existing debt. Sources: senior debt + subordinated debt + sponsor equity (+ management rollover). Sources must equal uses." },
  { question: "How do you calculate IRR and MOIC?", frequency: "FREQUENTLY ASKED", answer: "MOIC = Exit Equity / Entry Equity. IRR = annualized return. Rule of 72: 2x in 5 years ≈ 15% IRR, 2.5x ≈ 20%, 3x ≈ 25%. PE targets 20-25% IRR and 2.5x+ MOIC." },
  { question: "Why does leverage amplify returns?", frequency: "FREQUENTLY ASKED", answer: "You earn returns on borrowed money. If total asset return exceeds cost of debt, the spread is pure equity value creation. More leverage = higher equity return (and higher risk)." },
  { question: "What happens if the company can't service its debt?", frequency: "SOMETIMES ASKED", answer: "Restructuring: lenders may extend maturities, reduce rates, or convert debt to equity. Worst case: bankruptcy, and the PE fund loses its investment. This is the core risk of leverage." },
  { question: "How does the debt schedule work?", frequency: "SOMETIMES ASKED", answer: "Track each tranche: beginning balance, mandatory amortization, optional prepayments (cash sweep), ending balance. Senior debt has priority. Cash sweep typically 50-75% of excess cash flow." },
  { question: "Walk me through a paper LBO.", frequency: "ALWAYS ASKED (PE)", answer: "Calculate purchase price (EBITDA × entry multiple), set up S&U, project EBITDA 5 years, calculate annual FCF for debt paydown, compute exit equity (exit EBITDA × exit multiple - remaining debt), derive MOIC and estimate IRR." },
]

export default function LBOInterviewQuestions2026Page() {
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
                <span className="text-sm font-medium text-gold">2026 Interview Prep</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                LBO Interview Questions
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-white/70">
                The LBO is the final boss of technical interviews. Whether you're targeting PE or IB, you need to understand leveraged buyouts cold. Here are the questions, the 4 return drivers, and the paper LBO framework.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/playbooks/ib-technical-guide"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-gold px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-gold/90"
                >
                  Full LBO Chapter + 5 More — $127
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/playbooks/pe-recruiting-playbook"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/5"
                >
                  PE Recruiting Playbook — $97
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 4 Return Drivers */}
        <section className="bg-off-white py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-2xl font-bold text-navy">The 4 LBO Return Drivers</h2>
              <div className="mt-2 h-1 w-12 bg-gold" />
              <p className="mt-4 text-charcoal/70 text-sm">Every interviewer expects you to know these. Understanding how returns are generated is more important than memorizing formulas.</p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {returnDrivers.map((d) => (
                  <div key={d.driver} className="p-5 bg-white rounded-lg border border-border">
                    <div className="text-2xl mb-2">{d.icon}</div>
                    <h3 className="font-semibold text-navy">{d.driver}</h3>
                    <p className="mt-2 text-sm text-charcoal/70">{d.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-gold/10 rounded-lg border border-gold/30">
                <div className="flex gap-3">
                  <AlertTriangle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-navy">Interviewer Insight</p>
                    <p className="text-sm text-charcoal/70 mt-1">
                      PE firms value EBITDA growth highest because it indicates genuine operational improvement. Multiple expansion is partly luck (market timing). Strong candidates frame their LBO analysis around value creation, not just financial engineering.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Good LBO Candidate */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-2xl font-bold text-navy">What Makes a Good LBO Candidate?</h2>
              <div className="mt-2 h-1 w-12 bg-gold" />
              <div className="mt-6 grid gap-3">
                {[
                  "Stable, predictable cash flows — can service debt through economic cycles",
                  "Strong market position — defensible competitive moat",
                  "Low capital expenditure requirements — more FCF available for debt paydown",
                  "Opportunity for operational improvement — margin expansion through efficiency",
                  "Experienced management team — or ability to bring in operating partners",
                  "Hard asset base — provides collateral for secured debt",
                  "Multiple expansion potential — undervalued or improvable profile",
                ].map((item) => (
                  <div key={item} className="flex gap-3 items-start p-3 bg-navy/5 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-charcoal/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Questions */}
        <section className="bg-off-white py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-2xl font-bold text-navy">LBO Questions by Frequency</h2>
              <div className="mt-2 h-1 w-12 bg-gold" />

              <div className="mt-8 space-y-6">
                {lboQuestions.map((q, idx) => (
                  <div key={idx} className="p-6 rounded-xl border border-border bg-white shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`text-xs font-bold px-2 py-1 rounded ${
                        q.frequency.includes("ALWAYS") ? "bg-gold/20 text-gold" : q.frequency.includes("FREQUENTLY") ? "bg-navy/10 text-navy" : "bg-charcoal/10 text-charcoal/60"
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
              <h2 className="text-3xl font-bold text-white">LBO Mastery in One Guide</h2>
              <p className="mt-4 text-white/70">
                Chapter 6 covers the full LBO framework with detailed debt schedules, return attribution, and sensitivity analysis. Plus 5 more chapters covering every other technical topic.
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
              <Link href="/ma-interview-questions-2026" className="p-4 bg-white rounded-lg border border-border hover:border-gold/50 transition-colors">
                <p className="font-medium text-navy text-sm">M&A Interview Questions</p>
                <p className="text-xs text-charcoal/50 mt-1">Accretion/dilution, merger models</p>
              </Link>
              <Link href="/pe-interview-prep-2026" className="p-4 bg-white rounded-lg border border-border hover:border-gold/50 transition-colors">
                <p className="font-medium text-navy text-sm">PE Interview Prep 2026</p>
                <p className="text-xs text-charcoal/50 mt-1">Full PE technical & behavioral</p>
              </Link>
              <Link href="/blog/paper-lbo-step-by-step-example" className="p-4 bg-white rounded-lg border border-border hover:border-gold/50 transition-colors">
                <p className="font-medium text-navy text-sm">Paper LBO Walkthrough</p>
                <p className="text-xs text-charcoal/50 mt-1">Worked example with template</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
