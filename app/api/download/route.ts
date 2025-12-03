import { NextRequest, NextResponse } from 'next/server'
import { getDb } from '@/lib/db'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const orderId = searchParams.get('order')
  const productId = searchParams.get('product')

  if (!orderId || !productId) {
    return NextResponse.json({ error: 'Missing parameters' }, { status: 400 })
  }

  // Verify the order exists and is completed
  const sql = getDb()
  const orders = await sql`
    SELECT * FROM orders 
    WHERE stripe_session_id = ${orderId} 
    AND product_id = ${productId}
    AND status = 'completed'
  `

  if (orders.length === 0) {
    return NextResponse.json({ error: 'Order not found' }, { status: 404 })
  }

  // In production, you would:
  // 1. Fetch the PDF from Vercel Blob storage
  // 2. Return it as a download
  
  // For now, redirect to a placeholder or the product page
  // You'll replace this with actual Blob storage URLs
  
  const blobUrl = process.env[`BLOB_URL_${productId.toUpperCase().replace(/-/g, '_')}`]
  
  if (blobUrl) {
    return NextResponse.redirect(blobUrl)
  }

  // Fallback: redirect to success page with download instructions
  return NextResponse.redirect(
    `${process.env.NEXT_PUBLIC_APP_URL}/success?product=${productId}&download=pending`
  )
}

