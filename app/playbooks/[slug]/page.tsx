import { notFound } from "next/navigation"
import Link from "next/link"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { playbooks } from "@/lib/data"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Check, Shield, Download, RefreshCw, ArrowLeft, Lock, BookOpen } from "lucide-react"
import { BuyButton } from "@/components/buy-button"
import { PEPlaybookPreview } from "@/components/playbook-preview"
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

  return {
    title: playbook.title,
    description: playbook.longDescription,
    keywords: [
      playbook.title.toLowerCase(),
      "finance interview prep",
      "wall street recruiting",
      ...playbook.contents.slice(0, 3).map((c) => c.toLowerCase()),
    ],
    openGraph: {
      title: `${playbook.title} | Wall Street Playbook`,
      description: playbook.longDescription,
      url: `https://wallstreetplaybook.com/playbooks/${playbook.slug}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${playbook.title} | Wall Street Playbook`,
      description: playbook.longDescription,
    },
    alternates: {
      canonical: `https://wallstreetplaybook.com/playbooks/${playbook.slug}`,
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

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-navy py-16 lg:py-24">
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

                {/* Preview Section - PE Playbook */}
                {playbook.slug === 'pe-recruiting-playbook' && (
                  <div className="rounded-xl border border-border bg-white p-8 shadow-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <BookOpen className="h-5 w-5 text-gold" />
                      <h2 className="text-xl font-semibold text-navy">Look Inside</h2>
                    </div>
                    <div className="mt-2 h-1 w-10 bg-gold" />
                    <p className="mt-4 text-sm text-charcoal/60 mb-6">
                      Preview the first 6 pages. Click the expand icon for a larger view.
                    </p>
                    <PEPlaybookPreview />
                  </div>
                )}

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
              </div>

              {/* Sidebar - Purchase Card (Desktop) */}
              <div className="hidden lg:block lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  <div className="rounded-xl border border-border bg-white p-8 shadow-sm">
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
      <Footer />
    </div>
  )
}
