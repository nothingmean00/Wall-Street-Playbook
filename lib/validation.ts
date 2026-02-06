import { z } from 'zod'

/**
 * Shared Zod schemas for API input validation.
 */

/** Strict email validation */
const emailSchema = z
  .string()
  .email('Invalid email address')
  .max(254, 'Email too long')
  .transform((v) => v.toLowerCase().trim())

export const subscribeSchema = z.object({
  email: emailSchema,
  source: z.string().max(50).optional().default('website'),
})

export const contactSchema = z.object({
  firstName: z.string().max(100).optional().default(''),
  lastName: z.string().max(100).optional().default(''),
  email: emailSchema,
  subject: z.string().max(200).optional().default(''),
  message: z.string().min(1, 'Message is required').max(5000, 'Message too long'),
})

export const checkoutSchema = z.object({
  productId: z.string().min(1, 'Product ID is required').max(100),
  email: emailSchema.optional(),
})

export const resumeCheckoutSchema = z.object({
  submissionId: z.number().int().positive('Invalid submission ID'),
})

/**
 * Sanitize a string for safe HTML embedding in emails.
 * Escapes HTML entities to prevent XSS / injection.
 */
export function sanitizeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}
