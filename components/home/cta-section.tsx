import Link from "next/link"
import { ArrowRight, Zap } from "lucide-react"

export function CTASection() {
  return (
    <section className="relative bg-cream py-20 lg:py-28 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-gold/10 via-transparent to-navy/5 rounded-full blur-3xl" />
      </div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Icon */}
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-navy shadow-xl">
            <Zap className="h-8 w-8 text-gold" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-navy">
            Ready to Start <span className="text-gradient-gold">Preparing</span>?
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-charcoal/60 max-w-xl mx-auto">
            Get instant access to all materials. One-time purchase, lifetime access, no subscriptions.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/playbooks"
              className="group relative flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-navy px-8 py-4 text-base font-semibold text-white overflow-hidden transition-all hover:shadow-xl hover:shadow-navy/20"
            >
              <span className="relative z-10">Browse Playbooks</span>
              <ArrowRight className="relative z-10 h-5 w-5 transition-transform group-hover:translate-x-1" />
              <div className="absolute inset-0 bg-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="absolute inset-0 z-10 flex items-center justify-center gap-2 text-navy opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Browse Playbooks
                <ArrowRight className="h-5 w-5" />
              </span>
            </Link>
            <Link
              href="/resume-services"
              className="w-full sm:w-auto rounded-xl border-2 border-navy bg-transparent px-8 py-4 text-base font-semibold text-navy transition-all hover:bg-navy hover:text-white text-center"
            >
              Resume Services
            </Link>
          </div>
          
          {/* Trust badges */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-charcoal/40">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">Instant Download</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">Lifetime Updates</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">Money-Back Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
