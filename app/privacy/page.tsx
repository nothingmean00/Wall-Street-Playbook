import type { Metadata } from "next"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

export const metadata: Metadata = {
  title: "Privacy Policy | Wall Street Playbook",
  description: "Privacy policy for Wall Street Playbook. Learn how we collect, use, and protect your information.",
  openGraph: {
    title: "Privacy Policy | Wall Street Playbook",
    description: "How Wall Street Playbook collects, uses, and protects your information.",
    url: "https://wallstreetplaybook.org/privacy",
  },
  alternates: {
    canonical: "https://wallstreetplaybook.org/privacy",
  },
}

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-off-white">
      <Navbar />

      <main className="flex-grow pt-28 pb-16 lg:pt-32 lg:pb-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">Privacy Policy</h1>
          <p className="mt-4 text-sm text-charcoal/60">Last updated: February 2025</p>

          <div className="mt-12 space-y-10 text-charcoal/80">
            <section>
              <h2 className="text-xl font-semibold text-charcoal">Information We Collect</h2>
              <div className="mt-4 space-y-4 text-sm leading-relaxed">
                <p>
                  We collect information you provide directly to us, including your name, email address, and payment
                  information when you purchase our products or services.
                </p>
                <p>
                  For resume services, we collect the resume documents and related materials you submit for review or
                  rewriting.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-charcoal">How We Use Your Information</h2>
              <div className="mt-4 space-y-4 text-sm leading-relaxed">
                <p>We use the information we collect to:</p>
                <ul className="ml-6 list-disc space-y-2">
                  <li>Process your purchases and deliver digital products</li>
                  <li>Provide resume review and rewriting services</li>
                  <li>Send transactional emails related to your purchases</li>
                  <li>Respond to your inquiries and support requests</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-charcoal">Data Security</h2>
              <div className="mt-4 space-y-4 text-sm leading-relaxed">
                <p>
                  We implement appropriate security measures to protect your personal information. All payment
                  processing is handled through secure, PCI-compliant third-party processors.
                </p>
                <p>
                  Resume documents and personal materials are stored securely and are never shared with third parties
                  without your explicit consent.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-charcoal">Data Retention</h2>
              <div className="mt-4 space-y-4 text-sm leading-relaxed">
                <p>
                  We retain your personal information for as long as necessary to fulfill the purposes for which it was
                  collected. Resume documents submitted for our services are retained for 90 days after service
                  completion, then permanently deleted.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-charcoal">Your Rights</h2>
              <div className="mt-4 space-y-4 text-sm leading-relaxed">
                <p>You have the right to:</p>
                <ul className="ml-6 list-disc space-y-2">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt out of marketing communications</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-charcoal">Contact Us</h2>
              <div className="mt-4 text-sm leading-relaxed">
                <p>
                  If you have questions about this Privacy Policy, please contact us at{" "}
                  <a href="mailto:support@wallstreetplaybook.org" className="text-navy hover:text-gold">
                    support@wallstreetplaybook.org
                  </a>
                  .
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
