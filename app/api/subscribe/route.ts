import { NextRequest, NextResponse } from 'next/server'
import { getDb } from '@/lib/db'
import { sendWelcomeEmail } from '@/lib/email'

export async function POST(request: NextRequest) {
  try {
    const { email, source = 'website' } = await request.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      )
    }

    // Insert into database with source tracking
    const sql = getDb()
    await sql`
      INSERT INTO email_subscribers (email, source)
      VALUES (${email.toLowerCase()}, ${source})
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

