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
    name: 'Investment Banking Technical Guide',
    price: 79,
  },
  'networking-playbook': {
    priceId: process.env.STRIPE_PRICE_NETWORKING || 'price_xxx',
    name: 'The Networking Playbook',
    price: 49,
  },
  'pe-recruiting-guide': {
    priceId: process.env.STRIPE_PRICE_PE || 'price_xxx',
    name: 'Private Equity Recruiting Guide',
    price: 99,
  },
  'behavioral-mastery': {
    priceId: process.env.STRIPE_PRICE_BEHAVIORAL || 'price_xxx',
    name: 'Behavioral Interview Mastery',
    price: 59,
  },
  'hedge-fund-primer': {
    priceId: process.env.STRIPE_PRICE_HF || 'price_xxx',
    name: 'Hedge Fund Interview Primer',
    price: 89,
  },
  'recruiting-timeline-tracker': {
    priceId: process.env.STRIPE_PRICE_TRACKER || 'price_xxx',
    name: 'Recruiting Timeline & Tracker',
    price: 29,
  },
  'playbook-bundle': {
    priceId: process.env.STRIPE_PRICE_BUNDLE || 'price_xxx',
    name: 'Complete Playbook Bundle',
    price: 283, // 30% off $404
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
