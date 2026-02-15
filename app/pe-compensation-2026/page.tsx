import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { ArrowRight, DollarSign, TrendingUp, Building2, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "PE Compensation 2026 | Associate to Partner Salary Data",
  description:
    "Real private equity compensation data for 2025-2026. Base, bonus, carry, and co-invest by level (Associate to Partner) and fund type (megafund to lower-middle-market).",
  keywords: [
    "PE compensation 2026",
    "private equity salary 2026",
    "PE associate salary",
    "PE associate bonus",
    "private equity carried interest",
    "KKR salary",
    "Blackstone compensation",
    "Apollo pay",
    "PE VP salary",
  ],
  openGraph: {
    title: "PE Compensation 2026 | Associate to Partner Salary Data",
    description:
      "Real private equity compensation data for 2025-2026. Base, bonus, carry by level and fund type.",
    url: "https://wallstreetplaybook.org/pe-compensation-2026",
    images: [{ url: "https://wallstreetplaybook.org/og-recruiting.jpg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://wallstreetplaybook.org/pe-compensation-2026",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://wallstreetplaybook.org/og-recruiting.jpg"],
  },
}

const compensationData = [
  { level: "Associate 1", megafund: "$325-400K", upperMM: "$275-350K", middleMarket: "$225-300K", lowerMM: "$175-250K" },
  { level: "Associate 2", megafund: "$375-450K", upperMM: "$325-400K", middleMarket: "$275-350K", lowerMM: "$225-300K" },
  { level: "Senior Associate", megafund: "$425-525K", upperMM: "$375-475K", middleMarket: "$325-425K", lowerMM: "$275-375K" },
  { level: "Vice President", megafund: "$500-700K", upperMM: "$450-600K", middleMarket: "$400-550K", lowerMM: "$350-475K" },
  { level: "Principal", megafund: "$700K-1.2M", upperMM: "$600K-1M", middleMarket: "$500-850K", lowerMM: "$400-700K" },
  { level: "Partner", megafund: "$1.5M-5M+", upperMM: "$1M-3M+", middleMarket: "$800K-2M+", lowerMM: "$600K-1.5M+" },
]

const carryData = [
  { level: "Associate", points: "0 (rare exceptions)", value: "$0" },
  { level: "Senior Associate", points: "0-0.1%", value: "$0-$200K per fund" },
  { level: "Vice President", points: "0.1-0.5%", value: "$200K-$1M per fund" },
  { level: "Principal", points: "0.5-1.5%", value: "$1M-$3M per fund" },
  { level: "Partner", points: "2-10%+", value: "$4M-$20M+ per fund" },
]

const topPayingFirms = [
  { firm: "Apollo Global Management", comp: "$400-450K+", note: "Industry-leading. Intense culture but top-of-market pay." },
  { firm: "KKR", comp: "$350-400K+", note: "Strong ops focus through Capstone consulting team." },
  { firm: "Hellman & Friedman", comp: "$350-400K+", note: "Lean teams, concentrated portfolios, SF-based." },
  { firm: "Blackstone", comp: "$350-400K+", note: "Largest brand, most institutionalized experience." },
  { firm: "TPG", comp: "$350-400K+", note: "West Coast roots, strong tech/healthcare exposure." },
]

const geoData = [
  { market: "NYC/SF", comp: "Baseline (+20-25%)", tax: "High state tax", notes: "Highest competition, deepest deal flow" },
  { market: "Boston", comp: "90-95% of NYC", tax: "Medium", notes: "Strong healthcare/services focus" },
  { market: "Chicago", comp: "~Baseline", tax: "Medium", notes: "Industrials strength" },
  { market: "Dallas/Houston", comp: "85-95% of NYC", tax: "No state tax", notes: "Energy/industrials, great arbitrage" },
  { market: "Miami", comp: "~Baseline", tax: "No state tax", notes: "Growing LatAm focus, lifestyle" },
]

export default function PECompensation2026Page() {
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
              <DollarSign className="w-4 h-4 text-gold" />
              <span className="text-xs font-semibold uppercase tracking-widest text-gold">2025-2026 Data</span>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              PE <span className="text-gradient-gold">Compensation</span> 2026
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/60 max-w-2xl mx-auto">
              Real compensation data for private equity in 2025-2026. Base, bonus, co-invest, and carried interest 
              by level and fund type—from Associate to Partner.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/playbooks/pe-recruiting-playbook"
                className="group flex items-center gap-2 rounded-xl bg-gold px-8 py-4 text-base font-semibold text-navy transition-all hover:bg-white"
              >
                Get Full Compensation Analysis
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="#data"
                className="rounded-xl border-2 border-white/20 px-8 py-4 text-base font-semibold text-white transition-all hover:border-gold hover:text-gold"
              >
                View Data
              </Link>
            </div>
          </div>
        </section>

        {/* Key Stats */}
        <section className="bg-gold py-6">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-3 gap-8 text-center text-navy">
              <div>
                <p className="text-2xl font-bold">$400K+</p>
                <p className="text-sm">Top Associate comp</p>
              </div>
              <div>
                <p className="text-2xl font-bold">$10M+</p>
                <p className="text-sm">Partner carry potential</p>
              </div>
              <div>
                <p className="text-2xl font-bold">5-10%</p>
                <p className="text-sm">Make Partner</p>
              </div>
            </div>
          </div>
        </section>

        {/* Compensation Table */}
        <section id="data" className="bg-cream py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-5xl">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">All-In Compensation by Level (2025-2026)</h2>
              <div className="mt-2 h-1 w-20 bg-gold" />
              <p className="mt-4 text-charcoal/70">
                Total compensation including base, bonus, and expected co-invest returns.
              </p>

              <div className="mt-12 overflow-x-auto">
                <table className="w-full min-w-[640px]">
                  <thead>
                    <tr className="border-b-2 border-navy">
                      <th className="px-4 py-4 text-left text-sm font-bold text-navy">Level</th>
                      <th className="px-4 py-4 text-left text-sm font-bold text-navy">Megafund</th>
                      <th className="px-4 py-4 text-left text-sm font-bold text-navy">Upper-MM</th>
                      <th className="px-4 py-4 text-left text-sm font-bold text-navy">Middle-Market</th>
                      <th className="px-4 py-4 text-left text-sm font-bold text-navy">Lower-MM</th>
                    </tr>
                  </thead>
                  <tbody>
                    {compensationData.map((row, i) => (
                      <tr key={row.level} className={`${i !== compensationData.length - 1 ? 'border-b border-border' : ''} ${i === 0 ? 'bg-gold/10' : ''}`}>
                        <td className="px-4 py-4 text-sm font-semibold text-navy">{row.level}</td>
                        <td className="px-4 py-4 text-sm text-gold font-medium">{row.megafund}</td>
                        <td className="px-4 py-4 text-sm text-charcoal/70">{row.upperMM}</td>
                        <td className="px-4 py-4 text-sm text-charcoal/70">{row.middleMarket}</td>
                        <td className="px-4 py-4 text-sm text-charcoal/70">{row.lowerMM}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="mt-6 text-sm text-charcoal/50 italic">
                Note: Partner compensation can reach $10M+ at top-performing megafunds due to carried interest realizations.
              </p>
            </div>
          </div>
        </section>

        {/* Carried Interest */}
        <section className="bg-navy py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-white sm:text-4xl text-center">When Carried Interest Matters</h2>
              <p className="mt-4 text-center text-white/60">
                The real wealth in PE comes from carry—not salary. Here&apos;s when it starts to matter.
              </p>

              <div className="mt-12 overflow-hidden rounded-2xl bg-white/10">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="px-6 py-4 text-left text-sm font-bold text-gold">Level</th>
                      <th className="px-6 py-4 text-left text-sm font-bold text-gold">Typical Carry Points</th>
                      <th className="px-6 py-4 text-left text-sm font-bold text-gold">Example Value*</th>
                    </tr>
                  </thead>
                  <tbody>
                    {carryData.map((row, i) => (
                      <tr key={row.level} className={i !== carryData.length - 1 ? 'border-b border-white/10' : ''}>
                        <td className="px-6 py-4 text-sm text-white font-medium">{row.level}</td>
                        <td className="px-6 py-4 text-sm text-white/70">{row.points}</td>
                        <td className="px-6 py-4 text-sm text-gold">{row.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="mt-6 text-sm text-white/40 text-center">
                *Assuming $2B fund with 2.0x gross MOIC over fund life
              </p>

              <div className="mt-12 rounded-2xl bg-white/10 p-8">
                <h3 className="text-xl font-bold text-white mb-4">Carry Economics Example</h3>
                <div className="space-y-2 text-sm text-white/80 font-mono">
                  <p><span className="text-gold">Fund:</span> $2B</p>
                  <p><span className="text-gold">Performance:</span> 2.5x gross MOIC = $5B exit value</p>
                  <p><span className="text-gold">Gross Profit:</span> $3B</p>
                  <p><span className="text-gold">Carry Pool (20%):</span> $600M</p>
                  <div className="border-t border-white/20 pt-2 mt-4">
                    <p>Partner with 5 points: <span className="text-gold font-bold">$30M</span> over fund life</p>
                    <p>Principal with 1 point: <span className="text-gold font-bold">$6M</span> over fund life</p>
                    <p>VP with 0.25 points: <span className="text-gold font-bold">$1.5M</span> over fund life</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Top Paying Firms */}
        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">Top-Paying Megafunds (2026)</h2>
              <div className="mt-2 h-1 w-20 bg-gold" />
              <p className="mt-4 text-charcoal/70">
                These firms consistently lead on Associate compensation.
              </p>

              <div className="mt-12 space-y-4">
                {topPayingFirms.map((firm, i) => (
                  <div key={firm.firm} className={`flex items-center gap-4 rounded-xl p-4 ${i === 0 ? 'bg-gold/10 border-2 border-gold/30' : 'bg-off-white/50'}`}>
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy text-gold font-bold">
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <span className="font-bold text-navy">{firm.firm}</span>
                        <span className={`px-2 py-0.5 rounded text-xs font-semibold ${i === 0 ? 'bg-gold text-navy' : 'bg-navy/10 text-navy'}`}>
                          {firm.comp}
                        </span>
                      </div>
                      <p className="text-sm text-charcoal/60">{firm.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Geographic Arbitrage */}
        <section className="bg-cream py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="h-6 w-6 text-gold" />
                <h2 className="text-3xl font-bold text-navy sm:text-4xl">Geographic Compensation Arbitrage</h2>
              </div>
              <div className="mt-2 h-1 w-20 bg-gold" />
              <p className="mt-4 text-charcoal/70">
                A $350K package in Miami has higher purchasing power than $400K in NYC. No state income tax matters.
              </p>

              <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-white">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border bg-off-white/50">
                      <th className="px-4 py-4 text-left text-sm font-bold text-navy">Market</th>
                      <th className="px-4 py-4 text-left text-sm font-bold text-navy">Comp vs. NYC</th>
                      <th className="px-4 py-4 text-left text-sm font-bold text-navy">State Tax</th>
                      <th className="px-4 py-4 text-left text-sm font-bold text-navy hidden sm:table-cell">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {geoData.map((row, i) => (
                      <tr key={row.market} className={i !== geoData.length - 1 ? 'border-b border-border' : ''}>
                        <td className="px-4 py-4 text-sm font-medium text-navy">{row.market}</td>
                        <td className="px-4 py-4 text-sm text-charcoal/70">{row.comp}</td>
                        <td className="px-4 py-4">
                          <span className={`px-2 py-1 rounded text-xs font-semibold ${
                            row.tax === 'No state tax' ? 'bg-green-100 text-green-700' : 
                            row.tax === 'High state tax' ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700'
                          }`}>
                            {row.tax}
                          </span>
                        </td>
                        <td className="px-4 py-4 text-sm text-charcoal/50 hidden sm:table-cell">{row.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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
                <Link href="/pe-headhunters-2026" className="group rounded-xl border border-border bg-off-white/50 p-4 hover:border-gold transition-colors">
                  <p className="font-semibold text-navy group-hover:text-gold transition-colors">PE Headhunters 2026</p>
                  <p className="mt-1 text-sm text-charcoal/60">The 7 firms that control megafund access</p>
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
        <section className="bg-navy py-20 lg:py-28">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Get Complete Compensation Intelligence</h2>
            <p className="mt-4 text-lg text-white/60">
              The 2026 PE Playbook includes full compensation analysis, career progression data, 
              promotion rates, and what actually distinguishes people who make Partner.
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
                href="/blog/pe-compensation-2026"
                className="rounded-xl border-2 border-white/20 px-8 py-4 text-base font-semibold text-white hover:border-gold hover:text-gold transition-colors"
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
