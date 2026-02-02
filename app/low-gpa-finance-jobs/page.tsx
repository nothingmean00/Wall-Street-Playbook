import type { Metadata } from "next"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import Link from "next/link"
import { ArrowRight, CheckCircle, AlertTriangle, Target, BookOpen, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Low GPA? How to Break Into Finance Anyway | Realistic Strategies",
  description:
    "Sub-3.5 GPA doesn't have to end your finance career. Learn which firms care less about GPA, how to compensate with experience and networking, and the exact strategies that work.",
  keywords: [
    "low GPA finance jobs",
    "low GPA investment banking",
    "3.0 GPA finance career",
    "GPA cutoff investment banking",
    "finance job low grades",
    "overcome low GPA finance",
    "GPA requirements banking",
  ],
  openGraph: {
    title: "Low GPA? How to Break Into Finance Anyway",
    description: "Realistic strategies for finance careers when your GPA isn't perfect.",
    url: "https://wallstreetplaybook.org/low-gpa-finance-jobs",
  },
  alternates: {
    canonical: "https://wallstreetplaybook.org/low-gpa-finance-jobs",
  },
}

export default function LowGPAFinanceJobsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-navy pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Low GPA? Here's What <span className="text-gold">Actually Works</span>
            </h1>
            <p className="mt-6 text-lg text-white/70">
              A 3.2 from a non-target isn't a death sentence. It just means you need a different playbook.
            </p>
          </div>
        </section>

        {/* Reality Check */}
        <section className="bg-cream py-16">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <div className="rounded-xl bg-white p-8 shadow-sm">
              <div className="flex items-start gap-4">
                <AlertTriangle className="h-6 w-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl font-bold text-navy">The Honest Truth</h2>
                  <p className="mt-2 text-charcoal/70">
                    Resume screeners spend 30 seconds on your resume. At bulge brackets receiving 10,000+ applications, 
                    a sub-3.5 GPA often gets filtered out before a human sees it—especially from non-targets. 
                    But that doesn't mean finance is closed to you. It means you need to go around the front door.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* GPA Tiers */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-navy">Where You Stand</h2>
            <div className="mt-2 h-1 w-16 bg-gold" />

            <div className="mt-10 space-y-6">
              <div className="rounded-lg border border-green-200 bg-green-50 p-6">
                <p className="font-semibold text-green-800">3.5-3.7 GPA</p>
                <p className="mt-1 text-sm text-green-700">
                  You're in the game. Target schools can compete for most roles; non-targets need strong networking 
                  but aren't auto-filtered. Focus on nailing everything else.
                </p>
              </div>

              <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-6">
                <p className="font-semibold text-yellow-800">3.2-3.5 GPA</p>
                <p className="mt-1 text-sm text-yellow-700">
                  Gray zone. Online applications to top banks will mostly fail. You need referrals, 
                  relevant experience, or a compelling story. Middle-market and boutiques are more realistic.
                </p>
              </div>

              <div className="rounded-lg border border-red-200 bg-red-50 p-6">
                <p className="font-semibold text-red-800">Below 3.2 GPA</p>
                <p className="mt-1 text-sm text-red-700">
                  Straight path to Goldman is effectively closed. But you can still get to finance—
                  it just takes longer and requires alternative entry points.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Strategies That Work */}
        <section className="bg-navy py-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white">Strategies That Actually Work</h2>
            <div className="mt-2 h-1 w-16 bg-gold" />

            <div className="mt-10 space-y-8">
              <div className="rounded-xl bg-white/5 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="h-5 w-5 text-gold" />
                  <h3 className="text-lg font-semibold text-white">Target Firms That Care Less About GPA</h3>
                </div>
                <p className="text-white/70 text-sm mb-4">
                  Not every firm runs the same filter. These are more accessible:
                </p>
                <ul className="space-y-2 text-sm text-white/80">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                    <span><strong>Regional boutiques</strong> — Smaller applicant pools, relationship-driven hiring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                    <span><strong>Corporate finance/FP&A</strong> — Care more about Excel skills than GPA</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                    <span><strong>Startups & fintech</strong> — Results-focused, credentials-agnostic</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                    <span><strong>Commercial banking</strong> — Relationship skills matter more</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                    <span><strong>Off-cycle recruiting</strong> — Fewer applicants, more flexibility on GPA</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl bg-white/5 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="h-5 w-5 text-gold" />
                  <h3 className="text-lg font-semibold text-white">Network Your Way Around the Filter</h3>
                </div>
                <p className="text-white/70 text-sm mb-4">
                  A referral can bypass the automated GPA screen entirely. When someone inside says 
                  "this person is worth talking to," HR pulls your resume manually.
                </p>
                <ul className="space-y-2 text-sm text-white/80">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                    <span>Target 100+ outreach emails to analysts and associates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                    <span>Focus on alumni from your school who "made it" despite similar backgrounds</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                    <span>Ask for referrals explicitly once you've built rapport</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl bg-white/5 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <BookOpen className="h-5 w-5 text-gold" />
                  <h3 className="text-lg font-semibold text-white">Build Compensating Credentials</h3>
                </div>
                <p className="text-white/70 text-sm mb-4">
                  If your GPA doesn't signal capability, other things can:
                </p>
                <ul className="space-y-2 text-sm text-white/80">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                    <span><strong>CFA Level I</strong> — Universally recognized, shows commitment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                    <span><strong>Financial modeling certifications</strong> — Proves technical skills</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                    <span><strong>High SAT/ACT scores</strong> — Keep on resume if 1500+/34+</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                    <span><strong>Strong major GPA</strong> — List separately if higher than cumulative</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                    <span><strong>Upward trend</strong> — Highlight if junior/senior GPA is significantly higher</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* The Ladder Path */}
        <section className="bg-cream py-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-navy">The Realistic Path</h2>
            <div className="mt-2 h-1 w-16 bg-gold" />
            <p className="mt-6 text-charcoal/70">
              Most people with sub-3.5 GPAs who end up at top firms don't get there directly. They climb a ladder:
            </p>

            <div className="mt-10 relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gold/30" />
              
              <div className="space-y-8">
                <div className="relative pl-12">
                  <div className="absolute left-2 top-1 h-5 w-5 rounded-full bg-gold flex items-center justify-center text-xs font-bold text-navy">1</div>
                  <h3 className="font-semibold text-navy">Entry Point</h3>
                  <p className="mt-1 text-sm text-charcoal/70">
                    Regional boutique, Big 4 TAS, corporate finance role, or commercial banking position. 
                    Something that gets you relevant experience without GPA filters.
                  </p>
                </div>

                <div className="relative pl-12">
                  <div className="absolute left-2 top-1 h-5 w-5 rounded-full bg-gold flex items-center justify-center text-xs font-bold text-navy">2</div>
                  <h3 className="font-semibold text-navy">Build Track Record (1-2 years)</h3>
                  <p className="mt-1 text-sm text-charcoal/70">
                    Excel at your job. Get deal experience, build models, develop relationships. 
                    Your performance replaces your GPA as the signal of capability.
                  </p>
                </div>

                <div className="relative pl-12">
                  <div className="absolute left-2 top-1 h-5 w-5 rounded-full bg-gold flex items-center justify-center text-xs font-bold text-navy">3</div>
                  <h3 className="font-semibold text-navy">Lateral to Target Firm</h3>
                  <p className="mt-1 text-sm text-charcoal/70">
                    After 1-2 years with strong performance, lateral hiring cares more about your experience 
                    than your undergrad GPA. Network into middle-market banks or better boutiques.
                  </p>
                </div>

                <div className="relative pl-12">
                  <div className="absolute left-2 top-1 h-5 w-5 rounded-full bg-gold flex items-center justify-center text-xs font-bold text-navy">4</div>
                  <h3 className="font-semibold text-navy">Final Destination</h3>
                  <p className="mt-1 text-sm text-charcoal/70">
                    Another 1-2 years later, you can lateral again—or exit to PE, corp dev, or wherever you want. 
                    By now, nobody asks about your undergrad GPA.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Resume Tips */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-navy">Resume Tactics for Low GPA</h2>
            <div className="mt-2 h-1 w-16 bg-gold" />

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4 p-4 rounded-lg bg-off-white">
                <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-navy">List major GPA if higher than cumulative</p>
                  <p className="text-sm text-charcoal/70 mt-1">
                    "Major GPA: 3.6 (Finance)" looks better than "Cumulative GPA: 3.2"
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-off-white">
                <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-navy">Show upward trend if applicable</p>
                  <p className="text-sm text-charcoal/70 mt-1">
                    "Junior/Senior GPA: 3.7" demonstrates you figured it out
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-off-white">
                <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-navy">Lead with experience if it's strong</p>
                  <p className="text-sm text-charcoal/70 mt-1">
                    A relevant internship above education can shift the screener's first impression
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-off-white">
                <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-navy">Quantify everything else aggressively</p>
                  <p className="text-sm text-charcoal/70 mt-1">
                    Strong numbers on experience bullets can distract from a weak GPA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-navy py-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-white">
              Need Help Positioning a Low GPA on Your Resume?
            </h2>
            <p className="mt-4 text-white/60">
              We've helped candidates with 3.0 GPAs land finance roles. The key is knowing what to emphasize.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/submit-resume?service=resume-review"
                className="group flex items-center gap-2 rounded-xl bg-gold px-8 py-4 text-base font-semibold text-navy hover:bg-white transition-colors"
              >
                Get Resume Review — $197
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
