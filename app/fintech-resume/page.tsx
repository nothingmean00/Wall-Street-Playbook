import type { Metadata } from "next"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import Link from "next/link"
import { ArrowRight, CheckCircle, FileText, Pencil, Shield, Users, Clock, Zap, Code, TrendingUp } from "lucide-react"

export const metadata: Metadata = {
  title: "Fintech Resume Review | Break Into Fintech 2026",
  description:
    "Expert resume review for fintech roles. Showcase your blend of finance and technology skills. Stand out at Stripe, Square, Plaid, Robinhood, and 30,000+ fintechs worldwide.",
  keywords: [
    "fintech resume",
    "fintech resume examples",
    "break into fintech",
    "fintech jobs resume",
    "fintech career",
    "fintech resume review 2026",
    "payments resume",
    "crypto resume",
    "neobank resume",
  ],
  openGraph: {
    title: "Fintech Resume Review | Wall Street Playbook",
    description:
      "Professional resume review for fintech careers. Bridge finance and tech on your resume to land roles at top fintechs.",
    url: "https://wallstreetplaybook.org/fintech-resume",
    images: [{ url: "https://wallstreetplaybook.org/og-resume-services.jpg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://wallstreetplaybook.org/fintech-resume",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://wallstreetplaybook.org/og-resume-services.jpg"],
  },
}

const fintechSkills = [
  { icon: Code, title: "Technical Skills", description: "Python, SQL, APIs, blockchain, AI/ML—the tech that powers fintech" },
  { icon: TrendingUp, title: "Finance Knowledge", description: "Risk modeling, compliance (KYC/AML), financial products, trading" },
  { icon: Zap, title: "Startup Mentality", description: "Speed, adaptability, ownership—thriving in fast-paced environments" },
]

const beforeAfterItems = [
  {
    context: "Generic tech work → Quantified fintech impact",
    before: "Worked on fraud detection models",
    after: "Developed AI-based fraud detection algorithm reducing false positives by 35%, saving $2.5M annually while maintaining 99.2% fraud catch rate",
  },
  {
    context: "Vague responsibility → Clear product ownership",
    before: "Helped with payment processing features",
    after: "Owned end-to-end development of instant ACH feature processing $50M+ daily, reducing settlement time from 3 days to same-day for 2M+ users",
  },
  {
    context: "Missing context → Full business impact",
    before: "Analyzed customer data for product improvements",
    after: "Built predictive churn model using Python/SQL identifying at-risk customers 30 days early, enabling retention campaigns that reduced churn by 22%",
  },
]

const whoItsFor = [
  "Software engineers moving into fintech from other tech sectors",
  "Finance professionals transitioning to fintech companies",
  "Product managers targeting payments, lending, or crypto companies",
  "Data scientists interested in financial applications",
  "Recent graduates targeting fintech rotational programs",
  "Career changers without traditional finance or tech backgrounds",
]

const fintechSectors = [
  "Payments (Stripe, Square, Adyen)",
  "Neobanks (Chime, Revolut, N26)",
  "Lending (SoFi, Affirm, Upstart)",
  "Crypto/Web3 (Coinbase, Kraken)",
  "Infrastructure (Plaid, Marqeta)",
  "Insurtech (Lemonade, Root)",
  "Wealthtech (Robinhood, Betterment)",
  "B2B Fintech (Brex, Ramp)",
]

const faqs = [
  {
    question: "I don't have a finance OR tech background. Can I still break into fintech?",
    answer:
      "Yes. Fintech values results over credentials. We'll help you highlight transferable skills—analytical thinking, customer focus, problem-solving—and frame your experience in fintech-relevant terms. Many successful fintech professionals came from non-traditional backgrounds.",
  },
  {
    question: "How technical do I need to be?",
    answer:
      "It depends on the role. Product, ops, and business roles need financial literacy and data comfort, not coding expertise. Technical roles need demonstrable programming skills. We'll help you position your technical depth appropriately for your target roles.",
  },
  {
    question: "Should I highlight startup experience?",
    answer:
      "Absolutely. Fintech companies value candidates who thrive in ambiguity, move fast, and take ownership. If you have startup experience, we'll help you showcase the scrappiness and impact that resonates with fintech hiring managers.",
  },
  {
    question: "How is fintech recruiting different from traditional finance?",
    answer:
      "Fintech hiring is less structured—no investment banking-style recruiting cycles. It's more like tech hiring: rolling applications, case studies, and culture fit emphasis. Your resume needs to show impact and adaptability, not just credentials.",
  },
]

export default function FintechResumePage() {
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
                <Zap className="h-4 w-4" />
                30,000+ Fintechs Worldwide
              </div>

              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Fintech{" "}
                <span className="text-gold">Resume Review</span>
              </h1>

              <p className="mt-6 text-lg leading-8 text-white/70 max-w-2xl mx-auto">
                Fintech doesn't care about your pedigree—it cares about what you can build and the impact you've driven. 
                Get expert feedback on bridging finance and tech to land roles at the companies reshaping financial services.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/submit-resume?service=resume-review&role=fintech"
                  className="group flex items-center gap-2 rounded-xl bg-gold px-8 py-4 text-base font-semibold text-navy hover:bg-white transition-colors"
                >
                  Get Resume Review — $197
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/submit-resume?service=resume-rewrite&role=fintech"
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
              Fintech is one of the <strong>fastest-growing job markets</strong> combining finance and technology. Your resume must show you can operate at the intersection of both worlds.
            </p>
          </div>
        </section>

        {/* What Fintech Looks For */}
        <section className="bg-cream py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">
                What Fintech Hiring Managers Want
              </h2>
              <div className="mt-2 h-1 w-20 bg-gold" />

              <div className="mt-12 grid gap-6 sm:grid-cols-3">
                {fintechSkills.map((skill, index) => {
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
                <h3 className="text-lg font-semibold text-navy mb-4">Fintech Sectors We Cover:</h3>
                <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
                  {fintechSectors.map((sector, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-gold flex-shrink-0" />
                      <span className="text-sm text-charcoal/80">{sector}</span>
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
                      "Tech + finance balance assessment",
                      "Impact quantification suggestions",
                      "Startup-friendly framing",
                      "Skills section optimization",
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
                      href="/submit-resume?service=resume-review&role=fintech"
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
                      "Fintech-optimized positioning",
                      "Technical skills presentation",
                      "Impact-driven bullet writing",
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
                      href="/submit-resume?service=resume-rewrite&role=fintech"
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
              Ready to Break Into Fintech?
            </h2>
            <p className="mt-4 text-lg text-white/60">
              Show fintech hiring managers you can build at the intersection of finance and technology.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/submit-resume?service=resume-review&role=fintech"
                className="group flex items-center gap-2 rounded-xl bg-gold px-8 py-4 text-base font-semibold text-navy hover:bg-white transition-colors"
              >
                Get Resume Review — $197
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/submit-resume?service=resume-rewrite&role=fintech"
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
