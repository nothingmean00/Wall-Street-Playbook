"use client"

import { useState } from "react"
import { ArrowRight, Check, Loader2, Download, FileSpreadsheet } from "lucide-react"
import { track } from "@vercel/analytics"

interface LeadMagnetCaptureProps {
  magnetName: string
  magnetDescription: string
  buttonText?: string
  className?: string
}

export function LeadMagnetCapture({ 
  magnetName, 
  magnetDescription, 
  buttonText = "Get Free Template",
  className = "" 
}: LeadMagnetCaptureProps) {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email || !email.includes("@")) {
      setErrorMessage("Please enter a valid email")
      setStatus("error")
      return
    }

    setStatus("loading")
    setErrorMessage("")

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          email,
          source: `lead_magnet_${magnetName.toLowerCase().replace(/\s+/g, '_')}`
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to subscribe")
      }

      // Track successful lead magnet download
      track("lead_magnet_downloaded", { magnet: magnetName })
      
      setStatus("success")
      setEmail("")
    } catch (error) {
      setStatus("error")
      setErrorMessage("Something went wrong. Please try again.")
    }
  }

  if (status === "success") {
    return (
      <div className={`rounded-2xl bg-green-50 border-2 border-green-200 p-8 text-center ${className}`}>
        <div className="flex justify-center mb-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <Check className="h-8 w-8 text-green-600" />
          </div>
        </div>
        <h3 className="text-xl font-bold text-green-800">Check Your Email!</h3>
        <p className="mt-2 text-green-700">
          We've sent the {magnetName} to your inbox. Check your spam folder if you don't see it within a few minutes.
        </p>
        <p className="mt-4 text-sm text-green-600">
          You'll also receive our best PE recruiting insights (unsubscribe anytime).
        </p>
      </div>
    )
  }

  return (
    <div className={`rounded-2xl bg-gradient-to-br from-navy to-navy-deep p-8 ${className}`}>
      <div className="flex items-center gap-3 mb-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/20">
          <FileSpreadsheet className="h-6 w-6 text-gold" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">{magnetName}</h3>
          <p className="text-sm text-white/60">Free Download</p>
        </div>
      </div>
      
      <p className="text-white/80 mb-6">{magnetDescription}</p>
      
      <form onSubmit={handleSubmit}>
        <div className="space-y-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
            disabled={status === "loading"}
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full flex items-center justify-center gap-2 rounded-lg bg-gold px-6 py-3 font-semibold text-navy transition-colors hover:bg-white disabled:opacity-50"
          >
            {status === "loading" ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              <>
                <Download className="h-5 w-5" />
                {buttonText}
              </>
            )}
          </button>
        </div>
        {status === "error" && (
          <p className="mt-2 text-sm text-red-400">{errorMessage}</p>
        )}
        <p className="mt-4 text-xs text-white/40 text-center">
          We'll send the template + our best recruiting insights. Unsubscribe anytime.
        </p>
      </form>
    </div>
  )
}
