import { guides, type Guide } from "./data"
import { getAllPostsMeta, getPostBySlug, type BlogPost, type BlogPostMeta } from "./mdx"

// Unified blog post type
export interface UnifiedBlogPost {
  slug: string
  title: string
  summary: string
  category: string
  readTime?: string
  publishedAt?: string
  content: string
  source: "mdx" | "data"
  author?: string
  tags?: string[]
}

export interface UnifiedBlogMeta {
  slug: string
  title: string
  summary: string
  category: string
  readTime?: string
  publishedAt?: string
  source: "mdx" | "data"
  author?: string
  tags?: string[]
}

// Convert data.ts guide to unified format
function guideToUnifiedMeta(guide: Guide): UnifiedBlogMeta {
  return {
    slug: guide.slug,
    title: guide.title,
    summary: guide.summary,
    category: guide.category,
    readTime: guide.readTime,
    publishedAt: guide.publishedAt,
    source: "data",
  }
}

function guideToUnifiedPost(guide: Guide): UnifiedBlogPost | null {
  if (!guide.content) return null
  return {
    slug: guide.slug,
    title: guide.title,
    summary: guide.summary,
    category: guide.category,
    readTime: guide.readTime,
    publishedAt: guide.publishedAt,
    content: guide.content,
    source: "data",
  }
}

// Convert MDX post to unified format
function mdxToUnifiedMeta(post: BlogPostMeta): UnifiedBlogMeta {
  return {
    ...post,
    source: "mdx",
  }
}

function mdxToUnifiedPost(post: BlogPost): UnifiedBlogPost {
  return {
    ...post,
    source: "mdx",
  }
}

// Get all blog posts metadata (combines both sources)
export function getAllBlogPosts(): UnifiedBlogMeta[] {
  // Get MDX posts
  const mdxPosts = getAllPostsMeta().map(mdxToUnifiedMeta)
  const mdxSlugs = new Set(mdxPosts.map((p) => p.slug))

  // Get data.ts posts (excluding any that exist in MDX - MDX takes priority)
  const dataPosts = guides
    .filter((g) => !mdxSlugs.has(g.slug))
    .map(guideToUnifiedMeta)

  // Combine and sort by date
  const allPosts = [...mdxPosts, ...dataPosts].sort((a, b) => {
    if (!a.publishedAt || !b.publishedAt) return 0
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  })

  return allPosts
}

// Get a single blog post by slug
export function getBlogPost(slug: string): UnifiedBlogPost | null {
  // Try MDX first (takes priority)
  const mdxPost = getPostBySlug(slug)
  if (mdxPost) {
    return mdxToUnifiedPost(mdxPost)
  }

  // Fall back to data.ts
  const guide = guides.find((g) => g.slug === slug)
  if (guide) {
    return guideToUnifiedPost(guide)
  }

  return null
}

// Get posts by category
export function getBlogPostsByCategory(category: string): UnifiedBlogMeta[] {
  return getAllBlogPosts().filter((post) => post.category === category)
}

// Get related posts
export function getRelatedBlogPosts(
  slug: string,
  category: string,
  limit = 4
): UnifiedBlogMeta[] {
  return getAllBlogPosts()
    .filter((post) => post.slug !== slug && post.category === category)
    .slice(0, limit)
}

// Get all categories
export function getAllBlogCategories(): string[] {
  const posts = getAllBlogPosts()
  const categories = new Set(posts.map((p) => p.category))
  return Array.from(categories)
}

// Get featured posts (most recent from different categories)
export function getFeaturedBlogPosts(limit = 3): UnifiedBlogMeta[] {
  const posts = getAllBlogPosts()
  const seenCategories = new Set<string>()
  const featured: UnifiedBlogMeta[] = []

  for (const post of posts) {
    if (!seenCategories.has(post.category)) {
      featured.push(post)
      seenCategories.add(post.category)
    }
    if (featured.length >= limit) break
  }

  // If we don't have enough from different categories, add more recent ones
  if (featured.length < limit) {
    for (const post of posts) {
      if (!featured.some((f) => f.slug === post.slug)) {
        featured.push(post)
      }
      if (featured.length >= limit) break
    }
  }

  return featured
}
