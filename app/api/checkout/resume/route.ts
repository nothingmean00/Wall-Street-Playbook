import { NextRequest, NextResponse } from 'next/server'
import { getStripe, PRODUCTS } from '@/lib/stripe'
import { getDb } from '@/lib/db'
import { rateLimit, getClientIp } from '@/lib/rate-limit'
import { resumeCheckoutSchema } from '@/lib/validation'

export async function POST(request: NextRequest) {
  // Rate limit: 5 requests per 60 seconds per IP
  const ip = getClientIp(request)
  const limiter = rateLimit(`resume-checkout:${ip}`, { maxRequests: 5, windowSeconds: 60 })

  if (!limiter.success) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      { status: 429 }
    )
  }

  try {
    const body = await request.json()
    const parsed = resumeCheckoutSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Submission ID required' },
        { status: 400 }
      )
    }

    const { submissionId } = parsed.data

    // Get the submission details
    const sql = getDb()
    const submissions = await sql`
      SELECT * FROM resume_submissions WHERE id = ${submissionId}
    `

    if (submissions.length === 0) {
      return NextResponse.json(
        { error: 'Submission not found' },
        { status: 404 }
      )
    }

    const submission = submissions[0]
    const productId = submission.service_type as 'resume-review' | 'resume-rewrite'
    
    if (!PRODUCTS[productId]) {
      return NextResponse.json(
        { error: 'Invalid service type' },
        { status: 400 }
      )
    }

    const product = PRODUCTS[productId]
    const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://wallstreetplaybook.org'

    const stripe = getStripe()
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: product.name,
              description: productId === 'resume-review' 
                ? 'Detailed line-by-line feedback with specific rewrite suggestions. Delivered in 3-5 business days.'
                : 'Complete resume overhaul with 2 revision rounds. Delivered in 5-7 business days.',
            },
            unit_amount: product.price * 100, // Stripe uses cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${appUrl}/success?type=resume&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${appUrl}/resume-services`,
      customer_email: submission.email,
      metadata: {
        productId,
        productName: product.name,
        submissionId: submissionId.toString(),
      },
    })

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error('Resume checkout error:', error)
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    )
  }
}
