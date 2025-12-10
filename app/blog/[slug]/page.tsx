import type { Metadata } from "next"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { BlogEmailCTA } from "@/components/blog-email-cta"
import { guides } from "@/lib/data"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Clock, Calendar } from "lucide-react"

export async function generateStaticParams() {
  return guides.map((guide) => ({
    slug: guide.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const guide = guides.find((g) => g.slug === slug)
  if (!guide) return { title: "Not Found" }

  return {
    title: guide.title,
    description: guide.summary,
    keywords: [
      guide.category.toLowerCase(),
      "finance career",
      "wall street",
      guide.title.toLowerCase().split(" ").slice(0, 3).join(" "),
    ],
    authors: [{ name: "Wall Street Playbook" }],
    openGraph: {
      title: `${guide.title} | Wall Street Playbook`,
      description: guide.summary,
      url: `https://wallstreetplaybook.org/blog/${guide.slug}`,
      type: "article",
      publishedTime: guide.publishedAt,
      authors: ["Wall Street Playbook"],
      section: guide.category,
    },
    twitter: {
      card: "summary_large_image",
      title: guide.title,
      description: guide.summary,
    },
    alternates: {
      canonical: `https://wallstreetplaybook.org/blog/${guide.slug}`,
    },
  }
}

const categoryColors: Record<string, string> = {
  "Career Strategy": "bg-navy/10 text-navy",
  Recruiting: "bg-gold/20 text-gold",
  Technical: "bg-charcoal/10 text-charcoal",
  Interviews: "bg-navy/10 text-navy",
  Networking: "bg-gold/20 text-gold",
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const guide = guides.find((g) => g.slug === slug)

  if (!guide) {
    notFound()
  }

  const relatedPosts = guides.filter((g) => g.category === guide.category && g.slug !== guide.slug).slice(0, 2)

  const formattedDate = guide.publishedAt
    ? new Date(guide.publishedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null

  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.summary,
    author: {
      "@type": "Organization",
      name: "Wall Street Playbook",
    },
    publisher: {
      "@type": "Organization",
      name: "Wall Street Playbook",
      url: "https://wallstreetplaybook.org",
    },
    datePublished: guide.publishedAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://wallstreetplaybook.org/blog/${guide.slug}`,
    },
  }

  return (
    <div className="flex min-h-screen flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }} />

      <Navbar />
      <main className="flex-grow">
        {/* Article Header */}
        <section className="bg-navy py-16 lg:py-24">
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
                  categoryColors[guide.category] || "bg-navy/10 text-navy"
                }`}
              >
                {guide.category}
              </span>
              {guide.readTime && (
                <>
                  <span className="h-1 w-1 rounded-full bg-white/30" />
                  <span className="flex items-center gap-1 text-xs text-white/60">
                    <Clock className="h-3 w-3" />
                    {guide.readTime}
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

            <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-white text-balance">{guide.title}</h1>
            <p className="mt-6 text-lg text-white/70">{guide.summary}</p>
          </div>
        </section>

        {/* Article Content */}
        <section className="bg-off-white py-16 lg:py-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <article className="prose prose-lg prose-charcoal max-w-none">
              {guide.content ? (
                <div
                  className="text-charcoal/80 leading-relaxed space-y-4"
                  dangerouslySetInnerHTML={{
                    __html: guide.content
                      .split("\n\n")
                      .map((paragraph) => {
                        // Horizontal rule / divider
                        if (paragraph.trim() === "---") {
                          return `<hr class="my-10 border-gold/30" />`
                        }
                        // H2 headers
                        if (paragraph.startsWith("## ")) {
                          return `<h2 class="text-2xl font-bold text-charcoal mt-12 mb-4">${paragraph.replace("## ", "")}</h2>`
                        }
                        // H3 headers
                        if (paragraph.startsWith("### ")) {
                          return `<h3 class="text-xl font-semibold text-charcoal mt-8 mb-3">${paragraph.replace("### ", "")}</h3>`
                        }
                        // Block quotes (lines starting with >)
                        if (paragraph.startsWith("> ") || paragraph.startsWith(">")) {
                          const quoteContent = paragraph.replace(/^>\s?/gm, "")
                            .replace(/\*\*(.*?)\*\*/g, '<strong class="text-charcoal">$1</strong>')
                            .replace(/\*(.*?)\*/g, '<em>$1</em>')
                          return `<blockquote class="pl-4 border-l-4 border-gold bg-gold/5 py-3 pr-4 rounded-r-lg text-charcoal/80 italic my-4">${quoteContent}</blockquote>`
                        }
                        // Bullet lists (- items)
                        if (paragraph.startsWith("- ")) {
                          const items = paragraph.split("\n").filter(line => line.trim().startsWith("- "))
                          const listItems = items.map(item => {
                            const content = item.replace(/^-\s+/, "")
                              .replace(/\*\*(.*?)\*\*/g, '<strong class="text-charcoal">$1</strong>')
                              .replace(/\*(.*?)\*/g, '<em>$1</em>')
                              .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-gold hover:text-navy underline">$1</a>')
                            return `<li class="text-charcoal/80">${content}</li>`
                          }).join("")
                          return `<ul class="list-disc list-inside space-y-2 my-4 ml-4">${listItems}</ul>`
                        }
                        // Numbered lists
                        if (/^\d+\.\s/.test(paragraph.trim())) {
                          const items = paragraph.split("\n").filter(line => /^\d+\.\s/.test(line.trim()))
                          const listItems = items.map(item => {
                            const content = item.replace(/^\d+\.\s+/, "")
                              .replace(/\*\*(.*?)\*\*/g, '<strong class="text-charcoal">$1</strong>')
                              .replace(/\*(.*?)\*/g, '<em>$1</em>')
                              .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-gold hover:text-navy underline">$1</a>')
                            return `<li class="text-charcoal/80">${content}</li>`
                          }).join("")
                          return `<ol class="list-decimal list-inside space-y-2 my-4 ml-4">${listItems}</ol>`
                        }
                        // Regular paragraphs with formatting
                        const formatted = paragraph
                          .replace(/\*\*(.*?)\*\*/g, '<strong class="text-charcoal">$1</strong>')
                          .replace(/\*(.*?)\*/g, '<em>$1</em>')
                          .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-gold hover:text-navy underline">$1</a>')
                        return `<p class="text-charcoal/80 leading-relaxed">${formatted}</p>`
                      })
                      .join(""),
                  }}
                />
              ) : (
                <p className="text-charcoal/70">Full article content coming soon.</p>
              )}
            </article>

            {/* Email Capture CTA */}
            <BlogEmailCTA variant="inline" />

            {/* Gold divider */}
            <div className="my-12 h-px bg-gold/30" />

            {/* CTA Box */}
            <div className="rounded-xl bg-navy p-8 text-center">
              <h3 className="text-xl font-bold text-white">Go Deeper With Our Playbooks</h3>
              <p className="mt-3 text-sm text-white/70 max-w-lg mx-auto">
                This article covers the fundamentals. Our premium Playbooks provide the complete frameworks, templates,
                and scripts you need to execute at the highest level.
              </p>
              <Link
                href="/playbooks"
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-gold px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-white"
              >
                Browse Playbooks
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="bg-white py-16 lg:py-20 border-t border-border">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-charcoal mb-8">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group flex flex-col bg-off-white rounded-xl border border-border p-6 transition-all duration-200 hover:shadow-lg hover:border-gold/30"
                  >
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
                    <h3 className="text-lg font-semibold text-charcoal group-hover:text-navy transition-colors">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-sm text-charcoal/70 line-clamp-2 flex-grow">{post.summary}</p>
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
