import type { Metadata } from "next"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import Link from "next/link"
import { ArrowRight, CheckCircle, FileText, Pencil, Rocket, Users, Lightbulb, Network } from "lucide-react"

export const metadata: Metadata = {
  title: "Venture Capital Resume Review | VC Resume Help 2026",
  description:
    "Expert resume review for venture capital roles. Break into VC with a resume that showcases your deal sourcing, startup experience, and investment judgment. Stand out in the most competitive corner of finance.",
  keywords: [
    "venture capital resume",
    "VC resume",
    "VC associate resume",
    "venture capital resume examples 2026",
    "break into VC",
    "VC analyst resume",
    "startup investor resume",
    "venture capital career",
  ],
  openGraph: {
    title: "Venture Capital Resume Review | Wall Street Playbook",
    description:
      "Professional resume review for VC careers. Highlight your deal flow, startup experience, and investment thesis.",
    url: "https://wallstreetplaybook.org/venture-capital-resume",
  },
  alternates: {
    canonical: "https://wallstreetplaybook.org/venture-capital-resume",
  },
}

const whatVCsWant = [
  { icon: Rocket, title: "Startup/Operating Experience", description: "Founded, worked at, or deeply understand how startups operate" },
  { icon: Network, title: "Deal Flow & Sourcing", description: "Ability to find and build relationships with founders" },
  { icon: Lightbulb, title: "Investment Thesis", description: "Clear point of view on markets, trends, and what makes a great company" },
]

const beforeAfterItems = [
  {
    context: "Generic startup work → Quantified operating impact",
    before: "Worked at an early-stage startup in a business development role",
    after: "Led BD at Series A fintech (seed to $15M ARR), closing partnerships with 3 Fortune 500 banks and driving 40% of revenue growth",
  },
  {
    context: "Vague investing interest → Clear deal experience",
    before: "Interested in venture capital and startup investing",
    after: "Sourced 50+ deals for university VC fund, leading diligence on 5 investments including 2 that achieved 3x+ markups within 18 months",
  },
  {
    context: "Generic analysis → Investment thesis clarity",
    before: "Conducted market research on technology trends",
    after: "Developed investment thesis on vertical SaaS in healthcare, identifying 15 target companies and publishing analysis that generated 200+ founder inbounds",
  },
]

const whoItsFor = [
  "Aspiring VC associates from consulting, banking, or startups",
  "Founders transitioning to the investor side",
  "Current VC analysts seeking associate or principal roles",
  "MBA students targeting venture capital recruiting",
  "Operators looking to break into investing",
  "Angel investors professionalizing their investment career",
]

const faqs = [
  {
    question: "VC recruiting is so unstructured. How can a resume help?",
    answer:
      "You're right that VC hiring is relationship-driven, but your resume still matters. It's often the first thing a partner sees after a warm intro. A strong resume validates the introduction and gives them talking points for the interview.",
  },
  {
    question: "I don't have traditional VC experience. Is that okay?",
    answer:
      "Many VCs come from non-traditional paths—founders, operators, consultants, even journalists. We'll help you frame your unique background as an asset, highlighting the perspectives and networks you bring.",
  },
  {
    question: "Should I include personal investing or angel deals?",
    answer:
      "Absolutely—if you have them. Personal investments (even small ones) demonstrate genuine interest and judgment. We'll help you present them appropriately without overstating their significance.",
  },
  {
    question: "How do I demonstrate 'deal flow' without VC experience?",
    answer:
      "Deal flow comes from networks and expertise. We'll help you highlight your existing networks (startup community, industry connections, alumni), content you've created, and sectors where you have authentic insight.",
  },
]

export default function VentureCapitalResumePage() {
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
                <Rocket className="h-4 w-4" />
                The Most Competitive Corner of Finance
              </div>

              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Venture Capital{" "}
                <span className="text-gold">Resume Review</span>
              </h1>

              <p className="mt-6 text-lg leading-8 text-white/70 max-w-2xl mx-auto">
                VCs receive thousands of applications for single positions. Your resume must instantly 
                demonstrate that you can source deals, evaluate companies, and add value to founders. 
                Get expert feedback on breaking into the most relationship-driven corner of finance.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/submit-resume?service=resume-review&role=venture-capital"
                  className="group flex items-center gap-2 rounded-xl bg-gold px-8 py-4 text-base font-semibold text-navy hover:bg-white transition-colors"
                >
                  Get Resume Review — $197
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/submit-resume?service=resume-rewrite&role=venture-capital"
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
              VC hiring is <strong>notoriously unstructured and relationship-driven</strong>. When you do get in front of a partner, your resume must validate why you deserve the meeting.
            </p>
          </div>
        </section>

        {/* What VCs Want */}
        <section className="bg-cream py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">
                What VC Firms Look For
              </h2>
              <div className="mt-2 h-1 w-20 bg-gold" />
              <p className="mt-6 text-lg text-charcoal/70">
                VCs hire for potential deal flow, founder relationships, and sector expertise—not just analytical skills.
              </p>

              <div className="mt-12 grid gap-6 sm:grid-cols-3">
                {whatVCsWant.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <div key={index} className="rounded-xl bg-white p-6 shadow-sm text-center">
                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gold/10">
                        <Icon className="h-6 w-6 text-gold" />
                      </div>
                      <h3 className="mt-4 text-lg font-semibold text-navy">{item.title}</h3>
                      <p className="mt-2 text-sm text-charcoal/70">{item.description}</p>
                    </div>
                  )
                })}
              </div>

              <div className="mt-12 rounded-xl bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-navy mb-4">Common VC Entry Points We Help With:</h3>
                <div className="grid gap-2 sm:grid-cols-2">
                  {[
                    "Consulting → VC",
                    "Investment Banking → VC",
                    "Startup Operator → VC",
                    "Founder → VC",
                    "MBA → VC Associate",
                    "Corporate Strategy → VC",
                    "Product Manager → VC",
                    "Engineer → VC",
                  ].map((path, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-gold flex-shrink-0" />
                      <span className="text-sm text-charcoal/80">{path}</span>
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
                      "Deal flow/sourcing positioning",
                      "Startup experience framing",
                      "Investment thesis articulation",
                      "Network highlighting strategy",
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
                      href="/submit-resume?service=resume-review&role=venture-capital"
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
                      "VC-optimized narrative",
                      "Unique value proposition clarity",
                      "Sector expertise highlighting",
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
                      href="/submit-resume?service=resume-rewrite&role=venture-capital"
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
              Ready to Break Into Venture Capital?
            </h2>
            <p className="mt-4 text-lg text-white/60">
              Show VC firms you can source deals, evaluate companies, and add value to founders.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/submit-resume?service=resume-review&role=venture-capital"
                className="group flex items-center gap-2 rounded-xl bg-gold px-8 py-4 text-base font-semibold text-navy hover:bg-white transition-colors"
              >
                Get Resume Review — $197
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/submit-resume?service=resume-rewrite&role=venture-capital"
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
