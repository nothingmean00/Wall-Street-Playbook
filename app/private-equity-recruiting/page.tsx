import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { ArrowRight, CheckCircle, Clock, AlertTriangle, TrendingUp } from "lucide-react"

export const metadata: Metadata = {
  title: "Private Equity Recruiting Guide | On-Cycle & Off-Cycle 2026",
  description:
    "The complete guide to private equity recruiting. On-cycle timelines, headhunter strategies, PE technical questions, case studies, and how to navigate the most competitive recruiting process in finance.",
  keywords: [
    "private equity recruiting",
    "PE recruiting timeline",
    "on-cycle PE recruiting",
    "private equity interview questions",
    "PE headhunters",
    "private equity case study",
    "how to get into private equity",
  ],
  openGraph: {
    title: "Private Equity Recruiting Guide | On-Cycle & Off-Cycle 2026",
    description:
      "The complete guide to private equity recruiting. On-cycle timelines, headhunter strategies, and PE interview preparation.",
    url: "https://wallstreetplaybook.org/private-equity-recruiting",
  },
  alternates: {
    canonical: "https://wallstreetplaybook.org/private-equity-recruiting",
  },
}

const onCycleTimeline = [
  { time: "Month 1-3 of IB", event: "Headhunters start reaching out to top performers" },
  { time: "Month 4-6", event: "First-round interviews begin, often with 24-48 hour notice" },
  { time: "Month 6-8", event: "Superdays and offers extended, often same-day decisions" },
  { time: "Month 9-12", event: "Off-cycle recruiting for remaining spots" },
]

const technicalTopics = [
  {
    title: "LBO Mechanics",
    items: ["Sources & uses of funds", "Debt schedules and paydown", "IRR and MOIC calculations", "Value creation bridges"],
  },
  {
    title: "Paper LBO",
    items: ["10-minute mental math framework", "Quick IRR approximations", "Key sensitivity drivers", "Common shortcuts"],
  },
  {
    title: "Deal Discussion",
    items: ["Walk through a deal you worked on", "What would you change about the deal?", "How did you add value?", "Key learnings"],
  },
  {
    title: "Investment Thesis",
    items: ["Industry analysis", "Company positioning", "Value creation plan", "Risk factors and mitigants"],
  },
]

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the difference between on-cycle and off-cycle PE recruiting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "On-cycle PE recruiting is the main recruiting push that happens 6-18 months before start date, with a highly compressed timeline (days, not weeks), focused on mega-funds and upper-middle-market firms, and driven by headhunters. Off-cycle recruiting happens year-round as needs arise, offers more preparation time between rounds, focuses on middle-market and growth equity, and allows for direct outreach.",
      },
    },
    {
      "@type": "Question",
      name: "When does on-cycle PE recruiting start?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "On-cycle PE recruiting typically begins within months 1-3 of starting as an IB analyst, when headhunters start reaching out to top performers. First-round interviews begin around months 4-6, often with 24-48 hour notice. Superdays and offers are extended around months 6-8, with same-day decisions being common.",
      },
    },
    {
      "@type": "Question",
      name: "What technical topics are tested in PE interviews?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PE interviews focus on four main technical areas: LBO mechanics (sources & uses, debt schedules, IRR/MOIC calculations), Paper LBO (10-minute mental math framework, quick IRR approximations), Deal Discussion (walking through deals you worked on, key learnings), and Investment Thesis (industry analysis, company positioning, value creation plan, risk factors).",
      },
    },
    {
      "@type": "Question",
      name: "What IRR and MOIC do PE firms typically target?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PE firms typically target an IRR of 20%+ and a MOIC (multiple on invested capital) of 2-3x. You should be able to complete a paper LBO in about 10 minutes during an interview setting.",
      },
    },
    {
      "@type": "Question",
      name: "How fast can on-cycle PE recruiting move?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "On-cycle PE recruiting can move extremely fast - you can go from first headhunter call to signed offer in under 72 hours. This is why preparation must be complete before your phone rings, as there is no time to prepare during the process itself.",
      },
    },
  ],
}

const breadcrumbStructuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://wallstreetplaybook.org",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Private Equity Recruiting",
      item: "https://wallstreetplaybook.org/private-equity-recruiting",
    },
  ],
}

export default function PrivateEquityRecruitingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
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
              Private Equity <span className="text-gradient-gold">Recruiting</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/60 max-w-2xl mx-auto">
              Navigate on-cycle chaos, build headhunter relationships, and crush PE interviews. 
              Everything you need to break into private equity in 2026.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/playbooks/pe-recruiting-playbook"
                className="group flex items-center gap-2 rounded-xl bg-gold px-8 py-4 text-base font-semibold text-navy transition-all hover:bg-white"
              >
                Get the PE Playbook
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="#on-cycle-timeline"
                className="rounded-xl border-2 border-white/20 px-8 py-4 text-base font-semibold text-white transition-all hover:border-gold hover:text-gold"
              >
                View Timeline
              </Link>
            </div>
          </div>
        </section>

        {/* Warning Banner */}
        <section className="bg-gold py-6">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex items-center justify-center gap-3 text-navy">
              <AlertTriangle className="h-5 w-5" />
              <p className="text-sm font-semibold">
                On-cycle PE recruiting moves fast. You can go from first call to signed offer in under 72 hours.
              </p>
            </div>
          </div>
        </section>

        {/* On-Cycle vs Off-Cycle */}
        <section className="bg-cream py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">On-Cycle vs. Off-Cycle Recruiting</h2>
              <div className="mt-2 h-1 w-20 bg-gold" />
              
              <div className="mt-8 prose prose-lg max-w-none text-charcoal/80">
                <p>
                  Private equity recruiting operates on two tracks: <strong>on-cycle</strong> (the main recruiting push 
                  that happens increasingly early) and <strong>off-cycle</strong> (opportunistic hiring throughout the year). 
                  Understanding the difference is critical to your strategy.
                </p>
              </div>

              <div className="mt-12 grid gap-8 lg:grid-cols-2">
                <div className="rounded-2xl bg-white p-8 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy">
                      <Clock className="h-5 w-5 text-gold" />
                    </div>
                    <h3 className="text-xl font-bold text-navy">On-Cycle</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 flex-shrink-0 text-gold mt-0.5" />
                      <span className="text-charcoal/80">Starts 6-18 months before start date</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 flex-shrink-0 text-gold mt-0.5" />
                      <span className="text-charcoal/80">Highly compressed timeline (days, not weeks)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 flex-shrink-0 text-gold mt-0.5" />
                      <span className="text-charcoal/80">Mega-funds and upper-middle-market</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 flex-shrink-0 text-gold mt-0.5" />
                      <span className="text-charcoal/80">Headhunter-driven process</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-2xl bg-white p-8 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy">
                      <TrendingUp className="h-5 w-5 text-gold" />
                    </div>
                    <h3 className="text-xl font-bold text-navy">Off-Cycle</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 flex-shrink-0 text-gold mt-0.5" />
                      <span className="text-charcoal/80">Happens year-round as needs arise</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 flex-shrink-0 text-gold mt-0.5" />
                      <span className="text-charcoal/80">More time for preparation between rounds</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 flex-shrink-0 text-gold mt-0.5" />
                      <span className="text-charcoal/80">Middle-market and growth equity focus</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 flex-shrink-0 text-gold mt-0.5" />
                      <span className="text-charcoal/80">Direct outreach can work</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section id="on-cycle-timeline" className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">On-Cycle PE Recruiting Timeline</h2>
              <div className="mt-2 h-1 w-20 bg-gold" />
              
              <p className="mt-6 text-lg text-charcoal/70">
                On-cycle recruiting has moved earlier every year. Here&apos;s what to expect if you&apos;re starting 
                as an IB analyst targeting PE.
              </p>

              <div className="mt-12 space-y-6">
                {onCycleTimeline.map((item, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="flex flex-col items-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy text-gold font-bold text-sm">
                        {item.time.split(" ")[0]}
                      </div>
                      {index < onCycleTimeline.length - 1 && <div className="w-px flex-1 bg-gold/30 my-2" />}
                    </div>
                    <div className="pb-8">
                      <h3 className="font-bold text-navy">{item.time}</h3>
                      <p className="mt-1 text-charcoal/70">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Technical Preparation */}
        <section className="bg-cream py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">PE Technical Interview Topics</h2>
              <div className="mt-2 h-1 w-20 bg-gold" />
              
              <p className="mt-6 text-lg text-charcoal/70">
                PE interviews focus heavily on LBO mechanics and your ability to think like an investor. 
                Here are the core areas you need to master.
              </p>

              <div className="mt-12 grid gap-6 sm:grid-cols-2">
                {technicalTopics.map((topic) => (
                  <div key={topic.title} className="rounded-2xl bg-white p-6 shadow-sm">
                    <h3 className="text-lg font-bold text-navy mb-4">{topic.title}</h3>
                    <ul className="space-y-2">
                      {topic.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
                          <span className="text-sm text-charcoal/70">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-12 rounded-2xl bg-navy p-8 text-center">
                <h3 className="text-xl font-bold text-white">Master PE Interviews</h3>
                <p className="mt-2 text-white/60">
                  Our PE Recruiting Playbook covers everything from headhunter strategy to case study walkthroughs.
                </p>
                <Link
                  href="/playbooks/pe-recruiting-playbook"
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gold px-6 py-3 text-sm font-semibold text-navy hover:bg-white transition-colors"
                >
                  Get the PE Playbook — $67
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* LBO Modeling */}
        <section className="bg-navy py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">LBO Modeling Is Essential</h2>
              <p className="mt-6 text-lg text-white/60">
                You&apos;ll likely face a paper LBO in your interview. You need to be able to build one from 
                scratch in 10-15 minutes with just pen and paper.
              </p>
              
              <div className="mt-12 grid gap-6 sm:grid-cols-3 text-left">
                {[
                  { stat: "10 min", label: "Paper LBO target time" },
                  { stat: "20%+", label: "Target IRR for most deals" },
                  { stat: "2-3x", label: "Typical MOIC expectations" },
                ].map((item) => (
                  <div key={item.label} className="rounded-xl bg-white/10 p-6 text-center">
                    <p className="text-3xl font-bold text-gold">{item.stat}</p>
                    <p className="mt-1 text-sm text-white/60">{item.label}</p>
                  </div>
                ))}
              </div>

              <Link
                href="/playbooks/lbo-modeling-course"
                className="mt-12 inline-flex items-center gap-2 rounded-xl bg-gold px-8 py-4 text-base font-semibold text-navy hover:bg-white transition-colors"
              >
                Get the LBO Modeling Course — $79
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-cream py-20 lg:py-28">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-navy sm:text-4xl">Ready to Break Into PE?</h2>
            <p className="mt-4 text-lg text-charcoal/60">
              Don&apos;t let on-cycle catch you unprepared. Get the resources you need to land your PE offer.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/playbooks/pe-recruiting-playbook"
                className="group flex items-center gap-2 rounded-xl bg-navy px-8 py-4 text-base font-semibold text-white hover:bg-gold hover:text-navy transition-colors"
              >
                Get the PE Playbook
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/blog"
                className="rounded-xl border-2 border-navy px-8 py-4 text-base font-semibold text-navy hover:bg-navy hover:text-white transition-colors"
              >
                Read Free Guides
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
