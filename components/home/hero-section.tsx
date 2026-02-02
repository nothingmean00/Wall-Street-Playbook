"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { EmailCapture } from "@/components/email-capture"

export function HeroSection() {
  return (
    <section className="relative bg-navy-deep overflow-hidden min-h-[90vh] flex items-center">
      {/* Layered background effects */}
      <div className="absolute inset-0">
        {/* Deep gradient base */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep via-navy to-navy-deep" />
        
        {/* Radial gold accent */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,_rgba(201,168,110,0.15),_transparent)]" />
        
        {/* Secondary accent */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_80%_at_80%_50%,_rgba(201,168,110,0.08),_transparent)]" />
        
        {/* Subtle mesh pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 30h60M30 0v60' stroke='%23C9A86E' stroke-width='0.5' fill='none'/%3E%3C/svg%3E")`,
          }}
        />
        
        {/* Grain texture */}
        <div className="absolute inset-0 grain" />
      </div>

      {/* Decorative lines */}
      <div className="absolute top-0 left-1/4 w-px h-32 bg-gradient-to-b from-transparent via-gold/20 to-transparent" />
      <div className="absolute top-0 right-1/3 w-px h-48 bg-gradient-to-b from-transparent via-gold/10 to-transparent" />
      <div className="absolute bottom-0 left-1/2 w-px h-24 bg-gradient-to-t from-transparent via-gold/15 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24 lg:px-8 lg:py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left column - Text content */}
          <div className="text-center lg:text-left">
            {/* Eyebrow - Real urgency based on recruiting calendar */}
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 mb-6 animate-slide-up">
              <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-widest text-gold">2026 Summer Analyst Apps Open Now</span>
            </div>
            
            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] animate-slide-up animate-delay-100">
              Your Edge Into{" "}
              <span className="relative inline-block">
                <span className="text-gradient-gold">Wall Street</span>
                {/* Underline decoration - CSS only for better performance */}
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-gold/60 rounded-full" />
              </span>
            </h1>

            {/* Subheadline - FOMO: reference the timeline pressure */}
            <p className="mt-6 text-lg sm:text-xl leading-relaxed text-white/60 max-w-xl mx-auto lg:mx-0 animate-slide-up animate-delay-200">
              Resume frameworks, technical prep, and networking strategies that get callbacks at 
              <span className="text-white/80"> bulge brackets</span>,
              <span className="text-white/80"> elite boutiques</span>, and
              <span className="text-white/80"> buyside firms</span>.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-slide-up animate-delay-300">
              <Link
                href="/submit-resume?service=resume-review"
                className="group relative flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-gold px-8 py-4 text-base font-semibold text-navy overflow-hidden transition-all hover:shadow-lg hover:shadow-gold/25"
              >
                <span className="relative z-10">Get Your Resume Reviewed</span>
                <ArrowRight className="relative z-10 h-5 w-5 transition-transform group-hover:translate-x-1" />
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
              <Link
                href="/jobs"
                className="group w-full sm:w-auto rounded-xl border-2 border-white/20 bg-white/5 backdrop-blur-sm px-8 py-4 text-base font-semibold text-white transition-all hover:border-gold hover:bg-gold/10 text-center"
              >
                See Open Roles
              </Link>
            </div>

            {/* Trust indicators - Authority signals */}
            <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-6 animate-slide-up animate-delay-400">
              <div className="flex items-center gap-2 text-white/40">
                <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">GS / MS / Evercore Formats</span>
              </div>
              <div className="flex items-center gap-2 text-white/40">
                <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">48hr Turnaround</span>
              </div>
              <div className="flex items-center gap-2 text-white/40">
                <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">Money-Back Guarantee</span>
              </div>
            </div>
          </div>

          {/* Right column - Hero Image */}
          <div className="relative hidden lg:block animate-slide-up animate-delay-500">
            <div className="relative">
              {/* Image container with effects */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/40">
                {/* Gold border glow */}
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-gold/40 via-gold/10 to-gold/30" />
                
                {/* Image */}
                <div className="relative rounded-2xl overflow-hidden">
                  <Image
                    src="/hero-image-new.jpg"
                    alt="Two young finance professionals walking outside the New York Stock Exchange on Wall Street"
                    width={1200}
                    height={800}
                    className="w-full h-auto object-cover"
                    priority
                    quality={85}
                  />
                  
                  {/* Subtle overlay gradient for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/40 via-transparent to-transparent" />
                </div>
              </div>
              
              {/* Decorative glow behind image */}
              <div className="absolute -inset-8 bg-gold/10 rounded-3xl blur-3xl -z-10" />
              
              {/* Stats overlay on image */}
              <div className="absolute -bottom-20 -left-6 right-6 mx-auto">
                <div className="bg-navy/95 backdrop-blur-xl rounded-xl border border-white/10 p-5 shadow-xl">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-2xl font-bold text-gold number-highlight">$197</p>
                      <p className="text-xs text-white/50 mt-0.5">Resume Review</p>
                    </div>
                    <div className="border-x border-white/10">
                      <p className="text-2xl font-bold text-gold number-highlight">48hr</p>
                      <p className="text-xs text-white/50 mt-0.5">Turnaround</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gold number-highlight">100%</p>
                      <p className="text-xs text-white/50 mt-0.5">Money-Back</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Email Capture */}
        <div className="mt-16 sm:mt-20 pt-10 border-t border-white/10 animate-slide-up animate-delay-600">
          <div className="max-w-xl mx-auto lg:mx-0">
            <p className="text-sm text-white/50 mb-4 text-center lg:text-left">Free: 50 technical interview questions PDF + weekly recruiting tips</p>
            <EmailCapture variant="hero" />
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-off-white via-off-white/50 to-transparent" />
    </section>
  )
}
