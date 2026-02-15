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

/** Site base URL */
export const SITE_URL = "https://wallstreetplaybook.org"

/** OG images by category */
export const OG_IMAGES = {
  default: `${SITE_URL}/og-default.jpg`,
  playbooks: `${SITE_URL}/og-playbooks.jpg`,
  technicalGuide: `${SITE_URL}/og-technical-guide.jpg`,
  pePlaybook: `${SITE_URL}/og-pe-playbook.jpg`,
  networkingPlaybook: `${SITE_URL}/og-networking-playbook.jpg`,
  resumeServices: `${SITE_URL}/og-resume-services.jpg`,
  interviewPrep: `${SITE_URL}/og-interview-prep.jpg`,
  recruiting: `${SITE_URL}/og-recruiting.jpg`,
  blog: `${SITE_URL}/og-blog.jpg`,
  jobs: `${SITE_URL}/og-jobs.jpg`,
} as const

/** Default OG image used across the site */
export const DEFAULT_OG_IMAGE = OG_IMAGES.default
