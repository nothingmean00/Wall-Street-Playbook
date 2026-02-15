import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { ArrowRight, Building2, TrendingUp, DollarSign, Users, Clock, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Finance Career Guide | Investment Banking vs PE vs Hedge Funds 2026",
  description:
    "Complete guide to finance careers. Compare investment banking, private equity, hedge funds, and more. Understand paths, compensation, hours, and what it takes to break in.",
  keywords: [
    "finance career guide",
    "investment banking career",
    "finance career paths",
    "how to get into finance",
    "investment banking vs private equity",
    "hedge fund career",
    "finance salary",
    "wall street careers",
  ],
  openGraph: {
    title: "Finance Career Guide | Investment Banking vs PE vs Hedge Funds 2026",
    description:
      "Complete guide to finance careers. Compare paths, compensation, and what it takes to break in.",
    url: "https://wallstreetplaybook.org/finance-career-guide",
    images: [{ url: "https://wallstreetplaybook.org/og-recruiting.jpg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://wallstreetplaybook.org/finance-career-guide",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://wallstreetplaybook.org/og-recruiting.jpg"],
  },
}

const careerPaths = [
  {
    title: "Investment Banking",
    icon: Building2,
    desc: "Advise companies on M&A, debt, and equity transactions",
    entry: "Campus recruiting or lateral",
    hours: "80-100/week",
    comp: "$150K-$200K all-in (1st year)",
    exit: "PE, HF, Corp Dev, MBA",
    pros: ["Deal experience", "Exit optionality", "Technical skills"],
    cons: ["Brutal hours", "Junior work can be tedious", "High burnout"],
  },
  {
    title: "Private Equity",
    icon: TrendingUp,
    desc: "Acquire and improve companies using leverage",
    entry: "2 years of IB typically required",
    hours: "60-80/week",
    comp: "$300K-$400K all-in (Associate)",
    exit: "Operating roles, MBA, HF, stay in PE",
    pros: ["Ownership mindset", "Better hours than IB", "High comp"],
    cons: ["Competitive entry", "Long fundraising cycles", "Limited seats"],
  },
  {
    title: "Hedge Funds",
    icon: DollarSign,
    desc: "Generate alpha through various investment strategies",
    entry: "IB, ER, or direct from undergrad",
    hours: "50-70/week",
    comp: "$200K-$500K+ (varies wildly)",
    exit: "Launch own fund, family office, different HF",
    pros: ["Investment focus", "P&L ownership", "Uncapped upside"],
    cons: ["High pressure", "Performance-based job security", "Competitive"],
  },
  {
    title: "Equity Research",
    icon: Users,
    desc: "Analyze public companies and publish investment recommendations",
    entry: "Campus recruiting or from IB",
    hours: "55-70/week",
    comp: "$150K-$250K all-in",
    exit: "Hedge funds, Corp development, IR",
    pros: ["Investment focus", "External profile", "Better hours than IB"],
    cons: ["MiFID impact", "Less comp than IB", "Industry shrinking"],
  },
]

const timeline = [
  { year: "Freshman", focus: "Explore finance, get good grades, join finance clubs" },
  { year: "Sophomore", focus: "Land a sophomore internship, start networking, learn modeling" },
  { year: "Junior", focus: "SA internship (this is THE recruiting cycle), convert to FT" },
  { year: "Senior", focus: "Either you have an offer or you're lateral recruiting" },
  { year: "Analyst 1-2", focus: "Learn the job, build skills, start thinking about exits" },
  { year: "Exit", focus: "PE/HF recruiting typically happens in year 1-2 of banking" },
]

const compTable = [
  { role: "IB Analyst 1", base: "$110K", bonus: "$90-140K", total: "$200-250K" },
  { role: "IB Analyst 2", base: "$125K", bonus: "$100-170K", total: "$225-295K" },
  { role: "IB Associate 1", base: "$175K", bonus: "$100-200K", total: "$275-375K" },
  { role: "PE Associate 1", base: "$175K", bonus: "$125-200K+", total: "$300-375K+" },
  { role: "HF Analyst", base: "$150-250K", bonus: "$200K-$1M+", total: "Varies wildly" },
]

const essentialSkills = [
  { skill: "Financial Modeling", desc: "3-statement models, DCF, LBO, merger models" },
  { skill: "Accounting", desc: "Deep understanding of financial statements and how they link" },
  { skill: "Valuation", desc: "Trading comps, transaction comps, DCF, LBO-based valuations" },
  { skill: "Excel/PPT", desc: "Speed and proficiency are table stakes—you must be fast" },
  { skill: "Communication", desc: "Client-facing work requires clear written and verbal skills" },
  { skill: "Work Ethic", desc: "The ability to grind through 100-hour weeks when needed" },
]

export default function FinanceCareerGuidePage() {
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
            <p className="text-sm font-semibold uppercase tracking-widest text-gold mb-4">Complete Guide</p>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Finance <span className="text-gradient-gold">Career Guide</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/60 max-w-2xl mx-auto">
              Investment banking, private equity, hedge funds—understand the paths, compensation, and what 
              it actually takes to break in.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/playbooks"
                className="group flex items-center gap-2 rounded-xl bg-gold px-8 py-4 text-base font-semibold text-navy transition-all hover:bg-white"
              >
                View Playbooks
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="#career-paths"
                className="rounded-xl border-2 border-white/20 px-8 py-4 text-base font-semibold text-white transition-all hover:border-gold hover:text-gold"
              >
                Compare Paths
              </Link>
            </div>
          </div>
        </section>

        {/* Career Paths */}
        <section id="career-paths" className="bg-cream py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl text-center">The Major Finance Career Paths</h2>
              <div className="mt-2 mx-auto h-1 w-20 bg-gold" />

              <div className="mt-12 grid gap-8 lg:grid-cols-2">
                {careerPaths.map((path) => (
                  <div key={path.title} className="rounded-2xl bg-white p-8 shadow-sm">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy">
                        <path.icon className="h-6 w-6 text-gold" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-navy">{path.title}</h3>
                        <p className="text-sm text-charcoal/60">{path.desc}</p>
                      </div>
                    </div>
                    
                    <div className="mt-4 space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <span className="text-charcoal/50 w-16">Entry:</span>
                        <span className="text-charcoal/80">{path.entry}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-charcoal/50 w-16">Hours:</span>
                        <span className="text-charcoal/80">{path.hours}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-charcoal/50 w-16">Comp:</span>
                        <span className="text-gold font-semibold">{path.comp}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-charcoal/50 w-16">Exits:</span>
                        <span className="text-charcoal/80">{path.exit}</span>
                      </div>
                    </div>

                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                      <div>
                        <p className="text-xs font-semibold text-green-700 mb-2">Pros</p>
                        <ul className="space-y-1">
                          {path.pros.map((pro) => (
                            <li key={pro} className="text-xs text-charcoal/70 flex items-start gap-1">
                              <span className="text-green-500 mt-0.5">+</span>
                              {pro}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-red-700 mb-2">Cons</p>
                        <ul className="space-y-1">
                          {path.cons.map((con) => (
                            <li key={con} className="text-xs text-charcoal/70 flex items-start gap-1">
                              <span className="text-red-500 mt-0.5">-</span>
                              {con}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Compensation Table */}
        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">2026 Compensation Guide</h2>
              <div className="mt-2 h-1 w-20 bg-gold" />
              <p className="mt-4 text-charcoal/70">
                These are approximate figures for top-tier firms. Compensation varies by firm, group, and year.
              </p>

              <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-off-white/50">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border bg-navy text-white">
                      <th className="px-6 py-4 text-left text-sm font-semibold">Role</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold">Base</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold">Bonus</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {compTable.map((row, i) => (
                      <tr key={row.role} className={i !== compTable.length - 1 ? "border-b border-border" : ""}>
                        <td className="px-6 py-4 text-sm font-medium text-navy">{row.role}</td>
                        <td className="px-6 py-4 text-sm text-charcoal/70">{row.base}</td>
                        <td className="px-6 py-4 text-sm text-charcoal/70">{row.bonus}</td>
                        <td className="px-6 py-4 text-sm font-semibold text-gold">{row.total}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="bg-navy py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-white sm:text-4xl text-center">The Finance Recruiting Timeline</h2>
              <p className="mt-4 text-center text-white/60">
                Finance recruiting happens earlier than any other industry. Here&apos;s the roadmap.
              </p>

              <div className="mt-12 space-y-4">
                {timeline.map((item) => (
                  <div key={item.year} className="flex items-start gap-4 rounded-xl bg-white/10 p-6">
                    <div className="flex h-12 w-24 flex-shrink-0 items-center justify-center rounded-lg bg-gold">
                      <Clock className="h-5 w-5 text-navy" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gold">{item.year}</h3>
                      <p className="mt-1 text-sm text-white/70">{item.focus}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Essential Skills */}
        <section className="bg-cream py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">Skills You Need</h2>
              <div className="mt-2 h-1 w-20 bg-gold" />

              <div className="mt-12 grid gap-4 sm:grid-cols-2">
                {essentialSkills.map((item) => (
                  <div key={item.skill} className="flex gap-4 p-5 rounded-xl bg-white shadow-sm">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 text-gold" />
                    <div>
                      <h3 className="font-semibold text-navy">{item.skill}</h3>
                      <p className="mt-1 text-sm text-charcoal/60">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Path Comparison CTA */}
        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">Pick a Path and Go Deep</h2>
              <p className="mt-4 text-lg text-charcoal/60">
                Pick a path and go deep. Our playbooks give you the specific frameworks and templates 
                to break in.
              </p>

              <div className="mt-12 grid gap-6 sm:grid-cols-3">
                <Link 
                  href="/investment-banking-interview-prep"
                  className="group rounded-2xl border-2 border-border bg-off-white/50 p-6 text-center hover:border-gold transition-colors"
                >
                  <Building2 className="h-8 w-8 mx-auto text-navy group-hover:text-gold transition-colors" />
                  <h3 className="mt-4 text-lg font-bold text-navy">IB Prep Guide</h3>
                  <p className="mt-2 text-sm text-charcoal/60">Land the banking internship</p>
                </Link>
                <Link 
                  href="/private-equity-recruiting"
                  className="group rounded-2xl border-2 border-border bg-off-white/50 p-6 text-center hover:border-gold transition-colors"
                >
                  <TrendingUp className="h-8 w-8 mx-auto text-navy group-hover:text-gold transition-colors" />
                  <h3 className="mt-4 text-lg font-bold text-navy">PE Guide</h3>
                  <p className="mt-2 text-sm text-charcoal/60">Make the jump to PE</p>
                </Link>
                <Link 
                  href="/hedge-fund-interview-prep"
                  className="group rounded-2xl border-2 border-border bg-off-white/50 p-6 text-center hover:border-gold transition-colors"
                >
                  <DollarSign className="h-8 w-8 mx-auto text-navy group-hover:text-gold transition-colors" />
                  <h3 className="mt-4 text-lg font-bold text-navy">HF Guide</h3>
                  <p className="mt-2 text-sm text-charcoal/60">Break into hedge funds</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-navy py-20 lg:py-28">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Get the Complete Playbook</h2>
            <p className="mt-4 text-lg text-white/60">
              Stop piecing together advice from Reddit. Get the complete system—400+ technical questions, 
              50+ email templates, 10 playbooks.
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
                href="/blog"
                className="rounded-xl border-2 border-white/20 px-8 py-4 text-base font-semibold text-white hover:border-gold hover:text-gold transition-colors"
              >
                Free Blog Articles
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
