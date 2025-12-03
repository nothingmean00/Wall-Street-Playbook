module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/Downloads/wall-street-playbook/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Downloads/wall-street-playbook/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/Downloads/wall-street-playbook/app/loading.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Downloads/wall-street-playbook/app/loading.tsx [app-rsc] (ecmascript)"));
}),
"[project]/Downloads/wall-street-playbook/app/not-found.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Downloads/wall-street-playbook/app/not-found.tsx [app-rsc] (ecmascript)"));
}),
"[project]/Downloads/wall-street-playbook/lib/data.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Static data for WallStreetPlaybook
__turbopack_context__.s([
    "featuredGuides",
    ()=>featuredGuides,
    "featuredPlaybooks",
    ()=>featuredPlaybooks,
    "guides",
    ()=>guides,
    "playbooks",
    ()=>playbooks,
    "resumeServices",
    ()=>resumeServices
]);
const playbooks = [
    {
        slug: "ib-technical-guide",
        title: "Investment Banking Technical Guide",
        description: "Master the technical questions that separate candidates in IB interviews.",
        longDescription: "The definitive technical preparation guide for investment banking interviews. Covers every core concept tested at bulge brackets and elite boutiques—accounting, valuation, M&A, and LBO mechanics—with the precision and depth expected at the highest levels.",
        price: 79,
        contents: [
            "Accounting fundamentals and three-statement modeling",
            "Valuation methodologies: DCF, comps, precedent transactions",
            "M&A deal mechanics and accretion/dilution analysis",
            "LBO modeling framework and key value drivers",
            "Enterprise value vs. equity value deep dive",
            "100+ technical questions with detailed answers"
        ],
        excerpt: "Walk me through a DCF. Start with unlevered free cash flow: EBIT × (1 - tax rate) + D&A - CapEx - changes in NWC. Project 5-10 years, then calculate terminal value using either perpetuity growth or exit multiple method..."
    },
    {
        slug: "networking-playbook",
        title: "The Networking Playbook",
        description: "Scripts, frameworks, and tactics for building relationships that convert to offers.",
        longDescription: "A tactical guide to finance networking that transforms cold outreach into warm relationships. Includes word-for-word scripts tested across bulge bracket and elite boutique recruiting, plus the follow-up cadences that keep you top of mind.",
        price: 49,
        contents: [
            "Cold email templates for finance outreach",
            "LinkedIn outreach sequences that get replies",
            "Informational interview question frameworks",
            "Follow-up cadence and timing strategies",
            "Converting contacts into advocates",
            "Networking tracker spreadsheet template"
        ],
        excerpt: "Subject: Quick Question - [Firm] [Group] Hi [Name], I noticed you transitioned from [background] to [current role] at [firm]. I am currently [your situation] and would appreciate 15 minutes to hear about your experience..."
    },
    {
        slug: "pe-recruiting-guide",
        title: "Private Equity Recruiting Guide",
        description: "Navigate on-cycle and off-cycle PE recruiting with insider frameworks.",
        longDescription: "The complete playbook for private equity recruiting. Master the compressed timelines of on-cycle processes, build headhunter relationships that matter, and prepare for the case studies and technicals that determine outcomes.",
        price: 99,
        contents: [
            "On-cycle vs. off-cycle recruiting timelines",
            "Headhunter relationship management tactics",
            "PE technical interview deep dive",
            "LBO case study walkthrough with model",
            "Portfolio company analysis frameworks",
            "Firm-specific interview patterns for top funds"
        ],
        excerpt: "PE recruiting operates on compressed timelines. On-cycle processes can move from first call to offer in under 48 hours. Preparation must be complete before the process begins—there is no time to learn during..."
    },
    {
        slug: "behavioral-mastery",
        title: "Behavioral Interview Mastery",
        description: "Story frameworks and response structures for every behavioral question.",
        longDescription: "Transform your experiences into compelling narratives that resonate with interviewers. This systematic approach to behavioral interviews covers story banking, the optimized STAR method, and firm-specific patterns that help you stand out.",
        price: 59,
        contents: [
            "Story banking methodology and templates",
            "STAR framework optimization for finance",
            "Leadership and teamwork narrative structures",
            "Failure and weakness positioning tactics",
            "Why finance, why this firm response frameworks",
            "50+ behavioral questions with example answers"
        ],
        excerpt: 'Your "why finance" answer must connect three elements: relevant experience, demonstrated interest, and specific firm fit. Generic answers about "deal exposure" fail. Specific answers about a particular transaction type or sector succeed...'
    },
    {
        slug: "hedge-fund-primer",
        title: "Hedge Fund Interview Primer",
        description: "Pitch frameworks, investment thesis structures, and HF-specific preparation.",
        longDescription: "Preparation materials for hedge fund interviews across all major strategies. Covers stock pitch construction, investment thesis development, and the portfolio discussion frameworks that separate candidates at L/S equity, event-driven, and macro funds.",
        price: 89,
        contents: [
            "Stock pitch structure and delivery framework",
            "Investment thesis development process",
            "Variant perception identification methods",
            "Risk management discussion frameworks",
            "Strategy-specific interview patterns",
            "Sample pitches with detailed commentary"
        ],
        excerpt: "A strong stock pitch follows a specific structure: (1) one-sentence thesis, (2) business overview, (3) variant perception, (4) catalysts, (5) valuation, (6) risks and mitigants. Most candidates fail at step 3..."
    },
    {
        slug: "recruiting-timeline-tracker",
        title: "Recruiting Timeline & Tracker",
        description: "Complete recruiting calendar with application tracker and deadline management.",
        longDescription: "A comprehensive recruiting management system that ensures you never miss a deadline. Includes timeline calendars for IB, PE, and hedge fund cycles, application tracking spreadsheets, and the frameworks to manage multiple processes simultaneously.",
        price: 29,
        contents: [
            "IB summer analyst recruiting timeline",
            "IB full-time recruiting calendar",
            "PE on-cycle and off-cycle schedules",
            "Application tracking spreadsheet",
            "Interview scheduling framework",
            "Offer decision timeline management"
        ],
        excerpt: "Summer analyst recruiting typically opens in late July for bulge brackets, with first-round interviews in August and September. Elite boutiques often run slightly later cycles. Superdays cluster in September and October..."
    }
];
const resumeServices = [
    {
        id: "resume-review",
        title: "Resume Review",
        description: "Detailed line-by-line feedback on your resume with specific rewrite suggestions. We identify weaknesses in positioning, bullet structure, and overall narrative—then show you exactly how to fix them.",
        price: 197,
        turnaround: "3-5 business days",
        includes: [
            "Line-by-line written feedback",
            "Bullet point restructuring suggestions",
            "Quantification opportunities identified",
            "Positioning and narrative assessment",
            "Format and layout recommendations",
            "One round of follow-up questions"
        ]
    },
    {
        id: "resume-rewrite",
        title: "Resume Rewrite",
        description: "Complete resume overhaul from scratch. We rebuild your resume using frameworks proven at top firms—transforming your experience into the positioning that gets callbacks.",
        price: 497,
        turnaround: "5-7 business days",
        includes: [
            "Full resume reconstruction",
            "Experience repositioning strategy",
            "Optimized bullet point writing",
            "Quantified impact statements",
            "Industry-standard formatting",
            "Two revision rounds included",
            "Final PDF and Word delivery"
        ]
    }
];
const guides = [
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
    `
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
    `
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
    `
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
    `
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
    `
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
    `
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
    `
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
    `
    }
];
const featuredPlaybooks = playbooks.slice(0, 3);
const featuredGuides = guides.slice(0, 3);
}),
"[project]/Downloads/wall-street-playbook/app/blog/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BlogPage,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wall$2d$street$2d$playbook$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/wall-street-playbook/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wall$2d$street$2d$playbook$2f$components$2f$layout$2f$navbar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/wall-street-playbook/components/layout/navbar.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wall$2d$street$2d$playbook$2f$components$2f$layout$2f$footer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/wall-street-playbook/components/layout/footer.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wall$2d$street$2d$playbook$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/wall-street-playbook/lib/data.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wall$2d$street$2d$playbook$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/wall-street-playbook/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wall$2d$street$2d$playbook$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/Downloads/wall-street-playbook/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-rsc] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wall$2d$street$2d$playbook$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/Downloads/wall-street-playbook/node_modules/lucide-react/dist/esm/icons/clock.js [app-rsc] (ecmascript) <export default as Clock>");
;
;
;
;
;
;
const metadata = {
    title: "Finance Recruiting Insights & Career Guides",
    description: "Tactical insights on finance recruiting, technical interview preparation, networking strategies, and career development in investment banking, private equity, and hedge funds.",
    keywords: [
        "investment banking career advice",
        "PE recruiting tips",
        "finance interview preparation",
        "wall street networking",
        "breaking into investment banking",
        "hedge fund career"
    ],
    openGraph: {
        title: "Finance Recruiting Blog | Wall Street Playbook",
        description: "Tactical insights on recruiting, interview prep, networking, and career development in investment banking, PE, and hedge funds.",
        url: "https://wallstreetplaybook.org/blog"
    },
    alternates: {
        canonical: "https://wallstreetplaybook.org/blog"
    }
};
const categoryColors = {
    "Career Strategy": "bg-navy/10 text-navy",
    Recruiting: "bg-gold/20 text-gold",
    Technical: "bg-charcoal/10 text-charcoal",
    Interviews: "bg-navy/10 text-navy",
    Networking: "bg-gold/20 text-gold"
};
function BlogPage() {
    const featuredPost = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wall$2d$street$2d$playbook$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["guides"][0];
    const remainingPosts = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wall$2d$street$2d$playbook$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["guides"].slice(1);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wall$2d$street$2d$playbook$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex min-h-screen flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wall$2d$street$2d$playbook$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wall$2d$street$2d$playbook$2f$components$2f$layout$2f$navbar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Navbar"], {}, void 0, false, {
                fileName: "[project]/Downloads/wall-street-playbook/app/blog/page.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wall$2d$street$2d$playbook$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-grow",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wall$2d$street$2d$playbook$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "bg-navy py-20 lg:py-28",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wall$2d$street$2d$playbook$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mx-auto max-w-7xl px-6 lg:px-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wall$2d$street$2d$playbook$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mx-auto max-w-3xl text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wall$2d$street$2d$playbook$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-semibold uppercase tracking-widest text-gold",
                                        children: "Free Resources"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/wall-street-playbook/app/blog/page.tsx",
                                        lineNumber: 51,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wall$2d$street$2d$playbook$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl",
                                        children: "Blog"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/wall-street-playbook/app/blog/page.tsx",
                                        lineNumber: 52,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wall$2d$street$2d$playbook$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-6 text-lg leading-relaxed text-white/70",
                                        children: "Tactical insights on recruiting strategy, interview preparation, and career navigation in finance."
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/wall-street-playbook/app/blog/page.tsx",
                                        lineNumber: 53,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/wall-street-playbook/app/blog/page.tsx",
                                lineNumber: 50,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/wall-street-playbook/app/blog/page.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/wall-street-playbook/app/blog/page.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wall$2d$street$2d$playbook$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "bg-off-white py-12 lg:py-16",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wall$2d$street$2d$playbook$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mx-auto max-w-7xl px-6 lg:px-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wall$2d$street$2d$playbook$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wall$2d$street$2d$playbook$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: `/blog/${featuredPost.slug}`,
                                className: "group block rounded-xl border border-border bg-white p-8 lg:p-12 transition-all hover:shadow-lg hover:border-gold/30",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wall$2d$street$2d$playbook$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wall$2d$street$2d$playbook$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wall$2d$street$2d$playbook$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3 mb-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wall$2d$street$2d$playbook$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs font-semibold uppercase tracking-widest text-gold",
                                                            children: "Featured"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/wall-street-playbook/app/blog/page.tsx",
                                                            lineNumber: 70,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wall$2d$street$2d$playbook$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "h-1 w-1 rounded-full bg-charcoal/30"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/wall-street-playbook/app/blog/page.tsx",
                                                            lineNumber: 71,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wall$2d$street$2d$playbook$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `inline-block rounded-full px-3 py-1 text-xs font-medium ${categoryColors[featuredPost.category] || "bg-navy/10 text-navy"}`,
                                                            children: featuredPost.category
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/wall-street-playbook/app/blog/page.tsx",
                                                            lineNumber: 72,
                                                            columnNumber: 21
                                                        }, this),
                                                        featuredPost.readTime && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wall$2d$street$2d$playbook$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wall$2d$street$2d$playbook$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wall$2d$street$2d$playbook$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "h-1 w-1 rounded-full bg-charcoal/30"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/wall-street-playbook/app/blog/page.tsx",
                                                                    lineNumber: 81,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wall$2d$street$2d$playbook$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "flex items-center gap-1 text-xs text-charcoal/50",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wall$2d$street$2d$playbook$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wall$2d$street$2d$playbook$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                                            className: "h-3 w-3"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Downloads/wall-street-playbook/app/blog/page.tsx",
                                                                            lineNumber: 83,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        featuredPost.readTime
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Downloads/wall-street-playbook/app/blog/page.tsx",
                                                                    lineNumber: 82,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/wall-street-playbook/app/blog/page.tsx",
                                                    lineNumber: 69,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wall$2d$street$2d$playbook$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-2xl lg:text-3xl font-bold text-charcoal group-hover:text-navy transition-colors",
                                                    children: featuredPost.title
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/wall-street-playbook/app/blog/page.tsx",
                                                    lineNumber: 89,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wall$2d$street$2d$playbook$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-4 text-base text-charcoal/70 max-w-2xl",
                                                    children: featuredPost.summary
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/wall-street-playbook/app/blog/page.tsx",
                                                    lineNumber: 92,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/wall-street-playbook/app/blog/page.tsx",
                                            lineNumber: 68,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wall$2d$street$2d$playbook$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 text-sm font-semibold text-gold lg:ml-8",
                                            children: [
                                                "Read Article",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wall$2d$street$2d$playbook$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wall$2d$street$2d$playbook$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                    className: "h-4 w-4 transition-transform group-hover:translate-x-1"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/wall-street-playbook/app/blog/page.tsx",
                                                    lineNumber: 96,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/wall-street-playbook/app/blog/page.tsx",
                                            lineNumber: 94,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/wall-street-playbook/app/blog/page.tsx",
                                    lineNumber: 67,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/wall-street-playbook/app/blog/page.tsx",
                                lineNumber: 63,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/wall-street-playbook/app/blog/page.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/wall-street-playbook/app/blog/page.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wall$2d$street$2d$playbook$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "bg-off-white pb-20 lg:pb-28",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wall$2d$street$2d$playbook$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mx-auto max-w-7xl px-6 lg:px-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wall$2d$street$2d$playbook$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3",
                                children: remainingPosts.map((post)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wall$2d$street$2d$playbook$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wall$2d$street$2d$playbook$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/blog/${post.slug}`,
                                        className: "group flex flex-col bg-white rounded-xl border border-border p-6 transition-all duration-200 hover:shadow-lg hover:border-gold/30",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wall$2d$street$2d$playbook$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wall$2d$street$2d$playbook$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `inline-block rounded-full px-3 py-1 text-xs font-medium ${categoryColors[post.category] || "bg-navy/10 text-navy"}`,
                                                        children: post.category
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/wall-street-playbook/app/blog/page.tsx",
                                                        lineNumber: 115,
                                                        columnNumber: 21
                                                    }, this),
                                                    post.readTime && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wall$2d$street$2d$playbook$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "flex items-center gap-1 text-xs text-charcoal/50",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wall$2d$street$2d$playbook$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wall$2d$street$2d$playbook$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                                className: "h-3 w-3"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/wall-street-playbook/app/blog/page.tsx",
                                                                lineNumber: 124,
                                                                columnNumber: 25
                                                            }, this),
                                                            post.readTime
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/wall-street-playbook/app/blog/page.tsx",
                                                        lineNumber: 123,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/wall-street-playbook/app/blog/page.tsx",
                                                lineNumber: 114,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wall$2d$street$2d$playbook$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-semibold text-charcoal group-hover:text-navy transition-colors line-clamp-2",
                                                children: post.title
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/wall-street-playbook/app/blog/page.tsx",
                                                lineNumber: 131,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wall$2d$street$2d$playbook$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-2 text-sm text-charcoal/70 line-clamp-2 flex-grow",
                                                children: post.summary
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/wall-street-playbook/app/blog/page.tsx",
                                                lineNumber: 136,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wall$2d$street$2d$playbook$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-4 flex items-center gap-1 text-sm font-medium text-gold",
                                                children: [
                                                    "Read Article",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wall$2d$street$2d$playbook$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wall$2d$street$2d$playbook$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                        className: "h-3 w-3 transition-transform group-hover:translate-x-1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/wall-street-playbook/app/blog/page.tsx",
                                                        lineNumber: 141,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/wall-street-playbook/app/blog/page.tsx",
                                                lineNumber: 139,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, post.slug, true, {
                                        fileName: "[project]/Downloads/wall-street-playbook/app/blog/page.tsx",
                                        lineNumber: 108,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Downloads/wall-street-playbook/app/blog/page.tsx",
                                lineNumber: 106,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/wall-street-playbook/app/blog/page.tsx",
                            lineNumber: 105,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/wall-street-playbook/app/blog/page.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wall$2d$street$2d$playbook$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "bg-navy py-16",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wall$2d$street$2d$playbook$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mx-auto max-w-3xl px-6 text-center lg:px-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wall$2d$street$2d$playbook$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bold text-white sm:text-3xl",
                                    children: "Go Deeper With Our Playbooks"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/wall-street-playbook/app/blog/page.tsx",
                                    lineNumber: 152,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wall$2d$street$2d$playbook$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-4 text-base text-white/70",
                                    children: "These articles provide a foundation. Our Playbooks deliver the complete frameworks, scripts, and detailed preparation materials you need to compete at the highest level."
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/wall-street-playbook/app/blog/page.tsx",
                                    lineNumber: 153,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wall$2d$street$2d$playbook$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wall$2d$street$2d$playbook$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/playbooks",
                                    className: "mt-8 inline-flex items-center gap-2 rounded-lg bg-gold px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-white",
                                    children: [
                                        "Browse Playbooks",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wall$2d$street$2d$playbook$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wall$2d$street$2d$playbook$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/wall-street-playbook/app/blog/page.tsx",
                                            lineNumber: 162,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/wall-street-playbook/app/blog/page.tsx",
                                    lineNumber: 157,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/wall-street-playbook/app/blog/page.tsx",
                            lineNumber: 151,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/wall-street-playbook/app/blog/page.tsx",
                        lineNumber: 150,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/wall-street-playbook/app/blog/page.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wall$2d$street$2d$playbook$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wall$2d$street$2d$playbook$2f$components$2f$layout$2f$footer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Footer"], {}, void 0, false, {
                fileName: "[project]/Downloads/wall-street-playbook/app/blog/page.tsx",
                lineNumber: 167,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/wall-street-playbook/app/blog/page.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/wall-street-playbook/app/blog/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Downloads/wall-street-playbook/app/blog/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__6e99916f._.js.map