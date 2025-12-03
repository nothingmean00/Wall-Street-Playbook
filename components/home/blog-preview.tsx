import Link from "next/link"
import { ArrowRight, Clock } from "lucide-react"
import { featuredGuides } from "@/lib/data"

const categoryColors: Record<string, string> = {
  "Career Strategy": "bg-navy/10 text-navy",
  Recruiting: "bg-gold/20 text-gold",
  Technical: "bg-charcoal/10 text-charcoal",
  Interviews: "bg-navy/10 text-navy",
  Networking: "bg-gold/20 text-gold",
}

export function BlogPreview() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-navy sm:text-3xl">From the Blog</h2>
            <p className="mt-2 text-base text-charcoal/70">
              Free articles on recruiting and interview preparation.
            </p>
          </div>
          <Link
            href="/blog"
            className="flex items-center gap-2 text-sm font-medium text-navy hover:text-gold transition-colors"
          >
            View All
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredGuides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/blog/${guide.slug}`}
              className="group flex flex-col rounded-lg border border-border bg-white p-5 transition-all hover:border-gold/40 hover:shadow-md"
            >
              {/* Category & Read Time */}
              <div className="flex items-center justify-between mb-3">
                <span
                  className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    categoryColors[guide.category] || "bg-navy/10 text-navy"
                  }`}
                >
                  {guide.category}
                </span>
                {guide.readTime && (
                  <span className="flex items-center gap-1 text-xs text-charcoal/50">
                    <Clock className="h-3 w-3" />
                    {guide.readTime}
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className="text-base font-semibold text-navy line-clamp-2">
                {guide.title}
              </h3>

              {/* Summary */}
              <p className="mt-2 text-sm text-charcoal/70 line-clamp-2 flex-grow">{guide.summary}</p>

              {/* Read Link */}
              <div className="mt-3 flex items-center gap-1 text-sm font-medium text-gold">
                Read Article
                <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
