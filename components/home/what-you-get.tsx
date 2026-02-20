"use client"

import { BookOpen, FileText, MessageSquare, Calendar, Target, TrendingUp } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const features = [
  {
    icon: BookOpen,
    title: "Interview Frameworks",
    description:
      "Structured approaches to technical and behavioral questions asked at top firms.",
    accent: "from-blue-500/20 to-blue-600/5",
  },
  {
    icon: FileText,
    title: "Technical Guides",
    description: "Valuation, M&A mechanics, LBO modeling, and accounting fundamentals.",
    accent: "from-emerald-500/20 to-emerald-600/5",
  },
  {
    icon: MessageSquare,
    title: "Networking Templates",
    description: "Email and LinkedIn templates for cold outreach and informational interviews.",
    accent: "from-violet-500/20 to-violet-600/5",
  },
  {
    icon: Calendar,
    title: "Recruiting Timelines",
    description: "Calendars for IB, PE, and hedge fund recruiting cycles.",
    accent: "from-amber-500/20 to-amber-600/5",
  },
  {
    icon: Target,
    title: "Resume Frameworks",
    description: "Structures for positioning your experience for finance roles.",
    accent: "from-rose-500/20 to-rose-600/5",
  },
  {
    icon: TrendingUp,
    title: "Firm Research",
    description: "Interview patterns across bulge brackets, elite boutiques, and buyside firms.",
    accent: "from-cyan-500/20 to-cyan-600/5",
  },
]

export function WhatYouGet() {
  return (
    <section className="relative bg-cream py-16 sm:py-24 lg:py-32 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,168,110,0.08),_transparent_70%)]" />
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0v100M0 50h100' stroke='%230a1a2f' stroke-width='0.5'/%3E%3C/svg%3E")`,
          }}
        />
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-navy/5 rounded-full blur-3xl" />
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal animation="fade-up" className="mx-auto max-w-2xl text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold mb-4">What's Included</p>
          <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-5xl">
            Technical + Behavioral + <span className="text-gradient-gold">Networking</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-charcoal/60">
            The three pillars of finance recruiting, covered with actionable frameworks.
          </p>
        </ScrollReveal>

        {/* Features Grid */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <ScrollReveal
              key={feature.title}
              animation="fade-up"
              delay={index * 100}
              className="group relative rounded-2xl bg-white p-8 transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Gradient accent on hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Content */}
              <div className="relative">
                {/* Icon */}
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-navy shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:shadow-xl">
                  <feature.icon className="h-6 w-6 text-gold" />
                </div>

                {/* Text */}
                <h3 className="text-lg font-bold text-navy mb-2 group-hover:text-navy/90 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-charcoal/60 group-hover:text-charcoal/70 transition-colors">
                  {feature.description}
                </p>
              </div>
              
              {/* Corner accent */}
              <div className="absolute top-4 right-4 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-l from-gold to-transparent" />
                <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-gold to-transparent" />
              </div>
            </ScrollReveal>
          ))}
        </div>
        
        {/* Bottom stat bar */}
        <ScrollReveal animation="fade-up" delay={400} className="mt-20 mx-auto max-w-4xl">
          <div className="relative rounded-2xl bg-navy p-6 sm:p-8 lg:p-10 overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(201,168,110,0.15),_transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(201,168,110,0.1),_transparent_60%)]" />
            
            <div className="relative grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 text-center">
              {[
                { value: "30+", label: "Top Firm Interviews" },
                { value: "48hr", label: "Turnaround Time" },
                { value: "IB+PE+HF", label: "All Paths Covered" },
                { value: "100%", label: "Money-Back Guarantee" },
              ].map((stat, i) => (
                <div key={i} className="relative">
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gold number-highlight">{stat.value}</p>
                  <p className="mt-1 text-xs sm:text-sm text-white/60">{stat.label}</p>
                  {i < 3 && (
                    <div className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-white/10" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
