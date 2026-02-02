"use client"

import { useState, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { 
  Upload, 
  CheckCircle, 
  Loader2, 
  FileText, 
  ArrowRight, 
  ArrowLeft,
  Clock,
  BadgeCheck,
  Shield,
  Sparkles
} from "lucide-react"
import { resumeServices } from "@/lib/data"
import Link from "next/link"

type ServiceType = "resume-review" | "resume-rewrite" | null

function ResumeSubmissionForm({ initialService }: { initialService: ServiceType }) {
  const [selectedService, setSelectedService] = useState<ServiceType>(initialService || "resume-review")
  const [file, setFile] = useState<File | null>(null)
  const [dragActive, setDragActive] = useState(false)
  const [status, setStatus] = useState<"idle" | "uploading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")
  const [paymentUrl, setPaymentUrl] = useState<string | null>(null)
  
  // Simplified form - only essentials
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [targetRole, setTargetRole] = useState("")

  const selectedServiceData = resumeServices.find(s => s.id === selectedService)

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const droppedFile = e.dataTransfer.files[0]
      if (droppedFile.type === "application/pdf" || droppedFile.name.endsWith(".docx") || droppedFile.name.endsWith(".doc")) {
        setFile(droppedFile)
      }
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  const canSubmit = file && name && email && selectedService

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!file || !email || !name || !selectedService) {
      return
    }

    setStatus("uploading")
    setErrorMessage("")

    try {
      const uploadFormData = new FormData()
      uploadFormData.append("file", file)
      uploadFormData.append("name", name)
      uploadFormData.append("email", email)
      uploadFormData.append("phone", "")
      uploadFormData.append("serviceType", selectedService)
      uploadFormData.append("targetRole", targetRole)
      uploadFormData.append("targetFirms", "")
      uploadFormData.append("currentStatus", "")
      uploadFormData.append("experienceLevel", "")
      uploadFormData.append("timeline", "")
      uploadFormData.append("specificConcerns", "")
      uploadFormData.append("additionalNotes", "")

      const response = await fetch("/api/upload-resume", {
        method: "POST",
        body: uploadFormData,
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || "Upload failed")
      }

      const data = await response.json()
      
      if (data.paymentUrl) {
        setPaymentUrl(data.paymentUrl)
        setStatus("success")
        // Auto-redirect to Stripe checkout
        setTimeout(() => {
          window.location.href = data.paymentUrl
        }, 1500)
      } else {
        setStatus("success")
      }
    } catch (error) {
      console.error("Upload error:", error)
      setStatus("error")
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong")
    }
  }

  // Success State
  if (status === "success") {
    return (
      <section className="bg-off-white py-20 lg:py-28">
        <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <h1 className="mt-8 text-3xl font-bold tracking-tight text-navy">Resume Received!</h1>
          <p className="mt-4 text-lg text-charcoal/70">
            Thank you for choosing our {selectedServiceData?.title} service.
          </p>
          
          {paymentUrl && (
            <div className="mt-8 rounded-xl border-2 border-gold bg-gold/10 p-6">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Loader2 className="h-5 w-5 animate-spin text-gold" />
                <span className="font-semibold text-navy">Redirecting to secure payment...</span>
              </div>
              <a
                href={paymentUrl}
                className="inline-flex items-center gap-2 rounded-xl bg-gold px-8 py-4 text-base font-semibold text-navy transition-all hover:bg-navy hover:text-white"
              >
                Complete Payment - ${selectedServiceData?.price}
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          )}
          
          <p className="mt-8 text-sm text-charcoal/60">
            Questions? Contact us at{" "}
            <a href="mailto:support@wallstreetplaybook.com" className="font-medium text-navy hover:text-gold">
              support@wallstreetplaybook.com
            </a>
          </p>
        </div>
      </section>
    )
  }

  return (
    <>
      {/* Compact Header */}
      <section className="bg-navy py-8 lg:py-10">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Get Your Resume Reviewed
          </h1>
          <p className="mt-2 text-base text-white/70">
            Upload your resume and we'll provide expert feedback within 48 hours
          </p>
        </div>
      </section>

      <section className="py-8 lg:py-12">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <form className="grid lg:grid-cols-5 gap-8" onSubmit={handleSubmit}>
            
            {/* Left Column - Form (3 cols) */}
            <div className="lg:col-span-3 space-y-6">
              
              {/* Service Selection - Compact Toggle */}
              <div className="rounded-xl border border-border bg-white p-5 shadow-sm">
                <label className="block text-sm font-medium text-charcoal mb-3">
                  Select Service
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {resumeServices.map((service) => {
                    const isSelected = selectedService === service.id
                    return (
                      <button
                        key={service.id}
                        type="button"
                        onClick={() => setSelectedService(service.id as ServiceType)}
                        className={`relative flex flex-col rounded-lg border-2 p-4 text-left transition-all ${
                          isSelected 
                            ? "border-gold bg-gold/5" 
                            : "border-border hover:border-gold/50"
                        }`}
                      >
                        {service.id === "resume-rewrite" && (
                          <span className="absolute -top-2 -right-2 flex items-center gap-0.5 rounded-full bg-gold px-2 py-0.5 text-[10px] font-semibold text-navy">
                            <Sparkles className="h-2.5 w-2.5" />
                            Popular
                          </span>
                        )}
                        <span className="font-semibold text-navy text-sm">{service.title}</span>
                        <span className="text-lg font-bold text-gold mt-1">${service.price}</span>
                        <span className="text-xs text-charcoal/60 mt-0.5">{service.turnaround}</span>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Contact Info */}
              <div className="rounded-xl border border-border bg-white p-5 shadow-sm">
                <label className="block text-sm font-medium text-charcoal mb-3">
                  Your Information
                </label>
                <div className="space-y-4">
                  <div>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="block w-full rounded-lg border border-charcoal/20 px-4 py-3 text-sm focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                      placeholder="Full Name *"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="block w-full rounded-lg border border-charcoal/20 px-4 py-3 text-sm focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                      placeholder="Email Address *"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      value={targetRole}
                      onChange={(e) => setTargetRole(e.target.value)}
                      className="block w-full rounded-lg border border-charcoal/20 px-4 py-3 text-sm focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                      placeholder="Target Role (e.g., IB Analyst, PE Associate)"
                    />
                  </div>
                </div>
              </div>

              {/* File Upload */}
              <div className="rounded-xl border border-border bg-white p-5 shadow-sm">
                <label className="block text-sm font-medium text-charcoal mb-3">
                  Upload Resume *
                </label>
                <div
                  className={`flex flex-col items-center justify-center rounded-xl border-2 border-dashed p-6 transition-colors ${
                    dragActive ? "border-gold bg-gold/5" : "border-charcoal/20"
                  } ${file ? "border-green-500 bg-green-50" : ""}`}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                >
                  {file ? (
                    <>
                      <FileText className="h-8 w-8 text-green-600" />
                      <p className="mt-2 font-medium text-green-700 text-sm text-center break-all">{file.name}</p>
                      <button
                        type="button"
                        onClick={() => setFile(null)}
                        className="mt-2 text-xs text-charcoal/60 hover:text-red-600"
                      >
                        Remove
                      </button>
                    </>
                  ) : (
                    <>
                      <Upload className="h-8 w-8 text-charcoal/30" />
                      <p className="mt-2 text-sm text-charcoal/70 text-center">
                        <label className="cursor-pointer font-medium text-gold hover:underline">
                          Click to upload
                          <input
                            type="file"
                            accept=".pdf,.doc,.docx"
                            onChange={handleFileChange}
                            className="hidden"
                          />
                        </label>
                        <span className="hidden sm:inline"> or drag & drop</span>
                      </p>
                      <p className="mt-1 text-xs text-charcoal/50">PDF, DOC, DOCX (max 10MB)</p>
                    </>
                  )}
                </div>
              </div>

              {status === "error" && (
                <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-center">
                  <p className="text-sm text-red-600">
                    {errorMessage || "Something went wrong. Please try again."}
                  </p>
                </div>
              )}

              {/* Submit Button - Mobile */}
              <div className="lg:hidden">
                <button
                  type="submit"
                  disabled={!canSubmit || status === "uploading"}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gold px-8 py-4 text-base font-semibold text-navy transition-all hover:bg-navy hover:text-white disabled:opacity-50"
                >
                  {status === "uploading" ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      Continue to Payment - ${selectedServiceData?.price}
                      <ArrowRight className="h-5 w-5" />
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Right Column - Summary (2 cols) */}
            <div className="lg:col-span-2">
              <div className="sticky top-24 rounded-xl border border-border bg-white p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-navy">Order Summary</h2>
                
                <div className="mt-4 space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-charcoal/70">Service</span>
                    <span className="font-medium text-navy">{selectedServiceData?.title}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-charcoal/70">Turnaround</span>
                    <span className="font-medium text-navy">{selectedServiceData?.turnaround}</span>
                  </div>
                  <div className="border-t border-border pt-3">
                    <div className="flex justify-between">
                      <span className="font-semibold text-navy">Total</span>
                      <span className="text-2xl font-bold text-gold">${selectedServiceData?.price}</span>
                    </div>
                  </div>
                </div>

                {/* Submit Button - Desktop */}
                <div className="hidden lg:block mt-6">
                  <button
                    type="submit"
                    disabled={!canSubmit || status === "uploading"}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-gold px-8 py-4 text-base font-semibold text-navy transition-all hover:bg-navy hover:text-white disabled:opacity-50"
                  >
                    {status === "uploading" ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        Continue to Payment
                        <ArrowRight className="h-5 w-5" />
                      </>
                    )}
                  </button>
                </div>

                {/* Trust Signals */}
                <div className="mt-6 space-y-3 border-t border-border pt-6">
                  <div className="flex items-center gap-2 text-xs text-charcoal/70">
                    <Clock className="h-4 w-4 text-gold" />
                    <span>48-hour turnaround guaranteed</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-charcoal/70">
                    <BadgeCheck className="h-4 w-4 text-gold" />
                    <span>100% money-back guarantee</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-charcoal/70">
                    <Shield className="h-4 w-4 text-gold" />
                    <span>Secure payment via Stripe</span>
                  </div>
                </div>

                {/* Social Proof */}
                <div className="mt-6 rounded-lg bg-navy/5 p-4">
                  <p className="text-xs text-charcoal/70 italic">
                    "I was getting ghosted on applications. After the rewrite, I got callbacks from Evercore, Lazard, and Centerview within 2 weeks."
                  </p>
                  <p className="mt-2 text-xs font-medium text-navy">— Non-target senior, Class of 2025</p>
                </div>
              </div>
            </div>
          </form>

          {/* Back Link */}
          <div className="mt-8 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-charcoal/60 hover:text-navy"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

function FormWrapper() {
  const searchParams = useSearchParams()
  
  const serviceParam = searchParams.get("service")
  const initialService: ServiceType = 
    serviceParam === "resume-review" || serviceParam === "resume-rewrite" 
      ? serviceParam 
      : null

  return <ResumeSubmissionForm initialService={initialService} />
}

function LoadingState() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="flex items-center justify-center py-20">
          <Loader2 className="h-8 w-8 animate-spin text-gold" />
        </div>
      </div>
    </section>
  )
}

export default function SubmitResumePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow bg-off-white">
        <Suspense fallback={<LoadingState />}>
          <FormWrapper />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
