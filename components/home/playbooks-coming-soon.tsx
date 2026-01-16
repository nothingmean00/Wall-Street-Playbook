"use client"

import { useState } from "react"
import { BookOpen, Sparkles, Bell, CheckCircle, Loader2 } from "lucide-react"

const upcomingPlaybooks = [
  {
    title: "IB Technical Interview Guide",
    description: "400+ questions with model answers, valuation walkthroughs, and M&A case studies",
    icon: "📊",
  },
  {
    title: "Networking & Cold Email Playbook",
    description: "Proven templates and strategies that generated 100+ coffee chats and referrals",
    icon: "📧",
  },
  {
    title: "PE Recruiting Playbook",
    description: "Complete guide to on-cycle recruiting, LBO modeling, and case interview prep",
    icon: "🏦",
  },
  {
    title: "LBO Modeling Course",
    description: "Step-by-step LBO model build with templates used in actual PE interviews",
    icon: "📈",
  },
]

export function PlaybooksComingSoon() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setStatus("loading")
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "playbooks-waitlist" }),
      })

      if (response.ok) {
        setStatus("success")
        setEmail("")
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <section className="relative bg-cream py-24 lg:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,_rgba(201,168,110,0.1),_transparent)]" />
      </div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-gold to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 mb-6">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-xs font-semibold uppercase tracking-widest text-gold">Coming Soon</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-5xl">
            Premium <span className="text-gradient-gold">Playbooks</span> in Development
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-charcoal/60">
            We're crafting comprehensive guides to help you break into finance. 
            Join the waitlist to get early access and exclusive launch pricing.
          </p>
        </div>

        {/* Playbook Cards Grid */}
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2">
          {upcomingPlaybooks.map((playbook, index) => (
            <div
              key={playbook.title}
              className="group relative rounded-xl border border-border/50 bg-white/80 backdrop-blur-sm p-6 transition-all duration-300 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/10"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-navy text-2xl">
                  {playbook.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-navy group-hover:text-gold transition-colors">
                    {playbook.title}
                  </h3>
                  <p className="mt-1 text-sm text-charcoal/60 leading-relaxed">
                    {playbook.description}
                  </p>
                </div>
              </div>
              
              {/* Coming soon badge */}
              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center gap-1 rounded-full bg-gold/10 px-2.5 py-1 text-xs font-medium text-gold">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
                  Soon
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Waitlist CTA */}
        <div className="mx-auto mt-16 max-w-xl">
          <div className="rounded-2xl border border-navy/10 bg-navy p-8 text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold/20 mb-4">
              <Bell className="w-6 h-6 text-gold" />
            </div>
            <h3 className="text-xl font-bold text-white">Be the First to Know</h3>
            <p className="mt-2 text-white/60 text-sm">
              Get notified when playbooks launch + receive early-bird pricing (up to 40% off).
            </p>

            {status === "success" ? (
              <div className="mt-6 flex items-center justify-center gap-2 rounded-lg bg-emerald-500/20 p-4 text-emerald-400">
                <CheckCircle className="h-5 w-5" />
                <span className="font-medium">You're on the list! We'll be in touch soon.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="flex-1 rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                  />
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="rounded-lg bg-gold px-6 py-3 font-semibold text-navy transition-all hover:bg-white disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span>Joining...</span>
                      </>
                    ) : (
                      <>
                        <Bell className="h-4 w-4" />
                        <span>Join Waitlist</span>
                      </>
                    )}
                  </button>
                </div>
                {status === "error" && (
                  <p className="mt-2 text-sm text-red-400">Something went wrong. Please try again.</p>
                )}
              </form>
            )}

            <p className="mt-4 text-xs text-white/60">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
