import Link from "next/link"
import { featuredPlaybooks } from "@/lib/data"
import { ArrowRight, Sparkles, BookOpen, FileText, Users } from "lucide-react"

const playbookIcons = [BookOpen, FileText, Users]

export function FeaturedPlaybooks() {
  return (
    <section className="relative bg-white py-16 sm:py-24 lg:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 mesh-gradient opacity-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-gold to-transparent" />
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 mb-6">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-xs font-semibold uppercase tracking-widest text-gold">Premium Resources</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-5xl">
            Tactical <span className="text-gradient-gold">Playbooks</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-charcoal/60">
            Detailed guides for technical interviews, networking, and recruiting preparation.
          </p>
        </div>

        {/* Playbook Cards */}
        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-3">
          {featuredPlaybooks.map((playbook, index) => {
            const Icon = playbookIcons[index % playbookIcons.length]
            const isCenter = index === 1
            
            return (
              <div
                key={playbook.slug}
                className={`group relative flex flex-col card-premium ${isCenter ? 'lg:-mt-4 lg:scale-105' : ''}`}
              >
                {/* Bestseller badge for first card */}
                {index === 0 && (
                  <div className="absolute -top-3 left-6 z-10">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-navy px-3 py-1 text-xs font-semibold text-gold shadow-lg">
                      <Sparkles className="w-3 h-3" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                {/* Card Header with Icon */}
                <div className="relative p-6 pb-0">
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-navy to-navy-deep shadow-lg">
                      <Icon className="h-6 w-6 text-gold" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-navy leading-tight group-hover:text-gold transition-colors">
                        {playbook.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-charcoal/60 line-clamp-2">
                        {playbook.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content Preview */}
                <div className="flex-grow p-6">
                  <div className="rounded-lg bg-off-white/80 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-charcoal/40 mb-3">What's Inside</p>
                    <ul className="space-y-2.5">
                      {playbook.contents.slice(0, 4).map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
                          <span className="text-sm text-charcoal/70 line-clamp-1">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer */}
                <div className="p-6 pt-0">
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold text-navy">${playbook.price}</span>
                      <span className="text-sm text-charcoal/40">one-time</span>
                    </div>
                    <Link
                      href={`/playbooks/${playbook.slug}`}
                      className="group/link flex items-center gap-1.5 rounded-lg bg-navy px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-gold hover:text-navy hover:shadow-lg"
                    >
                      Details
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
                
                {/* Hover glow effect */}
                <div className="absolute -inset-px rounded-xl bg-gradient-to-b from-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />
              </div>
            )
          })}
        </div>

        {/* View All */}
        <div className="mt-16 text-center">
          <Link
            href="/playbooks"
            className="group inline-flex items-center gap-2 rounded-xl border-2 border-navy px-6 py-3 text-sm font-semibold text-navy transition-all hover:bg-navy hover:text-white"
          >
            View All 10 Playbooks
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
