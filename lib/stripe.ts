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

// Segment-based pricing tiers
export const SEGMENT_TIERS = {
  premium: ['pe', 'hf', 'vc', 'mba-m7', 'private-equity', 'hedge-fund', 'venture-capital'],
  standard: ['ib', 'non-target', 'consulting-to-banking', 'mba', 'investment-banking', 'equity-research'],
  accessible: ['fpa', 'credit', 'financial-advisor', 'fintech', 'asset-management', 'credit-analyst']
} as const

export const TIER_PRICES = {
  premium: { review: 297, rewrite: 697 },
  standard: { review: 197, rewrite: 497 },
  accessible: { review: 147, rewrite: 347 }
} as const

export type PricingTier = keyof typeof TIER_PRICES
export type Segment = string

// Get the pricing tier for a given segment
export function getSegmentTier(segment: Segment | null | undefined): PricingTier {
  if (!segment) return 'standard'
  
  const normalizedSegment = segment.toLowerCase().trim()
  
  if (SEGMENT_TIERS.premium.some(s => normalizedSegment.includes(s))) {
    return 'premium'
  }
  if (SEGMENT_TIERS.accessible.some(s => normalizedSegment.includes(s))) {
    return 'accessible'
  }
  return 'standard'
}

// Get pricing for a specific segment
export function getSegmentPricing(segment: Segment | null | undefined) {
  const tier = getSegmentTier(segment)
  return {
    tier,
    prices: TIER_PRICES[tier],
    reviewPrice: TIER_PRICES[tier].review,
    rewritePrice: TIER_PRICES[tier].rewrite
  }
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
  'restructuring-guide': {
    priceId: process.env.STRIPE_PRICE_RESTRUCTURING || 'price_xxx',
    name: 'Restructuring & Distressed Debt Guide',
    price: 97,
  },
  'repe-modeling-guide': {
    priceId: process.env.STRIPE_PRICE_REPE || 'price_xxx',
    name: 'Real Estate Private Equity Modeling',
    price: 127,
  },
  'credit-direct-lending-playbook': {
    priceId: process.env.STRIPE_PRICE_CREDIT || 'price_xxx',
    name: 'Credit & Direct Lending Playbook',
    price: 97,
  },
  'superday-survival-guide': {
    priceId: process.env.STRIPE_PRICE_SUPERDAY || 'price_xxx',
    name: 'The Superday Survival Guide',
    price: 47,
  },
  'playbook-bundle': {
    priceId: process.env.STRIPE_PRICE_BUNDLE || 'price_xxx',
    name: 'Complete Playbook Bundle',
    price: 690, // 30% off $990 total
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
