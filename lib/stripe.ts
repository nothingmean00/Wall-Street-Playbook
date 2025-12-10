import Stripe from 'stripe'

let stripeInstance: Stripe | null = null

export function getStripe() {
  if (!stripeInstance) {
    if (!process.env.STRIPE_SECRET_KEY) {
      throw new Error('STRIPE_SECRET_KEY environment variable is not set')
    }
    stripeInstance = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2024-11-20.acacia',
    })
  }
  return stripeInstance
}

// Product IDs mapped to Stripe Price IDs (you'll create these in Stripe Dashboard)
export const PRODUCTS = {
  // Playbooks
  'ib-technical-guide': {
    priceId: process.env.STRIPE_PRICE_IB_TECHNICAL || 'price_xxx',
    name: 'IB Technical Interview Guide',
    price: 127,
  },
  'pe-recruiting-playbook': {
    priceId: process.env.STRIPE_PRICE_PE || 'price_xxx',
    name: 'PE Recruiting Playbook',
    price: 167,
  },
  'networking-cold-email-playbook': {
    priceId: process.env.STRIPE_PRICE_NETWORKING || 'price_xxx',
    name: 'Networking & Cold Email Playbook',
    price: 67,
  },
  'lbo-modeling-course': {
    priceId: process.env.STRIPE_PRICE_LBO || 'price_xxx',
    name: 'LBO Modeling Crash Course',
    price: 127,
  },
  'stock-pitch-guide': {
    priceId: process.env.STRIPE_PRICE_STOCK_PITCH || 'price_xxx',
    name: 'Stock Pitch Template & Examples',
    price: 77,
  },
  'resume-story-playbook': {
    priceId: process.env.STRIPE_PRICE_RESUME_STORY || 'price_xxx',
    name: 'Walk Me Through Your Resume Playbook',
    price: 57,
  },
  'playbook-bundle': {
    priceId: process.env.STRIPE_PRICE_BUNDLE || 'price_xxx',
    name: 'Complete Playbook Bundle',
    price: 435, // 30% off $622
  },
  // Resume Services
  'resume-review': {
    priceId: process.env.STRIPE_PRICE_RESUME_REVIEW || 'price_xxx',
    name: 'Resume Review',
    price: 197,
  },
  'resume-rewrite': {
    priceId: process.env.STRIPE_PRICE_RESUME_REWRITE || 'price_xxx',
    name: 'Resume Rewrite',
    price: 497,
  },
} as const

export type ProductId = keyof typeof PRODUCTS
