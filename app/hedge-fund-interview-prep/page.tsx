import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { ArrowRight, CheckCircle, TrendingUp, BarChart3, Brain, Target } from "lucide-react"

export const metadata: Metadata = {
  title: "Hedge Fund Interview Prep | Stock Pitch & Investment Process Guide",
  description:
    "Complete guide to hedge fund interview preparation. Stock pitch frameworks, investment process questions, and what top funds like Citadel, Point72, and Millennium look for in candidates.",
  keywords: [
    "hedge fund interview prep",
    "hedge fund interview questions",
    "stock pitch interview",
    "how to prepare for hedge fund interviews",
    "equity research interview",
    "investment pitch template",
    "hedge fund recruiting",
  ],
  openGraph: {
    title: "Hedge Fund Interview Prep | Stock Pitch & Investment Process Guide",
    description:
      "Complete guide to hedge fund interview preparation. Stock pitch frameworks and what top funds look for.",
    url: "https://wallstreetplaybook.org/hedge-fund-interview-prep",
    images: [{ url: "https://wallstreetplaybook.org/og-interview-prep.jpg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://wallstreetplaybook.org/hedge-fund-interview-prep",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://wallstreetplaybook.org/og-interview-prep.jpg"],
  },
}

const interviewTypes = [
  {
    title: "Stock Pitch",
    icon: TrendingUp,
    description: "Present a long or short investment idea with conviction",
    questions: [
      "Pitch me a stock you're excited about",
      "Give me a short idea",
      "What's in your personal portfolio?",
      "Walk me through your investment process",
    ],
  },
  {
    title: "Market Discussion",
    icon: BarChart3,
    description: "Demonstrate awareness of current markets and macro trends",
    questions: [
      "What's happening in markets right now?",
      "Where do you see opportunities?",
      "What sectors are you bearish on?",
      "How would rising rates affect your portfolio?",
    ],
  },
  {
    title: "Technical/Modeling",
    icon: Brain,
    description: "Show you can analyze companies and build models",
    questions: [
      "How do you value a company?",
      "Walk me through a DCF",
      "What metrics matter for [industry]?",
      "How would you model [specific scenario]?",
    ],
  },
  {
    title: "Behavioral/Fit",
    icon: Target,
    description: "Prove you have the mindset and personality for the role",
    questions: [
      "Why hedge funds over banking/PE?",
      "Tell me about an investment mistake",
      "How do you handle being wrong?",
      "What's your edge as an investor?",
    ],
  },
]

const pitchStructure = [
  { step: "1", title: "Thesis (30 seconds)", desc: "One sentence: Long/short [Company] at [price] with [X%] upside/downside" },
  { step: "2", title: "Business Overview (60 seconds)", desc: "What they do, how they make money, competitive position" },
  { step: "3", title: "Variant Perception (90 seconds)", desc: "What you see that the market is missing—this is your edge" },
  { step: "4", title: "Catalysts (60 seconds)", desc: "What will make the market realize you're right, and when" },
  { step: "5", title: "Valuation (60 seconds)", desc: "How you arrive at your price target—comps, DCF, or both" },
  { step: "6", title: "Risks (30 seconds)", desc: "What could go wrong and why you're comfortable with those risks" },
]

const fundTypes = [
  { type: "Long/Short Equity", examples: "Tiger Cubs, Point72, Citadel Surveyor", focus: "Stock picking, fundamental research" },
  { type: "Multi-Strategy", examples: "Citadel, Millennium, Balyasny", focus: "Pod structure, risk management" },
  { type: "Macro", examples: "Bridgewater, Brevan Howard", focus: "Economic analysis, global markets" },
  { type: "Quant", examples: "Two Sigma, DE Shaw, Renaissance", focus: "Programming, statistics, math" },
  { type: "Event-Driven", examples: "Elliott, Third Point", focus: "M&A, activism, special situations" },
]

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How are hedge fund interviews different from banking or PE interviews?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hedge fund interviews focus on whether you can generate alpha, not just execute transactions. The centerpiece is usually a stock pitch where you present a fully-formed investment thesis. Unlike banking interviews with 'right answers,' hedge fund interviews assess your investment process and independent thinking.",
      },
    },
    {
      "@type": "Question",
      name: "What is the structure of a good stock pitch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A strong stock pitch follows 6 parts: (1) Thesis - one sentence with your position and target, (2) Business Overview - what they do and how they make money, (3) Variant Perception - what you see that the market misses, (4) Catalysts - what will make the market realize you're right, (5) Valuation - how you arrive at your price target, (6) Risks - what could go wrong and why you're comfortable.",
      },
    },
    {
      "@type": "Question",
      name: "What types of questions are asked in hedge fund interviews?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hedge fund interviews include four main types: Stock Pitch questions (pitch a stock, give a short idea), Market Discussion (what's happening in markets, where do you see opportunities), Technical/Modeling (valuation methods, DCF walkthrough), and Behavioral/Fit (why hedge funds, tell me about an investment mistake).",
      },
    },
    {
      "@type": "Question",
      name: "What are common stock pitch mistakes to avoid?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Common mistakes include: pitching a well-known stock without differentiated insight, not knowing the numbers cold, having no clear catalyst, crumbling under pushback from interviewers, and ignoring or minimizing risks. Address the bear case upfront to show mature investment thinking.",
      },
    },
    {
      "@type": "Question",
      name: "What are the different types of hedge funds?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Main hedge fund types include: Long/Short Equity (Tiger Cubs, Point72) focused on stock picking, Multi-Strategy (Citadel, Millennium) with pod structures, Macro (Bridgewater) focused on economic analysis, Quant (Two Sigma, Renaissance) requiring programming skills, and Event-Driven (Elliott, Third Point) focused on M&A and special situations.",
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
      name: "Hedge Fund Interview Prep",
      item: "https://wallstreetplaybook.org/hedge-fund-interview-prep",
    },
  ],
}

export default function HedgeFundInterviewPrepPage() {
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
              Hedge Fund <span className="text-gradient-gold">Interview Prep</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/60 max-w-2xl mx-auto">
              Stock pitches, market discussions, and investment process questions. Everything you need to 
              land offers at top hedge funds in 2026.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/playbooks/stock-pitch-guide"
                className="group flex items-center gap-2 rounded-xl bg-gold px-8 py-4 text-base font-semibold text-navy transition-all hover:bg-white"
              >
                Get the Stock Pitch Guide
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="#pitch-structure"
                className="rounded-xl border-2 border-white/20 px-8 py-4 text-base font-semibold text-white transition-all hover:border-gold hover:text-gold"
              >
                See Pitch Framework
              </Link>
            </div>
          </div>
        </section>

        {/* How HF Interviews Differ */}
        <section className="bg-cream py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">How Hedge Fund Interviews Differ</h2>
              <div className="mt-2 h-1 w-20 bg-gold" />
              
              <div className="mt-8 prose prose-lg max-w-none text-charcoal/80">
                <p>
                  Hedge fund interviews are fundamentally different from banking or PE. While those paths 
                  test your ability to execute transactions, hedge funds want to know: <strong>Can you 
                  generate alpha?</strong>
                </p>
                <p>
                  The centerpiece of most hedge fund interviews is the <strong>stock pitch</strong>. You&apos;ll 
                  be expected to present a fully-formed investment thesis—long or short—with conviction. 
                  Interviewers will probe your assumptions, challenge your logic, and see how you respond 
                  to pushback.
                </p>
                <p>
                  Unlike banking interviews where there are &quot;right answers,&quot; hedge fund interviews are about 
                  demonstrating your <strong>investment process</strong> and <strong>independent thinking</strong>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Interview Types */}
        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl text-center">Types of Hedge Fund Interview Questions</h2>
              <div className="mt-2 mx-auto h-1 w-20 bg-gold" />

              <div className="mt-12 grid gap-8 lg:grid-cols-2">
                {interviewTypes.map((type) => (
                  <div key={type.title} className="rounded-2xl border border-border bg-off-white/50 p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy">
                        <type.icon className="h-6 w-6 text-gold" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-navy">{type.title}</h3>
                        <p className="text-sm text-charcoal/60">{type.description}</p>
                      </div>
                    </div>
                    <ul className="space-y-2 mt-4">
                      {type.questions.map((q, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
                          <span className="text-sm text-charcoal/70">{q}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stock Pitch Structure */}
        <section id="pitch-structure" className="bg-navy py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-white sm:text-4xl text-center">The 6-Part Stock Pitch Structure</h2>
              <p className="mt-4 text-center text-white/60">
                This framework is what top funds like Point72, Citadel, and Tiger Cubs expect to see.
              </p>

              <div className="mt-12 space-y-4">
                {pitchStructure.map((item) => (
                  <div key={item.step} className="flex gap-4 rounded-xl bg-white/10 p-6">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gold text-navy font-bold">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="font-bold text-white">{item.title}</h3>
                      <p className="mt-1 text-sm text-white/60">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <Link
                  href="/playbooks/stock-pitch-guide"
                  className="inline-flex items-center gap-2 rounded-xl bg-gold px-8 py-4 text-base font-semibold text-navy hover:bg-white transition-colors"
                >
                  Get 5 Full Example Pitches — $77
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Fund Types */}
        <section className="bg-cream py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">Types of Hedge Funds</h2>
              <div className="mt-2 h-1 w-20 bg-gold" />
              <p className="mt-4 text-charcoal/70">
                Different fund types have different interview focuses. Know what you&apos;re applying for.
              </p>

              <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-white">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border bg-off-white/50">
                      <th className="px-6 py-4 text-left text-sm font-semibold text-navy">Fund Type</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-navy">Examples</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-navy">Interview Focus</th>
                    </tr>
                  </thead>
                  <tbody>
                    {fundTypes.map((fund, i) => (
                      <tr key={fund.type} className={i !== fundTypes.length - 1 ? "border-b border-border" : ""}>
                        <td className="px-6 py-4 text-sm font-medium text-navy">{fund.type}</td>
                        <td className="px-6 py-4 text-sm text-charcoal/70">{fund.examples}</td>
                        <td className="px-6 py-4 text-sm text-charcoal/70">{fund.focus}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">Stock Pitch Mistakes That Kill Your Chances</h2>
              <div className="mt-2 h-1 w-20 bg-gold" />

              <div className="mt-12 space-y-6">
                {[
                  { mistake: "Pitching a well-known stock without edge", fix: "Your variant perception must be differentiated. 'Apple is a good company' isn't a pitch." },
                  { mistake: "Not knowing the numbers cold", fix: "Know revenue, margins, growth rates, and valuation multiples without looking at notes." },
                  { mistake: "No clear catalyst", fix: "Why will the market realize you're right? Without a catalyst, it's not actionable." },
                  { mistake: "Crumbling under pushback", fix: "Interviewers WILL challenge you. Defend your thesis with conviction while acknowledging valid points." },
                  { mistake: "Ignoring risks", fix: "Address the bear case upfront. Pretending risks don't exist makes you look naive." },
                ].map((item, i) => (
                  <div key={i} className="rounded-xl border border-border bg-off-white/50 p-6">
                    <div className="flex items-start gap-3">
                      <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600 text-sm font-bold">✕</span>
                      <div>
                        <p className="font-semibold text-navy">{item.mistake}</p>
                        <p className="mt-2 text-sm text-charcoal/70">{item.fix}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-navy py-20 lg:py-28">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to Nail Your Stock Pitch?</h2>
            <p className="mt-4 text-lg text-white/60">
              Our Stock Pitch Guide includes the complete framework plus 5 full example pitches with commentary.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/playbooks/stock-pitch-guide"
                className="group flex items-center gap-2 rounded-xl bg-gold px-8 py-4 text-base font-semibold text-navy hover:bg-white transition-colors"
              >
                Get the Stock Pitch Guide — $77
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
