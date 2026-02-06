/**
 * Simple in-memory rate limiter for API routes.
 * Uses a sliding window approach with automatic cleanup.
 *
 * Note: In a multi-instance deployment (e.g., multiple Vercel serverless functions),
 * each instance maintains its own store. For stricter enforcement, consider
 * using @upstash/ratelimit with Redis. This is still effective at reducing
 * abuse since most requests hit the same instance within the window.
 */

interface RateLimitEntry {
  count: number
  resetAt: number
}

const store = new Map<string, RateLimitEntry>()

// Clean up expired entries every 5 minutes
const CLEANUP_INTERVAL = 5 * 60 * 1000
let lastCleanup = Date.now()

function cleanup() {
  const now = Date.now()
  if (now - lastCleanup < CLEANUP_INTERVAL) return
  lastCleanup = now

  for (const [key, entry] of store) {
    if (now > entry.resetAt) {
      store.delete(key)
    }
  }
}

interface RateLimitOptions {
  /** Maximum number of requests allowed within the window */
  maxRequests: number
  /** Time window in seconds */
  windowSeconds: number
}

interface RateLimitResult {
  success: boolean
  remaining: number
  resetAt: number
}

/**
 * Check if a request should be rate-limited.
 *
 * @param identifier - Unique identifier for the client (e.g., IP address)
 * @param options - Rate limit configuration
 * @returns Whether the request is allowed
 */
export function rateLimit(
  identifier: string,
  options: RateLimitOptions
): RateLimitResult {
  cleanup()

  const now = Date.now()
  const windowMs = options.windowSeconds * 1000
  const key = identifier

  const entry = store.get(key)

  if (!entry || now > entry.resetAt) {
    // First request or window expired
    store.set(key, {
      count: 1,
      resetAt: now + windowMs,
    })
    return {
      success: true,
      remaining: options.maxRequests - 1,
      resetAt: now + windowMs,
    }
  }

  if (entry.count >= options.maxRequests) {
    return {
      success: false,
      remaining: 0,
      resetAt: entry.resetAt,
    }
  }

  entry.count++
  return {
    success: true,
    remaining: options.maxRequests - entry.count,
    resetAt: entry.resetAt,
  }
}

/**
 * Extract a client identifier from the request.
 * Uses X-Forwarded-For (set by Vercel/proxies) or falls back to a default.
 */
export function getClientIp(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for')
  if (forwarded) {
    return forwarded.split(',')[0].trim()
  }
  // Fallback — all requests from unknown IPs share a bucket
  return 'unknown'
}
