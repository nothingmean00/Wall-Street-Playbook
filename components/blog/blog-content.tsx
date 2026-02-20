"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { ArrowRight, Clock, BookOpen, Flame, TrendingUp, Filter, Search, Mail } from "lucide-react"
import { EmailCapture } from "@/components/email-capture"
import type { UnifiedBlogMeta } from "@/lib/blog"

const categoryColors: Record<string, { bg: string; text: string; activeBg: string; activeText: string }> = {
  "Career Strategy": { bg: "bg-navy/5", text: "text-navy/70", activeBg: "bg-navy", activeText: "text-white" },
  Recruiting: { bg: "bg-gold/10", text: "text-gold-dark", activeBg: "bg-gold", activeText: "text-navy" },
  Technical: { bg: "bg-emerald-50", text: "text-emerald-700", activeBg: "bg-emerald-600", activeText: "text-white" },
  Interviews: { bg: "bg-violet-50", text: "text-violet-700", activeBg: "bg-violet-600", activeText: "text-white" },
  Networking: { bg: "bg-amber-50", text: "text-amber-700", activeBg: "bg-amber-500", activeText: "text-white" },
}

const categoryColorsBadge: Record<string, string> = {
  "Career Strategy": "bg-navy/10 text-navy",
  Recruiting: "bg-gold/20 text-gold-dark",
  Technical: "bg-emerald-50 text-emerald-700",
  Interviews: "bg-violet-50 text-violet-700",
  Networking: "bg-amber-50 text-amber-700",
}

// Popular articles that consistently get search traffic
const popularSlugs = new Set([
  "100-investment-banking-technical-questions",
  "investment-banking-salaries-bonuses-2026",
  "private-equity-recruiting-timeline-2026",
  "how-to-break-into-investment-banking-2026",
  "cold-emailing-bankers-scripts-templates",
  "walk-me-through-a-dcf",
  "investment-banking-exit-opportunities",
  "non-target-to-investment-banking-2026",
])

// Playbook recommendations per category
const categoryPlaybooks: Record<string, { title: string; slug: string; price: number }> = {
  Technical: { title: "Finance Technical Interview Guide", slug: "finance-technical-interview-guide", price: 79 },
  Interviews: { title: "Finance Technical Interview Guide", slug: "finance-technical-interview-guide", price: 79 },
  Networking: { title: "Networking & Cold Email Playbook", slug: "networking-cold-email-playbook", price: 47 },
  Recruiting: { title: "2026 PE Recruiting Playbook", slug: "pe-recruiting-playbook", price: 67 },
  "Career Strategy": { title: "2026 PE Recruiting Playbook", slug: "pe-recruiting-playbook", price: 67 },
}

interface BlogContentProps {
  allPosts: UnifiedBlogMeta[]
}

export function BlogContent({ allPosts }: BlogContentProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All")
  const [searchQuery, setSearchQuery] = useState("")

  // Derive categories with counts
  const categories = useMemo(() => {
    const counts: Record<string, number> = {}
    allPosts.forEach((post) => {
      counts[post.category] = (counts[post.category] || 0) + 1
    })
    return Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .map(([name, count]) => ({ name, count }))
  }, [allPosts])

  // Filter posts
  const filteredPosts = useMemo(() => {
    let posts = allPosts
    if (activeCategory !== "All") {
      posts = posts.filter((p) => p.category === activeCategory)
    }
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      posts = posts.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.summary.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query)
      )
    }
    return posts
  }, [allPosts, activeCategory, searchQuery])

  const featuredPost = filteredPosts[0]
  const remainingPosts = filteredPosts.slice(1)

  // Determine the relevant playbook for upsell
  const upsellPlaybook =
    activeCategory !== "All" && categoryPlaybooks[activeCategory]
      ? categoryPlaybooks[activeCategory]
      : categoryPlaybooks["Technical"]

  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-28 pb-20 lg:pt-32 lg:pb-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 mb-6">
              <BookOpen className="w-4 h-4 text-gold" />
              <span className="text-xs font-semibold uppercase tracking-widest text-gold">Free Resources</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Finance Recruiting <span className="text-gradient-gold">Blog</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/60">
              Tactical insights on recruiting strategy, interview preparation, and career navigation in finance.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 text-sm text-white/40">
              <span className="font-semibold text-gold">{allPosts.length}</span> free articles across
              <span className="font-semibold text-gold">{categories.length}</span> categories
            </div>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="bg-off-white border-b border-border sticky top-[56px] sm:top-[72px] z-30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-1 sm:pb-0 flex-1">
              <Filter className="h-4 w-4 text-charcoal/40 flex-shrink-0" />
              <button
                onClick={() => setActiveCategory("All")}
                className={`flex-shrink-0 rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
                  activeCategory === "All"
                    ? "bg-navy text-white shadow-sm"
                    : "bg-white text-charcoal/60 border border-border hover:border-gold/30 hover:text-charcoal"
                }`}
              >
                All ({allPosts.length})
              </button>
              {categories.map((cat) => {
                const colors = categoryColors[cat.name] || categoryColors["Career Strategy"]
                const isActive = activeCategory === cat.name
                return (
                  <button
                    key={cat.name}
                    onClick={() => setActiveCategory(cat.name)}
                    className={`flex-shrink-0 rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
                      isActive
                        ? `${colors.activeBg} ${colors.activeText} shadow-sm`
                        : `bg-white text-charcoal/60 border border-border hover:border-gold/30 hover:text-charcoal`
                    }`}
                  >
                    {cat.name} ({cat.count})
                  </button>
                )
              })}
            </div>

            {/* Search */}
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-charcoal/30" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles..."
                className="w-full rounded-lg border border-border bg-white pl-9 pr-4 py-2 text-sm text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="bg-off-white py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="group block rounded-2xl border border-border bg-white p-8 lg:p-12 transition-all hover:shadow-xl hover:border-gold/30 relative overflow-hidden"
            >
              {/* Popular badge */}
              {popularSlugs.has(featuredPost.slug) && (
                <div className="absolute top-6 right-6">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-xs font-semibold text-orange-600">
                    <Flame className="h-3 w-3" />
                    Popular
                  </span>
                </div>
              )}

              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-semibold uppercase tracking-widest text-gold">Featured</span>
                    <span className="h-1 w-1 rounded-full bg-charcoal/30" />
                    <span
                      className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${
                        categoryColorsBadge[featuredPost.category] || "bg-navy/10 text-navy"
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
                  <h2 className="text-2xl lg:text-3xl font-bold text-navy group-hover:text-gold transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="mt-4 text-base text-charcoal/60 max-w-2xl leading-relaxed">{featuredPost.summary}</p>
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-gold lg:ml-8 flex-shrink-0">
                  Read Article
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Email Capture Mid-Page */}
      <section className="bg-navy py-10 sm:py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-5 sm:flex-row sm:gap-8">
            <div className="flex-shrink-0 hidden sm:flex h-14 w-14 items-center justify-center rounded-xl bg-gold/10">
              <Mail className="h-6 w-6 text-gold" />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <p className="text-base font-semibold text-white">Get weekly recruiting intel</p>
              <p className="mt-1 text-sm text-white/50">
                Technical prep tips, recruiting timeline updates, and career strategies. No spam.
              </p>
            </div>
            <div className="w-full sm:w-auto sm:min-w-[280px]">
              <EmailCapture variant="hero" />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="bg-off-white py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Results count */}
          <div className="flex items-center justify-between mb-8">
            <p className="text-sm text-charcoal/50">
              {filteredPosts.length === allPosts.length ? (
                <span>Showing all <span className="font-semibold text-charcoal">{allPosts.length}</span> articles</span>
              ) : (
                <span>
                  Showing <span className="font-semibold text-charcoal">{filteredPosts.length}</span> of {allPosts.length} articles
                  {activeCategory !== "All" && (
                    <span> in <span className="font-semibold text-charcoal">{activeCategory}</span></span>
                  )}
                </span>
              )}
            </p>
            {(activeCategory !== "All" || searchQuery) && (
              <button
                onClick={() => {
                  setActiveCategory("All")
                  setSearchQuery("")
                }}
                className="text-xs font-semibold text-gold hover:text-gold-dark transition-colors"
              >
                Clear filters
              </button>
            )}
          </div>

          {remainingPosts.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {remainingPosts.map((post) => {
                const isPopular = popularSlugs.has(post.slug)

                return (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group relative flex flex-col bg-white rounded-xl border border-border p-6 transition-all duration-300 hover:shadow-lg hover:border-gold/20 hover:-translate-y-0.5"
                  >
                    {/* Popular badge */}
                    {isPopular && (
                      <div className="absolute top-4 right-4">
                        <span className="inline-flex items-center gap-1 rounded-full bg-orange-50 border border-orange-200 px-2 py-0.5 text-[10px] font-semibold text-orange-600">
                          <Flame className="h-2.5 w-2.5" />
                          Popular
                        </span>
                      </div>
                    )}

                    {/* Category & Read Time */}
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${
                          categoryColorsBadge[post.category] || "bg-navy/10 text-navy"
                        }`}
                      >
                        {post.category}
                      </span>
                      {post.readTime && (
                        <span className="flex items-center gap-1 text-xs text-charcoal/40">
                          <Clock className="h-3 w-3" />
                          {post.readTime}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-navy group-hover:text-gold transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    {/* Summary */}
                    <p className="mt-2 text-sm text-charcoal/60 line-clamp-2 flex-grow leading-relaxed">{post.summary}</p>

                    {/* Read Link */}
                    <div className="mt-5 pt-4 border-t border-border">
                      <span className="flex items-center gap-2 text-sm font-semibold text-gold group-hover:gap-3 transition-all">
                        Read Article
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </Link>
                )
              })}
            </div>
          ) : (
            <div className="text-center py-16">
              <Search className="h-10 w-10 text-charcoal/20 mx-auto mb-4" />
              <p className="text-lg font-semibold text-navy">No articles found</p>
              <p className="mt-2 text-sm text-charcoal/50">
                Try adjusting your search or filter to find what you&apos;re looking for.
              </p>
              <button
                onClick={() => {
                  setActiveCategory("All")
                  setSearchQuery("")
                }}
                className="mt-4 text-sm font-semibold text-gold hover:text-gold-dark transition-colors"
              >
                View all articles
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Context-Aware Upsell */}
      <section className="bg-navy py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 mb-4">
                <TrendingUp className="w-4 h-4 text-gold" />
                <span className="text-xs font-semibold uppercase tracking-widest text-gold">Go Deeper</span>
              </div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                These Articles Are the Foundation.{" "}
                <span className="text-gradient-gold">The Playbooks Are the System.</span>
              </h2>
              <p className="mt-4 text-base text-white/60 leading-relaxed">
                Our blog gives you the concepts. The playbooks give you the complete frameworks, exact scripts,
                frequency-tagged questions, and step-by-step systems that candidates use to land offers.
              </p>
            </div>

            <div className="space-y-4">
              <Link
                href={`/playbooks/${upsellPlaybook.slug}`}
                className="group block rounded-xl border border-white/10 bg-white/5 p-5 hover:border-gold/30 hover:bg-white/10 transition-all"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gold font-semibold uppercase tracking-wider mb-1">Recommended for You</p>
                    <p className="text-base font-bold text-white group-hover:text-gold transition-colors">
                      {upsellPlaybook.title}
                    </p>
                  </div>
                  <span className="text-lg font-bold text-gold">${upsellPlaybook.price}</span>
                </div>
                <div className="mt-3 flex items-center gap-2 text-sm text-white/50 group-hover:text-gold/70 transition-colors">
                  View Playbook
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>

              <Link
                href="/playbooks"
                className="group block rounded-xl border border-white/10 bg-white/5 p-5 hover:border-gold/30 hover:bg-white/10 transition-all"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-base font-bold text-white group-hover:text-gold transition-colors">
                      Browse All Playbooks
                    </p>
                    <p className="mt-1 text-sm text-white/50">3 available now, 7 coming soon</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-white/30 group-hover:text-gold transition-colors" />
                </div>
              </Link>

              <Link
                href="/resume-services"
                className="group block rounded-xl border border-white/10 bg-white/5 p-5 hover:border-gold/30 hover:bg-white/10 transition-all"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-base font-bold text-white group-hover:text-gold transition-colors">
                      Resume Services
                    </p>
                    <p className="mt-1 text-sm text-white/50">Expert review starting at $197</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-white/30 group-hover:text-gold transition-colors" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
