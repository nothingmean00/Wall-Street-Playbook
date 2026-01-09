import type { Metadata } from "next"
import Link from "next/link"
import { Target, BookOpen, Users } from "lucide-react"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

export const metadata: Metadata = {
  title: "About | Wall Street Playbook",
  description:
    "Wall Street Playbook provides tactical preparation materials for candidates targeting investment banking, private equity, and hedge fund roles.",
  openGraph: {
    title: "About | Wall Street Playbook",
    description: "Tactical preparation materials for candidates targeting top finance roles.",
    url: "https://wallstreetplaybook.org/about",
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-off-white">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="bg-navy py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Tactical Preparation for Competitive Recruiting
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-white/70">
                Wall Street Playbook exists for one purpose: to give serious candidates the frameworks, templates, and
                tactical knowledge needed to break into investment banking, private equity, and hedge funds.
              </p>
            </div>
          </div>
        </section>

        {/* Founder */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <div className="flex items-center gap-3">
                <div className="h-px flex-1 bg-gold/30" />
                <span className="text-sm font-medium uppercase tracking-wider text-gold">The Founder</span>
                <div className="h-px flex-1 bg-gold/30" />
              </div>

              <div className="mt-12 space-y-6 text-charcoal/80">
                <p className="text-lg leading-relaxed">
                  <span className="font-semibold text-navy">Alex Thornton</span> built Wall Street Playbook after going through 
                  the recruiting process himself—and seeing how many capable candidates fail due to poor preparation, not lack of ability.
                </p>
                <p className="text-lg leading-relaxed">
                  Alex graduated from <span className="font-medium text-navy">NYU Stern</span> and has worked across 
                  private equity, sellside, and buyside roles. He's been on both sides of the interview table and 
                  understands what separates candidates who get offers from those who don't.
                </p>
                <p className="text-lg leading-relaxed">
                  The playbooks and frameworks here are the same materials Alex wishes existed when he was recruiting. 
                  No fluff, no motivational content—just tactical, actionable prep that works.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Approach */}
        <section className="border-t border-charcoal/10 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <div className="flex items-center gap-3">
                <div className="h-px flex-1 bg-gold/30" />
                <span className="text-sm font-medium uppercase tracking-wider text-gold">The Approach</span>
                <div className="h-px flex-1 bg-gold/30" />
              </div>

              <div className="mt-12 space-y-6 text-charcoal/80">
                <p className="text-lg leading-relaxed">
                  Finance recruiting is competitive. Thousands of candidates compete for limited positions at top firms.
                  The difference between those who land offers and those who don't often comes down to preparation
                  quality, not raw ability.
                </p>
                <p className="text-lg leading-relaxed">
                  Wall Street Playbook exists to close that preparation gap. The materials here are tactical, specific, and
                  designed for candidates who take their recruiting outcomes seriously.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="border-y border-charcoal/10 bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-center text-2xl font-bold text-charcoal sm:text-3xl">What We Stand For</h2>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-navy">
                  <Target className="h-7 w-7 text-gold" />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-charcoal">Precision Over Volume</h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/60">
                  We focus on what matters. Every piece of content is designed to directly improve recruiting outcomes,
                  not pad page counts.
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-navy">
                  <BookOpen className="h-7 w-7 text-gold" />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-charcoal">Practical Frameworks</h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/60">
                  Templates, scripts, and structures you can use immediately. We provide the tactical tools, not just
                  advice.
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-navy">
                  <Users className="h-7 w-7 text-gold" />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-charcoal">Candidate-First</h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/60">
                  Everything we build serves candidates. No fluff, no upsells, no wasted time. Your success is our
                  success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold text-charcoal sm:text-3xl">Ready to Start Preparing?</h2>
              <p className="mt-4 text-charcoal/60">
                Browse our playbooks and resume services to get the materials you need.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/playbooks"
                  className="rounded-lg bg-navy px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-gold hover:text-navy"
                >
                  View Playbooks
                </Link>
                <Link
                  href="/resume-services"
                  className="rounded-lg border border-charcoal/20 bg-white px-8 py-3.5 text-sm font-semibold text-charcoal transition-colors hover:border-gold hover:text-gold"
                >
                  Resume Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
