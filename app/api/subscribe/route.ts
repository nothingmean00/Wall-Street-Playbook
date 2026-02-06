import { NextRequest, NextResponse } from 'next/server'
import { getDb } from '@/lib/db'
import { sendWelcomeEmail } from '@/lib/email'
import { rateLimit, getClientIp } from '@/lib/rate-limit'
import { subscribeSchema } from '@/lib/validation'

export async function POST(request: NextRequest) {
  // Rate limit: 5 requests per 60 seconds per IP
  const ip = getClientIp(request)
  const limiter = rateLimit(`subscribe:${ip}`, { maxRequests: 5, windowSeconds: 60 })

  if (!limiter.success) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      { status: 429 }
    )
  }

  try {
    const body = await request.json()
    const parsed = subscribeSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      )
    }

    const { email, source } = parsed.data

    // Insert into database with source tracking
    const sql = getDb()
    await sql`
      INSERT INTO email_subscribers (email, source)
      VALUES (${email}, ${source})
      ON CONFLICT (email) DO UPDATE SET
        source = CASE 
          WHEN email_subscribers.source = 'website' THEN ${source}
          ELSE email_subscribers.source
        END
    `

    // Send welcome email
    try {
      await sendWelcomeEmail(email)
    } catch (emailError) {
      console.error('Failed to send welcome email:', emailError)
      // Don't fail the request if email fails
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Subscribe error:', error)
    return NextResponse.json(
      { error: 'Failed to subscribe' },
      { status: 500 }
    )
  }
}
