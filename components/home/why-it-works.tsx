import { FileText, Users, Clock, BookOpen, ArrowUpRight } from "lucide-react"
import Link from "next/link"

const reasons = [
  {
    icon: FileText,
    title: "Structured Content",
    description: "Organized frameworks covering technical concepts, behavioral questions, and recruiting strategies.",
    number: "01",
  },
  {
    icon: Users,
    title: "Networking Templates",
    description: "Ready-to-use email and message templates for reaching out to professionals in the industry.",
    number: "02",
  },
  {
    icon: Clock,
    title: "Recruiting Calendars",
    description: "Timeline guides for IB, PE, and hedge fund cycles to help you stay on track.",
    number: "03",
  },
  {
    icon: BookOpen,
    title: "Technical Coverage",
    description: "Valuation, accounting, M&A, and LBO concepts explained with examples.",
    number: "04",
  },
]

export function WhyItWorks() {
  return (
    <section className="relative bg-navy py-24 lg:py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,_rgba(201,168,110,0.12),_transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_100%_100%,_rgba(201,168,110,0.08),_transparent)]" />
      </div>
      
      {/* Decorative grid */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 30h60M30 0v60' stroke='%23ffffff' stroke-width='0.5'/%3E%3C/svg%3E")`,
        }}
      />
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Header */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-gold mb-4">Why Choose Us</p>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl leading-tight">
              Built for <span className="text-gradient-gold">Results</span>, Not Just Information
            </h2>
            <p className="mt-6 text-lg text-white/60 leading-relaxed">
              Our materials are designed around what actually works in finance recruiting—structured frameworks that you can apply immediately.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/playbooks"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gold px-6 py-3.5 text-sm font-semibold text-navy transition-all hover:bg-white hover:shadow-lg"
              >
                Explore Playbooks
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:border-gold hover:text-gold"
              >
                Read Free Guides
              </Link>
            </div>
          </div>
          
          {/* Right column - Features */}
          <div className="grid sm:grid-cols-2 gap-5">
            {reasons.map((reason, index) => (
              <div
                key={reason.title}
                className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-gold/30 hover:bg-white/10"
              >
                {/* Number */}
                <span className="absolute top-4 right-4 text-4xl font-bold text-white/5 group-hover:text-gold/10 transition-colors">
                  {reason.number}
                </span>
                
                {/* Icon */}
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 transition-colors group-hover:bg-gold/20">
                  <reason.icon className="h-5 w-5 text-gold" />
                </div>

                <h3 className="text-lg font-semibold text-white mb-2">{reason.title}</h3>
                <p className="text-sm leading-relaxed text-white/60">{reason.description}</p>
                
                {/* Hover line accent */}
                <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
