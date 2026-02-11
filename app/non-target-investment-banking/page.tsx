import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { ArrowRight, CheckCircle, XCircle, Target, Users, FileText, TrendingUp } from "lucide-react"

export const metadata: Metadata = {
  title: "Non-Target to Investment Banking | Complete 2026 Guide",
  description:
    "How to break into investment banking from a non-target school. Networking strategies, resume tips, and the exact playbook non-target candidates use to land IB offers at top banks.",
  keywords: [
    "non-target investment banking",
    "non target to IB",
    "how to get into investment banking from non target",
    "investment banking non target school",
    "breaking into investment banking",
    "non target networking",
  ],
  openGraph: {
    title: "Non-Target to Investment Banking | Complete 2026 Guide",
    description:
      "How to break into investment banking from a non-target school. Networking strategies, resume tips, and proven playbooks.",
    url: "https://wallstreetplaybook.org/non-target-investment-banking",
  },
  alternates: {
    canonical: "https://wallstreetplaybook.org/non-target-investment-banking",
  },
}

const truthBombs = [
  { myth: "You need a 4.0 GPA", reality: "3.5+ is the minimum, but networking matters more than GPA beyond that threshold" },
  { myth: "It's impossible from a non-target", reality: "Harder, not impossible. Non-targets break in every year with the right strategy" },
  { myth: "You should apply directly online", reality: "Online applications rarely work. Networking and referrals are how non-targets get interviews" },
  { myth: "Only Ivy League students get offers", reality: "Top banks hire from 100+ schools. Your approach matters more than your school name" },
]

const networkingStats = [
  { stat: "3-4x", label: "More networking needed vs. target students" },
  { stat: "50-100", label: "Cold outreach emails minimum" },
  { stat: "30-50", label: "Networking calls to aim for" },
  { stat: "6-12", label: "Months of preparation needed" },
]

const actionPlan = [
  {
    phase: "Foundation (Month 1-3)",
    tasks: [
      "Get your GPA above 3.5 (ideally 3.7+)",
      "Join or start a finance club on campus",
      "Begin learning accounting fundamentals",
      "Build your target list of firms and contacts",
    ],
  },
  {
    phase: "Networking Blitz (Month 3-6)",
    tasks: [
      "Send 10-20 cold outreach emails per week",
      "Complete 2-3 networking calls weekly",
      "Attend any finance events you can access",
      "Ask for referrals to other contacts",
    ],
  },
  {
    phase: "Technical Prep (Month 4-8)",
    tasks: [
      "Master the 3 financial statements",
      "Learn DCF and comparable analysis",
      "Practice M&A and LBO questions",
      "Do mock interviews with peers",
    ],
  },
  {
    phase: "Application Push (Month 6-9)",
    tasks: [
      "Apply with referrals wherever possible",
      "Target boutiques and middle-market first",
      "Keep networking even after applications",
      "Prepare for Superdays with mock interviews",
    ],
  },
]

export default function NonTargetInvestmentBankingPage() {
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
            <p className="text-sm font-semibold uppercase tracking-widest text-gold mb-4">The Underdog&apos;s Guide</p>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Non-Target to <span className="text-gradient-gold">Investment Banking</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/60 max-w-2xl mx-auto">
              Your school doesn&apos;t have on-campus recruiting. Banks don&apos;t visit. Nobody knows what investment 
              banking is. Here&apos;s how you break in anyway.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/playbooks/networking-cold-email-playbook"
                className="group flex items-center gap-2 rounded-xl bg-gold px-8 py-4 text-base font-semibold text-navy transition-all hover:bg-white"
              >
                Get the Networking Playbook
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="#action-plan"
                className="rounded-xl border-2 border-white/20 px-8 py-4 text-base font-semibold text-white transition-all hover:border-gold hover:text-gold"
              >
                See the Action Plan
              </Link>
            </div>
          </div>
        </section>

        {/* Hard Truth Section */}
        <section className="bg-cream py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">The Hard Truth About Non-Target Recruiting</h2>
              <div className="mt-2 h-1 w-20 bg-gold" />
              
              <div className="mt-8 prose prose-lg max-w-none text-charcoal/80">
                <p>
                  Let&apos;s be real: breaking into investment banking from a non-target school is harder than from 
                  Harvard or Wharton. Banks have limited time and resources, so they focus recruiting efforts 
                  on schools that have consistently produced successful analysts.
                </p>
                <p>
                  But <strong>&quot;harder&quot; doesn&apos;t mean &quot;impossible.&quot;</strong> Non-target candidates break into 
                  bulge brackets, elite boutiques, and megafund PE every single year. The difference is 
                  they can&apos;t rely on on-campus recruiting—they have to create their own opportunities through 
                  networking, preparation, and persistence.
                </p>
              </div>

              <div className="mt-12 grid gap-6 sm:grid-cols-2">
                {[
                  { icon: Target, title: "Your Disadvantage", desc: "No on-campus recruiting, fewer alumni connections, less brand recognition" },
                  { icon: TrendingUp, title: "Your Advantage", desc: "Hunger, work ethic, and a story that shows you really want this" },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 p-6 rounded-xl bg-white shadow-sm">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-navy">
                      <item.icon className="h-6 w-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy">{item.title}</h3>
                      <p className="mt-1 text-sm text-charcoal/60">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Myths vs Reality */}
        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">Myths vs. Reality</h2>
              <div className="mt-2 h-1 w-20 bg-gold" />

              <div className="mt-12 space-y-6">
                {truthBombs.map((item, index) => (
                  <div key={index} className="rounded-2xl border border-border bg-off-white/50 p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-red-100">
                        <XCircle className="h-5 w-5 text-red-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-charcoal/50 line-through">{item.myth}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 mt-4">
                      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-navy">{item.reality}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Networking Section */}
        <section className="bg-navy py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">Networking Is Your Path In</h2>
              <p className="mt-6 text-lg text-white/60">
                For non-targets, networking isn&apos;t optional—it&apos;s the primary way you get interviews. 
                Here&apos;s what it takes.
              </p>
              
              <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {networkingStats.map((item) => (
                  <div key={item.label} className="rounded-xl bg-white/10 p-6 text-center">
                    <p className="text-3xl font-bold text-gold">{item.stat}</p>
                    <p className="mt-1 text-sm text-white/60">{item.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12 rounded-2xl bg-white/10 p-8 text-left">
                <h3 className="text-xl font-bold text-white mb-4">The Cold Email That Works</h3>
                <div className="bg-navy-deep rounded-lg p-4 font-mono text-sm text-white/80">
                  <p className="text-gold">Subject: [Your School] Junior - Quick Question on [Group]</p>
                  <p className="mt-4">Hi [Name],</p>
                  <p className="mt-2">I&apos;m a junior at [School] studying finance. I came across your profile 
                  and was impressed by your path from [Background] to [Current Role].</p>
                  <p className="mt-2">Would you have 15 minutes this week for a brief call? I&apos;d love to hear 
                  your perspective on [specific question].</p>
                  <p className="mt-2">Best,<br />[Your Name]</p>
                </div>
              </div>

              <Link
                href="/playbooks/networking-cold-email-playbook"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gold px-8 py-4 text-base font-semibold text-navy hover:bg-white transition-colors"
              >
                Get 50+ Email Templates — $67
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Action Plan */}
        <section id="action-plan" className="bg-cream py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">The Non-Target Action Plan</h2>
              <div className="mt-2 h-1 w-20 bg-gold" />
              
              <p className="mt-6 text-lg text-charcoal/70">
                A 6-12 month roadmap for breaking in from a non-target school.
              </p>

              <div className="mt-12 space-y-8">
                {actionPlan.map((phase, phaseIndex) => (
                  <div key={phase.phase} className="rounded-2xl bg-white p-8 shadow-sm">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy text-gold font-bold">
                        {phaseIndex + 1}
                      </div>
                      <h3 className="text-xl font-bold text-navy">{phase.phase}</h3>
                    </div>
                    <ul className="space-y-3">
                      {phase.tasks.map((task, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 flex-shrink-0 text-gold mt-0.5" />
                          <span className="text-charcoal/80">{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">Essential Resources for Non-Targets</h2>
              <div className="mt-2 h-1 w-20 bg-gold" />

              <div className="mt-12 grid gap-6 sm:grid-cols-2">
                {[
                  { 
                    icon: Users, 
                    title: "Networking Playbook", 
                    desc: "50+ cold email templates and follow-up sequences",
                    price: "$67",
                    href: "/playbooks/networking-cold-email-playbook"
                  },
                  { 
                    icon: FileText, 
                    title: "Finance Technical Guide", 
                    desc: "400+ interview questions with detailed answers",
                    price: "$127",
                    href: "/playbooks/finance-technical-interview-guide"
                  },
                ].map((item) => (
                  <Link 
                    key={item.title} 
                    href={item.href}
                    className="group flex gap-4 p-6 rounded-xl bg-off-white/50 border border-border hover:border-gold/30 hover:shadow-lg transition-all"
                  >
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-navy group-hover:bg-gold transition-colors">
                      <item.icon className="h-6 w-6 text-gold group-hover:text-navy transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy group-hover:text-gold transition-colors">{item.title}</h3>
                      <p className="mt-1 text-sm text-charcoal/60">{item.desc}</p>
                      <p className="mt-2 text-lg font-bold text-gold">{item.price}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-navy py-20 lg:py-28">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Your School Doesn&apos;t Define You</h2>
            <p className="mt-4 text-lg text-white/60">
              The path is harder, but the destination is the same. Get the playbooks that help non-targets 
              compete with anyone.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/playbooks"
                className="group flex items-center gap-2 rounded-xl bg-gold px-8 py-4 text-base font-semibold text-navy hover:bg-white transition-colors"
              >
                Browse All Playbooks
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/submit-resume?service=resume-review"
                className="rounded-xl border-2 border-white/20 px-8 py-4 text-base font-semibold text-white hover:border-gold hover:text-gold transition-colors"
              >
                Get Resume Help
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
