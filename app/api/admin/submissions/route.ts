import { NextRequest, NextResponse } from 'next/server'
import { getDb } from '@/lib/db'
import { rateLimit, getClientIp } from '@/lib/rate-limit'
import { timingSafeEqual } from 'crypto'

/**
 * Timing-safe admin auth check.
 * Uses constant-time comparison to prevent timing attacks on the password.
 */
function isAuthorized(request: NextRequest): boolean {
  const authHeader = request.headers.get('authorization')
  if (!authHeader) return false
  
  const adminPassword = process.env.ADMIN_PASSWORD?.trim()
  if (!adminPassword) return false
  
  const token = authHeader.replace('Bearer ', '').trim()

  // Constant-time comparison prevents timing attacks
  try {
    const tokenBuf = Buffer.from(token, 'utf-8')
    const passwordBuf = Buffer.from(adminPassword, 'utf-8')

    if (tokenBuf.length !== passwordBuf.length) return false
    return timingSafeEqual(tokenBuf, passwordBuf)
  } catch {
    return false
  }
}

export async function GET(request: NextRequest) {
  // Rate limit admin login attempts: 10 per minute per IP
  const ip = getClientIp(request)
  const limiter = rateLimit(`admin:${ip}`, { maxRequests: 10, windowSeconds: 60 })

  if (!limiter.success) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      { status: 429 }
    )
  }

  if (!isAuthorized(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const sql = getDb()
    
    const submissions = await sql`
      SELECT 
        id, name, email, phone, service_type, target_role, target_firms,
        current_status, experience_level, timeline, specific_concerns,
        additional_notes, resume_url, resume_filename, status, 
        payment_status, stripe_session_id, amount_paid,
        admin_notes, created_at, updated_at
      FROM resume_submissions
      ORDER BY created_at DESC
    `

    return NextResponse.json({ submissions })
  } catch (error) {
    console.error('Error fetching submissions:', error)
    return NextResponse.json(
      { error: 'Failed to fetch submissions' },
      { status: 500 }
    )
  }
}
