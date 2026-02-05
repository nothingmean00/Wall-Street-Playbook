import Link from "next/link"
import { ArrowRight, Clock, Shield } from "lucide-react"
import { type LucideIcon } from "lucide-react"

interface HeroSectionProps {
  badge: string
  title: string
  titleHighlight: string
  description: string
  primaryCTA: {
    text: string
    href: string
  }
  secondaryCTA: {
    text: string
    href: string
  }
  turnaround?: string
  showGuarantee?: boolean
}

export function HeroSection({
  badge,
  title,
  titleHighlight,
  description,
  primaryCTA,
  secondaryCTA,
  turnaround = "5-7 Day Turnaround",
  showGuarantee = true,
}: HeroSectionProps) {
  return (
    <section className="relative bg-navy-deep pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep via-navy to-navy-deep" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,_rgba(201,168,110,0.15),_transparent)]" />
      </div>
      
      <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-gold mb-4">{badge}</p>
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {title} <span className="text-gradient-gold">{titleHighlight}</span>
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-white/60 max-w-2xl mx-auto">
          {description}
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={primaryCTA.href}
            className="group flex items-center gap-2 rounded-xl bg-gold px-8 py-4 text-base font-semibold text-navy transition-all hover:bg-white"
          >
            {primaryCTA.text}
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href={secondaryCTA.href}
            className="rounded-xl border-2 border-white/20 px-8 py-4 text-base font-semibold text-white transition-all hover:border-gold hover:text-gold"
          >
            {secondaryCTA.text}
          </Link>
        </div>

        {(turnaround || showGuarantee) && (
          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-white/50">
            {turnaround && (
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-gold" />
                {turnaround}
              </span>
            )}
            {showGuarantee && (
              <span className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-gold" />
                Money-Back Guarantee
              </span>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
