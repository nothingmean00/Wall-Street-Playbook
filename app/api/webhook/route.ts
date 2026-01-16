import { NextRequest, NextResponse } from 'next/server'
import { getStripe, PRODUCTS } from '@/lib/stripe'
import { getDb } from '@/lib/db'
import { 
  sendPurchaseConfirmation, 
  sendResumePaymentConfirmation,
  sendAdminResumeNotification 
} from '@/lib/email'
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
    const submissionId = session.metadata?.submissionId

    if (!productId || !email) {
      console.error('Missing product or email in session metadata')
      return NextResponse.json({ error: 'Missing data' }, { status: 400 })
    }

    const sql = getDb()

    // Handle Resume Service Payments
    if (productId === 'resume-review' || productId === 'resume-rewrite') {
      const serviceName = productId === 'resume-review' ? 'Resume Review' : 'Resume Rewrite'
      const turnaround = productId === 'resume-review' ? '3-5 business days' : '5-7 business days'
      const price = PRODUCTS[productId].price

      // Update the resume submission with payment info
      if (submissionId) {
        await sql`
          UPDATE resume_submissions 
          SET 
            payment_status = 'paid',
            stripe_session_id = ${session.id},
            amount_paid = ${session.amount_total || 0},
            status = 'in_progress',
            updated_at = NOW()
          WHERE id = ${parseInt(submissionId)}
        `

        // Get the submission details for admin notification
        const submissions = await sql`
          SELECT * FROM resume_submissions WHERE id = ${parseInt(submissionId)}
        `
        
        if (submissions.length > 0) {
          const submission = submissions[0]
          
          // Send payment confirmation to customer
          try {
            await sendResumePaymentConfirmation(
              email,
              submission.name,
              serviceName,
              turnaround
            )
          } catch (emailError) {
            console.error('Failed to send payment confirmation:', emailError)
          }

          // Send notification to admin
          try {
            await sendAdminResumeNotification({
              name: submission.name,
              email: submission.email,
              serviceName,
              price,
              resumeUrl: submission.resume_url,
              targetRole: submission.target_role || 'Not specified',
              targetFirms: submission.target_firms || 'Not specified',
            })
          } catch (emailError) {
            console.error('Failed to send admin notification:', emailError)
          }
        }
      }

      // Also record in orders table
      await sql`
        INSERT INTO orders (stripe_session_id, stripe_customer_id, email, product_type, product_id, amount, status)
        VALUES (
          ${session.id}, 
          ${session.customer as string || ''}, 
          ${email}, 
          'service',
          ${productId}, 
          ${session.amount_total || 0}, 
          'completed'
        )
      `
    } 
    // Handle Playbook Purchases
    else {
      // Record the order
      await sql`
        INSERT INTO orders (stripe_session_id, stripe_customer_id, email, product_type, product_id, amount, status)
        VALUES (
          ${session.id}, 
          ${session.customer as string || ''}, 
          ${email}, 
          'playbook',
          ${productId}, 
          ${session.amount_total || 0}, 
          'completed'
        )
      `

      // Generate download link and send confirmation
      const downloadUrl = `${process.env.NEXT_PUBLIC_APP_URL}/api/download?order=${session.id}&product=${productId}`
      
      try {
        await sendPurchaseConfirmation(email, productName || productId, downloadUrl)
      } catch (emailError) {
        console.error('Failed to send purchase confirmation:', emailError)
      }
    }
  }

  return NextResponse.json({ received: true })
}
