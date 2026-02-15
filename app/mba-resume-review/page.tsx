import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { ArrowRight, CheckCircle, XCircle, Clock, Shield, AlertTriangle, GraduationCap, Target } from "lucide-react"

export const metadata: Metadata = {
  title: "MBA Resume Review | Investment Banking & Finance Resume Help",
  description:
    "Professional resume review for MBA candidates targeting investment banking, private equity, and hedge funds. Get your resume ready for on-campus recruiting and summer associate programs.",
  keywords: [
    "MBA resume review",
    "MBA investment banking resume",
    "MBA finance resume",
    "business school resume",
    "summer associate resume",
    "MBA PE resume",
    "MBA consulting to banking",
    "post-MBA resume",
    "pre-MBA resume",
  ],
  openGraph: {
    title: "MBA Resume Review | Wall Street Playbook",
    description:
      "Professional resume review for MBA candidates targeting investment banking and finance. Summer associate positioning.",
    url: "https://wallstreetplaybook.org/mba-resume-review",
    images: [{ url: "https://wallstreetplaybook.org/og-resume-services.jpg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://wallstreetplaybook.org/mba-resume-review",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://wallstreetplaybook.org/og-resume-services.jpg"],
  },
}

const mbaPrograms = [
  { tier: "M7", schools: "HBS, Stanford GSB, Wharton, Booth, Kellogg, Columbia, MIT Sloan" },
  { tier: "T15", schools: "Tuck, Haas, Yale SOM, Fuqua, Ross, Stern, Darden, Cornell Johnson" },
  { tier: "T25", schools: "Tepper, Anderson, Marshall, McCombs, Kenan-Flagler, Georgetown McDonough" },
]

const mbaResumeChallenges = [
  {
    challenge: "Career Changers",
    solution: "Position non-finance experience to demonstrate transferable skills and genuine interest in banking",
  },
  {
    challenge: "Limited Finance Experience",
    solution: "Highlight quantitative work, financial modeling, and any transaction-adjacent projects",
  },
  {
    challenge: "Competitive Recruiting",
    solution: "Stand out from hundreds of classmates targeting the same banks with the same backgrounds",
  },
  {
    challenge: "Compressed Timeline",
    solution: "Get your resume polished before on-campus recruiting starts—there's no time to iterate",
  },
]

const beforeAfter = [
  {
    context: "Career Changer (Tech PM → Banking)",
    before: "Led product development for enterprise software platform serving Fortune 500 clients",
    after: "Led product strategy for $25M ARR B2B platform; built financial models for 3 pricing initiatives that increased ARPU 18%; worked cross-functionally with finance on annual budgeting and investor reporting",
  },
  {
    context: "Pre-MBA Banking Experience",
    before: "Worked on M&A transactions in investment banking at bulge bracket bank",
    after: "Executed 6 M&A transactions totaling $4.2B across healthcare and industrials verticals; led comparable company analysis and management presentations for $800M sell-side healthcare deal",
  },
  {
    context: "Consulting Background",
    before: "Consultant at McKinsey focused on operations and strategy projects",
    after: "Led due diligence workstream for $600M PE acquisition of specialty manufacturer; built operational improvement model identifying $40M EBITDA opportunity through procurement optimization",
  },
]

const preRecruitingChecklist = [
  "Resume formatted to IB standards (not consulting or tech format)",
  "Deal/transaction experience highlighted prominently",
  "Quantification in every bullet point",
  "Pre-MBA experience positioned to support banking interest",
  "MBA activities (finance club, investment competitions) included",
  "Ready to submit to banks and discuss in interviews",
]

const timingAdvice = [
  { when: "Summer Before MBA", action: "Start resume optimization, begin networking with alumni" },
  { when: "Fall Semester", action: "Resume must be finalized before on-campus recruiting kicks off" },
  { when: "January-February", action: "Summer associate recruiting in full swing—no time for resume iterations" },
  { when: "Spring", action: "Off-cycle and lateral opportunities for those still recruiting" },
]

export default function MBAResumeReviewPage() {
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
            <p className="text-sm font-semibold uppercase tracking-widest text-gold mb-4">For MBA Candidates</p>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              MBA <span className="text-gradient-gold">Resume Review</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/60 max-w-2xl mx-auto">
              Summer associate recruiting moves fast. Get your resume polished before on-campus recruiting 
              starts—you won&apos;t have time to iterate once the process begins.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/submit-resume?service=resume-rewrite"
                className="group flex items-center gap-2 rounded-xl bg-gold px-8 py-4 text-base font-semibold text-navy transition-all hover:bg-white"
              >
                Get MBA Resume Rewrite — $497
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
                Banking recruiting starts weeks into your MBA. Your resume needs to be finalized before you arrive on campus.
              </p>
            </div>
          </div>
        </section>

        {/* MBA Programs */}
        <section className="bg-cream py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">We Work With All Top Programs</h2>
              <div className="mt-2 h-1 w-20 bg-gold" />

              <div className="mt-12 space-y-4">
                {mbaPrograms.map((tier) => (
                  <div key={tier.tier} className="flex gap-4 rounded-xl bg-white p-5 shadow-sm">
                    <GraduationCap className="h-6 w-6 flex-shrink-0 text-gold" />
                    <div>
                      <p className="font-semibold text-navy">{tier.tier}</p>
                      <p className="mt-1 text-sm text-charcoal/60">{tier.schools}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Challenges & Solutions */}
        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">MBA Resume Challenges We Solve</h2>
              <div className="mt-2 h-1 w-20 bg-gold" />

              <div className="mt-12 space-y-6">
                {mbaResumeChallenges.map((item, index) => (
                  <div key={index} className="rounded-xl border border-border p-6">
                    <div className="grid gap-4 lg:grid-cols-2">
                      <div className="flex items-start gap-3">
                        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-red-100">
                          <Target className="h-4 w-4 text-red-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-red-700">Challenge</p>
                          <p className="mt-1 font-semibold text-navy">{item.challenge}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-green-700">Our Solution</p>
                          <p className="mt-1 text-charcoal/70">{item.solution}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Before/After */}
        <section className="bg-navy py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-white sm:text-4xl text-center">MBA Resume Transformations</h2>
              <p className="mt-4 text-center text-white/60">
                See how we position different pre-MBA backgrounds for banking recruiting.
              </p>

              <div className="mt-12 space-y-8">
                {beforeAfter.map((item, index) => (
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

        {/* Timing */}
        <section className="bg-cream py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">MBA Recruiting Timeline</h2>
              <div className="mt-2 h-1 w-20 bg-gold" />
              <p className="mt-6 text-lg text-charcoal/70">
                Your resume should be ready before you set foot on campus.
              </p>

              <div className="mt-10 space-y-4">
                {timingAdvice.map((item, i) => (
                  <div key={i} className="flex gap-4 rounded-xl bg-white p-5 shadow-sm">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-navy text-gold font-bold text-sm">
                      {i + 1}
                    </div>
                    <div>
                      <p className="font-semibold text-navy">{item.when}</p>
                      <p className="mt-1 text-sm text-charcoal/60">{item.action}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pre-Recruiting Checklist */}
        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">Pre-Recruiting Resume Checklist</h2>
              <div className="mt-2 h-1 w-20 bg-gold" />

              <div className="mt-10 rounded-2xl bg-cream p-8">
                <div className="space-y-4">
                  {preRecruitingChecklist.map((item, i) => (
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

        {/* Services */}
        <section className="bg-cream py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">Get Recruiting-Ready</h2>
              <div className="mt-2 flex justify-center">
                <div className="h-1 w-20 bg-gold" />
              </div>

              <div className="mt-12 grid gap-6 sm:grid-cols-2 max-w-2xl mx-auto">
                <Link 
                  href="/submit-resume?service=resume-review"
                  className="group rounded-2xl border-2 border-border bg-white p-6 text-left hover:border-gold transition-colors"
                >
                  <h3 className="text-xl font-bold text-navy group-hover:text-gold transition-colors">MBA Resume Review</h3>
                  <p className="mt-2 text-sm text-charcoal/60">Detailed feedback on positioning your pre-MBA experience</p>
                  <p className="mt-4 text-2xl font-bold text-gold">$197</p>
                </Link>
                <Link 
                  href="/submit-resume?service=resume-rewrite"
                  className="group rounded-2xl border-2 border-gold bg-gold/5 p-6 text-left hover:bg-gold/10 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-navy">MBA Resume Rewrite</h3>
                    <span className="text-xs font-bold text-gold bg-gold/20 px-2 py-1 rounded">RECOMMENDED</span>
                  </div>
                  <p className="mt-2 text-sm text-charcoal/60">Complete transformation for summer associate recruiting</p>
                  <p className="mt-4 text-2xl font-bold text-gold">$497</p>
                </Link>
              </div>

              <p className="mt-8 text-sm text-charcoal/50">
                100% money-back guarantee. Not satisfied? Full refund.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-navy py-20 lg:py-28">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Don&apos;t Wait Until Recruiting Starts</h2>
            <p className="mt-4 text-lg text-white/60">
              Get your MBA resume polished now. Once on-campus recruiting begins, there&apos;s no time to iterate.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/submit-resume?service=resume-rewrite"
                className="group flex items-center gap-2 rounded-xl bg-gold px-8 py-4 text-base font-semibold text-navy hover:bg-white transition-colors"
              >
                Get MBA Resume Rewrite — $497
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/playbooks/finance-technical-interview-guide"
                className="rounded-xl border-2 border-white/20 px-8 py-4 text-base font-semibold text-white hover:border-gold hover:text-gold transition-colors"
              >
                Finance Technical Guide
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
