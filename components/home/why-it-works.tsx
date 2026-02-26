"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { ScrollReveal } from "@/components/scroll-reveal"
import { track } from "@vercel/analytics"

const hardTruths = [
  {
    stat: "30 sec",
    statement: "That's how long your resume gets",
    detail:
      "One vague bullet or formatting mistake and you're filtered out before a human ever reads your experience.",
  },
  {
    stat: "Same 20 Qs",
    statement: "show up at every bank, every cycle",
    detail:
      "Most candidates study everything equally. The ones who get offers know which concepts are always asked and which almost never are.",
  },
  {
    stat: "< 5%",
    statement: "of cold outreach gets a response",
    detail:
      "Bankers get dozens of messages a week. They can tell in one sentence whether you sound like you belong or you're copy-pasting a template.",
  },
  {
    stat: "Once",
    statement: "On-cycle PE recruiting doesn't reopen",
    detail:
      "When headhunters call, you either have your materials and your story ready or you don't. There's no follow-up next month.",
  },
]

export function WhyItWorks() {
  return (
    <section className="relative bg-navy py-16 sm:py-24 lg:py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,_rgba(201,168,110,0.12),_transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_100%_100%,_rgba(201,168,110,0.08),_transparent)]" />
      </div>

      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 30h60M30 0v60' stroke='%23ffffff' stroke-width='0.5'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal animation="fade-up" className="mx-auto max-w-2xl text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold/70 mb-4">
            What nobody tells you
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl leading-tight">
            Most candidates lose before they{" "}
            <span className="text-gradient-gold">walk in the room</span>
          </h2>
          <p className="mt-6 text-lg text-white/50 leading-relaxed">
            The system isn&apos;t random. It&apos;s predictable — and the mistakes that kill your chances are the ones you don&apos;t know you&apos;re making.
          </p>
        </ScrollReveal>

        {/* Hard truths grid */}
        <div className="mx-auto max-w-5xl grid grid-cols-1 sm:grid-cols-2 gap-6">
          {hardTruths.map((truth, index) => (
            <ScrollReveal
              key={index}
              animation="fade-up"
              delay={index * 100}
              className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6 sm:p-8 backdrop-blur-sm"
            >
              {/* Stat */}
              <p className="text-3xl sm:text-4xl font-bold text-gold mb-3 number-highlight">
                {truth.stat}
              </p>

              {/* Statement */}
              <p className="text-base sm:text-lg font-semibold text-white leading-snug">
                {truth.statement}
              </p>

              {/* Detail */}
              <p className="mt-3 text-sm leading-relaxed text-white/45">
                {truth.detail}
              </p>

              {/* Subtle bottom accent on hover */}
              <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </ScrollReveal>
          ))}
        </div>

        {/* Bridging line + CTAs */}
        <ScrollReveal animation="fade-up" delay={500} className="mt-16 text-center">
          <p className="text-lg sm:text-xl text-white/70 font-medium max-w-xl mx-auto">
            You can&apos;t control where you went to school. You can control whether you&apos;re ready.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/playbooks"
              onClick={() => track("cta_clicked", { location: "stakes_playbooks" })}
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gold px-8 py-4 text-base font-semibold text-navy transition-all hover:bg-white hover:shadow-lg hover:shadow-gold/20"
            >
              Explore Playbooks
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/submit-resume?service=resume-review"
              onClick={() => track("cta_clicked", { location: "stakes_resume" })}
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/20 px-8 py-4 text-base font-semibold text-white transition-all hover:border-gold hover:text-gold"
            >
              Get Your Resume Reviewed
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
