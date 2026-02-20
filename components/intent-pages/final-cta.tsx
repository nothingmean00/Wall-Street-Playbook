import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface FinalCTAProps {
  title: string
  description: string
  primaryCTA: {
    text: string
    href: string
  }
  secondaryCTA?: {
    text: string
    href: string
  }
  footerText?: string
}

export function FinalCTA({
  title,
  description,
  primaryCTA,
  secondaryCTA,
  footerText = "100% Money-Back Guarantee • Confidential • Fast Turnaround",
}: FinalCTAProps) {
  return (
    <section className="bg-navy py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">{title}</h2>
        <p className="mt-4 text-lg text-white/60">{description}</p>
        
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={primaryCTA.href}
            className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-gold px-8 py-4 text-base font-semibold text-navy hover:bg-white transition-colors"
          >
            {primaryCTA.text}
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
          {secondaryCTA && (
            <Link
              href={secondaryCTA.href}
              className="w-full sm:w-auto text-center rounded-xl border-2 border-white/20 px-8 py-4 text-base font-semibold text-white hover:border-gold hover:text-gold transition-colors"
            >
              {secondaryCTA.text}
            </Link>
          )}
        </div>

        {footerText && (
          <p className="mt-8 text-sm text-white/40">{footerText}</p>
        )}
      </div>
    </section>
  )
}
