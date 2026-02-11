import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { ArrowRight, CheckCircle, Brain, MessageSquare, Calculator, Target } from "lucide-react"

export const metadata: Metadata = {
  title: "PE Interview Prep 2026 | Technical & Behavioral Questions",
  description:
    "Complete private equity interview preparation for 2026. LBO mechanics, paper LBO framework, deal discussions, 'Why PE' answers, and behavioral questions asked at KKR, Blackstone, Apollo, and top funds.",
  keywords: [
    "PE interview questions 2026",
    "private equity interview prep",
    "PE technical questions",
    "PE behavioral questions",
    "LBO interview questions",
    "paper LBO interview",
    "why PE answer",
    "PE deal discussion",
    "private equity case study",
  ],
  openGraph: {
    title: "PE Interview Prep 2026 | Technical & Behavioral Questions",
    description:
      "Complete private equity interview preparation for 2026. Technical mastery, behavioral frameworks, and deal discussions.",
    url: "https://wallstreetplaybook.org/pe-interview-prep-2026",
  },
  alternates: {
    canonical: "https://wallstreetplaybook.org/pe-interview-prep-2026",
  },
}

const technicalTopics = [
  {
    category: "LBO Mechanics",
    icon: Calculator,
    questions: [
      "Walk me through an LBO",
      "What are sources and uses of funds?",
      "How do you calculate IRR and MOIC?",
      "What makes a good LBO candidate?",
      "How does leverage impact returns?",
      "Walk me through debt schedules",
    ],
  },
  {
    category: "Paper LBO",
    icon: Brain,
    questions: [
      "Solve this LBO in 10 minutes (pen & paper)",
      "What's the Rule of 72/114/144?",
      "How do you approximate IRR quickly?",
      "What drives returns in this scenario?",
      "How would returns change if we paid down more debt?",
      "What exit multiple do we need for 20% IRR?",
    ],
  },
  {
    category: "Accounting & Valuation",
    icon: Target,
    questions: [
      "Walk me through purchase accounting",
      "How does goodwill get created in an LBO?",
      "What happens to deferred revenue in an acquisition?",
      "How do NOLs work in an LBO?",
      "Enterprise value vs. equity value bridge",
      "How do convertibles affect the EV bridge?",
    ],
  },
  {
    category: "Credit Concepts",
    icon: CheckCircle,
    questions: [
      "Maintenance vs. incurrence covenants",
      "What's PIK interest?",
      "How does a revolver work in an LBO?",
      "What's the typical leverage for an LBO?",
      "How do you size debt capacity?",
      "Senior vs. subordinated debt",
    ],
  },
]

const behavioralQuestions = [
  {
    question: "Why PE?",
    framework: "Transition from advisor to investor, long-term value creation, ownership of decisions",
    mistake: "Mentioning work-life balance or money as primary motivators",
  },
  {
    question: "Why this firm?",
    framework: "Reference 2-3 specific deals, investment strategy alignment, conversations with team members",
    mistake: "Generic answers like 'leading firm' or 'great culture'",
  },
  {
    question: "Walk me through a deal you worked on",
    framework: "60-second structure: Overview → Your role → Business description → Investment thesis → Outcome",
    mistake: "Rambling past 60 seconds or not having investment thesis ready",
  },
  {
    question: "What multiple would you pay for this company?",
    framework: "Have a view and defend it with comps, growth profile, and risk factors",
    mistake: "Saying 'it depends' without offering a specific answer",
  },
]

const paperLboRules = [
  { rule: "Rule of 72", description: "Years to 2x = 72 ÷ IRR", example: "2x in 5 years ≈ 15% IRR" },
  { rule: "Rule of 114", description: "Years to 3x = 114 ÷ IRR", example: "3x in 5 years ≈ 23% IRR" },
  { rule: "Rule of 144", description: "Years to 4x = 144 ÷ IRR", example: "4x in 5 years ≈ 29% IRR" },
]

export default function PEInterviewPrep2026Page() {
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
              <Brain className="w-4 h-4 text-gold" />
              <span className="text-xs font-semibold uppercase tracking-widest text-gold">2026 Prep Guide</span>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              PE Interview <span className="text-gradient-gold">Prep 2026</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/60 max-w-2xl mx-auto">
              Master the technical questions, behavioral frameworks, and deal discussions that determine 
              who gets offers at KKR, Blackstone, Apollo, and every top PE fund in 2026.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/playbooks/pe-recruiting-playbook"
                className="group flex items-center gap-2 rounded-xl bg-gold px-8 py-4 text-base font-semibold text-navy transition-all hover:bg-white"
              >
                Get 2026 PE Playbook
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="#technical"
                className="rounded-xl border-2 border-white/20 px-8 py-4 text-base font-semibold text-white transition-all hover:border-gold hover:text-gold"
              >
                View Questions
              </Link>
            </div>
          </div>
        </section>

        {/* Key Stats */}
        <section className="bg-gold py-6">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-3 gap-8 text-center text-navy">
              <div>
                <p className="text-2xl font-bold">10 min</p>
                <p className="text-sm">Paper LBO target</p>
              </div>
              <div>
                <p className="text-2xl font-bold">60 sec</p>
                <p className="text-sm">Deal walkthrough</p>
              </div>
              <div>
                <p className="text-2xl font-bold">72 hrs</p>
                <p className="text-sm">On-cycle timeline</p>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Questions */}
        <section id="technical" className="bg-cream py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">Technical Questions for 2026</h2>
              <div className="mt-2 h-1 w-20 bg-gold" />
              <p className="mt-4 text-charcoal/70">
                These are the core technical areas tested in PE interviews. You need to answer confidently and quickly.
              </p>

              <div className="mt-12 grid gap-8 lg:grid-cols-2">
                {technicalTopics.map((topic) => (
                  <div key={topic.category} className="rounded-2xl bg-white p-6 shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy">
                        <topic.icon className="h-5 w-5 text-gold" />
                      </div>
                      <h3 className="text-lg font-bold text-navy">{topic.category}</h3>
                    </div>
                    <ul className="space-y-2">
                      {topic.questions.map((q, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
                          <span className="text-sm text-charcoal/70">{q}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-12 rounded-2xl bg-navy p-8 text-center">
                <h3 className="text-xl font-bold text-white">Get Full Technical Prep</h3>
                <p className="mt-2 text-white/60">
                  The 2026 PE Playbook includes detailed answers to every technical question with worked examples.
                </p>
                <Link
                  href="/playbooks/pe-recruiting-playbook"
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gold px-6 py-3 text-sm font-semibold text-navy hover:bg-white transition-colors"
                >
                  Get the 2026 PE Playbook — $67
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Paper LBO Framework */}
        <section className="bg-navy py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-white sm:text-4xl text-center">Paper LBO: The 10-Minute Framework</h2>
              <p className="mt-4 text-center text-white/60">
                Every PE interview includes a paper LBO. Memorize these rules to calculate IRR without Excel.
              </p>

              <div className="mt-12 space-y-4">
                {paperLboRules.map((rule) => (
                  <div key={rule.rule} className="rounded-xl bg-white/10 p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-bold text-gold">{rule.rule}</h3>
                        <p className="mt-1 text-white/70">{rule.description}</p>
                      </div>
                      <div className="px-4 py-2 rounded-lg bg-white/10 text-sm font-mono text-white">
                        {rule.example}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-xl bg-gold/20 border border-gold/30 p-6 text-center">
                <p className="text-white font-medium mb-2">Want this as a printable cheat sheet?</p>
                <Link
                  href="/paper-lbo-template"
                  className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-navy hover:bg-gold transition-colors"
                >
                  Get Free Paper LBO Template
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="mt-12 rounded-2xl bg-white/10 p-8">
                <h3 className="text-xl font-bold text-white mb-4">Quick Reference: 5-Year Hold IRR</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                  {[
                    { moic: "2.0x", irr: "~15%" },
                    { moic: "2.5x", irr: "~20%" },
                    { moic: "3.0x", irr: "~25%" },
                    { moic: "3.5x", irr: "~28%" },
                  ].map((item) => (
                    <div key={item.moic} className="rounded-lg bg-white/10 p-4">
                      <p className="text-2xl font-bold text-gold">{item.moic}</p>
                      <p className="text-sm text-white/60">{item.irr} IRR</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Behavioral Questions */}
        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">Behavioral Questions That Matter</h2>
              <div className="mt-2 h-1 w-20 bg-gold" />
              <p className="mt-4 text-charcoal/70">
                Technical skills are table stakes. These behavioral questions determine if you get the offer.
              </p>

              <div className="mt-12 space-y-6">
                {behavioralQuestions.map((item) => (
                  <div key={item.question} className="rounded-2xl border border-border bg-off-white/50 p-6">
                    <div className="flex items-start gap-3 mb-4">
                      <MessageSquare className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                      <h3 className="text-lg font-bold text-navy">&quot;{item.question}&quot;</h3>
                    </div>
                    <div className="ml-8 space-y-3">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-gold mb-1">Framework</p>
                        <p className="text-sm text-charcoal/70">{item.framework}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-red-500 mb-1">Common Mistake</p>
                        <p className="text-sm text-charcoal/70">{item.mistake}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Deal Discussion */}
        <section className="bg-cream py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">The 60-Second Deal Walkthrough</h2>
              <div className="mt-2 h-1 w-20 bg-gold" />
              <p className="mt-4 text-charcoal/70">
                &quot;Walk me through a deal you worked on&quot; — this is your chance to show investment judgment.
              </p>

              <div className="mt-12 space-y-4">
                {[
                  { time: "10 sec", step: "Transaction Overview", desc: "[Bank] advised [Company] on its sale to [Buyer] for approximately [$X] billion." },
                  { time: "10 sec", step: "Your Role", desc: "I was the lead analyst responsible for building the merger model, coordinating diligence, and supporting management presentations." },
                  { time: "15 sec", step: "Business Description", desc: "[Company] is a [description] with approximately [$X] revenue and [$X] EBITDA. The business [key characteristics]." },
                  { time: "20 sec", step: "Investment Thesis", desc: "The buyer was attracted to [3 key investment merits]. The strategic rationale centered on [synergy thesis or growth opportunity]." },
                  { time: "5 sec", step: "Outcome", desc: "The deal closed in [month/year] at approximately [X.X]x EBITDA." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 rounded-xl bg-white p-4 shadow-sm">
                    <div className="flex h-12 w-16 flex-shrink-0 items-center justify-center rounded-lg bg-navy text-gold text-sm font-bold">
                      {item.time}
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy">{item.step}</h3>
                      <p className="mt-1 text-sm text-charcoal/60 italic">&quot;{item.desc}&quot;</p>
                    </div>
                  </div>
                ))}
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
                <Link href="/pe-headhunters-2026" className="group rounded-xl border border-border bg-off-white/50 p-4 hover:border-gold transition-colors">
                  <p className="font-semibold text-navy group-hover:text-gold transition-colors">PE Headhunters 2026</p>
                  <p className="mt-1 text-sm text-charcoal/60">The 7 firms that control megafund access</p>
                </Link>
                <Link href="/pe-compensation-2026" className="group rounded-xl border border-border bg-off-white/50 p-4 hover:border-gold transition-colors">
                  <p className="font-semibold text-navy group-hover:text-gold transition-colors">PE Compensation 2026</p>
                  <p className="mt-1 text-sm text-charcoal/60">Associate to Partner salary data</p>
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
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready for 2026 PE Interviews?</h2>
            <p className="mt-4 text-lg text-white/60">
              The 2026 PE Playbook has everything—42 pages of technical prep, behavioral frameworks, 
              headhunter strategy, compensation data, and contrarian insights.
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
                href="/playbooks/lbo-modeling-course"
                className="rounded-xl border-2 border-white/20 px-8 py-4 text-base font-semibold text-white hover:border-gold hover:text-gold transition-colors"
              >
                LBO Modeling Course — $79
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
