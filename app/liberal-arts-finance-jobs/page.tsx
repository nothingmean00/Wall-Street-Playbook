import type { Metadata } from "next"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import Link from "next/link"
import { ArrowRight, CheckCircle, BookOpen, MessageSquare, Brain, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Liberal Arts to Finance | English, History, Poli Sci Majors in Banking",
  description:
    "How liberal arts majors break into finance. Yes, banks hire English, history, and political science majors—here's why and how to position your non-business degree.",
  keywords: [
    "liberal arts finance jobs",
    "english major investment banking",
    "history major finance",
    "political science finance career",
    "non business degree banking",
    "humanities to finance",
    "liberal arts wall street",
    "english major banking",
  ],
  openGraph: {
    title: "Liberal Arts to Finance | Wall Street Playbook",
    description: "Your English degree isn't a liability. Here's how to use it.",
    url: "https://wallstreetplaybook.org/liberal-arts-finance-jobs",
  },
  alternates: {
    canonical: "https://wallstreetplaybook.org/liberal-arts-finance-jobs",
  },
}

export default function LiberalArtsFinanceJobsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-navy pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-gold/10 px-4 py-2 text-sm font-medium text-gold mb-6">
              <BookOpen className="h-4 w-4" />
              For Non-Business Majors
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Liberal Arts Major? <span className="text-gold">You Can Still Get In.</span>
            </h1>
            <p className="mt-6 text-lg text-white/70">
              Goldman Sachs holds special recruiting sessions for liberal arts majors. BlackRock's COO 
              actively seeks them out. Here's why—and how to position yourself.
            </p>
          </div>
        </section>

        {/* The Reality */}
        <section className="bg-gold py-6">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <p className="text-center text-navy font-medium">
              <strong>Fact:</strong> History is one of the most common degrees among investment bankers and traders. 
              Your major isn't the problem—how you position it might be.
            </p>
          </div>
        </section>

        {/* Why Banks Want You */}
        <section className="bg-cream py-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-navy">Why Banks Actually Want Liberal Arts Majors</h2>
            <div className="mt-2 h-1 w-16 bg-gold" />
            <p className="mt-6 text-charcoal/70">
              This isn't charity. Banks have specific reasons to hire people who studied something other than finance.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {[
                {
                  icon: Brain,
                  title: "Different Thinking",
                  desc: "Liberal arts training teaches you to question assumptions and think from multiple angles. Finance teams full of finance majors can develop blind spots.",
                },
                {
                  icon: MessageSquare,
                  title: "Communication Skills",
                  desc: "You can write clearly and explain complex ideas. Most finance majors can't. This matters when you're presenting to clients.",
                },
                {
                  icon: BookOpen,
                  title: "Understanding Human Behavior",
                  desc: "History and literature teach you why people make decisions. Markets are driven by human psychology, not just spreadsheets.",
                },
                {
                  icon: Users,
                  title: "Client Relationships",
                  desc: "You can carry a conversation beyond stock prices. Clients are people. They want bankers who are interesting, not just technical.",
                },
              ].map((item, i) => {
                const Icon = item.icon
                return (
                  <div key={i} className="rounded-xl bg-white p-6 shadow-sm">
                    <Icon className="h-6 w-6 text-gold" />
                    <h3 className="mt-4 font-semibold text-navy">{item.title}</h3>
                    <p className="mt-2 text-sm text-charcoal/70">{item.desc}</p>
                  </div>
                )
              })}
            </div>

            <div className="mt-10 rounded-xl bg-white p-6 shadow-sm">
              <p className="text-sm text-charcoal/70 italic">
                "In studying history, you are trying to figure out why people made decisions... Investment banking 
                also involves similar efforts to analyze and weigh information and then draw conclusions."
              </p>
              <p className="mt-2 text-sm font-medium text-navy">— Goldman Sachs Managing Director, History Major</p>
            </div>
          </div>
        </section>

        {/* What You Need */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-navy">What You Need to Compensate</h2>
            <div className="mt-2 h-1 w-16 bg-gold" />
            <p className="mt-6 text-charcoal/70">
              Your major is fine. But you need to prove you can do the technical work.
            </p>

            <div className="mt-10 space-y-4">
              {[
                {
                  title: "Take Finance & Accounting Courses",
                  desc: "At minimum: Financial Accounting, Corporate Finance, and Investments. If your school doesn't offer them, take them online or at a community college.",
                },
                {
                  title: "Learn Financial Modeling",
                  desc: "Complete a Wall Street Prep, BIWS, or CFI course. Build models in Excel. This proves you can do the technical work.",
                },
                {
                  title: "Get a Finance Internship",
                  desc: "Any finance experience—even corporate finance at a random company—proves you've tested your interest and can do the work.",
                },
                {
                  title: "Maintain a High GPA",
                  desc: "A 3.8 in English signals intellectual capability. A 3.2 gives them an excuse to filter you out.",
                },
                {
                  title: "Keep Standardized Test Scores on Resume",
                  desc: "A 1550 SAT or 35 ACT signals analytical ability regardless of major. Keep it on until you have enough work experience.",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-lg bg-off-white">
                  <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-navy">{item.title}</p>
                    <p className="text-sm text-charcoal/70 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How to Position It */}
        <section className="bg-navy py-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white">How to Position Your Major in Interviews</h2>
            <div className="mt-2 h-1 w-16 bg-gold" />

            <div className="mt-10 space-y-6">
              <div className="rounded-xl bg-white/5 p-6">
                <p className="text-white/60 text-sm mb-2">When they ask "Why didn't you major in finance?"</p>
                <p className="text-white font-medium">Don't be defensive. Be confident.</p>
                <div className="mt-4 p-4 bg-green-500/10 rounded-lg">
                  <p className="text-sm text-green-300">
                    "I chose history because I'm genuinely interested in understanding why events unfold the way they do. 
                    That's the same skill set I apply to analyzing companies—understanding the narrative behind the numbers, 
                    what's driving management decisions, and where the industry is heading. I've supplemented that with 
                    [finance courses/modeling training/internship] to build the technical foundation."
                  </p>
                </div>
              </div>

              <div className="rounded-xl bg-white/5 p-6">
                <p className="text-white/60 text-sm mb-2">Frame your major as an asset, not an obstacle:</p>
                <ul className="space-y-3 text-sm text-white/80">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                    <span><strong>History:</strong> "I analyze why decisions were made with incomplete information—same skill for evaluating management teams"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                    <span><strong>English:</strong> "I communicate complex ideas clearly—critical when explaining deals to clients"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                    <span><strong>Political Science:</strong> "I understand how power structures and incentives drive decisions—directly applicable to M&A"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                    <span><strong>Philosophy:</strong> "I construct rigorous arguments and identify logical flaws—essential for investment theses"</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Real Examples */}
        <section className="bg-cream py-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-navy">Real People Who Did This</h2>
            <div className="mt-2 h-1 w-16 bg-gold" />

            <div className="mt-10 space-y-4">
              {[
                "29-year-old hedge fund founder who majored in History at Harvard now exclusively hires liberal arts majors",
                "BlackRock COO has stated the firm wants to recruit analysts who 'have nothing to do with finance or technology'",
                "Goldman Sachs holds dedicated recruiting sessions specifically for liberal arts majors",
                "Multiple bank managing directors came from English, History, and Philosophy backgrounds",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-lg bg-white shadow-sm">
                  <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-charcoal/80">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What Works Best */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-navy">Which Finance Paths Work Best for Liberal Arts</h2>
            <div className="mt-2 h-1 w-16 bg-gold" />

            <div className="mt-10 space-y-4">
              <div className="p-4 rounded-lg bg-green-50 border border-green-200">
                <p className="font-semibold text-green-800 mb-2">Strong Fit</p>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Investment Banking (client-facing, communication-heavy)</li>
                  <li>• Sales & Trading (relationship skills matter)</li>
                  <li>• Equity Research (writing and analysis)</li>
                  <li>• Wealth Management (client relationships)</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-yellow-50 border border-yellow-200">
                <p className="font-semibold text-yellow-800 mb-2">Possible With Extra Prep</p>
                <ul className="text-sm text-yellow-700 space-y-1">
                  <li>• Private Equity (need IB first, then your skills transfer)</li>
                  <li>• Hedge Funds (if you can demonstrate analytical rigor)</li>
                  <li>• Corporate Finance (learn the technical skills)</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-red-50 border border-red-200">
                <p className="font-semibold text-red-800 mb-2">Harder Fit</p>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>• Quantitative roles (need math/stats background)</li>
                  <li>• Financial engineering (need technical degree)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-navy py-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-white">
              Need Help Positioning Your Liberal Arts Background?
            </h2>
            <p className="mt-4 text-white/60">
              Your resume needs to show why your major is an asset, not explain it away. We can help you frame it right.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/submit-resume?service=resume-review"
                className="group flex items-center gap-2 rounded-xl bg-gold px-8 py-4 text-base font-semibold text-navy hover:bg-white transition-colors"
              >
                Get Resume Review — $197
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
