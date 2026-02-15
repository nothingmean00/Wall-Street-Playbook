import { NextResponse } from "next/server"

export const maxDuration = 60

/**
 * Vercel Cron endpoint — called every 12 hours to refresh the jobs cache.
 * Protected by CRON_SECRET so only Vercel's scheduler can trigger it.
 *
 * Budget:  5 queries × 3 pages = 15 API calls per run
 *          2 runs/day × 30 days = 900 calls/month  (9% of 10,000 quota)
 */
export async function GET(request: Request) {
  // Verify the request is from Vercel Cron
  const authHeader = request.headers.get("authorization")
  const cronSecret = process.env.CRON_SECRET

  if (!cronSecret) {
    return NextResponse.json({ error: "CRON_SECRET not configured" }, { status: 500 })
  }

  if (authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    // Trigger the main jobs endpoint with refresh + secret
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
      || (process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : "http://localhost:3000")

    const refreshUrl = `${baseUrl}/api/jobs?refresh=true&cron_secret=${encodeURIComponent(cronSecret)}`

    const res = await fetch(refreshUrl, { cache: "no-store" })
    const data = await res.json()

    return NextResponse.json({
      ok: true,
      jobsCount: data.total || data.jobs?.length || 0,
      source: data.source,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error("Cron refresh failed:", error)
    return NextResponse.json(
      { error: "Refresh failed", details: String(error) },
      { status: 500 }
    )
  }
}
