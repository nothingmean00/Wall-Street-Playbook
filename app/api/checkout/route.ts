import { NextRequest, NextResponse } from 'next/server'
import { getStripe, PRODUCTS, ProductId } from '@/lib/stripe'

export async function POST(request: NextRequest) {
  try {
    const { productId, email } = await request.json()

    if (!productId || !PRODUCTS[productId as ProductId]) {
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

