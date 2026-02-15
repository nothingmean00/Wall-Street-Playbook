import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { ArrowRight, CheckCircle, BookOpen, Calculator, TrendingUp, BarChart3, Layers, DollarSign } from "lucide-react"

export const metadata: Metadata = {
  title: "Finance Technical Interview Questions 2026 | Complete Prep Guide",
  description:
    "Master every technical question asked at Goldman Sachs, Morgan Stanley, Evercore, and top banks in 2026. Accounting, DCF, comps, M&A, LBO—with frequency tags showing what's tested most.",
  keywords: [
    "investment banking technical interview 2026",
    "IB interview questions 2026",
    "investment banking interview prep",
    "IB technical questions",
    "Goldman Sachs interview questions",
    "Evercore interview prep",
    "Morgan Stanley technical interview",
    "banking interview questions",
    "finance interview prep 2026",
  ],
  openGraph: {
    title: "Finance Technical Interview Questions 2026 | Complete Prep Guide",
    description:
      "Master every technical question asked at Goldman, Morgan Stanley, Evercore, and elite boutiques. 6 topic areas with frequency-tagged questions.",
    url: "https://wallstreetplaybook.org/ib-technical-interview-2026",
    images: [{ url: "https://wallstreetplaybook.org/og-interview-prep.jpg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://wallstreetplaybook.org/ib-technical-interview-2026",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://wallstreetplaybook.org/og-interview-prep.jpg"],
  },
}

const chapters = [
  {
    title: "Accounting Fundamentals",
    icon: BookOpen,
    description: "3-statement linkage, D&A walkthroughs, working capital, inventory write-downs",
    alwaysAsked: ["Walk me through the 3 financial statements", "How are they linked?", "D&A increases by $10—walk through the impact"],
    link: "/blog/accounting-interview-questions-investment-banking",
  },
  {
    title: "Enterprise Value & Equity Value",
    icon: Calculator,
    description: "EV bridge, diluted shares, treasury stock method, matching multiples",
    alwaysAsked: ["What's the difference between EV and equity value?", "Walk me through the EV bridge", "When would EV be less than equity value?"],
    link: "/blog/enterprise-value-vs-equity-value-explained",
  },
  {
    title: "DCF & Valuation",
    icon: TrendingUp,
    description: "6-step DCF, UFCF formula, terminal value, WACC, CAPM, sensitivity analysis",
    alwaysAsked: ["Walk me through a DCF", "How do you calculate WACC?", "What drives terminal value?"],
    link: "/blog/walk-me-through-dcf-perfect-answer",
  },
  {
    title: "Comparable Company Analysis",
    icon: BarChart3,
    description: "Trading comps process, precedent transactions, control premium, football field",
    alwaysAsked: ["Walk me through a comps analysis", "Why are transaction multiples higher?", "Which valuation method gives the highest value?"],
    link: "/blog/trading-comps-vs-precedent-transactions",
  },
  {
    title: "M&A & Merger Models",
    icon: Layers,
    description: "Accretion/dilution, P/E rule, goodwill, purchase price allocation, stock vs. cash",
    alwaysAsked: ["Is this deal accretive or dilutive?", "Walk me through a merger model", "What's goodwill?"],
    link: "/blog/accretion-dilution-analysis-explained",
  },
  {
    title: "Leveraged Buyouts",
    icon: DollarSign,
    description: "4 return drivers, sources & uses, debt stack, IRR/MOIC, LBO candidates",
    alwaysAsked: ["Walk me through an LBO", "What makes a good LBO candidate?", "What are the return drivers?"],
    link: "/blog/lbo-model-walkthrough-5-steps",
  },
]

export default function IBTechnicalInterview2026Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-navy pt-28 pb-16 lg:pt-32 lg:pb-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gold/10 px-4 py-2">
                <span className="text-sm font-medium text-gold">2026 Interview Season</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Finance Technical Interview Questions
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-white/70">
                The 6 topic areas tested at every bulge bracket and elite boutique. Each question tagged by how often it actually appears: <span className="text-gold font-semibold">Always Asked</span>, <span className="text-white/90">Frequently Asked</span>, or Sometimes Asked.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/playbooks/finance-technical-interview-guide"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-gold px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-gold/90"
                >
                  Get the Full 87-Page Guide — $79
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/ib-technical-cheat-sheet"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/5"
                >
                  Free: 20 Must-Know Questions
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* What Makes 2026 Different */}
        <section className="bg-off-white py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-2xl font-bold text-navy">What's Different About 2026 Technicals?</h2>
              <div className="mt-2 h-1 w-12 bg-gold" />
              <div className="mt-8 space-y-4 text-charcoal/80">
                <p>
                  The technical bar has risen significantly. With AI tools generating generic prep answers, interviewers now probe deeper on <strong>intuition and reasoning</strong>—not just whether you can recite a formula, but whether you understand <em>why</em> it works.
                </p>
                <p>
                  Three trends defining 2026 technical interviews:
                </p>
                <ul className="space-y-3 mt-4">
                  <li className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                    <span><strong>Multi-step follow-ups:</strong> "Walk me through a DCF" is no longer sufficient. Expect 3-4 progressively harder follow-ups testing edge cases and tradeoffs.</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                    <span><strong>Applied scenarios:</strong> Instead of "What is EV?", you'll get "Company X has convertible debt—how does that affect the EV bridge?" Real-world application matters.</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                    <span><strong>"Teach me" framing:</strong> "Explain WACC to a non-finance person." This tests communication skills alongside technical knowledge.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* The 6 Chapters */}
        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center mb-12">
              <h2 className="text-3xl font-bold text-navy">The 6 Technical Topics You Must Master</h2>
              <div className="mt-3 h-1 w-12 bg-gold mx-auto" />
              <p className="mt-4 text-charcoal/70">
                Every IB technical interview draws from these six areas. Here's what's tested in each—and the questions tagged "Always Asked."
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {chapters.map((chapter) => (
                <div key={chapter.title} className="rounded-xl border border-border bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold/10">
                      <chapter.icon className="h-5 w-5 text-gold" />
                    </div>
                    <h3 className="font-bold text-navy">{chapter.title}</h3>
                  </div>
                  <p className="text-sm text-charcoal/60 mb-4">{chapter.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    <p className="text-xs font-semibold text-gold uppercase tracking-wide">Always Asked:</p>
                    {chapter.alwaysAsked.map((q) => (
                      <div key={q} className="flex items-start gap-2">
                        <CheckCircle className="h-3.5 w-3.5 text-gold flex-shrink-0 mt-0.5" />
                        <span className="text-xs text-charcoal/70">{q}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={chapter.link}
                    className="inline-flex items-center gap-1 text-sm font-medium text-gold hover:text-gold/80 transition-colors"
                  >
                    Deep dive <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What Sets the Guide Apart */}
        <section className="bg-navy/5 py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-2xl font-bold text-navy">Why This Guide Is Different</h2>
              <div className="mt-2 h-1 w-12 bg-gold" />
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div className="p-5 bg-white rounded-lg border border-border">
                  <h3 className="font-semibold text-navy mb-2">Interview Frequency Tags</h3>
                  <p className="text-sm text-charcoal/70">Every concept labeled ALWAYS ASKED, FREQUENTLY ASKED, or SOMETIMES ASKED based on real interview data. Stop wasting time on rare questions.</p>
                </div>
                <div className="p-5 bg-white rounded-lg border border-border">
                  <h3 className="font-semibold text-navy mb-2">Dual-Format Answers</h3>
                  <p className="text-sm text-charcoal/70">30-second crisp answer for quick rounds + 3-minute deep dive for Superdays. Two versions of every major answer.</p>
                </div>
                <div className="p-5 bg-white rounded-lg border border-border">
                  <h3 className="font-semibold text-navy mb-2">Red Flag Warnings</h3>
                  <p className="text-sm text-charcoal/70">The exact mistakes that get candidates dinged. Often more valuable than knowing the right answer—because you won't make the errors everyone else makes.</p>
                </div>
                <div className="p-5 bg-white rounded-lg border border-border">
                  <h3 className="font-semibold text-navy mb-2">Self-Assessment Scorecards</h3>
                  <p className="text-sm text-charcoal/70">End-of-chapter scorecards so you can verify mastery before moving on. Know your weak spots before the interviewer finds them.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-navy py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold text-white">Stop Memorizing. Start Understanding.</h2>
              <p className="mt-4 text-white/70">
                88 pages. 6 chapters. Every question tagged by frequency. Dual-format answers. The technical prep that gets offers.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/playbooks/finance-technical-interview-guide"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-gold px-8 py-4 text-sm font-semibold text-navy transition-colors hover:bg-gold/90"
                >
                  Get the Finance Technical Interview Guide — $79
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <p className="mt-4 text-white/50 text-sm">30-day money-back guarantee. Instant PDF download.</p>
            </div>
          </div>
        </section>

        {/* Related Resources */}
        <section className="bg-off-white py-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h3 className="text-lg font-bold text-navy mb-6">Related Resources</h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Link href="/dcf-interview-questions-2026" className="p-4 bg-white rounded-lg border border-border hover:border-gold/50 transition-colors">
                <p className="font-medium text-navy text-sm">DCF Interview Questions 2026</p>
                <p className="text-xs text-charcoal/50 mt-1">6-step framework and follow-ups</p>
              </Link>
              <Link href="/ma-interview-questions-2026" className="p-4 bg-white rounded-lg border border-border hover:border-gold/50 transition-colors">
                <p className="font-medium text-navy text-sm">M&A Interview Questions 2026</p>
                <p className="text-xs text-charcoal/50 mt-1">Accretion/dilution, deal mechanics</p>
              </Link>
              <Link href="/lbo-interview-questions-2026" className="p-4 bg-white rounded-lg border border-border hover:border-gold/50 transition-colors">
                <p className="font-medium text-navy text-sm">LBO Interview Questions 2026</p>
                <p className="text-xs text-charcoal/50 mt-1">Return drivers, debt structure</p>
              </Link>
              <Link href="/accounting-interview-questions-finance" className="p-4 bg-white rounded-lg border border-border hover:border-gold/50 transition-colors">
                <p className="font-medium text-navy text-sm">Accounting for Finance Interviews</p>
                <p className="text-xs text-charcoal/50 mt-1">3-statement mastery</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
