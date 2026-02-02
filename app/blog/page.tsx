import type { Metadata } from "next"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { getAllBlogPosts } from "@/lib/blog"
import Link from "next/link"
import { ArrowRight, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Finance Recruiting Insights & Career Guides",
  description:
    "Tactical insights on finance recruiting, technical interview preparation, networking strategies, and career development in investment banking, private equity, and hedge funds.",
  keywords: [
    "investment banking career advice",
    "PE recruiting tips",
    "finance interview preparation",
    "wall street networking",
    "breaking into investment banking",
    "hedge fund career",
  ],
  openGraph: {
    title: "Finance Recruiting Blog | Wall Street Playbook",
    description:
      "Tactical insights on recruiting, interview prep, networking, and career development in investment banking, PE, and hedge funds.",
    url: "https://wallstreetplaybook.org/blog",
  },
  alternates: {
    canonical: "https://wallstreetplaybook.org/blog",
  },
}

const categoryColors: Record<string, string> = {
  "Career Strategy": "bg-navy/10 text-navy",
  Recruiting: "bg-gold/20 text-gold",
  Technical: "bg-charcoal/10 text-charcoal",
  Interviews: "bg-navy/10 text-navy",
  Networking: "bg-gold/20 text-gold",
}

export default function BlogPage() {
  const allPosts = getAllBlogPosts()
  const featuredPost = allPosts[0]
  const remainingPosts = allPosts.slice(1)

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Page Header */}
        <section className="bg-navy py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-gold">Free Resources</p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">Blog</h1>
              <p className="mt-6 text-lg leading-relaxed text-white/70">
                Tactical insights on recruiting strategy, interview preparation, and career navigation in finance.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="bg-off-white py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="group block rounded-xl border border-border bg-white p-8 lg:p-12 transition-all hover:shadow-lg hover:border-gold/30"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-semibold uppercase tracking-widest text-gold">Featured</span>
                    <span className="h-1 w-1 rounded-full bg-charcoal/30" />
                    <span
                      className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${
                        categoryColors[featuredPost.category] || "bg-navy/10 text-navy"
                      }`}
                    >
                      {featuredPost.category}
                    </span>
                    {featuredPost.readTime && (
                      <>
                        <span className="h-1 w-1 rounded-full bg-charcoal/30" />
                        <span className="flex items-center gap-1 text-xs text-charcoal/50">
                          <Clock className="h-3 w-3" />
                          {featuredPost.readTime}
                        </span>
                      </>
                    )}
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-charcoal group-hover:text-navy transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="mt-4 text-base text-charcoal/70 max-w-2xl">{featuredPost.summary}</p>
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-gold lg:ml-8">
                  Read Article
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="bg-off-white pb-20 lg:pb-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {remainingPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col bg-white rounded-xl border border-border p-6 transition-all duration-200 hover:shadow-lg hover:border-gold/30"
                >
                  {/* Category & Read Time */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${
                        categoryColors[post.category] || "bg-navy/10 text-navy"
                      }`}
                    >
                      {post.category}
                    </span>
                    {post.readTime && (
                      <span className="flex items-center gap-1 text-xs text-charcoal/50">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-charcoal group-hover:text-navy transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Summary */}
                  <p className="mt-2 text-sm text-charcoal/70 line-clamp-2 flex-grow">{post.summary}</p>

                  {/* Read Link */}
                  <div className="mt-4 flex items-center gap-1 text-sm font-medium text-gold">
                    Read Article
                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Upsell Section */}
        <section className="bg-navy py-16">
          <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Go Deeper With Our Playbooks</h2>
            <p className="mt-4 text-base text-white/70">
              These articles provide a foundation. Our Playbooks deliver the complete frameworks, scripts, and detailed
              preparation materials you need to compete at the highest level.
            </p>
            <Link
              href="/playbooks"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-gold px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-white"
            >
              Browse Playbooks
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
