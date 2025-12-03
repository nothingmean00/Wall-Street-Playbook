import { NextRequest, NextResponse } from 'next/server'
import { getDb } from '@/lib/db'
import { sendContactConfirmation, sendContactNotification } from '@/lib/email'

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email, subject, message } = await request.json()

    // Validation
    if (!email || !message) {
      return NextResponse.json(
        { error: 'Email and message are required' },
        { status: 400 }
      )
    }

    // Insert into database
    const sql = getDb()
    await sql`
      INSERT INTO contact_submissions (first_name, last_name, email, subject, message)
      VALUES (${firstName}, ${lastName}, ${email.toLowerCase()}, ${subject}, ${message})
    `

    // Send emails
    try {
      await Promise.all([
        sendContactConfirmation(email, firstName || 'there'),
        sendContactNotification({ firstName, lastName, email, subject, message }),
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

