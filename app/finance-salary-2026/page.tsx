import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { ArrowRight, DollarSign, TrendingUp, Building2, BarChart3 } from "lucide-react"

export const metadata: Metadata = {
  title: "Finance Salary Guide 2026 | Investment Banking, PE & HF Compensation",
  description:
    "2026 finance salary guide. Investment banking analyst pay, PE associate compensation, hedge fund salaries, and bonus expectations for the 2026 recruiting cycle.",
  keywords: [
    "investment banking salary 2026",
    "finance salary 2026",
    "IB analyst salary 2026",
    "PE associate salary 2026",
    "hedge fund salary 2026",
    "Goldman Sachs salary 2026",
    "investment banking bonus 2026",
    "wall street compensation 2026",
  ],
  openGraph: {
    title: "Finance Salary Guide 2026 | IB, PE & HF Compensation",
    description:
      "2026 finance salary guide. Investment banking, PE, and hedge fund compensation breakdown.",
    url: "https://wallstreetplaybook.org/finance-salary-2026",
  },
  alternates: {
    canonical: "https://wallstreetplaybook.org/finance-salary-2026",
  },
}

const ibSalaries2026 = [
  { level: "Analyst 1", base: "$110,000", bonus: "$90,000-$140,000", total: "$200,000-$250,000", hours: "80-100" },
  { level: "Analyst 2", base: "$125,000", bonus: "$100,000-$170,000", total: "$225,000-$295,000", hours: "75-95" },
  { level: "Analyst 3", base: "$140,000", bonus: "$120,000-$200,000", total: "$260,000-$340,000", hours: "70-90" },
  { level: "Associate 1", base: "$175,000", bonus: "$100,000-$200,000", total: "$275,000-$375,000", hours: "70-85" },
  { level: "Associate 2", base: "$200,000", bonus: "$150,000-$275,000", total: "$350,000-$475,000", hours: "65-80" },
  { level: "Associate 3", base: "$225,000", bonus: "$175,000-$325,000", total: "$400,000-$550,000", hours: "60-75" },
  { level: "VP", base: "$275,000", bonus: "$200,000-$500,000", total: "$475,000-$775,000", hours: "55-70" },
]

const peSalaries2026 = [
  { level: "Associate 1", base: "$175,000", bonus: "$125,000-$225,000", carry: "Yes", total: "$300,000-$400,000+" },
  { level: "Associate 2", base: "$200,000", bonus: "$175,000-$300,000", carry: "Yes", total: "$375,000-$500,000+" },
  { level: "Senior Associate", base: "$250,000", bonus: "$200,000-$400,000", carry: "Yes", total: "$450,000-$650,000+" },
  { level: "VP", base: "$325,000", bonus: "$250,000-$600,000", carry: "Yes", total: "$575,000-$925,000+" },
  { level: "Principal", base: "$400,000", bonus: "$400,000-$1,000,000", carry: "Significant", total: "$800,000-$1,400,000+" },
]

const hfSalaries2026 = [
  { level: "Analyst", base: "$150,000-$200,000", bonus: "50-150% of base", pnl: "Yes for some", total: "$225,000-$500,000+" },
  { level: "Senior Analyst", base: "$200,000-$300,000", bonus: "100-300% of base", pnl: "Yes", total: "$400,000-$1,200,000+" },
  { level: "PM", base: "$300,000-$500,000", bonus: "Based on P&L", pnl: "Significant", total: "$500,000-$5,000,000+" },
]

const bankComparison2026 = [
  { bank: "Goldman Sachs", a1Total: "$225K-$260K", stubb: "Top quartile bonuses", notes: "Historically highest" },
  { bank: "Morgan Stanley", a1Total: "$220K-$255K", stubb: "Competitive with GS", notes: "Strong deal flow" },
  { bank: "JP Morgan", a1Total: "$215K-$250K", stubb: "Slightly lower", notes: "Largest class" },
  { bank: "Evercore", a1Total: "$230K-$270K", stubb: "Top of street", notes: "EB premium" },
  { bank: "Centerview", a1Total: "$235K-$275K", stubb: "Best in class", notes: "Highest per capita" },
  { bank: "Lazard", a1Total: "$220K-$260K", stubb: "Competitive", notes: "Rx groups higher" },
  { bank: "PJT Partners", a1Total: "$225K-$265K", stubb: "Very strong", notes: "Rx & M&A tracks" },
  { bank: "Moelis", a1Total: "$210K-$250K", stubb: "Solid", notes: "Restructuring premium" },
]

const changes2026 = [
  { change: "Base Increases", desc: "Analyst 1 base now $110K at most BBs (up from $100K). Elite boutiques at $115K+." },
  { change: "Bonus Normalization", desc: "After 2021-2022 highs, bonuses settling into new normal. Still above pre-COVID." },
  { change: "Stub Bonuses", desc: "Starting bonuses (stubs) for summer analysts converting to FT remain competitive." },
  { change: "PE Premium", desc: "PE compensation continues to outpace banking at associate level, especially with carry." },
  { change: "HF Variance", desc: "Hedge fund comp most variable. Top performers make multiples of banking peers." },
]

export default function FinanceSalary2026Page() {
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
              <span className="text-xs font-semibold uppercase tracking-widest text-gold">2026 Compensation</span>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Finance Salary <span className="text-gradient-gold">Guide 2026</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/60 max-w-2xl mx-auto">
              Investment banking, private equity, and hedge fund compensation for 2026. 
              Base salaries, bonuses, and total comp by level.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/finance-career-guide"
                className="group flex items-center gap-2 rounded-xl bg-gold px-8 py-4 text-base font-semibold text-navy transition-all hover:bg-white"
              >
                Career Guide
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="#ib-salaries"
                className="rounded-xl border-2 border-white/20 px-8 py-4 text-base font-semibold text-white transition-all hover:border-gold hover:text-gold"
              >
                View Salaries
              </Link>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="bg-gold py-6">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-navy">$110K</p>
                <p className="text-xs text-navy/70">IB Analyst 1 Base</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-navy">$250K+</p>
                <p className="text-xs text-navy/70">IB Analyst 1 Total</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-navy">$400K+</p>
                <p className="text-xs text-navy/70">PE Associate 1 Total</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-navy">$500K+</p>
                <p className="text-xs text-navy/70">HF Analyst Total</p>
              </div>
            </div>
          </div>
        </section>

        {/* IB Salaries */}
        <section id="ib-salaries" className="bg-cream py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <div className="flex items-center gap-3 mb-2">
                <Building2 className="h-6 w-6 text-gold" />
                <h2 className="text-3xl font-bold text-navy sm:text-4xl">Investment Banking 2026</h2>
              </div>
              <div className="mt-2 h-1 w-20 bg-gold" />
              <p className="mt-4 text-charcoal/70">
                Bulge bracket and elite boutique compensation. All figures in USD.
              </p>

              <div className="mt-12 overflow-x-auto rounded-2xl border border-border">
                <table className="w-full min-w-[600px]">
                  <thead>
                    <tr className="border-b border-border bg-navy text-white">
                      <th className="px-4 py-4 text-left text-sm font-semibold">Level</th>
                      <th className="px-4 py-4 text-left text-sm font-semibold">Base</th>
                      <th className="px-4 py-4 text-left text-sm font-semibold">Bonus</th>
                      <th className="px-4 py-4 text-left text-sm font-semibold">Total Comp</th>
                      <th className="px-4 py-4 text-left text-sm font-semibold">Hours/Wk</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {ibSalaries2026.map((row, i) => (
                      <tr key={row.level} className={i !== ibSalaries2026.length - 1 ? "border-b border-border" : ""}>
                        <td className="px-4 py-3 text-sm font-medium text-navy">{row.level}</td>
                        <td className="px-4 py-3 text-sm text-charcoal/70">{row.base}</td>
                        <td className="px-4 py-3 text-sm text-charcoal/70">{row.bonus}</td>
                        <td className="px-4 py-3 text-sm font-semibold text-gold">{row.total}</td>
                        <td className="px-4 py-3 text-sm text-charcoal/50">{row.hours}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* PE Salaries */}
        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="h-6 w-6 text-gold" />
                <h2 className="text-3xl font-bold text-navy sm:text-4xl">Private Equity 2026</h2>
              </div>
              <div className="mt-2 h-1 w-20 bg-gold" />
              <p className="mt-4 text-charcoal/70">
                Megafund and upper middle market PE compensation. Carry adds significant long-term value.
              </p>

              <div className="mt-12 overflow-x-auto rounded-2xl border border-border">
                <table className="w-full min-w-[600px]">
                  <thead>
                    <tr className="border-b border-border bg-navy text-white">
                      <th className="px-4 py-4 text-left text-sm font-semibold">Level</th>
                      <th className="px-4 py-4 text-left text-sm font-semibold">Base</th>
                      <th className="px-4 py-4 text-left text-sm font-semibold">Bonus</th>
                      <th className="px-4 py-4 text-left text-sm font-semibold">Carry</th>
                      <th className="px-4 py-4 text-left text-sm font-semibold">Total (excl. carry)</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {peSalaries2026.map((row, i) => (
                      <tr key={row.level} className={i !== peSalaries2026.length - 1 ? "border-b border-border" : ""}>
                        <td className="px-4 py-3 text-sm font-medium text-navy">{row.level}</td>
                        <td className="px-4 py-3 text-sm text-charcoal/70">{row.base}</td>
                        <td className="px-4 py-3 text-sm text-charcoal/70">{row.bonus}</td>
                        <td className="px-4 py-3 text-sm text-charcoal/70">{row.carry}</td>
                        <td className="px-4 py-3 text-sm font-semibold text-gold">{row.total}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-gold/10 border border-gold/30">
                <p className="text-sm text-charcoal/70">
                  <span className="font-semibold text-navy">Note on Carry:</span> Carried interest can add 
                  significant value over time (often $1M+ over a fund&apos;s life at senior levels), but it&apos;s 
                  illiquid and depends on fund performance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* HF Salaries */}
        <section className="bg-navy py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <div className="flex items-center gap-3 mb-2">
                <BarChart3 className="h-6 w-6 text-gold" />
                <h2 className="text-3xl font-bold text-white sm:text-4xl">Hedge Funds 2026</h2>
              </div>
              <div className="mt-2 h-1 w-20 bg-gold" />
              <p className="mt-4 text-white/60">
                Hedge fund comp is highly variable. Top performers at top funds earn multiples of these figures.
              </p>

              <div className="mt-12 overflow-x-auto rounded-2xl border border-white/10">
                <table className="w-full min-w-[600px]">
                  <thead>
                    <tr className="border-b border-white/10 bg-white/5">
                      <th className="px-4 py-4 text-left text-sm font-semibold text-white">Level</th>
                      <th className="px-4 py-4 text-left text-sm font-semibold text-white">Base</th>
                      <th className="px-4 py-4 text-left text-sm font-semibold text-white">Bonus</th>
                      <th className="px-4 py-4 text-left text-sm font-semibold text-white">P&L Link</th>
                      <th className="px-4 py-4 text-left text-sm font-semibold text-white">Total Range</th>
                    </tr>
                  </thead>
                  <tbody>
                    {hfSalaries2026.map((row, i) => (
                      <tr key={row.level} className={i !== hfSalaries2026.length - 1 ? "border-b border-white/10" : ""}>
                        <td className="px-4 py-3 text-sm font-medium text-white">{row.level}</td>
                        <td className="px-4 py-3 text-sm text-white/70">{row.base}</td>
                        <td className="px-4 py-3 text-sm text-white/70">{row.bonus}</td>
                        <td className="px-4 py-3 text-sm text-white/70">{row.pnl}</td>
                        <td className="px-4 py-3 text-sm font-semibold text-gold">{row.total}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/10">
                <p className="text-sm text-white/60">
                  <span className="font-semibold text-gold">Key point:</span> HF comp is bimodal. 
                  Median analyst might make $300K while top performers at the same fund make $1M+. 
                  Performance is everything.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Bank Comparison */}
        <section className="bg-cream py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">Bank-by-Bank Comparison</h2>
              <div className="mt-2 h-1 w-20 bg-gold" />
              <p className="mt-4 text-charcoal/70">
                How Analyst 1 total comp compares across top banks in 2026.
              </p>

              <div className="mt-12 space-y-3">
                {bankComparison2026.map((bank) => (
                  <div key={bank.bank} className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm">
                    <div className="flex-1">
                      <span className="font-semibold text-navy">{bank.bank}</span>
                      <p className="text-sm text-charcoal/50">{bank.notes}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-lg font-bold text-gold">{bank.a1Total}</span>
                      <p className="text-xs text-charcoal/50">{bank.stubb}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What's Changed */}
        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">What&apos;s Changed for 2026</h2>
              <div className="mt-2 h-1 w-20 bg-gold" />

              <div className="mt-12 space-y-4">
                {changes2026.map((item, i) => (
                  <div key={i} className="rounded-xl border border-border bg-off-white/50 p-6">
                    <h3 className="font-bold text-navy">{item.change}</h3>
                    <p className="mt-2 text-sm text-charcoal/70">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-navy py-20 lg:py-28">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Land the Offer First</h2>
            <p className="mt-4 text-lg text-white/60">
              Compensation doesn&apos;t matter if you don&apos;t get the job. Prepare properly.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/playbooks"
                className="group flex items-center gap-2 rounded-xl bg-gold px-8 py-4 text-base font-semibold text-navy hover:bg-white transition-colors"
              >
                View All Playbooks
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/finance-career-guide"
                className="rounded-xl border-2 border-white/20 px-8 py-4 text-base font-semibold text-white hover:border-gold hover:text-gold transition-colors"
              >
                Career Guide
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
