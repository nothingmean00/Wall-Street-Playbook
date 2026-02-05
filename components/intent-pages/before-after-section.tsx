import { CheckCircle, XCircle } from "lucide-react"

interface BeforeAfterItem {
  context: string
  before: string
  after: string
}

interface BeforeAfterSectionProps {
  title: string
  subtitle?: string
  items: BeforeAfterItem[]
  beforeLabel?: string
  afterLabel?: string
  variant?: "light" | "dark"
}

export function BeforeAfterSection({
  title,
  subtitle,
  items,
  beforeLabel = "Before",
  afterLabel = "After",
  variant = "dark",
}: BeforeAfterSectionProps) {
  if (variant === "dark") {
    return (
      <section className="bg-navy py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-white sm:text-4xl text-center">{title}</h2>
            {subtitle && (
              <p className="mt-4 text-center text-white/60">{subtitle}</p>
            )}

            <div className="mt-12 space-y-8">
              {items.map((item, index) => (
                <div key={index} className="rounded-2xl bg-white/10 p-6">
                  <p className="text-sm font-semibold text-gold mb-4">{item.context}</p>
                  <div className="grid gap-4 lg:grid-cols-2">
                    <div className="rounded-lg bg-red-500/10 p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <XCircle className="h-5 w-5 text-red-400" />
                        <span className="text-sm font-semibold text-red-400">{beforeLabel}</span>
                      </div>
                      <p className="text-sm text-white/70">{item.before}</p>
                    </div>
                    <div className="rounded-lg bg-green-500/10 p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="h-5 w-5 text-green-400" />
                        <span className="text-sm font-semibold text-green-400">{afterLabel}</span>
                      </div>
                      <p className="text-sm text-white/70">{item.after}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-navy sm:text-4xl">{title}</h2>
          <div className="mt-2 h-1 w-20 bg-gold" />
          {subtitle && (
            <p className="mt-6 text-lg text-charcoal/70">{subtitle}</p>
          )}

          <div className="mt-12 space-y-8">
            {items.map((item, index) => (
              <div key={index} className="rounded-2xl bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold text-gold mb-4">{item.context}</p>
                <div className="grid gap-4 lg:grid-cols-2">
                  <div className="rounded-lg bg-red-50 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <XCircle className="h-5 w-5 text-red-500" />
                      <span className="text-sm font-semibold text-red-700">{beforeLabel}</span>
                    </div>
                    <p className="text-sm text-red-800">{item.before}</p>
                  </div>
                  <div className="rounded-lg bg-green-50 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-sm font-semibold text-green-700">{afterLabel}</span>
                    </div>
                    <p className="text-sm text-green-800">{item.after}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
