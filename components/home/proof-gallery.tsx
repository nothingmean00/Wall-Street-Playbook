"use client"

import Image from "next/image"
import { CheckCircle } from "lucide-react"

const results = [
  {
    src: "/results/llr-partners-interview.png",
    alt: "LLR Partners Analyst Interview Invitation",
    firm: "LLR Partners",
    role: "Analyst – Healthcare Team",
  },
  {
    src: "/results/ft-partners-interview.png",
    alt: "FT Partners Sponsor Coverage Analyst Interview",
    firm: "FT Partners",
    role: "Sponsor Coverage Analyst",
  },
]

export function ProofGallery() {
  return (
    <section className="relative bg-navy-deep py-20 lg:py-28 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy-deep to-navy" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,_rgba(201,168,110,0.08),_transparent)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 mb-6">
            <CheckCircle className="w-4 h-4 text-gold" />
            <span className="text-xs font-semibold uppercase tracking-widest text-gold">Real Results</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Our Readers Land <span className="text-gradient-gold">Interviews</span>
          </h2>
          <p className="mt-4 text-lg text-white/60 max-w-2xl mx-auto">
            Real interview invitations from real firms. Names redacted for privacy.
          </p>
        </div>

        {/* Screenshots */}
        <div className="mx-auto max-w-5xl grid gap-6 sm:grid-cols-2">
          {results.map((result) => (
            <div
              key={result.firm}
              className="group rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm hover:border-gold/30 transition-all"
            >
              {/* Firm label */}
              <div className="px-5 py-3 border-b border-white/10 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-white">{result.firm}</p>
                  <p className="text-xs text-white/40">{result.role}</p>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-green-500/20 px-2.5 py-0.5 text-[10px] font-semibold text-green-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                  Interview Secured
                </span>
              </div>

              {/* Screenshot */}
              <div className="relative">
                <Image
                  src={result.src}
                  alt={result.alt}
                  width={800}
                  height={300}
                  className="w-full h-auto"
                  quality={90}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note + CTA */}
        <div className="mt-10 text-center">
          <p className="text-white/40 text-xs mb-6">
            Screenshots from real candidates. Personal information redacted for privacy.
          </p>
          <a
            href="/playbooks"
            className="inline-flex items-center gap-2 rounded-xl bg-gold px-8 py-4 text-base font-semibold text-navy transition-all hover:bg-white hover:shadow-lg hover:shadow-gold/20"
          >
            Get the Playbooks
          </a>
        </div>
      </div>
    </section>
  )
}
