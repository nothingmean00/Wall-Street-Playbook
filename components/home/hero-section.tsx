import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative bg-navy overflow-hidden">
      {/* Background with geometric pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23C9A86E' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          {/* Headline */}
          <h1 className="text-balance text-3xl sm:text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Preparation Materials for{" "}
            <span className="text-gold">Finance Recruiting</span>
          </h1>

          {/* Subheadline - honest and direct */}
          <p className="mx-auto mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-white/70">
            Technical guides, networking frameworks, and interview prep for investment banking, 
            private equity, and hedge fund roles.
          </p>

          {/* CTAs */}
          <div className="mt-8 sm:mt-10 flex flex-col items-center justify-center gap-3 sm:gap-4 sm:flex-row">
            <Link
              href="/playbooks"
              className="group flex w-full items-center justify-center gap-2 rounded-lg bg-gold px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-navy transition-colors hover:bg-white sm:w-auto"
            >
              Browse Playbooks
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/resume-services"
              className="w-full rounded-lg border-2 border-white/20 px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-white transition-all hover:border-gold hover:text-gold sm:w-auto text-center"
            >
              Resume Services
            </Link>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-off-white to-transparent" />
    </section>
  )
}
