import type { Metadata } from "next"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import Link from "next/link"
import { ArrowRight, CheckCircle, Code, TrendingUp, Calculator, AlertTriangle } from "lucide-react"

export const metadata: Metadata = {
  title: "Engineer to Finance | Software Developer & Engineering Career Change",
  description:
    "How engineers and software developers can transition to finance careers—investment banking, quant roles, fintech, and more. What transfers, what doesn't, and the realistic path.",
  keywords: [
    "engineer to finance",
    "software developer to finance",
    "engineering to investment banking",
    "software engineer quant",
    "engineer to wall street",
    "developer finance career",
    "tech to banking",
    "engineer MBA finance",
  ],
  openGraph: {
    title: "Engineer to Finance | Wall Street Playbook",
    description: "The engineer's guide to breaking into finance.",
    url: "https://wallstreetplaybook.org/engineer-to-finance",
  },
  alternates: {
    canonical: "https://wallstreetplaybook.org/engineer-to-finance",
  },
}

export default function EngineerToFinancePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-navy pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-gold/10 px-4 py-2 text-sm font-medium text-gold mb-6">
              <Code className="h-4 w-4" />
              For Engineers & Developers
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Engineer to Finance: <span className="text-gold">What Actually Works</span>
            </h1>
            <p className="mt-6 text-lg text-white/70">
              Your analytical skills transfer. But the path isn't straightforward.
            </p>
          </div>
        </section>

        {/* The Question */}
        <section className="bg-cream py-16">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <div className="rounded-xl bg-white p-8 shadow-sm">
              <div className="flex items-start gap-4">
                <AlertTriangle className="h-6 w-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl font-bold text-navy">First Question: Which Finance?</h2>
                  <p className="mt-2 text-charcoal/70">
                    "Finance" means different things. The path for an engineer depends entirely on which 
                    corner of finance you're targeting. Quant trading is very different from investment banking.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Role Options */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-navy">Where Engineers Land in Finance</h2>
            <div className="mt-2 h-1 w-16 bg-gold" />

            <div className="mt-10 space-y-6">
              <div className="rounded-xl border-2 border-green-200 bg-green-50 p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="h-6 w-6 rounded-full bg-green-500 flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <h3 className="font-semibold text-green-800">Easiest Transitions</h3>
                </div>
                <ul className="space-y-2 text-sm text-green-700">
                  <li><strong>Quant Developer / Engineer</strong> — Your coding skills are the job. Finance knowledge is secondary.</li>
                  <li><strong>Fintech</strong> — Tech-first companies that happen to be in finance. Your skills transfer directly.</li>
                  <li><strong>Data Science in Finance</strong> — Python, SQL, ML applied to financial data.</li>
                  <li><strong>Algo Trading (Tech Side)</strong> — Building trading systems, not making trading decisions.</li>
                </ul>
              </div>

              <div className="rounded-xl border-2 border-yellow-200 bg-yellow-50 p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="h-6 w-6 rounded-full bg-yellow-500 flex items-center justify-center text-white text-xs font-bold">~</div>
                  <h3 className="font-semibold text-yellow-800">Harder But Doable</h3>
                </div>
                <ul className="space-y-2 text-sm text-yellow-700">
                  <li><strong>Quantitative Researcher</strong> — Needs stats/math depth beyond typical engineering.</li>
                  <li><strong>Corporate Finance / FP&A</strong> — Values analytical skills but requires finance knowledge.</li>
                  <li><strong>Venture Capital</strong> — Technical background valued for evaluating tech startups.</li>
                </ul>
              </div>

              <div className="rounded-xl border-2 border-red-200 bg-red-50 p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="h-6 w-6 rounded-full bg-red-500 flex items-center justify-center text-white text-xs font-bold">!</div>
                  <h3 className="font-semibold text-red-800">Significant Pivot Required</h3>
                </div>
                <ul className="space-y-2 text-sm text-red-700">
                  <li><strong>Investment Banking</strong> — Possible but requires MBA or significant repositioning.</li>
                  <li><strong>Private Equity</strong> — Almost always requires IB experience first.</li>
                  <li><strong>Sales & Trading (Non-Quant)</strong> — Different skillset, different personality fit.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* What Transfers */}
        <section className="bg-navy py-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white">What Transfers vs. What Doesn't</h2>
            <div className="mt-2 h-1 w-16 bg-gold" />

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="rounded-xl bg-white/5 p-6">
                <h3 className="font-semibold text-green-400 mb-4">✓ What Transfers</h3>
                <ul className="space-y-3 text-sm text-white/80">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Analytical thinking and problem-solving</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Attention to detail and precision</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Working with complex systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Excel skills (often stronger than finance grads)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Programming (Python, SQL, VBA)</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl bg-white/5 p-6">
                <h3 className="font-semibold text-red-400 mb-4">✕ What You'll Need to Build</h3>
                <ul className="space-y-3 text-sm text-white/80">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 flex-shrink-0">✕</span>
                    <span>Accounting fundamentals (how financial statements work)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 flex-shrink-0">✕</span>
                    <span>Valuation methods (DCF, comps, precedents)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 flex-shrink-0">✕</span>
                    <span>Market knowledge and financial intuition</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 flex-shrink-0">✕</span>
                    <span>Client-facing soft skills (for IB roles)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 flex-shrink-0">✕</span>
                    <span>Finance vocabulary and deal terminology</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Path by Target */}
        <section className="bg-cream py-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-navy">The Path Depends on Your Target</h2>
            <div className="mt-2 h-1 w-16 bg-gold" />

            <div className="mt-10 space-y-8">
              {/* Quant */}
              <div className="rounded-xl bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Calculator className="h-6 w-6 text-gold" />
                  <h3 className="text-lg font-semibold text-navy">If You Want: Quant / Trading Tech</h3>
                </div>
                <div className="space-y-3 text-sm text-charcoal/70">
                  <p>
                    <strong className="text-navy">What to do:</strong> Apply directly. Your engineering background 
                    is what they want. Focus on firms like Jane Street, Two Sigma, Citadel, DE Shaw.
                  </p>
                  <p>
                    <strong className="text-navy">What to prep:</strong> Coding interviews (LeetCode-style), 
                    probability/stats questions, system design. Finance knowledge is less critical.
                  </p>
                  <p>
                    <strong className="text-navy">Timeline:</strong> Can happen in months with strong interview prep.
                  </p>
                </div>
              </div>

              {/* Fintech */}
              <div className="rounded-xl bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Code className="h-6 w-6 text-gold" />
                  <h3 className="text-lg font-semibold text-navy">If You Want: Fintech</h3>
                </div>
                <div className="space-y-3 text-sm text-charcoal/70">
                  <p>
                    <strong className="text-navy">What to do:</strong> Apply to Stripe, Plaid, Robinhood, Square, etc. 
                    Your tech skills are the primary qualification.
                  </p>
                  <p>
                    <strong className="text-navy">What to prep:</strong> Standard tech interviews. Show some interest 
                    in the finance domain but don't need deep expertise.
                  </p>
                  <p>
                    <strong className="text-navy">Timeline:</strong> Direct transfer—same timeline as any tech job switch.
                  </p>
                </div>
              </div>

              {/* IB */}
              <div className="rounded-xl bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="h-6 w-6 text-gold" />
                  <h3 className="text-lg font-semibold text-navy">If You Want: Investment Banking</h3>
                </div>
                <div className="space-y-3 text-sm text-charcoal/70">
                  <p>
                    <strong className="text-navy">Reality check:</strong> This is the hardest path. IB recruiting 
                    is structured around business school pipelines.
                  </p>
                  <p>
                    <strong className="text-navy">Best path:</strong> Top MBA (use your engineering GPA and work 
                    experience for admissions), then recruit for associate roles.
                  </p>
                  <p>
                    <strong className="text-navy">Alternative:</strong> Target tech coverage groups at banks that 
                    value your domain expertise.
                  </p>
                  <p>
                    <strong className="text-navy">Timeline:</strong> 2-4 years including MBA.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The "Why" Question */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-navy">Expect This Question: "Why Leave Engineering?"</h2>
            <div className="mt-2 h-1 w-16 bg-gold" />

            <div className="mt-8 rounded-xl bg-off-white p-6">
              <p className="text-charcoal/70 mb-6">
                Finance interviewers will scrutinize your motivation. They've seen engineers who want "prestige" 
                or "more money" without understanding what finance work actually involves.
              </p>

              <div className="p-4 bg-green-50 rounded-lg mb-4">
                <p className="text-sm font-medium text-green-800">Credible answers reference specific interests:</p>
                <ul className="text-sm text-green-700 mt-2 space-y-1">
                  <li>• "I built models to analyze my own investments and found the work more engaging than my day job"</li>
                  <li>• "Working with our finance team on budgeting made me realize I wanted to do that full-time"</li>
                  <li>• "I want to be closer to business strategy, not just building what product tells me to build"</li>
                </ul>
              </div>

              <div className="p-4 bg-red-50 rounded-lg">
                <p className="text-sm font-medium text-red-800">Red flags to avoid:</p>
                <ul className="text-sm text-red-700 mt-2 space-y-1">
                  <li>• "Engineering doesn't pay enough" (finance pays well but so does senior engineering)</li>
                  <li>• "I want to work in a more prestigious field" (superficial)</li>
                  <li>• "I heard banking is exciting" (vague, sounds uninformed)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-navy py-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-white">
              Need Help Positioning Your Engineering Background?
            </h2>
            <p className="mt-4 text-white/60">
              Your technical skills are valuable—but your resume needs to frame them for finance hiring managers.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/submit-resume?service=resume-rewrite"
                className="group flex items-center gap-2 rounded-xl bg-gold px-8 py-4 text-base font-semibold text-navy hover:bg-white transition-colors"
              >
                Get Resume Rewrite — $497
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
