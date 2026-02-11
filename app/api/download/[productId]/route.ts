import { NextRequest, NextResponse } from 'next/server'
import { getStripe } from '@/lib/stripe'

// Vercel Blob base URL
const BLOB_BASE_URL = process.env.BLOB_BASE_URL || 'https://53r2eh0lojknhqsa.public.blob.vercel-storage.com'

// Map product IDs to their PDF filenames in Vercel Blob
const PRODUCT_FILES: Record<string, string> = {
  'pe-recruiting-playbook': 'PE-Recruiting-Guide-2026.pdf',
  'finance-technical-interview-guide': 'IB-Technical-Interview-Guide.pdf',
  'networking-cold-email-playbook': 'Networking-Cold-Email-Playbook.pdf',
  'lbo-modeling-course': 'LBO-Modeling-Course.pdf',
  'stock-pitch-guide': 'Stock-Pitch-Guide.pdf',
  'resume-story-playbook': 'Resume-Story-Playbook.pdf',
  'restructuring-guide': 'Restructuring-Guide.pdf',
  'repe-modeling-guide': 'REPE-Modeling-Guide.pdf',
  'credit-direct-lending-playbook': 'Credit-Direct-Lending-Playbook.pdf',
  'superday-survival-guide': 'Superday-Survival-Guide.pdf',
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ productId: string }> }
) {
  try {
    const { productId } = await params
    const sessionId = request.nextUrl.searchParams.get('session_id')

    if (!sessionId) {
      return NextResponse.json(
        { error: 'Missing session_id' },
        { status: 400 }
      )
    }

    // Verify the Stripe session
    const stripe = getStripe()
    const session = await stripe.checkout.sessions.retrieve(sessionId)

    if (session.payment_status !== 'paid') {
      return NextResponse.json(
        { error: 'Payment not completed' },
        { status: 403 }
      )
    }

    // Verify the product matches
    if (session.metadata?.productId !== productId) {
      return NextResponse.json(
        { error: 'Product mismatch' },
        { status: 403 }
      )
    }

    // Get the filename for this product
    const filename = PRODUCT_FILES[productId]
    if (!filename) {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      )
    }

    // Fetch the PDF from Vercel Blob and stream it to the client
    const blobUrl = `${BLOB_BASE_URL}/${filename}`
    const blobResponse = await fetch(blobUrl)

    if (!blobResponse.ok) {
      console.error('Blob fetch error:', blobResponse.status, blobResponse.statusText)
      return NextResponse.json(
        { error: 'File not found. Please contact support.' },
        { status: 404 }
      )
    }

    const blob = await blobResponse.blob()

    return new NextResponse(blob, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${filename}"`,
        'Cache-Control': 'no-store',
      },
    })
  } catch (error) {
    console.error('Download error:', error)
    return NextResponse.json(
      { error: 'Download failed' },
      { status: 500 }
    )
  }
}
