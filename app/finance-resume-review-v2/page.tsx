import type { Metadata } from "next"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import {
  HeroSection,
  AlertBanner,
  BeforeAfterSection,
  ServiceComparison,
  TrustSignals,
  FAQSection,
  FinalCTA,
  FeatureGrid,
} from "@/components/intent-pages"
import { CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Finance Resume Review Service | Investment Banking, PE, Hedge Funds",
  description:
    "Professional finance resume review by industry experts. Get detailed feedback on your investment banking, private equity, or hedge fund resume. Fast turnaround, money-back guarantee.",
  keywords: [
    "finance resume review",
    "investment banking resume review",
    "PE resume review",
    "hedge fund resume review",
    "banking resume feedback",
    "finance resume help",
  ],
  openGraph: {
    title: "Finance Resume Review Service | Wall Street Playbook",
    description:
      "Professional finance resume review by industry experts. Investment banking, PE, and hedge fund resumes. Fast turnaround.",
    url: "https://wallstreetplaybook.org/finance-resume-review",
  },
  alternates: {
    canonical: "https://wallstreetplaybook.org/finance-resume-review",
  },
}

// Data for the page
const whoItsFor = [
  { title: "Investment Banking Candidates", description: "Targeting analyst or associate roles at bulge brackets, elite boutiques, or middle-market banks" },
  { title: "Private Equity Recruiting", description: "Preparing for on-cycle or off-cycle PE recruiting with polished deal experience" },
  { title: "Hedge Fund Applicants", description: "Positioning your background for fundamental L/S, macro, or quant funds" },
  { title: "Career Changers", description: "Transitioning from consulting, Big 4, or other industries into finance" },
  { title: "Non-Target Students", description: "Competing against target school candidates with a stronger resume" },
  { title: "MBA Candidates", description: "Pre-MBA or post-MBA positioning for associate-level recruiting" },
]

const whatWeReview = [
  { title: "Format and structure compliance with industry standards", description: "" },
  { title: "Bullet point strength and quantification", description: "" },
  { title: "Experience positioning and narrative flow", description: "" },
  { title: "GPA and education presentation", description: "" },
  { title: "Skills and interests section optimization", description: "" },
  { title: "Deal/transaction descriptions (if applicable)", description: "" },
  { title: "Typos, formatting inconsistencies, and red flags", description: "" },
  { title: "Overall competitiveness for target roles", description: "" },
]

const beforeAfterItems = [
  {
    context: "Vague responsibility → Specific achievement with numbers",
    before: "Responsible for financial analysis and modeling",
    after: "Built 3-statement financial model for $75M revenue SaaS company, identifying 20% cost reduction opportunity",
  },
  {
    context: "'Helped' is weak → Active verb with deal context",
    before: "Helped with pitch book creation",
    after: "Developed 30-page management presentation for $150M sell-side M&A process, supporting successful transaction close",
  },
  {
    context: "No specifics → Quantified scope and responsibilities",
    before: "Worked on due diligence projects",
    after: "Led financial due diligence workstream for 3 acquisitions totaling $200M, analyzing revenue quality and working capital trends",
  },
]

const faqs = [
  {
    question: "Who reviews my resume?",
    answer: "Your resume is reviewed by professionals with direct finance recruiting experience—people who have screened resumes, conducted interviews, and made hiring decisions at top firms.",
  },
  {
    question: "How long does it take?",
    answer: "Resume Review is delivered within 3-5 business days. Resume Rewrite takes 5-7 business days. Need it faster? Contact us about rush options.",
  },
  {
    question: "What if I'm not satisfied?",
    answer: "We offer a 100% money-back guarantee. If you're not completely satisfied with the quality of feedback, we'll refund your payment in full.",
  },
  {
    question: "Can you review resumes for specific firms?",
    answer: "Yes. When you submit, you can specify target firms and we'll tailor feedback to what those specific banks/funds look for.",
  },
  {
    question: "Do you work with international candidates?",
    answer: "Absolutely. We work with candidates targeting US, UK, and other global finance roles. Resume conventions vary by region and we adjust accordingly.",
  },
  {
    question: "What's the difference between Review and Rewrite?",
    answer: "Review gives you detailed feedback and suggestions—you make the changes. Rewrite means we completely reconstruct your resume for you, delivering a polished final document.",
  },
]

export default function FinanceResumeReviewPageV2() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow pt-0">
        <HeroSection
          badge="Professional Service"
          title="Finance"
          titleHighlight="Resume Review"
          description="Your resume gets 30 seconds. Make every word count with expert feedback from people who've reviewed thousands of finance resumes."
          primaryCTA={{
            text: "Get Your Resume Reviewed — $197",
            href: "/submit-resume?service=resume-review",
          }}
          secondaryCTA={{
            text: "Full Rewrite — $497",
            href: "/submit-resume?service=resume-rewrite",
          }}
          turnaround="3-5 Day Turnaround"
        />

        <AlertBanner message="86% of finance resumes have critical errors that cause instant rejection. Most candidates don't know what they're doing wrong." />

        <FeatureGrid
          title="Who This Is For"
          features={whoItsFor}
          columns={2}
          variant="icons"
          background="cream"
        />

        <FeatureGrid
          title="What We Review"
          subtitle="Every resume review includes detailed feedback on:"
          features={whatWeReview}
          columns={2}
          variant="simple"
          background="white"
        />

        <BeforeAfterSection
          title="Before & After Examples"
          subtitle="See the kind of transformations our feedback enables."
          items={beforeAfterItems}
          variant="dark"
        />

        <ServiceComparison
          reviewFeatures={[
            "Line-by-line feedback on every section",
            "Specific rewrite suggestions",
            "Quantification opportunities identified",
            "Format and positioning assessment",
            "One round of follow-up questions",
          ]}
          rewriteFeatures={[
            "Full resume reconstruction",
            "Experience repositioning strategy",
            "Optimized bullet point writing",
            "Quantified impact statements",
            "Two revision rounds included",
            "Final PDF and Word delivery",
          ]}
        />

        <TrustSignals variant="light" />

        <FAQSection faqs={faqs} />

        <FinalCTA
          title="Stop Guessing. Get Expert Feedback."
          description="Your resume is the first impression. Make it count."
          primaryCTA={{
            text: "Get Resume Review — $197",
            href: "/submit-resume?service=resume-review",
          }}
          secondaryCTA={{
            text: "Full Rewrite — $497",
            href: "/submit-resume?service=resume-rewrite",
          }}
        />
      </main>
      <Footer />
    </div>
  )
}
