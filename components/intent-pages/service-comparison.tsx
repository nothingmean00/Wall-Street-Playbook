import Link from "next/link"
import { ArrowRight, CheckCircle, FileText, Pencil } from "lucide-react"

interface ServiceComparisonProps {
  title?: string
  reviewFeatures?: string[]
  rewriteFeatures?: string[]
  reviewPrice?: number
  rewritePrice?: number
  reviewHref?: string
  rewriteHref?: string
  recommendRewrite?: boolean
  recommendLabel?: string
}

export function ServiceComparison({
  title = "Choose Your Service",
  reviewFeatures = [
    "Line-by-line feedback",
    "Specific rewrite suggestions",
    "Positioning assessment",
    "One Q&A round included",
  ],
  rewriteFeatures = [
    "Full resume reconstruction",
    "Experience repositioning",
    "Optimized bullet writing",
    "Two revision rounds",
    "Final PDF + Word delivery",
  ],
  reviewPrice = 197,
  rewritePrice = 497,
  reviewHref = "/submit-resume?service=resume-review",
  rewriteHref = "/submit-resume?service=resume-rewrite",
  recommendRewrite = true,
  recommendLabel = "RECOMMENDED",
}: ServiceComparisonProps) {
  return (
    <section className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-navy sm:text-4xl text-center">{title}</h2>
          <div className="mt-2 flex justify-center">
            <div className="h-1 w-20 bg-gold" />
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {/* Resume Review */}
            <div className="rounded-2xl border border-border bg-white p-8 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-navy">
                  <FileText className="h-7 w-7 text-gold" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-navy">Resume Review</h3>
                  <p className="text-sm text-charcoal/60">Feedback & suggestions</p>
                </div>
              </div>
              
              <ul className="space-y-3">
                {reviewFeatures.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-gold" />
                    <span className="text-charcoal/80">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex items-center justify-between">
                <span className="text-3xl font-bold text-navy">${reviewPrice}</span>
                <Link
                  href={reviewHref}
                  className="flex items-center gap-2 rounded-lg bg-navy px-6 py-3 text-sm font-semibold text-white hover:bg-gold hover:text-navy transition-colors"
                >
                  Get Review
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Resume Rewrite */}
            <div className={`rounded-2xl bg-white p-8 shadow-lg relative ${recommendRewrite ? 'border-2 border-gold' : 'border border-border'}`}>
              {recommendRewrite && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gold text-navy text-xs font-bold px-4 py-1 rounded-full">{recommendLabel}</span>
                </div>
              )}
              
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gold">
                  <Pencil className="h-7 w-7 text-navy" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-navy">Resume Rewrite</h3>
                  <p className="text-sm text-charcoal/60">Complete reconstruction</p>
                </div>
              </div>
              
              <ul className="space-y-3">
                {rewriteFeatures.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-gold" />
                    <span className="text-charcoal/80">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex items-center justify-between">
                <span className="text-3xl font-bold text-navy">${rewritePrice}</span>
                <Link
                  href={rewriteHref}
                  className="flex items-center gap-2 rounded-lg bg-gold px-6 py-3 text-sm font-semibold text-navy hover:bg-navy hover:text-white transition-colors"
                >
                  Get Rewrite
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          <p className="mt-8 text-center text-sm text-charcoal/50">
            100% money-back guarantee. Not satisfied? Full refund.
          </p>
        </div>
      </div>
    </section>
  )
}
