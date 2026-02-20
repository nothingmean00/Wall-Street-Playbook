import { CheckCircle } from "lucide-react"
import { type LucideIcon } from "lucide-react"

interface Feature {
  icon?: LucideIcon
  title: string
  description: string
}

interface FeatureGridProps {
  title: string
  subtitle?: string
  features: Feature[]
  columns?: 2 | 3 | 4
  variant?: "cards" | "simple" | "icons"
  background?: "white" | "cream"
}

export function FeatureGrid({
  title,
  subtitle,
  features,
  columns = 2,
  variant = "cards",
  background = "white",
}: FeatureGridProps) {
  const bgClass = background === "white" ? "bg-white" : "bg-cream"
  const colsClass = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4",
  }[columns]

  return (
    <section className={`${bgClass} py-16 sm:py-20 lg:py-28`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-navy sm:text-4xl">{title}</h2>
          <div className="mt-2 h-1 w-20 bg-gold" />
          {subtitle && (
            <p className="mt-6 text-lg text-charcoal/70">{subtitle}</p>
          )}

          <div className={`mt-12 grid gap-6 ${colsClass}`}>
            {features.map((feature, index) => {
              const Icon = feature.icon || CheckCircle
              
              if (variant === "simple") {
                return (
                  <div key={index} className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gold/10">
                      <CheckCircle className="h-4 w-4 text-gold" />
                    </div>
                    <span className="text-sm text-charcoal/80">{feature.title}</span>
                  </div>
                )
              }

              if (variant === "icons") {
                return (
                  <div key={index} className="flex gap-4 rounded-xl bg-white p-5 shadow-sm">
                    <Icon className="h-6 w-6 flex-shrink-0 text-gold" />
                    <div>
                      <p className="font-semibold text-navy">{feature.title}</p>
                      <p className="mt-1 text-sm text-charcoal/60">{feature.description}</p>
                    </div>
                  </div>
                )
              }

              return (
                <div key={index} className="rounded-xl border border-border p-6">
                  <h3 className="text-lg font-semibold text-navy">{feature.title}</h3>
                  <p className="mt-2 text-sm text-charcoal/70">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
