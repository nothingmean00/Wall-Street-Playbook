import type { Metadata } from "next"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { BlogEmailCTA } from "@/components/blog-email-cta"
import { RelatedContent, relatedContentByTopic } from "@/components/related-content"
import { getAllBlogPosts, getBlogPost, getRelatedBlogPosts } from "@/lib/blog"
import { renderMarkdown } from "@/lib/markdown"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Clock, Calendar, BookOpen, Download, Shield, Star, CheckCircle } from "lucide-react"
import { BlogTracker } from "@/components/analytics/blog-tracker"
import { TrackedLink } from "@/components/analytics/tracked-link"

export async function generateStaticParams() {
  const posts = getAllBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) return { title: "Not Found" }

  const allKeywords = [
    ...(post.tags || []),
    post.category.toLowerCase(),
    "finance career",
    "wall street",
  ]
  // Deduplicate keywords (case-insensitive)
  const seen = new Set<string>()
  const uniqueKeywords = allKeywords.filter((k) => {
    const lower = k.toLowerCase()
    if (seen.has(lower)) return false
    seen.add(lower)
    return true
  })

  return {
    title: `${post.title} | Wall Street Playbook`,
    description: post.summary,
    keywords: uniqueKeywords,
    authors: [{ name: post.author || "Wall Street Playbook" }],
    openGraph: {
      title: `${post.title} | Wall Street Playbook`,
      description: post.summary,
      url: `https://wallstreetplaybook.org/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.publishedAt,
      authors: [post.author || "Wall Street Playbook"],
      section: post.category,
      tags: post.tags || [],
      images: [{ url: "https://wallstreetplaybook.org/og-blog.jpg", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | Wall Street Playbook`,
      description: post.summary,
      images: ["https://wallstreetplaybook.org/og-blog.jpg"],
    },
    alternates: {
      canonical: `https://wallstreetplaybook.org/blog/${post.slug}`,
    },
    robots: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  }
}

const categoryColors: Record<string, string> = {
  "Career Strategy": "bg-navy/10 text-navy",
  Recruiting: "bg-gold/20 text-gold",
  Technical: "bg-charcoal/10 text-charcoal",
  Interviews: "bg-navy/10 text-navy",
  Networking: "bg-gold/20 text-gold",
  "Interview Prep": "bg-gold/20 text-gold",
}

// Determine which product CTA to show in the sidebar
function getSidebarCTA(slug: string, category: string, tags?: string[]) {
  const tagSet = new Set((tags || []).map(t => t.toLowerCase()))
  const s = slug.toLowerCase()

  // PE-related content → PE Recruiting Playbook
  if (s.includes("pe-") || s.includes("private-equity") || s.includes("paper-lbo") || tagSet.has("private equity") || tagSet.has("PE interview")) {
    return {
      product: "2026 PE Recruiting Playbook",
      description: "42 pages. 20 chapters. Headhunter intel, timelines, compensation data, and contrarian insights.",
      price: 67,
      href: "/playbooks/pe-recruiting-playbook",
      features: ["Headhunter firm rankings & strategies", "Bank-to-fund pipeline data", "Paper LBO frameworks", "2026 timeline forecast"],
    }
  }

  // Networking-related content → Networking & Cold Email Playbook
  if (s.includes("networking") || s.includes("cold-email") || s.includes("informational-interview") || s.includes("how-finance-jobs") || tagSet.has("networking") || tagSet.has("cold email") || category === "Networking") {
    return {
      product: "Networking & Cold Email Playbook",
      description: "47 pages. 8 chapters. 13 email templates, 30 interview questions, and the system that turns cold outreach into offers.",
      price: 47,
      href: "/playbooks/networking-cold-email-playbook",
      features: ["13 cold email templates by scenario", "30 informational interview questions", "Response rate data by channel", "Email formats for 13+ major banks"],
    }
  }

  // Default → Finance Technical Interview Guide (covers the broadest audience)
  return {
      product: "Finance Technical Interview Guide",
    description: "80+ pages. 8 chapters. Every question tagged by frequency with dual-format answers.",
    price: 79,
    href: "/playbooks/finance-technical-interview-guide",
    features: ["Interview frequency tags on every concept", "30-second + 3-minute answer formats", "Red flag warnings for common mistakes", "Self-assessment scorecards"],
  }
}

// Helper to determine related content topic
function getRelatedTopic(slug: string, category: string, tags?: string[]): keyof typeof relatedContentByTopic | null {
  const tagSet = new Set((tags || []).map(t => t.toLowerCase()))
  if (tagSet.has("non-target") || slug.includes("non-target")) return "nonTarget"
  if (category === "Technical" || category === "Interview Prep" || slug.includes("dcf") || slug.includes("lbo") || slug.includes("technical") || slug.includes("accounting") || slug.includes("valuation") || slug.includes("wacc") || slug.includes("comps") || slug.includes("accretion")) return "technicals"
  if (slug.includes("resume") || category === "Resume") return "resume"
  if (slug.includes("private-equity") || slug.includes("pe-")) return "peRecruiting"
  if (slug.includes("hedge-fund") || slug.includes("hf-")) return "hfRecruiting"
  if (tagSet.has("salary") || tagSet.has("compensation") || tagSet.has("bonus") || slug.includes("salary")) return "compensation"
  if (tagSet.has("asia") || tagSet.has("hong kong") || tagSet.has("singapore") || slug.includes("hong-kong") || slug.includes("singapore") || slug.includes("asia")) return "asiaFinance"
  if (slug.includes("recruiting") || slug.includes("superday") || slug.includes("summer-analyst") || category === "Recruiting") return "ibRecruiting"
  return null
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedBlogPosts(slug, post.category, 2)
  const relatedTopic = getRelatedTopic(slug, post.category, post.tags)

  const formattedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null

  // Estimate word count from content for structured data
  const wordCount = post.content ? post.content.split(/\s+/).filter(Boolean).length : 0

  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.summary,
    image: "https://wallstreetplaybook.org/og-image.jpg",
    author: {
      "@type": "Organization",
      name: post.author || "Wall Street Playbook",
      url: "https://wallstreetplaybook.org",
    },
    publisher: {
      "@type": "Organization",
      name: "Wall Street Playbook",
      url: "https://wallstreetplaybook.org",
      logo: {
        "@type": "ImageObject",
        url: "https://wallstreetplaybook.org/android-chrome-512x512.png",
      },
    },
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://wallstreetplaybook.org/blog/${post.slug}`,
    },
    keywords: (post.tags || []).join(", "),
    articleSection: post.category,
    wordCount: wordCount,
    inLanguage: "en-US",
  }

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://wallstreetplaybook.org",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://wallstreetplaybook.org/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://wallstreetplaybook.org/blog/${post.slug}`,
      },
    ],
  }

  return (
    <div className="flex min-h-screen flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />
      <BlogTracker slug={post.slug} category={post.category} readTime={post.readTime} />

      <Navbar />
      <main className="flex-grow">
        {/* Article Header */}
        <section className="bg-navy pt-28 pb-16 lg:pt-32 lg:pb-24">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-gold transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span
                className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${
                  categoryColors[post.category] || "bg-navy/10 text-navy"
                }`}
              >
                {post.category}
              </span>
              {post.readTime && (
                <>
                  <span className="h-1 w-1 rounded-full bg-white/30" />
                  <span className="flex items-center gap-1 text-xs text-white/60">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </span>
                </>
              )}
              {formattedDate && (
                <>
                  <span className="h-1 w-1 rounded-full bg-white/30" />
                  <span className="flex items-center gap-1 text-xs text-white/60">
                    <Calendar className="h-3 w-3" />
                    {formattedDate}
                  </span>
                </>
              )}
            </div>

            <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-white text-balance">{post.title}</h1>
            <p className="mt-6 text-lg text-white/70">{post.summary}</p>
          </div>
        </section>

        {/* Article Content — 2-column layout */}
        <section className="bg-off-white py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_320px]">

              {/* LEFT — Article Body */}
              <div className="min-w-0">
                <article className="prose prose-lg prose-charcoal max-w-none">
                  {post.content ? (
                    <div
                      className="text-charcoal/80 leading-relaxed"
                      dangerouslySetInnerHTML={{
                        __html: renderMarkdown(post.content),
                      }}
                    />
                  ) : (
                    <p className="text-charcoal/70">Full article content coming soon.</p>
                  )}
                </article>

                {/* Email Capture CTA — inline after article */}
                <BlogEmailCTA variant="inline" />
              </div>

              {/* RIGHT — Sticky Sidebar */}
              <aside className="hidden lg:block">
                <div className="sticky top-24 space-y-6">
                  {/* Product CTA Card */}
                  {(() => {
                    const cta = getSidebarCTA(slug, post.category, post.tags)
                    return (
                      <div className="rounded-xl border border-border bg-white p-6 shadow-sm">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gold/10">
                            <BookOpen className="h-4 w-4 text-gold" />
                          </div>
                          <span className="text-xs font-semibold uppercase tracking-wider text-charcoal/50">Recommended</span>
                        </div>

                        <h3 className="text-base font-bold text-navy leading-snug">{cta.product}</h3>
                        <p className="mt-2 text-xs text-charcoal/60 leading-relaxed">{cta.description}</p>

                        <ul className="mt-4 space-y-2">
                          {cta.features.map((feature) => (
                            <li key={feature} className="flex gap-2 items-start">
                              <CheckCircle className="h-3.5 w-3.5 text-gold flex-shrink-0 mt-0.5" />
                              <span className="text-xs text-charcoal/70">{feature}</span>
                            </li>
                          ))}
                        </ul>

                        <TrackedLink
                          href={cta.href}
                          location="blog_sidebar_cta"
                          className="mt-5 flex items-center justify-center gap-2 w-full rounded-lg bg-gold px-4 py-3 text-sm font-semibold text-navy transition-colors hover:bg-gold/90"
                        >
                          Get the Guide — ${cta.price}
                          <ArrowRight className="h-4 w-4" />
                        </TrackedLink>

                        <div className="mt-3 flex items-center justify-center gap-1.5 text-xs text-green-600">
                          <Shield className="h-3 w-3" />
                          <span>30-day money-back guarantee</span>
                        </div>
                      </div>
                    )
                  })()}

                  {/* Free Cheat Sheet CTA */}
                  <TrackedLink
                    href="/ib-technical-cheat-sheet"
                    location="blog_sidebar_cheat_sheet"
                    className="block rounded-xl border border-gold/30 bg-gradient-to-br from-gold/5 to-transparent p-5 transition-all hover:border-gold/50 hover:shadow-sm"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Download className="h-4 w-4 text-gold" />
                      <span className="text-xs font-semibold text-gold">FREE DOWNLOAD</span>
                    </div>
                    <p className="text-sm font-semibold text-navy">20 Must-Know Technical Questions</p>
                    <p className="mt-1 text-xs text-charcoal/60">Quick-reference cheat sheet PDF</p>
                  </TrackedLink>

                  {/* Social Proof */}
                  <div className="rounded-xl border border-border bg-white p-5">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
                      ))}
                    </div>
                    <p className="text-xs text-charcoal/70 italic leading-relaxed">
                      "The frequency tags saved me 40+ hours of studying. Stopped wasting time on obscure topics."
                    </p>
                    <p className="mt-2 text-[10px] text-charcoal/40">— Liberal Arts Major → Evercore SA</p>
                  </div>

                  {/* Related Posts Sidebar */}
                  {relatedPosts.length > 0 && (
                    <div className="rounded-xl border border-border bg-white p-5">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-charcoal/50 mb-3">Related Articles</h4>
                      <div className="space-y-3">
                        {relatedPosts.map((rp) => (
                          <Link
                            key={rp.slug}
                            href={`/blog/${rp.slug}`}
                            className="block group"
                          >
                            <p className="text-sm font-medium text-navy group-hover:text-gold transition-colors leading-snug">{rp.title}</p>
                            {rp.readTime && (
                              <p className="text-[10px] text-charcoal/40 mt-0.5">{rp.readTime}</p>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Mobile CTA — shown below article on mobile only */}
        <section className="bg-off-white pb-16 lg:hidden">
          <div className="mx-auto max-w-3xl px-6">
            {(() => {
              const cta = getSidebarCTA(slug, post.category, post.tags)
              return (
                <div className="rounded-xl bg-navy p-8 text-center">
                  <h3 className="text-xl font-bold text-white">{cta.product}</h3>
                  <p className="mt-3 text-sm text-white/70">
                    {cta.description}
                  </p>
                  <TrackedLink
                    href={cta.href}
                    location="blog_mobile_cta"
                    className="mt-6 inline-flex items-center gap-2 rounded-lg bg-gold px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-white"
                  >
                    Get the Guide — ${cta.price}
                    <ArrowRight className="h-4 w-4" />
                  </TrackedLink>
                  <p className="mt-3 text-xs text-white/40">30-day money-back guarantee</p>
                </div>
              )
            })()}
          </div>
        </section>

        {/* Related Content - Topic-based recommendations */}
        {relatedTopic && (
          <RelatedContent
            title="Related Resources"
            items={relatedContentByTopic[relatedTopic]}
          />
        )}

        {/* Related Posts - Same category */}
        {relatedPosts.length > 0 && (
          <section className="bg-white py-16 lg:py-20 border-t border-border">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-charcoal mb-8">More in {post.category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    href={`/blog/${relatedPost.slug}`}
                    className="group flex flex-col bg-off-white rounded-xl border border-border p-6 transition-all duration-200 hover:shadow-lg hover:border-gold/30"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${
                          categoryColors[relatedPost.category] || "bg-navy/10 text-navy"
                        }`}
                      >
                        {relatedPost.category}
                      </span>
                      {relatedPost.readTime && (
                        <span className="flex items-center gap-1 text-xs text-charcoal/50">
                          <Clock className="h-3 w-3" />
                          {relatedPost.readTime}
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold text-charcoal group-hover:text-navy transition-colors">
                      {relatedPost.title}
                    </h3>
                    <p className="mt-2 text-sm text-charcoal/70 line-clamp-2 flex-grow">{relatedPost.summary}</p>
                    <div className="mt-4 flex items-center gap-1 text-sm font-medium text-gold">
                      Read Article
                      <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  )
}
