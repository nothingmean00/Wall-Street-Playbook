import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { ArrowRight, CheckCircle, XCircle, Mail, Clock, AlertTriangle, BookOpen } from "lucide-react"

export const metadata: Metadata = {
  title: "Cold Email Templates for Investment Banking | 13 Proven Templates",
  description:
    "Get proven cold email templates for investment banking networking. The 5-sentence framework, subject line formulas, follow-up cadence, and 10 mistakes to avoid. Used by 1,000+ candidates to land IB interviews.",
  keywords: [
    "cold email templates investment banking",
    "cold email banker template",
    "networking email finance",
    "cold email wall street",
    "investment banking cold email",
    "IB networking email template",
    "cold outreach investment banking",
    "how to cold email a banker",
    "informational interview email finance",
    "wall street networking email",
  ],
  openGraph: {
    title: "Cold Email Templates for Investment Banking | 13 Proven Templates",
    description:
      "The 5-sentence framework and 13 proven cold email templates that get responses from Wall Street bankers.",
    url: "https://wallstreetplaybook.org/cold-email-templates-investment-banking",
    images: [{ url: "https://wallstreetplaybook.org/og-recruiting.jpg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://wallstreetplaybook.org/cold-email-templates-investment-banking",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://wallstreetplaybook.org/og-recruiting.jpg"],
  },
}

const subjectLineFormulas = [
  {
    formula: "[School Name] [Year] — Quick Question on [Group/Coverage]",
    example: "Michigan State Junior — Quick Question on Healthcare M&A",
    whyItWorks: "Leverages school identity and shows specific interest in their group",
  },
  {
    formula: "[Mutual Connection] Suggested I Reach Out",
    example: "John Smith Suggested I Reach Out",
    whyItWorks: "Warm introductions get 70-90% open rates vs. 15-25% for cold emails",
  },
  {
    formula: "Aspiring [Role] — Would Love Your Perspective",
    example: "Aspiring IB Analyst — Would Love Your Perspective",
    whyItWorks: "Flatters the recipient and sets clear expectations for the ask",
  },
  {
    formula: "[Shared Background] → [Their Current Firm]",
    example: "Fellow CFA Candidate → Evercore TMT",
    whyItWorks: "Creates instant common ground and curiosity",
  },
  {
    formula: "Quick Question from a [Your Background] Transitioning to Finance",
    example: "Quick Question from an Engineer Transitioning to Finance",
    whyItWorks: "Unique background stands out in a sea of generic finance student emails",
  },
]

const coldEmailMistakes = [
  "Writing more than 5 sentences — bankers scan emails in 5-10 seconds",
  "Leading with your life story instead of why you&apos;re reaching out to them specifically",
  "Asking for a job directly — the goal is an informational conversation, not an application",
  "Using a generic template with no personalization — \"Dear Sir/Madam\" is an instant delete",
  "Sending at the wrong time — Friday afternoons and Monday mornings get buried",
  "Not including a specific, easy ask — \"Can we chat sometime?\" is too vague",
  "Following up too aggressively — daily emails will get you blacklisted",
  "CC&apos;ing multiple bankers at the same firm — they talk to each other",
  "Using your school email with a joke address — firstname.lastname@school.edu only",
  "Forgetting to proofread — one typo in a 5-sentence email signals carelessness",
]

export default function ColdEmailTemplatesPage() {
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
              <Mail className="w-4 h-4 text-gold" />
              <span className="text-xs font-semibold uppercase tracking-widest text-gold">13 Proven Templates</span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Cold Email Templates for{" "}
              <span className="text-gradient-gold">Investment Banking</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/60 max-w-2xl mx-auto">
              The exact 5-sentence framework and 13 battle-tested email templates that get responses from
              Wall Street bankers. Including subject line formulas, follow-up cadence, and the 10 mistakes
              that get you blacklisted.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/playbooks/networking-cold-email-playbook"
                className="group flex items-center gap-2 rounded-xl bg-gold px-8 py-4 text-base font-semibold text-navy transition-all hover:bg-white"
              >
                Get All 13 Templates — $47
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

        {/* The 5-Sentence Framework */}
        <section className="bg-cream py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">
                The 5-Sentence Framework That Gets Responses
              </h2>
              <div className="mt-2 h-1 w-20 bg-gold" />

              <div className="mt-8 prose prose-lg max-w-none text-charcoal/80">
                <p>
                  Bankers receive dozens of cold emails every week. Most get deleted in under 5 seconds.
                  The ones that get responses follow a specific structure—five sentences, each with a
                  clear purpose. No fluff, no filler, no autobiography.
                </p>
              </div>

              <div className="mt-12 space-y-4">
                {[
                  {
                    num: 1,
                    title: "The Hook",
                    desc: "One sentence establishing credibility and context. Who you are in 10 words or fewer.",
                    example: "\"I'm a junior at Michigan State studying finance with a focus on healthcare.\"",
                  },
                  {
                    num: 2,
                    title: "Brief Background",
                    desc: "One sentence on your most relevant credential. Not your life story—your single strongest signal.",
                    example: "\"I recently completed a valuation internship at a regional boutique and built 3 DCF models.\"",
                  },
                  {
                    num: 3,
                    title: "Why Them Specifically",
                    desc: "One sentence showing you did your homework. Reference their deals, background, or group.",
                    example: "\"Your work on the [Company] acquisition in the healthcare space really caught my attention.\"",
                  },
                  {
                    num: 4,
                    title: "The Ask",
                    desc: "One sentence with a specific, low-commitment request. Make it easy to say yes.",
                    example: "\"Would you have 15 minutes this week or next for a brief phone call?\"",
                  },
                  {
                    num: 5,
                    title: "The Graceful Exit",
                    desc: "One sentence that gives them an easy out and shows respect for their time.",
                    example: "\"I completely understand if you're too busy—any guidance would be greatly appreciated.\"",
                  },
                ].map((step) => (
                  <div key={step.num} className="rounded-2xl bg-white p-6 shadow-sm">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy text-gold font-bold">
                        {step.num}
                      </div>
                      <h3 className="text-lg font-bold text-navy">{step.title}</h3>
                    </div>
                    <p className="text-charcoal/70 mb-3">{step.desc}</p>
                    <div className="rounded-lg bg-off-white p-3 border-l-4 border-gold">
                      <p className="text-sm text-charcoal/60 italic">{step.example}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl bg-navy p-6 text-center">
                <p className="text-white/80 text-sm">
                  <strong className="text-gold">The math:</strong> 5 sentences × ~15 words each = 75 words total.
                  That&apos;s a 30-second read. Exactly what a busy MD or VP needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Template Previews */}
        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">
                Preview: 4 of Our 13 Templates
              </h2>
              <div className="mt-2 h-1 w-20 bg-gold" />
              <p className="mt-4 text-charcoal/70">
                Each template is customizable for your specific background and target. Here are four
                of the most-used templates from the full playbook.
              </p>

              {/* Template 1 */}
              <div className="mt-12 rounded-2xl border border-border overflow-hidden">
                <div className="bg-navy px-6 py-4 flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gold text-navy font-bold text-sm">1</div>
                  <div>
                    <h3 className="font-bold text-white">Student to Alumni Template</h3>
                    <p className="text-xs text-white/50">Best for: Reaching out to alumni from your school at target firms</p>
                  </div>
                </div>
                <div className="bg-off-white/50 p-6 font-mono text-sm text-charcoal/80 space-y-3">
                  <p className="text-gold font-semibold">Subject: [School] [Year] — Quick Question on [Their Group]</p>
                  <hr className="border-border" />
                  <p>Hi [First Name],</p>
                  <p>
                    I&apos;m a [year] at [School] studying [major], and I came across your profile through our
                    alumni network. Your path from [School] to [Their Firm]&apos;s [Group] is exactly the trajectory
                    I&apos;m working toward.
                  </p>
                  <p>
                    Would you have 15 minutes for a brief call? I&apos;d love to hear how you made the transition
                    and any advice you&apos;d have for someone following in your footsteps.
                  </p>
                  <p>Completely understand if you&apos;re too busy. Either way, thanks for being such a great
                    representative of [School] on the Street.</p>
                  <p>Best,<br />[Your Name]</p>
                </div>
                <div className="bg-white px-6 py-3 border-t border-border">
                  <p className="text-xs text-charcoal/50">
                    <strong className="text-gold">Response rate:</strong> 20-40% (alumni connection significantly boosts open and reply rates)
                  </p>
                </div>
              </div>

              {/* Template 2 */}
              <div className="mt-8 rounded-2xl border border-border overflow-hidden">
                <div className="bg-navy px-6 py-4 flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gold text-navy font-bold text-sm">2</div>
                  <div>
                    <h3 className="font-bold text-white">Non-Target Cold Outreach Template</h3>
                    <p className="text-xs text-white/50">Best for: Cold emails when you have no alumni connection at the firm</p>
                  </div>
                </div>
                <div className="bg-off-white/50 p-6 font-mono text-sm text-charcoal/80 space-y-3">
                  <p className="text-gold font-semibold">Subject: Aspiring IB Analyst — Impressed by [Their Deal/Article]</p>
                  <hr className="border-border" />
                  <p>Hi [First Name],</p>
                  <p>
                    I&apos;m a [year] at [School] and I recently read about [Their Firm]&apos;s role in the
                    [specific deal/transaction]. The [specific detail about the deal] really stood out to me.
                  </p>
                  <p>
                    I&apos;ve been building my technical skills through [relevant experience—coursework,
                    internship, or project] and am targeting investment banking for my career.
                  </p>
                  <p>
                    Would you have 15 minutes for a brief call? I&apos;d love to hear your perspective on
                    what makes [Their Group] unique.
                  </p>
                  <p>I understand you&apos;re incredibly busy—any time would be greatly appreciated.</p>
                  <p>Best,<br />[Your Name]</p>
                </div>
                <div className="bg-white px-6 py-3 border-t border-border">
                  <p className="text-xs text-charcoal/50">
                    <strong className="text-gold">Response rate:</strong> 3-7% for non-targets (volume is key — send 100-200+ of these)
                  </p>
                </div>
              </div>

              {/* Template 3 */}
              <div className="mt-8 rounded-2xl border border-border overflow-hidden">
                <div className="bg-navy px-6 py-4 flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gold text-navy font-bold text-sm">3</div>
                  <div>
                    <h3 className="font-bold text-white">Career Switcher Template</h3>
                    <p className="text-xs text-white/50">Best for: Engineers, accountants, military, or other professionals pivoting to IB</p>
                  </div>
                </div>
                <div className="bg-off-white/50 p-6 font-mono text-sm text-charcoal/80 space-y-3">
                  <p className="text-gold font-semibold">Subject: [Current Role] → IB Transition — Would Value Your Insight</p>
                  <hr className="border-border" />
                  <p>Hi [First Name],</p>
                  <p>
                    I&apos;m currently a [Your Current Role] at [Company] and I&apos;m preparing to transition
                    into investment banking. I noticed you also came from a [similar/non-traditional]
                    background before joining [Their Firm].
                  </p>
                  <p>
                    Your career path really resonated with me—I&apos;d love to learn how you navigated that
                    transition and what advice you&apos;d give someone making the same move.
                  </p>
                  <p>
                    Would you have 15 minutes for a quick call? I understand you&apos;re busy and I&apos;d be
                    incredibly grateful for any time.
                  </p>
                  <p>Thanks so much,<br />[Your Name]</p>
                </div>
                <div className="bg-white px-6 py-3 border-t border-border">
                  <p className="text-xs text-charcoal/50">
                    <strong className="text-gold">Key advantage:</strong> Targeting people with similar backgrounds creates instant rapport
                  </p>
                </div>
              </div>

              {/* Template 5 (Headhunter) */}
              <div className="mt-8 rounded-2xl border border-border overflow-hidden">
                <div className="bg-navy px-6 py-4 flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gold text-navy font-bold text-sm">5</div>
                  <div>
                    <h3 className="font-bold text-white">Headhunter Outreach Template</h3>
                    <p className="text-xs text-white/50">Best for: Getting on headhunter radars for off-cycle or lateral opportunities</p>
                  </div>
                </div>
                <div className="bg-off-white/50 p-6 font-mono text-sm text-charcoal/80 space-y-3">
                  <p className="text-gold font-semibold">Subject: [Current Role/School] — Interested in IB Opportunities</p>
                  <hr className="border-border" />
                  <p>Hi [First Name],</p>
                  <p>
                    I&apos;m a [your background] currently [at School/at Company] and I&apos;m actively
                    exploring analyst-level investment banking opportunities. I understand your firm
                    specializes in placing candidates in [their focus area].
                  </p>
                  <p>
                    I have [key credential: GPA, relevant experience, certifications] and am
                    particularly interested in [industry group or type of bank].
                  </p>
                  <p>
                    I&apos;d love to introduce myself and share my resume whenever you have a moment.
                    Happy to work around your schedule.
                  </p>
                  <p>Best regards,<br />[Your Name]</p>
                </div>
                <div className="bg-white px-6 py-3 border-t border-border">
                  <p className="text-xs text-charcoal/50">
                    <strong className="text-gold">Pro tip:</strong> Headhunters want to place you — make their job easy by being specific about what you want
                  </p>
                </div>
              </div>

              <div className="mt-10 text-center">
                <p className="text-charcoal/60 text-sm mb-4">
                  These are 4 of 13 templates in the full playbook. The complete set includes templates for
                  lateral hires, MBA candidates, diversity outreach, follow-up sequences, thank-you notes, and more.
                </p>
                <Link
                  href="/playbooks/networking-cold-email-playbook"
                  className="inline-flex items-center gap-2 rounded-xl bg-gold px-8 py-4 text-base font-semibold text-navy hover:bg-navy hover:text-white transition-colors"
                >
                  Get All 13 Templates — $47
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Subject Line Formulas */}
        <section className="bg-navy py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white sm:text-4xl">
                  5 Proven Subject Line Formulas
                </h2>
                <p className="mt-4 text-white/60">
                  Your subject line determines whether your email gets opened or buried. These five formulas
                  have been tested across 1,000+ cold emails with the highest open rates.
                </p>
              </div>

              <div className="overflow-hidden rounded-2xl border border-white/10">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10 bg-white/5">
                      <th className="px-4 py-4 text-left text-sm font-semibold text-gold">#</th>
                      <th className="px-4 py-4 text-left text-sm font-semibold text-gold">Formula</th>
                      <th className="px-4 py-4 text-left text-sm font-semibold text-gold hidden md:table-cell">Example</th>
                      <th className="px-4 py-4 text-left text-sm font-semibold text-gold hidden lg:table-cell">Why It Works</th>
                    </tr>
                  </thead>
                  <tbody>
                    {subjectLineFormulas.map((item, i) => (
                      <tr key={i} className={i !== subjectLineFormulas.length - 1 ? "border-b border-white/10" : ""}>
                        <td className="px-4 py-4 text-sm font-bold text-gold">{i + 1}</td>
                        <td className="px-4 py-4 text-sm text-white/90 font-medium">{item.formula}</td>
                        <td className="px-4 py-4 text-sm text-white/60 hidden md:table-cell italic">{item.example}</td>
                        <td className="px-4 py-4 text-sm text-white/50 hidden lg:table-cell">{item.whyItWorks}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-8 rounded-xl bg-white/10 p-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white/80 text-sm">
                      <strong className="text-gold">Never use these subject lines:</strong>{" "}
                      &quot;Seeking Advice&quot;, &quot;Informational Interview Request&quot;, &quot;Can We Chat?&quot;,
                      or anything with &quot;Please&quot; in it. They scream mass email and get filtered out.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 10 Cold Email Mistakes */}
        <section className="bg-off-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">
                10 Cold Email Mistakes That Get You Blacklisted
              </h2>
              <div className="mt-2 h-1 w-20 bg-gold" />
              <p className="mt-4 text-charcoal/70">
                We&apos;ve reviewed thousands of networking emails. These are the mistakes that tank your
                response rate—or worse, get your name flagged at the firm.
              </p>

              <div className="mt-12 space-y-4">
                {coldEmailMistakes.map((mistake, i) => (
                  <div key={i} className="flex items-start gap-4 rounded-xl bg-white p-5 shadow-sm">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-red-100">
                      <XCircle className="h-5 w-5 text-red-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-charcoal/80">
                        <span className="font-bold text-navy">#{i + 1}:</span>{" "}
                        <span dangerouslySetInnerHTML={{ __html: mistake }} />
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl bg-navy p-6">
                <p className="text-white/80 text-sm text-center">
                  <strong className="text-gold">The bottom line:</strong> Every mistake above is a signal to the banker that
                  you lack attention to detail — the #1 skill they evaluate in analyst candidates.
                  Your cold email <em>is</em> your first work product.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Follow-Up Cadence */}
        <section className="bg-cream py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">
                The Optimal Follow-Up Cadence
              </h2>
              <div className="mt-2 h-1 w-20 bg-gold" />
              <p className="mt-4 text-charcoal/70">
                Most people either never follow up (leaving 40-60% of potential responses on the table)
                or follow up too aggressively (getting blacklisted). Here&apos;s the proven cadence.
              </p>

              <div className="mt-12 relative">
                {/* Timeline line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gold/30" />

                <div className="space-y-8">
                  {/* Day 1 */}
                  <div className="relative flex items-start gap-6">
                    <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gold">
                      <Clock className="h-6 w-6 text-navy" />
                    </div>
                    <div className="flex-1 rounded-2xl bg-white p-6 shadow-sm">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm font-bold text-gold">Day 1</span>
                        <span className="text-sm text-charcoal/50">Initial Outreach</span>
                      </div>
                      <p className="text-charcoal/80">
                        Send your initial email using the 5-sentence framework. Send Tuesday–Thursday
                        between 7–9 AM or 5–7 PM (their time zone). Avoid Mondays and Fridays.
                      </p>
                    </div>
                  </div>

                  {/* Day 7 */}
                  <div className="relative flex items-start gap-6">
                    <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gold">
                      <Clock className="h-6 w-6 text-navy" />
                    </div>
                    <div className="flex-1 rounded-2xl bg-white p-6 shadow-sm">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm font-bold text-gold">Day 7</span>
                        <span className="text-sm text-charcoal/50">First Follow-Up</span>
                      </div>
                      <p className="text-charcoal/80">
                        Short bump email: &quot;Hi [Name], just wanted to bump this to the top of your
                        inbox. I know you&apos;re busy — would love to connect whenever works for you.&quot;
                        Keep it to 2 sentences max. Reply to your original thread.
                      </p>
                    </div>
                  </div>

                  {/* Day 14 */}
                  <div className="relative flex items-start gap-6">
                    <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gold">
                      <Clock className="h-6 w-6 text-navy" />
                    </div>
                    <div className="flex-1 rounded-2xl bg-white p-6 shadow-sm">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm font-bold text-gold">Day 14</span>
                        <span className="text-sm text-charcoal/50">Final Follow-Up</span>
                      </div>
                      <p className="text-charcoal/80">
                        Last attempt with a value-add: reference a recent deal they worked on or an
                        industry article. &quot;Saw [Firm] just closed [Deal] — congratulations. Would love
                        to hear your perspective when you have a moment.&quot; If no response, move on gracefully.
                      </p>
                    </div>
                  </div>

                  {/* After Day 14 */}
                  <div className="relative flex items-start gap-6">
                    <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-navy">
                      <CheckCircle className="h-6 w-6 text-gold" />
                    </div>
                    <div className="flex-1 rounded-2xl bg-white p-6 shadow-sm border-2 border-navy/10">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm font-bold text-navy">After Day 14</span>
                        <span className="text-sm text-charcoal/50">Move On</span>
                      </div>
                      <p className="text-charcoal/80">
                        No response after 3 touches = they&apos;re not interested or too busy. <strong>Do not
                        send a 4th email.</strong> Move on to other contacts. You can try again in 3-6 months
                        with a completely fresh approach.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-xl bg-white p-4 text-center shadow-sm">
                  <p className="text-2xl font-bold text-gold">+40%</p>
                  <p className="mt-1 text-xs text-charcoal/60">More responses with proper follow-up vs. single email</p>
                </div>
                <div className="rounded-xl bg-white p-4 text-center shadow-sm">
                  <p className="text-2xl font-bold text-gold">3 max</p>
                  <p className="mt-1 text-xs text-charcoal/60">Touches before you move on — never more</p>
                </div>
                <div className="rounded-xl bg-white p-4 text-center shadow-sm">
                  <p className="text-2xl font-bold text-gold">Tue–Thu</p>
                  <p className="mt-1 text-xs text-charcoal/60">Best days to send — avoid Monday AM and Friday PM</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What You Get Section */}
        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">
                What&apos;s Inside the Full Networking Playbook
              </h2>
              <div className="mt-2 h-1 w-20 bg-gold" />

              <div className="mt-12 space-y-4">
                {[
                  "13 copy-paste email templates for every networking scenario (alumni, cold, career switch, headhunter, follow-up, thank you, and more)",
                  "5 proven subject line formulas with real-world examples",
                  "The complete follow-up cadence with exact timing and wording",
                  "10 cold email mistakes to avoid (with before/after rewrites)",
                  "Response rate benchmarks by channel (alumni, warm intro, cold, LinkedIn)",
                  "The Non-Target Acceleration Playbook: 4-phase system for breaking in without connections",
                  "Informational interview scripts: what to ask, what NOT to ask, and how to convert to referrals",
                  "LinkedIn optimization guide specifically for finance recruiting",
                  "Tracker spreadsheet template for managing your networking pipeline",
                  "Bonus: The exact conversion funnel from 200 emails → 1 offer",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-gold mt-0.5" />
                    <span className="text-charcoal/80">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 rounded-2xl bg-off-white border-2 border-gold/20 p-8 text-center">
                <BookOpen className="h-8 w-8 text-gold mx-auto mb-3" />
                <p className="text-xl font-bold text-navy">The Networking & Cold Email Playbook</p>
                <p className="text-charcoal/60 mt-1">Everything you need to build a Wall Street network from scratch</p>
                <p className="text-3xl font-bold text-gold mt-4">$47</p>
                <p className="text-xs text-charcoal/50 mt-1">One-time purchase · Instant PDF download · Lifetime access</p>
                <Link
                  href="/playbooks/networking-cold-email-playbook"
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gold px-8 py-4 text-base font-semibold text-navy hover:bg-navy hover:text-white transition-colors"
                >
                  Get the Full Playbook — $47
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
              Stop Guessing. Start Getting Responses.
            </h2>
            <p className="mt-4 text-lg text-white/60">
              The difference between a 2% response rate and a 20% response rate is having the right
              framework. Get the templates that have helped 1,000+ candidates land informational
              interviews at Goldman, Morgan Stanley, Evercore, and more.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/playbooks/networking-cold-email-playbook"
                className="group flex items-center gap-2 rounded-xl bg-gold px-8 py-4 text-base font-semibold text-navy hover:bg-white transition-colors"
              >
                Get All 13 Templates — $47
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

        {/* Related Resources */}
        <section className="bg-white py-12">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <h3 className="text-lg font-bold text-navy mb-6 text-center">Related Resources</h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Link href="/informational-interview-questions-banking" className="rounded-lg border border-border p-4 hover:border-gold/40 transition-colors">
                <p className="text-sm font-semibold text-navy">Informational Interview Questions</p>
                <p className="mt-1 text-xs text-charcoal/50">30 questions that impress bankers</p>
              </Link>
              <Link href="/networking-non-target-students-2026" className="rounded-lg border border-border p-4 hover:border-gold/40 transition-colors">
                <p className="text-sm font-semibold text-navy">Non-Target Networking 2026</p>
                <p className="mt-1 text-xs text-charcoal/50">The volume strategy that works</p>
              </Link>
              <Link href="/cold-email-checklist" className="rounded-lg border border-border p-4 hover:border-gold/40 transition-colors">
                <p className="text-sm font-semibold text-navy">Free Cold Email Checklist</p>
                <p className="mt-1 text-xs text-charcoal/50">11-point pre-send checklist</p>
              </Link>
              <Link href="/blog/cold-email-templates-that-get-bankers-to-respond" className="rounded-lg border border-border p-4 hover:border-gold/40 transition-colors">
                <p className="text-sm font-semibold text-navy">Deep Dive: Email Templates</p>
                <p className="mt-1 text-xs text-charcoal/50">5 templates with real response data</p>
              </Link>
              <Link href="/blog/how-finance-jobs-are-actually-filled-2026" className="rounded-lg border border-border p-4 hover:border-gold/40 transition-colors">
                <p className="text-sm font-semibold text-navy">How Jobs Are Filled</p>
                <p className="mt-1 text-xs text-charcoal/50">The data on referrals vs applications</p>
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
