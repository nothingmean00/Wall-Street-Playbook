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
  ],
  openGraph: {
    title: "Finance Recruiting Blog | Wall Street Playbook",
    description:
      "Free guides on IB technicals, PE recruiting timelines, networking scripts, salary data, and career strategies. Written by practitioners, not professors.",
    url: "https://wallstreetplaybook.org/blog",
  },
  alternates: {
    canonical: "https://wallstreetplaybook.org/blog",
  },
}

export default function BlogPage() {
  const allPosts = getAllBlogPosts()

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow">
        <BlogContent allPosts={allPosts} />
      </main>
      <Footer />
    </div>
  )
}
