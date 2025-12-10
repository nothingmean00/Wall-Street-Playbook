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
    subject: '🎯 Your IB/PE Recruiting Edge Starts Here',
    html: `
      <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="text-align: center; margin-bottom: 32px;">
          <h1 style="color: #0A1A2F; margin: 0; font-size: 28px;">Wall Street Playbook</h1>
          <p style="color: #C9A86E; margin: 8px 0 0 0; font-size: 14px;">Tactical Prep for Finance Recruiting</p>
        </div>
        
        <h2 style="color: #0A1A2F; font-size: 22px;">Welcome — here's your recruiting edge.</h2>
        
        <p style="color: #333; line-height: 1.7; font-size: 16px;">
          You're now on the list. You'll get actionable recruiting insights, technical prep tips, and early access to new playbooks.
        </p>

        <div style="background: #F8F6F3; border-left: 4px solid #C9A86E; padding: 20px; margin: 24px 0; border-radius: 4px;">
          <p style="color: #0A1A2F; font-weight: 600; margin: 0 0 8px 0;">Start Here — Our Most Popular Guides:</p>
          <ul style="color: #333; line-height: 2; margin: 0; padding-left: 20px;">
            <li><a href="https://wallstreetplaybook.org/blog/how-to-break-into-investment-banking-2026" style="color: #0A1A2F; text-decoration: underline;">How to Break Into IB in 2026 (Complete Guide)</a></li>
            <li><a href="https://wallstreetplaybook.org/blog/100-investment-banking-technical-questions" style="color: #0A1A2F; text-decoration: underline;">100 Core Technical Questions by Topic</a></li>
            <li><a href="https://wallstreetplaybook.org/blog/cold-emailing-bankers-scripts" style="color: #0A1A2F; text-decoration: underline;">Cold Email Scripts That Get Responses</a></li>
            <li><a href="https://wallstreetplaybook.org/blog/investment-banking-resume-checklist" style="color: #0A1A2F; text-decoration: underline;">IB Resume Checklist</a></li>
          </ul>
        </div>

        <p style="color: #333; line-height: 1.7; font-size: 16px;">
          Ready to go deeper? Our playbooks include 400+ technical questions, networking scripts, and PE recruiting frameworks.
        </p>

        <div style="text-align: center; margin: 32px 0;">
          <a href="https://wallstreetplaybook.org/playbooks" style="display: inline-block; background: #C9A86E; color: #0A1A2F; padding: 14px 32px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 16px;">
            Browse Playbooks →
          </a>
        </div>

        <hr style="border: none; border-top: 1px solid #E5E5E5; margin: 32px 0;" />

        <p style="color: #666; font-size: 13px; line-height: 1.6;">
          Questions? Just reply to this email — I read every one.<br><br>
          — Wall Street Playbook Team
        </p>
        
        <p style="color: #999; font-size: 11px; margin-top: 24px;">
          You're receiving this because you signed up at wallstreetplaybook.org. 
          <a href="https://wallstreetplaybook.org/unsubscribe" style="color: #999;">Unsubscribe</a>
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
