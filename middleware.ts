import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const AI_BOT_PATTERNS = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "ClaudeBot",
  "anthropic-ai",
  "PerplexityBot",
  "Google-Extended",
  "Googlebot",
  "Bingbot",
  "Applebot",
  "Applebot-Extended",
  "FacebookBot",
  "Meta-ExternalAgent",
  "Amazonbot",
  "CCBot",
  "cohere-ai",
  "Bytespider",
  "YouBot",
]

function isAIBot(userAgent: string | null): boolean {
  if (!userAgent) return false
  return AI_BOT_PATTERNS.some((bot) => userAgent.includes(bot))
}

export function middleware(request: NextRequest) {
  const response = NextResponse.next()
  const userAgent = request.headers.get("user-agent")

  // For all public pages, set permissive X-Robots-Tag so AI crawlers can index everything
  response.headers.set(
    "X-Robots-Tag",
    "all, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
  )

  // If the request is from an AI bot, add extra signals
  if (isAIBot(userAgent)) {
    // Ensure no caching headers block the bot from getting fresh content
    response.headers.set("X-Content-Type-Options", "nosniff")
    // Signal that the content is AI-accessible
    response.headers.set("X-AI-Accessible", "true")
  }

  return response
}

export const config = {
  // Run middleware on all public pages, skip internal Next.js routes, API, and static files
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|api/|scripts/|admin).*)",
  ],
}
