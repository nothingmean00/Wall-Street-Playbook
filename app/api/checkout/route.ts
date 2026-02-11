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
    const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://wallstreetplaybook.org'

    const stripe = getStripe()

    // Use price_data for dynamic pricing (no need to pre-create prices in Stripe Dashboard)
    // If a real Stripe Price ID is configured, use it; otherwise use inline price_data
    const hasPriceId = product.priceId && !product.priceId.startsWith('price_xxx')

    // For bundles, list individual playbooks as line items with the bundle discount
    const bundledProducts = productId === 'available-bundle'
      ? ['finance-technical-interview-guide', 'pe-recruiting-playbook', 'networking-cold-email-playbook'] as const
      : null

    const lineItems = bundledProducts
      ? bundledProducts.map((pid, index) => {
          const bundledProduct = PRODUCTS[pid]
          const bundledHasPriceId = bundledProduct.priceId && !bundledProduct.priceId.startsWith('price_xxx')
          // Distribute the bundle discount across items proportionally
          const totalOriginal = bundledProducts.reduce((sum, id) => sum + PRODUCTS[id].price, 0)
          const discountedPrice = Math.round((bundledProduct.price / totalOriginal) * product.price)
          
          return bundledHasPriceId
            ? { price: bundledProduct.priceId, quantity: 1 }
            : {
                price_data: {
                  currency: 'usd' as const,
                  product_data: {
                    name: bundledProduct.name,
                    description: index === 0 ? 'Bundle discount applied' : undefined,
                  },
                  unit_amount: discountedPrice * 100,
                },
                quantity: 1,
              }
        })
      : [
          hasPriceId
            ? { price: product.priceId, quantity: 1 }
            : {
                price_data: {
                  currency: 'usd' as const,
                  product_data: {
                    name: product.name,
                  },
                  unit_amount: product.price * 100, // Stripe uses cents
                },
                quantity: 1,
              },
        ]

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${appUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${appUrl}/playbooks`,
      customer_email: email,
      metadata: {
        productId,
        productName: product.name,
        ...(bundledProducts && { bundledProductIds: bundledProducts.join(',') }),
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
