import Link from "next/link"
import { ArrowRight, Clock, BookOpen } from "lucide-react"
import { featuredGuides } from "@/lib/data"

const categoryColors: Record<string, { bg: string; text: string }> = {
  "Career Strategy": { bg: "bg-navy/10", text: "text-navy" },
  Recruiting: { bg: "bg-gold/20", text: "text-gold-dark" },
  Technical: { bg: "bg-emerald-100", text: "text-emerald-700" },
  Interviews: { bg: "bg-violet-100", text: "text-violet-700" },
  Networking: { bg: "bg-amber-100", text: "text-amber-700" },
}

export function BlogPreview() {
  return (
    <section className="relative bg-white py-24 lg:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 mesh-gradient opacity-30" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-t from-gold to-transparent" />
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 mb-6">
              <BookOpen className="w-4 h-4 text-gold" />
              <span className="text-xs font-semibold uppercase tracking-widest text-gold">Free Resources</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-5xl">
              From the <span className="text-gradient-gold">Blog</span>
            </h2>
            <p className="mt-2 text-base sm:text-lg text-charcoal/60">
              Free articles on recruiting and interview preparation.
            </p>
          </div>
          <Link
            href="/blog"
            className="group flex items-center gap-2 text-sm font-semibold text-navy hover:text-gold transition-colors"
          >
            View All Articles
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredGuides.map((guide, index) => {
            const colors = categoryColors[guide.category] || categoryColors["Career Strategy"]
            
            return (
              <Link
                key={guide.slug}
                href={`/blog/${guide.slug}`}
                className="group relative flex flex-col rounded-2xl bg-white border border-border p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-gold/20"
              >
                {/* Top bar decoration */}
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {/* Category & Read Time */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`inline-block rounded-lg px-3 py-1 text-xs font-semibold ${colors.bg} ${colors.text}`}>
                    {guide.category}
                  </span>
                  {guide.readTime && (
                    <span className="flex items-center gap-1.5 text-xs text-charcoal/40">
                      <Clock className="h-3.5 w-3.5" />
                      {guide.readTime}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-navy line-clamp-2 group-hover:text-gold transition-colors">
                  {guide.title}
                </h3>

                {/* Summary */}
                <p className="mt-3 text-sm text-charcoal/60 line-clamp-3 flex-grow leading-relaxed">
                  {guide.summary}
                </p>

                {/* Read Link */}
                <div className="mt-5 pt-4 border-t border-border">
                  <span className="flex items-center gap-2 text-sm font-semibold text-gold group-hover:text-gold-dark transition-colors">
                    Read Article
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
                
                {/* Corner decoration */}
                <div className="absolute bottom-4 right-4 w-8 h-8 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-gold to-transparent" />
                  <div className="absolute bottom-0 right-0 w-px h-full bg-gradient-to-t from-gold to-transparent" />
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
