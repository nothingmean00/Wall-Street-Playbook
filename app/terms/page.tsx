import type { Metadata } from "next"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

export const metadata: Metadata = {
  title: "Terms of Service | Wall Street Playbook",
  description:
    "Terms of service for Wall Street Playbook. Read our terms and conditions for using our products and services.",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-off-white">
      <Navbar />

      <main className="py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">Terms of Service</h1>
          <p className="mt-4 text-sm text-charcoal/60">Last updated: December 2024</p>

          <div className="mt-12 space-y-10 text-charcoal/80">
            <section>
              <h2 className="text-xl font-semibold text-charcoal">Agreement to Terms</h2>
              <div className="mt-4 text-sm leading-relaxed">
                <p>
                  By accessing or using Wall Street Playbook products and services, you agree to be bound by these Terms
                  of Service. If you do not agree to these terms, do not use our services.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-charcoal">Digital Products</h2>
              <div className="mt-4 space-y-4 text-sm leading-relaxed">
                <p>
                  Our playbooks and digital guides are sold for personal, non-commercial use only. Upon purchase, you
                  receive a non-transferable license to use the materials for your own career preparation.
                </p>
                <p>You may not:</p>
                <ul className="ml-6 list-disc space-y-2">
                  <li>Redistribute, resell, or share purchased materials</li>
                  <li>Reproduce content for commercial purposes</li>
                  <li>Claim authorship of any materials</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-charcoal">Resume Services</h2>
              <div className="mt-4 space-y-4 text-sm leading-relaxed">
                <p>
                  Resume review and rewriting services are provided as professional consulting. While we strive to
                  deliver high-quality work, we cannot guarantee specific outcomes such as interview invitations or job
                  offers.
                </p>
                <p>
                  Turnaround times are estimates and may vary based on current volume. We will communicate any delays
                  promptly.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-charcoal">Refund Policy</h2>
              <div className="mt-4 space-y-4 text-sm leading-relaxed">
                <p>
                  We offer a money-back guarantee on our products and services. If you are not satisfied with your
                  purchase, contact us within 30 days for a full refund.
                </p>
                <p>For resume services, refund requests must be made before we begin work on your materials.</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-charcoal">Intellectual Property</h2>
              <div className="mt-4 text-sm leading-relaxed">
                <p>
                  All content, materials, and intellectual property on Wall Street Playbook are owned by us or our
                  licensors. You may not use our trademarks, logos, or branding without written permission.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-charcoal">Limitation of Liability</h2>
              <div className="mt-4 text-sm leading-relaxed">
                <p>
                  Wall Street Playbook provides educational and career preparation materials. We are not responsible for
                  hiring decisions made by employers or the outcomes of your recruiting efforts. Our liability is
                  limited to the amount you paid for our products or services.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-charcoal">Changes to Terms</h2>
              <div className="mt-4 text-sm leading-relaxed">
                <p>
                  We reserve the right to modify these terms at any time. Continued use of our services after changes
                  constitutes acceptance of the updated terms.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-charcoal">Contact</h2>
              <div className="mt-4 text-sm leading-relaxed">
                <p>
                  Questions about these Terms of Service should be directed to{" "}
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
