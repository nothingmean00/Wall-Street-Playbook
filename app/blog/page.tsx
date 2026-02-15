import type { Metadata } from "next"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { getAllBlogPosts } from "@/lib/blog"
import { BlogContent } from "@/components/blog/blog-content"

export const metadata: Metadata = {
  title: "Finance Recruiting Blog | Investment Banking, PE & Hedge Fund Careers",
  description:
    "Free guides on IB technicals, PE recruiting timelines, networking scripts, salary data, and career strategies. Written by practitioners, not professors.",
  keywords: [
    "investment banking career advice",
    "PE recruiting tips",
    "finance interview preparation",
    "wall street networking",
    "breaking into investment banking",
    "hedge fund career",
    "investment banking salary",
    "non-target to Wall Street",
    "IB technical questions",
    "private equity recruiting",
    "finance career guide",
  ],
  openGraph: {
    title: "Finance Recruiting Blog | Wall Street Playbook",
    description:
      "Free guides on IB technicals, PE recruiting timelines, networking scripts, salary data, and career strategies. Written by practitioners, not professors.",
    url: "https://wallstreetplaybook.org/blog",
    type: "website",
    images: [{ url: "https://wallstreetplaybook.org/og-blog.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Finance Recruiting Blog | Wall Street Playbook",
    description:
      "Free guides on IB technicals, PE recruiting timelines, networking scripts, salary data, and career strategies.",
    images: ["https://wallstreetplaybook.org/og-blog.jpg"],
  },
  alternates: {
    canonical: "https://wallstreetplaybook.org/blog",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
}

export default function BlogPage() {
  const allPosts = getAllBlogPosts()

  // CollectionPage structured data for the blog listing
  const blogListStructuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Finance Recruiting Blog",
    description:
      "Free guides on IB technicals, PE recruiting timelines, networking scripts, salary data, and career strategies.",
    url: "https://wallstreetplaybook.org/blog",
    publisher: {
      "@type": "Organization",
      name: "Wall Street Playbook",
      url: "https://wallstreetplaybook.org",
    },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: allPosts.length,
      itemListElement: allPosts.slice(0, 20).map((post, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `https://wallstreetplaybook.org/blog/${post.slug}`,
        name: post.title,
      })),
    },
  }

  return (
    <div className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListStructuredData) }}
      />
      <Navbar />
      <main className="flex-grow">
        <BlogContent allPosts={allPosts} />
      </main>
      <Footer />
    </div>
  )
}
