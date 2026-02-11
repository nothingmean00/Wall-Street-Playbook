import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { ArrowRight, CheckCircle, AlertTriangle, TrendingUp } from "lucide-react"

export const metadata: Metadata = {
  title: "DCF Interview Questions 2026 | Walk Through a DCF Perfect Answer",
  description:
    "Master the DCF question for 2026 IB interviews. 6-step framework, UFCF formula, terminal value methods, WACC calculation, and the follow-up questions that separate offers from dings.",
  keywords: [
    "DCF interview questions 2026",
    "walk me through a DCF",
    "discounted cash flow interview",
    "DCF valuation interview",
    "investment banking DCF",
    "terminal value interview",
    "WACC interview questions",
    "DCF model interview",
  ],
  openGraph: {
    title: "DCF Interview Questions 2026 | Walk Through a DCF Perfect Answer",
    description: "The 6-step DCF framework tested at every top bank, with follow-up questions and common traps.",
    url: "https://wallstreetplaybook.org/dcf-interview-questions-2026",
  },
  alternates: {
    canonical: "https://wallstreetplaybook.org/dcf-interview-questions-2026",
  },
}

const dcfQuestions = [
  {
    question: "Walk me through a DCF.",
    frequency: "ALWAYS ASKED",
    answer: "Project UFCF for 5-10 years, calculate terminal value, discount everything at WACC to get enterprise value, subtract net debt for equity value, divide by diluted shares.",
    depth: "The 30-second version gets a checkmark. The follow-ups determine the offer.",
  },
  {
    question: "How do you calculate unlevered free cash flow?",
    frequency: "ALWAYS ASKED",
    answer: "UFCF = EBIT × (1 - Tax Rate) + D&A - CapEx - Change in Net Working Capital.",
    depth: "Unlevered because it's available to ALL capital providers. If using levered FCF, discount at cost of equity, not WACC.",
  },
  {
    question: "What are the two methods for terminal value?",
    frequency: "ALWAYS ASKED",
    answer: "Perpetuity growth method: UFCF × (1+g) / (WACC-g). Exit multiple method: Final year EBITDA × exit EV/EBITDA multiple.",
    depth: "Terminal value often represents 60-80% of total DCF value. Always run sensitivities on terminal assumptions.",
  },
  {
    question: "How do you calculate WACC?",
    frequency: "FREQUENTLY ASKED",
    answer: "WACC = (E/V × Re) + (D/V × Rd × (1-T)). Cost of equity from CAPM: Re = Rf + β × (Rm - Rf).",
    depth: "Use market values for weights, not book values. The (1-T) reflects the tax shield on debt.",
  },
  {
    question: "What's the terminal growth rate?",
    frequency: "FREQUENTLY ASKED",
    answer: "Typically 2-3%, in line with long-term GDP growth or inflation. Should never exceed the economy's long-term growth rate.",
    depth: "If g > WACC, the formula breaks (negative denominator). A growth rate above GDP implies the company eventually becomes larger than the entire economy.",
  },
  {
    question: "Does a DCF give you enterprise value or equity value?",
    frequency: "FREQUENTLY ASKED",
    answer: "Enterprise value. You discount UNLEVERED free cash flow at WACC, which represents all capital providers. Subtract net debt to get equity value.",
    depth: "Common trick question. If you used levered FCF discounted at cost of equity, you'd get equity value directly.",
  },
  {
    question: "What are the limitations of a DCF?",
    frequency: "SOMETIMES ASKED",
    answer: "Highly sensitive to assumptions, terminal value dominance, less useful for early-stage companies, and projection uncertainty beyond 2-3 years.",
    depth: "Strong candidates also mention the sensitivity check: back into the implied terminal multiple to verify reasonableness.",
  },
  {
    question: "When would you NOT use a DCF?",
    frequency: "SOMETIMES ASKED",
    answer: "Early-stage companies with no cash flows, financial institutions (use DDM instead), and cyclical companies where a single projection path is misleading.",
    depth: "Banks and insurance companies have different cash flow definitions—the traditional DCF framework doesn't map cleanly.",
  },
]

export default function DCFInterviewQuestions2026Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-navy py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gold/10 px-4 py-2">
                <TrendingUp className="h-4 w-4 text-gold" />
                <span className="text-sm font-medium text-gold">2026 Interview Prep</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                DCF Interview Questions
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-white/70">
                "Walk me through a DCF" appears in nearly every IB interview. Here's the 6-step framework, the follow-up questions, and the common traps—tagged by how often they're actually asked.
              </p>
              <div className="mt-8">
                <Link
                  href="/playbooks/finance-technical-interview-guide"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-gold px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-gold/90"
                >
                  Full DCF Chapter + 5 More Topics — $79
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 6-Step Framework */}
        <section className="bg-off-white py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-2xl font-bold text-navy">The 6-Step DCF Framework</h2>
              <div className="mt-2 h-1 w-12 bg-gold" />
              
              <div className="mt-8 space-y-4">
                {[
                  { step: 1, title: "Project Unlevered Free Cash Flow", desc: "EBIT(1-T) + D&A - CapEx - ΔNWC for 5-10 years" },
                  { step: 2, title: "Calculate Terminal Value", desc: "Perpetuity growth or exit multiple method" },
                  { step: 3, title: "Discount to Present Value", desc: "PV = CF / (1 + WACC)^n for each year" },
                  { step: 4, title: "Sum to Get Enterprise Value", desc: "PV of projected FCFs + PV of terminal value" },
                  { step: 5, title: "Bridge to Equity Value", desc: "EV - Net Debt = Equity Value" },
                  { step: 6, title: "Calculate Implied Share Price", desc: "Equity Value / Diluted Shares Outstanding" },
                ].map(({ step, title, desc }) => (
                  <div key={step} className="flex gap-4 p-4 bg-white rounded-lg border border-border">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-navy text-white text-sm font-bold">
                      {step}
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy">{title}</h3>
                      <p className="text-sm text-charcoal/60 mt-1">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-gold/10 rounded-lg border border-gold/30">
                <div className="flex gap-3">
                  <AlertTriangle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-navy">Red Flag Warning</p>
                    <p className="text-sm text-charcoal/70 mt-1">
                      Never use levered free cash flow (after interest) with WACC. If you use LFCF, discount at cost of equity. Mixing them is a common mistake that instantly signals weak understanding.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Question Bank */}
        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-2xl font-bold text-navy">DCF Questions by Interview Frequency</h2>
              <div className="mt-2 h-1 w-12 bg-gold" />

              <div className="mt-8 space-y-6">
                {dcfQuestions.map((q, idx) => (
                  <div key={idx} className="p-6 rounded-xl border border-border bg-white shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`text-xs font-bold px-2 py-1 rounded ${
                        q.frequency === "ALWAYS ASKED" 
                          ? "bg-gold/20 text-gold" 
                          : q.frequency === "FREQUENTLY ASKED"
                          ? "bg-navy/10 text-navy"
                          : "bg-charcoal/10 text-charcoal/60"
                      }`}>
                        {q.frequency}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-navy">{q.question}</h3>
                    <p className="mt-3 text-sm text-charcoal/80">{q.answer}</p>
                    <p className="mt-2 text-xs text-charcoal/50 italic">{q.depth}</p>
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
                <Link href="/blog/walk-me-through-dcf-perfect-answer" className="flex items-center gap-2 text-sm text-gold hover:text-gold/80">
                  <ArrowRight className="h-3.5 w-3.5" /> Walk Me Through a DCF: The Perfect Answer (Full Blog Post)
                </Link>
                <Link href="/blog/wacc-explained-simply-finance-interviews" className="flex items-center gap-2 text-sm text-gold hover:text-gold/80">
                  <ArrowRight className="h-3.5 w-3.5" /> WACC Explained Simply for Finance Interviews
                </Link>
                <Link href="/blog/enterprise-value-vs-equity-value-explained" className="flex items-center gap-2 text-sm text-gold hover:text-gold/80">
                  <ArrowRight className="h-3.5 w-3.5" /> Enterprise Value vs. Equity Value: The Complete Guide
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-navy py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold text-white">DCF Is Just One Chapter</h2>
              <p className="mt-4 text-white/70">
                The full Finance Technical Interview Guide covers 6 chapters: Accounting, EV/Equity Value, DCF, Comps, M&A, and LBOs. Every question tagged by frequency. Dual-format answers. 88 pages.
              </p>
              <div className="mt-8">
                <Link
                  href="/playbooks/finance-technical-interview-guide"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-gold px-8 py-4 text-sm font-semibold text-navy transition-colors hover:bg-gold/90"
                >
                  Get the Complete Guide — $79
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
              <Link href="/ma-interview-questions-2026" className="p-4 bg-white rounded-lg border border-border hover:border-gold/50 transition-colors">
                <p className="font-medium text-navy text-sm">M&A Interview Questions</p>
                <p className="text-xs text-charcoal/50 mt-1">Accretion/dilution, merger models</p>
              </Link>
              <Link href="/valuation-methods-investment-banking" className="p-4 bg-white rounded-lg border border-border hover:border-gold/50 transition-colors">
                <p className="font-medium text-navy text-sm">Valuation Methods</p>
                <p className="text-xs text-charcoal/50 mt-1">DCF vs comps vs precedent</p>
              </Link>
              <Link href="/lbo-interview-questions-2026" className="p-4 bg-white rounded-lg border border-border hover:border-gold/50 transition-colors">
                <p className="font-medium text-navy text-sm">LBO Interview Questions</p>
                <p className="text-xs text-charcoal/50 mt-1">Return drivers, debt structure</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
