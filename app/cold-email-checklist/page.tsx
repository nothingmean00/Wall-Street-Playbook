import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { LeadMagnetCapture } from "@/components/lead-magnet-capture"
import { ArrowRight, CheckCircle, XCircle, Zap, Mail, BookOpen } from "lucide-react"

export const metadata: Metadata = {
  title: "Free: Cold Email Checklist for Investment Banking Networking",
  description:
    "Download the free 11-point cold email checklist used by candidates who land interviews at Goldman Sachs, Evercore, and top banks. Stop making the mistakes that get you blacklisted.",
  keywords: [
    "cold email checklist investment banking",
    "networking email checklist finance",
    "cold email template banking free",
    "investment banking networking checklist",
    "cold email mistakes banking",
    "how to cold email a banker",
    "free networking guide finance",
  ],
  openGraph: {
    title: "Free: Cold Email Checklist for Investment Banking Networking",
    description:
      "The 11-point checklist that separates emails that get responses from emails that get deleted. Free download.",
    url: "https://wallstreetplaybook.org/cold-email-checklist",
    images: [{ url: "https://wallstreetplaybook.org/og-recruiting.jpg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://wallstreetplaybook.org/cold-email-checklist",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://wallstreetplaybook.org/og-recruiting.jpg"],
  },
}

const checklistItems = [
  {
    checkpoint: "Using .edu email address",
    failureMode: "Personal Gmail screams amateur",
  },
  {
    checkpoint: "Subject line under 8 words",
    failureMode: "Long subjects get truncated on mobile",
  },
  {
    checkpoint: "Email under 125 words total",
    failureMode: "Phone scroll = instant delete",
  },
  {
    checkpoint: "Personalization beyond [Name] and [Firm]",
    failureMode: "Generic emails get mass-flagged",
  },
  {
    checkpoint: "Specific ask for 15–20 minute call",
    failureMode: "Vague asks get vague non-responses",
  },
  {
    checkpoint: "Resume attached as PDF",
    failureMode: "Missing resume = missing credibility signal",
  },
  {
    checkpoint: "Tone matches recipient seniority",
    failureMode: "Mr./Ms. to a 23-year-old analyst kills rapport",
  },
  {
    checkpoint: "No email tracking add-ins",
    failureMode: "Recipients see trackers and resent surveillance",
  },
  {
    checkpoint: "Sent Tue–Thu, 8–11 AM or 3–5 PM",
    failureMode: "Monday inbox = burial; Friday = forgotten",
  },
  {
    checkpoint: "Proofread for wrong firm/name/font",
    failureMode: "Copy-paste errors are automatic rejection",
  },
  {
    checkpoint: "Follow-up scheduled for Day 7",
    failureMode: "50% of responses come from follow-ups",
  },
]

const blacklistMistakes = [
  "Generic copy-paste blasts with inconsistent fonts",
  "Novel-length emails that require scrolling",
  "Asking for a job directly instead of an informational call",
  "Blowing up an entire firm — email only 1–3 people per firm",
  "Over-embellished language that sounds like a suck-up",
]

export default function ColdEmailChecklistPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-navy pt-28 pb-16 lg:pt-32 lg:pb-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <div className="grid gap-12 lg:grid-cols-2 items-center">
                <div>
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gold/10 px-4 py-2">
                    <Zap className="h-4 w-4 text-gold" />
                    <span className="text-sm font-medium text-gold">Free Download</span>
                  </div>
                  <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    The Cold Email Checklist for{" "}
                    <span className="text-gradient-gold">Wall Street Networking</span>
                  </h1>
                  <p className="mt-6 text-lg leading-relaxed text-white/70">
                    11 checkpoints to run before sending any cold email to a banker. Missing even
                    one can reduce your response rate significantly.
                  </p>
                  <div className="mt-6 space-y-3">
                    {[
                      "11-point pre-send checklist (print it out)",
                      "The 5 mistakes that get you blacklisted",
                      "Optimal send times backed by data",
                      "Tone calibration guide by seniority",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 text-gold flex-shrink-0" />
                        <span className="text-sm text-white/80">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <LeadMagnetCapture
                    magnetName="Cold Email Checklist"
                    magnetDescription="Get instant access to the 11-point cold email checklist used by candidates who land interviews at top banks. Run through it before every email you send."
                    buttonText="Get Free Checklist"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Full Checklist Preview */}
        <section className="bg-off-white py-16 lg:py-24">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-navy sm:text-3xl">
                The 11-Point Cold Email Checklist
              </h2>
              <div className="mt-2 mx-auto h-1 w-12 bg-gold" />
              <p className="mt-4 text-charcoal/60 max-w-lg mx-auto">
                Run through every checkpoint before hitting send. Each one is based on feedback
                from actual bankers on what makes them respond — or delete.
              </p>
            </div>

            <div className="space-y-4">
              {checklistItems.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 rounded-xl border border-border bg-white p-5 shadow-sm"
                >
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-gold/10 text-sm font-bold text-gold">
                    {idx + 1}
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-navy">{item.checkpoint}</p>
                    <p className="mt-1 text-sm text-charcoal/50">
                      <span className="text-red-500 font-medium">If you skip this:</span>{" "}
                      {item.failureMode}
                    </p>
                  </div>
                  <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-1" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Blacklist mistakes */}
        <section className="bg-navy py-16">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                5 Mistakes That Get You <span className="text-red-400">Blacklisted</span>
              </h2>
              <p className="mt-3 text-white/50 max-w-lg mx-auto text-sm">
                A WSO MD: &ldquo;Cold, brain dead copy-paste emails are the worst. Automatic bin.&rdquo;
              </p>
            </div>

            <div className="space-y-3">
              {blacklistMistakes.map((mistake, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 rounded-lg border border-red-500/20 bg-red-500/10 p-4"
                >
                  <XCircle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white/80">{mistake}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Upsell to full playbook */}
        <section className="bg-cream py-16 lg:py-24">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 mb-6">
              <BookOpen className="w-4 h-4 text-gold" />
              <span className="text-xs font-semibold uppercase tracking-widest text-gold">
                Go Deeper
              </span>
            </div>

            <h2 className="text-2xl font-bold text-navy sm:text-3xl">
              The Checklist Is Just the Beginning
            </h2>
            <p className="mt-4 text-charcoal/60 max-w-xl mx-auto">
              The full Networking & Cold Email Playbook gives you everything: 13 proven email
              templates by scenario, 30 informational interview questions, the warm lead
              manufacturing system, response rate data by channel, and segment-specific
              strategies for every candidate type.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 max-w-lg mx-auto text-left">
              {[
                "13 cold email templates (not just 5)",
                "30 informational interview questions",
                "Minute-by-minute call structure",
                "CRM tracker template",
                "Email formats for 13+ banks",
                "The 3-touch referral framework",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-charcoal/70">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/playbooks/networking-cold-email-playbook"
                className="inline-flex items-center gap-2 rounded-xl bg-gold px-8 py-4 text-base font-semibold text-navy transition-all hover:bg-navy hover:text-white"
              >
                <Mail className="h-5 w-5" />
                Get the Full Playbook — $47
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <p className="mt-4 text-xs text-charcoal/40">
              47 pages. 13 templates. 30 questions. Instant PDF download. 30-day money-back guarantee.
            </p>
          </div>
        </section>

        {/* Related resources */}
        <section className="bg-white py-12">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <h3 className="text-lg font-bold text-navy mb-6 text-center">Related Resources</h3>
            <div className="grid gap-4 sm:grid-cols-3">
              <Link
                href="/cold-email-templates-investment-banking"
                className="rounded-lg border border-border p-4 hover:border-gold/40 transition-colors"
              >
                <p className="text-sm font-semibold text-navy">Cold Email Templates</p>
                <p className="mt-1 text-xs text-charcoal/50">Preview the 5-sentence framework</p>
              </Link>
              <Link
                href="/informational-interview-questions-banking"
                className="rounded-lg border border-border p-4 hover:border-gold/40 transition-colors"
              >
                <p className="text-sm font-semibold text-navy">Interview Questions</p>
                <p className="mt-1 text-xs text-charcoal/50">30 questions that impress bankers</p>
              </Link>
              <Link
                href="/blog/how-finance-jobs-are-actually-filled-2026"
                className="rounded-lg border border-border p-4 hover:border-gold/40 transition-colors"
              >
                <p className="text-sm font-semibold text-navy">How Jobs Are Filled</p>
                <p className="mt-1 text-xs text-charcoal/50">The data on referrals vs. applications</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
