import Link from "next/link"
import type { Playbook } from "@/lib/data"
import { ArrowRight } from "lucide-react"

interface PlaybookCardProps {
  playbook: Playbook
  isBestseller?: boolean
}

export function PlaybookCard({ playbook, isBestseller }: PlaybookCardProps) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-white shadow-sm transition-all hover:border-gold/50 hover:shadow-lg">

      <div className="flex flex-grow flex-col p-8">
        {/* Gold accent line */}
        <div className="mb-4 h-1 w-12 bg-gold" />

        <h3 className="text-xl font-semibold text-navy group-hover:text-gold transition-colors">{playbook.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-charcoal/70">{playbook.description}</p>

        {/* Content preview */}
        <div className="mt-6 flex-grow">
          <p className="text-xs font-semibold uppercase tracking-wider text-charcoal/50">Includes</p>
          <ul className="mt-3 space-y-2">
            {playbook.contents.slice(0, 3).map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-charcoal/70">
                <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-gold" />
                <span className="line-clamp-1">{item}</span>
              </li>
            ))}
          </ul>
          {playbook.contents.length > 3 && (
            <p className="mt-2 text-xs font-medium text-gold">+ {playbook.contents.length - 3} more sections</p>
          )}
        </div>
      </div>

      {/* Footer with price and CTA */}
      <div className="flex items-center justify-between border-t border-border bg-off-white/50 px-8 py-6">
        <div>
          <span className="text-2xl font-bold text-navy">${playbook.price}</span>
          <span className="ml-1 text-sm text-charcoal/50">one-time</span>
        </div>
        <Link
          href={`/playbooks/${playbook.slug}`}
          className="group/btn flex items-center gap-1 rounded-lg bg-navy px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-gold hover:text-navy"
        >
          View Details
          <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
        </Link>
      </div>
    </div>
  )
}
