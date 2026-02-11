import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { ArrowRight, Calendar, Clock, AlertTriangle, CheckCircle, Building2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Investment Banking Recruiting Timeline 2026 | SA & FT Dates",
  description:
    "Complete 2026 investment banking recruiting timeline. Summer analyst application dates, superday schedules, and what's changed for the 2026 recruiting cycle at Goldman, Morgan Stanley, JPM, and more.",
  keywords: [
    "investment banking recruiting 2026",
    "IB summer analyst 2026",
    "investment banking internship 2026",
    "Goldman Sachs recruiting 2026",
    "Morgan Stanley summer analyst 2026",
    "JP Morgan investment banking 2026",
    "when does IB recruiting start 2026",
    "investment banking application deadline 2026",
  ],
  openGraph: {
    title: "Investment Banking Recruiting Timeline 2026 | SA & FT Dates",
    description:
      "Complete 2026 investment banking recruiting timeline. Summer analyst dates and what's changed.",
    url: "https://wallstreetplaybook.org/investment-banking-recruiting-2026",
  },
  alternates: {
    canonical: "https://wallstreetplaybook.org/investment-banking-recruiting-2026",
  },
}

const timeline2026 = [
  {
    period: "January - February 2025",
    title: "Early Networking Window",
    status: "completed",
    details: [
      "Start reaching out to analysts and associates",
      "Attend virtual info sessions",
      "Build your target list of banks and groups",
      "Begin technical preparation",
    ],
  },
  {
    period: "March - April 2025",
    title: "Application Flood",
    status: "completed",
    details: [
      "Bulge bracket applications open",
      "Elite boutiques begin recruiting",
      "First round interviews start at some firms",
      "Resume drops and coffee chats peak",
    ],
  },
  {
    period: "May - June 2025",
    title: "Interview Season",
    status: "active",
    details: [
      "Superdays at major banks",
      "Final round interviews",
      "Offers extended (often exploding)",
      "Middle market banks still recruiting",
    ],
  },
  {
    period: "July - August 2025",
    title: "Late Cycle",
    status: "upcoming",
    details: [
      "Remaining spots filled",
      "Some banks do second rounds",
      "Off-cycle opportunities emerge",
      "Diversity programs recruit",
    ],
  },
  {
    period: "Summer 2026",
    title: "Internship Execution",
    status: "upcoming",
    details: [
      "10-week SA programs",
      "Conversion to full-time offers",
      "Network for PE/HF recruiting",
      "Build deal experience",
    ],
  },
]

const bankDates2026 = [
  { bank: "Goldman Sachs", apps: "Jan-Feb 2025", interviews: "Mar-May 2025", notes: "Historically earliest mover" },
  { bank: "Morgan Stanley", apps: "Feb-Mar 2025", interviews: "Apr-Jun 2025", notes: "Strong diversity recruiting" },
  { bank: "JP Morgan", apps: "Feb-Mar 2025", interviews: "Apr-Jun 2025", notes: "Large class sizes" },
  { bank: "Bank of America", apps: "Mar-Apr 2025", interviews: "May-Jul 2025", notes: "Multiple interview rounds" },
  { bank: "Citi", apps: "Mar-Apr 2025", interviews: "May-Jul 2025", notes: "Video interviews common" },
  { bank: "Evercore", apps: "Mar-Apr 2025", interviews: "Apr-Jun 2025", notes: "Small classes, selective" },
  { bank: "Lazard", apps: "Mar-May 2025", interviews: "May-Jul 2025", notes: "Restructuring focus" },
  { bank: "Centerview", apps: "Apr-May 2025", interviews: "May-Jul 2025", notes: "Very small, elite" },
  { bank: "PJT Partners", apps: "Apr-May 2025", interviews: "Jun-Jul 2025", notes: "Rx and M&A tracks" },
  { bank: "Moelis", apps: "Apr-Jun 2025", interviews: "Jun-Aug 2025", notes: "Later cycle typically" },
]

const changes2026 = [
  {
    change: "Earlier Start",
    desc: "Recruiting continues to accelerate. Banks are opening applications 1-2 weeks earlier than 2025.",
  },
  {
    change: "AI Screening",
    desc: "More banks using HireVue and AI-powered resume screening. Keywords matter more than ever.",
  },
  {
    change: "Virtual Components",
    desc: "First rounds often virtual. Superdays typically in-person but some hybrid options remain.",
  },
  {
    change: "Exploding Offers",
    desc: "24-72 hour deadlines are standard. Be prepared to decide fast.",
  },
  {
    change: "Diversity Focus",
    desc: "Expanded diversity programs with earlier timelines. SEO, MLT, and firm-specific programs.",
  },
]

export default function IBRecruiting2026Page() {
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
              <Calendar className="w-4 h-4 text-gold" />
              <span className="text-xs font-semibold uppercase tracking-widest text-gold">2026 Recruiting Cycle</span>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Investment Banking <span className="text-gradient-gold">Recruiting 2026</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/60 max-w-2xl mx-auto">
              Complete timeline for the 2026 summer analyst recruiting cycle. Application windows, 
              interview dates, and what&apos;s changed this year.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/playbooks/ib-networking-guide"
                className="group flex items-center gap-2 rounded-xl bg-gold px-8 py-4 text-base font-semibold text-navy transition-all hover:bg-white"
              >
                Get Networking Templates
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="#timeline"
                className="rounded-xl border-2 border-white/20 px-8 py-4 text-base font-semibold text-white transition-all hover:border-gold hover:text-gold"
              >
                View Full Timeline
              </Link>
            </div>
          </div>
        </section>

        {/* Alert Banner */}
        <section className="bg-gold py-4">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex items-center justify-center gap-3 text-navy">
              <AlertTriangle className="h-5 w-5" />
              <p className="text-sm font-semibold">
                2026 SA recruiting is actively underway. Applications at top banks close fast—don&apos;t wait.
              </p>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section id="timeline" className="bg-cream py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">2026 Recruiting Timeline</h2>
              <div className="mt-2 h-1 w-20 bg-gold" />
              <p className="mt-4 text-charcoal/70">
                For students graduating in May 2027, recruiting for summer 2026 internships.
              </p>

              <div className="mt-12 space-y-6">
                {timeline2026.map((phase, i) => (
                  <div 
                    key={phase.period} 
                    className={`relative rounded-2xl p-6 ${
                      phase.status === 'active' 
                        ? 'bg-gold/10 border-2 border-gold' 
                        : phase.status === 'completed'
                        ? 'bg-white/50 border border-border'
                        : 'bg-white border border-border'
                    }`}
                  >
                    {phase.status === 'active' && (
                      <div className="absolute -top-3 left-6">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-gold px-3 py-1 text-xs font-semibold text-navy">
                          <span className="h-1.5 w-1.5 rounded-full bg-navy animate-pulse" />
                          Active Now
                        </span>
                      </div>
                    )}
                    
                    <div className="flex items-start gap-4">
                      <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full ${
                        phase.status === 'completed' ? 'bg-green-100' :
                        phase.status === 'active' ? 'bg-gold' : 'bg-navy/10'
                      }`}>
                        {phase.status === 'completed' ? (
                          <CheckCircle className="h-5 w-5 text-green-600" />
                        ) : (
                          <span className={`text-sm font-bold ${phase.status === 'active' ? 'text-navy' : 'text-navy/40'}`}>
                            {i + 1}
                          </span>
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3">
                          <h3 className="font-bold text-navy">{phase.title}</h3>
                          <span className="text-sm text-charcoal/50">{phase.period}</span>
                        </div>
                        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                          {phase.details.map((detail, j) => (
                            <li key={j} className="flex items-start gap-2">
                              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
                              <span className="text-sm text-charcoal/70">{detail}</span>
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

        {/* Bank-Specific Dates */}
        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">2026 Dates by Bank</h2>
              <div className="mt-2 h-1 w-20 bg-gold" />
              <p className="mt-4 text-charcoal/70">
                Approximate windows based on historical patterns. Check firm career pages for exact dates.
              </p>

              <div className="mt-12 overflow-hidden rounded-2xl border border-border">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border bg-navy text-white">
                      <th className="px-4 py-4 text-left text-sm font-semibold">Bank</th>
                      <th className="px-4 py-4 text-left text-sm font-semibold">Apps Open</th>
                      <th className="px-4 py-4 text-left text-sm font-semibold">Interviews</th>
                      <th className="px-4 py-4 text-left text-sm font-semibold hidden sm:table-cell">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bankDates2026.map((bank, i) => (
                      <tr key={bank.bank} className={i !== bankDates2026.length - 1 ? "border-b border-border" : ""}>
                        <td className="px-4 py-3 text-sm font-medium text-navy">{bank.bank}</td>
                        <td className="px-4 py-3 text-sm text-charcoal/70">{bank.apps}</td>
                        <td className="px-4 py-3 text-sm text-charcoal/70">{bank.interviews}</td>
                        <td className="px-4 py-3 text-sm text-charcoal/50 hidden sm:table-cell">{bank.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="mt-4 text-xs text-charcoal/50 text-center">
                *Dates are estimates based on prior cycles. Always verify with official sources.
              </p>
            </div>
          </div>
        </section>

        {/* What's Changed */}
        <section className="bg-navy py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-white sm:text-4xl text-center">What&apos;s Changed for 2026</h2>
              <p className="mt-4 text-center text-white/60">
                Key shifts in the 2026 recruiting cycle you need to know.
              </p>

              <div className="mt-12 grid gap-4">
                {changes2026.map((item, i) => (
                  <div key={i} className="rounded-xl bg-white/10 p-6">
                    <h3 className="font-bold text-gold">{item.change}</h3>
                    <p className="mt-2 text-sm text-white/70">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Prep CTA */}
        <section className="bg-cream py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">Get Ready for 2026 Recruiting</h2>
              <p className="mt-4 text-lg text-charcoal/60">
                The timeline is compressed. Start preparing now.
              </p>

              <div className="mt-12 grid gap-6 sm:grid-cols-3">
                <Link 
                  href="/investment-banking-interview-prep"
                  className="group rounded-2xl border-2 border-border bg-white p-6 text-center hover:border-gold transition-colors"
                >
                  <h3 className="text-lg font-bold text-navy group-hover:text-gold transition-colors">Interview Prep</h3>
                  <p className="mt-2 text-sm text-charcoal/60">Technical & behavioral</p>
                </Link>
                <Link 
                  href="/investment-banking-resume"
                  className="group rounded-2xl border-2 border-border bg-white p-6 text-center hover:border-gold transition-colors"
                >
                  <h3 className="text-lg font-bold text-navy group-hover:text-gold transition-colors">Resume Guide</h3>
                  <p className="mt-2 text-sm text-charcoal/60">Format that gets interviews</p>
                </Link>
                <Link 
                  href="/playbooks/ib-networking-guide"
                  className="group rounded-2xl border-2 border-border bg-white p-6 text-center hover:border-gold transition-colors"
                >
                  <h3 className="text-lg font-bold text-navy group-hover:text-gold transition-colors">Networking</h3>
                  <p className="mt-2 text-sm text-charcoal/60">Email templates & scripts</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-navy sm:text-4xl">Don&apos;t Miss the Window</h2>
            <p className="mt-4 text-lg text-charcoal/60">
              IB recruiting waits for no one. Get the complete playbook.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/playbooks/ib-interview-guide"
                className="group flex items-center gap-2 rounded-xl bg-navy px-8 py-4 text-base font-semibold text-white hover:bg-gold hover:text-navy transition-colors"
              >
                Get the IB Interview Guide — $79
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/playbooks"
                className="rounded-xl border-2 border-navy px-8 py-4 text-base font-semibold text-navy hover:bg-navy hover:text-white transition-colors"
              >
                View All Playbooks
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
