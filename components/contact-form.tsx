"use client"

import { useState } from "react"
import { Loader2, Check } from "lucide-react"
import { track } from "@vercel/analytics"

export function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.email || !formData.message) {
      setErrorMessage("Email and message are required")
      setStatus("error")
      return
    }

    setStatus("loading")
    setErrorMessage("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Failed to submit")
      }

      // Track contact form submission
      track("contact_submitted", { subject: formData.subject || "none" })
      
      setStatus("success")
      setFormData({ firstName: "", lastName: "", email: "", subject: "", message: "" })
    } catch (error) {
      setStatus("error")
      setErrorMessage("Something went wrong. Please try again or email us directly.")
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
          <Check className="h-6 w-6 text-green-600" />
        </div>
        <h3 className="mt-4 text-lg font-semibold text-green-900">Message Sent!</h3>
        <p className="mt-2 text-sm text-green-700">
          We'll get back to you within 24 hours. Check your email for a confirmation.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-charcoal">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="mt-2 block w-full rounded-lg border border-charcoal/20 bg-off-white px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/40 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
            placeholder="John"
            disabled={status === "loading"}
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-charcoal">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="mt-2 block w-full rounded-lg border border-charcoal/20 bg-off-white px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/40 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
            placeholder="Smith"
            disabled={status === "loading"}
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-charcoal">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-2 block w-full rounded-lg border border-charcoal/20 bg-off-white px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/40 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
          placeholder="john@example.com"
          disabled={status === "loading"}
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-charcoal">
          Subject
        </label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="mt-2 block w-full rounded-lg border border-charcoal/20 bg-off-white px-4 py-3 text-sm text-charcoal focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
          disabled={status === "loading"}
        >
          <option value="">Select a topic</option>
          <option value="playbooks">Question about Playbooks</option>
          <option value="resume">Resume Services Inquiry</option>
          <option value="purchase">Purchase or Billing Issue</option>
          <option value="partnership">Partnership Opportunity</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-charcoal">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
          className="mt-2 block w-full resize-none rounded-lg border border-charcoal/20 bg-off-white px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/40 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
          placeholder="How can we help you?"
          disabled={status === "loading"}
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-lg bg-navy px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-gold hover:text-navy disabled:opacity-50 flex items-center justify-center gap-2"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  )
}

