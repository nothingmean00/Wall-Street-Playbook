import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { ArrowRight, CheckCircle, XCircle, Clock, Shield, AlertTriangle, Briefcase, TrendingUp } from "lucide-react"

export const metadata: Metadata = {
  title: "Consulting to Investment Banking Resume | Career Changer Resume Help",
  description:
    "Resume review and rewrite for consultants transitioning to investment banking. Learn how to position McKinsey, BCG, Bain, or Big 4 consulting experience for IB roles.",
  keywords: [
    "consulting to investment banking",
    "MBB to IB",
    "consultant to banker",
    "McKinsey to investment banking",
    "BCG to IB resume",
    "consulting to banking resume",
    "career change investment banking",
    "strategy consulting to IB",
  ],
  openGraph: {
    title: "Consulting to Investment Banking Resume | Wall Street Playbook",
    description:
      "Resume help for consultants transitioning to investment banking. Position your consulting experience for IB recruiting.",
    url: "https://wallstreetplaybook.org/consulting-to-banking-resume",
  },
  alternates: {
    canonical: "https://wallstreetplaybook.org/consulting-to-banking-resume",
  },
}

const consultingAdvantages = [
  {
    advantage: "Structured Problem Solving",
    banking: "Banks value consultants' ability to break down complex problems—similar to structuring deal analysis",
  },
  {
    advantage: "Client Management",
    banking: "You've presented to C-suites. That translates directly to IB client interaction",
  },
  {
    advantage: "Work Ethic",
    banking: "Consulting hours prove you can handle banking intensity",
  },
  {
    advantage: "Industry Knowledge",
    banking: "Sector expertise (healthcare, tech, industrials) maps to coverage groups",
  },
]

const positioningStrategies = [
  {
    title: "Lead with Transaction-Adjacent Work",
    desc: "Due diligence projects, M&A integration, carve-outs, or any transaction-related consulting work should be front and center.",
  },
  {
    title: "Quantify Financial Impact",
    desc: "Revenue growth, cost savings, EBITDA improvement—frame your consulting wins in terms bankers understand.",
  },
  {
    title: "Highlight Financial Modeling",
    desc: "Any DCF, valuation, or financial analysis you've done. Consultants often undersell their modeling experience.",
  },
  {
    title: "Show Industry Depth",
    desc: "If you have sector expertise, emphasize it. Industry knowledge is valuable for coverage groups.",
  },
]

const beforeAfter = [
  {
    context: "M&A Due Diligence Project",
    before: "Conducted due diligence analysis for private equity client evaluating acquisition target",
    after: "Led commercial due diligence for $400M PE acquisition of specialty chemicals manufacturer; identified $15M revenue synergy opportunity and 3 key integration risks that informed final bid pricing",
  },
  {
    context: "Cost Transformation Engagement",
    before: "Worked on cost reduction project for Fortune 500 client",
    after: "Developed zero-based budgeting framework for $2B revenue industrial company, identifying $45M annual cost savings (200bps EBITDA margin improvement); built 5-year financial model tracking implementation impact",
  },
  {
    context: "Growth Strategy Project",
    before: "Created growth strategy and market analysis for technology client",
    after: "Built bottom-up revenue model for enterprise SaaS company's expansion into 3 new verticals; analysis supported $50M Series C fundraise at $300M pre-money valuation",
  },
]

const whyConsultantsSwitch = [
  "Want to be closer to transaction execution rather than advisory",
  "Interested in finance and capital markets specifically",
  "Seeking clearer exit opportunities to PE/HF",
  "Want to build technical financial skills",
  "Prefer deal-based work over project-based consulting",
]

const consultingBackgrounds = [
  { firm: "MBB", examples: "McKinsey, BCG, Bain" },
  { firm: "Big 4 Strategy", examples: "Strategy&, Monitor Deloitte, EY-Parthenon, KPMG Strategy" },
  { firm: "Boutique Strategy", examples: "LEK, OC&C, Simon-Kucher, Kearney" },
  { firm: "Big 4 Consulting", examples: "Deloitte Consulting, PwC Advisory, EY Advisory, KPMG Advisory" },
]

export default function ConsultingToBankingResumePage() {
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
            <p className="text-sm font-semibold uppercase tracking-widest text-gold mb-4">Career Transition</p>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Consulting to <span className="text-gradient-gold">Investment Banking</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/60 max-w-2xl mx-auto">
              Your consulting experience is valuable—but it needs to be translated into banking language. 
              We help you position your background to land IB interviews.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/submit-resume?service=resume-rewrite"
                className="group flex items-center gap-2 rounded-xl bg-gold px-8 py-4 text-base font-semibold text-navy transition-all hover:bg-white"
              >
                Get Resume Rewrite — $497
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
                Banks receive hundreds of consultant resumes. Generic positioning won&apos;t differentiate you.
              </p>
            </div>
          </div>
        </section>

        {/* Consulting Backgrounds */}
        <section className="bg-cream py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">We Work With All Consulting Backgrounds</h2>
              <div className="mt-2 h-1 w-20 bg-gold" />

              <div className="mt-12 grid gap-4 sm:grid-cols-2">
                {consultingBackgrounds.map((item) => (
                  <div key={item.firm} className="flex gap-4 rounded-xl bg-white p-5 shadow-sm">
                    <Briefcase className="h-6 w-6 flex-shrink-0 text-gold" />
                    <div>
                      <p className="font-semibold text-navy">{item.firm}</p>
                      <p className="mt-1 text-sm text-charcoal/60">{item.examples}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Your Advantages */}
        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">Your Consulting Advantages</h2>
              <div className="mt-2 h-1 w-20 bg-gold" />
              <p className="mt-6 text-lg text-charcoal/70">
                Consultants bring skills that banks value. We help you articulate them in banking terms.
              </p>

              <div className="mt-12 space-y-4">
                {consultingAdvantages.map((item, index) => (
                  <div key={index} className="rounded-xl border border-border p-6">
                    <div className="grid gap-4 lg:grid-cols-2">
                      <div className="flex items-start gap-3">
                        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gold/10">
                          <Briefcase className="h-4 w-4 text-gold" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gold">Consulting Skill</p>
                          <p className="mt-1 font-semibold text-navy">{item.advantage}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-navy/10">
                          <TrendingUp className="h-4 w-4 text-navy" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-navy">Banking Translation</p>
                          <p className="mt-1 text-charcoal/70">{item.banking}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Positioning Strategies */}
        <section className="bg-navy py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-white sm:text-4xl text-center">How We Position Consultants</h2>
              <p className="mt-4 text-center text-white/60">
                Strategies specifically designed to translate consulting experience into banking language.
              </p>

              <div className="mt-12 grid gap-6 sm:grid-cols-2">
                {positioningStrategies.map((item, index) => (
                  <div key={index} className="rounded-xl bg-white/10 p-6">
                    <h3 className="text-lg font-semibold text-gold">{item.title}</h3>
                    <p className="mt-2 text-sm text-white/70">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Before/After */}
        <section className="bg-cream py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">Consulting to Banking Transformations</h2>
              <div className="mt-2 h-1 w-20 bg-gold" />
              <p className="mt-6 text-lg text-charcoal/70">
                See how we reframe consulting projects in banking-relevant terms.
              </p>

              <div className="mt-12 space-y-8">
                {beforeAfter.map((item, index) => (
                  <div key={index} className="rounded-2xl bg-white p-6 shadow-sm">
                    <p className="text-sm font-semibold text-gold mb-4">{item.context}</p>
                    <div className="grid gap-4 lg:grid-cols-2">
                      <div className="rounded-lg bg-red-50 p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <XCircle className="h-5 w-5 text-red-500" />
                          <span className="text-sm font-semibold text-red-700">Consulting Resume</span>
                        </div>
                        <p className="text-sm text-red-800">{item.before}</p>
                      </div>
                      <div className="rounded-lg bg-green-50 p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span className="text-sm font-semibold text-green-700">Banking Resume</span>
                        </div>
                        <p className="text-sm text-green-800">{item.after}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Make the Switch */}
        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">Why Consultants Switch to Banking</h2>
              <div className="mt-2 h-1 w-20 bg-gold" />

              <div className="mt-10 space-y-4">
                {whyConsultantsSwitch.map((reason, i) => (
                  <div key={i} className="flex items-start gap-4 rounded-xl border border-border p-5">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 text-gold" />
                    <p className="text-charcoal/80">{reason}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12 rounded-2xl bg-gold/10 p-8">
                <p className="text-charcoal/80">
                  <strong className="text-navy">The good news:</strong> Banks actively recruit from consulting. 
                  MBB to banking is a well-worn path. But your resume needs to speak banking language—not 
                  consulting language—to get interviews.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="bg-cream py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">Make the Transition</h2>
              <div className="mt-2 flex justify-center">
                <div className="h-1 w-20 bg-gold" />
              </div>

              <div className="mt-12 grid gap-6 sm:grid-cols-2 max-w-2xl mx-auto">
                <Link 
                  href="/submit-resume?service=resume-review"
                  className="group rounded-2xl border-2 border-border bg-white p-6 text-left hover:border-gold transition-colors"
                >
                  <h3 className="text-xl font-bold text-navy group-hover:text-gold transition-colors">Resume Review</h3>
                  <p className="mt-2 text-sm text-charcoal/60">Detailed feedback on positioning your consulting experience</p>
                  <p className="mt-4 text-2xl font-bold text-gold">$197</p>
                </Link>
                <Link 
                  href="/submit-resume?service=resume-rewrite"
                  className="group rounded-2xl border-2 border-gold bg-gold/5 p-6 text-left hover:bg-gold/10 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-navy">Resume Rewrite</h3>
                    <span className="text-xs font-bold text-gold bg-gold/20 px-2 py-1 rounded">RECOMMENDED</span>
                  </div>
                  <p className="mt-2 text-sm text-charcoal/60">Complete transformation from consulting to banking format</p>
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
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Translate Your Experience</h2>
            <p className="mt-4 text-lg text-white/60">
              Your consulting skills are valuable. Let us help you communicate them in banking terms.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/submit-resume?service=resume-rewrite"
                className="group flex items-center gap-2 rounded-xl bg-gold px-8 py-4 text-base font-semibold text-navy hover:bg-white transition-colors"
              >
                Get Resume Rewrite — $497
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/playbooks/ib-technical-guide"
                className="rounded-xl border-2 border-white/20 px-8 py-4 text-base font-semibold text-white hover:border-gold hover:text-gold transition-colors"
              >
                IB Technical Guide
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
