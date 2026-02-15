import { neon, NeonQueryFunction } from '@neondatabase/serverless'

let sql: NeonQueryFunction<false, false> | null = null

export function getDb() {
  if (!sql) {
    if (!process.env.DATABASE_URL) {
      throw new Error('DATABASE_URL environment variable is not set')
    }
    sql = neon(process.env.DATABASE_URL)
  }
  return sql
}

// Initialize database tables
export async function initDatabase() {
  const db = getDb()
  
  await db`
    CREATE TABLE IF NOT EXISTS email_subscribers (
      id SERIAL PRIMARY KEY,
      email VARCHAR(255) UNIQUE NOT NULL,
      source VARCHAR(50) DEFAULT 'website',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `

  await db`
    CREATE TABLE IF NOT EXISTS contact_submissions (
      id SERIAL PRIMARY KEY,
      first_name VARCHAR(100),
      last_name VARCHAR(100),
      email VARCHAR(255) NOT NULL,
      subject VARCHAR(100),
      message TEXT NOT NULL,
      status VARCHAR(20) DEFAULT 'new',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `

  await db`
    CREATE TABLE IF NOT EXISTS orders (
      id SERIAL PRIMARY KEY,
      stripe_session_id VARCHAR(255) UNIQUE,
      stripe_customer_id VARCHAR(255),
      email VARCHAR(255) NOT NULL,
      product_type VARCHAR(50) NOT NULL,
      product_id VARCHAR(100) NOT NULL,
      amount INTEGER NOT NULL,
      status VARCHAR(20) DEFAULT 'pending',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `

  await db`
    CREATE TABLE IF NOT EXISTS resume_submissions (
      id SERIAL PRIMARY KEY,
      name VARCHAR(200) NOT NULL,
      email VARCHAR(255) NOT NULL,
      phone VARCHAR(50),
      service_type VARCHAR(50) NOT NULL,
      target_role VARCHAR(200),
      target_firms TEXT,
      current_status VARCHAR(100),
      experience_level VARCHAR(50),
      timeline VARCHAR(100),
      specific_concerns TEXT,
      additional_notes TEXT,
      resume_url TEXT NOT NULL,
      resume_filename VARCHAR(255),
      status VARCHAR(30) DEFAULT 'pending',
      payment_status VARCHAR(30) DEFAULT 'unpaid',
      stripe_session_id VARCHAR(255),
      amount_paid INTEGER,
      admin_notes TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `

  await db`
    CREATE TABLE IF NOT EXISTS lead_magnet_downloads (
      id SERIAL PRIMARY KEY,
      email VARCHAR(255) NOT NULL,
      magnet_name VARCHAR(200) NOT NULL,
      source VARCHAR(100) DEFAULT 'blog',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `

  // Add index for querying downloads by email
  try {
    await db`CREATE INDEX IF NOT EXISTS idx_lead_magnet_downloads_email ON lead_magnet_downloads (email)`
  } catch {
    // Index might already exist, ignore errors
  }

  // Jobs cache table — persists across serverless cold starts
  await db`
    CREATE TABLE IF NOT EXISTS jobs_cache (
      id SERIAL PRIMARY KEY,
      jobs_data JSONB NOT NULL,
      fetched_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      query_set TEXT DEFAULT 'default'
    )
  `

  try {
    await db`CREATE INDEX IF NOT EXISTS idx_jobs_cache_fetched ON jobs_cache (fetched_at DESC)`
  } catch {
    // Index might already exist
  }

  // Add new payment columns if they don't exist (for existing tables)
  try {
    await db`ALTER TABLE resume_submissions ADD COLUMN IF NOT EXISTS payment_status VARCHAR(30) DEFAULT 'unpaid'`
    await db`ALTER TABLE resume_submissions ADD COLUMN IF NOT EXISTS stripe_session_id VARCHAR(255)`
    await db`ALTER TABLE resume_submissions ADD COLUMN IF NOT EXISTS amount_paid INTEGER`
  } catch {
    // Columns might already exist, ignore errors
  }
}
