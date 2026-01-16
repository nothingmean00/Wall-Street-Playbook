"use client"

import { useState } from "react"
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
  Sparkles
} from "lucide-react"
import { resumeServices } from "@/lib/data"
import Link from "next/link"

type ServiceType = "resume-review" | "resume-rewrite" | null

interface FormData {
  name: string
  email: string
  phone: string
  targetRole: string
  targetFirms: string
  currentStatus: string
  experienceLevel: string
  timeline: string
  specificConcerns: string
  additionalNotes: string
}

const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  targetRole: "",
  targetFirms: "",
  currentStatus: "",
  experienceLevel: "",
  timeline: "",
  specificConcerns: "",
  additionalNotes: "",
}

const currentStatusOptions = [
  "Currently employed in finance",
  "Currently employed (non-finance)",
  "Graduate student (MBA/Master's)",
  "Undergraduate student",
  "Recently graduated",
  "Career break/transitioning",
]

const experienceLevelOptions = [
  "0-1 years",
  "1-3 years",
  "3-5 years",
  "5-10 years",
  "10+ years",
]

const timelineOptions = [
  "Applying immediately (within 2 weeks)",
  "Applying soon (within 1 month)",
  "Recruiting season preparation (1-3 months)",
  "Long-term preparation (3+ months)",
  "Just exploring options",
]

function ResumeSubmissionForm({ initialService }: { initialService: ServiceType }) {
  const [step, setStep] = useState(initialService ? 2 : 1)
  const [selectedService, setSelectedService] = useState<ServiceType>(initialService)
  const [file, setFile] = useState<File | null>(null)
  const [dragActive, setDragActive] = useState(false)
  const [status, setStatus] = useState<"idle" | "uploading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [paymentUrl, setPaymentUrl] = useState<string | null>(null)

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

  const canProceedStep2 = formData.name && formData.email
  const canProceedStep3 = formData.targetRole && formData.currentStatus && formData.experienceLevel
  const canSubmit = file && canProceedStep2 && canProceedStep3

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!file || !formData.email || !formData.name || !selectedService) {
      return
    }

    setStatus("uploading")
    setErrorMessage("")

    try {
      const uploadFormData = new FormData()
      uploadFormData.append("file", file)
      uploadFormData.append("name", formData.name)
      uploadFormData.append("email", formData.email)
      uploadFormData.append("phone", formData.phone)
      uploadFormData.append("serviceType", selectedService)
      uploadFormData.append("targetRole", formData.targetRole)
      uploadFormData.append("targetFirms", formData.targetFirms)
      uploadFormData.append("currentStatus", formData.currentStatus)
      uploadFormData.append("experienceLevel", formData.experienceLevel)
      uploadFormData.append("timeline", formData.timeline)
      uploadFormData.append("specificConcerns", formData.specificConcerns)
      uploadFormData.append("additionalNotes", formData.additionalNotes)

      const response = await fetch("/api/upload-resume", {
        method: "POST",
        body: uploadFormData,
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || "Upload failed")
      }

      const data = await response.json()
      
      // Store payment URL and show success, then redirect to Stripe
      if (data.paymentUrl) {
        setPaymentUrl(data.paymentUrl)
        setStatus("success")
        // Auto-redirect to Stripe checkout after 2 seconds
        setTimeout(() => {
          window.location.href = data.paymentUrl
        }, 2000)
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
      <>
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
                <p className="text-sm text-charcoal/70 mb-4">
                  You'll be redirected to Stripe to complete your payment securely.
                </p>
                <a
                  href={paymentUrl}
                  className="inline-flex items-center gap-2 rounded-xl bg-gold px-8 py-4 text-base font-semibold text-navy transition-all hover:bg-navy hover:text-white"
                >
                  Complete Payment - ${selectedServiceData?.price}
                  <ArrowRight className="h-5 w-5" />
                </a>
                <p className="mt-4 text-xs text-charcoal/50">
                  If you're not redirected automatically, click the button above.
                </p>
              </div>
            )}

            {!paymentUrl && (
              <>
                <div className="mt-8 rounded-xl border border-gold/30 bg-gold/5 p-6">
                  <div className="flex items-center justify-center gap-2 text-gold">
                    <Clock className="h-5 w-5" />
                    <span className="font-semibold">Expected Turnaround: {selectedServiceData?.turnaround}</span>
                  </div>
                  <p className="mt-3 text-sm text-charcoal/70">
                    Check your email at <span className="font-medium text-navy">{formData.email}</span> for payment instructions.
                  </p>
                </div>
                <div className="mt-8 rounded-xl border border-border bg-white p-6">
                  <h3 className="font-semibold text-navy">What Happens Next?</h3>
                  <ol className="mt-4 space-y-3 text-left text-sm text-charcoal/70">
                    <li className="flex gap-3">
                      <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gold/10 text-xs font-semibold text-gold">1</span>
                      <span>Check your email for the payment link.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gold/10 text-xs font-semibold text-gold">2</span>
                      <span>Complete payment securely via Stripe.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gold/10 text-xs font-semibold text-gold">3</span>
                      <span>We'll start working on your {selectedService === "resume-review" ? "detailed feedback" : "resume rewrite"} within 24 hours.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gold/10 text-xs font-semibold text-gold">4</span>
                      <span>Expect delivery within {selectedServiceData?.turnaround}.</span>
                    </li>
                  </ol>
                </div>
              </>
            )}
            
            <p className="mt-8 text-sm text-charcoal/60">
              Questions? Contact us at{" "}
              <a href="mailto:support@wallstreetplaybook.com" className="font-medium text-navy hover:text-gold">
                support@wallstreetplaybook.com
              </a>
            </p>
            <Link
              href="/"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-gold hover:text-navy"
            >
              <ArrowLeft className="h-4 w-4" />
              Return to Home
            </Link>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      {/* Header */}
      <section className="bg-navy py-12 lg:py-16">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {step === 1 ? "Choose Your Service" : "Submit Your Resume"}
          </h1>
          <p className="mt-4 text-base text-white/70">
            {step === 1 
              ? "Select the service that best fits your needs" 
              : "Complete the form below and upload your current resume"}
          </p>
          
          {/* Progress Indicator */}
          <div className="mt-8 flex items-center justify-center gap-2">
            {[1, 2, 3, 4].map((s) => (
              <div key={s} className="flex items-center gap-2">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold transition-colors ${
                    s < step
                      ? "bg-gold text-navy"
                      : s === step
                      ? "bg-white text-navy"
                      : "bg-white/20 text-white/60"
                  }`}
                >
                  {s < step ? <CheckCircle className="h-5 w-5" /> : s}
                </div>
                {s < 4 && (
                  <div className={`h-0.5 w-8 ${s < step ? "bg-gold" : "bg-white/20"}`} />
                )}
              </div>
            ))}
          </div>
          <div className="mt-3 flex justify-center gap-6 text-xs text-white/60">
            <span className={step >= 1 ? "text-white" : ""}>Service</span>
            <span className={step >= 2 ? "text-white" : ""}>Info</span>
            <span className={step >= 3 ? "text-white" : ""}>Background</span>
            <span className={step >= 4 ? "text-white" : ""}>Upload</span>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          
          {/* Step 1: Service Selection */}
          {step === 1 && (
            <div className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                {resumeServices.map((service) => {
                  const isSelected = selectedService === service.id
                  const isRecommended = service.id === "resume-rewrite"
                  
                  return (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() => setSelectedService(service.id as ServiceType)}
                      className={`relative flex flex-col overflow-hidden rounded-xl border-2 bg-white p-6 text-left transition-all hover:shadow-lg ${
                        isSelected 
                          ? "border-gold shadow-lg ring-2 ring-gold/20" 
                          : "border-border hover:border-gold/50"
                      }`}
                    >
                      {isRecommended && (
                        <div className="absolute top-0 right-0 rounded-bl-lg bg-gold px-3 py-1">
                          <span className="flex items-center gap-1 text-xs font-semibold text-navy">
                            <Sparkles className="h-3 w-3" />
                            Recommended
                          </span>
                        </div>
                      )}
                      
                      <div className="flex items-start justify-between">
                        <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${isSelected ? "bg-gold" : "bg-navy"}`}>
                          <FileText className={`h-6 w-6 ${isSelected ? "text-navy" : "text-gold"}`} />
                        </div>
                        <div className={`h-5 w-5 rounded-full border-2 ${isSelected ? "border-gold bg-gold" : "border-charcoal/30"}`}>
                          {isSelected && <CheckCircle className="h-full w-full text-navy" />}
                        </div>
                      </div>
                      
                      <h3 className="mt-4 text-xl font-bold text-navy">{service.title}</h3>
                      
                      <div className="mt-2 flex items-center gap-3">
                        <span className="text-2xl font-bold text-gold">${service.price}</span>
                        <span className="flex items-center gap-1 text-sm text-charcoal/60">
                          <Clock className="h-4 w-4" />
                          {service.turnaround}
                        </span>
                      </div>
                      
                      <p className="mt-3 text-sm leading-relaxed text-charcoal/70">
                        {service.description}
                      </p>
                      
                      <div className="mt-4 border-t border-border pt-4">
                        <p className="text-xs font-semibold uppercase tracking-wider text-charcoal/50">What's Included</p>
                        <ul className="mt-2 space-y-1.5">
                          {service.includes.slice(0, 4).map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-charcoal/70">
                              <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" />
                              {item}
                            </li>
                          ))}
                          {service.includes.length > 4 && (
                            <li className="text-sm text-gold">+ {service.includes.length - 4} more</li>
                          )}
                        </ul>
                      </div>
                    </button>
                  )
                })}
              </div>
              
              <div className="flex justify-center pt-4">
                <button
                  type="button"
                  disabled={!selectedService}
                  onClick={() => setStep(2)}
                  className="flex items-center gap-2 rounded-lg bg-navy px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-gold hover:text-navy disabled:opacity-50"
                >
                  Continue
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
              
              <div className="flex items-center justify-center gap-2 text-sm text-charcoal/60">
                <BadgeCheck className="h-4 w-4 text-gold" />
                <span>100% Money-Back Guarantee</span>
              </div>
            </div>
          )}

          {/* Step 2: Contact Information */}
          {step === 2 && (
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setStep(3) }}>
              {/* Selected Service Summary */}
              {selectedServiceData && (
                <div className="flex items-center justify-between rounded-lg border border-gold/30 bg-gold/5 p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold">
                      <FileText className="h-5 w-5 text-navy" />
                    </div>
                    <div>
                      <p className="font-semibold text-navy">{selectedServiceData.title}</p>
                      <p className="text-sm text-charcoal/60">{selectedServiceData.turnaround}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-gold">${selectedServiceData.price}</p>
                    <button 
                      type="button" 
                      onClick={() => setStep(1)}
                      className="text-xs text-charcoal/60 hover:text-gold"
                    >
                      Change
                    </button>
                  </div>
                </div>
              )}

              <div className="rounded-xl border border-border bg-white p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-navy">Contact Information</h2>
                <p className="mt-1 text-sm text-charcoal/60">We'll use this to deliver your results and follow up with questions.</p>
              
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label htmlFor="name" className="block text-sm font-medium text-charcoal">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="mt-2 block w-full rounded-lg border border-charcoal/20 px-4 py-3 text-sm focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                    placeholder="John Smith"
                  />
                </div>
                  <div>
                  <label htmlFor="email" className="block text-sm font-medium text-charcoal">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="mt-2 block w-full rounded-lg border border-charcoal/20 px-4 py-3 text-sm focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                    placeholder="john@example.com"
                  />
                </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-charcoal">
                      Phone <span className="text-charcoal/40">(optional)</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="mt-2 block w-full rounded-lg border border-charcoal/20 px-4 py-3 text-sm focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="flex items-center gap-2 text-sm font-medium text-charcoal/70 hover:text-navy"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back
                </button>
                <button
                  type="submit"
                  disabled={!canProceedStep2}
                  className="flex items-center gap-2 rounded-lg bg-navy px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-gold hover:text-navy disabled:opacity-50"
                >
                  Continue
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </form>
          )}

          {/* Step 3: Background Questions */}
          {step === 3 && (
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setStep(4) }}>
              {/* Selected Service Summary */}
              {selectedServiceData && (
                <div className="flex items-center justify-between rounded-lg border border-gold/30 bg-gold/5 p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold">
                      <FileText className="h-5 w-5 text-navy" />
                    </div>
                    <div>
                      <p className="font-semibold text-navy">{selectedServiceData.title}</p>
                      <p className="text-sm text-charcoal/60">{selectedServiceData.turnaround}</p>
                    </div>
                  </div>
                  <p className="text-xl font-bold text-gold">${selectedServiceData.price}</p>
                </div>
              )}

              <div className="rounded-xl border border-border bg-white p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-navy">Your Background & Goals</h2>
                <p className="mt-1 text-sm text-charcoal/60">Help us understand your situation so we can tailor our feedback.</p>
                
                <div className="mt-6 space-y-6">
                  <div>
                  <label htmlFor="targetRole" className="block text-sm font-medium text-charcoal">
                      Target Role/Position <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="targetRole"
                      required
                    value={formData.targetRole}
                    onChange={(e) => setFormData({ ...formData, targetRole: e.target.value })}
                    className="mt-2 block w-full rounded-lg border border-charcoal/20 px-4 py-3 text-sm focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                    placeholder="e.g., Investment Banking Analyst, Private Equity Associate"
                  />
                </div>

                  <div>
                    <label htmlFor="targetFirms" className="block text-sm font-medium text-charcoal">
                      Target Firms <span className="text-charcoal/40">(optional)</span>
                    </label>
                    <input
                      type="text"
                      id="targetFirms"
                      value={formData.targetFirms}
                      onChange={(e) => setFormData({ ...formData, targetFirms: e.target.value })}
                      className="mt-2 block w-full rounded-lg border border-charcoal/20 px-4 py-3 text-sm focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                      placeholder="e.g., Goldman Sachs, Morgan Stanley, Evercore, KKR"
                    />
                  </div>

                  <div>
                    <label htmlFor="currentStatus" className="block text-sm font-medium text-charcoal">
                      Current Status <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="currentStatus"
                      required
                      value={formData.currentStatus}
                      onChange={(e) => setFormData({ ...formData, currentStatus: e.target.value })}
                      className="mt-2 block w-full rounded-lg border border-charcoal/20 px-4 py-3 text-sm focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                    >
                      <option value="">Select your current status</option>
                      {currentStatusOptions.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="experienceLevel" className="block text-sm font-medium text-charcoal">
                      Years of Experience <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="experienceLevel"
                      required
                      value={formData.experienceLevel}
                      onChange={(e) => setFormData({ ...formData, experienceLevel: e.target.value })}
                      className="mt-2 block w-full rounded-lg border border-charcoal/20 px-4 py-3 text-sm focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                    >
                      <option value="">Select experience level</option>
                      {experienceLevelOptions.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-charcoal">
                      Application Timeline <span className="text-charcoal/40">(optional)</span>
                    </label>
                    <select
                      id="timeline"
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="mt-2 block w-full rounded-lg border border-charcoal/20 px-4 py-3 text-sm focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                    >
                      <option value="">Select your timeline</option>
                      {timelineOptions.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="specificConcerns" className="block text-sm font-medium text-charcoal">
                      Specific Concerns About Your Resume <span className="text-charcoal/40">(optional)</span>
                    </label>
                    <textarea
                      id="specificConcerns"
                      rows={3}
                      value={formData.specificConcerns}
                      onChange={(e) => setFormData({ ...formData, specificConcerns: e.target.value })}
                      className="mt-2 block w-full resize-none rounded-lg border border-charcoal/20 px-4 py-3 text-sm focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                      placeholder="e.g., Worried my experience doesn't translate well, need help quantifying achievements, unsure about formatting..."
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="flex items-center gap-2 text-sm font-medium text-charcoal/70 hover:text-navy"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back
                </button>
                <button
                  type="submit"
                  disabled={!canProceedStep3}
                  className="flex items-center gap-2 rounded-lg bg-navy px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-gold hover:text-navy disabled:opacity-50"
                >
                  Continue
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </form>
          )}

          {/* Step 4: Upload Resume */}
          {step === 4 && (
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Selected Service Summary */}
              {selectedServiceData && (
                <div className="flex items-center justify-between rounded-lg border border-gold/30 bg-gold/5 p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold">
                      <FileText className="h-5 w-5 text-navy" />
                    </div>
                    <div>
                      <p className="font-semibold text-navy">{selectedServiceData.title}</p>
                      <p className="text-sm text-charcoal/60">{selectedServiceData.turnaround}</p>
                    </div>
                  </div>
                  <p className="text-xl font-bold text-gold">${selectedServiceData.price}</p>
            </div>
              )}

            {/* File Upload */}
            <div className="rounded-xl border border-border bg-white p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-navy">Upload Your Resume</h2>
                <p className="mt-1 text-sm text-charcoal/60">Upload your current resume for us to review or rewrite.</p>
              
              <div
                className={`mt-6 flex flex-col items-center justify-center rounded-xl border-2 border-dashed p-8 sm:p-12 transition-colors ${
                  dragActive ? "border-gold bg-gold/5" : "border-charcoal/20"
                } ${file ? "border-green-500 bg-green-50" : ""}`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                {file ? (
                  <>
                    <FileText className="h-10 w-10 sm:h-12 sm:w-12 text-green-600" />
                    <p className="mt-4 font-medium text-green-700 text-center text-sm sm:text-base break-all px-2">{file.name}</p>
                      <p className="mt-1 text-xs text-green-600">
                        {(file.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    <button
                      type="button"
                      onClick={() => setFile(null)}
                        className="mt-3 text-sm text-charcoal/60 hover:text-red-600"
                    >
                      Remove file
                    </button>
                  </>
                ) : (
                  <>
                    <Upload className="h-10 w-10 sm:h-12 sm:w-12 text-charcoal/30" />
                    <p className="mt-4 text-sm text-charcoal/70 text-center">
                      <span className="hidden sm:inline">Drag and drop your resume, or </span>
                      <label className="cursor-pointer font-medium text-gold hover:underline">
                        <span className="sm:hidden">Tap to upload resume</span>
                        <span className="hidden sm:inline">browse</span>
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                          className="hidden"
                        />
                      </label>
                    </p>
                    <p className="mt-2 text-xs text-charcoal/50">PDF, DOC, or DOCX (max 10MB)</p>
                  </>
                )}
              </div>
            </div>

              {/* Additional Notes */}
            <div className="rounded-xl border border-border bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-navy">Additional Notes</h2>
                <p className="mt-1 text-sm text-charcoal/60">Anything else you'd like us to know?</p>
              <textarea
                  id="additionalNotes"
                rows={4}
                  value={formData.additionalNotes}
                  onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                className="mt-4 block w-full resize-none rounded-lg border border-charcoal/20 px-4 py-3 text-sm focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                  placeholder="Any other context, deadlines, or specific requests..."
              />
            </div>

              {/* Order Summary */}
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
                  <div className="flex justify-between">
                    <span className="text-charcoal/70">Name</span>
                    <span className="font-medium text-navy">{formData.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-charcoal/70">Email</span>
                    <span className="font-medium text-navy">{formData.email}</span>
                  </div>
                  <div className="border-t border-border pt-3">
                    <div className="flex justify-between">
                      <span className="font-semibold text-navy">Total</span>
                      <span className="text-xl font-bold text-gold">${selectedServiceData?.price}</span>
                    </div>
                  </div>
                </div>
              </div>

            {status === "error" && (
                <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-center">
                  <p className="text-sm text-red-600">
                    {errorMessage || "Something went wrong. Please try again or email us directly at support@wallstreetplaybook.com"}
                  </p>
                </div>
              )}

              <div className="flex items-center justify-between pt-4">
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="flex items-center gap-2 text-sm font-medium text-charcoal/70 hover:text-navy"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back
                </button>
            <button
              type="submit"
                  disabled={!canSubmit || status === "uploading"}
                  className="flex items-center gap-2 rounded-lg bg-gold px-8 py-4 text-base font-semibold text-navy transition-colors hover:bg-navy hover:text-white disabled:opacity-50"
            >
              {status === "uploading" ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                      Submitting...
                </>
              ) : (
                    <>
                      Submit Resume
                      <ArrowRight className="h-5 w-5" />
                    </>
              )}
            </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-sm text-charcoal/60">
                <BadgeCheck className="h-4 w-4 text-gold" />
                <span>100% Money-Back Guarantee</span>
              </div>
          </form>
          )}
        </div>
      </section>
    </>
  )
}

function FormWrapper() {
  const searchParams = useSearchParams()
  
  // Get service from URL params
  const serviceParam = searchParams.get("service")
  const initialService: ServiceType = 
    serviceParam === "resume-review" || serviceParam === "resume-rewrite" 
      ? serviceParam 
      : null

  return <ResumeSubmissionForm initialService={initialService} />
}

function LoadingState() {
  return (
    <>
      <section className="bg-navy py-12 lg:py-16">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <div className="h-10 w-64 mx-auto bg-white/10 rounded animate-pulse" />
          <div className="mt-4 h-6 w-96 mx-auto bg-white/10 rounded animate-pulse" />
        </div>
      </section>
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="flex items-center justify-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-gold" />
          </div>
        </div>
      </section>
    </>
  )
}

export default function SubmitResumePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow bg-off-white">
        <FormWrapper />
      </main>
      <Footer />
    </div>
  )
}
