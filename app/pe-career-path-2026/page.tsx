import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { ArrowRight, TrendingUp, Users, Building2, Briefcase, GraduationCap } from "lucide-react"

export const metadata: Metadata = {
  title: "PE Career Path 2026 | Associate to Partner Timeline & Exits",
  description:
    "Private equity career progression in 2026. Realistic timelines from Associate to Partner, promotion rates, what distinguishes people who make Partner, and exit opportunities at each level.",
  keywords: [
    "PE career path 2026",
    "private equity career progression",
    "PE associate to partner",
    "PE promotion timeline",
    "PE exit opportunities",
    "private equity exits",
    "PE VP salary",
    "make partner PE",
  ],
  openGraph: {
    title: "PE Career Path 2026 | Associate to Partner Timeline & Exits",
    description:
      "Private equity career progression in 2026. Timelines, promotion rates, and exit opportunities.",
    url: "https://wallstreetplaybook.org/pe-career-path-2026",
    images: [{ url: "https://wallstreetplaybook.org/og-recruiting.jpg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://wallstreetplaybook.org/pe-career-path-2026",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://wallstreetplaybook.org/og-recruiting.jpg"],
  },
}

const careerTimeline = [
  { level: "Associate → Senior Associate", duration: "2-3 years", rate: "~70%", cumulative: "3-6 years" },
  { level: "Senior Associate → VP", duration: "1-2 years", rate: "~60%", cumulative: "5-8 years" },
  { level: "VP → Principal", duration: "2-4 years", rate: "~50%", cumulative: "8-12 years" },
  { level: "Principal → Partner", duration: "3-5 years", rate: "~30-40%", cumulative: "12-17 years" },
]

const associateExits = [
  { exit: "MBA (Top Program)", comp: "N/A → Post-MBA PE/HF", prevalence: "Most common at megafunds" },
  { exit: "Lateral to Another PE Fund", comp: "$300-450K", prevalence: "Common" },
  { exit: "Growth Equity / VC", comp: "$250-400K", prevalence: "Growing path" },
  { exit: "Corporate Development", comp: "$180-250K", prevalence: "Very accessible" },
  { exit: "Portfolio Company Strategy", comp: "$150-220K", prevalence: "Common" },
  { exit: "Hedge Funds", comp: "$300-500K+", prevalence: "If strong public markets interest" },
]

const seniorExits = [
  { exit: "Portfolio Company CFO", comp: "$400K-1M+ (cash + equity)", prevalence: "Attractive path" },
  { exit: "Portfolio Company COO/CEO", comp: "$500K-2M+ (cash + equity)", prevalence: "Principal+ typically" },
  { exit: "Partner at Smaller Fund", comp: "$600K-1.5M+", prevalence: "Common" },
  { exit: "Corporate Development VP/SVP", comp: "$300-500K", prevalence: "Common" },
  { exit: "Family Office CIO", comp: "$400K-800K", prevalence: "Growing" },
  { exit: "Operating Partner at PE", comp: "$400K-700K", prevalence: "Ops-focused" },
]

const partnerFactors = [
  { factor: "Deal Origination", description: "Can you source proprietary deals independently?" },
  { factor: "Investment Judgment", description: "Pattern recognition, risk assessment, conviction under uncertainty" },
  { factor: "Portfolio Company Impact", description: "Track record of measurable operational improvements" },
  { factor: "LP Relationships", description: "Ability to contribute to fundraising and LP management" },
  { factor: "Team Building", description: "Can you recruit, develop, and retain junior talent?" },
  { factor: "Staying Power", description: "Simply outlasting peers who leave—commitment matters" },
]

const whyPeopleLeave = [
  { level: "Associate (70-80% leave at megafunds)", reasons: ["'2-and-out' culture to MBA is expected", "Limited promotion spots (pyramid)", "Burnout from hours", "Better comp at HFs for some"] },
  { level: "VP Level", reasons: ["Passed over for Principal", "Portfolio company opportunities", "Lifestyle (starting family)", "Better economics at smaller fund with more carry"] },
  { level: "Principal Level", reasons: ["Not on partner track", "Opportunity to be partner at smaller firm", "Portco CEO/COO opportunities", "Exhaustion after 15+ years"] },
]

export default function PECareerPath2026Page() {
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
              <span className="text-xs font-semibold uppercase tracking-widest text-gold">Career Intelligence</span>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              PE Career <span className="text-gradient-gold">Path 2026</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/60 max-w-2xl mx-auto">
              Realistic career progression from Associate to Partner. Promotion timelines, conversion rates, 
              what distinguishes people who make it, and exit opportunities at every level.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/playbooks/pe-recruiting-playbook"
                className="group flex items-center gap-2 rounded-xl bg-gold px-8 py-4 text-base font-semibold text-navy transition-all hover:bg-white"
              >
                Get the 2026 PE Playbook
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

        {/* Key Stats */}
        <section className="bg-gold py-6">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-3 gap-8 text-center text-navy">
              <div>
                <p className="text-2xl font-bold">15-20 yrs</p>
                <p className="text-sm">Associate to Partner</p>
              </div>
              <div>
                <p className="text-2xl font-bold">5-10%</p>
                <p className="text-sm">Associates make Partner</p>
              </div>
              <div>
                <p className="text-2xl font-bold">70-80%</p>
                <p className="text-sm">Leave at megafunds</p>
              </div>
            </div>
          </div>
        </section>

        {/* Career Timeline */}
        <section id="timeline" className="bg-cream py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">Typical Career Timeline</h2>
              <div className="mt-2 h-1 w-20 bg-gold" />
              <p className="mt-4 text-charcoal/70">
                The PE career path is a tournament. Most people exit before reaching the top—and that&apos;s not failure.
              </p>

              <div className="mt-12 space-y-4">
                {careerTimeline.map((step, i) => (
                  <div key={step.level} className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy text-gold font-bold">
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-navy">{step.level}</h3>
                      <p className="text-sm text-charcoal/60">{step.duration} • Cumulative: {step.cumulative}</p>
                    </div>
                    <div className="text-right">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        parseInt(step.rate) >= 60 ? 'bg-green-100 text-green-700' : 
                        parseInt(step.rate) >= 40 ? 'bg-amber-100 text-amber-700' : 'bg-red-100 text-red-700'
                      }`}>
                        {step.rate}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 rounded-xl bg-navy/10 border border-navy/20">
                <p className="text-sm text-navy">
                  <strong>Total time from Associate to Partner:</strong> 15-20 years<br/>
                  <strong>Only ~5-10% of associates who start ultimately make Partner</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What Makes Partner */}
        <section className="bg-navy py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-white sm:text-4xl text-center">What Distinguishes People Who Make Partner</h2>
              <p className="mt-4 text-center text-white/60">
                Technical skills get you in the door. These factors determine who reaches the top.
              </p>

              <div className="mt-12 grid gap-4 sm:grid-cols-2">
                {partnerFactors.map((item, i) => (
                  <div key={item.factor} className="rounded-xl bg-white/10 p-6">
                    <div className="flex items-start gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gold text-navy text-sm font-bold">
                        {i + 1}
                      </span>
                      <div>
                        <h3 className="font-bold text-gold">{item.factor}</h3>
                        <p className="mt-1 text-sm text-white/70">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Associate Exits */}
        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="h-6 w-6 text-gold" />
                <h2 className="text-3xl font-bold text-navy sm:text-4xl">Associate-Level Exits (2-3 Years)</h2>
              </div>
              <div className="mt-2 h-1 w-20 bg-gold" />

              <div className="mt-12 overflow-x-auto">
                <table className="w-full min-w-[500px]">
                  <thead>
                    <tr className="border-b-2 border-navy">
                      <th className="px-4 py-3 text-left text-sm font-bold text-navy">Exit Path</th>
                      <th className="px-4 py-3 text-left text-sm font-bold text-navy">Compensation</th>
                      <th className="px-4 py-3 text-left text-sm font-bold text-navy">Prevalence</th>
                    </tr>
                  </thead>
                  <tbody>
                    {associateExits.map((exit, i) => (
                      <tr key={exit.exit} className={i !== associateExits.length - 1 ? 'border-b border-border' : ''}>
                        <td className="px-4 py-3 text-sm font-medium text-navy">{exit.exit}</td>
                        <td className="px-4 py-3 text-sm text-gold">{exit.comp}</td>
                        <td className="px-4 py-3 text-sm text-charcoal/60">{exit.prevalence}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Senior Exits */}
        <section className="bg-cream py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="h-6 w-6 text-gold" />
                <h2 className="text-3xl font-bold text-navy sm:text-4xl">VP/Principal Exits (5-10 Years)</h2>
              </div>
              <div className="mt-2 h-1 w-20 bg-gold" />

              <div className="mt-12 overflow-x-auto">
                <table className="w-full min-w-[500px]">
                  <thead>
                    <tr className="border-b-2 border-navy">
                      <th className="px-4 py-3 text-left text-sm font-bold text-navy">Exit Path</th>
                      <th className="px-4 py-3 text-left text-sm font-bold text-navy">Compensation</th>
                      <th className="px-4 py-3 text-left text-sm font-bold text-navy">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {seniorExits.map((exit, i) => (
                      <tr key={exit.exit} className={i !== seniorExits.length - 1 ? 'border-b border-border' : ''}>
                        <td className="px-4 py-3 text-sm font-medium text-navy">{exit.exit}</td>
                        <td className="px-4 py-3 text-sm text-gold">{exit.comp}</td>
                        <td className="px-4 py-3 text-sm text-charcoal/60">{exit.prevalence}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-8 p-4 rounded-xl bg-gold/10 border border-gold/30">
                <p className="text-sm text-charcoal/70">
                  <strong className="text-gold">Pro tip:</strong> The best portfolio company opportunities often go to people 
                  the PE firm has worked with and trusts. Build relationships with your firm&apos;s portfolio operations team.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why People Leave */}
        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">Why People Leave at Each Level</h2>
              <div className="mt-2 h-1 w-20 bg-gold" />

              <div className="mt-12 space-y-6">
                {whyPeopleLeave.map((level) => (
                  <div key={level.level} className="rounded-xl border border-border bg-off-white/50 p-6">
                    <h3 className="font-bold text-navy">{level.level}</h3>
                    <ul className="mt-3 space-y-2">
                      {level.reasons.map((reason, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
                          <span className="text-sm text-charcoal/70">{reason}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Related Resources */}
        <section className="bg-cream py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-2xl font-bold text-navy mb-8">Related 2026 PE Resources</h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <Link href="/pe-interview-prep-2026" className="group rounded-xl border border-border bg-white p-4 hover:border-gold transition-colors">
                  <p className="font-semibold text-navy group-hover:text-gold transition-colors">PE Interview Prep 2026</p>
                  <p className="mt-1 text-sm text-charcoal/60">Technical & behavioral questions</p>
                </Link>
                <Link href="/pe-headhunters-2026" className="group rounded-xl border border-border bg-white p-4 hover:border-gold transition-colors">
                  <p className="font-semibold text-navy group-hover:text-gold transition-colors">PE Headhunters 2026</p>
                  <p className="mt-1 text-sm text-charcoal/60">The 7 firms that control megafund access</p>
                </Link>
                <Link href="/pe-compensation-2026" className="group rounded-xl border border-border bg-white p-4 hover:border-gold transition-colors">
                  <p className="font-semibold text-navy group-hover:text-gold transition-colors">PE Compensation 2026</p>
                  <p className="mt-1 text-sm text-charcoal/60">Associate to Partner salary data</p>
                </Link>
                <Link href="/non-target-to-pe" className="group rounded-xl border border-border bg-white p-4 hover:border-gold transition-colors">
                  <p className="font-semibold text-navy group-hover:text-gold transition-colors">Non-Target to PE</p>
                  <p className="mt-1 text-sm text-charcoal/60">Breaking in from non-traditional paths</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-navy py-20 lg:py-28">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Plan Your PE Career</h2>
            <p className="mt-4 text-lg text-white/60">
              The 2026 PE Playbook includes complete career progression analysis, compensation data at every level, 
              and strategic guidance on firm selection based on your goals.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/playbooks/pe-recruiting-playbook"
                className="group flex items-center gap-2 rounded-xl bg-gold px-8 py-4 text-base font-semibold text-navy hover:bg-white transition-colors"
              >
                Get the 2026 PE Playbook — $67
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/pe-compensation-2026"
                className="rounded-xl border-2 border-white/20 px-8 py-4 text-base font-semibold text-white hover:border-gold hover:text-gold transition-colors"
              >
                View Compensation Data
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
