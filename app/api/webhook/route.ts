import { NextRequest, NextResponse } from 'next/server'
import { getStripe } from '@/lib/stripe'
import { getDb } from '@/lib/db'
import { sendPurchaseConfirmation } from '@/lib/email'
import Stripe from 'stripe'

export async function POST(request: NextRequest) {
  const body = await request.text()
  const signature = request.headers.get('stripe-signature')!

  let event: Stripe.Event

  try {
    const stripe = getStripe()
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (err) {
    console.error('Webhook signature verification failed:', err)
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session

    const productId = session.metadata?.productId
    const productName = session.metadata?.productName
    const email = session.customer_email

    if (!productId || !email) {
      console.error('Missing product or email in session metadata')
      return NextResponse.json({ error: 'Missing data' }, { status: 400 })
    }

    // Record the order
    const sql = getDb()
    await sql`
      INSERT INTO orders (stripe_session_id, stripe_customer_id, email, product_type, product_id, amount, status)
      VALUES (
        ${session.id}, 
        ${session.customer as string}, 
        ${email}, 
        ${productId.includes('resume') ? 'service' : 'playbook'},
        ${productId}, 
        ${session.amount_total || 0}, 
        'completed'
      )
    `

    // For playbooks, generate a download link
    if (!productId.includes('resume')) {
      // In production, you'd store actual PDFs in Vercel Blob
      // For now, we'll create a signed download URL pattern
      const downloadUrl = `${process.env.NEXT_PUBLIC_APP_URL}/api/download?order=${session.id}&product=${productId}`
      
      try {
        await sendPurchaseConfirmation(email, productName || productId, downloadUrl)
      } catch (emailError) {
        console.error('Failed to send purchase confirmation:', emailError)
      }
    } else {
      // For resume services, just send a confirmation that we received their order
      // They'll need to submit their resume separately
      try {
        await sendPurchaseConfirmation(
          email, 
          productName || productId, 
          `${process.env.NEXT_PUBLIC_APP_URL}/submit-resume?order=${session.id}`
        )
      } catch (emailError) {
        console.error('Failed to send purchase confirmation:', emailError)
      }
    }
  }

  return NextResponse.json({ received: true })
}

