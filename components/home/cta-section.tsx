import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="bg-off-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-navy md:text-3xl">
            Ready to start preparing?
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-charcoal/70">
            Get instant access to all materials. One-time purchase, no subscriptions.
          </p>

          <div className="mt-6 sm:mt-8 flex flex-col items-center justify-center gap-3 sm:gap-4 sm:flex-row">
            <Link
              href="/playbooks"
              className="group flex w-full items-center justify-center gap-2 rounded-lg bg-navy px-5 sm:px-6 py-3 text-sm sm:text-base font-semibold text-white transition-colors hover:bg-gold hover:text-navy sm:w-auto"
            >
              Browse Playbooks
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/resume-services"
              className="w-full rounded-lg border-2 border-navy px-5 sm:px-6 py-3 text-sm sm:text-base font-semibold text-navy transition-colors hover:bg-navy hover:text-white sm:w-auto text-center"
            >
              Resume Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
