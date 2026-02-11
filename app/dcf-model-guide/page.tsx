import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { ReadingProgress } from "@/components/reading-progress"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ArrowRight, CheckCircle, Calculator, TrendingDown, DollarSign, Target } from "lucide-react"

export const metadata: Metadata = {
  title: "DCF Model Guide | Discounted Cash Flow Tutorial 2026",
  description:
    "Learn how to build a DCF model from scratch. Step-by-step guide to discounted cash flow analysis, WACC calculation, terminal value, and common DCF interview questions.",
  keywords: [
    "DCF model",
    "discounted cash flow",
    "how to build a DCF",
    "DCF tutorial",
    "DCF Excel template",
    "DCF interview questions",
    "WACC calculation",
    "terminal value",
  ],
  openGraph: {
    title: "DCF Model Guide | Discounted Cash Flow Tutorial 2026",
    description:
      "Learn how to build a DCF model from scratch. Complete guide to discounted cash flow analysis.",
    url: "https://wallstreetplaybook.org/dcf-model-guide",
  },
  alternates: {
    canonical: "https://wallstreetplaybook.org/dcf-model-guide",
  },
}

const dcfSteps = [
  {
    step: "1",
    title: "Project Free Cash Flows",
    desc: "Build operating projections and calculate unlevered free cash flow",
    formula: "FCF = EBIT × (1 - Tax Rate) + D&A - CapEx - ΔNWC",
    details: ["Revenue projections", "Operating margins", "Capital expenditures", "Working capital changes"],
  },
  {
    step: "2",
    title: "Calculate WACC",
    desc: "Determine the weighted average cost of capital for discounting",
    formula: "WACC = (E/V × Re) + (D/V × Rd × (1 - Tc))",
    details: ["Cost of equity (CAPM)", "Cost of debt (YTM)", "Target capital structure", "Tax shield on debt"],
  },
  {
    step: "3",
    title: "Calculate Terminal Value",
    desc: "Estimate the value of cash flows beyond the projection period",
    formula: "TV = FCF × (1 + g) ÷ (WACC - g)  OR  Exit Multiple × Metric",
    details: ["Gordon Growth Model", "Exit Multiple Method", "Perpetuity growth rate", "Terminal multiple selection"],
  },
  {
    step: "4",
    title: "Discount & Sum",
    desc: "Bring future cash flows to present value and calculate enterprise value",
    formula: "PV = CF ÷ (1 + WACC)^n",
    details: ["Mid-year convention", "Present value factors", "Enterprise to equity bridge", "Per share value"],
  },
]

const waccComponents = [
  { component: "Cost of Equity", method: "CAPM: Rf + β × (Rm - Rf)", typical: "8-15%" },
  { component: "Risk-Free Rate", method: "10-year Treasury yield", typical: "4-5%" },
  { component: "Beta", method: "Regression vs market or peer comps", typical: "0.8-1.5" },
  { component: "Equity Risk Premium", method: "Historical market premium", typical: "5-7%" },
  { component: "Cost of Debt", method: "YTM on existing debt or comps", typical: "5-8%" },
  { component: "Target D/E Ratio", method: "Current structure or industry average", typical: "20-50%" },
]

const commonMistakes = [
  { mistake: "Inconsistent assumptions", fix: "Growth rates should align with margins and reinvestment" },
  { mistake: "Unrealistic terminal growth", fix: "Terminal growth should be ≤ GDP growth (2-3%)" },
  { mistake: "Wrong FCF formula", fix: "Use UNLEVERED FCF (before interest), not cash from operations" },
  { mistake: "Forgetting mid-year convention", fix: "Cash flows arrive throughout the year, not at year-end" },
  { mistake: "Double-counting growth", fix: "Exit multiple and growth rate are both estimating the same thing" },
  { mistake: "WACC ≠ discount rate always", fix: "Use cost of equity for FCFE, WACC for FCFF" },
]

const interviewQuestions = [
  "Walk me through a DCF",
  "What is WACC and how do you calculate it?",
  "Why do we use unlevered free cash flow?",
  "What's the Gordon Growth Model?",
  "How do you calculate terminal value?",
  "What happens to DCF value if WACC increases?",
  "What's the mid-year convention?",
  "Is a DCF more sensitive to WACC or terminal growth?",
  "When would a DCF not be appropriate?",
  "How do you get from enterprise value to equity value?",
]

export default function DCFModelGuidePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <ReadingProgress />
      <Navbar />
      <main className="flex-grow pt-0">
        {/* Hero Section */}
        <section className="relative bg-navy-deep pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-navy-deep via-navy to-navy-deep" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,_rgba(201,168,110,0.15),_transparent)]" />
          </div>
          
          <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-gold mb-4">Complete Guide</p>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              DCF <span className="text-gradient-gold">Modeling</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/60 max-w-2xl mx-auto">
              The discounted cash flow model is the foundation of valuation. Learn to build DCFs from 
              scratch and nail the technical questions in interviews.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/playbooks/valuation-mastery"
                className="group flex items-center gap-2 rounded-xl bg-gold px-8 py-4 text-base font-semibold text-navy transition-all hover:bg-white"
              >
                Get Valuation Course
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="#dcf-steps"
                className="rounded-xl border-2 border-white/20 px-8 py-4 text-base font-semibold text-white transition-all hover:border-gold hover:text-gold"
              >
                See DCF Framework
              </Link>
            </div>
          </div>
        </section>

        {/* What is a DCF */}
        <section className="bg-cream py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <ScrollReveal animation="fade-up">
                <h2 className="text-3xl font-bold text-navy sm:text-4xl">What Is a DCF Model?</h2>
                <div className="mt-2 h-1 w-20 bg-gold" />
              </ScrollReveal>
              
              <ScrollReveal animation="fade-up" delay={100} className="mt-8 prose prose-lg max-w-none text-charcoal/80">
                <p>
                  A discounted cash flow (DCF) model values a company based on its expected future cash flows, 
                  discounted back to present value. The core concept is simple: <strong>a dollar today is worth 
                  more than a dollar tomorrow</strong>.
                </p>
                <p>
                  DCFs are considered &quot;intrinsic&quot; valuation because they value a company based on its own 
                  fundamentals, not relative to other companies. This makes DCFs powerful but also sensitive 
                  to your assumptions.
                </p>
              </ScrollReveal>

              <div className="mt-12 grid gap-6 sm:grid-cols-2">
                {[
                  { icon: Calculator, title: "Core Concept", desc: "Present value of all future cash flows the company will generate" },
                  { icon: TrendingDown, title: "Discounting", desc: "Future cash flows are worth less today due to time value of money" },
                  { icon: Target, title: "Intrinsic Value", desc: "Based on fundamentals, not what others are paying for similar assets" },
                  { icon: DollarSign, title: "Output", desc: "Enterprise value, then bridge to equity value and per-share price" },
                ].map((item, index) => (
                  <ScrollReveal key={item.title} animation="fade-up" delay={200 + index * 100}>
                    <div className="flex gap-4 p-5 rounded-xl bg-white shadow-sm">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-navy">
                        <item.icon className="h-5 w-5 text-gold" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-navy">{item.title}</h3>
                        <p className="mt-1 text-sm text-charcoal/60">{item.desc}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* DCF Steps */}
        <section id="dcf-steps" className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <ScrollReveal animation="fade-up">
                <h2 className="text-3xl font-bold text-navy sm:text-4xl">Building a DCF Model: 4 Key Steps</h2>
                <div className="mt-2 h-1 w-20 bg-gold" />
              </ScrollReveal>

              <div className="mt-12 space-y-6">
                {dcfSteps.map((step, index) => (
                  <ScrollReveal key={step.step} animation="fade-up" delay={index * 150}>
                    <div className="rounded-2xl border border-border bg-off-white/50 p-8">
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-navy text-gold font-bold text-xl">
                          {step.step}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-navy">{step.title}</h3>
                          <p className="mt-1 text-charcoal/60">{step.desc}</p>
                          <div className="mt-4 p-3 rounded-lg bg-navy/5 border border-navy/10 font-mono text-sm text-navy">
                            {step.formula}
                          </div>
                          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                            {step.details.map((detail, i) => (
                              <li key={i} className="flex items-center gap-2">
                                <CheckCircle className="h-4 w-4 text-gold" />
                                <span className="text-sm text-charcoal/70">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* WACC Deep Dive */}
        <section className="bg-navy py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <ScrollReveal animation="fade-up">
                <h2 className="text-3xl font-bold text-white sm:text-4xl text-center">Understanding WACC</h2>
                <p className="mt-4 text-center text-white/60">
                  WACC is the most tested DCF concept in interviews. Know every component cold.
                </p>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={150} className="mt-12 overflow-hidden rounded-2xl bg-white/10">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="px-6 py-4 text-left text-sm font-semibold text-white">Component</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-white">Method</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-white">Typical</th>
                    </tr>
                  </thead>
                  <tbody>
                    {waccComponents.map((item, i) => (
                      <tr key={item.component} className={i !== waccComponents.length - 1 ? "border-b border-white/10" : ""}>
                        <td className="px-6 py-4 text-sm font-medium text-gold">{item.component}</td>
                        <td className="px-6 py-4 text-sm text-white/70">{item.method}</td>
                        <td className="px-6 py-4 text-sm text-white/70">{item.typical}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={300} className="mt-8 p-6 rounded-xl bg-white/5 border border-gold/30">
                <h3 className="text-lg font-bold text-gold">Interview Tip</h3>
                <p className="mt-2 text-white/70 text-sm">
                  Be ready to walk through WACC component by component. &quot;We use CAPM for cost of equity, 
                  which requires the risk-free rate (10-year Treasury), beta (company-specific systematic risk), 
                  and the equity risk premium...&quot;
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="bg-cream py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <ScrollReveal animation="fade-up">
                <h2 className="text-3xl font-bold text-navy sm:text-4xl">6 DCF Mistakes That Kill Your Model</h2>
                <div className="mt-2 h-1 w-20 bg-gold" />
              </ScrollReveal>

              <div className="mt-12 space-y-4">
                {commonMistakes.map((item, i) => (
                  <ScrollReveal key={i} animation="fade-up" delay={i * 100}>
                    <div className="rounded-xl border border-border bg-white p-6">
                      <div className="flex items-start gap-4">
                        <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600 text-sm font-bold">
                          {i + 1}
                        </span>
                        <div>
                          <p className="font-semibold text-navy">{item.mistake}</p>
                          <p className="mt-1 text-sm text-charcoal/70">
                            <span className="text-green-600 font-medium">Fix:</span> {item.fix}
                          </p>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Interview Questions */}
        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <ScrollReveal animation="fade-up">
                <h2 className="text-3xl font-bold text-navy sm:text-4xl">Common DCF Interview Questions</h2>
                <div className="mt-2 h-1 w-20 bg-gold" />
              </ScrollReveal>

              <div className="mt-12 grid gap-3 sm:grid-cols-2">
                {interviewQuestions.map((question, i) => (
                  <ScrollReveal key={i} animation="fade-up" delay={i * 50}>
                    <div className="flex items-start gap-3 rounded-xl bg-off-white/50 p-4">
                      <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-navy text-gold text-xs font-bold">
                        {i + 1}
                      </span>
                      <span className="text-sm text-charcoal/80">{question}</span>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              <ScrollReveal animation="zoom-in" delay={300} className="mt-12 rounded-2xl bg-gold/10 border border-gold/30 p-8 text-center">
                <h3 className="text-xl font-bold text-navy">Get Full Answers + DCF Templates</h3>
                <p className="mt-2 text-charcoal/70">
                  Our Valuation Mastery course covers every question with detailed explanations plus 
                  3 fully-built DCF models.
                </p>
                <Link
                  href="/playbooks/valuation-mastery"
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-navy px-6 py-3 text-sm font-semibold text-white hover:bg-gold hover:text-navy transition-colors"
                >
                  Get the Full Course — $67
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Related Deep Dives */}
        <section className="bg-off-white py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-2xl font-bold text-navy">Related Deep Dives</h2>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <Link href="/blog/walk-me-through-dcf-perfect-answer" className="p-4 bg-white rounded-lg border border-border hover:border-gold/50 transition-colors">
                  <p className="font-medium text-navy text-sm">Walk Me Through a DCF</p>
                  <p className="text-xs text-charcoal/50 mt-1">The perfect interview answer</p>
                </Link>
                <Link href="/blog/wacc-explained-simply-finance-interviews" className="p-4 bg-white rounded-lg border border-border hover:border-gold/50 transition-colors">
                  <p className="font-medium text-navy text-sm">WACC Explained Simply</p>
                  <p className="text-xs text-charcoal/50 mt-1">CAPM, cost of debt, and weights</p>
                </Link>
                <Link href="/dcf-interview-questions-2026" className="p-4 bg-white rounded-lg border border-border hover:border-gold/50 transition-colors">
                  <p className="font-medium text-navy text-sm">DCF Interview Questions 2026</p>
                  <p className="text-xs text-charcoal/50 mt-1">All DCF questions by frequency</p>
                </Link>
                <Link href="/valuation-methods-investment-banking" className="p-4 bg-white rounded-lg border border-border hover:border-gold/50 transition-colors">
                  <p className="font-medium text-navy text-sm">Valuation Methods Overview</p>
                  <p className="text-xs text-charcoal/50 mt-1">DCF vs comps vs precedent</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-navy py-20 lg:py-28">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Master DCF and All Technical Topics</h2>
            <p className="mt-4 text-lg text-white/60">
              DCF is just one chapter. The Finance Technical Interview Guide covers all 6 core topics—Accounting, EV/Equity Value, DCF, Comps, M&A, and LBOs—in 88 pages with frequency-tagged questions.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/playbooks/finance-technical-interview-guide"
                className="group flex items-center gap-2 rounded-xl bg-gold px-8 py-4 text-base font-semibold text-navy hover:bg-white transition-colors"
              >
                Get the Finance Technical Interview Guide — $79
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/playbooks"
                className="rounded-xl border-2 border-white/20 px-8 py-4 text-base font-semibold text-white hover:border-gold hover:text-gold transition-colors"
              >
                Browse All Playbooks
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
