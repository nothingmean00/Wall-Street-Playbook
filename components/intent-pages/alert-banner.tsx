import { AlertTriangle } from "lucide-react"

interface AlertBannerProps {
  message: string
}

export function AlertBanner({ message }: AlertBannerProps) {
  return (
    <section className="bg-gold py-6">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-center gap-3 text-navy">
          <AlertTriangle className="h-5 w-5" />
          <p className="text-sm font-semibold">{message}</p>
        </div>
      </div>
    </section>
  )
}
