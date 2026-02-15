import { playbooks } from "@/lib/data"
import { getAllBlogPosts } from "@/lib/blog"
import type { MetadataRoute } from "next"

// Playbooks that are live and purchasable — must match livePlaybookSlugs in playbooks/[slug]/page.tsx
const livePlaybookSlugs = new Set([
  "finance-technical-interview-guide",
  "pe-recruiting-playbook",
  "networking-cold-email-playbook",
])

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://wallstreetplaybook.org"

  // Use stable dates instead of new Date() to avoid signaling false freshness to Google.
  // Google deprioritizes crawling sites whose sitemaps claim every page changed "just now."
  // Update these dates only when the corresponding page content is actually modified.
  const siteLastUpdated = new Date("2026-02-15") // last significant site-wide update
  const contentLastUpdated = new Date("2026-02-01") // last content batch update
  const legalLastUpdated = new Date("2025-11-01") // legal pages rarely change

  // Static pages — core site structure
  const staticPages = [
    {
      url: baseUrl,
      lastModified: siteLastUpdated,
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/playbooks`,
      lastModified: siteLastUpdated,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/resume-services`,
      lastModified: contentLastUpdated,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: siteLastUpdated,
      changeFrequency: "daily" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: contentLastUpdated,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: contentLastUpdated,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: legalLastUpdated,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: legalLastUpdated,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    // Intent/landing pages (high commercial intent)
    {
      url: `${baseUrl}/investment-banking-interview-prep`,
      lastModified: contentLastUpdated,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/private-equity-recruiting`,
      lastModified: contentLastUpdated,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/non-target-investment-banking`,
      lastModified: contentLastUpdated,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/hedge-fund-interview-prep`,
      lastModified: contentLastUpdated,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/investment-banking-resume`,
      lastModified: contentLastUpdated,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/lbo-modeling-guide`,
      lastModified: contentLastUpdated,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/dcf-model-guide`,
      lastModified: contentLastUpdated,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/finance-career-guide`,
      lastModified: contentLastUpdated,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    // 2026 time-sensitive content
    {
      url: `${baseUrl}/investment-banking-recruiting-2026`,
      lastModified: siteLastUpdated,
      changeFrequency: "weekly" as const,
      priority: 0.95,
    },
    {
      url: `${baseUrl}/private-equity-recruiting-2026`,
      lastModified: siteLastUpdated,
      changeFrequency: "weekly" as const,
      priority: 0.95,
    },
    {
      url: `${baseUrl}/finance-salary-2026`,
      lastModified: contentLastUpdated,
      changeFrequency: "monthly" as const,
      priority: 0.95,
    },
    // 2027 summer analyst recruiting content
    {
      url: `${baseUrl}/blog/summer-analyst-recruiting-timeline-2027`,
      lastModified: siteLastUpdated,
      changeFrequency: "weekly" as const,
      priority: 0.95,
    },
    {
      url: `${baseUrl}/blog/non-target-to-summer-analyst-2027`,
      lastModified: siteLastUpdated,
      changeFrequency: "weekly" as const,
      priority: 0.95,
    },
    {
      url: `${baseUrl}/blog/investment-banking-superday-guide-2027`,
      lastModified: siteLastUpdated,
      changeFrequency: "weekly" as const,
      priority: 0.95,
    },
    // Asia-focused content (targeting Singapore, Hong Kong, Taiwan traffic)
    {
      url: `${baseUrl}/blog/investment-banking-hong-kong-singapore-2026`,
      lastModified: contentLastUpdated,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/target-schools-asia-investment-banking`,
      lastModified: contentLastUpdated,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/asian-candidates-breaking-into-wall-street`,
      lastModified: contentLastUpdated,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    // Salary/compensation guides (high search intent)
    {
      url: `${baseUrl}/blog/bulge-bracket-investment-banking-salary-2026`,
      lastModified: contentLastUpdated,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/elite-boutique-investment-banking-salary-2026`,
      lastModified: contentLastUpdated,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/middle-market-investment-banking-salary-2026`,
      lastModified: contentLastUpdated,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    // Technical interview intent pages (high commercial intent)
    {
      url: `${baseUrl}/ib-technical-interview-2026`,
      lastModified: siteLastUpdated,
      changeFrequency: "weekly" as const,
      priority: 0.95,
    },
    {
      url: `${baseUrl}/dcf-interview-questions-2026`,
      lastModified: contentLastUpdated,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ma-interview-questions-2026`,
      lastModified: contentLastUpdated,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/lbo-interview-questions-2026`,
      lastModified: contentLastUpdated,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/accounting-interview-questions-finance`,
      lastModified: contentLastUpdated,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/valuation-methods-investment-banking`,
      lastModified: contentLastUpdated,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    // Networking & cold email intent pages (high commercial intent)
    {
      url: `${baseUrl}/cold-email-templates-investment-banking`,
      lastModified: contentLastUpdated,
      changeFrequency: "monthly" as const,
      priority: 0.95,
    },
    {
      url: `${baseUrl}/networking-non-target-students-2026`,
      lastModified: siteLastUpdated,
      changeFrequency: "weekly" as const,
      priority: 0.95,
    },
    {
      url: `${baseUrl}/informational-interview-questions-banking`,
      lastModified: contentLastUpdated,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/finance-networking-playbook-2026`,
      lastModified: siteLastUpdated,
      changeFrequency: "weekly" as const,
      priority: 0.95,
    },
    // Lead magnet pages
    {
      url: `${baseUrl}/ib-technical-cheat-sheet`,
      lastModified: contentLastUpdated,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/cold-email-checklist`,
      lastModified: contentLastUpdated,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    // Resume service intent pages (high commercial intent)
    {
      url: `${baseUrl}/finance-resume-review`,
      lastModified: contentLastUpdated,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/non-target-resume`,
      lastModified: contentLastUpdated,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/investment-banking-resume-review`,
      lastModified: contentLastUpdated,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/private-equity-resume`,
      lastModified: contentLastUpdated,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/hedge-fund-resume`,
      lastModified: contentLastUpdated,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/consulting-to-banking-resume`,
      lastModified: contentLastUpdated,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/mba-resume-review`,
      lastModified: contentLastUpdated,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    // Expanded finance career resume pages (2026)
    {
      url: `${baseUrl}/financial-advisor-resume`,
      lastModified: contentLastUpdated,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/fpa-resume`,
      lastModified: contentLastUpdated,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/asset-management-resume`,
      lastModified: contentLastUpdated,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/fintech-resume`,
      lastModified: contentLastUpdated,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/credit-analyst-resume`,
      lastModified: contentLastUpdated,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/equity-research-resume`,
      lastModified: contentLastUpdated,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/venture-capital-resume`,
      lastModified: contentLastUpdated,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    // Long-tail career situation pages
    {
      url: `${baseUrl}/low-gpa-finance-jobs`,
      lastModified: contentLastUpdated,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/career-change-finance-30`,
      lastModified: contentLastUpdated,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/military-to-finance`,
      lastModified: contentLastUpdated,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/engineer-to-finance`,
      lastModified: contentLastUpdated,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/liberal-arts-finance-jobs`,
      lastModified: contentLastUpdated,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/back-office-to-front-office`,
      lastModified: contentLastUpdated,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/failed-ib-recruiting`,
      lastModified: contentLastUpdated,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    // Jobs board — high-priority, refreshed every 12h
    {
      url: `${baseUrl}/jobs`,
      lastModified: siteLastUpdated,
      changeFrequency: "daily" as const,
      priority: 0.95,
    },
  ]

  // Dynamic playbook pages — only include LIVE playbooks in sitemap.
  // Non-live playbooks have robots noindex, so including them creates
  // contradictory signals that waste crawl budget.
  const playbookPages = playbooks
    .filter((playbook) => livePlaybookSlugs.has(playbook.slug))
    .map((playbook) => ({
      url: `${baseUrl}/playbooks/${playbook.slug}`,
      lastModified: siteLastUpdated,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }))

  // Dynamic blog pages (from unified blog system - MDX + data.ts)
  // Exclude blog posts already listed in static pages to avoid duplicate sitemap entries
  const staticBlogSlugs = new Set([
    "summer-analyst-recruiting-timeline-2027",
    "non-target-to-summer-analyst-2027",
    "investment-banking-superday-guide-2027",
    "investment-banking-hong-kong-singapore-2026",
    "target-schools-asia-investment-banking",
    "asian-candidates-breaking-into-wall-street",
    "bulge-bracket-investment-banking-salary-2026",
    "elite-boutique-investment-banking-salary-2026",
    "middle-market-investment-banking-salary-2026",
  ])
  const allBlogPosts = getAllBlogPosts()
  const blogPages = allBlogPosts
    .filter((post) => !staticBlogSlugs.has(post.slug))
    .map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.publishedAt ? new Date(post.publishedAt) : contentLastUpdated,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }))

  return [...staticPages, ...playbookPages, ...blogPages]
}
