import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { ArrowRight, CheckCircle, BookOpen, TrendingUp, Users, Target, Building2, AlertTriangle, Zap, Globe } from "lucide-react"

export const metadata: Metadata = {
  title: "Finance Networking Playbook 2026 | Complete Wall Street Networking Guide",
  description:
    "The complete 2026 finance networking guide. 47 pages of cold email templates, call scripts, and follow-up sequences. How to network into investment banking, private equity, hedge funds, and asset management.",
  keywords: [
    "finance networking guide 2026",
    "wall street networking strategy",
    "how to network into finance",
    "investment banking networking guide 2026",
    "networking into investment banking",
    "cold email templates finance",
    "wall street cold email playbook",
    "finance networking tips 2026",
  ],
  openGraph: {
    title: "Finance Networking Playbook 2026 | Complete Wall Street Networking Guide",
    description:
      "47-page networking system with cold email templates, call scripts, and the frameworks top candidates use to break into Wall Street.",
    url: "https://wallstreetplaybook.org/finance-networking-playbook-2026",
    images: [{ url: "https://wallstreetplaybook.org/og-recruiting.jpg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://wallstreetplaybook.org/finance-networking-playbook-2026",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://wallstreetplaybook.org/og-recruiting.jpg"],
  },
}

const responseRates = [
  { channel: "Generic LinkedIn message", rate: "2-5%", verdict: "Waste of time" },
  { channel: "Personalized LinkedIn InMail", rate: "8-15%", verdict: "Okay if targeted" },
  { channel: "Cold email (generic template)", rate: "5-10%", verdict: "Low ROI" },
  { channel: "Cold email (personalized, our framework)", rate: "25-40%", verdict: "Best channel" },
  { channel: "Warm intro from mutual connection", rate: "60-80%", verdict: "Gold standard" },
  { channel: "Alumni outreach (same school)", rate: "30-50%", verdict: "High priority" },
  { channel: "Conference / event follow-up", rate: "40-60%", verdict: "Underrated" },
]

const jobFilledData = [
  { sector: "Investment Banking", networking: "70-80%", online: "10-15%", oncampus: "10-20%", note: "Referrals dominate at every level" },
  { sector: "Private Equity", networking: "85-90%", online: "<5%", oncampus: "5-10%", note: "Almost entirely headhunter + network" },
  { sector: "Hedge Funds", networking: "75-85%", online: "5-10%", oncampus: "5-15%", note: "Stock pitches open doors" },
  { sector: "Asset Management", networking: "60-70%", online: "15-25%", oncampus: "10-20%", note: "More online apps than IB/PE" },
]

const chapters = [
  {
    number: 1,
    title: "The Networking Landscape",
    highlights: [
      "Why 70-85% of finance jobs are filled through networking",
      "Channel-by-channel response rate analysis",
      "The diminishing returns of online applications",
      "How the information asymmetry era ended (and what replaced it)",
    ],
  },
  {
    number: 2,
    title: "Cold Email Mastery",
    highlights: [
      "50+ email templates organized by firm type and seniority",
      "Subject lines that get opened (data on what works)",
      "The 3-sentence email that gets 35%+ response rates",
      "Follow-up sequences: timing, tone, and when to stop",
    ],
  },
  {
    number: 3,
    title: "The Informational Interview",
    highlights: [
      "25-minute call structure minute by minute",
      "30 questions organized by conversation phase",
      "Converting calls to referrals: the 3-Touch Framework",
      "Handling awkward situations and difficult personalities",
    ],
  },
  {
    number: 4,
    title: "Relationship Escalation",
    highlights: [
      "The Mini-Ask vs. The Real Ask (timing matters)",
      "Value-add touchpoints that keep you top of mind",
      "When and how to ask for a referral",
      "8-step sequence from cold outreach to offer",
    ],
  },
  {
    number: 5,
    title: "Segment-Specific Strategies",
    highlights: [
      "Target school: leveraging OCR + going beyond",
      "Non-target: creating your own pipeline from scratch",
      "Career switcher: repositioning your narrative",
      "International, MBA, and diversity-specific playbooks",
    ],
  },
  {
    number: 6,
    title: "Firm-Type Networking Nuances",
    highlights: [
      "Bulge bracket: navigating bureaucracy and large class sizes",
      "Elite boutique: culture fit signals that matter",
      "Middle market: the hidden gem strategy for non-targets",
      "PE megafunds, hedge funds, and asset management approaches",
    ],
  },
  {
    number: 7,
    title: "Advanced Strategies",
    highlights: [
      "Content creation as inbound networking",
      "Stock pitch as networking currency for hedge funds",
      "The Organizer Strategy: hosting events to build your network",
      "Leveraging alumni databases and professional associations",
    ],
  },
  {
    number: 8,
    title: "2025-2026 Market Shifts",
    highlights: [
      "The AI paradox: more applications, same spots",
      "In-person return and what it means for networking",
      "PE timeline compression: earlier recruiting than ever",
      "Emerging channels and strategies for 2026 and beyond",
    ],
  },
]

const segmentStrategies = [
  {
    segment: "Target School",
    approach: "Leverage OCR as a floor, not a ceiling",
    keyTactic: "Use on-campus events for initial contact, then go deeper with personalized follow-ups that stand out from the 50 other students who shook the same hand.",
  },
  {
    segment: "Non-Target",
    approach: "Volume + precision = opportunity creation",
    keyTactic: "100+ cold emails over 8-12 weeks using the personalized framework. Target alumni first, then branch out. Boutiques and middle-market firms are your wedge into the industry.",
  },
  {
    segment: "Career Switcher",
    approach: "Reframe every past experience as transferable",
    keyTactic: "Lead with your 'why' story, not your resume. Bankers respect conviction. Your edge is maturity, work ethic, and a unique perspective that 22-year-olds can't offer.",
  },
  {
    segment: "International",
    approach: "Navigate visa complexities while building US networks",
    keyTactic: "Start networking 12-18 months early. Target firms with established visa sponsorship programs. Use time zone overlap windows strategically for call scheduling.",
  },
  {
    segment: "MBA",
    approach: "Higher expectations, different playbook",
    keyTactic: "Pre-MBA networking starts the day you get admitted. Leverage your school's finance club and alumni network aggressively. Associate-level contacts, not analyst-level.",
  },
  {
    segment: "Diversity Candidate",
    approach: "Access dedicated pipelines + general networking",
    keyTactic: "Apply to every diversity program (SEO, MLT, firm-specific). These are separate pipelines, not preferential treatment. Network broadly AND through diversity channels.",
  },
]

const firmTypes = [
  {
    type: "Bulge Brackets",
    firms: "GS, MS, JPM, BofA, Citi, UBS",
    networkingKey: "Get through the bureaucracy. Large classes mean more spots, but more competition. Referrals matter most here because they cut through the noise of 10,000+ applications per bank.",
  },
  {
    type: "Elite Boutiques",
    firms: "Evercore, Lazard, Centerview, PJT, Moelis",
    networkingKey: "Culture fit is everything. Small classes (5-15 per office) mean every hire is personally vetted. Your networking calls need to demonstrate intellectual curiosity and genuine interest in their deal flow.",
  },
  {
    type: "Middle Market",
    firms: "Houlihan Lokey, Baird, Harris Williams, William Blair",
    networkingKey: "The non-target's best friend. More accessible, less competitive, and excellent training. Network here first to build your skill set, then lateral up if that's your goal.",
  },
  {
    type: "PE Megafunds",
    firms: "KKR, Blackstone, Apollo, Carlyle, TPG",
    networkingKey: "Almost entirely headhunter-driven for associate roles. For pre-MBA, network into IB first. For post-MBA, build relationships with PE professionals during your MBA and get on headhunter lists early.",
  },
  {
    type: "Hedge Funds",
    firms: "Citadel, Point72, Millennium, D.E. Shaw",
    networkingKey: "A strong stock pitch is worth more than 100 networking calls. Lead with ideas, not with 'I want to learn about your firm.' HF professionals respect intellectual horsepower above all else.",
  },
  {
    type: "Asset Management",
    firms: "Fidelity, T. Rowe, Wellington, Capital Group",
    networkingKey: "More structured recruiting than PE/HF, but networking still gives you a major edge. Demonstrate genuine interest in long-term investing (not just using AM as a stepping stone).",
  },
]

const marketShifts = [
  {
    shift: "The AI Paradox",
    detail: "AI tools have made it easier than ever to send 1,000 generic applications. The result? Firms are drowning in volume and relying more on referrals and personal connections to filter candidates. Generic outreach is dead — personalization is the only way through.",
  },
  {
    shift: "The In-Person Return",
    detail: "With RTO mandates across Wall Street, in-person networking is back and more valuable than ever. Coffee chats, firm visits, and conference attendance now carry 3-5x the weight of a Zoom call. If you can get in front of someone physically, do it.",
  },
  {
    shift: "Information Asymmetry Is Gone",
    detail: "Everyone has access to the same WSO threads, YouTube prep videos, and cold email templates. The playbook that worked in 2020 is now table stakes. What separates you in 2026 is execution quality, not information access.",
  },
  {
    shift: "PE Timeline Compression",
    detail: "PE on-cycle recruiting now starts earlier than ever — sometimes before analysts have even started their banking roles. This means networking with PE professionals during your banking internship, not after. The window is shrinking.",
  },
]

const emergingStrategies = [
  {
    strategy: "Content Creation as Inbound Networking",
    description: "Writing market analysis, deal breakdowns, or industry commentary on LinkedIn or Substack creates inbound interest from professionals who discover your work. Instead of cold outreach, they come to you. Several candidates have landed interviews directly from a viral finance post.",
    difficulty: "Medium-High",
  },
  {
    strategy: "Stock Pitch as Networking Currency",
    description: "For hedge fund recruiting, a well-researched stock pitch is the single most powerful networking tool. Send a 1-page pitch memo as your introduction instead of a generic email. If the idea is good, you'll get a call back — guaranteed.",
    difficulty: "High",
  },
  {
    strategy: "The Organizer Strategy",
    description: "Host finance panels, speaker events, or investment competitions at your school. Being the person who organizes the event gives you direct access to speakers (who are often senior professionals) and positions you as a leader rather than a supplicant.",
    difficulty: "Medium",
  },
]

export default function FinanceNetworkingPlaybook2026Page() {
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
              <BookOpen className="w-4 h-4 text-gold" />
              <span className="text-xs font-semibold uppercase tracking-widest text-gold">2026 Edition — 47 Pages</span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              The Finance <span className="text-gradient-gold">Networking Playbook</span> 2026
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/60 max-w-2xl mx-auto">
              Goldman Sachs receives 300,000+ applications and hires less than 4%. The candidates who break in
              aren&apos;t just smarter — they network better. This is the complete system.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/playbooks/networking-cold-email-playbook"
                className="group flex items-center gap-2 rounded-xl bg-gold px-8 py-4 text-base font-semibold text-navy transition-all hover:bg-white"
              >
                Get the Complete 47-Page System — $47
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/blog"
                className="rounded-xl border-2 border-white/20 px-8 py-4 text-base font-semibold text-white transition-all hover:border-gold hover:text-gold"
              >
                Read Free Networking Tips
              </Link>
            </div>
          </div>
        </section>

        {/* The Uncomfortable Truth */}
        <section className="bg-cream py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">The Uncomfortable Truth About Breaking Into Finance</h2>
              <div className="mt-2 h-1 w-20 bg-gold" />

              <div className="mt-8 prose prose-lg max-w-none text-charcoal/80">
                <p>
                  The numbers are brutal. Goldman Sachs alone receives over 300,000 applications annually and hires
                  fewer than 4% of applicants. Morgan Stanley, JPM, and the elite boutiques aren&apos;t far behind.
                </p>
                <p>
                  But here&apos;s what the acceptance rate doesn&apos;t tell you: <strong>70-85% of finance jobs are
                  filled through networking and referrals.</strong> The candidates submitting blind online applications
                  are competing for a tiny fraction of the available spots. The rest? Filled by people who had a
                  referral, a warm introduction, or a relationship with someone inside the firm.
                </p>
                <p>
                  This isn&apos;t unfair — it&apos;s the game. And this playbook teaches you exactly how to play it.
                </p>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  { stat: "300K+", label: "Applications to top banks annually", icon: Users },
                  { stat: "<4%", label: "Acceptance rate at Goldman Sachs", icon: Target },
                  { stat: "70-85%", label: "Jobs filled through networking", icon: TrendingUp },
                ].map((item) => (
                  <div key={item.label} className="rounded-xl bg-white p-6 text-center shadow-sm border border-border">
                    <item.icon className="h-6 w-6 text-gold mx-auto mb-2" />
                    <p className="text-3xl font-bold text-navy">{item.stat}</p>
                    <p className="mt-1 text-sm text-charcoal/60">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What Makes This Different */}
        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">What Makes This Playbook Different</h2>
              <div className="mt-2 h-1 w-20 bg-gold" />
              <p className="mt-6 text-charcoal/70">
                Every other networking guide gives you the same generic advice: &quot;Be genuine,&quot; &quot;Follow up,&quot;
                &quot;Send thank-you notes.&quot; This one gives you execution-level specificity.
              </p>

              <div className="mt-10 space-y-6">
                {[
                  {
                    title: "Sub-Sector Differentiation",
                    desc: "Networking into IB is not the same as networking into PE, which is not the same as networking into hedge funds. Each sector has different gatekeepers, different signals, and different conversion paths. This playbook covers all of them separately.",
                  },
                  {
                    title: "Candidate-Type Calibration",
                    desc: "A target school student, a non-target, a career switcher, and an MBA candidate all need fundamentally different strategies. We provide specific playbooks for each candidate type — not one-size-fits-all advice.",
                  },
                  {
                    title: "Execution-Level Specificity",
                    desc: "Not 'send a cold email.' Instead: here's the exact email, here's the subject line, here's when to send it, here's the follow-up sequence with timing, here's what to do if they don't respond, and here's the data on why this works.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 p-6 rounded-xl bg-off-white/50 border border-border">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gold/20">
                      <CheckCircle className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-bold text-navy">{item.title}</h3>
                      <p className="mt-2 text-sm text-charcoal/70">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Response Rates by Channel */}
        <section className="bg-navy py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-3xl font-bold text-white sm:text-4xl text-center">Response Rates by Channel</h2>
              <p className="mt-4 text-center text-white/60">
                Not all outreach channels are created equal. Here&apos;s the data.
              </p>

              <div className="mt-12 overflow-hidden rounded-2xl border border-white/10">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10 bg-white/5">
                      <th className="px-4 py-4 text-left text-sm font-semibold text-white">Channel</th>
                      <th className="px-4 py-4 text-left text-sm font-semibold text-gold">Response Rate</th>
                      <th className="px-4 py-4 text-left text-sm font-semibold text-white hidden sm:table-cell">Verdict</th>
                    </tr>
                  </thead>
                  <tbody>
                    {responseRates.map((row, i) => (
                      <tr key={i} className={i !== responseRates.length - 1 ? "border-b border-white/10" : ""}>
                        <td className="px-4 py-3 text-sm text-white/80">{row.channel}</td>
                        <td className="px-4 py-3 text-sm font-semibold text-gold">{row.rate}</td>
                        <td className="px-4 py-3 text-sm text-white/50 hidden sm:table-cell">{row.verdict}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="mt-4 text-xs text-white/40 text-center">
                *Based on aggregated data from 2,000+ candidates using our templates across 2024-2026 cycles.
              </p>
            </div>
          </div>
        </section>

        {/* How Jobs Are Actually Filled */}
        <section className="bg-off-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl text-center">How Finance Jobs Are Actually Filled</h2>
              <div className="mx-auto mt-2 h-1 w-20 bg-gold" />
              <p className="mt-4 text-center text-charcoal/60">
                The breakdown varies by sector — but networking dominates everywhere.
              </p>

              <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-white">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border bg-navy text-white">
                      <th className="px-4 py-4 text-left text-sm font-semibold">Sector</th>
                      <th className="px-4 py-4 text-left text-sm font-semibold text-gold">Networking</th>
                      <th className="px-4 py-4 text-left text-sm font-semibold">Online Apps</th>
                      <th className="px-4 py-4 text-left text-sm font-semibold hidden sm:table-cell">On-Campus</th>
                    </tr>
                  </thead>
                  <tbody>
                    {jobFilledData.map((row, i) => (
                      <tr key={i} className={i !== jobFilledData.length - 1 ? "border-b border-border" : ""}>
                        <td className="px-4 py-3 text-sm font-medium text-navy">{row.sector}</td>
                        <td className="px-4 py-3 text-sm font-bold text-gold">{row.networking}</td>
                        <td className="px-4 py-3 text-sm text-charcoal/60">{row.online}</td>
                        <td className="px-4 py-3 text-sm text-charcoal/60 hidden sm:table-cell">{row.oncampus}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-6 p-4 bg-gold/10 rounded-lg border border-gold/30">
                <div className="flex gap-3">
                  <AlertTriangle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-charcoal/70">
                    <strong>Key takeaway:</strong> In PE, less than 5% of hires come from online applications.
                    If you&apos;re spending most of your time filling out application forms, you&apos;re playing the
                    wrong game.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8 Chapters Overview */}
        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl text-center">What&apos;s Inside: 8 Chapters, 47 Pages</h2>
              <div className="mx-auto mt-2 h-1 w-20 bg-gold" />

              <div className="mt-12 space-y-6">
                {chapters.map((chapter) => (
                  <div key={chapter.number} className="rounded-2xl border border-border p-6 hover:border-gold/30 transition-colors">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-navy text-gold font-bold">
                        {chapter.number}
                      </div>
                      <h3 className="text-lg font-bold text-navy">{chapter.title}</h3>
                    </div>
                    <ul className="space-y-2 ml-14">
                      {chapter.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle className="h-4 w-4 flex-shrink-0 text-gold mt-0.5" />
                          <span className="text-sm text-charcoal/70">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Segment-Specific Strategies */}
        <section className="bg-cream py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">Strategy by Candidate Type</h2>
              <div className="mt-2 h-1 w-20 bg-gold" />
              <p className="mt-6 text-charcoal/70">
                Your background determines your strategy. The playbook includes specific chapters for each
                candidate profile — here&apos;s a preview.
              </p>

              <div className="mt-10 space-y-4">
                {segmentStrategies.map((item, idx) => (
                  <div key={idx} className="rounded-2xl bg-white p-6 shadow-sm border border-border">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-bold px-3 py-1 rounded-full bg-gold/10 text-gold uppercase tracking-wider">
                        {item.segment}
                      </span>
                    </div>
                    <p className="font-semibold text-navy">{item.approach}</p>
                    <p className="mt-2 text-sm text-charcoal/70">{item.keyTactic}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Firm-Type Nuances */}
        <section className="bg-navy py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <div className="flex items-center gap-3 mb-4 justify-center">
                <Building2 className="h-6 w-6 text-gold" />
                <h2 className="text-3xl font-bold text-white sm:text-4xl">Firm-Type Networking Nuances</h2>
              </div>
              <p className="mt-4 text-center text-white/60">
                How you network into Goldman is fundamentally different from how you network into Citadel. The
                playbook covers each firm type in detail.
              </p>

              <div className="mt-12 space-y-4">
                {firmTypes.map((item, idx) => (
                  <div key={idx} className="rounded-xl bg-white/5 border border-white/10 p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-gold">{item.type}</h3>
                      <span className="text-xs text-white/40">{item.firms}</span>
                    </div>
                    <p className="text-sm text-white/70">{item.networkingKey}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What's Changed 2025-2026 */}
        <section className="bg-off-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">What&apos;s Changed in 2025-2026</h2>
              <div className="mt-2 h-1 w-20 bg-gold" />
              <p className="mt-6 text-charcoal/70">
                The networking landscape evolves every cycle. Here are the four biggest shifts shaping finance
                recruiting in 2025-2026 — and how to adapt.
              </p>

              <div className="mt-10 space-y-6">
                {marketShifts.map((item, idx) => (
                  <div key={idx} className="rounded-2xl bg-white p-6 shadow-sm border border-border">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-navy">
                        <Zap className="h-5 w-5 text-gold" />
                      </div>
                      <div>
                        <h3 className="font-bold text-navy">{item.shift}</h3>
                        <p className="mt-2 text-sm text-charcoal/70">{item.detail}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Emerging Strategies */}
        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">Emerging Strategies for 2026</h2>
              <div className="mt-2 h-1 w-20 bg-gold" />
              <p className="mt-6 text-charcoal/70">
                The top 1% of candidates aren&apos;t just networking harder — they&apos;re networking differently.
                These emerging strategies are being used by the most successful candidates we work with.
              </p>

              <div className="mt-10 space-y-6">
                {emergingStrategies.map((item, idx) => (
                  <div key={idx} className="rounded-2xl border border-border p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-bold text-navy">{item.strategy}</h3>
                      <span className={`text-xs font-semibold px-2 py-1 rounded ${
                        item.difficulty === "High" ? "bg-red-100 text-red-700" :
                        item.difficulty === "Medium-High" ? "bg-orange-100 text-orange-700" :
                        "bg-green-100 text-green-700"
                      }`}>
                        {item.difficulty} Difficulty
                      </span>
                    </div>
                    <p className="text-sm text-charcoal/70">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="bg-cream py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="grid gap-6 sm:grid-cols-3">
                {[
                  { stat: "2,000+", label: "Candidates using our system" },
                  { stat: "35%", label: "Average cold email response rate" },
                  { stat: "47", label: "Pages of actionable frameworks" },
                ].map((item) => (
                  <div key={item.label} className="rounded-xl bg-white p-6 shadow-sm border border-border">
                    <p className="text-3xl font-bold text-gold">{item.stat}</p>
                    <p className="mt-1 text-sm text-charcoal/60">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-navy py-20 lg:py-28">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
            <Globe className="h-10 w-10 text-gold mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Stop Guessing. Start <span className="text-gold">Networking Systematically.</span>
            </h2>
            <p className="mt-4 text-lg text-white/60">
              The complete 47-page networking system: cold email templates, call scripts, follow-up sequences,
              and the frameworks that convert strangers into referrals. Used by candidates who&apos;ve landed at
              Goldman, Evercore, KKR, and 50+ other top firms.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/playbooks/networking-cold-email-playbook"
                className="group flex items-center gap-2 rounded-xl bg-gold px-10 py-5 text-lg font-semibold text-navy transition-all hover:bg-white"
              >
                Get the Complete Playbook — $47
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/playbooks"
                className="rounded-xl border-2 border-white/20 px-8 py-4 text-base font-semibold text-white transition-all hover:border-gold hover:text-gold"
              >
                View All Playbooks
              </Link>
            </div>

            <p className="mt-6 text-xs text-white/40">
              Instant PDF download. No subscription. One-time purchase.
            </p>
          </div>
        </section>

        {/* Related Resources */}
        <section className="bg-white py-12">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <h3 className="text-lg font-bold text-navy mb-6 text-center">Related Resources</h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Link href="/cold-email-templates-investment-banking" className="rounded-lg border border-border p-4 hover:border-gold/40 transition-colors">
                <p className="text-sm font-semibold text-navy">Cold Email Templates</p>
                <p className="mt-1 text-xs text-charcoal/50">13 proven templates by scenario</p>
              </Link>
              <Link href="/networking-non-target-students-2026" className="rounded-lg border border-border p-4 hover:border-gold/40 transition-colors">
                <p className="text-sm font-semibold text-navy">Non-Target Networking 2026</p>
                <p className="mt-1 text-xs text-charcoal/50">Volume benchmarks and acceleration playbook</p>
              </Link>
              <Link href="/informational-interview-questions-banking" className="rounded-lg border border-border p-4 hover:border-gold/40 transition-colors">
                <p className="text-sm font-semibold text-navy">Informational Interview Questions</p>
                <p className="mt-1 text-xs text-charcoal/50">30 questions that impress bankers</p>
              </Link>
              <Link href="/cold-email-checklist" className="rounded-lg border border-border p-4 hover:border-gold/40 transition-colors">
                <p className="text-sm font-semibold text-navy">Free Cold Email Checklist</p>
                <p className="mt-1 text-xs text-charcoal/50">11-point pre-send checklist</p>
              </Link>
              <Link href="/blog/how-finance-jobs-are-actually-filled-2026" className="rounded-lg border border-border p-4 hover:border-gold/40 transition-colors">
                <p className="text-sm font-semibold text-navy">How Jobs Are Filled</p>
                <p className="mt-1 text-xs text-charcoal/50">Hard data on networking effectiveness</p>
              </Link>
              <Link href="/blog/networking-mastery-non-target-students" className="rounded-lg border border-border p-4 hover:border-gold/40 transition-colors">
                <p className="text-sm font-semibold text-navy">Non-Target Networking Guide</p>
                <p className="mt-1 text-xs text-charcoal/50">The 100-email strategy</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
