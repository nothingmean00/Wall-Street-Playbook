"use client"

import { useState } from "react"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Upload, CheckCircle, Loader2, FileText } from "lucide-react"

export default function SubmitResumePage() {
  const [file, setFile] = useState<File | null>(null)
  const [dragActive, setDragActive] = useState(false)
  const [status, setStatus] = useState<"idle" | "uploading" | "success" | "error">("idle")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    targetRole: "",
    notes: "",
  })

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!file || !formData.email || !formData.name) {
      return
    }

    setStatus("uploading")

    try {
      // Upload file to Vercel Blob
      const uploadFormData = new FormData()
      uploadFormData.append("file", file)
      uploadFormData.append("name", formData.name)
      uploadFormData.append("email", formData.email)
      uploadFormData.append("targetRole", formData.targetRole)
      uploadFormData.append("notes", formData.notes)

      const response = await fetch("/api/upload-resume", {
        method: "POST",
        body: uploadFormData,
      })

      if (!response.ok) {
        throw new Error("Upload failed")
      }

      setStatus("success")
    } catch (error) {
      console.error("Upload error:", error)
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-grow bg-off-white py-20 lg:py-28">
          <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h1 className="mt-8 text-3xl font-bold tracking-tight text-navy">Resume Received!</h1>
            <p className="mt-4 text-lg text-charcoal/70">
              We've received your resume and will begin working on it shortly. You'll receive your feedback via email within the timeframe specified for your service.
            </p>
            <p className="mt-8 text-sm text-charcoal/60">
              Questions? Contact us at{" "}
              <a href="mailto:support@wallstreetplaybook.com" className="font-medium text-navy hover:text-gold">
                support@wallstreetplaybook.com
              </a>
            </p>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow bg-off-white py-16 lg:py-24">
        <div className="mx-auto max-w-2xl px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">Submit Your Resume</h1>
            <p className="mt-4 text-lg text-charcoal/70">
              Upload your current resume and we'll get started on your review or rewrite.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-12 space-y-8">
            {/* Contact Info */}
            <div className="rounded-xl border border-border bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-navy">Your Information</h2>
              
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
                <div className="sm:col-span-2">
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
                <div className="sm:col-span-2">
                  <label htmlFor="targetRole" className="block text-sm font-medium text-charcoal">
                    Target Role/Industry
                  </label>
                  <input
                    type="text"
                    id="targetRole"
                    value={formData.targetRole}
                    onChange={(e) => setFormData({ ...formData, targetRole: e.target.value })}
                    className="mt-2 block w-full rounded-lg border border-charcoal/20 px-4 py-3 text-sm focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                    placeholder="e.g., Investment Banking Analyst, Private Equity Associate"
                  />
                </div>
              </div>
            </div>

            {/* File Upload */}
            <div className="rounded-xl border border-border bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-navy">Upload Resume</h2>
              
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
                    <button
                      type="button"
                      onClick={() => setFile(null)}
                      className="mt-2 text-sm text-charcoal/60 hover:text-red-600"
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

            {/* Notes */}
            <div className="rounded-xl border border-border bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-navy">Additional Notes</h2>
              <textarea
                id="notes"
                rows={4}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="mt-4 block w-full resize-none rounded-lg border border-charcoal/20 px-4 py-3 text-sm focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                placeholder="Any specific concerns, target firms, or areas you'd like us to focus on..."
              />
            </div>

            {status === "error" && (
              <p className="text-sm text-red-600 text-center">
                Something went wrong. Please try again or email us directly at support@wallstreetplaybook.com
              </p>
            )}

            <button
              type="submit"
              disabled={!file || !formData.email || !formData.name || status === "uploading"}
              className="w-full rounded-lg bg-navy py-4 text-base font-semibold text-white transition-colors hover:bg-gold hover:text-navy disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {status === "uploading" ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Uploading...
                </>
              ) : (
                "Submit Resume"
              )}
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  )
}

