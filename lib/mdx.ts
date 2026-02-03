import fs from "fs"
import path from "path"
import matter from "gray-matter"

const contentDirectory = path.join(process.cwd(), "content/blog")

export interface BlogPost {
  slug: string
  title: string
  summary: string
  category: string
  readTime?: string
  publishedAt?: string
  content: string
  author?: string
  tags?: string[]
}

export interface BlogPostMeta {
  slug: string
  title: string
  summary: string
  category: string
  readTime?: string
  publishedAt?: string
  author?: string
  tags?: string[]
}

// Check if content directory exists
function contentDirExists(): boolean {
  return fs.existsSync(contentDirectory)
}

// Get all blog post slugs
export function getAllPostSlugs(): string[] {
  if (!contentDirExists()) {
    return []
  }
  
  const fileNames = fs.readdirSync(contentDirectory)
  return fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => fileName.replace(/\.mdx$/, ""))
}

// Get a single blog post by slug
export function getPostBySlug(slug: string): BlogPost | null {
  if (!contentDirExists()) {
    return null
  }

  const fullPath = path.join(contentDirectory, `${slug}.mdx`)
  
  if (!fs.existsSync(fullPath)) {
    return null
  }

  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { data, content } = matter(fileContents)

  return {
    slug,
    title: data.title || "",
    summary: data.summary || data.description || "",
    category: data.category || "Uncategorized",
    readTime: data.readTime,
    publishedAt: data.publishedAt,
    content,
    author: data.author,
    tags: data.tags,
  }
}

// Get all blog posts metadata (for listing pages)
export function getAllPostsMeta(): BlogPostMeta[] {
  if (!contentDirExists()) {
    return []
  }

  const slugs = getAllPostSlugs()
  const posts = slugs
    .map((slug) => {
      const post = getPostBySlug(slug)
      if (!post) return null
      
      // Return only metadata, not content
      const { content, ...meta } = post
      return meta
    })
    .filter((post): post is BlogPostMeta => post !== null)
    .sort((a, b) => {
      if (!a.publishedAt || !b.publishedAt) return 0
      return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    })

  return posts
}

// Get posts by category
export function getPostsByCategory(category: string): BlogPostMeta[] {
  const allPosts = getAllPostsMeta()
  return allPosts.filter((post) => post.category === category)
}

// Get related posts (same category, excluding current)
export function getRelatedPosts(slug: string, category: string, limit = 4): BlogPostMeta[] {
  const allPosts = getAllPostsMeta()
  return allPosts
    .filter((post) => post.slug !== slug && post.category === category)
    .slice(0, limit)
}

// Get all unique categories
export function getAllCategories(): string[] {
  const allPosts = getAllPostsMeta()
  const categories = new Set(allPosts.map((post) => post.category))
  return Array.from(categories)
}

// Get all unique tags
export function getAllTags(): string[] {
  const allPosts = getAllPostsMeta()
  const tags = new Set(allPosts.flatMap((post) => post.tags || []))
  return Array.from(tags)
}
