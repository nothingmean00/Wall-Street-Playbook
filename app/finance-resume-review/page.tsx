import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { ArrowRight, CheckCircle, XCircle, Clock, Shield, Users, Star, AlertTriangle, FileText, Pencil } from "lucide-react"

export const metadata: Metadata = {
  title: "Finance Resume Review Service | Investment Banking, PE, Hedge Funds",
  description:
    "Professional finance resume review by industry experts. Get detailed feedback on your investment banking, private equity, or hedge fund resume. Fast turnaround, money-back guarantee.",
  keywords: [
    "finance resume review",
    "investment banking resume review",
    "PE resume review",
    "hedge fund resume review",
    "banking resume feedback",
    "finance resume help",
    "IB resume service",
    "wall street resume review",
  ],
  openGraph: {
    title: "Finance Resume Review Service | Wall Street Playbook",
    description:
      "Professional finance resume review by industry experts. Investment banking, PE, and hedge fund resumes. Fast turnaround.",
    url: "https://wallstreetplaybook.org/finance-resume-review",
  },
  alternates: {
    canonical: "https://wallstreetplaybook.org/finance-resume-review",
  },
}

const whoItsFor = [
  { title: "Investment Banking Candidates", desc: "Targeting analyst or associate roles at bulge brackets, elite boutiques, or middle-market banks" },
  { title: "Private Equity Recruiting", desc: "Preparing for on-cycle or off-cycle PE recruiting with polished deal experience" },
  { title: "Hedge Fund Applicants", desc: "Positioning your background for fundamental L/S, macro, or quant funds" },
  { title: "Career Changers", desc: "Transitioning from consulting, Big 4, or other industries into finance" },
  { title: "Non-Target Students", desc: "Competing against target school candidates with a stronger resume" },
  { title: "MBA Candidates", desc: "Pre-MBA or post-MBA positioning for associate-level recruiting" },
]

const whatWeReview = [
  "Format and structure compliance with industry standards",
  "Bullet point strength and quantification",
  "Experience positioning and narrative flow",
  "GPA and education presentation",
  "Skills and interests section optimization",
  "Deal/transaction descriptions (if applicable)",
  "Typos, formatting inconsistencies, and red flags",
  "Overall competitiveness for target roles",
]

const beforeAfter = [
  {
    before: "Responsible for financial analysis and modeling",
    after: "Built 3-statement financial model for $75M revenue SaaS company, identifying 20% cost reduction opportunity",
    issue: "Vague responsibility → Specific achievement with numbers",
  },
  {
    before: "Helped with pitch book creation",
    after: "Developed 30-page management presentation for $150M sell-side M&A process, supporting successful transaction close",
    issue: "'Helped' is weak → Active verb with deal context",
  },
  {
    before: "Worked on due diligence projects",
    after: "Led financial due diligence workstream for 3 acquisitions totaling $200M, analyzing revenue quality and working capital trends",
    issue: "No specifics → Quantified scope and responsibilities",
  },
]

const faqs = [
  {
    q: "Who reviews my resume?",
    a: "Your resume is reviewed by professionals with direct finance recruiting experience—people who have screened resumes, conducted interviews, and made hiring decisions at top firms.",
  },
  {
    q: "How long does it take?",
    a: "Resume Review is delivered within 3-5 business days. Resume Rewrite takes 5-7 business days. Need it faster? Contact us about rush options.",
  },
  {
    q: "What if I'm not satisfied?",
    a: "We offer a 100% money-back guarantee. If you're not completely satisfied with the quality of feedback, we'll refund your payment in full.",
  },
  {
    q: "Can you review resumes for specific firms?",
    a: "Yes. When you submit, you can specify target firms and we'll tailor feedback to what those specific banks/funds look for.",
  },
  {
    q: "Do you work with international candidates?",
    a: "Absolutely. We work with candidates targeting US, UK, and other global finance roles. Resume conventions vary by region and we adjust accordingly.",
  },
  {
    q: "What's the difference between Review and Rewrite?",
    a: "Review gives you detailed feedback and suggestions—you make the changes. Rewrite means we completely reconstruct your resume for you, delivering a polished final document.",
  },
]

export default function FinanceResumeReviewPage() {
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
            <p className="text-sm font-semibold uppercase tracking-widest text-gold mb-4">Professional Service</p>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Finance <span className="text-gradient-gold">Resume Review</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/60 max-w-2xl mx-auto">
              Your resume gets 30 seconds. Make every word count with expert feedback from people who&apos;ve 
              reviewed thousands of finance resumes.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/submit-resume?service=resume-review"
                className="group flex items-center gap-2 rounded-xl bg-gold px-8 py-4 text-base font-semibold text-navy transition-all hover:bg-white"
              >
                Get Your Resume Reviewed — $197
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/submit-resume?service=resume-rewrite"
                className="rounded-xl border-2 border-white/20 px-8 py-4 text-base font-semibold text-white transition-all hover:border-gold hover:text-gold"
              >
                Full Rewrite — $497
              </Link>
            </div>

            <div className="mt-8 flex items-center justify-center gap-6 text-sm text-white/50">
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-gold" />
                3-5 Day Turnaround
              </span>
              <span className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-gold" />
                Money-Back Guarantee
              </span>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="bg-gold py-6">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex items-center justify-center gap-3 text-navy">
              <AlertTriangle className="h-5 w-5" />
              <p className="text-sm font-semibold">
                86% of finance resumes have critical errors that cause instant rejection. Most candidates don&apos;t know what they&apos;re doing wrong.
              </p>
            </div>
          </div>
        </section>

        {/* Who It's For */}
        <section className="bg-cream py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">Who This Is For</h2>
              <div className="mt-2 h-1 w-20 bg-gold" />
              
              <div className="mt-12 grid gap-4 sm:grid-cols-2">
                {whoItsFor.map((item) => (
                  <div key={item.title} className="flex gap-4 rounded-xl bg-white p-5 shadow-sm">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 text-gold" />
                    <div>
                      <p className="font-semibold text-navy">{item.title}</p>
                      <p className="mt-1 text-sm text-charcoal/60">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What We Review */}
        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">What We Review</h2>
              <div className="mt-2 h-1 w-20 bg-gold" />
              
              <p className="mt-6 text-lg text-charcoal/70">
                Every resume review includes detailed feedback on:
              </p>

              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                {whatWeReview.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gold/10">
                      <CheckCircle className="h-4 w-4 text-gold" />
                    </div>
                    <span className="text-sm text-charcoal/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Before/After Section */}
        <section className="bg-navy py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-white sm:text-4xl text-center">Before & After Examples</h2>
              <p className="mt-4 text-center text-white/60">
                See the kind of transformations our feedback enables.
              </p>

              <div className="mt-12 space-y-8">
                {beforeAfter.map((item, index) => (
                  <div key={index} className="rounded-2xl bg-white/10 p-6">
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
                    <p className="mt-4 text-sm text-gold text-center">{item.issue}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Comparison */}
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
                      <p className="text-sm text-charcoal/60">Feedback & suggestions</p>
                    </div>
                  </div>
                  
                  <p className="text-charcoal/70">
                    Detailed line-by-line feedback with specific rewrite suggestions. You learn what to fix and make the changes yourself.
                  </p>

                  <ul className="mt-6 space-y-3">
                    {[
                      "Line-by-line written feedback",
                      "Bullet point restructuring suggestions",
                      "Quantification opportunities identified",
                      "Format and positioning assessment",
                      "One round of follow-up questions",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm">
                        <CheckCircle className="h-5 w-5 flex-shrink-0 text-gold" />
                        <span className="text-charcoal/80">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex items-center justify-between">
                    <div>
                      <span className="text-3xl font-bold text-navy">$197</span>
                      <span className="text-sm text-charcoal/50 ml-2">3-5 days</span>
                    </div>
                    <Link
                      href="/submit-resume?service=resume-review"
                      className="flex items-center gap-2 rounded-lg bg-navy px-6 py-3 text-sm font-semibold text-white hover:bg-gold hover:text-navy transition-colors"
                    >
                      Get Started
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
                  
                  <p className="text-charcoal/70">
                    We completely rebuild your resume from scratch, delivering a polished final document ready for applications.
                  </p>

                  <ul className="mt-6 space-y-3">
                    {[
                      "Full resume reconstruction",
                      "Experience repositioning strategy",
                      "Optimized bullet point writing",
                      "Quantified impact statements",
                      "Two revision rounds included",
                      "Final PDF and Word delivery",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm">
                        <CheckCircle className="h-5 w-5 flex-shrink-0 text-gold" />
                        <span className="text-charcoal/80">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex items-center justify-between">
                    <div>
                      <span className="text-3xl font-bold text-navy">$497</span>
                      <span className="text-sm text-charcoal/50 ml-2">5-7 days</span>
                    </div>
                    <Link
                      href="/submit-resume?service=resume-rewrite"
                      className="flex items-center gap-2 rounded-lg bg-gold px-6 py-3 text-sm font-semibold text-navy hover:bg-navy hover:text-white transition-colors"
                    >
                      Get Started
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Signals */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl grid grid-cols-1 gap-8 sm:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gold/10">
                  <Shield className="h-6 w-6 text-gold" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-navy">Money-Back Guarantee</h3>
                <p className="mt-2 text-sm text-charcoal/60">
                  Not satisfied? Full refund, no questions asked.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gold/10">
                  <Users className="h-6 w-6 text-gold" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-navy">Industry Experts</h3>
                <p className="mt-2 text-sm text-charcoal/60">
                  Reviewed by people with real finance recruiting experience.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gold/10">
                  <Clock className="h-6 w-6 text-gold" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-navy">Fast Turnaround</h3>
                <p className="mt-2 text-sm text-charcoal/60">
                  Reviews in 3-5 days. Rewrites in 5-7 days.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-cream py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl text-center">Frequently Asked Questions</h2>
              <div className="mt-2 flex justify-center">
                <div className="h-1 w-20 bg-gold" />
              </div>

              <div className="mt-12 space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="rounded-xl bg-white p-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-navy">{faq.q}</h3>
                    <p className="mt-2 text-charcoal/70">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-navy py-20 lg:py-28">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Stop Guessing. Get Expert Feedback.</h2>
            <p className="mt-4 text-lg text-white/60">
              Your resume is the first impression. Make it count.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/submit-resume?service=resume-review"
                className="group flex items-center gap-2 rounded-xl bg-gold px-8 py-4 text-base font-semibold text-navy hover:bg-white transition-colors"
              >
                Get Resume Review — $197
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/submit-resume?service=resume-rewrite"
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
