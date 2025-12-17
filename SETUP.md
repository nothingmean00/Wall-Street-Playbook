# Wall Street Playbook - Backend Setup Guide

## Environment Variables

Create a `.env.local` file in the project root with the following variables:

```bash
# Database (Neon Serverless PostgreSQL)
DATABASE_URL=postgresql://user:password@ep-xxx.us-east-2.aws.neon.tech/neondb?sslmode=require

# Stripe
STRIPE_SECRET_KEY=sk_live_xxx
STRIPE_WEBHOOK_SECRET=whsec_xxx
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_xxx

# Vercel Blob Storage
BLOB_READ_WRITE_TOKEN=vercel_blob_xxx

# Resend (Email)
RESEND_API_KEY=re_xxx

# Jobs API (RapidAPI - JSearch)
RAPIDAPI_KEY=your_rapidapi_key_here

# App URL
NEXT_PUBLIC_APP_URL=https://wallstreetplaybook.com
```

---

## 1. Neon Database Setup

1. Go to [neon.tech](https://neon.tech) and create a free account
2. Create a new project
3. Copy the connection string and add it to `DATABASE_URL`
4. The database tables will be created automatically on first use

### Database Tables Created:
- `email_subscribers` - Newsletter signups
- `contact_submissions` - Contact form entries & resume submissions
- `orders` - Stripe purchase records

---

## 2. Stripe Setup

### Create Products in Stripe Dashboard

Go to [Stripe Dashboard > Products](https://dashboard.stripe.com/products) and create:

| Product | Price ID Env Var |
|---------|-----------------|
| IB Technical Guide ($79) | `STRIPE_PRICE_IB_TECHNICAL` |
| Networking Playbook ($49) | `STRIPE_PRICE_NETWORKING` |
| PE Recruiting Guide ($99) | `STRIPE_PRICE_PE` |
| Behavioral Mastery ($59) | `STRIPE_PRICE_BEHAVIORAL` |
| Hedge Fund Primer ($89) | `STRIPE_PRICE_HF` |
| Recruiting Timeline ($29) | `STRIPE_PRICE_TRACKER` |
| Complete Bundle ($283) | `STRIPE_PRICE_BUNDLE` |
| Resume Review ($197) | `STRIPE_PRICE_RESUME_REVIEW` |
| Resume Rewrite ($497) | `STRIPE_PRICE_RESUME_REWRITE` |

### Webhook Setup

1. Go to [Stripe Dashboard > Webhooks](https://dashboard.stripe.com/webhooks)
2. Add endpoint: `https://wallstreetplaybook.com/api/webhook`
3. Select event: `checkout.session.completed`
4. Copy the webhook signing secret to `STRIPE_WEBHOOK_SECRET`

---

## 3. Vercel Blob Storage

1. Go to [Vercel Dashboard > Storage](https://vercel.com/dashboard/stores)
2. Create a new Blob store
3. Copy the token to `BLOB_READ_WRITE_TOKEN`
4. Upload your PDF playbooks to the store

---

## 4. JSearch Jobs API Setup (RapidAPI)

1. Go to [rapidapi.com](https://rapidapi.com) and create a free account
2. Subscribe to [JSearch API](https://rapidapi.com/letscrape-6bRBa3QguO5/api/jsearch) (Free tier: 500 requests/month)
3. Copy your RapidAPI key from the API dashboard
4. Add it to `RAPIDAPI_KEY` in your `.env.local`

The jobs board will automatically fall back to sample jobs if the API is unavailable.

---

## 5. Resend Email Setup

1. Go to [resend.com](https://resend.com) and create account
2. Add your domain: `wallstreetplaybook.com`
3. Add DNS records for email authentication (SPF, DKIM, DMARC)
4. Copy API key to `RESEND_API_KEY`

### DNS Records Required:
- SPF record
- DKIM record (from Resend)
- MX record (if receiving emails)

---

## 6. Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variables in Vercel Dashboard
```

### Vercel Environment Variables
Add all the environment variables from `.env.local` to your Vercel project settings.

---

## API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/subscribe` | POST | Email newsletter signup |
| `/api/contact` | POST | Contact form submission |
| `/api/checkout` | POST | Create Stripe checkout session |
| `/api/webhook` | POST | Stripe webhook handler |
| `/api/download` | GET | Secure file download |
| `/api/upload-resume` | POST | Resume file upload |
| `/api/jobs` | GET | Finance job listings (JSearch API) |
| `/api/init-db` | POST | Initialize database (dev only) |

---

## Testing Locally

```bash
# Start dev server
npm run dev

# Test Stripe webhooks locally
stripe listen --forward-to localhost:3000/api/webhook
```

---

## Company Email

All emails are sent from and received at:
**support@wallstreetplaybook.com**

Make sure this email is properly configured in Resend with proper domain authentication.

