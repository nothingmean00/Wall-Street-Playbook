import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { ArrowRight, CheckCircle, Clock, MessageSquare, Phone, AlertTriangle, Users, Zap, BookOpen } from "lucide-react"

export const metadata: Metadata = {
  title: "Informational Interview Questions for Banking | 30 Proven Questions",
  description:
    "The exact informational interview questions top candidates use on networking calls with bankers. 25-minute call structure, 30 questions by phase, and the 3-Touch Framework that converts calls to referrals.",
  keywords: [
    "informational interview questions banking",
    "what to ask banker informational interview",
    "networking call questions finance",
    "informational interview investment banking",
    "questions to ask on networking call",
    "informational interview tips finance",
    "banking networking call script",
    "how to network into investment banking",
  ],
  openGraph: {
    title: "Informational Interview Questions for Banking | 30 Proven Questions",
    description:
      "25-minute call structure, 30 questions by phase, and the 3-Touch Framework that converts calls into referrals.",
    url: "https://wallstreetplaybook.org/informational-interview-questions-banking",
  },
  alternates: {
    canonical: "https://wallstreetplaybook.org/informational-interview-questions-banking",
  },
}

const callStructure = [
  {
    phase: "Opening",
    time: "0-1 min",
    purpose: "Thank them, set the frame",
    script: "Thank you so much for taking the time. I know you're busy, so I'll be mindful of the clock. I'd love to hear about your path and ask a few questions about [Group/Firm].",
  },
  {
    phase: "Your Intro",
    time: "1-3 min",
    purpose: "60-second pitch — who you are, why finance, why them",
    script: "Quick background on me: I'm a [year] at [school] studying [major]. I got interested in banking through [specific catalyst]. I'm particularly drawn to [their group/firm] because [reason tied to their work].",
  },
  {
    phase: "Their Story",
    time: "3-15 min",
    purpose: "Ask questions, listen 80% of the time",
    script: "Use career path, day-to-day, and firm-specific questions. Let them talk. Take notes. Ask genuine follow-ups based on what they say — not pre-scripted ones.",
  },
  {
    phase: "Personal Bond",
    time: "15-20 min",
    purpose: "Find common ground beyond finance",
    script: "Shift to advice-seeking questions. Reference something personal from their LinkedIn. Find a shared interest, background, or perspective that creates a real connection.",
  },
  {
    phase: "Soft Close",
    time: "20-25 min",
    purpose: "Plant the seed, get the next step",
    script: "This has been incredibly helpful. Would it be okay if I followed up in a few weeks? And is there anyone else on your team or at the firm you'd recommend I speak with?",
  },
]

const careerPathQuestions = [
  "What first drew you to investment banking specifically — was there a moment or experience that made you decide?",
  "How did you end up at [Firm] specifically? What stood out versus other banks you considered?",
  "If you were breaking in today with the same background, what would you do differently?",
  "What's the most surprising thing about the job that you didn't expect before starting?",
  "How has your view of the industry changed since you were in my position?",
]

const dayToDayQuestions = [
  "Can you walk me through what a live deal week actually looks like for you — from Monday to Friday?",
  "What types of models do you build most frequently in [Group], and how much time is modeling vs. client-facing work?",
  "How does [Firm]'s culture in your group compare to what you've heard from peers at other banks?",
  "What's the most interesting deal or project you've worked on in the last year — what made it stand out?",
  "How much interaction do you get with senior bankers and clients at the analyst/associate level?",
]

const adviceQuestions = [
  "If you were coaching someone trying to break into [Group], what would you tell them to focus on?",
  "What's the biggest mistake you see candidates make during the recruiting process?",
  "Is there a skill or knowledge area that would have helped you significantly if you'd learned it earlier?",
  "What separates the analysts who get top-bucket rankings from the rest?",
  "Would it be okay if I kept you updated on my progress and reached out again in a few weeks?",
]

const escalationFramework = [
  {
    touch: "Touch 1: Initial Call",
    timing: "Week 1",
    goal: "Build rapport, gather intel, plant seeds",
    actions: [
      "Execute the 25-minute call structure flawlessly",
      "Send a thoughtful thank-you email within 2 hours",
      "Reference something specific they said (proves you listened)",
      "Ask permission to follow up — never assume",
    ],
  },
  {
    touch: "Touch 2: Value Add",
    timing: "Weeks 3-6",
    goal: "Stay top of mind, demonstrate you're serious",
    actions: [
      "Share a relevant article, deal news, or insight about their sector",
      "Update them on something you discussed (a class, certification, project)",
      "Congratulate them on a deal close or promotion",
      "Keep it brief: 3-4 sentences maximum",
    ],
  },
  {
    touch: "Touch 3: The Ask",
    timing: "When recruiting opens",
    goal: "Convert relationship into referral or application support",
    actions: [
      "Reference your previous conversations specifically",
      "Share that you're applying and why [Firm] is your top choice",
      "Make the ask clear but easy to say yes to",
      "Offer an out: 'Even if timing doesn't work, I'd appreciate any guidance'",
    ],
  },
]

const awkwardSituations = [
  {
    situation: "They seem rushed or distracted",
    response: "Acknowledge it immediately: 'I can tell you're busy — happy to reschedule if that works better.' This shows EQ. 90% of the time they'll say 'No, we're fine' and actually engage more.",
  },
  {
    situation: "They ask 'Why should I help you?'",
    response: "Don't panic — this is a test. Say: 'Honestly, you don't have to. But I'm reaching out specifically because [reason tied to their background]. I'm not mass-emailing — I wanted to talk to you.'",
  },
  {
    situation: "You get no response after the call",
    response: "Wait 5-7 days, then send one follow-up. If still nothing, wait 3-4 weeks and try a value-add touchpoint. After 2 follow-ups with no response, move on. Never send more than 3 unreturned messages.",
  },
  {
    situation: "The conversation goes flat or awkward",
    response: "Pivot to asking about them personally: 'Outside of banking, what do you enjoy doing?' People love talking about themselves. If all else fails, gracefully wrap early: 'I know you're busy, I don't want to keep you.'",
  },
  {
    situation: "They offer to refer you immediately",
    response: "Don't get overexcited or push too hard. Say: 'That means a lot — I'd really appreciate that. Would it help if I sent you my resume and a brief summary of my background?' Make it easy for them.",
  },
]

const referralSequence = [
  "Initial cold email or LinkedIn outreach (personalized, not generic)",
  "25-minute informational call using the structured framework",
  "Same-day thank-you email referencing specific conversation points",
  "Value-add follow-up at week 3-4 (article, deal news, update)",
  "Second value-add at week 6-8 if appropriate",
  "The Ask when recruiting opens (referral or application support)",
  "Post-application update (whether you got an interview or not)",
  "Long-term relationship maintenance (congratulate deals, promotions)",
]

export default function InformationalInterviewBankingPage() {
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
              <MessageSquare className="w-4 h-4 text-gold" />
              <span className="text-xs font-semibold uppercase tracking-widest text-gold">Networking Mastery</span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Informational Interview Questions for <span className="text-gradient-gold">Banking</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/60 max-w-2xl mx-auto">
              Stop asking &quot;What&apos;s your average day like?&quot; and start running calls that actually convert
              to referrals. 30 proven questions, the exact 25-minute structure, and the framework that turns
              a single call into a job offer.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/playbooks/networking-cold-email-playbook"
                className="group flex items-center gap-2 rounded-xl bg-gold px-8 py-4 text-base font-semibold text-navy transition-all hover:bg-white"
              >
                Get All 30 Questions + Cheat Sheets — $47
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

        {/* Why Generic Questions Fail */}
        <section className="bg-cream py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">Why &quot;What&apos;s Your Average Day Like?&quot; Kills Your Chances</h2>
              <div className="mt-2 h-1 w-20 bg-gold" />

              <div className="mt-8 prose prose-lg max-w-none text-charcoal/80">
                <p>
                  Bankers take 50+ networking calls a year. They can tell within 90 seconds whether you&apos;ve done
                  your homework or whether you&apos;re reading from a generic question list you found on Reddit.
                </p>
                <p>
                  Questions like &quot;What&apos;s your average day like?&quot; or &quot;How did you get into banking?&quot; signal
                  one thing: <strong>you didn&apos;t prepare, and you&apos;re wasting their time.</strong> This is
                  googleable information. Every analyst&apos;s day looks roughly the same. Asking this tells the banker
                  you haven&apos;t done even basic research.
                </p>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl bg-red-50 border border-red-200 p-6">
                  <p className="font-semibold text-red-700 mb-3">Questions That Get You Ghosted</p>
                  <ul className="space-y-2 text-sm text-red-600/80">
                    <li>&bull; &quot;What&apos;s a typical day like?&quot;</li>
                    <li>&bull; &quot;How did you get into banking?&quot;</li>
                    <li>&bull; &quot;What do you like most about your job?&quot;</li>
                    <li>&bull; &quot;Can you tell me about your firm?&quot;</li>
                    <li>&bull; &quot;What advice do you have for someone trying to break in?&quot;</li>
                  </ul>
                </div>
                <div className="rounded-xl bg-green-50 border border-green-200 p-6">
                  <p className="font-semibold text-green-700 mb-3">Questions That Get You Referred</p>
                  <ul className="space-y-2 text-sm text-green-600/80">
                    <li>&bull; &quot;What does a live deal week look like in [Group]?&quot;</li>
                    <li>&bull; &quot;What made you choose [Firm] over [Competitor]?&quot;</li>
                    <li>&bull; &quot;What separates top-bucket analysts from the rest?&quot;</li>
                    <li>&bull; &quot;If you were breaking in today, what would you do differently?&quot;</li>
                    <li>&bull; &quot;What&apos;s the most interesting deal you&apos;ve worked on this year?&quot;</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 p-4 bg-gold/10 rounded-lg border border-gold/30">
                <div className="flex gap-3">
                  <AlertTriangle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-charcoal/70">
                    <strong>Pro Tip:</strong> Use audio calls over video for first interactions. Bankers are more relaxed
                    on audio — they can take the call from anywhere without worrying about background or appearance. Lower
                    friction = higher acceptance rate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 25-Minute Call Structure */}
        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="h-6 w-6 text-gold" />
                <h2 className="text-3xl font-bold text-navy sm:text-4xl">The 25-Minute Call Structure</h2>
              </div>
              <div className="mt-2 h-1 w-20 bg-gold" />

              <p className="mt-6 text-charcoal/70">
                Every great networking call follows the same structure. This isn&apos;t rigid — it&apos;s a framework.
                The best candidates internalize this so well it feels natural, not scripted.
              </p>

              <div className="mt-10 space-y-4">
                {callStructure.map((phase, idx) => (
                  <div key={idx} className="rounded-2xl border border-border bg-off-white/50 p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-navy text-gold font-bold text-sm">
                        {idx + 1}
                      </div>
                      <div>
                        <h3 className="font-bold text-navy">{phase.phase}</h3>
                        <span className="text-xs font-semibold text-gold">{phase.time}</span>
                      </div>
                      <span className="ml-auto text-xs text-charcoal/50 hidden sm:block">{phase.purpose}</span>
                    </div>
                    <p className="text-sm text-charcoal/70 bg-white rounded-lg p-4 border border-border italic">
                      &quot;{phase.script}&quot;
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-navy/5 rounded-lg">
                <p className="text-sm text-charcoal/70">
                  <strong>Key principle:</strong> You should be talking 20% and listening 80%. The best networking
                  calls feel like conversations, not interrogations. Ask a question, then <em>actually listen</em> to
                  the answer before asking your next one.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 15 Preview Questions */}
        <section className="bg-navy py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-white sm:text-4xl text-center">
                15 of 30 Proven Questions <span className="text-gold">(Preview)</span>
              </h2>
              <p className="mt-4 text-center text-white/60">
                Organized by conversation phase. The full playbook includes all 30 questions plus
                situation-specific variations for different firm types.
              </p>

              {/* Career Path Questions */}
              <div className="mt-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-8 w-8 rounded-full bg-gold/20 flex items-center justify-center">
                    <Users className="h-4 w-4 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Career Path Questions (Minutes 3-8)</h3>
                </div>
                <div className="space-y-3">
                  {careerPathQuestions.map((q, i) => (
                    <div key={i} className="flex gap-3 p-4 rounded-lg bg-white/5 border border-white/10">
                      <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gold/20 text-gold text-xs font-bold">
                        {i + 1}
                      </span>
                      <p className="text-sm text-white/80">{q}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Day-to-Day Questions */}
              <div className="mt-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-8 w-8 rounded-full bg-gold/20 flex items-center justify-center">
                    <BookOpen className="h-4 w-4 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Day-to-Day &amp; Firm-Specific (Minutes 8-15)</h3>
                </div>
                <div className="space-y-3">
                  {dayToDayQuestions.map((q, i) => (
                    <div key={i} className="flex gap-3 p-4 rounded-lg bg-white/5 border border-white/10">
                      <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gold/20 text-gold text-xs font-bold">
                        {i + 6}
                      </span>
                      <p className="text-sm text-white/80">{q}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Advice-Seeking & Soft Close Questions */}
              <div className="mt-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-8 w-8 rounded-full bg-gold/20 flex items-center justify-center">
                    <Zap className="h-4 w-4 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Advice-Seeking &amp; Soft Close (Minutes 15-25)</h3>
                </div>
                <div className="space-y-3">
                  {adviceQuestions.map((q, i) => (
                    <div key={i} className="flex gap-3 p-4 rounded-lg bg-white/5 border border-white/10">
                      <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gold/20 text-gold text-xs font-bold">
                        {i + 11}
                      </span>
                      <p className="text-sm text-white/80">{q}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-12 text-center">
                <p className="text-white/50 text-sm mb-4">
                  The full playbook includes 15 more questions + customization guides for bulge brackets,
                  elite boutiques, PE, and hedge funds.
                </p>
                <Link
                  href="/playbooks/networking-cold-email-playbook"
                  className="inline-flex items-center gap-2 rounded-xl bg-gold px-8 py-4 text-base font-semibold text-navy hover:bg-white transition-colors"
                >
                  Get All 30 Questions — $47
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 8-Step Referral Sequence */}
        <section className="bg-off-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">The 8-Step Sequence: Call → Referral</h2>
              <div className="mt-2 h-1 w-20 bg-gold" />
              <p className="mt-6 text-charcoal/70">
                Most candidates treat informational interviews as one-off events. Top candidates treat them as
                the first step in a deliberate, multi-touch sequence designed to convert a stranger into a champion.
              </p>

              <div className="mt-10 space-y-4">
                {referralSequence.map((step, idx) => (
                  <div key={idx} className="flex gap-4 items-start p-4 rounded-xl bg-white border border-border shadow-sm">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-navy text-gold text-sm font-bold">
                      {idx + 1}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-charcoal/80">{step}</p>
                    </div>
                    {idx < 2 && (
                      <span className="text-xs font-semibold text-gold bg-gold/10 px-2 py-1 rounded">Week 1</span>
                    )}
                    {idx >= 2 && idx < 5 && (
                      <span className="text-xs font-semibold text-navy bg-navy/10 px-2 py-1 rounded">Weeks 2-8</span>
                    )}
                    {idx >= 5 && (
                      <span className="text-xs font-semibold text-charcoal/50 bg-charcoal/10 px-2 py-1 rounded">Recruiting</span>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                <div className="rounded-xl bg-white p-6 border border-border">
                  <h3 className="font-bold text-navy mb-3">The Mini-Ask</h3>
                  <p className="text-sm text-charcoal/70">
                    &quot;Would it be okay if I followed up in a few weeks?&quot; — This is low-commitment and almost
                    always gets a yes. It opens the door without creating pressure. Use this at the end of every
                    first call.
                  </p>
                </div>
                <div className="rounded-xl bg-white p-6 border border-border">
                  <h3 className="font-bold text-navy mb-3">The Real Ask</h3>
                  <p className="text-sm text-charcoal/70">
                    &quot;I&apos;m applying to [Firm] for the SA role. Would you be willing to put in a referral?&quot;
                    — Only use this after 2-3 touchpoints. The relationship must be warm. If you haven&apos;t earned
                    it, the answer is no — or worse, a lukewarm referral.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3-Touch Relationship Escalation Framework */}
        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">The 3-Touch Relationship Escalation Framework</h2>
              <div className="mt-2 h-1 w-20 bg-gold" />
              <p className="mt-6 text-charcoal/70">
                Referrals don&apos;t happen after one call. They happen after a deliberate escalation of trust.
                Each touch has a specific purpose — skip one and the sequence breaks.
              </p>

              <div className="mt-10 space-y-8">
                {escalationFramework.map((touch, idx) => (
                  <div key={idx} className="rounded-2xl bg-off-white/50 border border-border p-8">
                    <div className="flex items-center gap-4 mb-2">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-navy">
                        <span className="text-lg font-bold text-gold">{idx + 1}</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-navy">{touch.touch}</h3>
                        <span className="text-sm text-gold font-semibold">{touch.timing}</span>
                      </div>
                    </div>
                    <p className="text-sm text-charcoal/60 mb-4 italic">{touch.goal}</p>
                    <ul className="space-y-2">
                      {touch.actions.map((action, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 flex-shrink-0 text-gold mt-0.5" />
                          <span className="text-sm text-charcoal/80">{action}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Handling Awkward Situations */}
        <section className="bg-cream py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">Handling Awkward Situations</h2>
              <div className="mt-2 h-1 w-20 bg-gold" />
              <p className="mt-6 text-charcoal/70">
                Networking calls don&apos;t always go smoothly. The best candidates have a response ready for
                every situation. Here&apos;s how to handle the most common curveballs.
              </p>

              <div className="mt-10 space-y-6">
                {awkwardSituations.map((item, idx) => (
                  <div key={idx} className="rounded-2xl bg-white p-6 shadow-sm">
                    <div className="flex items-start gap-3 mb-3">
                      <AlertTriangle className="h-5 w-5 flex-shrink-0 text-gold mt-0.5" />
                      <h3 className="font-bold text-navy">&quot;{item.situation}&quot;</h3>
                    </div>
                    <div className="ml-8 p-4 bg-navy/5 rounded-lg">
                      <p className="text-sm text-charcoal/80">{item.response}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Audio vs Video Pro Tip */}
        <section className="bg-navy py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <div className="rounded-2xl bg-white/10 p-8 border border-white/10">
                <div className="flex items-start gap-4">
                  <Phone className="h-8 w-8 text-gold flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-white">Pro Tip: Audio Over Video for First Calls</h3>
                    <p className="mt-3 text-white/70">
                      Always suggest a phone call over Zoom for first interactions. Bankers prefer audio because:
                    </p>
                    <ul className="mt-4 space-y-2">
                      {[
                        "They can take the call from anywhere — commuting, between meetings, walking to lunch",
                        "No pressure to look presentable on camera after a 14-hour day",
                        "Lower friction means higher acceptance rate (we've seen 2-3x better response rates)",
                        "Audio creates a more relaxed, conversational tone — less like a formal interview",
                      ].map((point, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 flex-shrink-0 text-gold mt-0.5" />
                          <span className="text-sm text-white/70">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What You Get CTA */}
        <section className="bg-off-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">
                Get the Complete Networking &amp; Cold Email Playbook
              </h2>
              <p className="mt-4 text-lg text-charcoal/60">
                Everything on this page is a preview. The full 47-page playbook includes:
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2 text-left">
                {[
                  "All 30 questions organized by conversation phase",
                  "50+ cold email templates with proven response rates",
                  "Follow-up sequences for every scenario",
                  "Firm-specific customization guides (BB, EB, MM, PE, HF)",
                  "The complete 3-Touch Escalation Framework with email templates",
                  "Awkward situation response scripts",
                  "Networking tracker spreadsheet template",
                  "LinkedIn optimization checklist for finance recruiting",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-white border border-border">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-gold mt-0.5" />
                    <span className="text-sm text-charcoal/80">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Link
                  href="/playbooks/networking-cold-email-playbook"
                  className="group inline-flex items-center gap-2 rounded-xl bg-gold px-10 py-5 text-lg font-semibold text-navy transition-all hover:bg-navy hover:text-white"
                >
                  Get the Full Playbook — $47
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <p className="mt-4 text-xs text-charcoal/50">
                  Instant PDF download. Used by 2,000+ candidates at target and non-target schools.
                </p>
              </div>
            </div>
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
                <p className="mt-1 text-xs text-charcoal/50">Volume benchmarks and strategy</p>
              </Link>
              <Link href="/cold-email-checklist" className="rounded-lg border border-border p-4 hover:border-gold/40 transition-colors">
                <p className="text-sm font-semibold text-navy">Free Cold Email Checklist</p>
                <p className="mt-1 text-xs text-charcoal/50">11-point pre-send checklist</p>
              </Link>
              <Link href="/blog/informational-interview-questions-investment-banking" className="rounded-lg border border-border p-4 hover:border-gold/40 transition-colors">
                <p className="text-sm font-semibold text-navy">Deep Dive: Interview Questions</p>
                <p className="mt-1 text-xs text-charcoal/50">10 questions by call phase</p>
              </Link>
              <Link href="/blog/cold-email-templates-that-get-bankers-to-respond" className="rounded-lg border border-border p-4 hover:border-gold/40 transition-colors">
                <p className="text-sm font-semibold text-navy">Email Templates Guide</p>
                <p className="mt-1 text-xs text-charcoal/50">5 templates with response data</p>
              </Link>
              <Link href="/finance-networking-playbook-2026" className="rounded-lg border border-border p-4 hover:border-gold/40 transition-colors">
                <p className="text-sm font-semibold text-navy">Full Networking Playbook Overview</p>
                <p className="mt-1 text-xs text-charcoal/50">All 8 chapters previewed</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
