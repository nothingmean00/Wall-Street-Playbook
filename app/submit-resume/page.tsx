"use client"

import { useState, Suspense, useMemo } from "react"
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
  Sparkles,
  Check
} from "lucide-react"
import { resumeServices } from "@/lib/data"
import { getSegmentPricing, type PricingTier } from "@/lib/stripe"
import { track } from "@vercel/analytics"
import Link from "next/link"

type ServiceType = "resume-review" | "resume-rewrite" | null

// Segment display names for UI
const SEGMENT_LABELS: Record<string, string> = {
  'pe': 'Private Equity',
  'private-equity': 'Private Equity',
  'hf': 'Hedge Fund',
  'hedge-fund': 'Hedge Fund',
  'vc': 'Venture Capital',
  'venture-capital': 'Venture Capital',
  'mba-m7': 'MBA (M7)',
  'ib': 'Investment Banking',
  'investment-banking': 'Investment Banking',
  'non-target': 'Non-Target',
  'consulting-to-banking': 'Consulting to Banking',
  'mba': 'MBA',
  'equity-research': 'Equity Research',
  'fpa': 'FP&A',
  'credit': 'Credit',
  'credit-analyst': 'Credit Analyst',
  'financial-advisor': 'Financial Advisor',
  'fintech': 'Fintech',
  'asset-management': 'Asset Management'
}

// Segment options for dropdown
const SEGMENT_OPTIONS = [
  { value: '', label: 'Select your target role...' },
  { value: 'ib', label: 'Investment Banking' },
  { value: 'pe', label: 'Private Equity' },
  { value: 'hf', label: 'Hedge Fund' },
  { value: 'vc', label: 'Venture Capital' },
  { value: 'equity-research', label: 'Equity Research' },
  { value: 'asset-management', label: 'Asset Management' },
  { value: 'fpa', label: 'FP&A / Corporate Finance' },
  { value: 'credit', label: 'Credit / Lending' },
  { value: 'consulting-to-banking', label: 'Consulting → Banking' },
  { value: 'mba', label: 'MBA Recruiting' },
  { value: 'fintech', label: 'Fintech' },
  { value: 'other', label: 'Other Finance Role' }
]

// Segment-specific testimonials
const SEGMENT_TESTIMONIALS: Record<string, { quote: string; attribution: string }[]> = {
  'pe': [
    { quote: "The rewrite changed how I presented my deal experience. Went from no responses to multiple headhunter callbacks.", attribution: "BB Analyst, now at UMM PE" },
    { quote: "They understood exactly what PE firms look for. The positioning made all the difference.", attribution: "EB Analyst, Class of 2024" }
  ],
  'hf': [
    { quote: "They helped me reframe my banking experience around investment judgment. Started getting HF interviews within weeks.", attribution: "Former BB Coverage Analyst" },
    { quote: "The positioning framework for presenting my stock picks was exactly what I needed.", attribution: "Former Sell-Side Research Associate" }
  ],
  'ib': [
    { quote: "The feedback was specific and actionable. Caught weak bullets I didn't even notice.", attribution: "Target school junior" },
    { quote: "Finally started getting first rounds after months of silence.", attribution: "Non-target senior" }
  ],
  'non-target': [
    { quote: "I was getting ghosted on applications for months. After the rewrite, I finally started getting first rounds.", attribution: "State School Senior, Class of 2025" },
    { quote: "The reviewer understood exactly what non-targets face. Helped me position my Big 4 experience.", attribution: "Big 4 TAS Lateral" }
  ],
  'default': [
    { quote: "I wasn't getting responses on my applications. After the rewrite, I finally started getting interview requests.", attribution: "Non-target senior" },
    { quote: "The feedback was specific and actionable. Caught formatting issues and weak bullets I didn't even notice.", attribution: "Target school junior" }
  ]
}

// Urgency messages by segment
const URGENCY_MESSAGES: Record<string, string> = {
  'pe': 'PE on-cycle recruiting peaks July-September. Get your resume ready now.',
  'hf': 'Hedge fund recruiting is ongoing—strong resumes get noticed faster.',
  'ib': 'IB summer analyst apps open soon. Don\'t miss the window.',
  'non-target': 'Non-targets need every edge. A polished resume is your first impression.',
  'mba': 'MBA recruiting moves fast. Have your resume ready before networking events.',
  'default': 'A weak resume costs you interviews. Fix it before your next application.'
}

// What's included in each service
const serviceDeliverables = {
  "resume-review": [
    "Line-by-line written feedback",
    "Formatting & structure analysis",
    "Bullet point optimization tips",
    "Industry-specific keyword check",
    "One round of follow-up questions"
  ],
  "resume-rewrite": [
    "Complete resume rewrite (not just edits)",
    "Optimized for ATS systems",
    "Quantified achievement bullets",
    "Industry-standard formatting",
    "Two rounds of revisions included"
  ]
}

interface ResumeSubmissionFormProps {
  initialService: ServiceType
  segment: string | null
  pricing: {
    tier: PricingTier
    reviewPrice: number
    rewritePrice: number
  }
}

function ResumeSubmissionForm({ initialService, segment, pricing }: ResumeSubmissionFormProps) {
  const [selectedService, setSelectedService] = useState<ServiceType>(initialService || "resume-review")
  const [file, setFile] = useState<File | null>(null)
  const [dragActive, setDragActive] = useState(false)
  const [status, setStatus] = useState<"idle" | "uploading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")
  const [paymentUrl, setPaymentUrl] = useState<string | null>(null)
  
  // Simplified form - only essentials
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [selectedSegment, setSelectedSegment] = useState(segment || "")
  
  // Get testimonials for this segment
  const testimonials = SEGMENT_TESTIMONIALS[selectedSegment] || SEGMENT_TESTIMONIALS[segment || ''] || SEGMENT_TESTIMONIALS['default']
  const urgencyMessage = URGENCY_MESSAGES[selectedSegment] || URGENCY_MESSAGES[segment || ''] || URGENCY_MESSAGES['default']

  // Create dynamic services with segment-based pricing
  const dynamicServices = useMemo(() => {
    return resumeServices.map(service => ({
      ...service,
      price: service.id === 'resume-review' ? pricing.reviewPrice : pricing.rewritePrice
    }))
  }, [pricing])

  const selectedServiceData = dynamicServices.find(s => s.id === selectedService)
  const segmentLabel = segment ? (SEGMENT_LABELS[segment] || segment) : null

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
      uploadFormData.append("targetRole", SEGMENT_LABELS[selectedSegment] || selectedSegment)
      uploadFormData.append("targetFirms", "")
      uploadFormData.append("currentStatus", "")
      uploadFormData.append("experienceLevel", "")
      uploadFormData.append("timeline", "")
      uploadFormData.append("specificConcerns", "")
      uploadFormData.append("additionalNotes", "")
      // Use selected segment (from dropdown) or original URL segment
      const finalSegment = selectedSegment || segment
      if (finalSegment) {
        uploadFormData.append("segment", finalSegment)
      }

      const response = await fetch("/api/upload-resume", {
        method: "POST",
        body: uploadFormData,
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || "Upload failed")
      }

      const data = await response.json()
      
      // Track successful resume submission
      track("resume_submitted", { 
        service: selectedService, 
        segment: finalSegment || "none" 
      })
      
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
      {/* Hero Section with Background Image */}
      <section className="relative pt-28 pb-12 lg:pt-36 lg:pb-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/hero-wall-street.png" 
            alt="" 
            className="w-full h-full object-cover object-top"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-navy-deep/85" />
          {/* Gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/50 via-transparent to-navy-deep/90" />
          {/* Gold accent gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,_rgba(201,168,110,0.1),_transparent)]" />
        </div>
        
        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold mb-4">Resume Services</p>
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Get Your Resume <span className="text-gradient-gold">Interview-Ready</span>
          </h1>
          <p className="mt-5 text-base leading-relaxed text-white/80 max-w-2xl mx-auto">
            Expert feedback from reviewers who&apos;ve worked at Goldman, Morgan Stanley, and top PE shops.
            <span className="text-gold font-medium"> 48-hour turnaround. 100% money-back guarantee.</span>
          </p>
          
          {/* Urgency Banner */}
          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold/20 border border-gold/30 px-5 py-2.5 backdrop-blur-sm">
            <Clock className="h-4 w-4 text-gold" />
            <span className="text-sm text-gold font-medium">{urgencyMessage}</span>
          </div>
          
          {/* Price Anchoring - subtle */}
          <p className="mt-4 text-xs text-white/50">
            Most candidates spend $1,500+ on coaching. Get expert resume feedback for a fraction of that.
          </p>
        </div>
      </section>

      <section className="py-8 lg:py-12">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <form className="grid lg:grid-cols-5 gap-8" onSubmit={handleSubmit}>
            
            {/* Left Column - Form (3 cols) */}
            <div className="lg:col-span-3 space-y-6">
              
              {/* Service Selection - With Deliverables */}
              <div className="rounded-xl border border-border bg-white p-5 shadow-sm">
                <label className="block text-sm font-medium text-charcoal mb-3">
                  Select Service {segmentLabel && <span className="text-gold">for {segmentLabel}</span>}
                </label>
                <div className="space-y-3">
                  {dynamicServices.map((service) => {
                    const isSelected = selectedService === service.id
                    const deliverables = serviceDeliverables[service.id as keyof typeof serviceDeliverables]
                    return (
                      <button
                        key={service.id}
                        type="button"
                        onClick={() => setSelectedService(service.id as ServiceType)}
                        className={`relative w-full rounded-lg border-2 p-4 text-left transition-all ${
                          isSelected 
                            ? "border-gold bg-gold/5" 
                            : "border-border hover:border-gold/50"
                        }`}
                      >
                        {service.id === "resume-rewrite" && (
                          <span className="absolute -top-2 -right-2 flex items-center gap-0.5 rounded-full bg-gold px-2 py-0.5 text-[10px] font-semibold text-navy">
                            <Sparkles className="h-2.5 w-2.5" />
                            Most Value
                          </span>
                        )}
                        <div className="flex justify-between items-start">
                          <div>
                            <span className="font-semibold text-navy">{service.title}</span>
                            <p className="text-xs text-charcoal/60 mt-0.5">{service.turnaround}</p>
                          </div>
                          <span className="text-xl font-bold text-gold">${service.price}</span>
                        </div>
                        
                        {/* Deliverables - show when selected */}
                        {isSelected && deliverables && (
                          <div className="mt-3 pt-3 border-t border-border/50">
                            <p className="text-xs font-medium text-charcoal/70 mb-2">What's included:</p>
                            <ul className="space-y-1.5">
                              {deliverables.map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-xs text-charcoal/70">
                                  <Check className="h-3.5 w-3.5 text-green-600 mt-0.5 flex-shrink-0" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
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
                    <select
                      value={selectedSegment}
                      onChange={(e) => setSelectedSegment(e.target.value)}
                      className="block w-full rounded-lg border border-charcoal/20 px-4 py-3 text-sm focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold bg-white"
                    >
                      {SEGMENT_OPTIONS.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    <p className="mt-1 text-xs text-charcoal/50">
                      This helps us tailor feedback to your target role
                    </p>
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
              <div className="sticky top-24 space-y-4">
                {/* Order Summary Card */}
                <div className="rounded-xl border border-border bg-white p-6 shadow-sm">
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
                      <div className="flex justify-between items-center">
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

                  {/* Risk Reversal */}
                  <div className="mt-4 rounded-lg bg-green-50 border border-green-200 p-3">
                    <div className="flex items-start gap-2">
                      <Shield className="h-4 w-4 text-green-600 mt-0.5" />
                      <div>
                        <p className="text-xs font-semibold text-green-800">100% Money-Back Guarantee</p>
                        <p className="text-xs text-green-700 mt-0.5">
                          Not satisfied with your feedback? Full refund, no questions asked.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Trust Signals */}
                  <div className="mt-4 space-y-2.5 pt-4 border-t border-border">
                    <div className="flex items-center gap-2 text-xs text-charcoal/70">
                      <Clock className="h-4 w-4 text-gold flex-shrink-0" />
                      <span>Delivered within 48 hours or it's free</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-charcoal/70">
                      <BadgeCheck className="h-4 w-4 text-gold flex-shrink-0" />
                      <span>Reviewed by ex-bankers & recruiters</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-charcoal/70">
                      <Shield className="h-4 w-4 text-gold flex-shrink-0" />
                      <span>Secure payment via Stripe</span>
                    </div>
                  </div>
                </div>

                {/* Social Proof Stats */}
                <div className="rounded-xl border border-border bg-white p-4">
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div>
                      <p className="text-lg font-bold text-navy">500+</p>
                      <p className="text-[10px] text-charcoal/60">Resumes Reviewed</p>
                    </div>
                    <div>
                      <p className="text-lg font-bold text-navy">48hr</p>
                      <p className="text-[10px] text-charcoal/60">Avg Turnaround</p>
                    </div>
                    <div>
                      <p className="text-lg font-bold text-navy">100%</p>
                      <p className="text-[10px] text-charcoal/60">Money-Back</p>
                    </div>
                  </div>
                </div>

                {/* Segment-Specific Testimonial 1 */}
                <div className="rounded-xl border border-gold/30 bg-gold/5 p-5">
                  <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="h-4 w-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm text-charcoal/80 italic leading-relaxed">
                    &quot;{testimonials[0]?.quote}&quot;
                  </p>
                  <p className="mt-3 text-xs font-semibold text-navy">
                    — {testimonials[0]?.attribution}
                  </p>
                </div>

                {/* Segment-Specific Testimonial 2 */}
                {testimonials[1] && (
                  <div className="rounded-xl border border-border bg-white p-5">
                    <p className="text-sm text-charcoal/80 italic leading-relaxed">
                      &quot;{testimonials[1].quote}&quot;
                    </p>
                    <p className="mt-3 text-xs font-semibold text-navy">
                      — {testimonials[1].attribution}
                    </p>
                  </div>
                )}
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
  const segmentParam = searchParams.get("segment")
  
  const initialService: ServiceType = 
    serviceParam === "resume-review" || serviceParam === "resume-rewrite" 
      ? serviceParam 
      : null

  // Get segment-based pricing
  const pricing = useMemo(() => {
    const { tier, reviewPrice, rewritePrice } = getSegmentPricing(segmentParam)
    return { tier, reviewPrice, rewritePrice }
  }, [segmentParam])

  return (
    <ResumeSubmissionForm 
      initialService={initialService} 
      segment={segmentParam}
      pricing={pricing}
    />
  )
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
