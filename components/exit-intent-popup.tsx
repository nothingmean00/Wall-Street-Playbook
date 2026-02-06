"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { X, Mail, ArrowRight, Loader2, Check } from "lucide-react"
import { track } from "@vercel/analytics"

export function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [hasShown, setHasShown] = useState(false)
  const modalRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const previouslyFocused = useRef<HTMLElement | null>(null)

  // Focus trap: cycle focus within the modal
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return

      if (e.key === "Escape") {
        setIsOpen(false)
        return
      }

      if (e.key !== "Tab" || !modalRef.current) return

      const focusable = modalRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault()
          last?.focus()
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault()
          first?.focus()
        }
      }
    },
    [isOpen]
  )

  // Manage focus when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      previouslyFocused.current = document.activeElement as HTMLElement
      // Small delay to let the modal render
      requestAnimationFrame(() => closeButtonRef.current?.focus())
      document.addEventListener("keydown", handleKeyDown)
    } else {
      document.removeEventListener("keydown", handleKeyDown)
      previouslyFocused.current?.focus()
    }

    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, handleKeyDown])

  useEffect(() => {
    // Check if we've already shown the popup this session
    const shown = sessionStorage.getItem("exitPopupShown")
    if (shown) {
      setHasShown(true)
      return
    }

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger when mouse leaves through the top of the viewport
      if (e.clientY <= 0 && !hasShown) {
        setIsOpen(true)
        setHasShown(true)
        sessionStorage.setItem("exitPopupShown", "true")
        track("exit_popup_shown", { trigger: "mouse_leave" })
      }
    }

    // Also show after 45 seconds if still on page
    const timer = setTimeout(() => {
      if (!hasShown && !sessionStorage.getItem("exitPopupShown")) {
        setIsOpen(true)
        setHasShown(true)
        sessionStorage.setItem("exitPopupShown", "true")
        track("exit_popup_shown", { trigger: "timeout" })
      }
    }, 45000)

    document.addEventListener("mouseleave", handleMouseLeave)
    
    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave)
      clearTimeout(timer)
    }
  }, [hasShown])

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
        body: JSON.stringify({ email, source: "exit_popup" }),
      })

      if (!response.ok) throw new Error("Failed")

      track("email_subscribed", { source: "exit_popup" })
      
      setStatus("success")
    } catch {
      setStatus("error")
    }
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="exit-popup-title"
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-navy/80 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />
      
      {/* Modal */}
      <div
        ref={modalRef}
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300"
      >
        {/* Close button */}
        <button
          ref={closeButtonRef}
          onClick={() => setIsOpen(false)}
          aria-label="Close popup"
          className="absolute right-4 top-4 p-1 text-charcoal/50 hover:text-charcoal transition-colors z-10"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>

        {/* Content */}
        <div className="p-8 sm:p-10">
          {status === "success" ? (
            <div className="text-center py-8">
              <div className="mx-auto w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <Check className="h-8 w-8 text-green-600" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold text-charcoal mb-2">You&apos;re in!</h3>
              <p className="text-charcoal/70">Check your inbox for recruiting insights and free resources.</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-6 text-sm font-medium text-gold hover:text-navy transition-colors"
              >
                Continue browsing
              </button>
            </div>
          ) : (
            <>
              {/* Icon */}
              <div className="mx-auto w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6">
                <Mail className="h-7 w-7 text-gold" aria-hidden="true" />
              </div>

              {/* Headline */}
              <h3 id="exit-popup-title" className="text-2xl sm:text-3xl font-bold text-charcoal text-center mb-3">
                Free: 50 Technical Questions PDF
              </h3>
              
              <p className="text-center text-charcoal/70 mb-6">
                The most-asked accounting, valuation, and M&amp;A questions—with answers. 
                <span className="block mt-2 text-sm font-medium text-navy">
                  Instant download. No credit card.
                </span>
              </p>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <label htmlFor="exit-popup-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="exit-popup-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  aria-describedby={status === "error" ? "exit-popup-error" : undefined}
                  aria-invalid={status === "error"}
                  className="w-full rounded-lg border border-border bg-off-white px-4 py-3.5 text-charcoal placeholder:text-charcoal/40 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
                  disabled={status === "loading"}
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  aria-busy={status === "loading"}
                  className="w-full flex items-center justify-center gap-2 rounded-lg bg-navy px-6 py-3.5 font-semibold text-white transition-colors hover:bg-gold hover:text-navy disabled:opacity-50"
                >
                  {status === "loading" ? (
                    <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
                  ) : (
                    <>
                      Send Me the PDF
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </>
                  )}
                </button>
              </form>

              {status === "error" && (
                <p id="exit-popup-error" role="alert" aria-live="polite" className="mt-3 text-sm text-red-500 text-center">
                  Please enter a valid email address.
                </p>
              )}

              <p className="mt-4 text-xs text-charcoal/50 text-center">
                No spam. Unsubscribe anytime. We respect your inbox.
              </p>
            </>
          )}
        </div>

        {/* Bottom accent */}
        <div className="h-1.5 bg-gradient-to-r from-gold via-gold/70 to-gold" aria-hidden="true" />
      </div>
    </div>
  )
}
