import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { ArrowRight, CheckCircle, XCircle, Clock, Shield, AlertTriangle, FileText, Pencil, Building2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Investment Banking Resume Review | Expert IB Resume Feedback",
  description:
    "Professional investment banking resume review service. Get expert feedback on your IB resume from people who've screened thousands of candidates at Goldman, Morgan Stanley, and elite boutiques.",
  keywords: [
    "investment banking resume review",
    "IB resume review",
    "investment banking resume feedback",
    "IB resume help",
    "goldman sachs resume review",
    "morgan stanley resume",
    "bulge bracket resume",
    "investment banking resume service",
  ],
  openGraph: {
    title: "Investment Banking Resume Review | Wall Street Playbook",
    description:
      "Professional IB resume review by industry experts. Get feedback that helps you land interviews at top banks.",
    url: "https://wallstreetplaybook.org/investment-banking-resume-review",
    images: [{ url: "https://wallstreetplaybook.org/og-resume-services.jpg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://wallstreetplaybook.org/investment-banking-resume-review",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://wallstreetplaybook.org/og-resume-services.jpg"],
  },
}

const bankTypes = [
  { name: "Bulge Brackets", examples: "Goldman Sachs, Morgan Stanley, JP Morgan, Bank of America" },
  { name: "Elite Boutiques", examples: "Evercore, Centerview, Lazard, PJT Partners, Moelis" },
  { name: "Middle Market", examples: "William Blair, Baird, Piper Sandler, Harris Williams" },
  { name: "Regional Boutiques", examples: "Local and specialized advisory firms" },
]

const whatMakesIBDifferent = [
  {
    title: "30-Second Screen",
    desc: "IB analysts review hundreds of resumes. They're looking for reasons to reject, not reasons to interview. Every formatting error, weak bullet, or missing detail is a strike.",
  },
  {
    title: "Rigid Format Expectations",
    desc: "Investment banking has specific resume conventions that differ from other industries. Deviate from these and you signal you don't understand the industry.",
  },
  {
    title: "Quantification is Mandatory",
    desc: "Generic bullets don't work in IB. Every experience needs numbers—deal sizes, revenue impact, analysis scope. No numbers = no credibility.",
  },
  {
    title: "Deal Experience Matters",
    desc: "If you have any transaction experience, it needs to be positioned perfectly. We know how to describe deals in the language bankers expect.",
  },
]

const commonMistakes = [
  { mistake: "Using 'Responsible for' or 'Helped with'", fix: "Strong action verbs: Analyzed, Built, Executed, Led" },
  { mistake: "No quantification in bullets", fix: "Every bullet should have a number, %, or $ amount" },
  { mistake: "Generic descriptions of deal work", fix: "Specific deal sizes, industries, and your contribution" },
  { mistake: "Inconsistent date formatting", fix: "Pick one format (Jan 2024 or January 2024) and stick with it" },
  { mistake: "More than one page", fix: "One page maximum, no exceptions—even with extensive experience" },
  { mistake: "Creative fonts or formatting", fix: "Times New Roman or Garamond, 10-11pt, black text only" },
]

const bulletTransformations = [
  {
    role: "Previous Banking Internship",
    before: "Assisted with financial modeling and analysis for M&A transactions",
    after: "Built 3-statement financial models for 4 M&A transactions ranging from $50M-$200M in enterprise value; analysis directly informed buyer/seller negotiations",
  },
  {
    role: "Corporate Finance Experience",
    before: "Performed financial analysis and created presentations",
    after: "Developed quarterly board presentations analyzing $120M revenue business; identified $3M working capital optimization opportunity through cash conversion cycle analysis",
  },
  {
    role: "Investment Club",
    before: "Analyzed stocks and presented investment ideas to club members",
    after: "Presented 6 equity research pitches to 40-member investment club; 4 recommendations subsequently adopted, generating average 12% return over 6-month holding period",
  },
]

export default function IBResumeReviewPage() {
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
            <p className="text-sm font-semibold uppercase tracking-widest text-gold mb-4">Expert Service</p>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Investment Banking <span className="text-gradient-gold">Resume Review</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/60 max-w-2xl mx-auto">
              Your IB resume gets 30 seconds. Get expert feedback from people who&apos;ve reviewed thousands of 
              banking resumes at top firms.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/submit-resume?service=resume-review"
                className="group flex items-center gap-2 rounded-xl bg-gold px-8 py-4 text-base font-semibold text-navy transition-all hover:bg-white"
              >
                Get IB Resume Review — $197
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

        {/* Alert */}
        <section className="bg-gold py-6">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex items-center justify-center gap-3 text-navy">
              <AlertTriangle className="h-5 w-5" />
              <p className="text-sm font-semibold">
                IB resume standards are stricter than any other industry. One formatting error can eliminate you.
              </p>
            </div>
          </div>
        </section>

        {/* Target Banks */}
        <section className="bg-cream py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">Optimized for Every Bank Type</h2>
              <div className="mt-2 h-1 w-20 bg-gold" />
              
              <p className="mt-6 text-lg text-charcoal/70">
                Whether you&apos;re targeting bulge brackets, elite boutiques, or middle-market firms, we tailor 
                feedback to what each type of bank looks for.
              </p>

              <div className="mt-12 grid gap-4 sm:grid-cols-2">
                {bankTypes.map((bank) => (
                  <div key={bank.name} className="flex gap-4 rounded-xl bg-white p-5 shadow-sm">
                    <Building2 className="h-6 w-6 flex-shrink-0 text-gold" />
                    <div>
                      <p className="font-semibold text-navy">{bank.name}</p>
                      <p className="mt-1 text-sm text-charcoal/60">{bank.examples}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What Makes IB Different */}
        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">Why IB Resumes Are Different</h2>
              <div className="mt-2 h-1 w-20 bg-gold" />

              <div className="mt-12 grid gap-6 sm:grid-cols-2">
                {whatMakesIBDifferent.map((item) => (
                  <div key={item.title} className="rounded-xl border border-border p-6">
                    <h3 className="text-lg font-semibold text-navy">{item.title}</h3>
                    <p className="mt-2 text-sm text-charcoal/70">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="bg-navy py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-white sm:text-4xl text-center">Common IB Resume Mistakes We Fix</h2>
              <p className="mt-4 text-center text-white/60">
                These errors get resumes rejected instantly. We catch them all.
              </p>

              <div className="mt-12 space-y-4">
                {commonMistakes.map((item, index) => (
                  <div key={index} className="rounded-xl bg-white/10 p-5">
                    <div className="grid gap-4 lg:grid-cols-2">
                      <div className="flex items-start gap-3">
                        <XCircle className="h-5 w-5 flex-shrink-0 text-red-400 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium text-red-400">Mistake</p>
                          <p className="text-white/80">{item.mistake}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-400 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium text-green-400">Fix</p>
                          <p className="text-white/80">{item.fix}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Bullet Transformations */}
        <section className="bg-cream py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">Before & After: IB Resume Bullets</h2>
              <div className="mt-2 h-1 w-20 bg-gold" />

              <div className="mt-12 space-y-8">
                {bulletTransformations.map((item, index) => (
                  <div key={index} className="rounded-2xl bg-white p-6 shadow-sm">
                    <p className="text-sm font-semibold text-gold mb-4">{item.role}</p>
                    <div className="grid gap-4 lg:grid-cols-2">
                      <div className="rounded-lg bg-red-50 p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <XCircle className="h-5 w-5 text-red-500" />
                          <span className="text-sm font-semibold text-red-700">Before</span>
                        </div>
                        <p className="text-sm text-red-800">{item.before}</p>
                      </div>
                      <div className="rounded-lg bg-green-50 p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span className="text-sm font-semibold text-green-700">After</span>
                        </div>
                        <p className="text-sm text-green-800">{item.after}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="bg-white py-20 lg:py-28">
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
                      <h3 className="text-2xl font-bold text-navy">IB Resume Review</h3>
                      <p className="text-sm text-charcoal/60">Expert feedback</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    {[
                      "Line-by-line feedback on every section",
                      "IB-specific formatting corrections",
                      "Bullet point rewrite suggestions",
                      "Deal description optimization",
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
                      href="/submit-resume?service=resume-review"
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
                    <span className="bg-gold text-navy text-xs font-bold px-4 py-1 rounded-full">MOST POPULAR</span>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gold">
                      <Pencil className="h-7 w-7 text-navy" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-navy">IB Resume Rewrite</h3>
                      <p className="text-sm text-charcoal/60">Complete transformation</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    {[
                      "Full resume reconstruction",
                      "IB-optimized formatting",
                      "Professional bullet point writing",
                      "Deal descriptions perfected",
                      "Two revision rounds",
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
                      href="/submit-resume?service=resume-rewrite"
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

        {/* Final CTA */}
        <section className="bg-navy py-20 lg:py-28">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to Land IB Interviews?</h2>
            <p className="mt-4 text-lg text-white/60">
              Your resume is the first filter. Make sure it passes.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/submit-resume?service=resume-review"
                className="group flex items-center gap-2 rounded-xl bg-gold px-8 py-4 text-base font-semibold text-navy hover:bg-white transition-colors"
              >
                Get IB Resume Review — $197
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/investment-banking-resume"
                className="rounded-xl border-2 border-white/20 px-8 py-4 text-base font-semibold text-white hover:border-gold hover:text-gold transition-colors"
              >
                Read Free IB Resume Guide
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
