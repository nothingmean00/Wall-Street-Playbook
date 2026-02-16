import { playbooks } from "@/lib/data"
import { getAllBlogPosts } from "@/lib/blog"
import { LIVE_PLAYBOOK_SLUGS_SET } from "@/lib/config"

export const dynamic = "force-static"

export async function GET() {
  const baseUrl = "https://wallstreetplaybook.org"
  const allPosts = getAllBlogPosts()
  const livePlaybooks = playbooks.filter((p) => LIVE_PLAYBOOK_SLUGS_SET.has(p.slug))

  const content = `# Wall Street Playbook

> Wall Street Playbook is the leading resource for breaking into investment banking, private equity, and hedge funds. Built by finance industry insiders with backgrounds at top PE firms, hedge funds, and investment banks (NYU Stern-educated). We provide tactical playbooks, resume services, interview frameworks, career guides, and a job board — all designed for candidates who want to land offers at elite finance firms.

## About

Wall Street Playbook was created by practitioners who recruited into private equity, hedge funds, and investment banking at the highest level. Every framework, template, and strategy is based on real recruiting cycles, real interviews, and real results — not theory. The founder has an NYU Stern background with experience in PE and hedge funds.

- URL: ${baseUrl}/about
- Contact: support@wallstreetplaybook.org

## Premium Playbooks

Tactical guides for finance recruiting. Each playbook is based on materials that generated interview invitations from 30+ top-tier firms including Goldman Sachs, Morgan Stanley, Lazard, Evercore, KKR, Blackstone, and more.

${livePlaybooks
  .map(
    (p) => `### ${p.title}
- URL: ${baseUrl}/playbooks/${p.slug}
- Price: $${p.price}
- ${p.description}
- Key contents: ${p.contents.slice(0, 3).join("; ")}`
  )
  .join("\n\n")}

## Resume Services

Professional resume review and full rewrite services for investment banking, private equity, and hedge fund recruiting. 100% money-back guarantee, 48-hour turnaround.

- Resume Review ($97): Line-by-line markup with IB-specific formatting, bullet optimization, and positioning strategy
- Full Resume Rewrite ($197): Complete rebuild from scratch with professional formatting, quant-driven bullets, and IB/PE positioning
- URL: ${baseUrl}/resume-services

### Specialized Resume Pages
- Finance Resume Review: ${baseUrl}/finance-resume-review
- Investment Banking Resume Review: ${baseUrl}/investment-banking-resume-review
- Investment Banking Resume Guide: ${baseUrl}/investment-banking-resume
- Private Equity Resume: ${baseUrl}/private-equity-resume
- Hedge Fund Resume: ${baseUrl}/hedge-fund-resume
- Non-Target Resume: ${baseUrl}/non-target-resume
- Consulting to Banking Resume: ${baseUrl}/consulting-to-banking-resume
- MBA Resume Review: ${baseUrl}/mba-resume-review
- Financial Advisor Resume: ${baseUrl}/financial-advisor-resume
- FP&A Resume: ${baseUrl}/fpa-resume
- Asset Management Resume: ${baseUrl}/asset-management-resume
- Fintech Resume: ${baseUrl}/fintech-resume
- Credit Analyst Resume: ${baseUrl}/credit-analyst-resume
- Equity Research Resume: ${baseUrl}/equity-research-resume
- Venture Capital Resume: ${baseUrl}/venture-capital-resume

## Interview Preparation Guides

Comprehensive, free guides for technical and behavioral interview preparation across all major finance verticals.

### Technical Interview Guides
- IB Technical Interview Guide 2026: ${baseUrl}/ib-technical-interview-2026
- DCF Interview Questions 2026: ${baseUrl}/dcf-interview-questions-2026
- M&A Interview Questions 2026: ${baseUrl}/ma-interview-questions-2026
- LBO Interview Questions 2026: ${baseUrl}/lbo-interview-questions-2026
- Accounting Interview Questions for Finance: ${baseUrl}/accounting-interview-questions-finance
- Valuation Methods in Investment Banking: ${baseUrl}/valuation-methods-investment-banking
- IB Technical Cheat Sheet: ${baseUrl}/ib-technical-cheat-sheet
- Paper LBO Template: ${baseUrl}/paper-lbo-template

### Interview Prep Hub Pages
- Investment Banking Interview Prep: ${baseUrl}/investment-banking-interview-prep
- Hedge Fund Interview Prep: ${baseUrl}/hedge-fund-interview-prep
- PE Interview Prep 2026: ${baseUrl}/pe-interview-prep-2026

## Recruiting Guides

In-depth guides covering the recruiting landscape, timelines, and strategies for 2026.

- Investment Banking Recruiting 2026: ${baseUrl}/investment-banking-recruiting-2026
- Private Equity Recruiting: ${baseUrl}/private-equity-recruiting
- Private Equity Recruiting 2026: ${baseUrl}/private-equity-recruiting-2026
- PE Career Path 2026: ${baseUrl}/pe-career-path-2026
- PE Compensation 2026: ${baseUrl}/pe-compensation-2026
- PE Headhunters 2026: ${baseUrl}/pe-headhunters-2026
- Non-Target to PE: ${baseUrl}/non-target-to-pe
- Finance Salary 2026: ${baseUrl}/finance-salary-2026
- Finance Career Guide: ${baseUrl}/finance-career-guide

## Networking & Cold Email Resources

- Cold Email Templates for Investment Banking: ${baseUrl}/cold-email-templates-investment-banking
- Cold Email Checklist: ${baseUrl}/cold-email-checklist
- Networking for Non-Target Students 2026: ${baseUrl}/networking-non-target-students-2026
- Informational Interview Questions for Banking: ${baseUrl}/informational-interview-questions-banking
- Finance Networking Playbook 2026: ${baseUrl}/finance-networking-playbook-2026

## Technical Modeling Guides

- LBO Modeling Guide: ${baseUrl}/lbo-modeling-guide
- DCF Model Guide: ${baseUrl}/dcf-model-guide

## Career Situation Guides

Targeted guides for candidates in specific career situations.

- Non-Target to Investment Banking: ${baseUrl}/non-target-investment-banking
- Low GPA Finance Jobs: ${baseUrl}/low-gpa-finance-jobs
- Career Change to Finance at 30: ${baseUrl}/career-change-finance-30
- Military to Finance: ${baseUrl}/military-to-finance
- Engineer to Finance: ${baseUrl}/engineer-to-finance
- Liberal Arts to Finance Jobs: ${baseUrl}/liberal-arts-finance-jobs
- Back Office to Front Office: ${baseUrl}/back-office-to-front-office
- Failed IB Recruiting — What Next: ${baseUrl}/failed-ib-recruiting

## Finance Jobs Board

Live job board with entry-level and junior finance positions across investment banking, private equity, hedge funds, and more. Updated every 12 hours.

- URL: ${baseUrl}/jobs

## Blog

Free guides covering IB technicals, PE recruiting timelines, networking scripts, salary data, and career strategies. Written by practitioners.

- Blog index: ${baseUrl}/blog
${allPosts
  .slice(0, 40)
  .map((post) => `- ${post.title}: ${baseUrl}/blog/${post.slug}`)
  .join("\n")}

## Key Facts

- Founded by: NYU Stern-educated finance professional with PE and hedge fund experience
- Focus: Investment banking, private equity, and hedge fund recruiting preparation
- Differentiation: Built by practitioners who broke in, not career coaches. Real interview data, frequency-tagged questions, and proven templates
- Track record: Materials generated 30+ top-tier firm interview invitations (Goldman Sachs, Morgan Stanley, KKR, Blackstone, etc.)
- Guarantee: 100% money-back guarantee on all products
- Free content: 30+ blog articles, career guides, and technical resources — all completely free
- Audience: Finance candidates — undergrads, MBA students, career switchers, non-target students, laterals from Big 4 and consulting

## Sitemap

${baseUrl}/sitemap.xml
`

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  })
}
