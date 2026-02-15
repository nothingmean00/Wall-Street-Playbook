import type { Metadata } from "next"
import { Mail, Clock, Shield } from "lucide-react"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contact | Wall Street Playbook",
  description:
    "Get in touch with Wall Street Playbook. Questions about playbooks, resume services, or partnership opportunities.",
  keywords: [
    "contact wall street playbook",
    "finance recruiting help",
    "investment banking prep support",
  ],
  openGraph: {
    title: "Contact | Wall Street Playbook",
    description:
      "Get in touch with Wall Street Playbook for questions about playbooks, resume services, or partnerships.",
    url: "https://wallstreetplaybook.org/contact",
    images: [{ url: "https://wallstreetplaybook.org/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Wall Street Playbook",
    description: "Questions about playbooks, resume services, or partnerships? We respond within 24 hours.",
    images: ["https://wallstreetplaybook.org/og-image.jpg"],
  },
  alternates: {
    canonical: "https://wallstreetplaybook.org/contact",
  },
}

const contactFaqs = [
  {
    question: "How are playbooks delivered?",
    answer: "All playbooks are delivered as instant PDF downloads after purchase. You'll receive a secure download link immediately via email.",
  },
  {
    question: "What is the resume review turnaround time?",
    answer: "Resume reviews are completed in 3-5 business days. Full resume rewrites take 5-7 business days. Resume service clients receive priority support.",
  },
  {
    question: "What is your refund policy?",
    answer: "All products come with a full 30-day money-back guarantee. If you're not satisfied, email us and we'll refund you immediately — no questions asked.",
  },
]

export default function ContactPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: contactFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  return (
    <div className="min-h-screen bg-off-white">
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main>
        {/* Header */}
        <section className="bg-navy pt-28 pb-16 lg:pt-36 lg:pb-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">Get in Touch</h1>
              <p className="mt-4 text-lg leading-relaxed text-white/70">
                Questions about playbooks, resume services, or partnership opportunities. We respond to all inquiries
                within 24 hours.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Form */}
              <div className="rounded-2xl border border-charcoal/10 bg-white p-8 shadow-sm lg:p-10">
                <h2 className="text-xl font-semibold text-charcoal">Send a Message</h2>
                <p className="mt-2 text-sm text-charcoal/60">
                  Fill out the form below and we will get back to you promptly.
                </p>

                <div className="mt-8">
                  <ContactForm />
                </div>
              </div>

              {/* Info Cards */}
              <div className="space-y-6">
                <div className="rounded-2xl border border-charcoal/10 bg-white p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy">
                      <Mail className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-charcoal">Email Us Directly</h3>
                      <p className="mt-1 text-sm text-charcoal/60">For direct inquiries, reach us at:</p>
                      <a
                        href="mailto:support@wallstreetplaybook.org"
                        className="mt-2 inline-block text-sm font-medium text-navy hover:text-gold"
                      >
                        support@wallstreetplaybook.org
                      </a>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-charcoal/10 bg-white p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy">
                      <Clock className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-charcoal">Response Time</h3>
                      <p className="mt-1 text-sm text-charcoal/60">
                        We respond to all inquiries within 24 hours during business days. Resume service clients receive
                        priority support.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-charcoal/10 bg-white p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy">
                      <Shield className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-charcoal">Confidentiality</h3>
                      <p className="mt-1 text-sm text-charcoal/60">
                        All communications and resume materials are kept strictly confidential. We never share client
                        information with third parties.
                      </p>
                    </div>
                  </div>
                </div>

                {/* FAQ Link */}
                <div className="rounded-2xl border border-gold/30 bg-gold/5 p-6">
                  <h3 className="font-semibold text-charcoal">Common Questions</h3>
                  <ul className="mt-4 space-y-3 text-sm text-charcoal/70">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                      <span>
                        <strong className="text-charcoal">Playbook delivery:</strong> Instant PDF download after
                        purchase.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                      <span>
                        <strong className="text-charcoal">Resume turnaround:</strong> Review in 3-5 business days, rewrite in
                        5-7 business days.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                      <span>
                        <strong className="text-charcoal">Refund policy:</strong> Full money-back guarantee if not
                        satisfied.
                      </span>
                    </li>
                  </ul>
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
