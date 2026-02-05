import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { ArrowRight, Calendar, AlertTriangle, Clock, TrendingUp } from "lucide-react"

export const metadata: Metadata = {
  title: "Private Equity Recruiting 2026 | On-Cycle Timeline & Dates",
  description:
    "2026 private equity recruiting timeline and on-cycle dates. When PE firms like KKR, Blackstone, Apollo, and Carlyle recruit, plus what's changed for the 2026 cycle.",
  keywords: [
    "PE recruiting 2026",
    "private equity recruiting 2026",
    "on-cycle recruiting 2026",
    "PE on-cycle 2026",
    "KKR recruiting 2026",
    "Blackstone recruiting 2026",
    "when does PE recruiting start 2026",
    "private equity analyst 2026",
  ],
  openGraph: {
    title: "Private Equity Recruiting 2026 | On-Cycle Timeline & Dates",
    description:
      "2026 private equity recruiting timeline and on-cycle dates. When top PE firms recruit.",
    url: "https://wallstreetplaybook.org/private-equity-recruiting-2026",
  },
  alternates: {
    canonical: "https://wallstreetplaybook.org/private-equity-recruiting-2026",
  },
}

const oncycleTimeline = [
  {
    phase: "Headhunter Outreach",
    timing: "Late Summer 2025",
    desc: "HHs start reaching out to analysts at top banks 3-6 months into their analyst programs",
    details: [
      "CPI, SG Partners, Henkel start calls",
      "First-year analysts get initial outreach",
      "Build relationships with key headhunters",
      "Update resume and start studying",
    ],
  },
  {
    phase: "Process Kicks Off",
    timing: "September-October 2025",
    desc: "On-cycle processes begin in earnest with compressed timelines",
    details: [
      "Headhunters schedule first rounds",
      "Processes run Friday-Sunday",
      "Multiple funds interview same weekend",
      "LBO modeling tests administered",
    ],
  },
  {
    phase: "Superdays & Offers",
    timing: "October-November 2025",
    desc: "Final rounds and exploding offers with 24-48 hour deadlines",
    details: [
      "In-person superdays at fund offices",
      "Case studies and deal discussions",
      "Offers extended (often same day)",
      "Exploding deadlines are norm",
    ],
  },
  {
    phase: "Off-Cycle Continues",
    timing: "Q1-Q2 2026",
    desc: "Firms that didn't fill or new openings recruit off-cycle",
    details: [
      "Middle market PE more active",
      "Growth equity firms recruit",
      "Some megafunds do second rounds",
      "More time but still competitive",
    ],
  },
]

const firmTimings = [
  { tier: "Megafunds", firms: "KKR, Blackstone, Apollo, Carlyle, TPG", timing: "Sept-Oct (earliest)", notes: "Most compressed, 24hr deadlines" },
  { tier: "Upper MM", firms: "Advent, Hellman, TA, Summit", timing: "Oct-Nov", notes: "Slightly more time to decide" },
  { tier: "Middle Market", firms: "Audax, GTCR, Riverside", timing: "Nov-Feb", notes: "Often off-cycle or rolling" },
  { tier: "Growth Equity", firms: "General Atlantic, TA, Summit", timing: "Rolling", notes: "Less structured process" },
  { tier: "Sector Focused", firms: "Vista, Thoma Bravo, Francisco", timing: "Oct-Dec", notes: "Technical focus varies by sector" },
]

const what2026Looks = [
  {
    title: "Even Earlier Start",
    desc: "Some megafunds are starting outreach to strong candidates within 2-3 months of analyst start dates. The arms race continues.",
  },
  {
    title: "AI in Screening",
    desc: "Headhunters increasingly use data to identify candidates earlier. Your deal experience and bank pedigree matter from day one.",
  },
  {
    title: "Modeling Test Evolution",
    desc: "LBO tests are getting more complex. Expect add-ons, dividend recaps, and sensitivity analysis beyond basic mechanics.",
  },
  {
    title: "Culture Fit Emphasis",
    desc: "With smaller teams, culture fit is weighted heavily. Prepare thoughtful answers on why specific funds.",
  },
]

const bankToFund = [
  { bank: "Goldman Sachs", placement: "High", notes: "TMT and Sponsors groups place especially well" },
  { bank: "Morgan Stanley", placement: "High", notes: "M&A and coverage groups strong" },
  { bank: "JP Morgan", placement: "High", notes: "Large analyst class, many place" },
  { bank: "Evercore", placement: "Very High", notes: "Top placement rate to megafunds" },
  { bank: "PJT Partners", placement: "Very High", notes: "Strong Rx placement" },
  { bank: "Centerview", placement: "Very High", notes: "Small class but excellent placement" },
  { bank: "Lazard", placement: "High", notes: "Rx analysts place very well" },
  { bank: "Moelis", placement: "High", notes: "Consistent placement across groups" },
]

export default function PERecruiting2026Page() {
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
              <TrendingUp className="w-4 h-4 text-gold" />
              <span className="text-xs font-semibold uppercase tracking-widest text-gold">2026 On-Cycle</span>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Private Equity <span className="text-gradient-gold">Recruiting 2026</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/60 max-w-2xl mx-auto">
              On-cycle PE recruiting timeline for 2026. When megafunds, upper middle market, and 
              growth equity firms recruit first-year banking analysts.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/playbooks/pe-recruiting-playbook"
                className="group flex items-center gap-2 rounded-xl bg-gold px-8 py-4 text-base font-semibold text-navy transition-all hover:bg-white"
              >
                Get 2026 PE Playbook
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="#timeline"
                className="rounded-xl border-2 border-white/20 px-8 py-4 text-base font-semibold text-white transition-all hover:border-gold hover:text-gold"
              >
                View Timeline
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
                2026 on-cycle could start as early as August 2025. If you&apos;re a first-year analyst, start preparing now.
              </p>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section id="timeline" className="bg-cream py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">2026 On-Cycle Timeline</h2>
              <div className="mt-2 h-1 w-20 bg-gold" />
              <p className="mt-4 text-charcoal/70">
                For analysts starting in Summer 2025, recruiting for 2027 start dates.
              </p>

              <div className="mt-12 space-y-8">
                {oncycleTimeline.map((phase, i) => (
                  <div key={phase.phase} className="relative pl-8 border-l-2 border-gold/30">
                    <div className="absolute -left-3 top-0 h-6 w-6 rounded-full bg-gold flex items-center justify-center">
                      <span className="text-xs font-bold text-navy">{i + 1}</span>
                    </div>
                    <div className="rounded-xl bg-white p-6 shadow-sm">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-bold text-navy">{phase.phase}</h3>
                        <span className="text-sm text-gold font-medium">{phase.timing}</span>
                      </div>
                      <p className="text-sm text-charcoal/70 mb-4">{phase.desc}</p>
                      <ul className="grid gap-2 sm:grid-cols-2">
                        {phase.details.map((detail, j) => (
                          <li key={j} className="flex items-start gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
                            <span className="text-sm text-charcoal/60">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Firm Timings */}
        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">When Each Tier Recruits</h2>
              <div className="mt-2 h-1 w-20 bg-gold" />

              <div className="mt-12 overflow-hidden rounded-2xl border border-border">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border bg-navy text-white">
                      <th className="px-4 py-4 text-left text-sm font-semibold">Tier</th>
                      <th className="px-4 py-4 text-left text-sm font-semibold hidden sm:table-cell">Example Firms</th>
                      <th className="px-4 py-4 text-left text-sm font-semibold">Timing</th>
                      <th className="px-4 py-4 text-left text-sm font-semibold hidden md:table-cell">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {firmTimings.map((row, i) => (
                      <tr key={row.tier} className={i !== firmTimings.length - 1 ? "border-b border-border" : ""}>
                        <td className="px-4 py-3 text-sm font-medium text-navy">{row.tier}</td>
                        <td className="px-4 py-3 text-sm text-charcoal/70 hidden sm:table-cell">{row.firms}</td>
                        <td className="px-4 py-3 text-sm text-gold font-medium">{row.timing}</td>
                        <td className="px-4 py-3 text-sm text-charcoal/50 hidden md:table-cell">{row.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* What 2026 Looks Like */}
        <section className="bg-navy py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-white sm:text-4xl text-center">What&apos;s Different in 2026</h2>
              <p className="mt-4 text-center text-white/60">
                The PE recruiting landscape continues to evolve.
              </p>

              <div className="mt-12 grid gap-6 sm:grid-cols-2">
                {what2026Looks.map((item, i) => (
                  <div key={i} className="rounded-xl bg-white/10 p-6">
                    <h3 className="font-bold text-gold">{item.title}</h3>
                    <p className="mt-2 text-sm text-white/70">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Bank to Fund Placement */}
        <section className="bg-cream py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">Bank → PE Placement</h2>
              <div className="mt-2 h-1 w-20 bg-gold" />
              <p className="mt-4 text-charcoal/70">
                Which banks place best into PE? Your bank matters for on-cycle success.
              </p>

              <div className="mt-12 space-y-3">
                {bankToFund.map((bank) => (
                  <div key={bank.bank} className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm">
                    <div className="flex-1">
                      <span className="font-semibold text-navy">{bank.bank}</span>
                      <p className="text-sm text-charcoal/50">{bank.notes}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      bank.placement === 'Very High' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-gold/20 text-gold-dark'
                    }`}>
                      {bank.placement}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-navy sm:text-4xl">Prepare for On-Cycle</h2>
            <p className="mt-4 text-lg text-charcoal/60">
              On-cycle moves fast. LBO tests happen in hours. Be ready before headhunters call.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/playbooks/pe-recruiting-playbook"
                className="group flex items-center gap-2 rounded-xl bg-navy px-8 py-4 text-base font-semibold text-white hover:bg-gold hover:text-navy transition-colors"
              >
                Get 2026 PE Playbook — $97
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/playbooks/lbo-modeling-course"
                className="rounded-xl border-2 border-navy px-8 py-4 text-base font-semibold text-navy hover:bg-navy hover:text-white transition-colors"
              >
                LBO Modeling Course
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
