import { NextRequest, NextResponse } from 'next/server'
import { getStripe, PRODUCTS, ProductId } from '@/lib/stripe'
import { rateLimit, getClientIp } from '@/lib/rate-limit'
import { checkoutSchema } from '@/lib/validation'

export async function POST(request: NextRequest) {
  // Rate limit: 10 requests per 60 seconds per IP
  const ip = getClientIp(request)
  const limiter = rateLimit(`checkout:${ip}`, { maxRequests: 10, windowSeconds: 60 })

  if (!limiter.success) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      { status: 429 }
    )
  }

  try {
    const body = await request.json()
    const parsed = checkoutSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Invalid product' },
        { status: 400 }
      )
    }

    const { productId, email } = parsed.data

    if (!PRODUCTS[productId as ProductId]) {
      return NextResponse.json(
        { error: 'Invalid product' },
        { status: 400 }
      )
    }

    const product = PRODUCTS[productId as ProductId]
    const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://wallstreetplaybook.com'

    const stripe = getStripe()
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: product.priceId,
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${appUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${appUrl}/playbooks`,
      customer_email: email,
      metadata: {
        productId,
        productName: product.name,
      },
    })

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error('Checkout error:', error)
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    )
  }
}
