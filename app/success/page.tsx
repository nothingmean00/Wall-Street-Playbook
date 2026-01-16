"use client"

import Link from "next/link"
import { CheckCircle, Download, Mail, ArrowRight, Clock, FileText } from "lucide-react"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { useSearchParams } from "next/navigation"
import { Suspense } from "react"

function SuccessContent() {
  const searchParams = useSearchParams()
  const type = searchParams.get("type")
  const isResumeService = type === "resume"

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow bg-off-white py-20 lg:py-28">
        <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>

          <h1 className="mt-8 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            {isResumeService ? "Payment Confirmed!" : "Thank You for Your Purchase!"}
          </h1>
          
          <p className="mt-4 text-lg text-charcoal/70">
            {isResumeService 
              ? "Your resume service order is confirmed. We'll start working on it right away."
              : "Your order has been confirmed and your materials are on the way."
            }
          </p>

          {isResumeService ? (
            <div className="mt-12 rounded-2xl border border-charcoal/10 bg-white p-8 text-left shadow-sm">
              <h2 className="text-lg font-semibold text-navy">What happens next?</h2>
              
              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-green-100">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-charcoal">Payment received</p>
                    <p className="mt-1 text-sm text-charcoal/60">
                      Your payment has been processed successfully.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-gold/10">
                    <FileText className="h-4 w-4 text-gold" />
                  </div>
                  <div>
                    <p className="font-medium text-charcoal">We are reviewing your resume</p>
                    <p className="mt-1 text-sm text-charcoal/60">
                      Our team will start working on your resume within 24 hours.
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-gold/10">
                    <Clock className="h-4 w-4 text-gold" />
                  </div>
                  <div>
                    <p className="font-medium text-charcoal">Delivery within turnaround time</p>
                    <p className="mt-1 text-sm text-charcoal/60">
                      You will receive your detailed feedback or rewritten resume via email.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-gold/10">
                    <Mail className="h-4 w-4 text-gold" />
                  </div>
                  <div>
                    <p className="font-medium text-charcoal">Check your email for confirmation</p>
                    <p className="mt-1 text-sm text-charcoal/60">
                      We have sent a confirmation email with all the details.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          ) : (
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
                      We have sent a confirmation email with your download link.
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
                      Click the download link in your email to access your PDF.
                  </p>
                </div>
              </li>
            </ul>
            </div>
          )}

          <div className="mt-8 rounded-xl border border-green-200 bg-green-50 p-4">
            <p className="text-sm text-green-800">
              <strong>100% Money-Back Guarantee:</strong> If you are not satisfied with the quality of our work, we will refund your payment in full.
            </p>
          </div>

          <p className="mt-8 text-sm text-charcoal/60">
            Questions? Contact us at{" "}
            <a href="mailto:support@wallstreetplaybook.com" className="font-medium text-navy hover:text-gold">
              support@wallstreetplaybook.com
            </a>
          </p>

          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href={isResumeService ? "/" : "/playbooks"}
              className="flex items-center gap-2 rounded-lg bg-navy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-gold hover:text-navy"
            >
              {isResumeService ? "Return Home" : "Browse More Playbooks"}
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

export default function SuccessPage() {
  return (
    <Suspense fallback={
      <div className="flex min-h-screen items-center justify-center">
        <div className="animate-spin h-8 w-8 border-4 border-gold border-t-transparent rounded-full" />
      </div>
    }>
      <SuccessContent />
    </Suspense>
  )
}
