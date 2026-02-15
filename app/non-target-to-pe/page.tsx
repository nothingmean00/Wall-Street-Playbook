import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { ArrowRight, Target, Building2, Briefcase, Shield, GraduationCap, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Non-Target to PE | Breaking Into Private Equity From Non-Traditional Backgrounds",
  description:
    "How to break into private equity from consulting (MBB), Big 4 TAS, corporate development, military, and other non-IB backgrounds. Realistic paths, requirements, and what actually works in 2026.",
  keywords: [
    "non-target to PE",
    "consulting to private equity",
    "MBB to PE",
    "Big 4 to private equity",
    "corporate development to PE",
    "military to private equity",
    "break into PE without banking",
    "non-traditional PE paths",
  ],
  openGraph: {
    title: "Non-Target to PE | Breaking Into Private Equity From Non-Traditional Backgrounds",
    description:
      "How to break into PE from consulting, Big 4, corp dev, and military backgrounds in 2026.",
    url: "https://wallstreetplaybook.org/non-target-to-pe",
    images: [{ url: "https://wallstreetplaybook.org/og-recruiting.jpg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://wallstreetplaybook.org/non-target-to-pe",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://wallstreetplaybook.org/og-recruiting.jpg"],
  },
}

const realityCheck = [
  { tier: "Megafunds", fromIB: "90%+", nonTraditional: "Rare exceptions for MBB or deep sector expertise" },
  { tier: "Upper-Middle-Market", fromIB: "80-85%", nonTraditional: "Slight flexibility for exceptional consultants" },
  { tier: "Middle-Market", fromIB: "70-75%", nonTraditional: "Genuine openings for Big 4 TAS, consulting, corp dev" },
  { tier: "Lower-Middle-Market", fromIB: "50-60%", nonTraditional: "Most accessible for non-traditional backgrounds" },
]

const pathways = [
  {
    background: "MBB Consulting",
    icon: Briefcase,
    whereItWorks: ["Bain Capital (shared interview format)", "CD&R (operational focus)", "General Atlantic (strategic orientation)", "Any ops-focused PE"],
    challenges: ["Only ~20% of MBB actively pursue PE vs. 100% of IB", "Must demonstrate modeling proficiency", "Potential initial comp cut"],
    requirements: ["Build 2-3 LBOs independently", "M&A/due diligence project exposure", "Clear narrative on why PE over partnership track"],
  },
  {
    background: "Big 4 TAS/Valuations",
    icon: Building2,
    whereItWorks: ["LMM funds", "Operationally-focused PE", "After intermediate step (AlixPartners/FTI → PE)"],
    challenges: ["Limited direct pathways to institutional PE", "Typically requires intermediate step", "Modeling depth may lag IB candidates"],
    requirements: ["QoE reports, working capital analysis", "Full 3-statement and LBO modeling (beyond valuations)", "CPA/CFA can help differentiate"],
  },
  {
    background: "Corporate Development",
    icon: Target,
    whereItWorks: ["Sector-focused PE funds in your industry", "Operationally-focused MM firms", "Portfolio company CFO/strategy roles (indirect)"],
    challenges: ["Financial modeling depth may lag IB", "Deal volume typically lower", "May be viewed as 'corporate' not 'finance'"],
    requirements: ["Direct M&A buy-side experience", "Integration and operational knowledge", "Industry expertise in specific verticals"],
  },
  {
    background: "Military Veterans",
    icon: Shield,
    whereItWorks: ["Blackstone MINT Program", "Goldman Sachs Veteran Integration Program", "51 Vets network (Riverside, Kirkland)", "Cold Bore Capital (veteran-led PE)"],
    challenges: ["Need to complete financial modeling training during service", "Must network 12-18 months before transition"],
    requirements: ["Financial modeling training (WSP, BIWS)", "Target veteran-friendly firms explicitly", "Leverage leadership narrative effectively"],
  },
]

const recommendedPaths = [
  { from: "Big 4 TAS", path: "Big 4 TAS → AlixPartners/FTI → PE", timeline: "2-3 years" },
  { from: "Big 4 TAS", path: "Big 4 TAS → MM IB (lateral) → PE", timeline: "3-4 years" },
  { from: "Big 4 TAS", path: "Big 4 TAS → MBA → PE", timeline: "4-5 years" },
  { from: "MBB", path: "MBB → Ops-focused PE directly", timeline: "2-3 years" },
  { from: "MBB", path: "MBB → MBA → PE", timeline: "3-4 years" },
  { from: "Corp Dev", path: "Corp Dev → Sector-focused PE", timeline: "Direct if strong M&A" },
]

const credentialsValue = [
  { credential: "CFA", megafund: "Low", mmLmm: "Medium", notes: "More relevant for public markets" },
  { credential: "CPA", megafund: "Low", mmLmm: "Medium-High", notes: "Helps Big 4 candidates" },
  { credential: "MBA (M7)", megafund: "High", mmLmm: "High", notes: "Standard post-associate path" },
  { credential: "Industry Expertise", megafund: "Medium-High", mmLmm: "High", notes: "Sector funds highly value this" },
  { credential: "FMVA/WSP/BIWS", megafund: "Low", mmLmm: "Low", notes: "Training value, not credential value" },
]

const whatMovesNeedle = [
  "Deep sector expertise in a PE-relevant industry",
  "Demonstrated deal experience (M&A, diligence)",
  "Financial modeling proficiency (prove it with output)",
  "Network and referrals to target funds",
  "Clear, compelling narrative for the transition",
]

export default function NonTargetToPEPage() {
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
              <Target className="w-4 h-4 text-gold" />
              <span className="text-xs font-semibold uppercase tracking-widest text-gold">Alternative Paths</span>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Non-Target <span className="text-gradient-gold">to PE</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/60 max-w-2xl mx-auto">
              Breaking into private equity from consulting, Big 4, corporate development, or military backgrounds. 
              Realistic paths, requirements, and what actually works in 2026.
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
                href="#pathways"
                className="rounded-xl border-2 border-white/20 px-8 py-4 text-base font-semibold text-white transition-all hover:border-gold hover:text-gold"
              >
                View Pathways
              </Link>
            </div>
          </div>
        </section>

        {/* Reality Check */}
        <section className="bg-cream py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">Reality Check: The Numbers</h2>
              <div className="mt-2 h-1 w-20 bg-gold" />
              <p className="mt-4 text-charcoal/70">
                Let&apos;s be direct about non-traditional paths to PE. The opportunity exists, but it&apos;s narrower than often portrayed.
              </p>

              <div className="mt-12 overflow-x-auto">
                <table className="w-full min-w-[500px]">
                  <thead>
                    <tr className="border-b-2 border-navy">
                      <th className="px-4 py-3 text-left text-sm font-bold text-navy">Fund Tier</th>
                      <th className="px-4 py-3 text-left text-sm font-bold text-navy">From IB</th>
                      <th className="px-4 py-3 text-left text-sm font-bold text-navy">Non-Traditional Path</th>
                    </tr>
                  </thead>
                  <tbody>
                    {realityCheck.map((row, i) => (
                      <tr key={row.tier} className={i !== realityCheck.length - 1 ? 'border-b border-border' : ''}>
                        <td className="px-4 py-3 text-sm font-medium text-navy">{row.tier}</td>
                        <td className="px-4 py-3 text-sm text-gold font-medium">{row.fromIB}</td>
                        <td className="px-4 py-3 text-sm text-charcoal/60">{row.nonTraditional}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-8 p-4 rounded-xl bg-navy/10 border border-navy/20">
                <p className="text-sm text-navy">
                  <strong>Key insight:</strong> Middle-market and lower-middle-market PE offer the most realistic paths for 
                  non-traditional candidates. These funds value operational expertise and sector knowledge.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pathways */}
        <section id="pathways" className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">Non-Traditional Pathways to PE</h2>
              <div className="mt-2 h-1 w-20 bg-gold" />

              <div className="mt-12 space-y-8">
                {pathways.map((path) => (
                  <div key={path.background} className="rounded-2xl border border-border bg-off-white/50 p-8">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-gold">
                        <path.icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-navy">{path.background}</h3>
                        
                        <div className="mt-4 grid gap-4 lg:grid-cols-3">
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-wider text-gold mb-2">Where It Works</p>
                            <ul className="space-y-1">
                              {path.whereItWorks.map((item, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                                  <span className="text-sm text-charcoal/70">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-wider text-red-500 mb-2">Challenges</p>
                            <ul className="space-y-1">
                              {path.challenges.map((item, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-400" />
                                  <span className="text-sm text-charcoal/70">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-wider text-navy mb-2">Requirements</p>
                            <ul className="space-y-1">
                              {path.requirements.map((item, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
                                  <span className="text-sm text-charcoal/70">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Recommended Paths */}
        <section className="bg-navy py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-white sm:text-4xl text-center">Recommended Path Sequences</h2>
              <p className="mt-4 text-center text-white/60">
                The most successful non-traditional candidates often take a stepping-stone approach.
              </p>

              <div className="mt-12 space-y-3">
                {recommendedPaths.map((path, i) => (
                  <div key={i} className="flex items-center gap-4 rounded-xl bg-white/10 p-4">
                    <div className="px-3 py-1 rounded bg-gold/20 text-gold text-xs font-semibold">
                      {path.from}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-white font-medium">{path.path}</p>
                    </div>
                    <div className="text-sm text-white/50">
                      {path.timeline}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Credentials */}
        <section className="bg-cream py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="h-6 w-6 text-gold" />
                <h2 className="text-3xl font-bold text-navy sm:text-4xl">Credentials Analysis</h2>
              </div>
              <div className="mt-2 h-1 w-20 bg-gold" />

              <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-white">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border bg-off-white/50">
                      <th className="px-4 py-4 text-left text-sm font-bold text-navy">Credential</th>
                      <th className="px-4 py-4 text-left text-sm font-bold text-navy">Megafund Value</th>
                      <th className="px-4 py-4 text-left text-sm font-bold text-navy">MM/LMM Value</th>
                      <th className="px-4 py-4 text-left text-sm font-bold text-navy hidden sm:table-cell">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {credentialsValue.map((cred, i) => (
                      <tr key={cred.credential} className={i !== credentialsValue.length - 1 ? 'border-b border-border' : ''}>
                        <td className="px-4 py-4 text-sm font-medium text-navy">{cred.credential}</td>
                        <td className="px-4 py-4">
                          <span className={`px-2 py-1 rounded text-xs font-semibold ${
                            cred.megafund === 'High' ? 'bg-green-100 text-green-700' :
                            cred.megafund === 'Medium-High' ? 'bg-amber-100 text-amber-700' :
                            cred.megafund === 'Medium' ? 'bg-amber-100 text-amber-700' : 'bg-gray-100 text-gray-600'
                          }`}>
                            {cred.megafund}
                          </span>
                        </td>
                        <td className="px-4 py-4">
                          <span className={`px-2 py-1 rounded text-xs font-semibold ${
                            cred.mmLmm === 'High' ? 'bg-green-100 text-green-700' :
                            cred.mmLmm === 'Medium-High' ? 'bg-amber-100 text-amber-700' :
                            cred.mmLmm === 'Medium' ? 'bg-amber-100 text-amber-700' : 'bg-gray-100 text-gray-600'
                          }`}>
                            {cred.mmLmm}
                          </span>
                        </td>
                        <td className="px-4 py-4 text-sm text-charcoal/50 hidden sm:table-cell">{cred.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* What Moves the Needle */}
        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">What Actually Moves the Needle</h2>
              <div className="mt-2 h-1 w-20 bg-gold" />
              <p className="mt-4 text-charcoal/70">
                Credentials are secondary signals. These factors determine whether non-traditional candidates break in.
              </p>

              <div className="mt-12 space-y-3">
                {whatMovesNeedle.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 rounded-xl bg-gold/10 border border-gold/30 p-4">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold text-navy text-sm font-bold flex-shrink-0">
                      {i + 1}
                    </span>
                    <p className="text-charcoal/80 pt-1">{item}</p>
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
                <Link href="/pe-career-path-2026" className="group rounded-xl border border-border bg-white p-4 hover:border-gold transition-colors">
                  <p className="font-semibold text-navy group-hover:text-gold transition-colors">PE Career Path 2026</p>
                  <p className="mt-1 text-sm text-charcoal/60">Timeline, promotions, and exits</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-navy py-20 lg:py-28">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Plan Your Path to PE</h2>
            <p className="mt-4 text-lg text-white/60">
              The 2026 PE Playbook includes detailed guidance on non-traditional paths, 
              what each fund tier values, and how to position yourself for success.
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
                href="/pe-interview-prep-2026"
                className="rounded-xl border-2 border-white/20 px-8 py-4 text-base font-semibold text-white hover:border-gold hover:text-gold transition-colors"
              >
                PE Interview Prep
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
