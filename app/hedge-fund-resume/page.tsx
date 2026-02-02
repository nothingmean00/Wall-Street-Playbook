import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { ArrowRight, CheckCircle, XCircle, Clock, Shield, AlertTriangle, TrendingUp, BarChart3 } from "lucide-react"

export const metadata: Metadata = {
  title: "Hedge Fund Resume Review | L/S Equity, Macro, Quant Resume Help",
  description:
    "Professional hedge fund resume review service. Position your background for fundamental L/S equity, macro, event-driven, or quantitative hedge fund roles at top firms.",
  keywords: [
    "hedge fund resume",
    "hedge fund resume review",
    "equity research resume",
    "L/S equity resume",
    "buy side resume",
    "citadel resume",
    "point72 resume",
    "hedge fund analyst resume",
    "investment analyst resume",
  ],
  openGraph: {
    title: "Hedge Fund Resume Review | Wall Street Playbook",
    description:
      "Professional hedge fund resume review. Position your background for buy-side roles at top funds.",
    url: "https://wallstreetplaybook.org/hedge-fund-resume",
  },
  alternates: {
    canonical: "https://wallstreetplaybook.org/hedge-fund-resume",
  },
}

const fundTypes = [
  { type: "Fundamental L/S Equity", examples: "Tiger Cubs, Point72, Citadel fundamental pods" },
  { type: "Multi-Manager Platforms", examples: "Citadel, Millennium, Balyasny, Point72" },
  { type: "Event-Driven", examples: "Elliott, Third Point, Pershing Square" },
  { type: "Macro", examples: "Bridgewater, Brevan Howard, Caxton" },
  { type: "Quant/Systematic", examples: "Two Sigma, DE Shaw, Jane Street, Citadel Securities" },
]

const hfResumeUnique = [
  {
    title: "Investment Track Record",
    desc: "Hedge funds want evidence of investment thinking. Your resume should hint at your ability to generate ideas and make decisions under uncertainty.",
  },
  {
    title: "Intellectual Curiosity",
    desc: "Funds want analysts who are genuinely curious about markets, companies, and investing. Your resume should reflect breadth of interests.",
  },
  {
    title: "Sector Expertise",
    desc: "Deep knowledge in a sector (healthcare, tech, industrials, TMT) is highly valued. Position any industry experience prominently.",
  },
  {
    title: "Quantitative Skills",
    desc: "Even fundamental funds value quantitative ability. Modeling, data analysis, and programming skills should be highlighted.",
  },
]

const beforeAfter = [
  {
    context: "Banking to HF Transition",
    before: "Worked on M&A transactions and financial modeling in investment banking",
    after: "Developed investment theses for 15 potential targets during sell-side M&A process; identified 3 situations where public market mispricing exceeded 20%, contributing to personal idea generation for future HF role",
  },
  {
    context: "Equity Research Background",
    before: "Published equity research reports and maintained financial models for coverage universe",
    after: "Published 25 equity research notes on 12-company TMT coverage; generated 4 'Best Ideas' outperforming sector by average 800bps over 6-month periods; built proprietary channel check network across 20 industry contacts",
  },
  {
    context: "Personal Investing Track Record",
    before: "Managed personal portfolio and made investment decisions",
    after: "Managed $150K personal portfolio across 15 concentrated positions; achieved 28% annual return (vs. 12% SPY) over 3 years; documented investment process with written theses and post-mortems for all positions",
  },
]

const investmentSignals = [
  "Stock pitch competitions or investment club leadership",
  "Personal portfolio management with documented track record",
  "Published investment research or market commentary",
  "CFA progress or completion",
  "Relevant sector expertise or industry experience",
  "Quantitative or programming skills (Python, SQL, R)",
]

export default function HedgeFundResumePage() {
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
            <p className="text-sm font-semibold uppercase tracking-widest text-gold mb-4">Buy-Side Positioning</p>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Hedge Fund <span className="text-gradient-gold">Resume Review</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/60 max-w-2xl mx-auto">
              Hedge funds want investors, not executors. Your resume needs to signal investment judgment, 
              intellectual curiosity, and the potential to generate alpha.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/submit-resume?service=resume-rewrite"
                className="group flex items-center gap-2 rounded-xl bg-gold px-8 py-4 text-base font-semibold text-navy transition-all hover:bg-white"
              >
                Get HF Resume Rewrite — $497
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/submit-resume?service=resume-review"
                className="rounded-xl border-2 border-white/20 px-8 py-4 text-base font-semibold text-white transition-all hover:border-gold hover:text-gold"
              >
                Review Only — $197
              </Link>
            </div>

            <div className="mt-8 flex items-center justify-center gap-6 text-sm text-white/50">
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-gold" />
                5-7 Day Turnaround
              </span>
              <span className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-gold" />
                Money-Back Guarantee
              </span>
            </div>
          </div>
        </section>

        {/* Alert */}
        <section className="bg-gold py-6">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex items-center justify-center gap-3 text-navy">
              <AlertTriangle className="h-5 w-5" />
              <p className="text-sm font-semibold">
                HF recruiting is idiosyncratic. Your resume needs to tell an investment story, not just list deal experience.
              </p>
            </div>
          </div>
        </section>

        {/* Fund Types */}
        <section className="bg-cream py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">Optimized for All Fund Types</h2>
              <div className="mt-2 h-1 w-20 bg-gold" />

              <div className="mt-12 space-y-4">
                {fundTypes.map((fund) => (
                  <div key={fund.type} className="flex gap-4 rounded-xl bg-white p-5 shadow-sm">
                    <BarChart3 className="h-6 w-6 flex-shrink-0 text-gold" />
                    <div>
                      <p className="font-semibold text-navy">{fund.type}</p>
                      <p className="mt-1 text-sm text-charcoal/60">{fund.examples}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What Makes HF Different */}
        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">What Hedge Fund Resumes Need</h2>
              <div className="mt-2 h-1 w-20 bg-gold" />

              <div className="mt-12 grid gap-6 sm:grid-cols-2">
                {hfResumeUnique.map((item) => (
                  <div key={item.title} className="rounded-xl border border-border p-6">
                    <h3 className="text-lg font-semibold text-navy">{item.title}</h3>
                    <p className="mt-2 text-sm text-charcoal/70">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Before/After */}
        <section className="bg-navy py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-white sm:text-4xl text-center">HF Resume Transformations</h2>
              <p className="mt-4 text-center text-white/60">
                See how we reframe experience to signal investment capability.
              </p>

              <div className="mt-12 space-y-8">
                {beforeAfter.map((item, index) => (
                  <div key={index} className="rounded-2xl bg-white/10 p-6">
                    <p className="text-sm font-semibold text-gold mb-4">{item.context}</p>
                    <div className="grid gap-4 lg:grid-cols-2">
                      <div className="rounded-lg bg-red-500/10 p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <XCircle className="h-5 w-5 text-red-400" />
                          <span className="text-sm font-semibold text-red-400">Execution Focus</span>
                        </div>
                        <p className="text-sm text-white/70">{item.before}</p>
                      </div>
                      <div className="rounded-lg bg-green-500/10 p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <CheckCircle className="h-5 w-5 text-green-400" />
                          <span className="text-sm font-semibold text-green-400">Investment Focus</span>
                        </div>
                        <p className="text-sm text-white/70">{item.after}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Investment Signals */}
        <section className="bg-cream py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">Investment Signals We Highlight</h2>
              <div className="mt-2 h-1 w-20 bg-gold" />
              <p className="mt-6 text-lg text-charcoal/70">
                Hedge funds look for evidence of investment aptitude. We ensure these signals shine through.
              </p>

              <div className="mt-10 rounded-2xl bg-white p-8 shadow-sm">
                <div className="space-y-4">
                  {investmentSignals.map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gold/10">
                        <TrendingUp className="h-4 w-4 text-gold" />
                      </div>
                      <span className="text-charcoal/80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">Position Yourself as an Investor</h2>
              <div className="mt-2 flex justify-center">
                <div className="h-1 w-20 bg-gold" />
              </div>

              <div className="mt-12 grid gap-6 sm:grid-cols-2 max-w-2xl mx-auto">
                <Link 
                  href="/submit-resume?service=resume-review"
                  className="group rounded-2xl border-2 border-border bg-white p-6 text-left hover:border-gold transition-colors"
                >
                  <h3 className="text-xl font-bold text-navy group-hover:text-gold transition-colors">HF Resume Review</h3>
                  <p className="mt-2 text-sm text-charcoal/60">Feedback on positioning your background for buy-side</p>
                  <p className="mt-4 text-2xl font-bold text-gold">$197</p>
                </Link>
                <Link 
                  href="/submit-resume?service=resume-rewrite"
                  className="group rounded-2xl border-2 border-gold bg-gold/5 p-6 text-left hover:bg-gold/10 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-navy">HF Resume Rewrite</h3>
                    <span className="text-xs font-bold text-gold bg-gold/20 px-2 py-1 rounded">RECOMMENDED</span>
                  </div>
                  <p className="mt-2 text-sm text-charcoal/60">Complete transformation with investment-focused positioning</p>
                  <p className="mt-4 text-2xl font-bold text-gold">$497</p>
                </Link>
              </div>

              <p className="mt-8 text-sm text-charcoal/50">
                100% money-back guarantee. Not satisfied? Full refund.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-navy py-20 lg:py-28">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Show Them You Can Invest</h2>
            <p className="mt-4 text-lg text-white/60">
              Your resume should tell an investment story, not just list experiences. Let us help you position yourself as an investor.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/submit-resume?service=resume-rewrite"
                className="group flex items-center gap-2 rounded-xl bg-gold px-8 py-4 text-base font-semibold text-navy hover:bg-white transition-colors"
              >
                Get HF Resume Rewrite — $497
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/playbooks/stock-pitch-guide"
                className="rounded-xl border-2 border-white/20 px-8 py-4 text-base font-semibold text-white hover:border-gold hover:text-gold transition-colors"
              >
                Stock Pitch Guide
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
