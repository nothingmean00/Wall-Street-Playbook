import { notFound } from "next/navigation"
import Link from "next/link"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { playbooks } from "@/lib/data"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Check, Shield, Download, RefreshCw, ArrowLeft, Lock, BookOpen, Users, Target, Star, Clock, BadgeCheck } from "lucide-react"
import { BuyButton } from "@/components/buy-button"
import { PEPlaybookPreview, IBTechnicalPreview, NetworkingPreview, BehavioralPreview } from "@/components/playbook-preview"
import { PageTracker } from "@/components/analytics/page-tracker"
import { ScrollTracker } from "@/components/analytics/scroll-tracker"
import { LIVE_PLAYBOOK_SLUGS, OG_IMAGES } from "@/lib/config"
import type { Metadata } from "next"

interface PlaybookPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return playbooks.map((playbook) => ({
    slug: playbook.slug,
  }))
}

export async function generateMetadata({ params }: PlaybookPageProps): Promise<Metadata> {
  const { slug } = await params
  const playbook = playbooks.find((p) => p.slug === slug)

  if (!playbook) {
    return { title: "Playbook Not Found" }
  }

  const isLive = LIVE_PLAYBOOK_SLUGS.includes(playbook.slug)

  const ogImageMap: Record<string, string> = {
    "finance-technical-interview-guide": OG_IMAGES.technicalGuide,
    "pe-recruiting-playbook": OG_IMAGES.pePlaybook,
    "networking-cold-email-playbook": OG_IMAGES.networkingPlaybook,
    "behavioral-interview-guide": OG_IMAGES.behavioralGuide,
  }
  const ogImage = ogImageMap[playbook.slug] || OG_IMAGES.playbooks

  return {
    title: playbook.title,
    description: playbook.longDescription,
    keywords: [
      playbook.title.toLowerCase(),
      "finance interview prep",
      "wall street recruiting",
      ...playbook.contents.slice(0, 3).map((c) => c.toLowerCase()),
    ],
    // Noindex upcoming playbooks so search engines don't index incomplete product pages
    ...(!isLive && {
      robots: {
        index: false,
        follow: true,
      },
    }),
    openGraph: {
      title: `${playbook.title} | Wall Street Playbook`,
      description: playbook.longDescription,
      url: `https://wallstreetplaybook.org/playbooks/${playbook.slug}`,
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${playbook.title} | Wall Street Playbook`,
      description: playbook.longDescription,
      images: [ogImage],
    },
    alternates: {
      canonical: `https://wallstreetplaybook.org/playbooks/${playbook.slug}`,
    },
  }
}

const faqs = [
  {
    question: "What format is the playbook delivered in?",
    answer:
      "All playbooks are delivered as downloadable PDF files. You will receive immediate access after purchase via email with a secure download link.",
  },
  {
    question: "How is this different from free resources online?",
    answer:
      "Free resources provide generic information. Our materials are structured frameworks built from patterns observed across successful placements at top firms. The specificity and organization accelerates your preparation significantly.",
  },
  {
    question: "Are updates included?",
    answer:
      "Yes. When we update a playbook based on new recruiting patterns or feedback, you receive the updated version at no additional cost. Your download link remains active.",
  },
  {
    question: "Can I share this with others?",
    answer:
      "Playbooks are licensed for individual use only. Sharing or distributing the materials is not permitted under our terms of use.",
  },
]

export default async function PlaybookPage({ params }: PlaybookPageProps) {
  const { slug } = await params
  const playbook = playbooks.find((p) => p.slug === slug)
  const relatedPlaybooks = playbooks.filter((p) => p.slug !== slug).slice(0, 2)

  if (!playbook) {
    notFound()
  }

  const isLive = LIVE_PLAYBOOK_SLUGS.includes(playbook.slug)

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: playbook.title,
    description: playbook.longDescription,
    url: `https://wallstreetplaybook.org/playbooks/${playbook.slug}`,
    brand: {
      "@type": "Brand",
      name: "Wall Street Playbook",
    },
    offers: {
      "@type": "Offer",
      price: playbook.price,
      priceCurrency: "USD",
      availability: isLive ? "https://schema.org/InStock" : "https://schema.org/PreOrder",
      url: `https://wallstreetplaybook.org/playbooks/${playbook.slug}`,
      seller: {
        "@type": "Organization",
        name: "Wall Street Playbook",
      },
      priceValidUntil: "2026-12-31",
      hasMerchantReturnPolicy: {
        "@type": "MerchantReturnPolicy",
        returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
        merchantReturnDays: 30,
        returnMethod: "https://schema.org/ReturnByMail",
        returnFees: "https://schema.org/FreeReturn",
      },
    },
    category: "Education > Finance > Interview Preparation",
    image: "https://wallstreetplaybook.org/og-image.jpg",
  }

  return (
    <div className="flex min-h-screen flex-col">
      <PageTracker event="playbook_page_viewed" properties={{ slug: playbook.slug, price: playbook.price, title: playbook.title }} />
      <ScrollTracker page={`playbooks/${playbook.slug}`} />
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-navy pt-28 pb-16 lg:pt-32 lg:pb-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              {/* Breadcrumb */}
              <nav className="mb-8">
                <Link
                  href="/playbooks"
                  className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-gold transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to Playbooks
                </Link>
              </nav>

              <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
                <div className="flex-1">
                  {/* Gold accent */}
                  <div className="mb-6 h-1 w-16 bg-gold" />

                  <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                    {playbook.title}
                  </h1>
                  <p className="mt-6 text-lg leading-relaxed text-white/70">{playbook.longDescription}</p>
                </div>

                {/* Mobile purchase card - shown on mobile, hidden on desktop */}
                <div className="lg:hidden">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                    <div className="flex items-baseline justify-between">
                      <div className="text-4xl font-bold text-white">${playbook.price}</div>
                      <span className="text-sm text-white/50">one-time</span>
                    </div>
                    <div className="mt-6">
                      <BuyButton 
                        productId={playbook.slug} 
                        price={playbook.price} 
                        label="Purchase Playbook"
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="bg-off-white py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-3">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Look Inside — Preview Section */}
                <div className="rounded-xl border border-border bg-white p-6 sm:p-8 shadow-sm">
                  <div className="flex items-center gap-2 mb-4">
                    <BookOpen className="h-5 w-5 text-gold" />
                    <h2 className="text-xl font-semibold text-navy">Look Inside</h2>
                  </div>
                  <div className="h-1 w-10 bg-gold mb-6" />

                  {playbook.slug === 'pe-recruiting-playbook' && <PEPlaybookPreview />}
                  {playbook.slug === 'finance-technical-interview-guide' && <IBTechnicalPreview />}
                  {playbook.slug === 'networking-cold-email-playbook' && <NetworkingPreview />}
                  {playbook.slug === 'behavioral-interview-guide' && <BehavioralPreview />}
                </div>

                {/* Who This Is For */}
                <div className="rounded-xl border-2 border-gold/30 bg-gradient-to-br from-gold/5 to-transparent p-8 shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="h-5 w-5 text-gold" />
                    <h2 className="text-xl font-semibold text-navy">Who This Is For</h2>
                  </div>
                  <div className="mt-2 h-1 w-10 bg-gold" />
                  
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    {(playbook.slug === 'finance-technical-interview-guide' ? [
                      "Undergrads and graduates prepping for IB interviews at bulge brackets and elite boutiques",
                      "Lateral candidates transitioning from Big 4, consulting, or corporate roles into banking",
                      "PE/HF candidates who need sharp technicals for buy-side interviews",
                      "Anyone tired of memorizing answers without understanding the logic behind them",
                    ] : playbook.slug === 'networking-cold-email-playbook' ? [
                      "Non-target students who need to build a Wall Street network from scratch",
                      "Anyone struggling to get responses from cold emails to bankers and investors",
                      "Lateral candidates who don't have a built-in alumni network in finance",
                      "MBA students looking to convert networking into interview invitations",
                    ] : playbook.slug === 'behavioral-interview-guide' ? [
                      "Candidates prepping for IB superdays who need to nail the behavioral half of interviews",
                      "Non-target students who must pass the 'airport test' to overcome pedigree bias",
                      "Lateral candidates and career switchers who need to reframe their story for Wall Street",
                      "PE, hedge fund, and buy-side candidates facing firm-specific behavioral patterns",
                    ] : [
                      "IB analysts preparing for on-cycle or off-cycle PE recruiting",
                      "Undergrads targeting direct-to-PE analyst programs",
                      "Consultants (MBB, Big 4) exploring PE paths",
                      "Anyone who wants insider knowledge, not generic advice",
                    ]).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
                          <Check className="h-3.5 w-3.5 text-green-600" />
                        </div>
                        <span className="text-sm text-charcoal/80">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* What's Inside */}
                <div className="rounded-xl border border-border bg-white p-8 shadow-sm">
                  <h2 className="text-xl font-semibold text-navy">What You Get</h2>
                  <div className="mt-2 h-1 w-10 bg-gold" />

                  <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                    {playbook.contents.map((item, index) => (
                      <li key={index} className="flex gap-3">
                        <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gold/10">
                          <Check className="h-3.5 w-3.5 text-gold" />
                        </div>
                        <span className="text-sm leading-relaxed text-charcoal/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Excerpt Preview */}
                <div className="rounded-xl border border-border bg-white p-8 shadow-sm">
                  <h2 className="text-xl font-semibold text-navy">Sample Excerpt</h2>
                  <div className="mt-2 h-1 w-10 bg-gold" />

                  <div className="mt-6 relative">
                    <div className="rounded-lg bg-navy/5 p-6 border-l-4 border-gold">
                      <p className="font-mono text-sm leading-relaxed text-charcoal/80 italic">"{playbook.excerpt}"</p>
                    </div>
                    {/* Fade overlay */}
                    <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent" />
                  </div>

                  <div className="mt-4 flex items-center gap-2 text-sm text-charcoal/50">
                    <Lock className="h-4 w-4" />
                    <span>Full content available after purchase</span>
                  </div>
                </div>

                {/* FAQ */}
                <div className="rounded-xl border border-border bg-white p-8 shadow-sm">
                  <h2 className="text-xl font-semibold text-navy">Frequently Asked Questions</h2>
                  <div className="mt-2 h-1 w-10 bg-gold" />

                  <Accordion type="single" collapsible className="mt-6">
                    {faqs.map((faq, index) => (
                      <AccordionItem key={index} value={`item-${index}`} className="border-border">
                        <AccordionTrigger className="text-left text-sm font-medium text-navy hover:text-gold hover:no-underline">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-sm leading-relaxed text-charcoal/70">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>

                {/* Social Proof */}
                <div className="rounded-xl border border-border bg-white p-8 shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="h-5 w-5 text-gold" />
                    <h2 className="text-xl font-semibold text-navy">What Readers Say</h2>
                  </div>
                  <div className="mt-2 h-1 w-10 bg-gold" />

                  <div className="mt-6 space-y-6">
                    {(playbook.slug === 'finance-technical-interview-guide' ? [
                      { quote: "The dual-format answers are a game-changer. I used the 30-second versions for quick HireVue rounds and the deep dives for Superdays. Ended up with offers from two BBs.", author: "Non-Target Senior → BB Analyst" },
                      { quote: "The frequency tags alone saved me 40+ hours of studying. I stopped wasting time on obscure topics and drilled the 'Always Asked' questions until I could answer in my sleep.", author: "Liberal Arts Major → Evercore SA" },
                      { quote: "I've used WSO, BIWS, and Rosenbaum's textbook. This guide is what actually made the concepts click—the red flag boxes showed me exactly where I was losing points without knowing it.", author: "Big 4 TAS → MM IB Lateral" },
                    ] : playbook.slug === 'networking-cold-email-playbook' ? [
                      { quote: "I sent 40+ cold emails before buying this and got zero replies. After using the templates, my response rate jumped to nearly 50%. Landed 8 informational calls in two weeks.", author: "Non-Target Junior → EB Internship" },
                      { quote: "The informational interview script is gold. I used to freeze up after 'tell me about your role.' Now I run 25-minute calls that consistently convert into referrals.", author: "State School Senior → BB SA Offer" },
                      { quote: "The LinkedIn X-Ray search technique alone was worth it. Found 30+ alumni connections I didn't know existed. Three of them referred me directly to their recruiting teams.", author: "Career Changer → MM IB Analyst" },
                    ] : playbook.slug === 'behavioral-interview-guide' ? [
                      { quote: "The classification matrix completely changed how I prepared. Instead of memorizing 50 stories, I built 7 that flexed across every dimension. Got through GS Superday with zero curveballs I couldn't handle.", author: "Non-Target Senior → GS IBD Analyst" },
                      { quote: "I bombed my first superday because I thought technicals were all that mattered. After using the CARL+ framework and firm-specific patterns, I nailed behavioral rounds at Evercore and Lazard.", author: "Target School Junior → EB SA Offer" },
                      { quote: "As a lateral from Big 4, my biggest weakness was the 'Why banking?' question. The reframing techniques in this guide turned my non-traditional background into a genuine differentiator.", author: "Big 4 Audit → MM IB Associate" },
                    ] : [
                      { quote: "The headhunter section alone was worth it. I had no idea CPI asks paper LBOs in their initial calls. This intel saved me from bombing my first impression.", author: "GS TMT Analyst, Class of 2024" },
                      { quote: "Finally, advice that isn't 'network and grind technicals.' The bank-to-fund pipeline data helped me target the right groups for lateral moves.", author: "MM IB Associate → UMM PE" },
                      { quote: "Coming from MBB, I thought I knew how to prep. The 'Why PE' framework completely changed my story. Got offers from two megafunds.", author: "Ex-McKinsey → Megafund Associate" },
                    ]).map((testimonial, idx) => (
                      <div key={idx} className="p-4 bg-navy/5 rounded-lg border-l-4 border-gold">
                        <div className="flex items-center gap-1 mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                          ))}
                        </div>
                        <p className="text-sm text-charcoal/80 italic">"{testimonial.quote}"</p>
                        <p className="mt-2 text-xs text-charcoal/50">— {testimonial.author}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Money-back guarantee */}
                <div className="rounded-xl border-2 border-green-200 bg-green-50 p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
                      <BadgeCheck className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-green-800">100% Money-Back Guarantee</h3>
                      <p className="mt-1 text-sm text-green-700">
                        {playbook.slug === 'finance-technical-interview-guide' 
                          ? "If this guide doesn't meaningfully improve your technical interview performance within 30 days, email us for a full refund. No questions asked. Thousands of candidates have used these frameworks to land offers at top firms."
                          : playbook.slug === 'networking-cold-email-playbook'
                          ? "If these templates and strategies don't meaningfully improve your networking results within 30 days, email us for a full refund. No questions asked. Candidates consistently report 3-5x improvements in response rates."
                          : playbook.slug === 'behavioral-interview-guide'
                          ? "If this guide doesn't meaningfully improve your behavioral interview performance within 30 days, email us for a full refund. No questions asked. The CARL+ framework and classification matrix have helped hundreds of candidates turn behavioral rounds from their weakest to their strongest."
                          : "If this playbook doesn't meaningfully improve your PE recruiting prep within 30 days, email us for a full refund. No questions asked. We've helped hundreds of candidates—we're confident this will help you too."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar - Purchase Card (Desktop) */}
              <div className="hidden lg:block lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  <div className="rounded-xl border border-border bg-white p-8 shadow-sm">
                    {/* Urgency badge */}
                    <div className="flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full bg-gold/10 w-fit">
                      <Clock className="h-3.5 w-3.5 text-gold" />
                      <span className="text-xs font-medium text-gold">
                        {playbook.slug === 'finance-technical-interview-guide' ? '2026 recruiting season is live' 
                          : playbook.slug === 'networking-cold-email-playbook' ? 'Start networking today'
                          : playbook.slug === 'behavioral-interview-guide' ? 'Superday season is here'
                          : '2026 on-cycle starts soon'}
                      </span>
                    </div>

                    <div className="mb-6 h-1 w-10 bg-gold" />

                    <div className="text-4xl font-bold text-navy">${playbook.price}</div>
                    <p className="mt-2 text-sm text-charcoal/60">One-time purchase</p>

                    <div className="mt-8">
                      <BuyButton 
                        productId={playbook.slug} 
                        price={playbook.price} 
                        label="Purchase Playbook"
                        className="w-full"
                      />
                    </div>

                    {/* Guarantee badge */}
                    <div className="mt-4 flex items-center gap-2 text-xs text-green-600 bg-green-50 px-3 py-2 rounded-lg">
                      <BadgeCheck className="h-4 w-4" />
                      <span>30-day money-back guarantee</span>
                    </div>

                    {/* Trust signals */}
                    <div className="mt-8 space-y-4 border-t border-border pt-6">
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gold/10">
                          <Download className="h-4 w-4 text-gold" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-navy">Instant Download</p>
                          <p className="text-xs text-charcoal/50">PDF delivered immediately</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gold/10">
                          <RefreshCw className="h-4 w-4 text-gold" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-navy">Lifetime Updates</p>
                          <p className="text-xs text-charcoal/50">All future versions included</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gold/10">
                          <Shield className="h-4 w-4 text-gold" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-navy">Secure Checkout</p>
                          <p className="text-xs text-charcoal/50">Powered by Stripe</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Related playbooks */}
                  {relatedPlaybooks.length > 0 && (
                    <div className="rounded-xl border border-border bg-white p-6 shadow-sm">
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-charcoal/50">
                        You May Also Need
                      </h3>
                      <div className="mt-4 space-y-4">
                        {relatedPlaybooks.map((related) => (
                          <Link
                            key={related.slug}
                            href={`/playbooks/${related.slug}`}
                            className="block rounded-lg border border-border p-4 transition-colors hover:border-gold/50"
                          >
                            <p className="text-sm font-medium text-navy">{related.title}</p>
                            <p className="mt-1 text-sm font-semibold text-gold">${related.price}</p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden border-t border-border bg-white/95 backdrop-blur-sm px-4 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-lg font-bold text-navy">${playbook.price}</p>
            <p className="text-xs text-charcoal/50">One-time purchase</p>
          </div>
          <BuyButton 
            productId={playbook.slug} 
            price={playbook.price} 
            label="Get Playbook"
            className="flex-1 max-w-[200px]"
          />
        </div>
      </div>

      {/* Spacer for sticky CTA on mobile */}
      <div className="h-20 lg:hidden" />

      <Footer />
    </div>
  )
}
