import Link from "next/link"
import { featuredPlaybooks } from "@/lib/data"
import { ArrowRight } from "lucide-react"

export function FeaturedPlaybooks() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">Playbooks</h2>
          <p className="mt-4 text-base leading-relaxed text-charcoal/70">
            Detailed guides for technical interviews, networking, and recruiting preparation.
          </p>
        </div>

        {/* Playbook Cards */}
        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 lg:grid-cols-3">
          {featuredPlaybooks.map((playbook) => (
            <div
              key={playbook.slug}
              className="group flex flex-col rounded-lg border border-border bg-white transition-all hover:border-gold/40 hover:shadow-md"
            >
              <div className="flex flex-grow flex-col p-6">
                <h3 className="text-lg font-semibold text-navy">{playbook.title}</h3>
                <p className="mt-2 flex-grow text-sm leading-relaxed text-charcoal/70">{playbook.description}</p>

                {/* Preview of contents */}
                <ul className="mt-4 space-y-2 border-t border-border pt-4">
                  {playbook.contents.slice(0, 3).map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-charcoal/60">
                      <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-gold" />
                      <span className="line-clamp-1">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between border-t border-border px-6 py-4">
                <div>
                  <span className="text-xl font-bold text-navy">${playbook.price}</span>
                </div>
                <Link
                  href={`/playbooks/${playbook.slug}`}
                  className="flex items-center gap-1 text-sm font-medium text-navy hover:text-gold transition-colors"
                >
                  View Details
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="mt-16 text-center">
          <Link
            href="/playbooks"
            className="inline-flex items-center gap-2 text-sm font-semibold text-navy transition-colors hover:text-gold"
          >
            View all playbooks
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
