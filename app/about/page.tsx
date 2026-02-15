import type { Metadata } from "next"
import Link from "next/link"
import { Target, BookOpen, Users, ArrowRight, Shield, CheckCircle, FileText, Sparkles, Mail, GraduationCap, Briefcase, TrendingUp } from "lucide-react"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

export const metadata: Metadata = {
  title: "About | Wall Street Playbook",
  description:
    "Wall Street Playbook is built by finance industry insiders with backgrounds at top PE firms, hedge funds, and investment banks. NYU Stern-educated, real experience, real results.",
  openGraph: {
    title: "About | Wall Street Playbook",
    description: "Built by industry insiders with PE, hedge fund, and investment banking experience.",
    url: "https://wallstreetplaybook.org/about",
    images: [{ url: "https://wallstreetplaybook.org/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Wall Street Playbook",
    description: "Built by industry insiders with PE, hedge fund, and investment banking experience.",
    images: ["https://wallstreetplaybook.org/og-image.jpg"],
  },
  alternates: {
    canonical: "https://wallstreetplaybook.org/about",
  },
}

const firmLogos = [
  "Goldman Sachs", "Morgan Stanley", "J.P. Morgan", "Lazard", "Evercore", "PJT Partners",
  "KKR", "Blackstone", "Apollo", "Carlyle", "Warburg Pincus", "TPG",
]

const milestones = [
  {
    label: "Top Firm Interviews",
    value: "30+",
    description: "Interview invitations received across IB, PE, and hedge funds",
  },
  {
    label: "Pages of Content",
    value: "177+",
    description: "Across 3 tactical playbooks with more in development",
  },
  {
    label: "Templates & Scripts",
    value: "56+",
    description: "Ready-to-use email templates, frameworks, and question banks",
  },
  {
    label: "Free Blog Articles",
    value: "30+",
    description: "On technicals, recruiting, networking, and career strategy",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-off-white">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="relative bg-navy-deep pt-28 pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-navy-deep via-navy to-navy-deep" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,_rgba(201,168,110,0.15),_transparent)]" />
          </div>

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 mb-6">
                <Briefcase className="w-4 h-4 text-gold" />
                <span className="text-xs font-semibold uppercase tracking-widest text-gold">Built by Industry Insiders</span>
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                We&apos;ve Sat in <span className="text-gradient-gold">Your Chair</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-white/60">
                Wall Street Playbook was built by finance professionals who recruited into private equity, hedge funds,
                and investment banking at the highest level. We created the resource we wish existed when we were in your shoes.
              </p>
            </div>

            {/* Stats bar */}
            <div className="mt-16 mx-auto max-w-4xl">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {milestones.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-3xl md:text-4xl font-bold text-gold">{stat.value}</p>
                    <p className="mt-1 text-sm font-semibold text-white/70">{stat.label}</p>
                    <p className="mt-1 text-xs text-white/40 hidden md:block">{stat.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Founder Story */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <div className="flex items-center gap-3">
                <div className="h-px flex-1 bg-gold/30" />
                <span className="text-sm font-medium uppercase tracking-wider text-gold">The Story</span>
                <div className="h-px flex-1 bg-gold/30" />
              </div>

              {/* Founder card */}
              <div className="mt-12 rounded-2xl border border-border bg-white p-8 sm:p-10">
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 h-14 w-14 rounded-xl bg-navy flex items-center justify-center">
                    <span className="text-xl font-bold text-gold">WSP</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-navy">The Founder</h3>
                    <div className="mt-1 flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-navy/5 px-3 py-1 text-xs font-medium text-navy">
                        <GraduationCap className="h-3 w-3" /> NYU Stern
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-navy/5 px-3 py-1 text-xs font-medium text-navy">
                        <Briefcase className="h-3 w-3" /> Private Equity
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-navy/5 px-3 py-1 text-xs font-medium text-navy">
                        <TrendingUp className="h-3 w-3" /> Hedge Funds
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 space-y-5 text-charcoal/80">
                  <p className="text-base leading-relaxed">
                    I built Wall Street Playbook because when I was recruiting, the resources available were either
                    surface-level or absurdly overpriced. The forums were full of noise. The &quot;guides&quot; rehashed
                    the same generic advice. Nobody was sharing what actually worked.
                  </p>
                  <p className="text-base leading-relaxed">
                    I went through the full gauntlet — NYU Stern, investment banking recruiting, and eventually
                    breaking into private equity and the hedge fund space. Along the way, I kept meticulous notes:
                    what questions actually got asked, what email templates got responses, which networking strategies
                    converted to interviews, and which ones were a waste of time.
                  </p>
                  <p className="text-base leading-relaxed">
                    After years on both sides of the table — as a candidate and later helping evaluate them — I
                    realized the gap between who gets offers and who doesn&apos;t is almost never about raw intelligence.
                    It&apos;s about preparation quality. The candidates who win are the ones who practiced the right things
                    in the right way.
                  </p>
                  <p className="text-base leading-relaxed">
                    <span className="font-semibold text-navy">That&apos;s what this is.</span> Every playbook, every template,
                    every framework on this site comes from real recruiting cycles, real interviews, and real results.
                    No theory. No fluff. Just the playbook I wish someone had handed me on day one.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <p className="text-sm text-charcoal/50 italic">
                    I stay anonymous because this isn&apos;t about personal branding — it&apos;s about the material.
                    The playbooks speak for themselves. If the content helps you land the interview, that&apos;s all
                    that matters.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Track Record */}
        <section className="bg-cream py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <div className="flex items-center gap-3">
                <div className="h-px flex-1 bg-gold/30" />
                <span className="text-sm font-medium uppercase tracking-wider text-gold">Track Record</span>
                <div className="h-px flex-1 bg-gold/30" />
              </div>

              <div className="mt-12 space-y-6 text-charcoal/80">
                <p className="text-lg leading-relaxed">
                  <span className="font-semibold text-navy">We don&apos;t teach theory — we share what worked.</span> The
                  materials behind Wall Street Playbook have collectively generated interview invitations from 30+ top-tier firms
                  across investment banking, private equity, and hedge funds.
                </p>
                <p className="text-lg leading-relaxed">
                  Every playbook, template, and framework is based on materials that produced real results:
                  callbacks from Goldman Sachs, Morgan Stanley, Lazard, Evercore, KKR, Blackstone, and many more.
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
                  <span className="inline-flex items-center rounded-full bg-gold/20 px-3 py-1 text-xs font-semibold text-gold-dark">
                    + 20 more
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mid-Page CTA */}
        <section className="py-12">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="rounded-2xl bg-navy p-8 sm:p-10 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_80%_-20%,_rgba(201,168,110,0.15),_transparent)]" />
              <div className="relative flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-xl font-bold text-white">See the proof yourself</h3>
                  <p className="mt-2 text-sm text-white/60">
                    Our homepage features real interview invitation screenshots from Goldman Sachs, Blackstone, KKR, Evercore, and more.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                  <Link
                    href="/playbooks"
                    className="inline-flex items-center gap-2 rounded-xl bg-gold px-6 py-3 text-sm font-semibold text-navy hover:bg-white transition-colors"
                  >
                    View Playbooks
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/resume-services"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
                  >
                    Resume Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Approach */}
        <section className="py-16 lg:py-24">
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
                  positions at top firms. The difference between those who land offers and those who don&apos;t often comes
                  down to preparation quality, not raw ability.
                </p>
                <p className="text-lg leading-relaxed">
                  We built Wall Street Playbook to close that preparation gap. No motivational fluff. No generic advice.
                  Just the tactical, specific frameworks that get results — the same materials we wish existed when we
                  were recruiting.
                </p>
              </div>

              {/* What makes us different */}
              <div className="mt-12 grid sm:grid-cols-2 gap-4">
                {[
                  { text: "Every framework tested in real recruiting cycles" },
                  { text: "Interview frequency data from 30+ firms" },
                  { text: "Updated for 2026 recruiting timelines" },
                  { text: "100% money-back guarantee on all products" },
                  { text: "Free blog with 30+ tactical articles" },
                  { text: "Built by practitioners, not career coaches" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 rounded-lg bg-white border border-border p-4">
                    <CheckCircle className="h-5 w-5 text-gold flex-shrink-0" />
                    <span className="text-sm text-charcoal/80">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="border-y border-charcoal/10 bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-2xl font-bold text-navy sm:text-3xl">What We Stand For</h2>
              <div className="mt-2 mx-auto h-1 w-12 bg-gold" />
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
              <div className="text-center group">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-navy shadow-lg group-hover:shadow-xl transition-shadow">
                  <Target className="h-7 w-7 text-gold" />
                </div>
                <h3 className="mt-6 text-lg font-bold text-navy">Results Over Theory</h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/60">
                  We only include what actually works. Every framework has been tested in real recruiting cycles
                  and generated real interview invitations.
                </p>
              </div>

              <div className="text-center group">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-navy shadow-lg group-hover:shadow-xl transition-shadow">
                  <BookOpen className="h-7 w-7 text-gold" />
                </div>
                <h3 className="mt-6 text-lg font-bold text-navy">Practical Frameworks</h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/60">
                  Templates, scripts, and structures you can use immediately. We provide the tactical tools, not just
                  advice you&apos;ve heard before.
                </p>
              </div>

              <div className="text-center group">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-navy shadow-lg group-hover:shadow-xl transition-shadow">
                  <Users className="h-7 w-7 text-gold" />
                </div>
                <h3 className="mt-6 text-lg font-bold text-navy">Candidate-First</h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/60">
                  Everything we build serves candidates. No fluff, no unnecessary upsells, no wasted time. Your success
                  is our success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What We Offer */}
        <section className="py-16 lg:py-24 bg-off-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-2xl font-bold text-navy sm:text-3xl">What We Offer</h2>
              <div className="mt-2 mx-auto h-1 w-12 bg-gold" />
              <p className="mt-4 text-charcoal/60 text-sm max-w-lg mx-auto">
                Everything you need to prepare for finance recruiting, from free resources to premium tactical guides.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Link
                href="/playbooks"
                className="group rounded-xl border border-border bg-white p-6 hover:shadow-lg hover:border-gold/30 transition-all"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy/5 mb-4">
                  <BookOpen className="h-6 w-6 text-gold" />
                </div>
                <h3 className="text-lg font-bold text-navy group-hover:text-gold transition-colors">Premium Playbooks</h3>
                <p className="mt-2 text-sm text-charcoal/60 leading-relaxed">
                  Tactical guides for technical interviews, PE recruiting, and networking. 88+ pages each, with frequency-tagged
                  questions, exact scripts, and frameworks.
                </p>
                <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-gold">
                  View Playbooks
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>

              <Link
                href="/resume-services"
                className="group rounded-xl border border-border bg-white p-6 hover:shadow-lg hover:border-gold/30 transition-all"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy/5 mb-4">
                  <FileText className="h-6 w-6 text-gold" />
                </div>
                <h3 className="text-lg font-bold text-navy group-hover:text-gold transition-colors">Resume Services</h3>
                <p className="mt-2 text-sm text-charcoal/60 leading-relaxed">
                  Professional resume review and full rewrite services optimized for IB, PE, and hedge fund recruiting.
                  100% money-back guarantee.
                </p>
                <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-gold">
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>

              <Link
                href="/blog"
                className="group rounded-xl border border-border bg-white p-6 hover:shadow-lg hover:border-gold/30 transition-all"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy/5 mb-4">
                  <Sparkles className="h-6 w-6 text-gold" />
                </div>
                <h3 className="text-lg font-bold text-navy group-hover:text-gold transition-colors">Free Blog</h3>
                <p className="mt-2 text-sm text-charcoal/60 leading-relaxed">
                  30+ articles covering technical questions, recruiting timelines, salary data, networking strategies,
                  and career navigation. Completely free.
                </p>
                <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-gold">
                  Read Articles
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Trust Us */}
        <section className="py-16 lg:py-24 bg-navy">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold text-white sm:text-3xl">Why Trust Us?</h2>
              <p className="mt-4 text-white/60">
                We don&apos;t ask you to trust our words. We show you the receipts.
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
              <h2 className="text-2xl font-bold text-navy sm:text-3xl">Ready to Start Preparing?</h2>
              <p className="mt-4 text-charcoal/60">
                Get the same frameworks that generated interviews at Goldman, KKR, Blackstone, and 30+ other top firms.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/playbooks"
                  className="inline-flex items-center gap-2 rounded-xl bg-navy px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-gold hover:text-navy"
                >
                  View Playbooks
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/submit-resume?service=resume-review"
                  className="inline-flex items-center gap-2 rounded-xl border border-charcoal/20 bg-white px-8 py-3.5 text-sm font-semibold text-charcoal transition-colors hover:border-gold hover:text-gold"
                >
                  Resume Services
                </Link>
              </div>
              <div className="mt-6 flex items-center justify-center gap-6 text-xs text-charcoal/40">
                <span className="flex items-center gap-1.5"><Shield className="h-3.5 w-3.5 text-gold" /> 30-day money-back guarantee</span>
                <span className="flex items-center gap-1.5"><Mail className="h-3.5 w-3.5 text-gold" /> support@wallstreetplaybook.org</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
