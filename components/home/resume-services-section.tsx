import Link from "next/link"
import { resumeServices } from "@/lib/data"
import { ArrowRight, CheckCircle, Clock, FileText, Pencil, Star } from "lucide-react"

export function ResumeServicesSection() {
  return (
    <section className="relative bg-white py-16 sm:py-24 lg:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-navy/5 rounded-full blur-3xl" />
      </div>
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 mb-6">
            <Star className="w-4 h-4 text-gold" />
            <span className="text-xs font-semibold uppercase tracking-widest text-gold">Professional Services</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-5xl">
            Resume <span className="text-gradient-gold">Services</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-charcoal/60">
            Your resume gets 30 seconds. Make every word count with professional optimization.
          </p>
        </div>

        {/* Service Cards */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-2">
          {resumeServices.map((service, index) => {
            const Icon = service.id === "resume-review" ? FileText : Pencil
            const isRecommended = index === 1

            return (
              <div
                key={service.id}
                className={`group relative flex flex-col rounded-2xl bg-white transition-all duration-500 overflow-hidden ${
                  isRecommended 
                    ? 'ring-2 ring-gold shadow-xl' 
                    : 'border border-border shadow-lg hover:shadow-xl'
                }`}
              >
                {/* Recommended badge */}
                {isRecommended && (
                  <div className="bg-gradient-to-r from-gold to-gold-light px-6 py-3 text-center">
                    <span className="text-sm font-bold text-navy">⭐ Recommended for Competitive Roles</span>
                  </div>
                )}

                {/* Card Header */}
                <div className="p-5 sm:p-8 pb-0">
                  <div className="flex items-start gap-4">
                    <div className={`flex h-12 w-12 sm:h-16 sm:w-16 flex-shrink-0 items-center justify-center rounded-xl sm:rounded-2xl ${
                      isRecommended 
                        ? 'bg-gradient-to-br from-gold to-gold-dark shadow-lg shadow-gold/30' 
                        : 'bg-gradient-to-br from-navy to-navy-deep shadow-lg'
                    }`}>
                      <Icon className={`h-5 w-5 sm:h-7 sm:w-7 ${isRecommended ? 'text-navy' : 'text-gold'}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-navy">{service.title}</h3>
                      <div className="mt-2 flex items-center gap-4">
                        <div className="flex items-center gap-1.5 text-sm text-charcoal/60">
                          <Clock className="h-4 w-4 text-gold" />
                          <span>{service.turnaround}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Price */}
                  <div className="mt-6 flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-navy">${service.price}</span>
                    <span className="text-sm text-charcoal/60">one-time payment</span>
                  </div>
                  
                  <p className="mt-4 text-sm leading-relaxed text-charcoal/60">{service.description}</p>
                </div>

                {/* What's Included */}
                <div className="flex-grow p-5 sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-wider text-charcoal/60 mb-4">What&apos;s Included</p>
                  <ul className="space-y-3">
                    {service.includes.map((item, i) => (
                      <li key={i} className="flex gap-3">
                        <CheckCircle className={`mt-0.5 h-5 w-5 flex-shrink-0 ${isRecommended ? 'text-gold' : 'text-gold/70'}`} />
                        <span className="text-sm text-charcoal/70">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="p-5 sm:p-8 pt-0">
                  <Link
                    href={`/submit-resume?service=${service.id}`}
                    className={`group/btn w-full flex items-center justify-center gap-2 rounded-xl py-4 text-base font-semibold transition-all ${
                      isRecommended
                        ? 'bg-navy text-white hover:bg-gold hover:text-navy hover:shadow-lg'
                        : 'bg-navy/10 text-navy hover:bg-navy hover:text-white'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="h-5 w-5 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </div>
                
                {/* Hover gradient effect */}
                <div className={`absolute inset-0 bg-gradient-to-t from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${isRecommended ? 'hidden' : ''}`} />
              </div>
            )
          })}
        </div>
        
        {/* Guarantee badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 rounded-full bg-navy/5 px-6 py-3">
            <svg className="w-6 h-6 text-gold" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium text-navy">100% Money-Back Guarantee — Not satisfied? Full refund, no questions asked.</span>
          </div>
        </div>
      </div>
    </section>
  )
}
