import { NextRequest, NextResponse } from 'next/server'
import { initDatabase } from '@/lib/db'

// This endpoint should be called once to initialize the database tables
export async function POST(request: NextRequest) {
  // Allow in development OR with admin password
  const isDev = process.env.NODE_ENV === 'development'
  const authHeader = request.headers.get('authorization')
  const adminPassword = process.env.ADMIN_PASSWORD
  const isAuthorized = authHeader && adminPassword && authHeader.replace('Bearer ', '') === adminPassword
  
  if (!isDev && !isAuthorized) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    await initDatabase()
    return NextResponse.json({ success: true, message: 'Database initialized with all tables including resume_submissions' })
  } catch (error) {
    console.error('Database init error:', error)
    return NextResponse.json({ error: 'Failed to initialize database' }, { status: 500 })
  }
}
