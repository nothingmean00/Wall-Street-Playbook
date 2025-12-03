import { FileText, Users, Clock, BookOpen } from "lucide-react"

const reasons = [
  {
    icon: FileText,
    title: "Structured Content",
    description: "Organized frameworks covering technical concepts, behavioral questions, and recruiting strategies.",
  },
  {
    icon: Users,
    title: "Networking Templates",
    description: "Ready-to-use email and message templates for reaching out to professionals in the industry.",
  },
  {
    icon: Clock,
    title: "Recruiting Calendars",
    description: "Timeline guides for IB, PE, and hedge fund cycles to help you stay on track.",
  },
  {
    icon: BookOpen,
    title: "Technical Coverage",
    description: "Valuation, accounting, M&A, and LBO concepts explained with examples.",
  },
]

export function WhyItWorks() {
  return (
    <section className="bg-navy py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">What You Get</h2>
        </div>

        {/* Reasons Grid */}
        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="rounded-lg border border-white/10 bg-white/5 p-6"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold/10">
                <reason.icon className="h-5 w-5 text-gold" />
              </div>

              <h3 className="mt-4 text-base font-semibold text-white">{reason.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
