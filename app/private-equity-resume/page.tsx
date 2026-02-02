import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { ArrowRight, CheckCircle, XCircle, Clock, Shield, AlertTriangle, TrendingUp, Target } from "lucide-react"

export const metadata: Metadata = {
  title: "Private Equity Resume Review | PE Resume Help & Optimization",
  description:
    "Professional private equity resume review service. Get expert feedback on positioning your deal experience, banking background, and investment track record for PE recruiting.",
  keywords: [
    "private equity resume",
    "PE resume review",
    "private equity resume help",
    "PE resume format",
    "private equity resume example",
    "KKR resume",
    "blackstone resume",
    "PE recruiting resume",
    "on-cycle PE resume",
  ],
  openGraph: {
    title: "Private Equity Resume Review | Wall Street Playbook",
    description:
      "Professional PE resume review. Position your deal experience and banking background to land PE interviews.",
    url: "https://wallstreetplaybook.org/private-equity-resume",
  },
  alternates: {
    canonical: "https://wallstreetplaybook.org/private-equity-resume",
  },
}

const peResumeUnique = [
  {
    title: "Deal Experience is Everything",
    desc: "PE firms care about your live deal experience. Every transaction needs to be positioned to show your contribution, the complexity you handled, and what you learned.",
  },
  {
    title: "Headhunters Screen First",
    desc: "For on-cycle recruiting, headhunters review your resume before any PE firm sees it. You need to pass their filter to even get in the process.",
  },
  {
    title: "Technical Depth Matters",
    desc: "PE resumes need to signal technical competence—LBO modeling, due diligence, portfolio company work. Your bullets should demonstrate you can do the job from day one.",
  },
  {
    title: "Investment Judgment Signals",
    desc: "Beyond execution, PE firms want to see evidence of investment thinking. How you describe your deal work should hint at your analytical judgment.",
  },
]

const dealDescriptions = [
  {
    context: "M&A Sell-Side Experience",
    before: "Worked on sell-side M&A transaction for industrial company",
    after: "Executed sell-side M&A for $180M revenue industrial services company; built buyer universe of 45 strategic and financial sponsors, managed 12 management presentations, negotiated final terms resulting in 9.5x EBITDA exit",
  },
  {
    context: "Leveraged Buyout Deal",
    before: "Supported LBO financing for sponsor acquisition",
    after: "Structured $320M LBO financing (5.5x leverage) for PE-backed acquisition of healthcare IT platform; modeled 15 debt scenarios across senior, unitranche, and mezzanine structures to optimize sponsor returns",
  },
  {
    context: "Restructuring Experience",
    before: "Worked on restructuring engagement for distressed company",
    after: "Led financial analysis for Chapter 11 restructuring of $500M revenue retailer; built 13-week cash flow model, negotiated DIP terms with lender group, supported confirmation of plan achieving 85% creditor recovery",
  },
]

const targetFirms = [
  { tier: "Megafunds", examples: "Blackstone, KKR, Carlyle, Apollo, TPG, Warburg Pincus" },
  { tier: "Upper Middle Market", examples: "Advent, Hellman & Friedman, Leonard Green, Silver Lake" },
  { tier: "Middle Market", examples: "Summit, TA Associates, GTCR, Audax" },
  { tier: "Growth Equity", examples: "General Atlantic, TCV, Insight Partners" },
]

const onCycleChecklist = [
  "Deal experience clearly quantified with transaction values",
  "Your specific contribution highlighted (not just 'supported')",
  "Technical skills demonstrated through bullet content",
  "Format matches IB standards (headhunters expect this)",
  "No gaps or inconsistencies that raise questions",
  "Ready to discuss every deal in 5+ minutes of detail",
]

export default function PEResumePage() {
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
            <p className="text-sm font-semibold uppercase tracking-widest text-gold mb-4">For PE Recruiting</p>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Private Equity <span className="text-gradient-gold">Resume Review</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/60 max-w-2xl mx-auto">
              On-cycle moves fast. Your resume needs to pass headhunter screens and showcase deal experience 
              that makes PE firms want to interview you.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/submit-resume?service=resume-rewrite"
                className="group flex items-center gap-2 rounded-xl bg-gold px-8 py-4 text-base font-semibold text-navy transition-all hover:bg-white"
              >
                Get PE Resume Rewrite — $497
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/submit-resume?service=resume-review"
                className="rounded-xl border-2 border-white/20 px-8 py-4 text-base font-semibold text-white transition-all hover:border-gold hover:text-gold"
              >
                Review Only — $197
              </Link>
            </div>

            <div className="mt-8 flex items-center justify-center gap-6 text-sm text-white/50">
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-gold" />
                5-7 Day Turnaround
              </span>
              <span className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-gold" />
                Money-Back Guarantee
              </span>
            </div>
          </div>
        </section>

        {/* Alert */}
        <section className="bg-gold py-6">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex items-center justify-center gap-3 text-navy">
              <AlertTriangle className="h-5 w-5" />
              <p className="text-sm font-semibold">
                On-cycle recruiting can move from first call to offer in 48 hours. Your resume needs to be ready before headhunters reach out.
              </p>
            </div>
          </div>
        </section>

        {/* Target Firms */}
        <section className="bg-cream py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">Optimized for All PE Tiers</h2>
              <div className="mt-2 h-1 w-20 bg-gold" />
              
              <div className="mt-12 grid gap-4 sm:grid-cols-2">
                {targetFirms.map((tier) => (
                  <div key={tier.tier} className="flex gap-4 rounded-xl bg-white p-5 shadow-sm">
                    <Target className="h-6 w-6 flex-shrink-0 text-gold" />
                    <div>
                      <p className="font-semibold text-navy">{tier.tier}</p>
                      <p className="mt-1 text-sm text-charcoal/60">{tier.examples}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What Makes PE Different */}
        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">Why PE Resumes Are Different</h2>
              <div className="mt-2 h-1 w-20 bg-gold" />

              <div className="mt-12 grid gap-6 sm:grid-cols-2">
                {peResumeUnique.map((item) => (
                  <div key={item.title} className="rounded-xl border border-border p-6">
                    <h3 className="text-lg font-semibold text-navy">{item.title}</h3>
                    <p className="mt-2 text-sm text-charcoal/70">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Deal Description Transformations */}
        <section className="bg-navy py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-white sm:text-4xl text-center">Deal Descriptions That Impress PE Firms</h2>
              <p className="mt-4 text-center text-white/60">
                Your deal experience is your calling card. Here&apos;s how we transform generic descriptions.
              </p>

              <div className="mt-12 space-y-8">
                {dealDescriptions.map((item, index) => (
                  <div key={index} className="rounded-2xl bg-white/10 p-6">
                    <p className="text-sm font-semibold text-gold mb-4">{item.context}</p>
                    <div className="grid gap-4 lg:grid-cols-2">
                      <div className="rounded-lg bg-red-500/10 p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <XCircle className="h-5 w-5 text-red-400" />
                          <span className="text-sm font-semibold text-red-400">Before</span>
                        </div>
                        <p className="text-sm text-white/70">{item.before}</p>
                      </div>
                      <div className="rounded-lg bg-green-500/10 p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <CheckCircle className="h-5 w-5 text-green-400" />
                          <span className="text-sm font-semibold text-green-400">After</span>
                        </div>
                        <p className="text-sm text-white/70">{item.after}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* On-Cycle Checklist */}
        <section className="bg-cream py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">On-Cycle Resume Checklist</h2>
              <div className="mt-2 h-1 w-20 bg-gold" />
              <p className="mt-6 text-lg text-charcoal/70">
                Is your resume ready for when headhunters call? We ensure you check every box.
              </p>

              <div className="mt-10 rounded-2xl bg-white p-8 shadow-sm">
                <div className="space-y-4">
                  {onCycleChecklist.map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gold/10">
                        <CheckCircle className="h-4 w-4 text-gold" />
                      </div>
                      <span className="text-charcoal/80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services CTA */}
        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">Get PE-Ready</h2>
              <div className="mt-2 flex justify-center">
                <div className="h-1 w-20 bg-gold" />
              </div>
              
              <p className="mt-6 text-lg text-charcoal/70">
                For PE recruiting, we recommend the full rewrite. Deal positioning is too important to leave to chance.
              </p>

              <div className="mt-12 grid gap-6 sm:grid-cols-2 max-w-2xl mx-auto">
                <Link 
                  href="/submit-resume?service=resume-review"
                  className="group rounded-2xl border-2 border-border bg-white p-6 text-left hover:border-gold transition-colors"
                >
                  <h3 className="text-xl font-bold text-navy group-hover:text-gold transition-colors">PE Resume Review</h3>
                  <p className="mt-2 text-sm text-charcoal/60">Detailed feedback on deal descriptions and positioning</p>
                  <p className="mt-4 text-2xl font-bold text-gold">$197</p>
                </Link>
                <Link 
                  href="/submit-resume?service=resume-rewrite"
                  className="group rounded-2xl border-2 border-gold bg-gold/5 p-6 text-left hover:bg-gold/10 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-navy">PE Resume Rewrite</h3>
                    <span className="text-xs font-bold text-gold bg-gold/20 px-2 py-1 rounded">RECOMMENDED</span>
                  </div>
                  <p className="mt-2 text-sm text-charcoal/60">Complete reconstruction with optimized deal positioning</p>
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
        <section className="bg-navy py-20 lg:py-28">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">On-Cycle Won&apos;t Wait</h2>
            <p className="mt-4 text-lg text-white/60">
              Get your resume ready before headhunters start calling. The process moves fast—be prepared.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/submit-resume?service=resume-rewrite"
                className="group flex items-center gap-2 rounded-xl bg-gold px-8 py-4 text-base font-semibold text-navy hover:bg-white transition-colors"
              >
                Get PE Resume Rewrite — $497
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/playbooks/pe-recruiting-playbook"
                className="rounded-xl border-2 border-white/20 px-8 py-4 text-base font-semibold text-white hover:border-gold hover:text-gold transition-colors"
              >
                PE Recruiting Playbook
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
