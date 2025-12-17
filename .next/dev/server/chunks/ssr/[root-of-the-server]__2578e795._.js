module.exports = [
"[project]/Downloads/wall-street-playbook/app/icon.svg.mjs { IMAGE => \"[project]/Downloads/wall-street-playbook/app/icon.svg (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Downloads/wall-street-playbook/app/icon.svg.mjs { IMAGE => \"[project]/Downloads/wall-street-playbook/app/icon.svg (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/Downloads/wall-street-playbook/app/apple-icon.png.mjs { IMAGE => \"[project]/Downloads/wall-street-playbook/app/apple-icon.png (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Downloads/wall-street-playbook/app/apple-icon.png.mjs { IMAGE => \"[project]/Downloads/wall-street-playbook/app/apple-icon.png (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
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
        title: "IB Technical Interview Guide",
        description: "400+ technical questions with detailed answers. DCF, LBO, M&A, accounting—everything tested at bulge brackets and elite boutiques.",
        longDescription: "The definitive technical preparation guide for investment banking interviews. Master the accounting, valuation, M&A, and LBO questions asked at Goldman, Morgan Stanley, Evercore, and every top firm. This isn't theory—it's the exact questions candidates face, with the precise answers that get offers.",
        price: 127,
        contents: [
            "400+ real technical interview questions with answers",
            "Accounting fundamentals: 3-statement modeling deep dive",
            "DCF valuation: step-by-step walkthrough with edge cases",
            "Comparable company and precedent transaction analysis",
            "M&A mechanics: accretion/dilution, merger math, synergies",
            "LBO fundamentals and paper LBO frameworks",
            "Enterprise value vs. equity value mastery",
            "Brain teasers and market sizing questions"
        ],
        excerpt: "Walk me through a DCF. Start with unlevered free cash flow: EBIT × (1 - tax rate) + D&A - CapEx - ΔNWC. Project 5-10 years based on revenue growth and margin assumptions. Terminal value via perpetuity growth (FCF × (1+g))/(WACC-g) or exit multiple..."
    },
    {
        slug: "pe-recruiting-playbook",
        title: "PE Recruiting Playbook",
        description: "Navigate on-cycle chaos, build headhunter relationships, and crush PE interviews. From first call to signed offer.",
        longDescription: "Private equity recruiting is a different game—compressed timelines, secretive processes, and higher stakes. This playbook gives you the insider knowledge to navigate on-cycle recruiting, build real relationships with headhunters, and prepare for the technicals and case studies that determine who gets offers at KKR, Blackstone, Apollo, and the rest.",
        price: 167,
        contents: [
            "On-cycle vs. off-cycle: complete timeline breakdown",
            "Headhunter relationship strategy (who to target, how to stand out)",
            "PE technical questions: LBO mechanics, deal math, portfolio questions",
            "Paper LBO mastery: 10-minute framework that impresses",
            "Case study walkthrough with real examples",
            "Firm-specific patterns: mega-funds vs. MM vs. growth equity",
            "How to handle exploding offers and competing processes",
            "What to do when you only have 48 hours"
        ],
        excerpt: "On-cycle PE recruiting can move from first headhunter call to signed offer in under 72 hours. There is no time to prepare during the process—preparation must be complete before your phone rings. Here's exactly what you need ready..."
    },
    {
        slug: "networking-cold-email-playbook",
        title: "Networking & Cold Email Playbook",
        description: "50+ email templates, LinkedIn scripts, and follow-up sequences that actually get responses. Built for non-targets.",
        longDescription: "Networking is how non-targets break in and how everyone gets an edge. This playbook gives you the exact scripts, templates, and follow-up cadences that convert cold outreach into warm relationships—and warm relationships into referrals. Every template has been tested across hundreds of real recruiting cycles.",
        price: 67,
        contents: [
            "50+ cold email templates (IB, PE, HF-specific)",
            "LinkedIn outreach sequences with response rate data",
            "The follow-up framework: timing, tone, and persistence",
            "Informational interview questions that build relationships",
            "How to convert contacts into advocates who push for you",
            "Coffee chat scripts and thank-you note templates",
            "Networking tracker spreadsheet (Notion + Excel)",
            "What to do when you get ghosted"
        ],
        excerpt: "Subject: Quick Question - [Firm] [Group]\n\nHi [Name], I came across your profile while researching [firm]'s [group]. Your transition from [background] is particularly interesting given my own path from [your background]. Would you have 15 minutes this week for a brief call?..."
    },
    {
        slug: "lbo-modeling-course",
        title: "LBO Modeling Crash Course",
        description: "Build LBO models from scratch. Sources & uses, debt schedules, returns analysis—with Excel templates included.",
        longDescription: "LBO modeling is the core technical skill for PE recruiting. This crash course takes you from zero to building full LBO models, including the paper LBO shortcuts that let you ace timed case studies. Includes downloadable Excel templates you can use immediately.",
        price: 127,
        contents: [
            "LBO fundamentals: how PE creates value",
            "Sources & uses: building the transaction structure",
            "Debt schedules: senior, sub, mezzanine, PIK",
            "Cash flow waterfall and debt paydown mechanics",
            "Returns analysis: IRR, MOIC, and sensitivity tables",
            "Paper LBO framework: solve in 10 minutes by hand",
            "3 full LBO model templates (Excel download)",
            "Practice case studies with solutions"
        ],
        excerpt: "A PE firm buys a company for 8x EBITDA ($100M EBITDA = $800M TEV). They put in 40% equity ($320M) and 60% debt ($480M). If EBITDA grows to $130M and they exit at 8x in 5 years, what's the IRR? Exit TEV = $1,040M. Pay down $150M debt. Equity value = $710M. MOIC = 2.2x. IRR ≈ 17%..."
    },
    {
        slug: "stock-pitch-guide",
        title: "Stock Pitch Template & Examples",
        description: "The pitch framework used at Point72, Citadel, and Tiger Cubs. Plus 5 full example pitches with commentary.",
        longDescription: "A stock pitch is how you prove you can think like an investor. This guide gives you the exact framework top hedge funds want to see, plus five fully-written example pitches across different sectors and strategies. Whether you're long, short, or event-driven—this is how you stand out.",
        price: 77,
        contents: [
            "The 6-part pitch structure that top funds expect",
            "How to develop a real variant perception (not fake edge)",
            "Catalyst identification and timeline mapping",
            "Valuation: triangulating comps, DCF, and sum-of-parts",
            "Risk/reward framing that shows investment judgment",
            "5 complete example pitches with detailed commentary",
            "Pitch deck template (PowerPoint)",
            "Common mistakes that kill pitches"
        ],
        excerpt: "A strong pitch follows six parts: (1) One-sentence thesis with price target, (2) Business overview in 60 seconds, (3) Variant perception—what you see that consensus misses, (4) Catalysts with timeframes, (5) Valuation support, (6) Risks and why they're manageable..."
    },
    {
        slug: "resume-story-playbook",
        title: "Walk Me Through Your Resume Playbook",
        description: "Nail the first question of every interview. Story frameworks, 30+ examples, and positioning strategies.",
        longDescription: "'Walk me through your resume' is the first question in virtually every finance interview—and most candidates blow it. This playbook teaches you to transform your background into a compelling 2-minute narrative that positions you as the obvious choice. Includes 30+ real examples across different backgrounds.",
        price: 57,
        contents: [
            "The 3-part story structure that hooks interviewers",
            "How to position any background for finance",
            "30+ example stories across different profiles",
            "Why IB / Why PE / Why HF answer frameworks",
            "Handling gaps, switches, and non-traditional paths",
            "Why this firm: research-backed answers that resonate",
            "Weakness and failure questions: the right way",
            "Practice recording framework for self-improvement"
        ],
        excerpt: "Your story has three beats: (1) Origin—one sentence on where you started and what sparked your interest, (2) Development—how you built relevant skills and confirmed your interest, (3) Destination—why this role is the logical next step. Most candidates ramble. You won't..."
    },
    {
        slug: "restructuring-guide",
        title: "Restructuring & Distressed Debt Guide",
        description: "Master the technical interviews for RX groups. Bankruptcy mechanics, distressed valuation, and credit analysis.",
        longDescription: "Restructuring is one of the most technical and intellectually demanding areas of finance—and the interviews reflect that. This guide covers everything from Chapter 11 mechanics to distressed valuation frameworks, giving you the edge to land roles at Houlihan Lokey, PJT, Lazard RX, and distressed credit funds.",
        price: 97,
        contents: [
            "Chapter 11 bankruptcy process: timeline and key milestones",
            "Restructuring vs. liquidation analysis frameworks",
            "Distressed valuation: enterprise value waterfall",
            "Fulcrum security identification and recovery analysis",
            "Credit agreement basics: covenants, defaults, remedies",
            "DIP financing and exit financing structures",
            "100+ RX-specific technical interview questions",
            "Case study: real restructuring deal walkthrough"
        ],
        excerpt: "Walk me through a fulcrum security analysis. Start with enterprise value—typically via DCF or comparable transactions. Then work down the capital structure: secured debt recovers first, then unsecured, then sub debt, then equity. The fulcrum security is where recovery breaks—the tranche that receives partial recovery..."
    },
    {
        slug: "repe-modeling-guide",
        title: "Real Estate Private Equity Modeling",
        description: "Property-level models, waterfall structures, and REPE-specific technicals. Includes Excel templates.",
        longDescription: "Real estate private equity uses completely different modeling conventions than traditional PE. This guide teaches you property-level cash flow modeling, GP/LP waterfall structures, and the sector-specific knowledge (multifamily, office, industrial, retail) you need to break into Blackstone Real Estate, Starwood, or any top REPE shop.",
        price: 127,
        contents: [
            "Property-level cash flow modeling fundamentals",
            "NOI, Cap Rates, and real estate valuation methods",
            "GP/LP waterfall structures with promote calculations",
            "Sector deep dives: multifamily, office, industrial, retail",
            "Development modeling: construction draws and stabilization",
            "Debt sizing and DSCR analysis",
            "3 full REPE model templates (Excel download)",
            "REPE-specific interview questions and answers"
        ],
        excerpt: "Calculate the equity multiple for this deal: Purchase at 5.0% cap rate, $10M NOI = $200M value. 65% LTV = $130M debt, $70M equity. Hold 5 years, exit at 5.5% cap (NOI grows to $12M). Exit value = $218M. Debt paydown to $110M. Equity proceeds = $108M. Multiple = 1.54x. Now add the waterfall..."
    },
    {
        slug: "credit-direct-lending-playbook",
        title: "Credit & Direct Lending Playbook",
        description: "Break into private credit. Credit memos, downside analysis, and loan documentation fundamentals.",
        longDescription: "Private credit is one of the fastest-growing areas in finance, and the interview process is distinct from traditional PE. This playbook covers credit analysis frameworks, memo writing, loan documentation, and the downside-focused thinking that credit funds want to see. Perfect for candidates targeting Ares, Golub, Owl Rock, and similar firms.",
        price: 97,
        contents: [
            "Credit analysis framework: the 5 Cs and beyond",
            "Writing investment memos that get approved",
            "Downside protection analysis: what can go wrong?",
            "Loan documentation: covenants, baskets, and carve-outs",
            "Unitranche, first lien, second lien structures explained",
            "Sponsor-backed vs. non-sponsored lending differences",
            "Credit fund economics: fees, hurdles, waterfalls",
            "50+ credit-specific interview questions with answers"
        ],
        excerpt: "Credit investors think differently than equity investors. The question isn't 'how much can I make?'—it's 'how do I get my money back if everything goes wrong?' Walk me through your downside analysis: revenue decline scenarios, margin compression, liquidity runway, asset coverage, and covenant headroom..."
    },
    {
        slug: "superday-survival-guide",
        title: "The Superday Survival Guide",
        description: "Hour-by-hour preparation for final rounds. Manage stress, ace back-to-backs, and close the offer.",
        longDescription: "Superdays are where offers are won and lost. After months of preparation, everything comes down to one intense day of back-to-back interviews. This guide gives you the hour-by-hour playbook for the 48 hours before, during, and after your Superday—including stress management, energy optimization, and the follow-up strategy that seals offers.",
        price: 47,
        contents: [
            "48-hour countdown: exactly what to do and when",
            "The night before: sleep, meals, and mental prep",
            "Morning routine that maximizes performance",
            "Energy management across 5+ consecutive interviews",
            "How to reset after a tough interview",
            "Reading the room: adjusting to interviewer styles",
            "Closing strong: the final impression that matters",
            "Post-Superday follow-up: timing and templates"
        ],
        excerpt: "The 48 hours before your Superday matter more than you think. Here's the protocol: T-48 hours—final technical review, no new material. T-24 hours—logistics locked, outfit ready, route planned. T-12 hours—light dinner, no alcohol, phone off by 10pm. T-2 hours—protein-heavy breakfast, arrive 20 min early..."
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
        slug: "how-to-break-into-investment-banking-2026",
        title: "How to Break Into Investment Banking in 2026: Non-Target, Target, and Lateral Paths",
        summary: "The complete guide to IB recruiting—timelines, networking strategies, and what actually works for each pathway.",
        category: "Recruiting",
        readTime: "25 min read",
        publishedAt: "2025-12-10",
        content: `
Breaking into investment banking requires understanding that there isn't one universal path—your strategy depends entirely on where you're starting from and how much time you have. Whether you're a freshman at a target school, a senior at a non-target desperately networking, or a Big 4 analyst looking to lateral, each pathway demands different tactics and timelines.

## The Four Main Entry Points Into Investment Banking

Investment banking recruiting operates around four distinct pathways, each with its own timeline, difficulty level, and prerequisites.

**Undergraduate at a Target or Semi-Target School** remains the cheapest and most straightforward path. If you attend schools like Wharton, Harvard, NYU Stern, Michigan Ross, or Berkeley Haas, you'll have access to structured on-campus recruiting where bulge bracket banks actively come to you.

**Recent Graduates** face a compressed window and must act with urgency. The critical rule: your chances decrease dramatically if you wait more than 1-2 years after graduation.

**MBA Candidates** follow a highly structured timeline that starts the moment you confirm your MBA acceptance. Recruiting technically begins before you even start classes.

**Lateral Hires** with 1-3 years of full-time investment banking or closely related experience can move between banks or from adjacent fields like Transaction Advisory Services.

## The Recruiting Timeline Reality: Earlier Than You Think

Investment banking recruiting has accelerated to absurd levels. For **junior year summer analyst positions**, applications now go live 12-18 months before the internship starts. Bulge bracket banks begin posting applications as early as January-February of sophomore year.

The majority of summer analyst offers get extended between January and April of sophomore year—meaning recruiting wraps up a full 15 months before you'd start the internship.

## Target vs. Non-Target: What Actually Matters

The target school advantage is real but not insurmountable. Banks pay career centers for exclusive access because it's financially efficient.

**Target schools** (Wharton, Harvard, Princeton, Stanford, MIT, Columbia, Duke, NYU Stern, Michigan Ross) get on-campus recruiting visits and automatic resume reviews. Students generally can get interviews with a GPA above 3.5, though top banks prefer 3.7-3.8+.

**Non-target schools** require a completely different strategy:
- Maintain a GPA of 3.7+ as a bare minimum (ideally 3.8-3.9)
- Network 3-4x as much as target school peers
- List your SAT/ACT scores on your resume if strong (1500+ SAT, 34+ ACT)
- Target middle-market banks and regional boutiques first

## Building Your Pre-Internship Foundation

You will not break into a bulge bracket internship with a blank resume. Banks expect to see relevant "steppingstone" experience.

**Freshman and early sophomore summers** should focus on getting any finance-adjacent experience: corporate finance, wealth management, corporate banking, Big 4 accounting firms, or financial analyst roles at startups.

**Academic preparation** needs to happen concurrently. You must learn accounting fundamentals, financial statement analysis, and valuation methodologies before interviews begin.

## Networking: The Non-Negotiable Differentiator

Networking isn't optional—it's the primary determinant of whether you get interviews, especially from non-target schools.

**Volume requirements**: From a target school, you need 20-30 networking calls to get a meaningful advantage. From a non-target, plan for 50-100+ outreach emails and 30-50 completed calls.

**The cold email framework** that works has three components:
1. Establish your point of connection
2. Make a specific ask focused on advice, not jobs
3. Propose three specific times you're available

Keep emails to 5 sentences maximum and always use your school email address.

## The Interview Process

**Behavioral/fit questions** assess whether you'll survive the hours and have genuine interest. Core questions: "Walk me through your resume," "Why investment banking?", "Why our bank?"

**Technical questions** test accounting, valuation, and deal mechanics. Core topics include: three-statement linkages, DCF analysis, LBO modeling, and M&A accretion/dilution.

**The Superday** is the final stage where you meet 3-6 bankers in back-to-back sessions. The acceptance rate averages 30-40%.

## The Path Forward: What to Do Right Now

**Freshmen and sophomores**: Join finance clubs, secure a relevant internship, start learning accounting basics, and begin networking 6-9 months before applications open.

**Current juniors**: Focus on off-cycle internships and middle-market banks. Begin intensive technical preparation and complete 30-50 networking calls.

**Recent graduates**: Target Transaction Advisory Services or valuation roles at Big 4 firms, corporate banking, or middle-market IB roles. Land a steppingstone role within 6 months, lateral to banking within 12-18 months.

---

*Ready to nail the technical questions? Our [IB Technical Interview Guide](/playbooks/ib-technical-guide) covers the 400+ questions you'll actually face.*

*Need help with your resume? Get a [professional resume review](/resume-services) from finance professionals who've screened thousands of candidates.*
    `
    },
    {
        slug: "investment-banking-resume-checklist",
        title: "Investment Banking Resume Example and Complete Checklist",
        summary: "The exact structure, bullet point formula, and deal-breakers you need to survive the 30-second screen.",
        category: "Recruiting",
        readTime: "12 min read",
        publishedAt: "2025-12-09",
        content: `
Investment banking recruiting is a process of elimination, not selection. Bankers don't read resumes to find reasons to hire you; they scan them for 30 seconds to find reasons to *ding* you. Your resume has one job: survive that initial scan by looking exactly like what a burned-out analyst expects to see.

If your font is too creative, your bullets are too vague, or your formatting is even slightly off, you will be rejected before anyone reads a word about your internship.

## The Only Format That Works (The "Gold Standard")

Forget everything career services told you about "standing out" with design. In finance, standing out visually is a negative signal.

**The Non-Negotiables:**

- **Length:** One page. Period. No exceptions.
- **Margins:** 0.5" to 0.75" on all sides
- **Font:** Times New Roman or Garamond, size 10-11pt
- **Structure:** Header → Education → Work Experience → Skills & Interests

## Section 1: Education (The Anchor)

For students and recent grads, Education goes at the top. This is where bankers look first.

- **GPA:** If it's 3.5 or above, bold it. If below 3.0, you have a major problem.
- **Test Scores:** If you have a 1500+ SAT or 34+ ACT, keep it. Bankers love standardized metrics.
- **Relevant Coursework:** List 4-6 finance/accounting classes.

## Section 2: Work Experience (The Bullet Point Formula)

This is where 90% of candidates fail. Most students list *responsibilities*. Bankers want to see *impact*.

**The Perfect Bullet Formula:**
**[Action Verb]** + **[Context/Task]** + **[Quantified Result]**

**Before (Weak):**
- *Researched potential acquisition targets for a client in the tech sector*
- *Helped creating pitch decks for client meetings*

**After (Strong):**
- **Screened** 50+ potential acquisition targets in the SaaS sector based on EBITDA margins and recurring revenue, identifying 3 high-priority targets
- **Developed** 15-slide management presentation for a $20M Series B fundraise, including market sizing and pro forma projections

**Key Rules:**
- No "Assisted" or "Helped"—use *Constructed, Evaluated, Spearheaded, Modeled, Executed*
- Quantify everything. If you don't have exact numbers, estimate conservatively.

## Section 3: Skills & Interests (The "Airport Test")

The "Airport Test" is simple: If I'm stuck with you at O'Hare for 4 hours during a flight delay, will I be miserable?

- **Be Specific:** "Travel" is boring. "Backpacking through 4 countries in Southeast Asia" is a conversation starter.
- **The Golden Rule:** If you list it, you must be able to talk about it for 5 minutes.

## 10 Resume Mistakes That Kill Your Chances

1. **Typos:** One typo = ding. Investment banking requires extreme attention to detail.
2. **Inconsistent Dates:** Using "Jan 2023" in one place and "January 2023" in another.
3. **No GPA:** Bankers assume it's sub-3.0 if you hide it.
4. **Bad Margins:** Making margins 0.2" to cram text in.
5. **Fluff Skills:** Listing "Leadership" or "Microsoft Word" as skills.
6. **Photo:** Never put your photo on a US finance resume.
7. **Summary/Objective:** Delete it. Your objective is obviously to get the job.
8. **Colored Text:** Black and white only.
9. **Gaps in Timeline:** Explain gaps or format dates to minimize them.
10. **Lying:** If you say you "Built an LBO model," you will be asked to walk through it.

## Final Step: The "Fresh Eyes" Review

You've looked at your resume for 10 hours; you are now blind to your own errors. You need a second pair of eyes—specifically, eyes that have screened thousands of these before.

---

*Don't let a formatting error be the reason you miss out on a $110K starting salary. Get a [Professional Resume Review](/resume-services) from finance professionals who catch what you miss.*

*Ready to master the technical questions? Check out our [IB Technical Interview Guide](/playbooks/ib-technical-guide).*
    `
    },
    {
        slug: "learn-investment-banking-technicals-order",
        title: "The Only Order You Should Learn Investment Banking Technicals In",
        summary: "Accounting → Valuation → DCF → M&A → LBO: why sequence matters more than study time.",
        category: "Technical",
        readTime: "20 min read",
        publishedAt: "2025-12-08",
        content: `
Investment banking technical interviews test whether you understand finance—but more importantly, they test whether you understand it *in the right order*. Learning DCF models before you know how the three financial statements connect is like learning calculus before algebra.

## Why Learning Order Matters More Than Study Time

Most candidates fail not because they didn't study enough—they fail because they studied in the wrong sequence. They jump to DCF models without understanding accounting, then panic when asked "Walk me through how depreciation flows through the three statements."

Investment banking technicals are hierarchical. Each concept builds on the previous one.

## The Five-Level Hierarchy

### Level 1: Accounting Fundamentals (Week 1-2)

This is your foundation. Every technical question traces back to the three financial statements.

**What You Must Master:**

The income statement flows into both the balance sheet (through retained earnings) and the cash flow statement (through net income). Changes in balance sheet accounts explain the adjustments on the cash flow statement.

**Common Questions:**
- "Walk me through the three financial statements and how they're linked"
- "If depreciation increases by $10, walk me through the impact on all three statements"

**Time Investment:** 7-10 days until you can answer these in your sleep.

### Level 2: Enterprise Value vs. Equity Value (Week 2-3)

**Enterprise Value** = Value of entire business operations = Equity Value + Net Debt + Preferred + Minority Interest - Non-Operating Assets

**Equity Value** = Value to common shareholders = Share Price × Fully Diluted Shares

**Time Investment:** 5-7 days. This concept is straightforward but critical.

### Level 3: Valuation Methodologies (Week 3-5)

The three core methods:

1. **Comparable Company Analysis (Trading Comps):** Value based on public peer multiples
2. **Precedent Transaction Analysis:** Value based on past M&A deal multiples (includes control premium)
3. **DCF Analysis:** Value based on present value of future cash flows

**The Five Steps of a DCF:**
1. Project unlevered free cash flows (5-10 years)
2. Calculate WACC
3. Calculate terminal value
4. Discount everything to present value
5. Convert enterprise value to equity value

**Time Investment:** 10-14 days. DCF is the most tested methodology.

### Level 4: Merger Models (Week 5-6)

M&A models determine whether an acquisition increases or decreases the acquirer's EPS (accretive vs. dilutive).

**Quick Rule:** If acquirer's P/E > target's implied P/E, deal is likely accretive.

**Time Investment:** 7-10 days.

### Level 5: LBO Models (Week 6-7)

LBO models calculate PE returns from acquiring a company with debt, operating it for 5-7 years, and selling.

**Paper LBO Mental Math:**
- Rule of 72: If equity doubles, IRR ≈ 72 / years
- Rule of 114: If equity triples, IRR ≈ 114 / years
- Rule of 144: If equity quadruples, IRR ≈ 144 / years

**Time Investment:** 7-10 days.

## The 6-Week Study Plan

**Weeks 1-2:** Accounting + EV/Equity Value
**Weeks 3-5:** Valuation methodologies (focus on DCF)
**Week 5-6:** M&A models
**Week 6-7:** LBO models

## How to Know When You're Ready

You're prepared when you can:
1. Walk through the three statements and explain how a $10 change flows through all three in under 2 minutes
2. Explain DCF steps and calculate WACC from memory
3. Complete a paper LBO in 15-20 minutes
4. Answer "Is this deal accretive or dilutive?" in under 30 seconds

---

*Want the full 400+ question bank with detailed answers? Get the [IB Technical Interview Guide](/playbooks/ib-technical-guide).*

*Need to master LBO modeling specifically? Check out our [LBO Modeling Crash Course](/playbooks/lbo-modeling-course).*
    `
    },
    {
        slug: "100-investment-banking-technical-questions",
        title: "100 Core Investment Banking Technical Questions by Topic",
        summary: "The most frequently asked questions organized by category, with the concepts you need to actually understand them.",
        category: "Technical",
        readTime: "30 min read",
        publishedAt: "2025-12-07",
        content: `
Investment banking technical interviews aren't designed to test whether you've memorized answers—they're designed to expose whether you actually understand finance well enough to explain it under pressure.

## How Technical Questions Are Actually Distributed

Based on analysis of real interview questions: **23% are "Walk me through a DCF"**. Another 20% ask about valuation methodologies, and 10% test financial statement linkages. These top three types account for 53% of everything you'll be asked.

## Category 1: Accounting and Financial Statements

**Q1: Walk me through the three financial statements and how they're linked.**

The income statement shows profitability. The cash flow statement shows cash movements, starting with net income. The balance sheet shows assets, liabilities, and equity at a point in time. Net income flows to retained earnings on the balance sheet and is the starting point for the cash flow statement.

**Q2: How does a $10 increase in depreciation flow through?**

Income statement: Pre-tax income down $10, net income down $7.50 (at 25% tax). Cash flow: Start with NI (down $7.50), add back depreciation ($10). Net: cash up $2.50. Balance sheet: Cash up $2.50, PP&E down $10, retained earnings down $7.50.

**Q3: Why do we add back depreciation on the cash flow statement?**

Depreciation reduced net income but didn't use cash. We add it back to reflect the company still has that cash.

## Category 2: Enterprise Value vs. Equity Value

**Q9: What's the difference between enterprise value and equity value?**

Equity value = value to common shareholders = share price × diluted shares. Enterprise value = value of entire business = equity value + net debt + preferred + minority interest - non-operating assets.

**Q10: If a company issues $100M debt to buy back stock, what happens to EV and equity value?**

Equity value decreases by $100M. Enterprise value stays the same—it's just a capital structure change.

## Category 3: Valuation Methodologies

**Q14: What are the three main ways to value a company?**

1. Comparable Company Analysis (trading comps)
2. Precedent Transaction Analysis (deal comps)
3. Discounted Cash Flow (DCF)

**Q15: When would you use each?**

DCF for intrinsic fundamental value. Trading comps for market reality check. Precedent transactions when valuing for M&A (includes control premium).

## Category 4: DCF Analysis (Most Tested)

**Q18: Walk me through a DCF.**

Step 1: Project unlevered free cash flows for 5-10 years. FCFF = EBIT × (1-Tax) + D&A - CapEx - ΔNWC.
Step 2: Calculate WACC.
Step 3: Calculate terminal value using perpetuity growth or exit multiple.
Step 4: Discount all cash flows to present value.
Step 5: Sum to get enterprise value, subtract net debt for equity value.

**Q19: What discount rate do you use?**

WACC for unlevered FCF. Cost of equity for levered FCF.

**Q20: How do you calculate WACC?**

WACC = (E/V × Cost of Equity) + (D/V × Cost of Debt × (1-Tax)). Cost of equity via CAPM: Risk-Free Rate + Beta × Market Risk Premium.

## Category 5: M&A Analysis

**Q26: Walk me through a merger model.**

Calculate standalone financials for both companies. Determine purchase price and consideration (cash/stock). Model sources and uses. Calculate pro forma adjustments (new interest, new shares, synergies). Calculate pro forma EPS. Compare to standalone—if higher, accretive; if lower, dilutive.

**Q27: Is a deal accretive if acquirer P/E is 20x and pays 15x for target?**

Likely accretive. Acquirer is buying "cheaper" earnings relative to its own valuation.

## Category 6: LBO Models

**Q31: Walk me through an LBO.**

Calculate entry EV using entry multiple. Structure sources (debt, equity) and uses (purchase price, fees). Project 5-7 year financials. Model debt paydown. Calculate exit EV, subtract remaining debt for exit equity. Calculate IRR and MOIC.

**Q32: What's an ideal LBO candidate?**

Strong, stable cash flows. Low capex. Strong market position. Operational improvement opportunity. Non-cyclical industry.

**Q35: How do you calculate IRR quickly?**

Rule of 72: Equity doubles, IRR ≈ 72/years.
Rule of 114: Equity triples, IRR ≈ 114/years.
Rule of 144: Equity quadruples, IRR ≈ 144/years.

## How to Actually Learn These

**Build Models From Scratch:** Don't just review—build a DCF and LBO from a blank Excel sheet.

**Verbalize Your Logic:** Practice explaining out loud. Record yourself.

**Focus on Concept Clusters:** Everything connects. Learn in order so each concept builds on the last.

---

*Want all 400+ questions with detailed answers? Get the [IB Technical Interview Guide](/playbooks/ib-technical-guide).*

*Need to master LBO modeling? Our [LBO Modeling Crash Course](/playbooks/lbo-modeling-course) includes 3 full model templates.*
    `
    },
    {
        slug: "cold-emailing-bankers-scripts",
        title: "Cold Emailing Bankers: Exact Scripts, Subject Lines, and Follow-Up Strategies",
        summary: "The 5 golden rules, plug-and-play templates, and timing strategies that actually get responses in 2026.",
        category: "Networking",
        readTime: "10 min read",
        publishedAt: "2025-12-06",
        content: `
Networking in investment banking is a numbers game, but it's a game with specific rules. If you break them, your email gets deleted instantly. If you follow them, you get the 15-minute call that leads to the Superday.

## The 5 Golden Rules of Cold Emailing

1. **5 Sentences Maximum:** No one reads paragraphs on a phone. If they have to scroll, they delete.
2. **No "Pick Your Brain":** This phrase signals "I want to waste your time." Ask for "advice on your experience in [specific group]."
3. **Specific Availability:** Never ask "When are you free?" Offer 3 specific time slots.
4. **Use Your .edu Email:** Gmail addresses often get filtered to spam.
5. **One Thread Rule:** Always reply to your own email when following up.

## Subject Lines That Get Opened

**For Alumni (High Response Rate):**
- *Student from [University] - Networking*
- *[University] Sophomore / Investment Banking Advice*
- *Introduction - [University] [Year] - [Name]*

**For Non-Alumni:**
- *Question on [Specific Deal] / [Your University] Student*
- *Referral from [Mutual Contact Name]*

**Avoid:** "Hello", "Coffee Chat", "Inquiry"

## The "Plug-and-Play" Scripts

### Scenario A: The "Warm" Alumnus Email

**Subject:** [School] Student / Investment Banking Advice - [Name]

Dear [Name],

I hope you're having a good week.

My name is [Name] and I'm a [Year] at [University] majoring in [Major]. I see that you previously were involved with [Student Club/Sport] on campus and are now working in [Group] at [Bank].

I would appreciate the opportunity to briefly speak with you about your experience moving from [School] to [City/Bank]. I am free next Tuesday or Thursday after 2pm ET, but can work around whatever is convenient for you.

Best,
[Name]

### Scenario B: The "Cold" Non-Alumnus Email

**Subject:** Investment Banking Advice - [Name] ([Internship Experience])

Dear [Name],

I hope you are well.

My name is [Name] and I am a [Year] at [University] with recent internship experience at [Previous Firm]. I noticed you recently worked on the [Deal Name] transaction and wanted to ask for your perspective on [Specific Detail].

I know you are incredibly busy, but I would appreciate 10 minutes of your time. I am available [Time Option 1] or [Time Option 2] if either works.

Best,
[Name]

## Finding Email Addresses

Most banks follow standard formats:
- **Goldman Sachs:** first.last@gs.com
- **Morgan Stanley:** first.last@morganstanley.com
- **JP Morgan:** first.last@jpmorgan.com
- **Evercore:** first.last@evercore.com
- **Lazard:** first.last@lazard.com
- **Centerview:** flast@centerview.com (Note the difference!)

## Timing and Follow-Up Strategy

**When to Send:**
- **Best Days:** Tuesday, Wednesday, Thursday
- **Best Times:** 10am-2pm or 7:30pm-9pm
- **Avoid:** Monday mornings, Friday afternoons, 2am

**The Follow-Up Cadence:**

**Send 1:** Initial email.
**Wait:** 5-7 business days.
**Send 2 (The Bump):** Reply to original thread.
> "Hi [Name], just wanted to bump this in case it got buried. Would still love 10 minutes if you have a moment next week."

**Wait:** 5-7 business days.
**Send 3 (The Hail Mary):** Reply one last time.
> "Hi [Name], I'll try one last time—if you aren't the right person, is there someone else in your group you'd recommend?"

**Result:** If no reply after 3 attempts, move on. Don't email again for 6 months.

## Tracking Your Efforts

Create an Excel tracker with: Bank, Name, Role, Email, Date Sent, Date Followed Up, Status, Notes.

---

*Want 50+ more templates for every scenario? Get the [Networking & Cold Email Playbook](/playbooks/networking-cold-email-playbook).*

*Got the interview? Make sure you don't blow it on technicals. Check out the [IB Technical Interview Guide](/playbooks/ib-technical-guide).*
    `
    },
    {
        slug: "investment-banking-behavioral-interview-guide",
        title: "Mastering the Investment Banking Behavioral Interview",
        summary: "How to nail 'Walk me through your resume,' the 'Why' questions, and the Airport Test.",
        category: "Interviews",
        readTime: "12 min read",
        publishedAt: "2025-12-05",
        content: `
You can have a 4.0 GPA from Wharton and know how to build an LBO model in your sleep, but if you fail the "Airport Test," you will not get an offer.

Investment banking interviews are split 50/50 between technicals and behaviorals. Technicals are binary—you're either right or wrong. Behaviorals are subjective. They answer the only question that matters to a VP at 2 AM: *"Can I stand to be around this person for 100 hours a week?"*

## The Anchor: "Walk Me Through Your Resume"

This is the first question in 99% of interviews. You have exactly 2-3 minutes to set the narrative arc of your life.

**The 4-Step Structure (The "Spark" Method):**

**1. The Spark (The Beginning):** Start with where you're from and the initial trigger for your interest.
> "I grew up in Chicago and first got interested in finance when I started trading my own small portfolio in high school…"

**2. The Growing Interest (College):** Move to your university choice and relevant activities.
> "I chose [University] because of its strong business program. I joined the Investment Banking Club freshman year…"

**3. The Professional Pivot (Internships):** Walk through work experience. For each role, explain what you did and why you moved.
> "Last summer, I worked at [Firm]. While I enjoyed the client interaction, I realized I wanted larger, transaction-based deals, which led me to target investment banking…"

**4. The "Why You're Here" (The Close):** Bring it to the present.
> "That experience confirmed IB is the right path. I'm specifically excited about [Bank] because of your strength in [Industry] and the conversations I've had with [Alum Name]."

**Fatal Mistake:** Reciting your resume line-by-line. They have your resume. They want the *story*.

## The "Why" Questions

**"Why Investment Banking?"**

**Bad:** "I want to make money and exit to PE." (Too mercenary)
**Bad:** "I love finance and modeling." (You can do that in accounting)

**Good (The "High-Stakes" Angle):**
> "I want to work in investment banking because I thrive in high-pressure environments where my work has tangible impact. In my last internship, I loved the intensity of [Project], but I wanted to be closer to transaction execution. Banking offers the fastest way to build that skillset on live deals."

**"Why Our Firm?"**

**Bad:** "You're a top-tier bulge bracket with great culture." (Applies to everyone)

**Good (The "People + Deal" Combo):**
> "Two reasons. First, I've been following your work on [Specific Deal]—I found the structure really interesting. Second, the people. I've spoken with [Alum] and [Analyst], and they both emphasized how senior bankers here invest in junior development."

## The "Airport Test" (Likability)

The "Airport Test": *If I were stuck at O'Hare with this candidate for 4 hours during a flight delay, would I want to kill myself?*

**How to Pass:**
1. **Have Hobbies:** If asked "What do you do for fun?", don't say "Read the Wall Street Journal." Say "I'm training for a marathon" or "I'm trying to cook every recipe in this cookbook."
2. **Smile and Banter:** If they ask "How are you?", don't just say "Good." Say "Doing well, though I'm ready for this Chicago winter to be over. How's your week going?"
3. **Read the Room:** Mirror their energy. If serious, be professional. If laid back, loosen up slightly.

## Structured "War Stories" (The STAR Method)

Prepare 5 "Core Stories" that adapt to any behavioral question. Use **STAR**:

- **Situation (10%):** Set the scene. "During my internship at X…"
- **Task (10%):** What was the problem?
- **Action (70%):** What did **YOU** specifically do?
- **Result (10%):** The outcome.

**The "Greatest Weakness" Trap:**

**Don't say:** "I work too hard" (Humble-brag—they hate this)
**Don't say:** "I'm bad at math" (Disqualifying)

**Do say:** A real weakness you're actively fixing.
> "I sometimes struggle with delegating because I want everything perfect. In my last project, I realized this created bottlenecks, so I created a shared tracker to assign tasks. It's something I'm still improving."

## The Final 5 Minutes: Asking Good Questions

Saying "No" to "Do you have any questions?" is an automatic fail.

**Ask specific questions that show you were listening:**
- "You mentioned you worked on [Deal X]—how did the team handle the regulatory challenges?"
- "What's the one skill that separates a top-bucket analyst from an average one in this group?"

---

*Want 30+ example stories and frameworks for every behavioral question? Get the [Walk Me Through Your Resume Playbook](/playbooks/resume-story-playbook).*

*Ready to nail the technicals too? Check out the [IB Technical Interview Guide](/playbooks/ib-technical-guide).*
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

//# sourceMappingURL=%5Broot-of-the-server%5D__2578e795._.js.map