import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { BuyButton } from "@/components/buy-button"
import { EmailCapture } from "@/components/email-capture"
import { ScrollTracker } from "@/components/analytics/scroll-tracker"
import { playbooks } from "@/lib/data"
import {
  Check,
  ArrowRight,
  BookOpen,
  Star,
  Shield,
  Sparkles,
  TrendingUp,
  Target,
  Mic,
  Zap,
  FileText,
  Users,
  GraduationCap,
  Briefcase,
  Globe,
  Award,
  Download,
  RefreshCw,
  ChevronDown,
  X,
  CheckCircle2,
  HelpCircle,
  DollarSign,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Finance Recruiting Playbooks | Wall Street Playbook",
  description:
    "Premium guides for IB, PE, and hedge fund recruiting. Technical interview frameworks, PE recruiting intel, networking systems, and LBO modeling — built from real placement data.",
  openGraph: {
    title: "Finance Recruiting Playbooks | Wall Street Playbook",
    description:
      "Premium guides for IB, PE, and hedge fund recruiting. Technical interview frameworks, PE recruiting intel, networking systems, and LBO modeling — built from real placement data.",
    url: "https://wallstreetplaybook.org/playbooks",
  },
  alternates: {
    canonical: "https://wallstreetplaybook.org/playbooks",
  },
}

// Playbooks that are live and purchasable
const livePlaybookSlugs = ["finance-technical-interview-guide", "pe-recruiting-playbook", "networking-cold-email-playbook"]

// Upcoming playbooks — show only the most anticipated ones
const upcomingPlaybooks = [
  {
    title: "LBO Modeling Crash Course",
    description: "Build full LBO models from scratch. Includes Excel templates used in actual PE interviews.",
    icon: TrendingUp,
  },
  {
    title: "Stock Pitch Template & Examples",
    description: "The exact framework top hedge funds want, plus 5 fully-written example pitches.",
    icon: Target,
  },
  {
    title: "Walk Me Through Your Resume Playbook",
    description: "Transform your background into a compelling 2-minute narrative. 30+ real examples.",
    icon: Mic,
  },
  {
    title: "The Superday Survival Guide",
    description: "Hour-by-hour playbook for the 48 hours before, during, and after your Superday.",
    icon: Zap,
  },
]

// Candidate types for "Who This Is For"
const candidateTypes = [
  {
    icon: GraduationCap,
    title: "Undergraduates",
    description: "Target and non-target students preparing for IB/PE summer analyst recruiting.",
    recommended: "Technical Guide + Networking Playbook",
  },
  {
    icon: Briefcase,
    title: "Lateral Candidates",
    description: "Professionals switching from Big 4, consulting, corporate finance, or other industries.",
    recommended: "Technical Guide + Networking Playbook",
  },
  {
    icon: TrendingUp,
    title: "IB Analysts → PE",
    description: "First and second-year analysts preparing for on-cycle or off-cycle PE recruiting.",
    recommended: "PE Recruiting Playbook + Technical Guide",
  },
  {
    icon: Award,
    title: "MBA Candidates",
    description: "Pre-MBA and current MBA students targeting associate-level finance roles.",
    recommended: "Technical Guide + PE Playbook",
  },
  {
    icon: Globe,
    title: "International Candidates",
    description: "Candidates navigating US/UK finance recruiting from abroad or on sponsorship.",
    recommended: "Networking Playbook + Technical Guide",
  },
  {
    icon: Users,
    title: "Non-Target Students",
    description: "Candidates from non-target schools who need to build networks from scratch.",
    recommended: "Networking Playbook + Technical Guide",
  },
]

// FAQ items
const faqItems = [
  {
    question: "What format are the playbooks delivered in?",
    answer: "All playbooks are delivered as high-quality PDF files. You'll receive an instant download link immediately after purchase. The PDFs are optimized for both screen reading and printing.",
  },
  {
    question: "How are these different from free resources online?",
    answer: "Free forum advice and blog posts cover the basics, but they're fragmented, often outdated, and lack the tactical specificity needed to stand out. Our playbooks are structured systems built from real recruiting data across 30+ firms — with interview frequency tags, exact scripts, red-flag warnings, and frameworks you can apply immediately. They're designed to replace 50+ hours of scattered research with a focused, actionable system.",
  },
  {
    question: "Are these relevant for 2026 recruiting?",
    answer: "Yes. All playbooks are updated for the 2026 recruiting cycle. The PE Recruiting Playbook in particular includes 2026 timeline forecasts, updated headhunter data, and current compensation figures. When recruiting dynamics change, we update the guides — and all updates are free for life.",
  },
  {
    question: "I go to a non-target school. Will these help me?",
    answer: "Especially so. The Networking & Cold Email Playbook was built with non-target candidates in mind — 13 email templates, LinkedIn outreach strategies with real response rate data, and segment-specific strategies for non-target students. The Technical Guide levels the playing field on interviews. Non-target candidates consistently tell us these are the most impactful resources they used.",
  },
  {
    question: "What if the playbook doesn't help me?",
    answer: "Every playbook comes with a 30-day money-back guarantee, no questions asked. If you don't find it valuable, email us and we'll refund you immediately. We've processed very few refund requests — but the guarantee exists because we're confident in the material.",
  },
  {
    question: "Can I share my playbook with friends?",
    answer: "Playbooks are licensed for individual use only. We keep prices accessible specifically so each candidate can invest in their own copy. That said, if you're part of a university finance club looking for group pricing, reach out to us directly.",
  },
  {
    question: "Do you offer bundles or discounts?",
    answer: "Yes — purchase all three available playbooks together and save $44 compared to buying individually. The Complete Prep Bundle is $149 (regularly $193). As we release more playbooks, the bundle will expand with even larger discounts.",
  },
  {
    question: "How long does it take to get through a playbook?",
    answer: "Most candidates work through a playbook in 1-2 focused sessions (3-5 hours), then reference specific sections throughout their recruiting process. The Technical Guide is designed for ongoing review — you'll revisit chapters as you prepare for different types of interviews.",
  },
]

// Comparison data
const comparisonFeatures = [
  { feature: "Structured interview frameworks", wsp: true, forums: false, courses: true, selfStudy: false },
  { feature: "Interview frequency data", wsp: true, forums: false, courses: false, selfStudy: false },
  { feature: "Tested email templates & scripts", wsp: true, forums: false, courses: false, selfStudy: false },
  { feature: "Updated for 2026 recruiting cycle", wsp: true, forums: false, courses: false, selfStudy: false },
  { feature: "Under $80 per guide", wsp: true, forums: true, courses: false, selfStudy: true },
  { feature: "Lifetime updates included", wsp: true, forums: false, courses: false, selfStudy: false },
  { feature: "30-day money-back guarantee", wsp: true, forums: false, courses: true, selfStudy: false },
  { feature: "Actionable on day one", wsp: true, forums: false, courses: false, selfStudy: false },
]

export default function PlaybooksPage() {
  const livePlaybooks = playbooks.filter((p) => livePlaybookSlugs.includes(p.slug))

  // Calculate bundle pricing
  const totalIndividual = livePlaybooks.reduce((sum, p) => sum + p.price, 0)
  const bundlePrice = 149
  const bundleSavings = totalIndividual - bundlePrice

  return (
    <div className="flex min-h-screen flex-col">
      <ScrollTracker page="playbooks" />
      <Navbar />
      <main className="flex-grow">
        {/* Hero */}
        <section className="relative bg-navy pt-28 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,_rgba(201,168,110,0.15),_transparent)]" />
          </div>

          <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 mb-6">
              <BookOpen className="w-4 h-4 text-gold" />
              <span className="text-xs font-semibold uppercase tracking-widest text-gold">
                Premium Guides
              </span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Wall Street <span className="text-gradient-gold">Playbooks</span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-white/60 max-w-2xl mx-auto">
              Tactical guides built from real recruiting data — not recycled forum advice.
              Each playbook is a focused system designed to give you an unfair advantage
              in finance recruiting.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-white/50">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-gold" />
                30-day money-back guarantee
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-gold" />
                Instant PDF download
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-gold" />
                Lifetime updates included
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof Stats Bar */}
        <section className="bg-navy border-t border-white/10">
          <div className="mx-auto max-w-5xl px-6 lg:px-8 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              <div className="text-center">
                <p className="text-3xl font-bold text-gold">177+</p>
                <p className="mt-1 text-xs text-white/40 uppercase tracking-wider">Pages of Tactical Content</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-gold">30+</p>
                <p className="mt-1 text-xs text-white/40 uppercase tracking-wider">Firms&apos; Data Included</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-gold">56+</p>
                <p className="mt-1 text-xs text-white/40 uppercase tracking-wider">Templates &amp; Frameworks</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-gold">100%</p>
                <p className="mt-1 text-xs text-white/40 uppercase tracking-wider">Money-Back Guarantee</p>
              </div>
            </div>
          </div>
        </section>

        {/* Live Playbooks */}
        <section className="bg-off-white py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-2xl font-bold text-navy sm:text-3xl">Available Now</h2>
              <div className="mt-2 mx-auto h-1 w-12 bg-gold" />
            </div>

            <div className="mx-auto max-w-6xl grid gap-10 lg:grid-cols-3">
              {livePlaybooks.map((playbook, index) => {
                // Extract page count and chapter count from description
                const pageMatch = playbook.description.match(/(\d+)-page/)
                const chapterMatch = playbook.description.match(/(\d+)-chapter/)
                const pages = pageMatch ? pageMatch[1] : null
                const chapters = chapterMatch ? chapterMatch[1] : null

                return (
                  <Link
                    key={playbook.slug}
                    href={`/playbooks/${playbook.slug}`}
                    className="group flex flex-col"
                  >
                    {/* Book Cover */}
                    <div className="relative rounded-t-xl overflow-hidden shadow-[0_10px_40px_-10px_rgba(10,26,47,0.4)] group-hover:shadow-[0_20px_60px_-10px_rgba(10,26,47,0.5)] transition-all duration-500 group-hover:-translate-y-1">
                      {/* Spine effect */}
                      <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-black/20 via-black/5 to-transparent z-10" />

                      {/* Cover background */}
                      <div className="relative bg-gradient-to-br from-navy via-navy to-[#0d2240] px-7 py-8 min-h-[320px] flex flex-col">
                        {/* Subtle pattern overlay */}
                        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 0h20v20H0z\' fill=\'none\' stroke=\'%23C9A86E\' stroke-width=\'.5\'/%3E%3C/svg%3E")' }} />
                        
                        {/* Top accent line */}
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-gold/80 to-gold/40" />

                        {/* Badge */}
                        {index === 0 && (
                          <div className="mb-4">
                            <span className="inline-flex items-center gap-1 rounded-full bg-gold/20 border border-gold/30 px-2.5 py-1 text-[10px] font-bold text-gold uppercase tracking-wider">
                              <Sparkles className="h-3 w-3" />
                              Most Popular
                            </span>
                          </div>
                        )}

                        {/* Gold decorative line */}
                        <div className="h-0.5 w-10 bg-gold mb-5" />

                        {/* Title */}
                        <h3 className="font-playfair text-2xl font-bold text-white leading-tight tracking-tight">
                          {playbook.title}
                        </h3>

                        {/* Subtitle */}
                        <p className="mt-3 text-xs leading-relaxed text-white/50 max-w-[240px]">
                          {playbook.description.split('.')[0]}.
                        </p>

                        {/* Spacer */}
                        <div className="flex-1" />

                        {/* Bottom stats */}
                        <div className="flex items-center gap-4 mt-6">
                          {pages && (
                            <div className="flex items-center gap-1.5">
                              <FileText className="h-3.5 w-3.5 text-gold/60" />
                              <span className="text-[11px] font-medium text-white/40">{pages} pages</span>
                            </div>
                          )}
                          {chapters && (
                            <div className="flex items-center gap-1.5">
                              <BookOpen className="h-3.5 w-3.5 text-gold/60" />
                              <span className="text-[11px] font-medium text-white/40">{chapters} chapters</span>
                            </div>
                          )}
                        </div>

                        {/* WSP Logo Mark */}
                        <div className="absolute bottom-6 right-6 opacity-10">
                          <div className="h-16 w-16 rounded-full border-2 border-gold flex items-center justify-center">
                            <span className="text-gold text-xs font-bold tracking-widest">WSP</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Table of Contents Card */}
                    <div className="flex-1 rounded-b-xl border border-t-0 border-border bg-white px-6 py-6 shadow-sm group-hover:shadow-md transition-shadow">
                      {/* TOC Header */}
                      <div className="flex items-center justify-between mb-4">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-charcoal/30">Table of Contents</p>
                        <div className="flex items-center gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-3 w-3 fill-gold text-gold" />
                          ))}
                        </div>
                      </div>

                      {/* Chapter list */}
                      <div className="space-y-2.5">
                        {playbook.contents.slice(0, 5).map((item, idx) => {
                          // Parse chapter title from "Chapter X: Title — details"
                          const chapterLabelMatch = item.match(/^(Chapter \d+|Appendix[^:]*):\s*(.+?)(?:\s*—\s*(.+))?$/)
                          const label = chapterLabelMatch ? chapterLabelMatch[1] : null
                          const title = chapterLabelMatch ? chapterLabelMatch[2] : item
                          
                          return (
                            <div key={idx} className="flex items-start gap-3">
                              {label ? (
                                <span className="flex-shrink-0 text-[10px] font-bold text-gold/70 uppercase tracking-wider mt-0.5 w-6 text-right">
                                  {label.replace('Chapter ', '').replace('Appendix', '+')}
                                </span>
                              ) : (
                                <span className="flex-shrink-0 mt-0.5 w-6 text-right">
                                  <Check className="h-3.5 w-3.5 text-gold/50 inline" />
                                </span>
                              )}
                              <span className="text-xs text-charcoal/70 leading-relaxed">{title}</span>
                            </div>
                          )
                        })}
                        {playbook.contents.length > 5 && (
                          <div className="flex items-start gap-3">
                            <span className="flex-shrink-0 w-6" />
                            <span className="text-[11px] text-charcoal/35 italic">
                              + {playbook.contents.length - 5} more chapters
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Price & CTA */}
                      <div className="mt-6 pt-5 border-t border-border/60 flex items-center justify-between">
                        <div>
                          <span className="text-2xl font-bold text-navy">${playbook.price}</span>
                          <span className="text-xs text-charcoal/40 ml-1.5">one-time</span>
                        </div>
                        <span className="inline-flex items-center gap-2 text-sm font-semibold text-gold group-hover:gap-3 transition-all duration-300">
                          View Playbook
                          <ArrowRight className="h-4 w-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-14">
              <h2 className="text-2xl font-bold text-navy sm:text-3xl">How It Works</h2>
              <div className="mt-2 mx-auto h-1 w-12 bg-gold" />
              <p className="mt-4 text-charcoal/60 text-sm">From purchase to interview-ready in three steps.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-navy shadow-lg mb-5">
                  <Download className="h-7 w-7 text-gold" />
                </div>
                <div className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-gold/10 text-xs font-bold text-gold mb-3">1</div>
                <h3 className="text-lg font-bold text-navy">Instant Download</h3>
                <p className="mt-2 text-sm text-charcoal/60 leading-relaxed">
                  Purchase and receive your PDF immediately. No waiting, no drip content. The full playbook is yours in seconds.
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-navy shadow-lg mb-5">
                  <BookOpen className="h-7 w-7 text-gold" />
                </div>
                <div className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-gold/10 text-xs font-bold text-gold mb-3">2</div>
                <h3 className="text-lg font-bold text-navy">Study the System</h3>
                <p className="mt-2 text-sm text-charcoal/60 leading-relaxed">
                  Work through the structured chapters, internalize the frameworks, and use the templates to build your outreach and prep materials.
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-navy shadow-lg mb-5">
                  <Award className="h-7 w-7 text-gold" />
                </div>
                <div className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-gold/10 text-xs font-bold text-gold mb-3">3</div>
                <h3 className="text-lg font-bold text-navy">Land the Interview</h3>
                <p className="mt-2 text-sm text-charcoal/60 leading-relaxed">
                  Walk into your interviews with a preparation edge that most candidates simply don&apos;t have. Refer back to the playbook throughout your process.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Bundle Offer */}
        <section className="bg-off-white py-16 lg:py-20">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="relative rounded-2xl bg-navy overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,_rgba(201,168,110,0.2),_transparent)]" />

              <div className="relative p-8 sm:p-12">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 mb-4">
                    <DollarSign className="w-4 h-4 text-gold" />
                    <span className="text-xs font-semibold uppercase tracking-widest text-gold">
                      Best Value
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-white sm:text-3xl">
                    Complete Prep Bundle
                  </h2>
                  <p className="mt-3 text-white/60 text-sm max-w-lg mx-auto">
                    Get all three available playbooks together and save. Cover technicals, networking, and PE recruiting in one purchase.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
                  <div className="text-center">
                    <p className="text-sm text-white/40 line-through">${totalIndividual}</p>
                    <p className="text-4xl font-bold text-gold">${bundlePrice}</p>
                    <p className="text-sm text-white/60 mt-1">one-time payment</p>
                  </div>
                  <div className="hidden sm:block w-px h-16 bg-white/10" />
                  <div className="text-center sm:text-left">
                    <p className="text-lg font-bold text-green-400">Save ${bundleSavings}</p>
                    <p className="text-xs text-white/40 mt-1">vs. buying individually</p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-4 mb-8">
                  {livePlaybooks.map((playbook) => (
                    <div key={playbook.slug} className="flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 px-4 py-3">
                      <CheckCircle2 className="h-5 w-5 text-gold flex-shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-white">{playbook.title}</p>
                        <p className="text-xs text-white/40">${playbook.price} value</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <BuyButton
                    productId="available-bundle"
                    price={bundlePrice}
                    label="Get the Bundle"
                    className="rounded-xl bg-gold px-8 py-4 text-sm font-bold text-navy hover:bg-white transition-colors"
                  />
                  <div className="flex items-center gap-2 text-xs text-white/40">
                    <Shield className="h-3.5 w-3.5" />
                    30-day money-back guarantee
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who This Is For + How We Compare — combined compact section */}
        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="grid gap-12 lg:gap-16 lg:grid-cols-2">
              {/* Left: Who This Is For */}
              <div>
                <h2 className="text-2xl font-bold text-navy">Built For Every Candidate</h2>
                <div className="mt-2 h-1 w-12 bg-gold" />
                <div className="mt-8 space-y-4">
                  {candidateTypes.map((candidate) => (
                    <div key={candidate.title} className="flex items-start gap-4">
                      <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-navy/5">
                        <candidate.icon className="h-4.5 w-4.5 text-gold" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-navy">{candidate.title}</h3>
                        <p className="text-xs text-charcoal/50 mt-0.5">Recommended: <span className="text-gold font-medium">{candidate.recommended}</span></p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: How We Compare */}
              <div>
                <h2 className="text-2xl font-bold text-navy">Why Playbooks Win</h2>
                <div className="mt-2 h-1 w-12 bg-gold" />
                <div className="mt-8 rounded-xl border border-border bg-off-white/50 overflow-hidden">
                  {/* Table Header */}
                  <div className="grid grid-cols-3 bg-navy text-white">
                    <div className="p-3 text-[10px] font-semibold uppercase tracking-wider">Feature</div>
                    <div className="p-3 text-[10px] font-semibold uppercase tracking-wider text-center text-gold">WSP</div>
                    <div className="p-3 text-[10px] font-semibold uppercase tracking-wider text-center">Others</div>
                  </div>
                  {comparisonFeatures.map((row, idx) => (
                    <div
                      key={row.feature}
                      className={`grid grid-cols-3 ${idx % 2 === 0 ? "bg-white" : "bg-off-white/30"} ${idx < comparisonFeatures.length - 1 ? "border-b border-border/30" : ""}`}
                    >
                      <div className="px-3 py-2.5 text-xs text-charcoal/70">{row.feature}</div>
                      <div className="px-3 py-2.5 flex items-center justify-center">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                      </div>
                      <div className="px-3 py-2.5 flex items-center justify-center">
                        {row.forums || row.courses ? (
                          <span className="text-[10px] text-charcoal/30">Sometimes</span>
                        ) : (
                          <X className="h-4 w-4 text-charcoal/15" />
                        )}
                      </div>
                    </div>
                  ))}
                  <div className="grid grid-cols-3 border-t border-gold/20 bg-gold/5">
                    <div className="px-3 py-2.5 text-xs font-bold text-navy">Price</div>
                    <div className="px-3 py-2.5 text-center text-xs font-bold text-gold">$47–$79</div>
                    <div className="px-3 py-2.5 text-center text-xs text-charcoal/40">$0–$2,000+</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Playbooks + Email Capture */}
        <section className="bg-off-white py-16 lg:py-20">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-navy">Coming Soon</h2>
              <div className="mt-2 mx-auto h-1 w-12 bg-gold" />
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 mb-10">
              {upcomingPlaybooks.map((playbook) => (
                <div
                  key={playbook.title}
                  className="flex items-start gap-3 rounded-xl border border-border/60 bg-white p-4 transition-all hover:border-gold/30"
                >
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-navy/5">
                    <playbook.icon className="h-4 w-4 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-navy leading-tight">{playbook.title}</h3>
                    <p className="mt-1 text-[11px] text-charcoal/40 leading-relaxed">{playbook.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mx-auto max-w-md text-center">
              <p className="text-sm font-semibold text-navy">Get notified when new playbooks launch</p>
              <p className="text-xs text-charcoal/50 mt-1 mb-4">Plus weekly recruiting insights — no spam.</p>
              <EmailCapture variant="inline" />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-off-white py-16 lg:py-24">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-14">
              <h2 className="text-2xl font-bold text-navy sm:text-3xl">Frequently Asked Questions</h2>
              <div className="mt-2 mx-auto h-1 w-12 bg-gold" />
            </div>

            <div className="space-y-4">
              {faqItems.map((faq, idx) => (
                <details
                  key={idx}
                  className="group rounded-xl border border-border bg-white overflow-hidden"
                >
                  <summary className="flex cursor-pointer items-center justify-between p-5 text-sm font-semibold text-navy hover:text-gold transition-colors list-none [&::-webkit-details-marker]:hidden">
                    <span className="flex items-center gap-3">
                      <HelpCircle className="h-4 w-4 text-gold flex-shrink-0" />
                      {faq.question}
                    </span>
                    <ChevronDown className="h-4 w-4 text-charcoal/40 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" />
                  </summary>
                  <div className="px-5 pb-5 pt-0">
                    <p className="text-sm text-charcoal/60 leading-relaxed pl-7">
                      {faq.answer}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-navy py-16 lg:py-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Ready to Get an Unfair Advantage?
            </h2>
            <p className="mt-4 text-white/60 text-base max-w-xl mx-auto">
              Every week you wait is a week your competition is preparing. Start with the playbook
              that matches your immediate recruiting timeline.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
              <Link
                href="/playbooks/finance-technical-interview-guide"
                className="inline-flex items-center gap-2 rounded-xl bg-gold px-6 py-3.5 text-sm font-semibold text-navy hover:bg-white transition-colors"
              >
                Finance Technical Guide — $79
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/playbooks/pe-recruiting-playbook"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
              >
                PE Recruiting Playbook — $67
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/playbooks/networking-cold-email-playbook"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Networking Playbook — $47
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-6 flex items-center justify-center gap-6 text-xs text-white/30">
              <span className="flex items-center gap-1.5"><Shield className="h-3.5 w-3.5" /> 30-day guarantee</span>
              <span className="flex items-center gap-1.5"><Download className="h-3.5 w-3.5" /> Instant download</span>
              <span className="flex items-center gap-1.5"><RefreshCw className="h-3.5 w-3.5" /> Lifetime updates</span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
