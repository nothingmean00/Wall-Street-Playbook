import { NextResponse } from 'next/server'
import { initDatabase } from '@/lib/db'

// This endpoint should be called once to initialize the database tables
// In production, you'd run this as a migration script instead
export async function POST() {
  // Only allow in development or with admin token
  const isDev = process.env.NODE_ENV === 'development'
  
  if (!isDev) {
    return NextResponse.json({ error: 'Not allowed in production' }, { status: 403 })
  }

  try {
    await initDatabase()
    return NextResponse.json({ success: true, message: 'Database initialized' })
  } catch (error) {
    console.error('Database init error:', error)
    return NextResponse.json({ error: 'Failed to initialize database' }, { status: 500 })
  }
}

