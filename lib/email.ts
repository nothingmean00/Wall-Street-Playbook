import { Resend } from 'resend'

let resendInstance: Resend | null = null

function getResend() {
  if (!resendInstance) {
    if (!process.env.RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY environment variable is not set')
    }
    resendInstance = new Resend(process.env.RESEND_API_KEY)
  }
  return resendInstance
}

const FROM_EMAIL = 'Wall Street Playbook <support@wallstreetplaybook.com>'

export async function sendContactConfirmation(to: string, firstName: string) {
  const resend = getResend()
  await resend.emails.send({
    from: FROM_EMAIL,
    to,
    subject: 'We received your message',
    html: `
      <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #0A1A2F;">Thanks for reaching out, ${firstName}!</h2>
        <p style="color: #333; line-height: 1.6;">
          We've received your message and will get back to you within 24 hours.
        </p>
        <p style="color: #333; line-height: 1.6;">
          In the meantime, feel free to browse our <a href="https://wallstreetplaybook.com/playbooks" style="color: #C9A86E;">playbooks</a> 
          or check out our <a href="https://wallstreetplaybook.com/blog" style="color: #C9A86E;">free blog content</a>.
        </p>
        <p style="color: #666; font-size: 14px; margin-top: 32px;">
          — The Wall Street Playbook Team
        </p>
      </div>
    `,
  })
}

export async function sendContactNotification(data: {
  firstName: string
  lastName: string
  email: string
  subject: string
  message: string
}) {
  const resend = getResend()
  await resend.emails.send({
    from: FROM_EMAIL,
    to: 'support@wallstreetplaybook.com',
    subject: `New Contact: ${data.subject}`,
    html: `
      <div style="font-family: system-ui, sans-serif;">
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Subject:</strong> ${data.subject}</p>
        <p><strong>Message:</strong></p>
        <div style="background: #f5f5f5; padding: 16px; border-radius: 8px;">
          ${data.message.replace(/\n/g, '<br>')}
        </div>
      </div>
    `,
  })
}

export async function sendWelcomeEmail(to: string) {
  const resend = getResend()
  await resend.emails.send({
    from: FROM_EMAIL,
    to,
    subject: 'Welcome to Wall Street Playbook',
    html: `
      <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #0A1A2F;">Welcome to Wall Street Playbook</h2>
        <p style="color: #333; line-height: 1.6;">
          Thanks for subscribing! You'll receive occasional updates on new content, playbooks, and recruiting insights.
        </p>
        <p style="color: #333; line-height: 1.6;">
          To get started, check out some of our most popular resources:
        </p>
        <ul style="color: #333; line-height: 1.8;">
          <li><a href="https://wallstreetplaybook.com/blog/breaking-in-non-target" style="color: #C9A86E;">Breaking In From a Non-Target School</a></li>
          <li><a href="https://wallstreetplaybook.com/blog/lbo-modeling-fundamentals" style="color: #C9A86E;">LBO Modeling Fundamentals</a></li>
          <li><a href="https://wallstreetplaybook.com/playbooks" style="color: #C9A86E;">Browse All Playbooks</a></li>
        </ul>
        <p style="color: #666; font-size: 14px; margin-top: 32px;">
          — Alex Thornton<br>
          Wall Street Playbook
        </p>
      </div>
    `,
  })
}

export async function sendPurchaseConfirmation(to: string, productName: string, downloadUrl: string) {
  const resend = getResend()
  await resend.emails.send({
    from: FROM_EMAIL,
    to,
    subject: `Your download: ${productName}`,
    html: `
      <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #0A1A2F;">Thanks for your purchase!</h2>
        <p style="color: #333; line-height: 1.6;">
          Your copy of <strong>${productName}</strong> is ready to download.
        </p>
        <div style="margin: 32px 0;">
          <a href="${downloadUrl}" style="display: inline-block; background: #C9A86E; color: #0A1A2F; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-weight: 600;">
            Download Now
          </a>
        </div>
        <p style="color: #666; font-size: 14px;">
          This link will expire in 7 days. If you need a new download link, just reply to this email.
        </p>
        <p style="color: #666; font-size: 14px; margin-top: 32px;">
          — The Wall Street Playbook Team
        </p>
      </div>
    `,
  })
}
