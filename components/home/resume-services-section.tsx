import Link from "next/link"
import { resumeServices } from "@/lib/data"
import { ArrowRight, CheckCircle, Clock } from "lucide-react"

export function ResumeServicesSection() {
  return (
    <section className="bg-off-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-navy sm:text-3xl">Resume Services</h2>
          <p className="mt-4 text-base leading-relaxed text-charcoal/70">
            Professional resume review and rewriting for finance recruiting.
          </p>
        </div>

        {/* Service Cards */}
        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-6 lg:grid-cols-2">
          {resumeServices.map((service) => (
            <div
              key={service.id}
              className="flex flex-col rounded-lg border border-border bg-white"
            >
              <div className="flex flex-grow flex-col p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-navy">{service.title}</h3>
                    <div className="mt-1 flex items-center gap-1.5 text-sm text-charcoal/60">
                      <Clock className="h-4 w-4" />
                      <span>{service.turnaround}</span>
                    </div>
                  </div>
                  <div className="text-xl font-bold text-navy">${service.price}</div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-charcoal/70">{service.description}</p>

                {/* What's included */}
                <ul className="mt-4 flex-grow space-y-2">
                  {service.includes.map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" />
                      <span className="text-sm text-charcoal/70">{item}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/submit-resume?service=${service.id}`}
                  className="mt-6 flex items-center justify-center gap-2 rounded-lg bg-navy py-3 text-sm font-semibold text-white transition-colors hover:bg-gold hover:text-navy"
                >
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
