import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  const privatePaths = ["/api/", "/scripts/", "/admin", "/success", "/submit-resume"]

  return {
    rules: [
      // Google (search + AI Overviews)
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: privatePaths,
      },
      {
        userAgent: "Google-Extended",
        allow: "/",
        disallow: privatePaths,
      },
      // OpenAI crawlers (ChatGPT, SearchGPT)
      {
        userAgent: "GPTBot",
        allow: "/",
        disallow: privatePaths,
      },
      {
        userAgent: "ChatGPT-User",
        allow: "/",
        disallow: privatePaths,
      },
      {
        userAgent: "OAI-SearchBot",
        allow: "/",
        disallow: privatePaths,
      },
      // Anthropic (Claude)
      {
        userAgent: "ClaudeBot",
        allow: "/",
        disallow: privatePaths,
      },
      {
        userAgent: "anthropic-ai",
        allow: "/",
        disallow: privatePaths,
      },
      // Perplexity
      {
        userAgent: "PerplexityBot",
        allow: "/",
        disallow: privatePaths,
      },
      // Microsoft / Bing (Copilot)
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: privatePaths,
      },
      // Apple (Siri, Apple Intelligence)
      {
        userAgent: "Applebot",
        allow: "/",
        disallow: privatePaths,
      },
      {
        userAgent: "Applebot-Extended",
        allow: "/",
        disallow: privatePaths,
      },
      // Meta
      {
        userAgent: "FacebookBot",
        allow: "/",
        disallow: privatePaths,
      },
      {
        userAgent: "Meta-ExternalAgent",
        allow: "/",
        disallow: privatePaths,
      },
      // Amazon (Alexa, AI)
      {
        userAgent: "Amazonbot",
        allow: "/",
        disallow: privatePaths,
      },
      // Common Crawl (training data for many AI models)
      {
        userAgent: "CCBot",
        allow: "/",
        disallow: privatePaths,
      },
      // Cohere
      {
        userAgent: "cohere-ai",
        allow: "/",
        disallow: privatePaths,
      },
      // ByteDance
      {
        userAgent: "Bytespider",
        allow: "/",
        disallow: privatePaths,
      },
      // You.com
      {
        userAgent: "YouBot",
        allow: "/",
        disallow: privatePaths,
      },
      // Catch-all for any other crawlers
      {
        userAgent: "*",
        allow: "/",
        disallow: privatePaths,
      },
    ],
    sitemap: "https://wallstreetplaybook.org/sitemap.xml",
    host: "https://wallstreetplaybook.org",
  }
}
