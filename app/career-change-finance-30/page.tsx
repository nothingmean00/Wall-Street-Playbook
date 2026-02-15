import type { Metadata } from "next"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import Link from "next/link"
import { ArrowRight, CheckCircle, Clock, Target, GraduationCap, Briefcase } from "lucide-react"

export const metadata: Metadata = {
  title: "Career Change to Finance at 30+ | Is It Too Late? (Honest Answer)",
  description:
    "Thinking about switching to finance in your late 20s or 30s? Here's the realistic path—which doors are closed, which are open, and how to position your experience.",
  keywords: [
    "career change to finance at 30",
    "too old for investment banking",
    "switch careers to finance",
    "late career change finance",
    "30 years old investment banking",
    "finance career change",
    "break into finance late",
  ],
  openGraph: {
    title: "Career Change to Finance at 30+ | Wall Street Playbook",
    description: "The realistic path to finance when you're not 22 anymore.",
    url: "https://wallstreetplaybook.org/career-change-finance-30",
    images: [{ url: "https://wallstreetplaybook.org/og-recruiting.jpg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://wallstreetplaybook.org/career-change-finance-30",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://wallstreetplaybook.org/og-recruiting.jpg"],
  },
}

export default function CareerChangeFinance30Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-navy pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Switching to Finance at 30+: <span className="text-gold">The Honest Truth</span>
            </h1>
            <p className="mt-6 text-lg text-white/70">
              You're not too old. But the path is different than it is for 22-year-olds.
            </p>
          </div>
        </section>

        {/* Quick Answer */}
        <section className="bg-gold py-6">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <p className="text-center text-navy font-medium">
              <strong>Short answer:</strong> Yes, you can break into finance at 30+. No, you probably won't start as a Goldman Sachs analyst. Here's what actually works.
            </p>
          </div>
        </section>

        {/* What's Closed vs Open */}
        <section className="bg-cream py-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-navy">What's Closed vs. What's Open</h2>
            <div className="mt-2 h-1 w-16 bg-gold" />

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="rounded-xl bg-red-50 border border-red-200 p-6">
                <h3 className="font-semibold text-red-800 mb-4">Mostly Closed</h3>
                <ul className="space-y-3 text-sm text-red-700">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">✕</span>
                    <span>Bulge bracket analyst programs (designed for 22-year-olds)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">✕</span>
                    <span>On-campus recruiting at target schools</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">✕</span>
                    <span>Standard summer analyst internships</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">✕</span>
                    <span>Entry-level PE associate roles (without IB first)</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl bg-green-50 border border-green-200 p-6">
                <h3 className="font-semibold text-green-800 mb-4">Still Open</h3>
                <ul className="space-y-3 text-sm text-green-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Middle-market and boutique IB (hire 30-year-old analysts)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Corporate finance / FP&A roles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>MBA → Associate recruiting (the reset button)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Wealth management / financial advisory</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Commercial banking / credit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Fintech (cares about skills, not age)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Your Advantages */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-navy">What You Have That 22-Year-Olds Don't</h2>
            <div className="mt-2 h-1 w-16 bg-gold" />

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4 p-4 rounded-lg bg-off-white">
                <Briefcase className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-navy">Real Work Experience</p>
                  <p className="text-sm text-charcoal/70 mt-1">
                    8+ years of professional experience means you know how businesses operate. 
                    You've managed projects, dealt with clients, and delivered under pressure.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-off-white">
                <Target className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-navy">Clearer Motivation</p>
                  <p className="text-sm text-charcoal/70 mt-1">
                    You're not chasing prestige because your roommate did. You've thought about this. 
                    That clarity comes through in interviews.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-off-white">
                <Clock className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-navy">Maturity</p>
                  <p className="text-sm text-charcoal/70 mt-1">
                    You can handle the hours, the stress, and the ambiguity without having a meltdown. 
                    Hiring managers know this.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Three Paths */}
        <section className="bg-navy py-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white">The Three Realistic Paths</h2>
            <div className="mt-2 h-1 w-16 bg-gold" />

            <div className="mt-10 space-y-8">
              {/* Path 1 */}
              <div className="rounded-xl bg-white/5 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-8 w-8 rounded-full bg-gold flex items-center justify-center text-navy font-bold">1</div>
                  <h3 className="text-lg font-semibold text-white">The MBA Reset</h3>
                </div>
                <p className="text-white/70 text-sm mb-4">
                  A top MBA (M7 or T15) lets you recruit for associate-level roles as if your previous career didn't matter. 
                  Banks actively recruit 28-32 year old MBA students.
                </p>
                <div className="text-sm text-white/60">
                  <p><strong className="text-gold">Best for:</strong> Those with budget and time for 2-year program</p>
                  <p><strong className="text-gold">Timeline:</strong> 2 years in school + recruiting during</p>
                  <p><strong className="text-gold">Cost:</strong> $200K+ (but often worth it for career reset)</p>
                </div>
              </div>

              {/* Path 2 */}
              <div className="rounded-xl bg-white/5 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-8 w-8 rounded-full bg-gold flex items-center justify-center text-navy font-bold">2</div>
                  <h3 className="text-lg font-semibold text-white">The Lateral Ladder</h3>
                </div>
                <p className="text-white/70 text-sm mb-4">
                  Start in an adjacent role, prove yourself, then lateral to your target. Takes longer but doesn't require grad school.
                </p>
                <div className="text-sm text-white/60 space-y-2">
                  <p><strong className="text-gold">Example paths:</strong></p>
                  <ul className="ml-4 space-y-1">
                    <li>• Big 4 TAS → Middle-market IB → Better firm</li>
                    <li>• Corporate finance → Corp dev → PE-backed company</li>
                    <li>• Commercial banking → Leveraged finance → Sponsor coverage</li>
                  </ul>
                  <p className="mt-3"><strong className="text-gold">Timeline:</strong> 2-4 years for each step</p>
                </div>
              </div>

              {/* Path 3 */}
              <div className="rounded-xl bg-white/5 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-8 w-8 rounded-full bg-gold flex items-center justify-center text-navy font-bold">3</div>
                  <h3 className="text-lg font-semibold text-white">The Direct Shot (Harder)</h3>
                </div>
                <p className="text-white/70 text-sm mb-4">
                  Network aggressively into boutique/middle-market banks that hire non-traditional candidates. 
                  This works, but it's a numbers game.
                </p>
                <div className="text-sm text-white/60">
                  <p><strong className="text-gold">Requirements:</strong></p>
                  <ul className="ml-4 space-y-1">
                    <li>• 150+ networking emails</li>
                    <li>• Bulletproof technicals (you'll be tested harder)</li>
                    <li>• Compelling story for "why finance now"</li>
                    <li>• Target regional boutiques and middle-market firms</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The "Why Now" Question */}
        <section className="bg-cream py-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-navy">The Question You'll Be Asked 100 Times</h2>
            <div className="mt-2 h-1 w-16 bg-gold" />

            <div className="mt-8 rounded-xl bg-white p-6 shadow-sm">
              <p className="text-lg font-medium text-navy italic">"Why finance? Why now? Why didn't you do this earlier?"</p>
              <p className="mt-4 text-charcoal/70">
                Every interviewer will ask this. Your answer needs to be honest, specific, and forward-looking—not defensive.
              </p>
              
              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <p className="text-sm font-medium text-green-800">Good answer framework:</p>
                <p className="text-sm text-green-700 mt-2">
                  "In my [previous role], I found myself most engaged when [specific finance-adjacent work]. 
                  After [specific trigger—deal you worked on, mentor conversation, etc.], I realized I wanted 
                  to be doing this full-time. I've spent the last [X months] preparing by [specific actions]."
                </p>
              </div>

              <div className="mt-4 p-4 bg-red-50 rounded-lg">
                <p className="text-sm font-medium text-red-800">Avoid:</p>
                <ul className="text-sm text-red-700 mt-2 space-y-1">
                  <li>• "I want to make more money" (true but shallow)</li>
                  <li>• "I should have done this earlier" (sounds like regret)</li>
                  <li>• "My current job is boring" (negative framing)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Skills to Build */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-navy">What to Do Now</h2>
            <div className="mt-2 h-1 w-16 bg-gold" />

            <div className="mt-10 space-y-4">
              {[
                {
                  title: "Learn financial modeling",
                  desc: "Complete a Wall Street Prep, BIWS, or CFI course. Build models from scratch. This is non-negotiable.",
                },
                {
                  title: "Start networking yesterday",
                  desc: "Find people who made similar transitions. LinkedIn search '[your background] to investment banking' and start reaching out.",
                },
                {
                  title: "Consider the CFA",
                  desc: "Level I shows commitment and fills knowledge gaps. Especially valuable for asset management paths.",
                },
                {
                  title: "Get your story tight",
                  desc: "Practice explaining your transition until it sounds natural, not rehearsed.",
                },
                {
                  title: "Target the right firms",
                  desc: "Boutiques and middle-market banks hire 30-year-old analysts. Bulge brackets mostly don't.",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-lg bg-off-white">
                  <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-navy">{item.title}</p>
                    <p className="text-sm text-charcoal/70 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-navy py-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-white">
              Need Help Positioning Your Career Change?
            </h2>
            <p className="mt-4 text-white/60">
              Your resume needs to tell a clear story about why this transition makes sense. We can help.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/submit-resume?service=resume-rewrite"
                className="group flex items-center gap-2 rounded-xl bg-gold px-8 py-4 text-base font-semibold text-navy hover:bg-white transition-colors"
              >
                Get Resume Rewrite — $497
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
