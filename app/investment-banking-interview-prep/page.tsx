import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { ArrowRight, CheckCircle, BookOpen, FileText, MessageSquare, Target } from "lucide-react"

export const metadata: Metadata = {
  title: "Investment Banking Interview Prep | Complete 2026 Guide",
  description:
    "The complete guide to investment banking interview preparation. Technical questions, behavioral frameworks, networking strategies, and everything you need to land IB offers in 2026.",
  keywords: [
    "investment banking interview prep",
    "IB interview preparation",
    "investment banking interview questions",
    "how to prepare for investment banking interviews",
    "investment banking technical questions",
    "investment banking behavioral questions",
  ],
  openGraph: {
    title: "Investment Banking Interview Prep | Complete 2026 Guide",
    description:
      "The complete guide to investment banking interview preparation. Technical questions, behavioral frameworks, and networking strategies.",
    url: "https://wallstreetplaybook.org/investment-banking-interview-prep",
  },
  alternates: {
    canonical: "https://wallstreetplaybook.org/investment-banking-interview-prep",
  },
}

const technicalCategories = [
  {
    title: "Accounting & Financial Statements",
    questions: [
      "Walk me through the three financial statements",
      "How do the three statements link together?",
      "What happens when depreciation increases by $10?",
      "Why is cash flow more important than net income?",
    ],
  },
  {
    title: "Valuation",
    questions: [
      "What are the three main valuation methodologies?",
      "Walk me through a DCF",
      "When would you use a DCF vs. comparable companies?",
      "What's the difference between enterprise value and equity value?",
    ],
  },
  {
    title: "M&A",
    questions: [
      "Walk me through a merger model",
      "What makes a deal accretive vs. dilutive?",
      "Why would a company acquire another company?",
      "What are synergies and how do you estimate them?",
    ],
  },
  {
    title: "LBO",
    questions: [
      "Walk me through an LBO",
      "What makes a good LBO candidate?",
      "How do you calculate IRR?",
      "What are the main value creation levers in an LBO?",
    ],
  },
]

const timeline = [
  { phase: "6-12 Months Before", task: "Learn accounting fundamentals, start networking" },
  { phase: "3-6 Months Before", task: "Master valuation, practice technicals daily" },
  { phase: "1-3 Months Before", task: "Mock interviews, refine your story" },
  { phase: "Final Weeks", task: "Review weak areas, rest before interviews" },
]

export default function InvestmentBankingInterviewPrepPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow pt-0">
        {/* Hero Section */}
        <section className="relative bg-navy-deep pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-navy-deep via-navy to-navy-deep" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,_rgba(201,168,110,0.15),_transparent)]" />
          </div>
          
          <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-gold mb-4">Complete Guide</p>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Investment Banking <span className="text-gradient-gold">Interview Prep</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/60 max-w-2xl mx-auto">
              Everything you need to prepare for investment banking interviews in 2026. Technical questions, 
              behavioral frameworks, networking strategies, and proven preparation methods.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/playbooks/ib-technical-guide"
                className="group flex items-center gap-2 rounded-xl bg-gold px-8 py-4 text-base font-semibold text-navy transition-all hover:bg-white"
              >
                Get the Technical Guide
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="#preparation-timeline"
                className="rounded-xl border-2 border-white/20 px-8 py-4 text-base font-semibold text-white transition-all hover:border-gold hover:text-gold"
              >
                See the Timeline
              </Link>
            </div>
          </div>
        </section>

        {/* What You'll Learn */}
        <section className="bg-cream py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">What Investment Banking Interviews Test</h2>
              <div className="mt-2 h-1 w-20 bg-gold" />
              
              <div className="mt-8 prose prose-lg max-w-none text-charcoal/80">
                <p>
                  Investment banking interviews are designed to assess three core areas: your <strong>technical knowledge</strong>, 
                  your <strong>fit with the team</strong>, and your <strong>genuine interest</strong> in the role. Understanding 
                  what interviewers are looking for is the first step to effective preparation.
                </p>
                
                <p>
                  Technical questions typically make up 50-70% of your interviews at the analyst level. These questions test 
                  your understanding of accounting, valuation, M&A, and LBO concepts. The remaining time focuses on behavioral 
                  questions and your &quot;story&quot; — why banking, why this firm, and why you.
                </p>
              </div>

              <div className="mt-12 grid gap-6 sm:grid-cols-2">
                {[
                  { icon: BookOpen, title: "Technical Knowledge", desc: "Accounting, valuation, M&A mechanics, LBO modeling" },
                  { icon: MessageSquare, title: "Behavioral Fit", desc: "Your story, motivations, teamwork examples" },
                  { icon: Target, title: "Industry Knowledge", desc: "Market awareness, deal experience, firm knowledge" },
                  { icon: FileText, title: "Communication", desc: "Clear, structured responses under pressure" },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 p-6 rounded-xl bg-white shadow-sm">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-navy">
                      <item.icon className="h-6 w-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy">{item.title}</h3>
                      <p className="mt-1 text-sm text-charcoal/60">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Technical Questions Section */}
        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">Core Technical Questions by Category</h2>
              <div className="mt-2 h-1 w-20 bg-gold" />
              
              <p className="mt-6 text-lg text-charcoal/70">
                These are the most frequently asked technical questions in investment banking interviews. 
                Master these categories and you&apos;ll be prepared for 80%+ of what you&apos;ll face.
              </p>

              <div className="mt-12 space-y-8">
                {technicalCategories.map((category) => (
                  <div key={category.title} className="rounded-2xl border border-border bg-off-white/50 p-8">
                    <h3 className="text-xl font-bold text-navy">{category.title}</h3>
                    <ul className="mt-4 space-y-3">
                      {category.questions.map((question, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 flex-shrink-0 text-gold mt-0.5" />
                          <span className="text-charcoal/80">{question}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-12 rounded-2xl bg-navy p-8 text-center">
                <h3 className="text-xl font-bold text-white">Want All 400+ Technical Questions?</h3>
                <p className="mt-2 text-white/60">
                  Our IB Technical Guide covers every question you&apos;ll face with detailed answers.
                </p>
                <Link
                  href="/playbooks/ib-technical-guide"
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gold px-6 py-3 text-sm font-semibold text-navy hover:bg-white transition-colors"
                >
                  Get the Full Guide — $127
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Preparation Timeline */}
        <section id="preparation-timeline" className="bg-cream py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">Investment Banking Interview Preparation Timeline</h2>
              <div className="mt-2 h-1 w-20 bg-gold" />
              
              <p className="mt-6 text-lg text-charcoal/70">
                Preparation takes 3-6 months for most candidates. Here&apos;s how to structure your time effectively.
              </p>

              <div className="mt-12 space-y-6">
                {timeline.map((item, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="flex flex-col items-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy text-gold font-bold">
                        {index + 1}
                      </div>
                      {index < timeline.length - 1 && <div className="w-px flex-1 bg-gold/30 my-2" />}
                    </div>
                    <div className="pb-8">
                      <h3 className="font-bold text-navy">{item.phase}</h3>
                      <p className="mt-1 text-charcoal/70">{item.task}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Behavioral Section */}
        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">Mastering Behavioral Questions</h2>
              <div className="mt-2 h-1 w-20 bg-gold" />
              
              <div className="mt-8 prose prose-lg max-w-none text-charcoal/80">
                <p>
                  &quot;Walk me through your resume&quot; is the first question in virtually every interview. Your answer 
                  sets the tone for everything that follows. A strong response takes 2-3 minutes and tells a 
                  coherent story about why investment banking is the logical next step in your career.
                </p>
                
                <h3>The Three-Part Story Structure</h3>
                <ol>
                  <li><strong>Origin:</strong> Where you started and what sparked your interest in finance</li>
                  <li><strong>Development:</strong> How you built relevant skills and confirmed your interest</li>
                  <li><strong>Destination:</strong> Why this specific role is the logical next step</li>
                </ol>
                
                <h3>Other Key Behavioral Questions</h3>
                <ul>
                  <li>Why investment banking?</li>
                  <li>Why our firm specifically?</li>
                  <li>Tell me about a time you worked on a team</li>
                  <li>What&apos;s your greatest weakness?</li>
                  <li>Where do you see yourself in 5 years?</li>
                </ul>
              </div>

              <div className="mt-12 rounded-2xl bg-gold/10 border border-gold/30 p-8">
                <h3 className="text-xl font-bold text-navy">Need Help With Your Story?</h3>
                <p className="mt-2 text-charcoal/70">
                  Our Resume Story Playbook includes 30+ example stories and frameworks for every background.
                </p>
                <Link
                  href="/playbooks/resume-story-playbook"
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-navy px-6 py-3 text-sm font-semibold text-white hover:bg-gold hover:text-navy transition-colors"
                >
                  Get the Story Playbook — $57
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Networking Section */}
        <section className="bg-navy py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">Networking Is Non-Negotiable</h2>
              <p className="mt-6 text-lg text-white/60">
                Especially from non-target schools, networking is how you get interviews. Plan for 50-100+ 
                outreach messages and 30-50 calls to build meaningful relationships.
              </p>
              
              <div className="mt-12 grid gap-6 sm:grid-cols-3 text-left">
                {[
                  { stat: "50-100+", label: "Outreach emails needed" },
                  { stat: "30-50", label: "Networking calls target" },
                  { stat: "5-7", label: "Days between follow-ups" },
                ].map((item) => (
                  <div key={item.label} className="rounded-xl bg-white/10 p-6 text-center">
                    <p className="text-3xl font-bold text-gold">{item.stat}</p>
                    <p className="mt-1 text-sm text-white/60">{item.label}</p>
                  </div>
                ))}
              </div>

              <Link
                href="/playbooks/networking-cold-email-playbook"
                className="mt-12 inline-flex items-center gap-2 rounded-xl bg-gold px-8 py-4 text-base font-semibold text-navy hover:bg-white transition-colors"
              >
                Get 50+ Email Templates — $67
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-cream py-20 lg:py-28">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-navy sm:text-4xl">Ready to Start Preparing?</h2>
            <p className="mt-4 text-lg text-charcoal/60">
              Get everything you need to land investment banking interviews and convert them to offers.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/playbooks"
                className="group flex items-center gap-2 rounded-xl bg-navy px-8 py-4 text-base font-semibold text-white hover:bg-gold hover:text-navy transition-colors"
              >
                Browse All Playbooks
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/blog"
                className="rounded-xl border-2 border-navy px-8 py-4 text-base font-semibold text-navy hover:bg-navy hover:text-white transition-colors"
              >
                Read Free Guides
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
