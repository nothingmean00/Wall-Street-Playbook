import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { ArrowRight, CheckCircle, Target, Users, TrendingUp, Clock, Mail, Phone, MessageSquare } from "lucide-react"

export const metadata: Metadata = {
  title: "Networking for Non-Target Students 2026 | Complete System",
  description:
    "The complete 2026 networking playbook for non-target students breaking into investment banking. Volume benchmarks, 4-phase acceleration system, response rates by channel, and the full conversion funnel from 200 emails to 1 offer.",
  keywords: [
    "networking for non-target students 2026",
    "how to break into IB from non-target",
    "non-target networking strategy",
    "non-target to investment banking networking",
    "non target school networking finance",
    "non target cold email investment banking",
    "break into wall street non target",
    "investment banking networking non target school",
    "non target IB recruiting 2026",
  ],
  openGraph: {
    title: "Networking for Non-Target Students 2026 | Complete System",
    description:
      "The 4-phase networking system that takes non-target students from 0 connections to IB offers. Volume benchmarks, response rates, and the exact conversion funnel.",
    url: "https://wallstreetplaybook.org/networking-non-target-students-2026",
  },
  alternates: {
    canonical: "https://wallstreetplaybook.org/networking-non-target-students-2026",
  },
}

const responseRates = [
  {
    channel: "Alumni from Your School",
    rate: "20-90%",
    icon: Users,
    color: "bg-green-100 text-green-700",
    note: "Highest ROI channel — always start here",
  },
  {
    channel: "Warm Introduction",
    rate: "70-90%",
    icon: MessageSquare,
    color: "bg-green-100 text-green-700",
    note: "Ask every contact: \"Is there anyone else you'd recommend I speak with?\"",
  },
  {
    channel: "LinkedIn (Personalized)",
    rate: "10-20%",
    icon: Mail,
    color: "bg-yellow-100 text-yellow-700",
    note: "Better than cold email for VPs and above — they check LinkedIn more than email",
  },
  {
    channel: "Cold Email (Non-Target)",
    rate: "3-7%",
    icon: Mail,
    color: "bg-red-100 text-red-700",
    note: "Low rate but essential — volume makes up for conversion. 200 emails = 6-14 responses",
  },
  {
    channel: "Cold Call (Boutiques)",
    rate: "15-25%",
    icon: Phone,
    color: "bg-yellow-100 text-yellow-700",
    note: "Underused tactic — smaller firms actually pick up the phone",
  },
]

const phases = [
  {
    phase: "Phase 1: Foundation",
    timeline: "Weeks 1-4",
    goal: "Build your infrastructure before outreach",
    tasks: [
      "Build a target list of 200+ contacts across 30-50 firms using LinkedIn, alumni databases, and deal announcements",
      "Optimize your LinkedIn profile: professional headshot, compelling headline, detailed experience section",
      "Create a tracking spreadsheet (firm, contact name, date sent, follow-up dates, response, outcome)",
      "Prepare your 30-second personal pitch and 10 thoughtful informational interview questions",
      "Research 5-10 recent deals at each target firm so you can personalize every email",
      "Set up a professional email signature with your school, graduation year, and phone number",
    ],
  },
  {
    phase: "Phase 2: Outreach Blitz",
    timeline: "Weeks 5-12",
    goal: "Maximize volume: 20-30 new emails per week",
    tasks: [
      "Send 20-30 personalized outreach emails every week (Tuesday-Thursday, 7-9 AM their time zone)",
      "Start with alumni connections first, then expand to cold targets",
      "Use the 5-sentence framework: hook, background, why them, the ask, graceful exit",
      "Follow up exactly on Day 7 and Day 14 — then move on if no response",
      "Track every interaction in your spreadsheet with notes from each conversation",
      "Target middle-market banks and boutiques first — they're more responsive and give better mentorship",
    ],
  },
  {
    phase: "Phase 3: Relationship Deepening",
    timeline: "Weeks 8-20",
    goal: "Convert informational calls into advocates who will refer you",
    tasks: [
      "Send personalized thank-you emails within 24 hours of every call",
      "Follow up every 4-6 weeks with relevant deal news or industry updates",
      "Ask for introductions to their colleagues: \"Is there anyone else on the team you'd recommend I speak with?\"",
      "Demonstrate follow-through by mentioning how you acted on their advice",
      "Share your resume only when explicitly asked or after 2+ positive touchpoints",
      "Identify your 4-8 strongest contacts who could become internal advocates",
    ],
  },
  {
    phase: "Phase 4: Conversion",
    timeline: "Weeks 16-24+",
    goal: "Turn relationships into referrals and interviews",
    tasks: [
      "Ask your strongest contacts directly: \"I'm applying to [Firm]. Would you be willing to put in a word?\"",
      "Time your asks 2-4 weeks before application deadlines so they can flag your resume",
      "Prepare your contacts with a 2-line summary of why you're a strong candidate",
      "Apply to every firm where you have an internal advocate — don't rely on cold applications",
      "Continue networking even after applications are in — referrals can matter at every stage",
      "Keep your advocates updated on your progress: they're emotionally invested in your success",
    ],
  },
]

const conversionFunnel = [
  { stage: "Cold Emails Sent", count: "200", icon: "📧" },
  { stage: "Responses Received", count: "10-20", icon: "📬" },
  { stage: "Informational Calls", count: "8-16", icon: "📞" },
  { stage: "Strong Contacts", count: "4-8", icon: "🤝" },
  { stage: "Internal Referrals", count: "1-3", icon: "⭐" },
  { stage: "Offer", count: "1", icon: "🏆" },
]

export default function NetworkingNonTargetStudents2026Page() {
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
              <span className="text-xs font-semibold uppercase tracking-widest text-gold">2026 Non-Target Playbook</span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Networking for Non-Target Students{" "}
              <span className="text-gradient-gold">2026</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/60 max-w-2xl mx-auto">
              70-85% of investment banking jobs are filled through networking. For non-target students,
              that number is closer to 100%. Here&apos;s the complete system for building a Wall Street
              network from scratch—even with zero connections.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/playbooks/networking-cold-email-playbook"
                className="group flex items-center gap-2 rounded-xl bg-gold px-8 py-4 text-base font-semibold text-navy transition-all hover:bg-white"
              >
                Get the Networking System — $67
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/blog"
                className="rounded-xl border-2 border-white/20 px-8 py-4 text-base font-semibold text-white transition-all hover:border-gold hover:text-gold"
              >
                Read Free Guides
              </Link>
            </div>
          </div>
        </section>

        {/* The Uncomfortable Truth */}
        <section className="bg-cream py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">
                The Uncomfortable Truth About Non-Target Networking
              </h2>
              <div className="mt-2 h-1 w-20 bg-gold" />

              <div className="mt-8 prose prose-lg max-w-none text-charcoal/80">
                <p>
                  Here&apos;s what nobody tells you: <strong>70-85% of finance jobs are filled through
                  networking and referrals</strong>. For non-target candidates without on-campus recruiting,
                  that number approaches 100%. If you&apos;re applying through online portals and hoping
                  for the best, you&apos;re competing with 10,000+ applicants for a handful of spots.
                </p>
                <p>
                  But networking isn&apos;t just &quot;reaching out to people.&quot; It&apos;s a systematic
                  process with clear benchmarks, proven cadences, and measurable conversion rates.
                  Treat it like a sales pipeline and the math starts working in your favor.
                </p>
              </div>

              <div className="mt-12 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-white p-6 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy mb-4">
                    <Target className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="font-bold text-navy text-lg">Target Students</h3>
                  <p className="mt-2 text-charcoal/60 text-sm">
                    Banks come to them. On-campus info sessions, resume drops, first-round interviews
                    at the career center. 20-30 networking touches are enough.
                  </p>
                </div>
                <div className="rounded-2xl bg-white p-6 shadow-sm border-2 border-gold/20">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold mb-4">
                    <TrendingUp className="h-6 w-6 text-navy" />
                  </div>
                  <h3 className="font-bold text-navy text-lg">Non-Target Students</h3>
                  <p className="mt-2 text-charcoal/60 text-sm">
                    You go to them. <strong className="text-navy">100-200+ cold emails, 15-25+ informational
                    interviews, 8-12 hours per week for 6 months.</strong> That&apos;s the real benchmark.
                  </p>
                </div>
              </div>

              <div className="mt-8 rounded-2xl bg-navy p-6">
                <blockquote className="text-center">
                  <p className="text-lg text-white italic">
                    &quot;Networking took me from a community college to a top-10 global investment bank.
                    It wasn&apos;t talent or connections—it was volume, persistence, and following a system.&quot;
                  </p>
                  <footer className="mt-3 text-sm text-gold">
                    — From the Networking & Cold Email Playbook
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* Volume Benchmarks */}
        <section className="bg-navy py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Non-Target Volume Benchmarks
              </h2>
              <p className="mt-4 text-white/60">
                These are the real numbers. Most non-targets who fail underestimate the volume required.
              </p>

              <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { stat: "100-200+", label: "Cold Emails", sub: "Minimum outreach volume" },
                  { stat: "15-25+", label: "Info Interviews", sub: "Scheduled phone calls" },
                  { stat: "8-12 hrs", label: "Per Week", sub: "Dedicated networking time" },
                  { stat: "6 months", label: "Minimum Timeline", sub: "Start early, stay consistent" },
                ].map((item) => (
                  <div key={item.label} className="rounded-xl bg-white/10 p-6 text-center">
                    <p className="text-3xl font-bold text-gold">{item.stat}</p>
                    <p className="mt-1 text-sm font-semibold text-white">{item.label}</p>
                    <p className="mt-1 text-xs text-white/50">{item.sub}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 rounded-xl bg-white/10 p-6 text-left">
                <h3 className="text-lg font-bold text-gold mb-3">Why These Numbers Matter</h3>
                <div className="space-y-3">
                  {[
                    "At a 5% response rate, 200 emails yields 10 responses — enough to fill your pipeline",
                    "15-25 informational interviews builds a deep enough network to generate 1-3 referrals",
                    "8-12 hours/week is the minimum to sustain 20-30 emails/week plus calls and follow-ups",
                    "6 months gives you time for the full cycle: outreach → relationship → referral → interview",
                  ].map((point, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 flex-shrink-0 text-gold mt-0.5" />
                      <span className="text-sm text-white/80">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Response Rates by Channel */}
        <section className="bg-off-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">
                Response Rates by Channel
              </h2>
              <div className="mt-2 h-1 w-20 bg-gold" />
              <p className="mt-4 text-charcoal/70">
                Not all outreach channels are equal. Prioritize high-conversion channels first,
                then supplement with volume plays.
              </p>

              <div className="mt-12 space-y-4">
                {responseRates.map((channel) => (
                  <div key={channel.channel} className="rounded-2xl bg-white p-6 shadow-sm">
                    <div className="flex items-start gap-4">
                      <div className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl ${channel.color.split(" ")[0]}`}>
                        <channel.icon className={`h-6 w-6 ${channel.color.split(" ")[1]}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-bold text-navy">{channel.channel}</h3>
                          <span className="text-lg font-bold text-gold">{channel.rate}</span>
                        </div>
                        <p className="mt-1 text-sm text-charcoal/60">{channel.note}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-xl bg-navy p-6">
                <p className="text-white/80 text-sm text-center">
                  <strong className="text-gold">Optimal strategy:</strong> Exhaust alumni connections first (20-90% response rate),
                  then ask every contact for warm introductions (70-90%), then fill remaining pipeline with
                  cold emails (3-7%). The math works when you layer channels.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The 4-Phase Acceleration Playbook */}
        <section className="bg-cream py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">
                The Non-Target Acceleration Playbook
              </h2>
              <div className="mt-2 h-1 w-20 bg-gold" />
              <p className="mt-4 text-charcoal/70">
                A 4-phase system that takes you from zero Wall Street connections to internal referrals
                and interviews in 6 months.
              </p>

              <div className="mt-12 space-y-8">
                {phases.map((phase, phaseIndex) => (
                  <div key={phase.phase} className="rounded-2xl bg-white p-8 shadow-sm">
                    <div className="flex items-center gap-4 mb-2">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy text-gold font-bold">
                        {phaseIndex + 1}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-navy">{phase.phase}</h3>
                        <p className="text-sm text-gold font-medium">{phase.timeline}</p>
                      </div>
                    </div>
                    <p className="text-charcoal/60 text-sm mb-4 ml-14">{phase.goal}</p>
                    <ul className="space-y-3 ml-14">
                      {phase.tasks.map((task, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 flex-shrink-0 text-gold mt-0.5" />
                          <span className="text-charcoal/80 text-sm">{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Conversion Funnel */}
        <section className="bg-navy py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                The Full Conversion Funnel
              </h2>
              <p className="mt-4 text-white/60">
                Here&apos;s exactly how 200 cold emails turn into 1 investment banking offer.
                Every step has a measurable conversion rate.
              </p>

              <div className="mt-12 space-y-4">
                {conversionFunnel.map((step, i) => (
                  <div key={step.stage} className="relative">
                    <div
                      className="rounded-xl bg-white/10 p-5 flex items-center justify-between"
                      style={{
                        marginLeft: `${i * 4}%`,
                        marginRight: `${i * 4}%`,
                      }}
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-2xl">{step.icon}</span>
                        <span className="text-white font-medium text-sm sm:text-base">{step.stage}</span>
                      </div>
                      <span className="text-xl sm:text-2xl font-bold text-gold">{step.count}</span>
                    </div>
                    {i < conversionFunnel.length - 1 && (
                      <div className="flex justify-center py-1">
                        <ArrowRight className="h-4 w-4 text-gold/50 rotate-90" />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-xl bg-white/10 p-4">
                  <p className="text-xl font-bold text-gold">5-10%</p>
                  <p className="text-xs text-white/60 mt-1">Email → Response rate</p>
                </div>
                <div className="rounded-xl bg-white/10 p-4">
                  <p className="text-xl font-bold text-gold">50-80%</p>
                  <p className="text-xs text-white/60 mt-1">Response → Call rate</p>
                </div>
                <div className="rounded-xl bg-white/10 p-4">
                  <p className="text-xl font-bold text-gold">25-37%</p>
                  <p className="text-xs text-white/60 mt-1">Contact → Referral rate</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Tactics */}
        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">
                Non-Target Networking Tactics That Work
              </h2>
              <div className="mt-2 h-1 w-20 bg-gold" />
              <p className="mt-4 text-charcoal/70">
                These are the highest-leverage tactics specifically for candidates without traditional
                target-school connections.
              </p>

              <div className="mt-12 space-y-6">
                <div className="rounded-2xl bg-off-white p-6 border-l-4 border-gold">
                  <h3 className="font-bold text-navy text-lg">Find Non-Traditional Common Ground</h3>
                  <p className="mt-2 text-charcoal/70 text-sm">
                    You don&apos;t need an alumni connection to create rapport. Shared hometown, same fraternity/sorority
                    at different schools, same hobby or sport, same industry background before finance, same
                    military branch — any common thread works. Search LinkedIn profiles carefully and reference
                    it in your first sentence. A shared marathon hobby can be more powerful than a shared school.
                  </p>
                </div>

                <div className="rounded-2xl bg-off-white p-6 border-l-4 border-gold">
                  <h3 className="font-bold text-navy text-lg">Target Middle Market and Boutiques First</h3>
                  <p className="mt-2 text-charcoal/70 text-sm">
                    Bulge bracket banks (Goldman, JPM, Morgan Stanley) get the most cold emails and have
                    the lowest response rates for non-targets. Middle-market banks (William Blair, Baird,
                    Piper Sandler) and boutiques are more receptive, give better mentorship, and provide
                    a launch pad to move up later. Start where you can win.
                  </p>
                </div>

                <div className="rounded-2xl bg-off-white p-6 border-l-4 border-gold">
                  <h3 className="font-bold text-navy text-lg">Cold-Call Boutiques Directly</h3>
                  <p className="mt-2 text-charcoal/70 text-sm">
                    This is the most underused tactic for non-target students. Small boutiques (1-20 people)
                    often don&apos;t have formal recruiting. Call the main line, ask to speak with a junior banker,
                    and pitch yourself in 30 seconds. The response rate is 15-25% because almost nobody does
                    this. It shows initiative — exactly what small firms value most.
                  </p>
                </div>

                <div className="rounded-2xl bg-off-white p-6 border-l-4 border-gold">
                  <h3 className="font-bold text-navy text-lg">Leverage Finance Conferences and Events</h3>
                  <p className="mt-2 text-charcoal/70 text-sm">
                    SEO conferences, Women in Finance summits, HBCU Wall Street events, and local CFA
                    society meetings are goldmines for non-targets. You get face time with bankers who
                    are specifically there to mentor and recruit. One in-person conversation is worth
                    20 cold emails.
                  </p>
                </div>

                <div className="rounded-2xl bg-off-white p-6 border-l-4 border-gold">
                  <h3 className="font-bold text-navy text-lg">Build a &quot;Warm Introduction Chain&quot;</h3>
                  <p className="mt-2 text-charcoal/70 text-sm">
                    Every informational call should end with: &quot;Is there anyone else you&apos;d recommend
                    I speak with?&quot; One alumni contact → 2 introductions → 4 more contacts → exponential
                    growth. Within 3 months, you can go from 0 to 30+ contacts through cascading referrals.
                    Warm intros have a 70-90% response rate — this is how you scale.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Weekly Schedule */}
        <section className="bg-off-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">
                Sample Weekly Networking Schedule
              </h2>
              <div className="mt-2 h-1 w-20 bg-gold" />
              <p className="mt-4 text-charcoal/70">
                8-12 hours per week, broken into daily tasks. Consistency beats intensity.
              </p>

              <div className="mt-12 space-y-4">
                {[
                  {
                    day: "Monday",
                    hours: "1.5 hrs",
                    tasks: "Research 10 new contacts, prepare personalized templates, update tracking spreadsheet",
                  },
                  {
                    day: "Tuesday",
                    hours: "2 hrs",
                    tasks: "Send 10-15 new outreach emails (best day for open rates), follow up on pending threads",
                  },
                  {
                    day: "Wednesday",
                    hours: "2 hrs",
                    tasks: "Scheduled informational calls (2-3 calls), send thank-you notes from yesterday's calls",
                  },
                  {
                    day: "Thursday",
                    hours: "2 hrs",
                    tasks: "Send 10-15 new outreach emails, follow up on Day-7 and Day-14 threads",
                  },
                  {
                    day: "Friday",
                    hours: "1.5 hrs",
                    tasks: "Scheduled calls, research upcoming deals/news for next week's personalization",
                  },
                  {
                    day: "Weekend",
                    hours: "2 hrs",
                    tasks: "Batch research for next week's outreach, update CRM, prep for Monday",
                  },
                ].map((item) => (
                  <div key={item.day} className="flex items-start gap-4 rounded-xl bg-white p-5 shadow-sm">
                    <div className="flex-shrink-0 w-24">
                      <p className="font-bold text-navy">{item.day}</p>
                      <p className="text-xs text-gold font-medium">{item.hours}</p>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start gap-2">
                        <Clock className="h-4 w-4 flex-shrink-0 text-gold mt-0.5" />
                        <p className="text-sm text-charcoal/70">{item.tasks}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-xl bg-navy p-5">
                <p className="text-white/80 text-sm text-center">
                  <strong className="text-gold">Total: ~11 hours/week.</strong> That&apos;s the investment.
                  Over 6 months, that&apos;s ~280 hours of networking. The payoff is a career that pays $150K+
                  in year one with a trajectory into PE, hedge funds, or corporate leadership.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What You Get */}
        <section className="bg-cream py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">
                What&apos;s Inside the Complete Networking System
              </h2>
              <div className="mt-2 h-1 w-20 bg-gold" />

              <div className="mt-12 space-y-4">
                {[
                  "13 copy-paste cold email templates for every scenario (alumni, cold, career switch, headhunter, follow-up, thank you)",
                  "The complete 4-phase Non-Target Acceleration Playbook with weekly milestones",
                  "5 proven subject line formulas with the highest open rates",
                  "Response rate benchmarks by channel so you know where to focus your time",
                  "The full conversion funnel math: how 200 emails becomes 1 offer",
                  "Informational interview scripts: 15+ questions to ask and 5 questions to never ask",
                  "Follow-up cadence system with exact timing and template wording",
                  "10 cold email mistakes that get you blacklisted (with before/after rewrites)",
                  "LinkedIn optimization playbook specifically for non-target finance students",
                  "Networking tracker spreadsheet template for managing your pipeline",
                  "Warm introduction request scripts for converting contacts into advocates",
                  "Bonus: Cold-calling scripts for boutique outreach",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-gold mt-0.5" />
                    <span className="text-charcoal/80">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 rounded-2xl bg-white border-2 border-gold/20 p-8 text-center shadow-sm">
                <Users className="h-8 w-8 text-gold mx-auto mb-3" />
                <p className="text-xl font-bold text-navy">The Networking & Cold Email Playbook</p>
                <p className="text-charcoal/60 mt-1">The complete networking system for non-target students breaking into Wall Street</p>
                <p className="text-3xl font-bold text-gold mt-4">$67</p>
                <p className="text-xs text-charcoal/50 mt-1">One-time purchase · Instant PDF download · Lifetime access</p>
                <Link
                  href="/playbooks/networking-cold-email-playbook"
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gold px-8 py-4 text-base font-semibold text-navy hover:bg-navy hover:text-white transition-colors"
                >
                  Get the Complete System — $67
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-navy py-20 lg:py-28">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Your School Doesn&apos;t Define Your Career
            </h2>
            <p className="mt-4 text-lg text-white/60">
              Every year, non-target students land offers at Goldman, Morgan Stanley, Evercore, and the
              top PE megafunds. The difference isn&apos;t talent or luck—it&apos;s having a system and
              putting in the reps. 200 emails. 6 months. One career-changing offer.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/playbooks/networking-cold-email-playbook"
                className="group flex items-center gap-2 rounded-xl bg-gold px-8 py-4 text-base font-semibold text-navy hover:bg-white transition-colors"
              >
                Get the Networking System — $67
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/blog"
                className="rounded-xl border-2 border-white/20 px-8 py-4 text-base font-semibold text-white hover:border-gold hover:text-gold transition-colors"
              >
                Read Free Networking Guides
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
