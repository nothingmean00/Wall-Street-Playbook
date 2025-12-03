import { BookOpen, FileText, MessageSquare, Calendar, Target, TrendingUp } from "lucide-react"

const features = [
  {
    icon: BookOpen,
    title: "Interview Frameworks",
    description:
      "Structured approaches to technical and behavioral questions asked at top firms.",
  },
  {
    icon: FileText,
    title: "Technical Guides",
    description: "Valuation, M&A mechanics, LBO modeling, and accounting fundamentals.",
  },
  {
    icon: MessageSquare,
    title: "Networking Templates",
    description: "Email and LinkedIn templates for cold outreach and informational interviews.",
  },
  {
    icon: Calendar,
    title: "Recruiting Timelines",
    description: "Calendars for IB, PE, and hedge fund recruiting cycles.",
  },
  {
    icon: Target,
    title: "Resume Frameworks",
    description: "Structures for positioning your experience for finance roles.",
  },
  {
    icon: TrendingUp,
    title: "Firm Research",
    description: "Interview patterns across bulge brackets, elite boutiques, and buyside firms.",
  },
]

export function WhatYouGet() {
  return (
    <section className="bg-off-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            What's Included
          </h2>
          <p className="mt-4 text-base leading-relaxed text-charcoal/70">
            Preparation materials covering the core areas of finance recruiting.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-lg border border-border bg-white p-6 transition-all hover:border-gold/40 hover:shadow-md"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy">
                <feature.icon className="h-5 w-5 text-gold" />
              </div>

              <h3 className="mt-4 text-base font-semibold text-navy">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
