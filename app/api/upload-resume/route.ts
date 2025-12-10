import { NextRequest, NextResponse } from 'next/server'
import { put } from '@vercel/blob'
import { getDb } from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File | null
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const phone = formData.get('phone') as string
    const serviceType = formData.get('serviceType') as string
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

    // Build detailed message with all form fields
    const serviceLabel = serviceType === 'resume-rewrite' ? 'Resume Rewrite ($497)' : 'Resume Review ($197)'
    
    const messageLines = [
      `SERVICE: ${serviceLabel}`,
      ``,
      `--- CONTACT INFO ---`,
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || 'Not provided'}`,
      ``,
      `--- BACKGROUND ---`,
      `Target Role: ${targetRole || 'Not specified'}`,
      `Target Firms: ${targetFirms || 'Not specified'}`,
      `Current Status: ${currentStatus || 'Not specified'}`,
      `Experience Level: ${experienceLevel || 'Not specified'}`,
      `Application Timeline: ${timeline || 'Not specified'}`,
      ``,
      `--- CONCERNS & NOTES ---`,
      `Specific Concerns: ${specificConcerns || 'None provided'}`,
      `Additional Notes: ${additionalNotes || 'None provided'}`,
      ``,
      `--- RESUME ---`,
      `Resume URL: ${blob.url}`,
    ]

    // Store submission in database
    const sql = getDb()
    await sql`
      INSERT INTO contact_submissions (first_name, last_name, email, subject, message, status)
      VALUES (
        ${name.split(' ')[0] || name},
        ${name.split(' ').slice(1).join(' ') || ''},
        ${email.toLowerCase()},
        ${`Resume Submission - ${serviceLabel}`},
        ${messageLines.join('\n')},
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
