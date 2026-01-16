import { NextRequest, NextResponse } from 'next/server'
import { getDb } from '@/lib/db'

// Simple admin auth check
function isAuthorized(request: NextRequest): boolean {
  const authHeader = request.headers.get('authorization')
  if (!authHeader) return false
  
  const adminPassword = process.env.ADMIN_PASSWORD?.trim()
  if (!adminPassword) return false
  
  const token = authHeader.replace('Bearer ', '').trim()
  return token === adminPassword
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { id } = await params
    const body = await request.json()
    const { status, admin_notes } = body

    const sql = getDb()

    // Build update query based on what's provided
    if (status && admin_notes !== undefined) {
      await sql`
        UPDATE resume_submissions
        SET status = ${status}, admin_notes = ${admin_notes}, updated_at = NOW()
        WHERE id = ${parseInt(id)}
      `
    } else if (status) {
      await sql`
        UPDATE resume_submissions
        SET status = ${status}, updated_at = NOW()
        WHERE id = ${parseInt(id)}
      `
    } else if (admin_notes !== undefined) {
      await sql`
        UPDATE resume_submissions
        SET admin_notes = ${admin_notes}, updated_at = NOW()
        WHERE id = ${parseInt(id)}
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
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { id } = await params
    const sql = getDb()

    await sql`
      DELETE FROM resume_submissions
      WHERE id = ${parseInt(id)}
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
