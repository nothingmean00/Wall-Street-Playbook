import { NextRequest, NextResponse } from 'next/server'
import { put } from '@vercel/blob'
import { getDb } from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File | null
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const targetRole = formData.get('targetRole') as string
    const notes = formData.get('notes') as string

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

    // Store submission in database
    const sql = getDb()
    await sql`
      INSERT INTO contact_submissions (first_name, last_name, email, subject, message, status)
      VALUES (
        ${name.split(' ')[0] || name},
        ${name.split(' ').slice(1).join(' ') || ''},
        ${email.toLowerCase()},
        'Resume Submission',
        ${`Target Role: ${targetRole || 'Not specified'}\n\nNotes: ${notes || 'None'}\n\nResume URL: ${blob.url}`},
        'resume_submitted'
      )
    `

    return NextResponse.json({ 
      success: true,
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

