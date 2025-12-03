import type { Metadata } from "next"
import Link from "next/link"
import { CheckCircle, Download, Mail, ArrowRight } from "lucide-react"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

export const metadata: Metadata = {
  title: "Purchase Successful | Wall Street Playbook",
  description: "Thank you for your purchase. Your download is ready.",
}

export default function SuccessPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow bg-off-white py-20 lg:py-28">
        <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
          {/* Success Icon */}
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>

          {/* Heading */}
          <h1 className="mt-8 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Thank You for Your Purchase!
          </h1>
          
          <p className="mt-4 text-lg text-charcoal/70">
            Your order has been confirmed and your materials are on the way.
          </p>

          {/* What's Next */}
          <div className="mt-12 rounded-2xl border border-charcoal/10 bg-white p-8 text-left shadow-sm">
            <h2 className="text-lg font-semibold text-navy">What happens next?</h2>
            
            <ul className="mt-6 space-y-4">
              <li className="flex items-start gap-4">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-gold/10">
                  <Mail className="h-4 w-4 text-gold" />
                </div>
                <div>
                  <p className="font-medium text-charcoal">Check your email</p>
                  <p className="mt-1 text-sm text-charcoal/60">
                    We've sent a confirmation email with your download link. Check your spam folder if you don't see it.
                  </p>
                </div>
              </li>
              
              <li className="flex items-start gap-4">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-gold/10">
                  <Download className="h-4 w-4 text-gold" />
                </div>
                <div>
                  <p className="font-medium text-charcoal">Download your materials</p>
                  <p className="mt-1 text-sm text-charcoal/60">
                    Click the download link in your email to access your PDF. The link expires in 7 days.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Support */}
          <p className="mt-8 text-sm text-charcoal/60">
            Questions? Contact us at{" "}
            <a href="mailto:support@wallstreetplaybook.com" className="font-medium text-navy hover:text-gold">
              support@wallstreetplaybook.com
            </a>
          </p>

          {/* Continue browsing */}
          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/playbooks"
              className="flex items-center gap-2 rounded-lg bg-navy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-gold hover:text-navy"
            >
              Browse More Playbooks
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/blog"
              className="rounded-lg border border-charcoal/20 px-6 py-3 text-sm font-semibold text-charcoal transition-colors hover:border-gold hover:text-gold"
            >
              Read Free Articles
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

