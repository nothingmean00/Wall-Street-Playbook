import type { Metadata } from "next"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import Link from "next/link"
import { ArrowRight, CheckCircle, FileText, Pencil, Shield, Users, Clock, BarChart3, TrendingUp, Database } from "lucide-react"

export const metadata: Metadata = {
  title: "FP&A Resume Review | Corporate Finance & Financial Analyst Resume 2026",
  description:
    "Expert resume review for FP&A analysts and corporate finance professionals. Showcase your forecasting accuracy, budget management, and business impact. Stand out for financial analyst roles.",
  keywords: [
    "FP&A resume",
    "corporate finance resume",
    "financial analyst resume",
    "FP&A analyst resume",
    "financial planning analysis resume",
    "corporate finance resume review",
    "FP&A resume examples 2026",
    "financial analyst resume help",
  ],
  openGraph: {
    title: "FP&A & Corporate Finance Resume Review | Wall Street Playbook",
    description:
      "Professional resume review for FP&A and corporate finance roles. Highlight your forecasting, modeling, and strategic finance impact.",
    url: "https://wallstreetplaybook.org/fpa-resume",
  },
  alternates: {
    canonical: "https://wallstreetplaybook.org/fpa-resume",
  },
}

const keySkills = [
  { icon: BarChart3, title: "Financial Modeling", description: "3-statement models, scenario analysis, sensitivity testing" },
  { icon: TrendingUp, title: "Forecasting & Budgeting", description: "Rolling forecasts, variance analysis, budget ownership" },
  { icon: Database, title: "Technical Tools", description: "Excel/VBA, SQL, Power BI, SAP, Hyperion, Anaplan" },
]

const beforeAfterItems = [
  {
    context: "Vague process → Quantified accuracy improvement",
    before: "Responsible for financial forecasting and budgeting",
    after: "Led monthly forecasting process for $200M business unit, improving forecast accuracy from 85% to 94% through enhanced driver-based modeling",
  },
  {
    context: "Generic duty → Specific cost impact",
    before: "Performed variance analysis and prepared reports",
    after: "Identified $3.2M in cost reduction opportunities through detailed variance analysis, presenting findings to CFO and driving implementation",
  },
  {
    context: "Missing scope → Clear business impact",
    before: "Supported annual budgeting process",
    after: "Owned end-to-end annual budget process for 8 cost centers ($75M), coordinating with 15 department heads and reducing cycle time by 3 weeks",
  },
]

const whoItsFor = [
  "FP&A analysts at Fortune 500 companies or high-growth startups",
  "Corporate finance professionals targeting senior FP&A roles",
  "Financial analysts seeking promotion to manager or director",
  "Accountants transitioning into FP&A from audit or public accounting",
  "Investment banking analysts moving to corporate finance",
  "MBA candidates targeting FP&A leadership development programs",
]

const faqs = [
  {
    question: "How is FP&A different from investment banking on a resume?",
    answer:
      "FP&A resumes emphasize operational finance skills—budgeting, forecasting, variance analysis, and business partnership—rather than deal experience. We focus on showcasing your ability to drive business decisions through financial insights.",
  },
  {
    question: "What metrics should I include as an FP&A professional?",
    answer:
      "Focus on forecast accuracy improvements, budget sizes managed, cost savings identified, cycle time reductions, and business decisions influenced. We'll help you quantify your impact in ways that resonate with FP&A hiring managers.",
  },
  {
    question: "Should I list all my technical tools?",
    answer:
      "Yes, but strategically. Excel is assumed—highlight advanced skills (VBA, complex modeling). List relevant EPM tools (Anaplan, Adaptive, Hyperion), BI tools (Power BI, Tableau), and ERP experience (SAP, Oracle). We'll help you organize these effectively.",
  },
  {
    question: "I'm transitioning from accounting. Can you help?",
    answer:
      "Absolutely. Accounting to FP&A is a common transition. We'll help you reframe your audit or accounting experience to highlight analytical skills, business acumen, and forward-looking capabilities that FP&A roles require.",
  },
]

export default function FPAResumePage() {
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
                <BarChart3 className="h-4 w-4" />
                Corporate Finance Excellence
              </div>

              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                FP&A & Corporate Finance{" "}
                <span className="text-gold">Resume Review</span>
              </h1>

              <p className="mt-6 text-lg leading-8 text-white/70 max-w-2xl mx-auto">
                Your resume should demonstrate more than Excel skills—it must show how you drive business 
                decisions through financial insights. Get expert feedback from finance professionals who 
                understand what FP&A hiring managers want.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/submit-resume?service=resume-review&segment=fpa"
                  className="group flex items-center gap-2 rounded-xl bg-gold px-8 py-4 text-base font-semibold text-navy hover:bg-white transition-colors"
                >
                  Get Resume Review — $147
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/submit-resume?service=resume-rewrite&segment=fpa"
                  className="rounded-xl border-2 border-white/20 px-8 py-4 text-base font-semibold text-white hover:border-gold hover:text-gold transition-colors"
                >
                  Full Rewrite — $347
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
              <strong>2+ million corporate finance professionals</strong> in the US. Top FP&A roles at Fortune 500 companies receive hundreds of applications. Your resume needs to stand out.
            </p>
          </div>
        </section>

        {/* Key Skills Section */}
        <section className="bg-cream py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">
                What FP&A Hiring Managers Look For
              </h2>
              <div className="mt-2 h-1 w-20 bg-gold" />

              <div className="mt-12 grid gap-6 sm:grid-cols-3">
                {keySkills.map((skill, index) => {
                  const Icon = skill.icon
                  return (
                    <div key={index} className="rounded-xl bg-white p-6 shadow-sm text-center">
                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gold/10">
                        <Icon className="h-6 w-6 text-gold" />
                      </div>
                      <h3 className="mt-4 text-lg font-semibold text-navy">{skill.title}</h3>
                      <p className="mt-2 text-sm text-charcoal/70">{skill.description}</p>
                    </div>
                  )
                })}
              </div>

              <div className="mt-12 rounded-xl bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-navy mb-4">We Review For:</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    "Forecast accuracy and methodology",
                    "Budget scope and complexity",
                    "Business partnership examples",
                    "Technical tool proficiency",
                    "Cross-functional collaboration",
                    "Strategic vs. tactical balance",
                    "Career progression clarity",
                    "Quantified business impact",
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
              <p className="mt-6 text-center text-white/60">
                See how we transform generic FP&A bullets into compelling achievements.
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
                      "Line-by-line feedback on achievements",
                      "Quantification opportunities identified",
                      "Technical skills positioning",
                      "Business impact framing suggestions",
                      "One round of follow-up questions",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm">
                        <CheckCircle className="h-5 w-5 flex-shrink-0 text-gold" />
                        <span className="text-charcoal/80">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex items-center justify-between">
                    <span className="text-3xl font-bold text-navy">$147</span>
                    <Link
                      href="/submit-resume?service=resume-review&segment=fpa"
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
                      "Achievement-focused bullet writing",
                      "Strategic narrative development",
                      "Technical skills optimization",
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
                    <span className="text-3xl font-bold text-navy">$347</span>
                    <Link
                      href="/submit-resume?service=resume-rewrite&segment=fpa"
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
              Ready to Land Your Next FP&A Role?
            </h2>
            <p className="mt-4 text-lg text-white/60">
              Show hiring managers you're a strategic finance partner, not just a number cruncher.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/submit-resume?service=resume-review&segment=fpa"
                className="group flex items-center gap-2 rounded-xl bg-gold px-8 py-4 text-base font-semibold text-navy hover:bg-white transition-colors"
              >
                Get Resume Review — $147
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/submit-resume?service=resume-rewrite&segment=fpa"
                className="rounded-xl border-2 border-white/20 px-8 py-4 text-base font-semibold text-white hover:border-gold hover:text-gold transition-colors"
              >
                Full Rewrite — $347
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
