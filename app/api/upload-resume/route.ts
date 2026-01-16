import { NextRequest, NextResponse } from 'next/server'
import { put } from '@vercel/blob'
import { getDb } from '@/lib/db'
import { PRODUCTS } from '@/lib/stripe'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File | null
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const phone = formData.get('phone') as string
    const serviceType = formData.get('serviceType') as 'resume-review' | 'resume-rewrite'
    const targetRole = formData.get('targetRole') as string
    const targetFirms = formData.get('targetFirms') as string
    const currentStatus = formData.get('currentStatus') as string
    const experienceLevel = formData.get('experienceLevel') as string
    const timeline = formData.get('timeline') as string
    const specificConcerns = formData.get('specificConcerns') as string
    const additionalNotes = formData.get('additionalNotes') as string

    if (!file || !email || !name) {
      return NextResponse.json(
        { error: 'File, name, and email are required' },
        { status: 400 }
      )
    }

    // Validate file type
    const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
    if (!validTypes.includes(file.type)) {
      return NextResponse.json(
        { error: 'Invalid file type. Please upload PDF, DOC, or DOCX' },
        { status: 400 }
      )
    }

    // Validate file size (10MB max)
    if (file.size > 10 * 1024 * 1024) {
      return NextResponse.json(
        { error: 'File too large. Maximum size is 10MB' },
        { status: 400 }
      )
    }

    // Generate unique filename
    const timestamp = Date.now()
    const safeEmail = email.replace(/[^a-zA-Z0-9]/g, '_')
    const extension = file.name.split('.').pop()
    const filename = `resumes/${safeEmail}_${timestamp}.${extension}`

    // Upload to Vercel Blob
    const blob = await put(filename, file, {
      access: 'public',
      addRandomSuffix: false,
    })

    // Store submission in resume_submissions table
    const sql = getDb()
    
    // Try to insert with payment_status column, fall back to without it
    let result
    try {
      result = await sql`
        INSERT INTO resume_submissions (
          name, email, phone, service_type, target_role, target_firms,
          current_status, experience_level, timeline, specific_concerns,
          additional_notes, resume_url, resume_filename, status, payment_status
        )
        VALUES (
          ${name},
          ${email.toLowerCase()},
          ${phone || null},
          ${serviceType},
          ${targetRole || null},
          ${targetFirms || null},
          ${currentStatus || null},
          ${experienceLevel || null},
          ${timeline || null},
          ${specificConcerns || null},
          ${additionalNotes || null},
          ${blob.url},
          ${file.name},
          'pending',
          'unpaid'
        )
        RETURNING id
      `
    } catch {
      // Fallback: insert without payment_status column (for older schema)
      result = await sql`
        INSERT INTO resume_submissions (
          name, email, phone, service_type, target_role, target_firms,
          current_status, experience_level, timeline, specific_concerns,
          additional_notes, resume_url, resume_filename, status
        )
        VALUES (
          ${name},
          ${email.toLowerCase()},
          ${phone || null},
          ${serviceType},
          ${targetRole || null},
          ${targetFirms || null},
          ${currentStatus || null},
          ${experienceLevel || null},
          ${timeline || null},
          ${specificConcerns || null},
          ${additionalNotes || null},
          ${blob.url},
          ${file.name},
          'pending'
        )
        RETURNING id
      `
    }

    const submissionId = result[0].id
    let paymentUrl: string | null = null

    // Only create Stripe checkout if STRIPE_SECRET_KEY is configured
    if (process.env.STRIPE_SECRET_KEY) {
      try {
        const { getStripe } = await import('@/lib/stripe')
        const { sendResumePaymentLink } = await import('@/lib/email')
        
        const product = PRODUCTS[serviceType]
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
                  description: serviceType === 'resume-review' 
                    ? 'Detailed line-by-line feedback with specific rewrite suggestions. Delivered in 3-5 business days.'
                    : 'Complete resume overhaul with 2 revision rounds. Delivered in 5-7 business days.',
                },
                unit_amount: product.price * 100,
              },
              quantity: 1,
            },
          ],
          mode: 'payment',
          success_url: `${appUrl}/success?type=resume&session_id={CHECKOUT_SESSION_ID}`,
          cancel_url: `${appUrl}/resume-services`,
          customer_email: email.toLowerCase(),
          metadata: {
            productId: serviceType,
            productName: product.name,
            submissionId: submissionId.toString(),
          },
        })

        paymentUrl = session.url

        // Send payment link email
        const serviceName = serviceType === 'resume-review' ? 'Resume Review' : 'Resume Rewrite'
        try {
          await sendResumePaymentLink(
            email.toLowerCase(),
            name,
            serviceName,
            session.url!,
            product.price
          )
        } catch (emailError) {
          console.error('Failed to send payment link email:', emailError)
        }
      } catch (stripeError) {
        console.error('Stripe checkout error (non-fatal):', stripeError)
        // Continue without payment - admin can send payment link manually
      }
    }

    return NextResponse.json({ 
      success: true,
      submissionId,
      paymentUrl,
      url: blob.url 
    })
  } catch (error) {
    console.error('Resume upload error:', error)
    return NextResponse.json(
      { error: 'Failed to upload resume' },
      { status: 500 }
    )
  }
}
