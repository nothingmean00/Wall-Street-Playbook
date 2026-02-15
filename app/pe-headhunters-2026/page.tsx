import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { ArrowRight, Users, Building2, Star, AlertTriangle } from "lucide-react"

export const metadata: Metadata = {
  title: "PE Headhunters 2026 | The 7 Firms That Control Megafund Access",
  description:
    "The complete guide to PE headhunters in 2026. CPI, Henkel, SG Partners, Ratio, Amity, Dynamics, Oxbridge—their coverage, specialties, and how to approach each for on-cycle recruiting.",
  keywords: [
    "PE headhunters 2026",
    "private equity headhunters",
    "PE recruiting headhunters",
    "CPI headhunters",
    "SG Partners PE",
    "Henkel Search Partners",
    "PE on-cycle headhunters",
    "how to contact PE headhunters",
  ],
  openGraph: {
    title: "PE Headhunters 2026 | The 7 Firms That Control Megafund Access",
    description:
      "The 7 headhunter firms that control access to Blackstone, KKR, Apollo, and top PE funds in 2026.",
    url: "https://wallstreetplaybook.org/pe-headhunters-2026",
    images: [{ url: "https://wallstreetplaybook.org/og-recruiting.jpg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://wallstreetplaybook.org/pe-headhunters-2026",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://wallstreetplaybook.org/og-recruiting.jpg"],
  },
}

const tier1Headhunters = [
  {
    name: "CPI (Cromwell Partners International)",
    founded: "1996",
    unique: "ONLY headhunter that asks paper LBO questions in initial meetings",
    coverage: ["Advent", "Hellman & Friedman", "Silver Lake", "THL", "American Securities", "New Mountain", "GTCR", "Ares"],
    strategy: "Save for last. Come prepared for technicals.",
  },
  {
    name: "Henkel Search Partners",
    founded: "2011",
    unique: "Consistently rated 'most pleasant to work with'",
    coverage: ["KKR (all groups)", "Carlyle", "Warburg Pincus", "Vista Equity", "CD&R", "BC Partners", "TPG Growth"],
    strategy: "Prioritize this relationship. Excellent coverage + pleasant experience.",
  },
  {
    name: "SG Partners",
    founded: "Early 1990s",
    unique: "Primary access to Blackstone main PE fund",
    coverage: ["Blackstone (main PE)", "Sixth Street", "Summit Partners", "Global Infrastructure Partners", "Crestview"],
    strategy: "Essential for Blackstone access despite mixed reputation.",
  },
]

const tier2Headhunters = [
  {
    name: "Ratio Advisors",
    specialty: "PRIMARY headhunter for growth equity",
    coverage: ["Apollo", "General Atlantic", "Francisco Partners", "Charlesbank", "Golden Gate", "Thrive Capital"],
    strategy: "Essential for growth equity targeting. Strong Apollo relationship.",
  },
  {
    name: "Amity Search Partners",
    specialty: "Great to work with, reliable middle-market coverage",
    coverage: ["Bain Capital", "Centerbridge", "Trian", "Clearlake", "H.I.G. Capital"],
    strategy: "Good for UMM targets and practice before Tier 1 meetings.",
  },
  {
    name: "Dynamics Search Partners",
    specialty: "75% hedge fund, 25% PE. Strong in Texas/energy",
    coverage: ["Apax Partners", "Leonard Green", "Farallon", "GI Partners", "Quantum Energy"],
    strategy: "Target if interested in HF crossover or Texas-based funds.",
  },
  {
    name: "Oxbridge Group",
    specialty: "Middle-market and hedge fund focus",
    coverage: ["Genstar Capital", "Jordan Company", "Great Hill", "Vector Capital", "Gryphon"],
    strategy: "Essential for MM targeting. Professional but not warm.",
  },
]

const candidateTiers = [
  {
    tier: "A-List (Top 10-20%)",
    profile: "GS/MS/EVR M&A, target school, 3.8+ GPA",
    access: "Priority megafund slots, multiple firm options, proactive HH advocacy",
  },
  {
    tier: "B-List (Next 30-40%)",
    profile: "Remaining BB/EB analysts, good schools",
    access: "Secondary megafund positions, UMM slots, must work harder to stand out",
  },
  {
    tier: "C-List and Below",
    profile: "MM bank analysts, non-target backgrounds",
    access: "Typically not shown to megafunds. Best path is MM/LMM PE or off-cycle",
  },
]

const meetingSequence = [
  { week: "Week 1", firms: "Amity, Oxbridge", purpose: "Practice reps, refine your story" },
  { week: "Week 2", firms: "DSP, Ratio", purpose: "Mid-tier coverage, continue refining" },
  { week: "Week 3", firms: "Henkel, SG Partners, CPI", purpose: "Save the best for last when you're sharp" },
]

const mistakes = [
  "Reneging on a signed offer — Done with that firm and headhunter permanently",
  "Lying about anything — Bank, GPA, deal involvement; PE world is small",
  "Being unprepared for HH meetings — They rank you against everyone that day",
  "Vague preferences ('I like everything') — Signals indecision, gets tracked",
  "Leaking process information — Reputation follows you across cycles",
  "Badmouthing current employer — Red flag for professionalism",
]

export default function PEHeadhunters2026Page() {
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
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 mb-6">
              <Users className="w-4 h-4 text-gold" />
              <span className="text-xs font-semibold uppercase tracking-widest text-gold">2026 Headhunter Guide</span>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              PE <span className="text-gradient-gold">Headhunters</span> 2026
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/60 max-w-2xl mx-auto">
              Seven headhunting firms control access to Blackstone, KKR, Apollo, and every top PE fund. 
              Understanding their coverage and how to approach each is essential for 2026 on-cycle success.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/playbooks/pe-recruiting-playbook"
                className="group flex items-center gap-2 rounded-xl bg-gold px-8 py-4 text-base font-semibold text-navy transition-all hover:bg-white"
              >
                Get Full Headhunter Strategy
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="#firms"
                className="rounded-xl border-2 border-white/20 px-8 py-4 text-base font-semibold text-white transition-all hover:border-gold hover:text-gold"
              >
                View All 7 Firms
              </Link>
            </div>
          </div>
        </section>

        {/* Warning Banner */}
        <section className="bg-gold py-4">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex items-center justify-center gap-3 text-navy">
              <AlertTriangle className="h-5 w-5" />
              <p className="text-sm font-semibold">
                Even &quot;purely informational&quot; headhunter calls are evaluative from minute one. Your profile impression sticks permanently.
              </p>
            </div>
          </div>
        </section>

        {/* A-List / B-List Reality */}
        <section className="bg-cream py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">The A-List vs. B-List Reality</h2>
              <div className="mt-2 h-1 w-20 bg-gold" />
              <p className="mt-4 text-charcoal/70">
                Headhunters segment candidates into tiers that determine which funds see your profile.
              </p>

              <div className="mt-12 space-y-4">
                {candidateTiers.map((tier, i) => (
                  <div key={tier.tier} className={`rounded-xl p-6 ${i === 0 ? 'bg-gold/10 border-2 border-gold/30' : 'bg-white shadow-sm'}`}>
                    <div className="flex items-start gap-4">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${i === 0 ? 'bg-gold text-navy' : 'bg-navy text-gold'}`}>
                        <Star className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-navy">{tier.tier}</h3>
                        <p className="text-sm text-charcoal/60 mt-1"><strong>Profile:</strong> {tier.profile}</p>
                        <p className="text-sm text-charcoal/60"><strong>Access:</strong> {tier.access}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tier 1 Headhunters */}
        <section id="firms" className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">Tier 1: Blue-Chip Megafund Coverage</h2>
              <div className="mt-2 h-1 w-20 bg-gold" />

              <div className="mt-12 space-y-8">
                {tier1Headhunters.map((hh) => (
                  <div key={hh.name} className="rounded-2xl border border-border bg-off-white/50 p-8">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-gold">
                        <Building2 className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-navy">{hh.name}</h3>
                        <p className="text-sm text-charcoal/50">Founded: {hh.founded}</p>
                        <p className="mt-2 text-sm text-gold font-medium">{hh.unique}</p>
                        
                        <div className="mt-4">
                          <p className="text-xs font-semibold uppercase tracking-wider text-charcoal/50 mb-2">Key Coverage</p>
                          <div className="flex flex-wrap gap-2">
                            {hh.coverage.map((firm) => (
                              <span key={firm} className="px-2 py-1 rounded bg-navy/10 text-xs text-navy font-medium">
                                {firm}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div className="mt-4 p-3 rounded-lg bg-gold/10 border border-gold/20">
                          <p className="text-sm text-charcoal/70"><strong className="text-gold">Strategy:</strong> {hh.strategy}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tier 2 Headhunters */}
        <section className="bg-cream py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">Tier 2: Strong Coverage with Specializations</h2>
              <div className="mt-2 h-1 w-20 bg-gold" />

              <div className="mt-12 grid gap-6 lg:grid-cols-2">
                {tier2Headhunters.map((hh) => (
                  <div key={hh.name} className="rounded-xl bg-white p-6 shadow-sm">
                    <h3 className="font-bold text-navy">{hh.name}</h3>
                    <p className="text-sm text-gold mt-1">{hh.specialty}</p>
                    
                    <div className="mt-3">
                      <p className="text-xs font-semibold uppercase tracking-wider text-charcoal/50 mb-2">Coverage</p>
                      <div className="flex flex-wrap gap-1">
                        {hh.coverage.slice(0, 4).map((firm) => (
                          <span key={firm} className="px-2 py-0.5 rounded bg-navy/10 text-xs text-navy">
                            {firm}
                          </span>
                        ))}
                        {hh.coverage.length > 4 && (
                          <span className="px-2 py-0.5 rounded bg-navy/10 text-xs text-navy">
                            +{hh.coverage.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <p className="mt-3 text-sm text-charcoal/60">{hh.strategy}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Meeting Sequence */}
        <section className="bg-navy py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-white sm:text-4xl text-center">Recommended Meeting Sequence</h2>
              <p className="mt-4 text-center text-white/60">
                Don&apos;t meet with CPI first. Build up to the best coverage.
              </p>

              <div className="mt-12 space-y-4">
                {meetingSequence.map((week, i) => (
                  <div key={week.week} className="flex items-center gap-4 rounded-xl bg-white/10 p-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gold text-navy font-bold">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-gold">{week.week}: {week.firms}</h3>
                      <p className="text-sm text-white/70">{week.purpose}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mistakes */}
        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">Mistakes That Permanently Damage Candidacy</h2>
              <div className="mt-2 h-1 w-20 bg-gold" />
              <p className="mt-4 text-charcoal/70">
                Headhunters have long memories. These errors follow you across cycles.
              </p>

              <div className="mt-12 space-y-3">
                {mistakes.map((mistake, i) => (
                  <div key={i} className="flex items-start gap-3 rounded-xl bg-red-50 border border-red-200 p-4">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-white text-xs font-bold flex-shrink-0">
                      {i + 1}
                    </span>
                    <p className="text-sm text-red-800">{mistake}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Related Resources */}
        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-2xl font-bold text-navy mb-8">Related 2026 PE Resources</h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <Link href="/pe-interview-prep-2026" className="group rounded-xl border border-border bg-off-white/50 p-4 hover:border-gold transition-colors">
                  <p className="font-semibold text-navy group-hover:text-gold transition-colors">PE Interview Prep 2026</p>
                  <p className="mt-1 text-sm text-charcoal/60">Technical & behavioral questions</p>
                </Link>
                <Link href="/pe-compensation-2026" className="group rounded-xl border border-border bg-off-white/50 p-4 hover:border-gold transition-colors">
                  <p className="font-semibold text-navy group-hover:text-gold transition-colors">PE Compensation 2026</p>
                  <p className="mt-1 text-sm text-charcoal/60">Associate to Partner salary data</p>
                </Link>
                <Link href="/pe-career-path-2026" className="group rounded-xl border border-border bg-off-white/50 p-4 hover:border-gold transition-colors">
                  <p className="font-semibold text-navy group-hover:text-gold transition-colors">PE Career Path 2026</p>
                  <p className="mt-1 text-sm text-charcoal/60">Timeline, promotions, and exits</p>
                </Link>
                <Link href="/non-target-to-pe" className="group rounded-xl border border-border bg-off-white/50 p-4 hover:border-gold transition-colors">
                  <p className="font-semibold text-navy group-hover:text-gold transition-colors">Non-Target to PE</p>
                  <p className="mt-1 text-sm text-charcoal/60">Breaking in from non-traditional paths</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-cream py-20 lg:py-28">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-navy sm:text-4xl">Get the Complete Headhunter Strategy</h2>
            <p className="mt-4 text-lg text-charcoal/60">
              The 2026 PE Playbook includes detailed coverage for all 7 headhunter firms, 
              email templates, and the exact meeting sequence that maximizes your chances.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/playbooks/pe-recruiting-playbook"
                className="group flex items-center gap-2 rounded-xl bg-navy px-8 py-4 text-base font-semibold text-white hover:bg-gold hover:text-navy transition-colors"
              >
                Get the 2026 PE Playbook — $67
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/blog/pe-headhunter-landscape-2026"
                className="rounded-xl border-2 border-navy px-8 py-4 text-base font-semibold text-navy hover:bg-navy hover:text-white transition-colors"
              >
                Read Full Blog Post
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
