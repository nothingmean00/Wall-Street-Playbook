import type { Metadata } from "next"
import Link from "next/link"
import { Target, BookOpen, Users, TrendingUp, Award, CheckCircle } from "lucide-react"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

export const metadata: Metadata = {
  title: "About | Wall Street Playbook",
  description:
    "Wall Street Playbook provides tactical preparation materials for candidates targeting investment banking, private equity, and hedge fund roles. Built by professionals who've been through the process.",
  openGraph: {
    title: "About | Wall Street Playbook",
    description: "Tactical preparation materials for candidates targeting top finance roles.",
    url: "https://wallstreetplaybook.org/about",
  },
}

const firmLogos = [
  "Goldman Sachs", "Morgan Stanley", "J.P. Morgan", "Lazard", "Evercore", "PJT Partners",
  "KKR", "Blackstone", "Apollo", "Carlyle", "Warburg Pincus", "TPG",
]

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
                Built by Candidates Who <span className="text-gradient-gold">Got the Interviews</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-white/70">
                Wall Street Playbook was created by finance professionals who successfully navigated recruiting at the 
                most competitive firms in the industry. We've distilled what actually works into actionable frameworks.
              </p>
            </div>
          </div>
        </section>

        {/* Proof Section */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <div className="flex items-center gap-3">
                <div className="h-px flex-1 bg-gold/30" />
                <span className="text-sm font-medium uppercase tracking-wider text-gold">Our Track Record</span>
                <div className="h-px flex-1 bg-gold/30" />
              </div>

              <div className="mt-12 space-y-6 text-charcoal/80">
                <p className="text-lg leading-relaxed">
                  <span className="font-semibold text-navy">We don't teach theory—we share what worked.</span> The team 
                  behind Wall Street Playbook has collectively received interview invitations from 30+ top-tier firms 
                  across investment banking, private equity, and hedge funds.
                </p>
                <p className="text-lg leading-relaxed">
                  Every playbook, template, and framework we offer is based on materials that generated real results: 
                  callbacks from Goldman Sachs, Morgan Stanley, Lazard, Evercore, KKR, Blackstone, and many more.
                </p>
                <p className="text-lg leading-relaxed">
                  We've been on both sides of the table—as nervous candidates and as interviewers. We know what separates 
                  the candidates who get offers from those who don't. It's rarely about raw ability. It's about preparation.
                </p>
              </div>

              {/* Firm mentions */}
              <div className="mt-12 rounded-xl border border-gold/20 bg-gold/5 p-6">
                <p className="text-sm font-semibold text-navy mb-4">Interview invitations received from:</p>
                <div className="flex flex-wrap gap-2">
                  {firmLogos.map((firm) => (
                    <span 
                      key={firm} 
                      className="inline-flex items-center rounded-full bg-navy/10 px-3 py-1 text-xs font-medium text-navy"
                    >
                      {firm}
                    </span>
                  ))}
                  <span className="inline-flex items-center rounded-full bg-gold/20 px-3 py-1 text-xs font-semibold text-gold">
                    + 20 more
                  </span>
                </div>
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
                <span className="text-sm font-medium uppercase tracking-wider text-gold">Our Approach</span>
                <div className="h-px flex-1 bg-gold/30" />
              </div>

              <div className="mt-12 space-y-6 text-charcoal/80">
                <p className="text-lg leading-relaxed">
                  Finance recruiting is a numbers game with specific rules. Thousands of candidates compete for limited 
                  positions at top firms. The difference between those who land offers and those who don't often comes 
                  down to preparation quality, not raw ability.
                </p>
                <p className="text-lg leading-relaxed">
                  We built Wall Street Playbook to close that preparation gap. No motivational fluff. No generic advice. 
                  Just the tactical, specific frameworks that get results—the same materials we wish existed when we 
                  were recruiting.
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
                <h3 className="mt-6 text-lg font-semibold text-charcoal">Results Over Theory</h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/60">
                  We only include what actually works. Every framework has been tested in real recruiting cycles 
                  and generated real interview invitations.
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-navy">
                  <BookOpen className="h-7 w-7 text-gold" />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-charcoal">Practical Frameworks</h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/60">
                  Templates, scripts, and structures you can use immediately. We provide the tactical tools, not just
                  advice you've heard before.
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-navy">
                  <Users className="h-7 w-7 text-gold" />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-charcoal">Candidate-First</h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/60">
                  Everything we build serves candidates. No fluff, no unnecessary upsells, no wasted time. Your success 
                  is our success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Trust Us */}
        <section className="py-16 lg:py-24 bg-navy">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold text-white sm:text-3xl">Why Trust Us?</h2>
              <p className="mt-4 text-white/60">
                We don't ask you to trust our words. We show you the receipts.
              </p>
              
              <div className="mt-12 grid gap-6 sm:grid-cols-3">
                <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                  <div className="text-3xl font-bold text-gold">30+</div>
                  <p className="mt-2 text-sm text-white/60">Firms where we received interviews</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                  <div className="text-3xl font-bold text-gold">IB + PE + HF</div>
                  <p className="mt-2 text-sm text-white/60">Coverage across all major finance paths</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                  <div className="text-3xl font-bold text-gold">100%</div>
                  <p className="mt-2 text-sm text-white/60">Money-back guarantee on all products</p>
                </div>
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
                Get the same frameworks that generated interviews at Goldman, KKR, Blackstone, and 30+ other top firms.
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
