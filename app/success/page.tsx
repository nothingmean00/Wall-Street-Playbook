"use client"

import Link from "next/link"
import { CheckCircle, Download, Mail, ArrowRight, Clock, FileText, Loader2, AlertCircle } from "lucide-react"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { useSearchParams } from "next/navigation"
import { Suspense, useEffect, useState } from "react"

interface SessionData {
  success: boolean
  productId: string
  productName: string
  customerEmail: string
}

function SuccessContent() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get("session_id")
  const type = searchParams.get("type")
  const isResumeService = type === "resume"

  const [sessionData, setSessionData] = useState<SessionData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [downloading, setDownloading] = useState(false)

  useEffect(() => {
    async function verifySession() {
      if (!sessionId || isResumeService) {
        setLoading(false)
        return
      }

      try {
        const response = await fetch(`/api/verify-session?session_id=${sessionId}`)
        const data = await response.json()

        if (response.ok && data.success) {
          setSessionData(data)
        } else {
          setError(data.error || 'Failed to verify purchase')
        }
      } catch (err) {
        setError('Failed to verify purchase')
      } finally {
        setLoading(false)
      }
    }

    verifySession()
  }, [sessionId, isResumeService])

  const handleDownload = async () => {
    if (!sessionData || !sessionId) return

    setDownloading(true)
    try {
      const response = await fetch(`/api/download/${sessionData.productId}?session_id=${sessionId}`)
      
      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Download failed')
      }

      // Get the blob and create download
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `${sessionData.productName.replace(/\s+/g, '-')}.pdf`
      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(url)
      document.body.removeChild(a)
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Download failed. Please contact support.')
    } finally {
      setDownloading(false)
    }
  }

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
              : sessionData 
                ? `Your ${sessionData.productName} is ready to download.`
                : "Your order has been confirmed."
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
            <div className="mt-12 rounded-2xl border border-charcoal/10 bg-white p-8 shadow-sm">
              {loading ? (
                <div className="flex flex-col items-center py-8">
                  <Loader2 className="h-8 w-8 animate-spin text-gold" />
                  <p className="mt-4 text-charcoal/60">Verifying your purchase...</p>
                </div>
              ) : error ? (
                <div className="flex flex-col items-center py-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                    <AlertCircle className="h-6 w-6 text-red-600" />
                  </div>
                  <p className="mt-4 text-charcoal/70">{error}</p>
                  <p className="mt-2 text-sm text-charcoal/50">
                    Please contact support at{" "}
                    <a href="mailto:support@wallstreetplaybook.org" className="text-navy hover:text-gold">
                      support@wallstreetplaybook.org
                    </a>
                  </p>
                </div>
              ) : sessionData ? (
                <>
                  <h2 className="text-lg font-semibold text-navy text-left">Download Your Playbook</h2>
                  
                  <div className="mt-6 p-6 rounded-xl bg-gold/10 border border-gold/30">
                    <div className="flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gold">
                        <FileText className="h-7 w-7 text-navy" />
                      </div>
                      <div className="flex-1 text-left">
                        <p className="font-semibold text-navy">{sessionData.productName}</p>
                        <p className="text-sm text-charcoal/60">PDF • Ready to download</p>
                      </div>
                    </div>
                    
                    <button
                      onClick={handleDownload}
                      disabled={downloading}
                      className="mt-6 w-full flex items-center justify-center gap-2 rounded-xl bg-navy px-6 py-4 text-base font-semibold text-white transition-colors hover:bg-gold hover:text-navy disabled:opacity-50"
                    >
                      {downloading ? (
                        <>
                          <Loader2 className="h-5 w-5 animate-spin" />
                          Downloading...
                        </>
                      ) : (
                        <>
                          <Download className="h-5 w-5" />
                          Download PDF
                        </>
                      )}
                    </button>
                  </div>

                  <ul className="mt-8 space-y-3 text-left">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-charcoal/70">Download link never expires — come back anytime</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-charcoal/70">Free updates included — you'll get the latest version</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-charcoal/70">
                        Confirmation sent to <strong>{sessionData.customerEmail}</strong>
                      </span>
                    </li>
                  </ul>
                </>
              ) : (
                <div className="text-left">
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
            </div>
          )}

          {/* Cross-sell */}
          {sessionData && !isResumeService && (
            <div className="mt-8 rounded-2xl border border-gold/30 bg-gradient-to-br from-gold/5 to-navy/5 p-6 text-left">
              <p className="text-xs font-semibold uppercase tracking-wider text-gold mb-2">
                Recommended Next
              </p>
              {sessionData.productId === "finance-technical-interview-guide" ? (
                <>
                  <h3 className="text-lg font-bold text-navy">Networking & Cold Email Playbook</h3>
                  <p className="mt-1 text-sm text-charcoal/60">
                    You know the technicals — now get the meetings. 13 proven email templates, 30 informational interview questions, and the system that turns cold outreach into offers.
                  </p>
                  <Link
                    href="/playbooks/networking-cold-email-playbook"
                    className="mt-4 inline-flex items-center gap-2 rounded-lg bg-navy px-5 py-2.5 text-sm font-semibold text-white hover:bg-gold hover:text-navy transition-colors"
                  >
                    View Networking Playbook — $47
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </>
              ) : sessionData.productId === "pe-recruiting-playbook" ? (
                <>
                  <h3 className="text-lg font-bold text-navy">Networking & Cold Email Playbook</h3>
                  <p className="mt-1 text-sm text-charcoal/60">
                    PE recruiting is headhunter-driven, but networking still opens doors. Get the email templates, LinkedIn strategy, and informational interview system that builds your network.
                  </p>
                  <Link
                    href="/playbooks/networking-cold-email-playbook"
                    className="mt-4 inline-flex items-center gap-2 rounded-lg bg-navy px-5 py-2.5 text-sm font-semibold text-white hover:bg-gold hover:text-navy transition-colors"
                  >
                    View Networking Playbook — $47
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </>
              ) : sessionData.productId === "networking-cold-email-playbook" ? (
                <>
                  <h3 className="text-lg font-bold text-navy">Finance Technical Interview Guide</h3>
                  <p className="mt-1 text-sm text-charcoal/60">
                    You know how to get the meeting — now ace the interview. 88 pages of frequency-tagged technical questions with dual-format answers covering accounting, DCF, M&A, and LBOs.
                  </p>
                  <Link
                    href="/playbooks/finance-technical-interview-guide"
                    className="mt-4 inline-flex items-center gap-2 rounded-lg bg-navy px-5 py-2.5 text-sm font-semibold text-white hover:bg-gold hover:text-navy transition-colors"
                  >
                    View Technical Guide — $79
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </>
              ) : (
                <>
                  <h3 className="text-lg font-bold text-navy">Browse More Playbooks</h3>
                  <p className="mt-1 text-sm text-charcoal/60">
                    Pair your purchase with our other guides for complete interview prep coverage.
                  </p>
                  <Link
                    href="/playbooks"
                    className="mt-4 inline-flex items-center gap-2 rounded-lg bg-navy px-5 py-2.5 text-sm font-semibold text-white hover:bg-gold hover:text-navy transition-colors"
                  >
                    View All Playbooks
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </>
              )}
            </div>
          )}

          <div className="mt-8 rounded-xl border border-green-200 bg-green-50 p-4">
            <p className="text-sm text-green-800">
              <strong>100% Money-Back Guarantee:</strong> If you are not satisfied with the quality of our work, we will refund your payment in full.
            </p>
          </div>

          <p className="mt-8 text-sm text-charcoal/60">
            Questions? Contact us at{" "}
            <a href="mailto:support@wallstreetplaybook.org" className="font-medium text-navy hover:text-gold">
              support@wallstreetplaybook.org
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
