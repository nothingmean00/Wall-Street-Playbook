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

export async function GET(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const sql = getDb()
    
    const submissions = await sql`
      SELECT 
        id, name, email, phone, service_type, target_role, target_firms,
        current_status, experience_level, timeline, specific_concerns,
        additional_notes, resume_url, resume_filename, status, 
        payment_status, stripe_session_id, amount_paid,
        admin_notes, created_at, updated_at
      FROM resume_submissions
      ORDER BY created_at DESC
    `

    return NextResponse.json({ submissions })
  } catch (error) {
    console.error('Error fetching submissions:', error)
    return NextResponse.json(
      { error: 'Failed to fetch submissions' },
      { status: 500 }
    )
  }
}
