import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { ArrowRight, CheckCircle, XCircle, FileText, AlertTriangle } from "lucide-react"

export const metadata: Metadata = {
  title: "Investment Banking Resume Guide | Templates & Examples 2026",
  description:
    "How to write an investment banking resume that gets interviews. Format, bullet points, and examples from candidates who landed at Goldman, Morgan Stanley, and elite boutiques.",
  keywords: [
    "investment banking resume",
    "IB resume template",
    "investment banking resume example",
    "finance resume",
    "banking resume format",
    "investment banking resume bullet points",
    "how to write investment banking resume",
  ],
  openGraph: {
    title: "Investment Banking Resume Guide | Templates & Examples 2026",
    description:
      "How to write an investment banking resume that gets interviews. Format, bullet points, and real examples.",
    url: "https://wallstreetplaybook.org/investment-banking-resume",
    images: [{ url: "https://wallstreetplaybook.org/og-resume-services.jpg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://wallstreetplaybook.org/investment-banking-resume",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://wallstreetplaybook.org/og-resume-services.jpg"],
  },
}

const formatRules = [
  { rule: "One page only", desc: "No exceptions. Even with 10 years of experience, keep it to one page." },
  { rule: "Times New Roman or Garamond", desc: "Conservative fonts only. No Arial, Calibri, or creative fonts." },
  { rule: "10-11pt font size", desc: "Small enough to fit content, large enough to read easily." },
  { rule: "0.5-0.75\" margins", desc: "Don't go smaller than 0.5\" or it looks cramped." },
  { rule: "Consistent date formatting", desc: "Pick 'Jan 2024' or 'January 2024' and stick with it." },
  { rule: "No color, no photos", desc: "Black text on white paper. That's it." },
]

const bulletFormula = {
  bad: [
    "Responsible for financial analysis",
    "Helped with pitch books",
    "Assisted team with various projects",
    "Worked on M&A transactions",
  ],
  good: [
    "Built 3-statement financial model for $50M revenue SaaS company, identifying 15% EBITDA margin improvement opportunity",
    "Created 25-page management presentation for Series B fundraise, directly contributing to successful $30M raise",
    "Screened 50+ potential acquisition targets in healthcare sector, recommending 3 for further due diligence",
    "Analyzed trading comparables for 12 public companies, supporting $200M sell-side M&A engagement",
  ],
}

const sections = [
  {
    title: "Education",
    position: "Top of resume for students/recent grads",
    must: ["School name, degree, graduation date", "GPA if 3.5+ (bold it)", "Relevant coursework", "SAT/ACT if strong (1500+/34+)"],
    avoid: ["High school (unless prestigious)", "GPA below 3.0", "Irrelevant coursework"],
  },
  {
    title: "Experience",
    position: "Main body of resume",
    must: ["Company, title, dates, location", "3-5 bullet points per role", "Quantified achievements", "Action verbs (Analyzed, Built, Led)"],
    avoid: ["'Responsible for' or 'Helped with'", "Paragraphs instead of bullets", "Generic descriptions"],
  },
  {
    title: "Skills & Interests",
    position: "Bottom of resume",
    must: ["Technical skills (Excel, Bloomberg, SQL)", "Languages if fluent", "Specific, interesting hobbies", "Things you can discuss for 5 minutes"],
    avoid: ["'Microsoft Office proficient'", "Generic interests like 'Travel'", "Anything you can't talk about"],
  },
]

const killerMistakes = [
  "Typos or grammatical errors — instant rejection",
  "Inconsistent formatting (dates, fonts, spacing)",
  "Listing responsibilities instead of achievements",
  "No quantification (numbers, percentages, dollar amounts)",
  "Including a photo (never do this in US finance)",
  "Objective statement or summary (waste of space)",
  "More than one page",
  "Unexplained gaps in timeline",
  "Lying or exaggerating (you WILL be caught)",
]

export default function InvestmentBankingResumePage() {
  return (
    <div className="flex min-h-screen flex-col">
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
              Investment Banking <span className="text-gradient-gold">Resume</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/60 max-w-2xl mx-auto">
              Your resume gets 30 seconds. Learn the exact format, bullet point structure, and positioning 
              that gets interviews at top banks.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/submit-resume?service=resume-review"
                className="group flex items-center gap-2 rounded-xl bg-gold px-8 py-4 text-base font-semibold text-navy transition-all hover:bg-white"
              >
                Get Professional Resume Help
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="#bullet-formula"
                className="rounded-xl border-2 border-white/20 px-8 py-4 text-base font-semibold text-white transition-all hover:border-gold hover:text-gold"
              >
                See Bullet Formula
              </Link>
            </div>
          </div>
        </section>

        {/* 30 Second Reality */}
        <section className="bg-gold py-6">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex items-center justify-center gap-3 text-navy">
              <AlertTriangle className="h-5 w-5" />
              <p className="text-sm font-semibold">
                Bankers review hundreds of resumes. They&apos;re looking for reasons to reject you, not reasons to interview you.
              </p>
            </div>
          </div>
        </section>

        {/* Format Rules */}
        <section className="bg-cream py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">The Non-Negotiable Format Rules</h2>
              <div className="mt-2 h-1 w-20 bg-gold" />
              
              <p className="mt-6 text-lg text-charcoal/70">
                Investment banking resumes follow a strict format. Deviate from this and you signal that you 
                don&apos;t understand the industry.
              </p>

              <div className="mt-12 grid gap-4 sm:grid-cols-2">
                {formatRules.map((item) => (
                  <div key={item.rule} className="flex gap-4 rounded-xl bg-white p-5 shadow-sm">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 text-gold" />
                    <div>
                      <p className="font-semibold text-navy">{item.rule}</p>
                      <p className="mt-1 text-sm text-charcoal/60">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Bullet Point Formula */}
        <section id="bullet-formula" className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">The Bullet Point Formula</h2>
              <div className="mt-2 h-1 w-20 bg-gold" />
              
              <div className="mt-6 p-6 rounded-xl bg-navy text-white">
                <p className="text-lg font-semibold text-gold">[Action Verb] + [What You Did] + [Quantified Result/Context]</p>
              </div>

              <div className="mt-12 grid gap-8 lg:grid-cols-2">
                {/* Bad Examples */}
                <div className="rounded-2xl border-2 border-red-200 bg-red-50/50 p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <XCircle className="h-6 w-6 text-red-500" />
                    <h3 className="text-lg font-bold text-red-700">Weak Bullets</h3>
                  </div>
                  <ul className="space-y-3">
                    {bulletFormula.bad.map((bullet, i) => (
                      <li key={i} className="text-sm text-red-800 flex items-start gap-2">
                        <span className="text-red-400">•</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Good Examples */}
                <div className="rounded-2xl border-2 border-green-200 bg-green-50/50 p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                    <h3 className="text-lg font-bold text-green-700">Strong Bullets</h3>
                  </div>
                  <ul className="space-y-3">
                    {bulletFormula.good.map((bullet, i) => (
                      <li key={i} className="text-sm text-green-800 flex items-start gap-2">
                        <span className="text-green-400">•</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 prose prose-lg text-charcoal/80">
                <p>
                  Notice the difference? Strong bullets have <strong>specific numbers</strong>, <strong>clear 
                  actions</strong>, and <strong>business context</strong>. Weak bullets describe responsibilities 
                  without showing impact.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section Breakdown */}
        <section className="bg-cream py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">Resume Section Breakdown</h2>
              <div className="mt-2 h-1 w-20 bg-gold" />

              <div className="mt-12 space-y-8">
                {sections.map((section) => (
                  <div key={section.title} className="rounded-2xl bg-white p-8 shadow-sm">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy">
                        <FileText className="h-6 w-6 text-gold" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-navy">{section.title}</h3>
                        <p className="text-sm text-charcoal/60">{section.position}</p>
                      </div>
                    </div>
                    
                    <div className="grid gap-6 sm:grid-cols-2 mt-6">
                      <div>
                        <p className="text-sm font-semibold text-green-700 mb-2">✓ Include</p>
                        <ul className="space-y-1">
                          {section.must.map((item, i) => (
                            <li key={i} className="text-sm text-charcoal/70 flex items-start gap-2">
                              <span className="text-green-500">•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-red-700 mb-2">✕ Avoid</p>
                        <ul className="space-y-1">
                          {section.avoid.map((item, i) => (
                            <li key={i} className="text-sm text-charcoal/70 flex items-start gap-2">
                              <span className="text-red-500">•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Killer Mistakes */}
        <section className="bg-navy py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-white sm:text-4xl text-center">9 Resume Mistakes That Get You Dinged</h2>
              <p className="mt-4 text-center text-white/60">Any one of these can get your resume rejected instantly.</p>

              <div className="mt-12 grid gap-3 sm:grid-cols-2">
                {killerMistakes.map((mistake, i) => (
                  <div key={i} className="flex items-start gap-3 rounded-xl bg-white/10 p-4">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-red-500/20 text-red-400 text-sm font-bold">
                      {i + 1}
                    </span>
                    <span className="text-sm text-white/80">{mistake}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Resume Services CTA */}
        <section className="bg-cream py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">Get Expert Eyes on Your Resume</h2>
              <p className="mt-4 text-lg text-charcoal/60">
                You&apos;ve looked at your resume for hours. You&apos;re blind to your own errors. Get professional 
                feedback from people who&apos;ve reviewed thousands of finance resumes.
              </p>

              <div className="mt-12 grid gap-6 sm:grid-cols-2 max-w-2xl mx-auto">
                <Link 
                  href="/submit-resume?service=resume-review"
                  className="group rounded-2xl border-2 border-border bg-white p-6 text-left hover:border-gold transition-colors"
                >
                  <h3 className="text-xl font-bold text-navy group-hover:text-gold transition-colors">Resume Review</h3>
                  <p className="mt-2 text-sm text-charcoal/60">Line-by-line feedback with specific rewrite suggestions</p>
                  <p className="mt-4 text-2xl font-bold text-gold">$197</p>
                </Link>
                <Link 
                  href="/submit-resume?service=resume-rewrite"
                  className="group rounded-2xl border-2 border-gold bg-gold/5 p-6 text-left hover:bg-gold/10 transition-colors"
                >
                  <h3 className="text-xl font-bold text-navy">Resume Rewrite</h3>
                  <p className="mt-2 text-sm text-charcoal/60">Complete reconstruction with optimized positioning</p>
                  <p className="mt-4 text-2xl font-bold text-gold">$497</p>
                </Link>
              </div>

              <p className="mt-8 text-sm text-charcoal/50">
                100% money-back guarantee. Not satisfied? Full refund, no questions asked.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-navy sm:text-4xl">More Resources</h2>
            <p className="mt-4 text-lg text-charcoal/60">
              Your resume gets you the interview. These guides help you convert it to an offer.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/playbooks/finance-technical-interview-guide"
                className="group flex items-center gap-2 rounded-xl bg-navy px-8 py-4 text-base font-semibold text-white hover:bg-gold hover:text-navy transition-colors"
              >
                Finance Technical Guide
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/blog"
                className="rounded-xl border-2 border-navy px-8 py-4 text-base font-semibold text-navy hover:bg-navy hover:text-white transition-colors"
              >
                Free Blog Articles
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
