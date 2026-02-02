import Link from "next/link"
import { ArrowRight, Clock } from "lucide-react"

interface RelatedItem {
  title: string
  href: string
  description?: string
  type: "blog" | "playbook" | "guide" | "service"
  readTime?: string
}

interface RelatedContentProps {
  title?: string
  items: RelatedItem[]
  variant?: "cards" | "links" | "compact"
}

const typeLabels = {
  blog: "Blog",
  playbook: "Playbook",
  guide: "Free Guide",
  service: "Service",
}

const typeColors = {
  blog: "bg-navy/10 text-navy",
  playbook: "bg-gold/20 text-gold",
  guide: "bg-charcoal/10 text-charcoal",
  service: "bg-gold/20 text-gold",
}

export function RelatedContent({
  title = "Related Resources",
  items,
  variant = "cards",
}: RelatedContentProps) {
  if (variant === "compact") {
    return (
      <div className="rounded-xl border border-border bg-off-white/50 p-6">
        <h3 className="text-lg font-semibold text-navy mb-4">{title}</h3>
        <ul className="space-y-3">
          {items.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className="group flex items-center justify-between text-sm hover:text-gold transition-colors"
              >
                <span className="text-charcoal/80 group-hover:text-gold">{item.title}</span>
                <ArrowRight className="h-4 w-4 text-charcoal/40 group-hover:text-gold transition-transform group-hover:translate-x-1" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  if (variant === "links") {
    return (
      <div className="border-t border-border pt-8 mt-8">
        <h3 className="text-lg font-semibold text-navy mb-4">{title}</h3>
        <div className="flex flex-wrap gap-3">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm text-charcoal/80 hover:border-gold hover:text-gold transition-colors"
            >
              <span className={`text-xs font-medium px-2 py-0.5 rounded ${typeColors[item.type]}`}>
                {typeLabels[item.type]}
              </span>
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    )
  }

  return (
    <section className="bg-off-white py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-navy">{title}</h2>
          <div className="mt-2 h-1 w-16 bg-gold" />

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {items.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="group flex flex-col rounded-xl border border-border bg-white p-5 transition-all hover:border-gold/30 hover:shadow-md"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-medium px-2 py-0.5 rounded ${typeColors[item.type]}`}>
                    {typeLabels[item.type]}
                  </span>
                  {item.readTime && (
                    <span className="flex items-center gap-1 text-xs text-charcoal/50">
                      <Clock className="h-3 w-3" />
                      {item.readTime}
                    </span>
                  )}
                </div>
                <h3 className="text-base font-semibold text-navy group-hover:text-gold transition-colors">
                  {item.title}
                </h3>
                {item.description && (
                  <p className="mt-1 text-sm text-charcoal/60 line-clamp-2">{item.description}</p>
                )}
                <div className="mt-auto pt-3 flex items-center gap-1 text-sm font-medium text-gold">
                  Read More
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Helper function to get related content based on categories/tags
export function getRelatedContent(
  currentSlug: string,
  category: string,
  allGuides: Array<{ slug: string; title: string; summary: string; category: string; readTime?: string }>
): RelatedItem[] {
  return allGuides
    .filter((guide) => guide.slug !== currentSlug && guide.category === category)
    .slice(0, 4)
    .map((guide) => ({
      title: guide.title,
      href: `/blog/${guide.slug}`,
      description: guide.summary,
      type: "blog" as const,
      readTime: guide.readTime,
    }))
}

// Predefined related content for common topics
export const relatedContentByTopic = {
  nonTarget: [
    {
      title: "Non-Target to Investment Banking in 2026",
      href: "/blog/non-target-to-investment-banking-2026",
      type: "blog" as const,
      description: "The realistic playbook for breaking in from a non-target school.",
    },
    {
      title: "Networking & Cold Email Playbook",
      href: "/playbooks/networking-cold-email-playbook",
      type: "playbook" as const,
      description: "50+ email templates and follow-up sequences.",
    },
    {
      title: "Non-Target Resume Help",
      href: "/non-target-resume",
      type: "service" as const,
      description: "Professional resume review for non-target candidates.",
    },
    {
      title: "Non-Target Investment Banking Guide",
      href: "/non-target-investment-banking",
      type: "guide" as const,
      description: "Complete guide to breaking in without on-campus recruiting.",
    },
  ],
  technicals: [
    {
      title: "IB Technical Interview Guide",
      href: "/playbooks/ib-technical-guide",
      type: "playbook" as const,
      description: "400+ technical questions with detailed answers.",
    },
    {
      title: "Walk Me Through a DCF",
      href: "/blog/walk-me-through-a-dcf-interview-question",
      type: "blog" as const,
      description: "The perfect answer to the most common IB question.",
    },
    {
      title: "100 Core Technical Questions",
      href: "/blog/100-investment-banking-technical-questions",
      type: "blog" as const,
      description: "Most frequently asked questions by category.",
    },
    {
      title: "LBO Modeling Crash Course",
      href: "/playbooks/lbo-modeling-course",
      type: "playbook" as const,
      description: "Build LBO models from scratch with Excel templates.",
    },
  ],
  resume: [
    {
      title: "Investment Banking Resume Guide",
      href: "/investment-banking-resume",
      type: "guide" as const,
      description: "Format, bullet points, and examples that get interviews.",
    },
    {
      title: "Finance Resume Review Service",
      href: "/finance-resume-review",
      type: "service" as const,
      description: "Professional feedback on your finance resume.",
    },
    {
      title: "Investment Banking Resume Checklist",
      href: "/blog/investment-banking-resume-checklist",
      type: "blog" as const,
      description: "The exact structure to survive the 30-second screen.",
    },
    {
      title: "Resume Rewrite Service",
      href: "/submit-resume?service=resume-rewrite",
      type: "service" as const,
      description: "Complete resume reconstruction by experts.",
    },
  ],
  peRecruiting: [
    {
      title: "PE Recruiting Timeline 2026",
      href: "/blog/private-equity-recruiting-timeline-2026",
      type: "blog" as const,
      description: "On-cycle, off-cycle, and what to expect.",
    },
    {
      title: "PE Recruiting Playbook",
      href: "/playbooks/pe-recruiting-playbook",
      type: "playbook" as const,
      description: "Navigate on-cycle chaos and crush PE interviews.",
    },
    {
      title: "Paper LBO Example",
      href: "/blog/paper-lbo-interview-example",
      type: "blog" as const,
      description: "How to solve paper LBOs in 10 minutes.",
    },
    {
      title: "PE Resume Review",
      href: "/private-equity-resume",
      type: "service" as const,
      description: "Position your deal experience for PE recruiting.",
    },
  ],
  hfRecruiting: [
    {
      title: "Hedge Fund Recruiting 2026",
      href: "/blog/hedge-fund-recruiting-2026",
      type: "blog" as const,
      description: "How to break in from banking, research, and other paths.",
    },
    {
      title: "Stock Pitch Template & Examples",
      href: "/playbooks/stock-pitch-guide",
      type: "playbook" as const,
      description: "The pitch framework used at top hedge funds.",
    },
    {
      title: "Hedge Fund Resume Help",
      href: "/hedge-fund-resume",
      type: "service" as const,
      description: "Position yourself as an investor.",
    },
    {
      title: "Hedge Fund Interview Prep",
      href: "/hedge-fund-interview-prep",
      type: "guide" as const,
      description: "Complete guide to HF interview preparation.",
    },
  ],
}
