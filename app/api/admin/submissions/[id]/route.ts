import { NextRequest, NextResponse } from 'next/server'
import { getDb } from '@/lib/db'
import { rateLimit, getClientIp } from '@/lib/rate-limit'
import { timingSafeEqual } from 'crypto'

/**
 * Timing-safe admin auth check.
 */
function isAuthorized(request: NextRequest): boolean {
  const authHeader = request.headers.get('authorization')
  if (!authHeader) return false
  
  const adminPassword = process.env.ADMIN_PASSWORD?.trim()
  if (!adminPassword) return false
  
  const token = authHeader.replace('Bearer ', '').trim()

  try {
    const tokenBuf = Buffer.from(token, 'utf-8')
    const passwordBuf = Buffer.from(adminPassword, 'utf-8')

    if (tokenBuf.length !== passwordBuf.length) return false
    return timingSafeEqual(tokenBuf, passwordBuf)
  } catch {
    return false
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const ip = getClientIp(request)
  const limiter = rateLimit(`admin:${ip}`, { maxRequests: 30, windowSeconds: 60 })

  if (!limiter.success) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      { status: 429 }
    )
  }

  if (!isAuthorized(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { id } = await params
    const parsedId = parseInt(id)

    if (isNaN(parsedId) || parsedId <= 0) {
      return NextResponse.json({ error: 'Invalid ID' }, { status: 400 })
    }

    const body = await request.json()
    const { status, admin_notes } = body

    // Validate status value if provided
    const validStatuses = ['pending', 'in_review', 'in_progress', 'completed', 'cancelled']
    if (status && !validStatuses.includes(status)) {
      return NextResponse.json({ error: 'Invalid status' }, { status: 400 })
    }

    const sql = getDb()

    // Build update query based on what's provided
    if (status && admin_notes !== undefined) {
      await sql`
        UPDATE resume_submissions
        SET status = ${status}, admin_notes = ${admin_notes}, updated_at = NOW()
        WHERE id = ${parsedId}
      `
    } else if (status) {
      await sql`
        UPDATE resume_submissions
        SET status = ${status}, updated_at = NOW()
        WHERE id = ${parsedId}
      `
    } else if (admin_notes !== undefined) {
      await sql`
        UPDATE resume_submissions
        SET admin_notes = ${admin_notes}, updated_at = NOW()
        WHERE id = ${parsedId}
      `
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error updating submission:', error)
    return NextResponse.json(
      { error: 'Failed to update submission' },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const ip = getClientIp(request)
  const limiter = rateLimit(`admin:${ip}`, { maxRequests: 30, windowSeconds: 60 })

  if (!limiter.success) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      { status: 429 }
    )
  }

  if (!isAuthorized(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { id } = await params
    const parsedId = parseInt(id)

    if (isNaN(parsedId) || parsedId <= 0) {
      return NextResponse.json({ error: 'Invalid ID' }, { status: 400 })
    }

    const sql = getDb()

    await sql`
      DELETE FROM resume_submissions
      WHERE id = ${parsedId}
    `

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting submission:', error)
    return NextResponse.json(
      { error: 'Failed to delete submission' },
      { status: 500 }
    )
  }
}
