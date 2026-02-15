import type { Metadata } from "next"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import Link from "next/link"
import { ArrowRight, CheckCircle, FileText, Pencil, Shield, Building2, Clock, Scale, FileCheck, DollarSign } from "lucide-react"

export const metadata: Metadata = {
  title: "Credit Analyst Resume Review | Commercial Banking Resume 2026",
  description:
    "Expert resume review for credit analysts and commercial bankers. Showcase your underwriting experience, portfolio management, and credit decision-making. Stand out at banks and lending institutions.",
  keywords: [
    "credit analyst resume",
    "commercial banking resume",
    "loan officer resume",
    "credit underwriting resume",
    "commercial lender resume",
    "credit analyst resume examples 2026",
    "banking resume review",
    "credit risk resume",
  ],
  openGraph: {
    title: "Credit Analyst & Commercial Banking Resume Review | Wall Street Playbook",
    description:
      "Professional resume review for credit and lending roles. Highlight your underwriting experience and credit judgment effectively.",
    url: "https://wallstreetplaybook.org/credit-analyst-resume",
    images: [{ url: "https://wallstreetplaybook.org/og-resume-services.jpg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://wallstreetplaybook.org/credit-analyst-resume",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://wallstreetplaybook.org/og-resume-services.jpg"],
  },
}

const keySkills = [
  { icon: FileCheck, title: "Credit Analysis", description: "Financial statement analysis, cash flow assessment, collateral evaluation" },
  { icon: Scale, title: "Risk Assessment", description: "Credit scoring, risk rating, loan structuring, covenant analysis" },
  { icon: DollarSign, title: "Portfolio Management", description: "Loan monitoring, workout experience, relationship management" },
]

const beforeAfterItems = [
  {
    context: "Generic duty → Quantified portfolio impact",
    before: "Analyzed credit applications and made lending recommendations",
    after: "Underwrote $150M+ in commercial loans annually with 0.2% default rate vs. 1.5% portfolio average, maintaining 98% approval rate on recommended credits",
  },
  {
    context: "Vague responsibility → Clear risk management",
    before: "Monitored existing loan portfolio for credit issues",
    after: "Managed $85M commercial loan portfolio across 45 relationships, identifying 3 potential problem credits early and restructuring to avoid $2.1M in losses",
  },
  {
    context: "Missing context → Full deal scope",
    before: "Prepared credit memos for loan committee",
    after: "Prepared and presented 60+ credit memos annually to senior loan committee, including complex C&I deals up to $25M with custom covenant structures",
  },
]

const whoItsFor = [
  "Credit analysts at commercial banks (JPM, BofA, Wells, regional banks)",
  "Commercial loan officers and relationship managers",
  "Credit risk professionals at lending institutions",
  "Underwriters at specialty finance companies",
  "Analysts transitioning from audit/accounting to credit",
  "Recent graduates targeting commercial banking training programs",
]

const faqs = [
  {
    question: "How is a credit resume different from investment banking?",
    answer:
      "Credit resumes emphasize risk assessment, underwriting judgment, and portfolio management—not deal tombstones. We focus on showcasing your ability to evaluate creditworthiness, structure appropriate terms, and manage ongoing loan relationships.",
  },
  {
    question: "What metrics should I include?",
    answer:
      "Focus on portfolio size, number of relationships, loan volumes underwritten, approval/default rates, and any loss avoidance through early identification. We'll help you quantify your credit judgment and portfolio performance.",
  },
  {
    question: "I'm in a different banking area. Can you help me transition to credit?",
    answer:
      "Yes. Whether you're coming from operations, retail banking, or another area, we'll help you highlight transferable skills like financial analysis, customer relationship management, and risk awareness.",
  },
  {
    question: "Do you cover specialty lending areas?",
    answer:
      "Absolutely. We work with professionals in C&I lending, CRE, ABL, equipment finance, healthcare lending, and other specialty areas. Each has unique terminology and metrics we're familiar with.",
  },
]

export default function CreditAnalystResumePage() {
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
                <Building2 className="h-4 w-4" />
                Commercial Banking Excellence
              </div>

              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Credit Analyst{" "}
                <span className="text-gold">Resume Review</span>
              </h1>

              <p className="mt-6 text-lg leading-8 text-white/70 max-w-2xl mx-auto">
                Your resume must demonstrate credit judgment, not just analytical skills. Show hiring managers 
                your ability to assess risk, structure deals, and manage portfolios. Get expert feedback 
                from professionals who understand commercial banking hiring.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/submit-resume?service=resume-review&role=credit-analyst"
                  className="group flex items-center gap-2 rounded-xl bg-gold px-8 py-4 text-base font-semibold text-navy hover:bg-white transition-colors"
                >
                  Get Resume Review — $197
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/submit-resume?service=resume-rewrite&role=credit-analyst"
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
              <strong>500,000+ commercial banking professionals</strong> in the US. Credit roles require demonstrating judgment and risk management—skills that must come through clearly on your resume.
            </p>
          </div>
        </section>

        {/* Key Skills */}
        <section className="bg-cream py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">
                What Credit Hiring Managers Look For
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
                <h3 className="text-lg font-semibold text-navy mb-4">Lending Areas We Cover:</h3>
                <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
                  {[
                    "C&I Lending",
                    "Commercial Real Estate",
                    "Asset-Based Lending",
                    "Equipment Finance",
                    "Healthcare Lending",
                    "Middle Market",
                    "Small Business",
                    "Specialty Finance",
                  ].map((area, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-gold flex-shrink-0" />
                      <span className="text-sm text-charcoal/80">{area}</span>
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
                      "Credit judgment demonstration",
                      "Portfolio metrics optimization",
                      "Risk management framing",
                      "Deal structure highlighting",
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
                      href="/submit-resume?service=resume-review&role=credit-analyst"
                      className="flex items-center gap-2 rounded-lg bg-navy px-6 py-3 text-sm font-semibold text-white hover:bg-gold hover:text-navy transition-colors"
                    >
                      Get Review
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>

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
                      "Credit narrative development",
                      "Quantified achievements throughout",
                      "Risk/return balance presentation",
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
                      href="/submit-resume?service=resume-rewrite&role=credit-analyst"
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
              Ready to Advance Your Credit Career?
            </h2>
            <p className="mt-4 text-lg text-white/60">
              Show hiring managers your credit judgment and risk management expertise.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/submit-resume?service=resume-review&role=credit-analyst"
                className="group flex items-center gap-2 rounded-xl bg-gold px-8 py-4 text-base font-semibold text-navy hover:bg-white transition-colors"
              >
                Get Resume Review — $197
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/submit-resume?service=resume-rewrite&role=credit-analyst"
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
