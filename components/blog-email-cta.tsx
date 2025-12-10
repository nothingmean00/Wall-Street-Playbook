"use client"

import { useState } from "react"
import { ArrowRight, Loader2, Check, FileText } from "lucide-react"

interface BlogEmailCTAProps {
  variant?: "inline" | "sidebar"
}

export function BlogEmailCTA({ variant = "inline" }: BlogEmailCTAProps) {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email || !email.includes("@")) {
      setStatus("error")
      return
    }

    setStatus("loading")

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "blog_cta" }),
      })

      if (!response.ok) throw new Error("Failed")

      setStatus("success")
    } catch {
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div className={`rounded-xl bg-green-50 border border-green-200 p-6 ${variant === "inline" ? "my-8" : ""}`}>
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
            <Check className="h-5 w-5 text-green-600" />
          </div>
          <div>
            <p className="font-semibold text-green-800">You're subscribed!</p>
            <p className="text-sm text-green-700">Check your inbox for a welcome email.</p>
          </div>
        </div>
      </div>
    )
  }

  if (variant === "sidebar") {
    return (
      <div className="rounded-xl bg-navy p-6 text-white">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gold/20 flex items-center justify-center">
            <FileText className="h-5 w-5 text-gold" />
          </div>
          <h3 className="font-semibold">Free Resources</h3>
        </div>
        <p className="text-sm text-white/70 mb-4">
          Get weekly recruiting tips, technical prep guides, and early access to new content.
        </p>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            className="w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2.5 text-sm text-white placeholder:text-white/40 focus:border-gold focus:outline-none"
            disabled={status === "loading"}
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full rounded-lg bg-gold px-4 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-white disabled:opacity-50"
          >
            {status === "loading" ? (
              <Loader2 className="h-4 w-4 animate-spin mx-auto" />
            ) : (
              "Subscribe"
            )}
          </button>
        </form>
        {status === "error" && (
          <p className="mt-2 text-xs text-red-400">Please enter a valid email.</p>
        )}
      </div>
    )
  }

  // Inline variant (for within blog content)
  return (
    <div className="my-10 rounded-xl bg-gradient-to-br from-navy to-charcoal p-8 text-white">
      <div className="flex flex-col sm:flex-row sm:items-center gap-6">
        <div className="flex-shrink-0">
          <div className="w-14 h-14 rounded-xl bg-gold/20 flex items-center justify-center">
            <FileText className="h-7 w-7 text-gold" />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold mb-1">Want More Recruiting Content?</h3>
          <p className="text-white/70 text-sm">
            Join 2,000+ candidates getting free technical prep tips, networking scripts, and interview frameworks.
          </p>
        </div>
      </div>
      
      <form onSubmit={handleSubmit} className="mt-6 flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-1 rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:border-gold focus:outline-none"
          disabled={status === "loading"}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="flex items-center justify-center gap-2 rounded-lg bg-gold px-6 py-3 font-semibold text-navy transition-colors hover:bg-white disabled:opacity-50 whitespace-nowrap"
        >
          {status === "loading" ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <>
              Subscribe Free
              <ArrowRight className="h-4 w-4" />
            </>
          )}
        </button>
      </form>
      
      {status === "error" && (
        <p className="mt-2 text-sm text-red-400">Please enter a valid email address.</p>
      )}
      
      <p className="mt-3 text-xs text-white/50">No spam. Unsubscribe anytime.</p>
    </div>
  )
}

