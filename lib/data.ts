// Static data for WallStreetPlaybook

export interface Playbook {
  slug: string
  title: string
  description: string
  longDescription: string
  price: number
  contents: string[]
  excerpt: string
}

export interface ResumeService {
  id: string
  title: string
  description: string
  price: number
  turnaround: string
  includes: string[]
}

export interface Guide {
  slug: string
  title: string
  summary: string
  category: string
  readTime?: string
  content?: string
  publishedAt?: string
}

export const playbooks: Playbook[] = [
  {
    slug: "ib-technical-guide",
    title: "IB Technical Interview Guide",
    description: "400+ technical questions with detailed answers. DCF, LBO, M&A, accounting—everything tested at bulge brackets and elite boutiques.",
    longDescription:
      "The definitive technical preparation guide for investment banking interviews. Master the accounting, valuation, M&A, and LBO questions asked at Goldman, Morgan Stanley, Evercore, and every top firm. This isn't theory—it's the exact questions candidates face, with the precise answers that get offers.",
    price: 127,
    contents: [
      "400+ real technical interview questions with answers",
      "Accounting fundamentals: 3-statement modeling deep dive",
      "DCF valuation: step-by-step walkthrough with edge cases",
      "Comparable company and precedent transaction analysis",
      "M&A mechanics: accretion/dilution, merger math, synergies",
      "LBO fundamentals and paper LBO frameworks",
      "Enterprise value vs. equity value mastery",
      "Brain teasers and market sizing questions",
    ],
    excerpt:
      "Walk me through a DCF. Start with unlevered free cash flow: EBIT × (1 - tax rate) + D&A - CapEx - ΔNWC. Project 5-10 years based on revenue growth and margin assumptions. Terminal value via perpetuity growth (FCF × (1+g))/(WACC-g) or exit multiple...",
  },
  {
    slug: "pe-recruiting-playbook",
    title: "PE Recruiting Playbook",
    description: "Navigate on-cycle chaos, build headhunter relationships, and crush PE interviews. From first call to signed offer.",
    longDescription:
      "Private equity recruiting is a different game—compressed timelines, secretive processes, and higher stakes. This playbook gives you the insider knowledge to navigate on-cycle recruiting, build real relationships with headhunters, and prepare for the technicals and case studies that determine who gets offers at KKR, Blackstone, Apollo, and the rest.",
    price: 167,
    contents: [
      "On-cycle vs. off-cycle: complete timeline breakdown",
      "Headhunter relationship strategy (who to target, how to stand out)",
      "PE technical questions: LBO mechanics, deal math, portfolio questions",
      "Paper LBO mastery: 10-minute framework that impresses",
      "Case study walkthrough with real examples",
      "Firm-specific patterns: mega-funds vs. MM vs. growth equity",
      "How to handle exploding offers and competing processes",
      "What to do when you only have 48 hours",
    ],
    excerpt:
      "On-cycle PE recruiting can move from first headhunter call to signed offer in under 72 hours. There is no time to prepare during the process—preparation must be complete before your phone rings. Here's exactly what you need ready...",
  },
  {
    slug: "networking-cold-email-playbook",
    title: "Networking & Cold Email Playbook",
    description: "50+ email templates, LinkedIn scripts, and follow-up sequences that actually get responses. Built for non-targets.",
    longDescription:
      "Networking is how non-targets break in and how everyone gets an edge. This playbook gives you the exact scripts, templates, and follow-up cadences that convert cold outreach into warm relationships—and warm relationships into referrals. Every template has been tested across hundreds of real recruiting cycles.",
    price: 67,
    contents: [
      "50+ cold email templates (IB, PE, HF-specific)",
      "LinkedIn outreach sequences with response rate data",
      "The follow-up framework: timing, tone, and persistence",
      "Informational interview questions that build relationships",
      "How to convert contacts into advocates who push for you",
      "Coffee chat scripts and thank-you note templates",
      "Networking tracker spreadsheet (Notion + Excel)",
      "What to do when you get ghosted",
    ],
    excerpt:
      "Subject: Quick Question - [Firm] [Group]\n\nHi [Name], I came across your profile while researching [firm]'s [group]. Your transition from [background] is particularly interesting given my own path from [your background]. Would you have 15 minutes this week for a brief call?...",
  },
  {
    slug: "lbo-modeling-course",
    title: "LBO Modeling Crash Course",
    description: "Build LBO models from scratch. Sources & uses, debt schedules, returns analysis—with Excel templates included.",
    longDescription:
      "LBO modeling is the core technical skill for PE recruiting. This crash course takes you from zero to building full LBO models, including the paper LBO shortcuts that let you ace timed case studies. Includes downloadable Excel templates you can use immediately.",
    price: 127,
    contents: [
      "LBO fundamentals: how PE creates value",
      "Sources & uses: building the transaction structure",
      "Debt schedules: senior, sub, mezzanine, PIK",
      "Cash flow waterfall and debt paydown mechanics",
      "Returns analysis: IRR, MOIC, and sensitivity tables",
      "Paper LBO framework: solve in 10 minutes by hand",
      "3 full LBO model templates (Excel download)",
      "Practice case studies with solutions",
    ],
    excerpt:
      "A PE firm buys a company for 8x EBITDA ($100M EBITDA = $800M TEV). They put in 40% equity ($320M) and 60% debt ($480M). If EBITDA grows to $130M and they exit at 8x in 5 years, what's the IRR? Exit TEV = $1,040M. Pay down $150M debt. Equity value = $710M. MOIC = 2.2x. IRR ≈ 17%...",
  },
  {
    slug: "stock-pitch-guide",
    title: "Stock Pitch Template & Examples",
    description: "The pitch framework used at Point72, Citadel, and Tiger Cubs. Plus 5 full example pitches with commentary.",
    longDescription:
      "A stock pitch is how you prove you can think like an investor. This guide gives you the exact framework top hedge funds want to see, plus five fully-written example pitches across different sectors and strategies. Whether you're long, short, or event-driven—this is how you stand out.",
    price: 77,
    contents: [
      "The 6-part pitch structure that top funds expect",
      "How to develop a real variant perception (not fake edge)",
      "Catalyst identification and timeline mapping",
      "Valuation: triangulating comps, DCF, and sum-of-parts",
      "Risk/reward framing that shows investment judgment",
      "5 complete example pitches with detailed commentary",
      "Pitch deck template (PowerPoint)",
      "Common mistakes that kill pitches",
    ],
    excerpt:
      "A strong pitch follows six parts: (1) One-sentence thesis with price target, (2) Business overview in 60 seconds, (3) Variant perception—what you see that consensus misses, (4) Catalysts with timeframes, (5) Valuation support, (6) Risks and why they're manageable...",
  },
  {
    slug: "resume-story-playbook",
    title: "Walk Me Through Your Resume Playbook",
    description: "Nail the first question of every interview. Story frameworks, 30+ examples, and positioning strategies.",
    longDescription:
      "'Walk me through your resume' is the first question in virtually every finance interview—and most candidates blow it. This playbook teaches you to transform your background into a compelling 2-minute narrative that positions you as the obvious choice. Includes 30+ real examples across different backgrounds.",
    price: 57,
    contents: [
      "The 3-part story structure that hooks interviewers",
      "How to position any background for finance",
      "30+ example stories across different profiles",
      "Why IB / Why PE / Why HF answer frameworks",
      "Handling gaps, switches, and non-traditional paths",
      "Why this firm: research-backed answers that resonate",
      "Weakness and failure questions: the right way",
      "Practice recording framework for self-improvement",
    ],
    excerpt:
      "Your story has three beats: (1) Origin—one sentence on where you started and what sparked your interest, (2) Development—how you built relevant skills and confirmed your interest, (3) Destination—why this role is the logical next step. Most candidates ramble. You won't...",
  },
]

export const resumeServices: ResumeService[] = [
  {
    id: "resume-review",
    title: "Resume Review",
    description:
      "Detailed line-by-line feedback on your resume with specific rewrite suggestions. We identify weaknesses in positioning, bullet structure, and overall narrative—then show you exactly how to fix them.",
    price: 197,
    turnaround: "3-5 business days",
    includes: [
      "Line-by-line written feedback",
      "Bullet point restructuring suggestions",
      "Quantification opportunities identified",
      "Positioning and narrative assessment",
      "Format and layout recommendations",
      "One round of follow-up questions",
    ],
  },
  {
    id: "resume-rewrite",
    title: "Resume Rewrite",
    description:
      "Complete resume overhaul from scratch. We rebuild your resume using frameworks proven at top firms—transforming your experience into the positioning that gets callbacks.",
    price: 497,
    turnaround: "5-7 business days",
    includes: [
      "Full resume reconstruction",
      "Experience repositioning strategy",
      "Optimized bullet point writing",
      "Quantified impact statements",
      "Industry-standard formatting",
      "Two revision rounds included",
      "Final PDF and Word delivery",
    ],
  },
]

export const guides: Guide[] = [
  {
    slug: "ib-vs-pe-career-paths",
    title: "Investment Banking vs. Private Equity: Career Path Analysis",
    summary: "A tactical breakdown of compensation, lifestyle, and exit opportunities across both paths.",
    category: "Career Strategy",
    readTime: "8 min read",
    publishedAt: "2024-12-01",
    content: `
The choice between investment banking and private equity represents one of the most consequential career decisions in finance. Both paths offer exceptional compensation and career optionality, but they differ fundamentally in day-to-day work, skill development, and long-term trajectory.

## Compensation Comparison

At the analyst level, total compensation is remarkably similar. First-year IB analysts at bulge brackets typically earn $110-130K base with bonuses pushing total comp to $170-200K. PE associates at mega-funds start slightly higher, with total compensation often reaching $250-350K by year two.

The divergence accelerates at senior levels. Managing Directors in investment banking can earn $1-5M+ annually, while Partners at top PE firms may earn $5-20M+ through carried interest distributions.

## The Work Itself

Investment banking centers on execution. You are building models, preparing materials, and supporting live transactions. The work is intense but relatively predictable in structure. PE involves more investment decision-making, portfolio company oversight, and strategic work.

The hours narrative requires nuance. While IB hours are notoriously brutal (80-100+ hours weekly is common), PE hours at mega-funds often match this during deal processes. The difference lies in predictability and control—PE offers more autonomy over scheduling.

## Exit Opportunities

This is where paths diverge significantly. IB provides broad optionality: PE, hedge funds, corporate development, venture capital, or operating roles. PE narrows focus toward deeper investing roles, portfolio operations, or launching your own fund.

Neither path is superior. The right choice depends on whether you prefer transaction execution or investment ownership, and where you want to be in 15 years.
    `,
  },
  {
    slug: "breaking-in-non-target",
    title: "Breaking In From a Non-Target School",
    summary: "Specific strategies for candidates without traditional pedigree to land top-tier roles.",
    category: "Recruiting",
    readTime: "10 min read",
    publishedAt: "2024-11-28",
    content: `
Every year, candidates from non-target schools break into Goldman Sachs, Evercore, and other top-tier firms. The path is harder, but it is well-defined for those willing to execute.

## The Reality Check

Non-target recruiting requires starting earlier, working harder, and being more strategic than your target-school competition. You cannot rely on on-campus recruiting or alumni density. You must manufacture every advantage.

## The Networking Imperative

Your entire strategy centers on one activity: building relationships with people who can refer you or advocate for your candidacy. This means 50-100+ networking conversations before recruiting begins.

Start with second-degree connections: alumni from your school, friends of friends, people from your hometown. Expand from there. Every conversation should end with two new names to contact.

## The Technical Edge

When you lack the pedigree, you compensate with preparation. Non-target candidates who break in are often more technically prepared than their target-school peers because they had to be.

Master technicals before recruiting begins. Not during—before. Your accounting, valuation, and deal knowledge should be flawless.

## The Story

Your narrative must be airtight. Why finance? Why now? Why you despite your school? The best non-target candidates frame their background as an asset: grit, resourcefulness, and the drive that comes from having to earn every opportunity.

The path is harder. But for candidates willing to execute this playbook, it works.
    `,
  },
  {
    slug: "lbo-modeling-fundamentals",
    title: "LBO Modeling Fundamentals",
    summary: "Core concepts and key drivers behind leveraged buyout analysis.",
    category: "Technical",
    readTime: "12 min read",
    publishedAt: "2024-11-25",
    content: `
Leveraged buyout models form the analytical backbone of private equity. Understanding LBO mechanics is essential for anyone targeting buyside roles.

## The Basic Structure

An LBO uses significant debt to acquire a company, with the goal of improving operations and selling at a higher valuation. The sponsor (PE firm) contributes equity, typically 30-40% of the purchase price, with debt financing the remainder.

## The Five Value Creation Levers

PE firms create value through five primary mechanisms:

1. **Revenue Growth** - Organic growth, M&A, geographic expansion
2. **Margin Improvement** - Cost reduction, pricing power, operational efficiency  
3. **Multiple Expansion** - Selling at a higher EV/EBITDA than purchase
4. **Debt Paydown** - Using cash flows to reduce leverage, increasing equity value
5. **Cash Generation** - Dividends and distributions during the hold period

## Key Return Metrics

IRR (Internal Rate of Return) and MOIC (Multiple on Invested Capital) are the core metrics. A typical target is 20%+ IRR and 2.0x+ MOIC over a 5-year hold period.

The math is straightforward: buy low, improve the business, sell higher, and use debt leverage to amplify equity returns. Execution is where complexity lives.

## What Interviewers Test

Technical interviews focus on: sources and uses, debt structure, cash flow available for debt repayment, and sensitivity to key assumptions. Know how changing revenue growth, margins, and exit multiples impact returns.
    `,
  },
  {
    slug: "superday-preparation",
    title: "Superday Preparation Checklist",
    summary: "Hour-by-hour preparation framework for final round interviews.",
    category: "Interviews",
    readTime: "6 min read",
    publishedAt: "2024-11-20",
    content: `
Superdays are where offers are won or lost. After months of preparation and multiple interview rounds, everything comes down to one day of back-to-back interviews. This is how to maximize your odds.

## The Week Before

Review every technical concept. Not learn—review. New learning this close to the event indicates under-preparation.

Finalize your stories. You should have 5-7 polished narratives covering leadership, teamwork, failure, and conflict. These should be rehearsed but not robotic.

Research every interviewer if names are provided. LinkedIn, recent deals, published articles. Find connection points.

## The Night Before

Prepare everything physical: suit pressed, shoes polished, copies of resume, notepad. Eliminate morning decisions.

Sleep is non-negotiable. Aim for 7-8 hours. No late-night cramming—it costs more in alertness than it gains in knowledge.

## The Morning Of

Arrive 15-20 minutes early. Use the time to calm nerves, not to cram.

Eat a real breakfast. Your brain needs fuel for 4-6 hours of high-intensity interviewing.

## During the Day

Energy management matters. Stay hydrated. Use breaks to reset mentally, not to review notes.

Treat every interview as if it is the first. Do not let a difficult interview affect subsequent ones. Interviewers rarely compare notes mid-day.

## The Debrief

Send thank-you notes within 24 hours. Brief, specific, professional. Reference something unique from each conversation.
    `,
  },
  {
    slug: "networking-cold-outreach",
    title: "Cold Outreach That Gets Responses",
    summary: "Email and LinkedIn templates with timing strategies that convert.",
    category: "Networking",
    readTime: "7 min read",
    publishedAt: "2024-11-15",
    content: `
Cold outreach is a numbers game with skill modifiers. The right approach dramatically improves response rates.

## The Fundamentals

Keep it short. Three to four sentences maximum. Busy professionals will not read a long email from someone they do not know.

Make the ask specific and small. "15 minutes to hear about your path" beats "I would love to pick your brain about finance."

Demonstrate relevance. Reference something specific: a shared background, a deal they worked on, an article they wrote.

## Email Structure That Works

**Subject Line:** Keep it direct. "Quick Question - [Firm] [Group]" or "[Mutual Connection] Suggested I Reach Out"

**Opening:** One sentence establishing who you are and why you are contacting them specifically.

**Middle:** One sentence on what you are trying to learn or accomplish.

**Close:** The specific ask with a timeframe. "Would you have 15 minutes this week or next for a brief call?"

## Timing Matters

Send emails Tuesday through Thursday, between 8-10 AM or 7-9 PM in the recipient's timezone. Avoid Monday mornings and Friday afternoons.

Follow up once after 5-7 business days if no response. A brief "bumping this to the top of your inbox" is sufficient. After two attempts, move on.

## Response Rate Expectations

A 15-25% response rate on cold outreach is strong. Do not be discouraged by non-responses—it is not personal.
    `,
  },
  {
    slug: "stock-pitch-framework",
    title: "Building a Stock Pitch From Scratch",
    summary: "Step-by-step process for developing an investment thesis that stands out.",
    category: "Technical",
    readTime: "15 min read",
    publishedAt: "2024-11-10",
    content: `
A stock pitch is the core demonstration of investing ability in hedge fund and asset management interviews. Strong pitches share common structural elements.

## The One-Sentence Thesis

Start with the conclusion. "Company X is a long/short at $Y because [reason] with [catalyst] in [timeframe]."

This forces clarity. If you cannot summarize your thesis in one sentence, you do not have a thesis.

## Business Overview

Explain what the company does in 2-3 sentences. Assume the interviewer has basic knowledge but has not studied this specific company.

Cover: what they sell, who buys it, how they make money, and what drives unit economics.

## The Variant Perception

This is where most pitches fail. A variant perception is a view that differs from consensus and has a reasonable probability of proving correct.

"The company will grow revenue" is not a variant perception—everyone expects that. "The company will grow revenue 20% faster than consensus because of X factor the market is underappreciating" is a variant perception.

## Catalysts

Why will the market recognize your thesis in a reasonable timeframe? Catalysts include: earnings releases, new product launches, strategic announcements, regulatory changes, or management actions.

## Valuation

Support your price target with clear methodology. Relative valuation (comps) and intrinsic valuation (DCF) together strengthen the case.

## Risks and Mitigants

Every investment has risks. Identify the key ones and explain why they are manageable or priced in. This demonstrates intellectual honesty and thorough analysis.
    `,
  },
  {
    slug: "pe-case-study-approach",
    title: "Private Equity Case Study Approach",
    summary: "Framework for tackling take-home and live case studies in PE interviews.",
    category: "Interviews",
    readTime: "11 min read",
    publishedAt: "2024-11-05",
    content: `
PE case studies test your ability to evaluate an investment opportunity under time pressure. Whether take-home or live, the evaluation framework is consistent.

## The Investment Decision Framework

Every case study answers one question: would you invest? Your framework should systematically address:

1. Is this a good business?
2. Is now the right time?
3. Is this the right price?
4. What could go wrong?

## Take-Home Cases

You typically receive 3-7 days and company materials: financials, industry data, and sometimes a CIM. Structure your time:

**Days 1-2:** Read everything. Build a basic model. Identify key questions.
**Days 3-4:** Deep analysis. Stress-test assumptions. Build bull/bear cases.
**Days 5-6:** Prepare presentation. Rehearse delivery. Anticipate questions.

## Live Cases

You have 2-4 hours with limited materials. Efficiency is paramount.

First 30 minutes: Understand the business and identify 2-3 key issues.
Middle 60-90 minutes: Build a simple model. Make and support your decision.
Final 30 minutes: Prepare a clear recommendation with key supporting points.

## What Separates Candidates

The best candidates demonstrate investment judgment, not just modeling ability. They identify the one or two factors that truly determine whether an investment works and focus their analysis there.

Average candidates try to analyze everything. Strong candidates prioritize ruthlessly.
    `,
  },
  {
    slug: "compensation-negotiation",
    title: "Negotiating Your Finance Offer",
    summary: "When and how to negotiate compensation in banking and buyside roles.",
    category: "Career Strategy",
    readTime: "5 min read",
    publishedAt: "2024-10-28",
    content: `
Compensation negotiation in finance follows different rules than other industries. Understanding when and how to negotiate prevents costly mistakes.

## The Reality of Entry-Level Offers

Junior offers at bulge brackets and major PE firms are typically non-negotiable. These firms make hundreds of similar offers annually and maintain strict pay bands for fairness and efficiency.

Attempting to negotiate a first-year analyst offer at Goldman Sachs signals you do not understand the industry. This can create negative impressions before you start.

## When Negotiation Works

Negotiation becomes appropriate as you gain seniority and market alternatives. Associate and VP lateral moves, especially to smaller firms or those actively competing for talent, offer negotiation room.

Signing bonuses are often more flexible than base salary, particularly for candidates leaving guaranteed money on the table.

## The Approach

Lead with your value, not your needs. "Given my deal experience in X sector and my relationships with Y clients, I believe a higher signing bonus reflects my immediate contribution."

Have alternatives. Real leverage comes from competing offers or the credible ability to stay in your current role.

## What Not to Do

Never negotiate without an offer in hand. Never use personal expenses as justification. Never accept verbally then try to renegotiate written terms.

The goal is to optimize your compensation while maintaining the relationship. Finance is a small industry with long memories.
    `,
  },
]

export const featuredPlaybooks = playbooks.slice(0, 3)

export const featuredGuides = guides.slice(0, 3)
