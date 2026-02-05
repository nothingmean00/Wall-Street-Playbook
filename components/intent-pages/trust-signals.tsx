import { Shield, Users, Clock, Award } from "lucide-react"
import { type LucideIcon } from "lucide-react"

interface TrustSignal {
  icon: LucideIcon
  title: string
  description: string
}

interface TrustSignalsProps {
  signals?: TrustSignal[]
  variant?: "light" | "dark"
}

const defaultSignals: TrustSignal[] = [
  {
    icon: Shield,
    title: "Money-Back Guarantee",
    description: "Not satisfied? Full refund, no questions asked.",
  },
  {
    icon: Users,
    title: "Industry Experts",
    description: "Reviewed by people with real finance recruiting experience.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "Reviews in 3-5 days. Rewrites in 5-7 days.",
  },
]

export function TrustSignals({ signals = defaultSignals, variant = "light" }: TrustSignalsProps) {
  if (variant === "dark") {
    return (
      <section className="bg-navy py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl grid grid-cols-1 gap-8 sm:grid-cols-3">
            {signals.map((signal, index) => {
              const Icon = signal.icon
              return (
                <div key={index} className="text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gold/10">
                    <Icon className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-white">{signal.title}</h3>
                  <p className="mt-2 text-sm text-white/60">{signal.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl grid grid-cols-1 gap-8 sm:grid-cols-3">
          {signals.map((signal, index) => {
            const Icon = signal.icon
            return (
              <div key={index} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gold/10">
                  <Icon className="h-6 w-6 text-gold" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-navy">{signal.title}</h3>
                <p className="mt-2 text-sm text-charcoal/60">{signal.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
