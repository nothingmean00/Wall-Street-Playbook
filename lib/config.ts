/**
 * Shared configuration constants used across the site.
 * Single source of truth for values that appear in multiple files.
 */

/** Playbook slugs that are live and purchasable */
export const LIVE_PLAYBOOK_SLUGS: string[] = [
  "finance-technical-interview-guide",
  "pe-recruiting-playbook",
  "networking-cold-email-playbook",
]

/** Set version for efficient lookups (e.g. sitemap filtering) */
export const LIVE_PLAYBOOK_SLUGS_SET = new Set(LIVE_PLAYBOOK_SLUGS)

/** Default OG image used across the site */
export const DEFAULT_OG_IMAGE = "https://wallstreetplaybook.org/og-image.jpg"

/** Site base URL */
export const SITE_URL = "https://wallstreetplaybook.org"
