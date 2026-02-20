import Link from "next/link"
import { BookOpen, ArrowRight, Star, Shield, Check, Sparkles, Lock } from "lucide-react"

const livePlaybooks = [
  {
    slug: "finance-technical-interview-guide",
    title: "Finance Technical Interview Guide",
    description:
      "80+ pages. 8 chapters. 300+ questions. Every question tagged by interview frequency with dual-format answers.",
    price: 79,
    highlights: [
      "400+ real interview questions",
      "Frequency tags (Always Asked → Rarely Asked)",
      "30-second & 3-minute answer formats",
      "Red flag warnings & interviewer notes",
    ],
  },
  {
    slug: "pe-recruiting-playbook",
    title: "2026 PE Recruiting Playbook",
    description:
      "42 pages. 20 chapters. The insider intelligence that contradicts mainstream PE advice.",
    price: 67,
    highlights: [
      "7 headhunter firms that control megafund access",
      "On-cycle timeline & preparation framework",
      "Paper LBO shortcuts for timed cases",
      "Compensation data by fund tier & level",
    ],
  },
  {
    slug: "networking-cold-email-playbook",
    title: "Networking & Cold Email Playbook",
    description:
      "47 pages. 8 chapters. 13 email templates, 30 interview questions, and the system that turns cold outreach into offers.",
    price: 47,
    highlights: [
      "13 proven cold email templates by scenario",
      "30 informational interview questions by phase",
      "Response rate data by channel & candidate type",
      "Email formats for 13+ major banks",
    ],
  },
]

const upcomingCount = 7

export function PlaybooksComingSoon() {
  return (
    <section className="relative bg-cream py-16 sm:py-24 lg:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,_rgba(201,168,110,0.1),_transparent)]" />
      </div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-gold to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 mb-6">
            <BookOpen className="w-4 h-4 text-gold" />
            <span className="text-xs font-semibold uppercase tracking-widest text-gold">
              Premium Guides
            </span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-5xl">
            Wall Street <span className="text-gradient-gold">Playbooks</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-charcoal/60">
            Tactical guides built from real recruiting data. No fluff — just
            frameworks that get offers.
          </p>
        </div>

        {/* Live Playbook Cards */}
        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {livePlaybooks.map((playbook) => (
            <Link
              key={playbook.slug}
              href={`/playbooks/${playbook.slug}`}
              className="group relative rounded-2xl border border-border/50 bg-white shadow-sm transition-all duration-300 hover:border-gold/40 hover:shadow-xl overflow-hidden flex flex-col"
            >
              {/* Top accent */}
              <div className="h-1.5 bg-gradient-to-r from-gold via-gold/80 to-gold/50" />

              <div className="p-5 sm:p-8 flex-1 flex flex-col">
                {/* Badge + rating */}
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 border border-green-200 px-3 py-1 text-xs font-semibold text-green-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                    Available Now
                  </span>
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-3.5 w-3.5 fill-gold text-gold"
                      />
                    ))}
                  </div>
                </div>

                {/* Title & description */}
                <h3 className="text-xl font-bold text-navy group-hover:text-gold transition-colors">
                  {playbook.title}
                </h3>
                <p className="mt-2 text-sm text-charcoal/60 leading-relaxed">
                  {playbook.description}
                </p>

                {/* Highlights */}
                <div className="mt-5 space-y-2 flex-1">
                  {playbook.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-xs text-charcoal/70">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="mt-6 pt-5 border-t border-border flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-navy">
                      ${playbook.price}
                    </span>
                    <span className="text-sm text-charcoal/70 ml-1.5">
                      one-time
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-gold-dark group-hover:gap-3 transition-all">
                    View Playbook
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Upcoming teaser */}
        <div className="mx-auto mt-12 max-w-5xl">
          <div className="rounded-2xl border border-border/30 bg-navy/5 p-6 sm:p-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Sparkles className="h-5 w-5 text-gold" />
              <h3 className="text-lg font-bold text-navy">
                {upcomingCount} More Playbooks Coming
              </h3>
            </div>
            <p className="text-sm text-charcoal/60 max-w-lg mx-auto mb-5">
              LBO modeling, stock pitches, restructuring, REPE, private credit, and more.
              New guides released regularly.
            </p>
            <Link
              href="/playbooks"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:gap-3 transition-all"
            >
              See all playbooks
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Trust signals */}
        <div className="mx-auto mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-charcoal/40">
          <div className="flex items-center gap-1.5">
            <Shield className="h-3.5 w-3.5 text-gold" />
            30-day money-back guarantee
          </div>
          <div className="flex items-center gap-1.5">
            <Lock className="h-3.5 w-3.5 text-gold" />
            Secure Stripe checkout
          </div>
          <div className="flex items-center gap-1.5">
            <Star className="h-3.5 w-3.5 text-gold" />
            Instant PDF delivery
          </div>
        </div>
      </div>
    </section>
  )
}
