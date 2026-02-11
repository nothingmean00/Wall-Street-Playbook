import Link from "next/link"
import type { Playbook } from "@/lib/data"
import { ArrowRight, Sparkles, BookOpen, FileText, Users, TrendingUp, Target, BarChart3, Briefcase, Award, Zap } from "lucide-react"

const playbookIcons: Record<string, typeof BookOpen> = {
  "finance-technical-interview-guide": BookOpen,
  "pe-recruiting-playbook": TrendingUp,
  "networking-cold-email-playbook": Users,
  "lbo-modeling-course": BarChart3,
  "stock-pitch-guide": Target,
  "resume-story-playbook": FileText,
  "restructuring-guide": Briefcase,
  "repe-modeling-guide": Award,
  "credit-direct-lending-playbook": Zap,
  "superday-survival-guide": Target,
}

interface PlaybookCardProps {
  playbook: Playbook
  isBestseller?: boolean
}

export function PlaybookCard({ playbook, isBestseller }: PlaybookCardProps) {
  const Icon = playbookIcons[playbook.slug] || BookOpen
  
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-navy/10">
      {/* Gradient border on hover */}
      <div className="absolute inset-0 rounded-2xl ring-1 ring-border group-hover:ring-gold/30 transition-all" />
      
      {/* Bestseller badge */}
      {isBestseller && (
        <div className="absolute -top-px left-6 right-6 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
      )}

      <div className="flex flex-grow flex-col p-8">
        {/* Header with icon */}
        <div className="flex items-start gap-4 mb-5">
          <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-navy to-navy-deep shadow-lg group-hover:shadow-xl transition-shadow">
            <Icon className="h-6 w-6 text-gold" />
          </div>
          {isBestseller && (
            <div className="flex items-center gap-1.5 rounded-full bg-gold/10 px-3 py-1">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              <span className="text-xs font-bold text-gold">Most Popular</span>
            </div>
          )}
        </div>

        <h3 className="text-xl font-bold text-navy group-hover:text-gold transition-colors leading-tight">
          {playbook.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-charcoal/60">{playbook.description}</p>

        {/* Content preview */}
        <div className="mt-6 flex-grow">
          <div className="rounded-xl bg-cream/50 p-4">
            <p className="text-xs font-bold uppercase tracking-wider text-charcoal/40 mb-3">What's Inside</p>
            <ul className="space-y-2.5">
              {playbook.contents.slice(0, 3).map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
                  <span className="text-sm text-charcoal/70 line-clamp-1">{item}</span>
                </li>
              ))}
            </ul>
            {playbook.contents.length > 3 && (
              <p className="mt-3 text-xs font-semibold text-gold">+ {playbook.contents.length - 3} more sections</p>
            )}
          </div>
        </div>
      </div>

      {/* Footer with price and CTA */}
      <div className="flex items-center justify-between border-t border-border bg-off-white/30 px-8 py-6">
        <div className="flex items-baseline gap-1.5">
          <span className="text-3xl font-bold text-navy">${playbook.price}</span>
          <span className="text-sm text-charcoal/70">one-time</span>
        </div>
        <Link
          href={`/playbooks/${playbook.slug}`}
          className="group/btn flex items-center gap-1.5 rounded-xl bg-navy px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-gold hover:text-navy hover:shadow-lg"
        >
          View Details
          <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
        </Link>
      </div>
      
      {/* Subtle glow on hover */}
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-b from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />
    </div>
  )
}
