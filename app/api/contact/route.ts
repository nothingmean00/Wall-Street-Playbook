import { NextRequest, NextResponse } from 'next/server'
import { getDb } from '@/lib/db'
import { sendContactConfirmation, sendContactNotification } from '@/lib/email'
import { rateLimit, getClientIp } from '@/lib/rate-limit'
import { contactSchema, sanitizeHtml } from '@/lib/validation'

export async function POST(request: NextRequest) {
  // Rate limit: 3 requests per 60 seconds per IP
  const ip = getClientIp(request)
  const limiter = rateLimit(`contact:${ip}`, { maxRequests: 3, windowSeconds: 60 })

  if (!limiter.success) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      { status: 429 }
    )
  }

  try {
    const body = await request.json()
    const parsed = contactSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Email and message are required' },
        { status: 400 }
      )
    }

    const { firstName, lastName, email, subject, message } = parsed.data

    // Insert into database
    const sql = getDb()
    await sql`
      INSERT INTO contact_submissions (first_name, last_name, email, subject, message)
      VALUES (${firstName}, ${lastName}, ${email}, ${subject}, ${message})
    `

    // Send emails with sanitized content
    try {
      await Promise.all([
        sendContactConfirmation(email, sanitizeHtml(firstName) || 'there'),
        sendContactNotification({
          firstName: sanitizeHtml(firstName),
          lastName: sanitizeHtml(lastName),
          email,
          subject: sanitizeHtml(subject),
          message: sanitizeHtml(message),
        }),
      ])
    } catch (emailError) {
      console.error('Failed to send contact emails:', emailError)
      // Don't fail the request if email fails
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to submit form' },
      { status: 500 }
    )
  }
}
