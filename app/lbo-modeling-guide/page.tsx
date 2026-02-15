import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { ReadingProgress } from "@/components/reading-progress"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ArrowRight, CheckCircle, Calculator, TrendingUp, DollarSign, BarChart3 } from "lucide-react"

export const metadata: Metadata = {
  title: "LBO Modeling Guide | Learn Leveraged Buyout Models 2026",
  description:
    "Complete guide to LBO modeling. Learn how to build leveraged buyout models from scratch, paper LBO frameworks, and the concepts PE firms test in interviews.",
  keywords: [
    "LBO modeling",
    "leveraged buyout model",
    "LBO model tutorial",
    "how to build an LBO model",
    "paper LBO",
    "LBO interview questions",
    "private equity modeling",
    "LBO Excel template",
  ],
  openGraph: {
    title: "LBO Modeling Guide | Learn Leveraged Buyout Models 2026",
    description:
      "Complete guide to LBO modeling. Learn how to build leveraged buyout models and ace PE interviews.",
    url: "https://wallstreetplaybook.org/lbo-modeling-guide",
    images: [{ url: "https://wallstreetplaybook.org/og-interview-prep.jpg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://wallstreetplaybook.org/lbo-modeling-guide",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://wallstreetplaybook.org/og-interview-prep.jpg"],
  },
}

const lboSteps = [
  {
    step: "1",
    title: "Transaction Assumptions",
    desc: "Entry multiple, purchase price, debt/equity split, financing fees",
    details: ["Entry EV/EBITDA multiple", "Sources and uses of funds", "Debt structure (senior, sub, mezz)", "Transaction and financing fees"],
  },
  {
    step: "2",
    title: "Operating Model",
    desc: "Project revenue, EBITDA, and cash flows over the hold period",
    details: ["Revenue growth assumptions", "Margin expansion/contraction", "Working capital changes", "Capital expenditures"],
  },
  {
    step: "3",
    title: "Debt Schedule",
    desc: "Model interest expense and debt paydown over time",
    details: ["Mandatory amortization", "Cash flow sweeps", "Interest rate assumptions", "Debt paydown waterfall"],
  },
  {
    step: "4",
    title: "Returns Analysis",
    desc: "Calculate exit value, equity proceeds, IRR, and MOIC",
    details: ["Exit multiple assumption", "Exit enterprise value", "Equity value at exit", "IRR and MOIC calculation"],
  },
]

const paperLboRules = [
  { rule: "Rule of 72", formula: "If equity doubles, IRR ≈ 72 ÷ years", example: "2x in 5 years = ~14% IRR" },
  { rule: "Rule of 114", formula: "If equity triples, IRR ≈ 114 ÷ years", example: "3x in 5 years = ~23% IRR" },
  { rule: "Rule of 144", formula: "If equity quadruples, IRR ≈ 144 ÷ years", example: "4x in 5 years = ~29% IRR" },
]

const valueCreation = [
  { lever: "EBITDA Growth", desc: "Grow earnings through revenue or margin improvement", impact: "High" },
  { lever: "Multiple Expansion", desc: "Exit at a higher multiple than entry", impact: "Medium" },
  { lever: "Debt Paydown", desc: "Use cash flow to reduce debt, increasing equity value", impact: "High" },
  { lever: "Dividends/Recaps", desc: "Extract value during the hold period", impact: "Medium" },
]

const commonQuestions = [
  "Walk me through an LBO",
  "What makes a good LBO candidate?",
  "How do you calculate IRR?",
  "What are the key value creation levers?",
  "How does leverage impact returns?",
  "What happens to IRR if you increase debt?",
  "Walk me through a paper LBO",
  "What's a typical debt/equity split?",
  "How do you size debt in an LBO?",
  "What's the difference between IRR and MOIC?",
]

export default function LBOModelingGuidePage() {
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
              LBO <span className="text-gradient-gold">Modeling</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/60 max-w-2xl mx-auto">
              Master leveraged buyout modeling from the ground up. Learn the mechanics, build models from 
              scratch, and nail the paper LBO in PE interviews.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/playbooks/lbo-modeling-course"
                className="group flex items-center gap-2 rounded-xl bg-gold px-8 py-4 text-base font-semibold text-navy transition-all hover:bg-white"
              >
                Get the LBO Course
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="#paper-lbo"
                className="rounded-xl border-2 border-white/20 px-8 py-4 text-base font-semibold text-white transition-all hover:border-gold hover:text-gold"
              >
                Paper LBO Framework
              </Link>
            </div>
          </div>
        </section>

        {/* What is an LBO */}
        <section className="bg-cream py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <ScrollReveal animation="fade-up">
                <h2 className="text-3xl font-bold text-navy sm:text-4xl">What Is a Leveraged Buyout?</h2>
                <div className="mt-2 h-1 w-20 bg-gold" />
              </ScrollReveal>
              
              <ScrollReveal animation="fade-up" delay={100} className="mt-8 prose prose-lg max-w-none text-charcoal/80">
                <p>
                  A leveraged buyout (LBO) is when a private equity firm acquires a company using a significant 
                  amount of <strong>borrowed money (debt)</strong> to fund the purchase. The target company&apos;s 
                  assets and cash flows are used as collateral and to repay the debt.
                </p>
                <p>
                  The &quot;leverage&quot; amplifies returns: if the company performs well, equity investors earn 
                  outsized returns because they only put up a fraction of the purchase price. But leverage 
                  also amplifies risk—if things go wrong, equity can be wiped out.
                </p>
              </ScrollReveal>

              <div className="mt-12 grid gap-6 sm:grid-cols-2">
                {[
                  { icon: DollarSign, title: "Typical Structure", desc: "60-70% debt, 30-40% equity contribution from the PE fund" },
                  { icon: TrendingUp, title: "Target Returns", desc: "20%+ IRR and 2-3x+ MOIC over 5-7 year hold period" },
                  { icon: Calculator, title: "Exit Strategy", desc: "Sale to strategic buyer, another PE firm, or IPO" },
                  { icon: BarChart3, title: "Value Creation", desc: "EBITDA growth, multiple expansion, debt paydown" },
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

        {/* LBO Model Steps */}
        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <ScrollReveal animation="fade-up">
                <h2 className="text-3xl font-bold text-navy sm:text-4xl">Building an LBO Model: 4 Key Steps</h2>
                <div className="mt-2 h-1 w-20 bg-gold" />
              </ScrollReveal>

              <div className="mt-12 space-y-6">
                {lboSteps.map((step, index) => (
                  <ScrollReveal key={step.step} animation="fade-up" delay={index * 150}>
                    <div className="rounded-2xl border border-border bg-off-white/50 p-8">
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-navy text-gold font-bold text-xl">
                          {step.step}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-navy">{step.title}</h3>
                          <p className="mt-1 text-charcoal/60">{step.desc}</p>
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

        {/* Paper LBO */}
        <section id="paper-lbo" className="bg-navy py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <ScrollReveal animation="fade-up">
                <h2 className="text-3xl font-bold text-white sm:text-4xl text-center">The Paper LBO Framework</h2>
                <p className="mt-4 text-center text-white/60">
                  In PE interviews, you&apos;ll need to solve an LBO in 10-15 minutes with just pen and paper. 
                  These rules let you calculate IRR without Excel.
                </p>
              </ScrollReveal>

              <div className="mt-12 space-y-4">
                {paperLboRules.map((rule, index) => (
                  <ScrollReveal key={rule.rule} animation="fade-up" delay={index * 100}>
                    <div className="rounded-xl bg-white/10 p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div>
                          <h3 className="text-lg font-bold text-gold">{rule.rule}</h3>
                          <p className="mt-1 text-white/70">{rule.formula}</p>
                        </div>
                        <div className="px-4 py-2 rounded-lg bg-white/10 text-sm font-mono text-white">
                          {rule.example}
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              <ScrollReveal animation="zoom-in" delay={300} className="mt-12 rounded-2xl bg-white/10 p-8">
                <h3 className="text-xl font-bold text-white mb-4">Paper LBO Example</h3>
                <div className="text-white/80 space-y-3 font-mono text-sm">
                  <p><span className="text-gold">Given:</span> Buy company at 8x EBITDA, $100M EBITDA</p>
                  <p><span className="text-gold">Structure:</span> 60% debt ($480M), 40% equity ($320M)</p>
                  <p><span className="text-gold">Assumptions:</span> EBITDA grows to $130M, exit at 8x, pay down $150M debt</p>
                  <p className="border-t border-white/20 pt-3 mt-3">
                    <span className="text-gold">Exit EV:</span> $130M × 8 = $1,040M
                  </p>
                  <p><span className="text-gold">Remaining Debt:</span> $480M - $150M = $330M</p>
                  <p><span className="text-gold">Exit Equity:</span> $1,040M - $330M = $710M</p>
                  <p><span className="text-gold">MOIC:</span> $710M ÷ $320M = 2.2x</p>
                  <p><span className="text-gold">IRR:</span> ~17% (using Rule of 72: 2.2x in 5 years)</p>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={400} className="mt-8 text-center">
                <Link
                  href="/playbooks/lbo-modeling-course"
                  className="inline-flex items-center gap-2 rounded-xl bg-gold px-8 py-4 text-base font-semibold text-navy hover:bg-white transition-colors"
                >
                  Get Full LBO Course + Excel Templates — $79
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Value Creation */}
        <section className="bg-cream py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <ScrollReveal animation="fade-up">
                <h2 className="text-3xl font-bold text-navy sm:text-4xl">LBO Value Creation Levers</h2>
                <div className="mt-2 h-1 w-20 bg-gold" />
                <p className="mt-4 text-charcoal/70">
                  Understanding how PE firms create value is essential for interviews.
                </p>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={150} className="mt-12 overflow-hidden rounded-2xl border border-border bg-white">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border bg-off-white/50">
                      <th className="px-6 py-4 text-left text-sm font-semibold text-navy">Lever</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-navy">Description</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-navy">Impact</th>
                    </tr>
                  </thead>
                  <tbody>
                    {valueCreation.map((item, i) => (
                      <tr key={item.lever} className={i !== valueCreation.length - 1 ? "border-b border-border" : ""}>
                        <td className="px-6 py-4 text-sm font-medium text-navy">{item.lever}</td>
                        <td className="px-6 py-4 text-sm text-charcoal/70">{item.desc}</td>
                        <td className="px-6 py-4">
                          <span className={`px-2 py-1 rounded text-xs font-semibold ${
                            item.impact === "High" ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"
                          }`}>
                            {item.impact}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Common Questions */}
        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <ScrollReveal animation="fade-up">
                <h2 className="text-3xl font-bold text-navy sm:text-4xl">Common LBO Interview Questions</h2>
                <div className="mt-2 h-1 w-20 bg-gold" />
              </ScrollReveal>

              <div className="mt-12 grid gap-3 sm:grid-cols-2">
                {commonQuestions.map((question, i) => (
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
                <h3 className="text-xl font-bold text-navy">Want Detailed Answers to All These Questions?</h3>
                <p className="mt-2 text-charcoal/70">
                  Our LBO Modeling Course covers every question with step-by-step explanations.
                </p>
                <Link
                  href="/playbooks/lbo-modeling-course"
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-navy px-6 py-3 text-sm font-semibold text-white hover:bg-gold hover:text-navy transition-colors"
                >
                  Get the Full Course — $79
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-navy py-20 lg:py-28">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Master LBO Modeling</h2>
            <p className="mt-4 text-lg text-white/60">
              Our course includes step-by-step tutorials, 3 full LBO model templates, and practice case studies.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/playbooks/lbo-modeling-course"
                className="group flex items-center gap-2 rounded-xl bg-gold px-8 py-4 text-base font-semibold text-navy hover:bg-white transition-colors"
              >
                Get the LBO Course — $79
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/private-equity-recruiting"
                className="rounded-xl border-2 border-white/20 px-8 py-4 text-base font-semibold text-white hover:border-gold hover:text-gold transition-colors"
              >
                PE Recruiting Guide
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
