import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { ArrowRight, CheckCircle, XCircle, Target, TrendingUp, AlertTriangle, Shield, Clock, Star } from "lucide-react"

export const metadata: Metadata = {
  title: "Non-Target Resume Help | Break Into Investment Banking",
  description:
    "Resume review and rewrite services designed for non-target students. Learn how to position your background to compete with Ivy League candidates for investment banking roles.",
  keywords: [
    "non-target resume",
    "non target investment banking resume",
    "non target resume help",
    "breaking into IB non target",
    "non-target school resume",
    "investment banking resume non target",
    "how to get into IB from non target",
    "non target finance resume",
  ],
  openGraph: {
    title: "Non-Target Resume Help | Wall Street Playbook",
    description:
      "Resume services designed for non-target students breaking into investment banking. Compete with anyone.",
    url: "https://wallstreetplaybook.org/non-target-resume",
    images: [{ url: "https://wallstreetplaybook.org/og-resume-services.jpg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://wallstreetplaybook.org/non-target-resume",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://wallstreetplaybook.org/og-resume-services.jpg"],
  },
}

const challenges = [
  {
    challenge: "No brand recognition",
    solution: "We position your achievements to stand on their own merit, not your school name",
  },
  {
    challenge: "Limited deal exposure",
    solution: "We help quantify and frame any finance experience to sound impressive",
  },
  {
    challenge: "Competing with target schools",
    solution: "We highlight differentiators that make you stand out from cookie-cutter candidates",
  },
  {
    challenge: "Uncertain what banks want",
    solution: "We know exactly what screeners look for and optimize every line",
  },
]

const nonTargetStrategies = [
  {
    title: "Lead with Numbers, Not Names",
    desc: "When your school won't impress, your achievements must. We help you quantify everything—revenue impacted, analyses completed, projects delivered.",
  },
  {
    title: "Position Alternative Experience",
    desc: "Big 4, corporate finance, or startup experience can be positioned effectively. We know how to translate non-banking experience into banking-relevant bullets.",
  },
  {
    title: "Highlight Objective Signals",
    desc: "SAT scores, GPAs, certifications—objective metrics that prove capability regardless of school prestige.",
  },
  {
    title: "Tell a Compelling Story",
    desc: "Your non-traditional path can be an advantage. We help craft a narrative that shows drive and intentionality.",
  },
]

const beforeAfter = [
  {
    context: "Non-Target with Corporate Finance Experience",
    before: "Assisted with financial planning and analysis for the company",
    after: "Built rolling 12-month forecast model tracking $15M annual budget across 4 departments, identifying $800K in cost savings through variance analysis",
  },
  {
    context: "Non-Target with Boutique Internship",
    before: "Worked on M&A projects and helped with research",
    after: "Conducted industry analysis for 3 sell-side M&A engagements totaling $85M in transaction value, developing 15-company comparable set and precedent transaction analysis",
  },
  {
    context: "Non-Target with No Finance Experience",
    before: "Treasurer for student investment club, managed club budget",
    after: "Managed $50K student investment portfolio, executing 12 equity trades based on fundamental analysis; generated 8% return vs. 5% benchmark",
  },
]

const whyNonTargetsNeedHelp = [
  "Target school students get resume workshops, alumni reviews, and peer feedback",
  "Banks assume target school resumes are well-formatted—non-targets get extra scrutiny",
  "You don't know what you don't know about industry standards",
  "One formatting error or weak bullet can eliminate you before anyone reads your background",
  "Your resume has to work harder because your school name won't carry it",
]

export default function NonTargetResumePage() {
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
            <p className="text-sm font-semibold uppercase tracking-widest text-gold mb-4">For Non-Target Students</p>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Your Resume Has to <span className="text-gradient-gold">Work Harder</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/60 max-w-2xl mx-auto">
              Target school students have brand recognition. You have your achievements. Let us help you 
              present them in a way that competes with anyone.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/submit-resume?service=resume-rewrite&segment=non-target"
                className="group flex items-center gap-2 rounded-xl bg-gold px-8 py-4 text-base font-semibold text-navy transition-all hover:bg-white"
              >
                Get Your Resume Rewritten — $497
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/submit-resume?service=resume-review&segment=non-target"
                className="rounded-xl border-2 border-white/20 px-8 py-4 text-base font-semibold text-white transition-all hover:border-gold hover:text-gold"
              >
                Or Start with Review — $197
              </Link>
            </div>

            <div className="mt-8 flex items-center justify-center gap-6 text-sm text-white/50">
              <span className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-gold" />
                Money-Back Guarantee
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-gold" />
                5-7 Day Turnaround
              </span>
            </div>
          </div>
        </section>

        {/* The Non-Target Reality */}
        <section className="bg-gold py-6">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex items-center justify-center gap-3 text-navy">
              <AlertTriangle className="h-5 w-5" />
              <p className="text-sm font-semibold">
                Non-target resumes face 3x more scrutiny. Every word matters when your school name won&apos;t open doors.
              </p>
            </div>
          </div>
        </section>

        {/* Why Non-Targets Need Help */}
        <section className="bg-cream py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">Why Non-Targets Need Professional Resume Help</h2>
              <div className="mt-2 h-1 w-20 bg-gold" />
              
              <div className="mt-12 space-y-4">
                {whyNonTargetsNeedHelp.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 rounded-xl bg-white p-5 shadow-sm">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gold text-navy font-bold text-sm">
                      {i + 1}
                    </div>
                    <p className="text-charcoal/80 pt-1">{item}</p>
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
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">Your Challenges, Our Solutions</h2>
              <div className="mt-2 h-1 w-20 bg-gold" />

              <div className="mt-12 space-y-6">
                {challenges.map((item, index) => (
                  <div key={index} className="rounded-2xl border border-border p-6">
                    <div className="grid gap-4 lg:grid-cols-2">
                      <div className="flex items-start gap-3">
                        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-red-100">
                          <Target className="h-4 w-4 text-red-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-red-700">Challenge</p>
                          <p className="mt-1 text-charcoal/80">{item.challenge}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
                          <TrendingUp className="h-4 w-4 text-green-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-green-700">Our Solution</p>
                          <p className="mt-1 text-charcoal/80">{item.solution}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Non-Target Resume Strategies */}
        <section className="bg-navy py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-white sm:text-4xl text-center">How We Position Non-Target Candidates</h2>
              <p className="mt-4 text-center text-white/60">
                Strategies specifically designed for candidates without target school advantages.
              </p>

              <div className="mt-12 grid gap-6 sm:grid-cols-2">
                {nonTargetStrategies.map((item, index) => (
                  <div key={index} className="rounded-xl bg-white/10 p-6">
                    <h3 className="text-lg font-semibold text-gold">{item.title}</h3>
                    <p className="mt-2 text-sm text-white/70">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Before/After for Non-Targets */}
        <section className="bg-cream py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">Non-Target Resume Transformations</h2>
              <div className="mt-2 h-1 w-20 bg-gold" />
              <p className="mt-6 text-lg text-charcoal/70">
                Real examples of how we transform non-target experience into competitive bullets.
              </p>

              <div className="mt-12 space-y-8">
                {beforeAfter.map((item, index) => (
                  <div key={index} className="rounded-2xl bg-white p-6 shadow-sm">
                    <p className="text-sm font-semibold text-gold mb-4">{item.context}</p>
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

        {/* Non-Target Testimonials */}
        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl text-center">What Clients Say</h2>
              <div className="mt-2 flex justify-center">
                <div className="h-1 w-20 bg-gold" />
              </div>

              <div className="mt-12 grid gap-6 sm:grid-cols-2">
                <div className="rounded-xl border border-gold/30 bg-gold/5 p-6">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="h-4 w-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm text-charcoal/80 italic">
                    &quot;I was getting ghosted on applications for months. After the rewrite, I finally started getting first rounds at boutiques.&quot;
                  </p>
                  <p className="mt-4 text-xs font-semibold text-navy">
                    — State School Senior, Class of 2025
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-white p-6">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="h-4 w-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm text-charcoal/80 italic">
                    &quot;The reviewer understood exactly what non-targets face. They helped me position my Big 4 experience in a way that made sense for banking.&quot;
                  </p>
                  <p className="mt-4 text-xs font-semibold text-navy">
                    — Big 4 TAS Lateral
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-xl border border-border bg-white p-6">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-4 w-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-charcoal/80 italic">
                  &quot;The review caught formatting issues I didn&apos;t even know existed and weak bullets that were hurting my chances. Concrete feedback I could actually use.&quot;
                </p>
                <p className="mt-4 text-xs font-semibold text-navy">
                  — Liberal Arts College Junior
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="bg-cream py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">Choose Your Path</h2>
              <div className="mt-2 flex justify-center">
                <div className="h-1 w-20 bg-gold" />
              </div>
              
              <div className="mt-6 p-4 rounded-lg bg-gold/10 inline-block">
                <p className="text-sm text-navy">
                  <Star className="inline h-4 w-4 text-gold mr-1" />
                  <strong>For non-targets, we recommend Resume Rewrite.</strong> You need every advantage—let us do the heavy lifting.
                </p>
              </div>

              <div className="mt-12 grid gap-8 lg:grid-cols-2">
                {/* Resume Review */}
                <div className="rounded-2xl border border-border bg-white p-8 shadow-sm text-left">
                  <h3 className="text-2xl font-bold text-navy">Resume Review</h3>
                  <p className="mt-2 text-sm text-charcoal/60">Feedback & suggestions</p>
                  
                  <p className="mt-4 text-charcoal/70">
                    Get detailed feedback on what to fix. Best if you want to learn and make changes yourself.
                  </p>

                  <ul className="mt-6 space-y-2">
                    {[
                      "Line-by-line feedback",
                      "Specific rewrite suggestions",
                      "Non-target positioning advice",
                      "One Q&A round included",
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-charcoal/80">
                        <CheckCircle className="h-4 w-4 text-gold" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <span className="text-3xl font-bold text-navy">$197</span>
                    <Link
                      href="/submit-resume?service=resume-review&segment=non-target"
                      className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-navy px-6 py-3 text-sm font-semibold text-white hover:bg-gold hover:text-navy transition-colors"
                    >
                      Get Review
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>

                {/* Resume Rewrite - Recommended */}
                <div className="rounded-2xl border-2 border-gold bg-white p-8 shadow-lg text-left relative">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gold text-navy text-xs font-bold px-4 py-1 rounded-full">RECOMMENDED FOR NON-TARGETS</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-navy">Resume Rewrite</h3>
                  <p className="mt-2 text-sm text-charcoal/60">Complete reconstruction</p>
                  
                  <p className="mt-4 text-charcoal/70">
                    We rebuild your resume from scratch, positioning your non-target background to compete with anyone.
                  </p>

                  <ul className="mt-6 space-y-2">
                    {[
                      "Full resume reconstruction",
                      "Non-target positioning strategy",
                      "Quantified bullet writing",
                      "Two revision rounds",
                      "Final PDF + Word files",
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-charcoal/80">
                        <CheckCircle className="h-4 w-4 text-gold" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <span className="text-3xl font-bold text-navy">$497</span>
                    <Link
                      href="/submit-resume?service=resume-rewrite&segment=non-target"
                      className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-gold px-6 py-3 text-sm font-semibold text-navy hover:bg-navy hover:text-white transition-colors"
                    >
                      Get Rewrite
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
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
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Your School Doesn&apos;t Define Your Potential</h2>
            <p className="mt-4 text-lg text-white/60">
              Non-targets break into banking every year. The ones who succeed have resumes that work harder than the competition.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/submit-resume?service=resume-rewrite&segment=non-target"
                className="group flex items-center gap-2 rounded-xl bg-gold px-8 py-4 text-base font-semibold text-navy hover:bg-white transition-colors"
              >
                Get Resume Rewrite — $497
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/non-target-investment-banking"
                className="rounded-xl border-2 border-white/20 px-8 py-4 text-base font-semibold text-white hover:border-gold hover:text-gold transition-colors"
              >
                Read Non-Target Guide
              </Link>
            </div>

            <p className="mt-8 text-sm text-white/40">
              100% Money-Back Guarantee • Confidential • Expert Review
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
