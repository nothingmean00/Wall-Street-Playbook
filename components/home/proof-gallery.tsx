"use client"

import Image from "next/image"
import { useState, useEffect, useCallback } from "react"
import { CheckCircle, X, ChevronLeft, ChevronRight } from "lucide-react"

const results = [
  // Row 1 — mix of elite + strong names
  {
    src: "/results/goldman-sachs.png",
    firm: "Goldman Sachs",
    category: "Bulge Bracket",
  },
  {
    src: "/results/blackstone.png",
    firm: "Blackstone",
    category: "Megafund PE",
  },
  {
    src: "/results/evercore.png",
    firm: "Evercore",
    category: "Elite Boutique",
  },
  {
    src: "/results/kkr.png",
    firm: "KKR",
    category: "Megafund PE",
  },
  {
    src: "/results/lazard.png",
    firm: "Lazard",
    category: "Elite Boutique",
  },
  {
    src: "/results/pjt-partners.png",
    firm: "PJT Partners",
    category: "Elite Boutique",
  },
  {
    src: "/results/insight-partners.png",
    firm: "Insight Partners",
    category: "Growth Equity",
  },
  {
    src: "/results/ardian.png",
    firm: "Ardian",
    category: "Private Equity",
  },
  {
    src: "/results/brighton-park-capital.png",
    firm: "Brighton Park Capital",
    category: "Growth Equity",
  },
  {
    src: "/results/lead-edge.png",
    firm: "Lead Edge Capital",
    category: "Growth Equity",
  },
  {
    src: "/results/llr-partners-healthcare.png",
    firm: "LLR Partners",
    category: "Middle Market PE",
  },
  {
    src: "/results/hudson-structured.png",
    firm: "Hudson Structured",
    category: "Asset Management",
  },
  {
    src: "/results/davidson-kempner.png",
    firm: "Davidson Kempner",
    category: "Hedge Fund",
  },
  {
    src: "/results/comvest-partners.png",
    firm: "Comvest Partners",
    category: "Middle Market PE",
  },
  {
    src: "/results/digitalbridge.png",
    firm: "DigitalBridge",
    category: "Infrastructure PE",
  },
  {
    src: "/results/stone-point-capital.png",
    firm: "Stone Point Capital",
    category: "Private Equity",
  },
  {
    src: "/results/fortuna-advisors.png",
    firm: "Fortuna Advisors",
    category: "Advisory",
  },
  {
    src: "/results/westbury.png",
    firm: "Westbury",
    category: "Advisory",
  },
]

const results2 = [
  // Row 2 — different direction, also a strong mix
  {
    src: "/results/carlyle-group.png",
    firm: "The Carlyle Group",
    category: "Megafund PE",
  },
  {
    src: "/results/kkr-2.png",
    firm: "KKR",
    category: "Megafund PE",
  },
  {
    src: "/results/blackrock.png",
    firm: "BlackRock",
    category: "Asset Management",
  },
  {
    src: "/results/ubs.png",
    firm: "UBS",
    category: "Bulge Bracket",
  },
  {
    src: "/results/hamilton-lane.png",
    firm: "Hamilton Lane",
    category: "Private Markets",
  },
  {
    src: "/results/ft-partners.png",
    firm: "FT Partners",
    category: "Fintech Advisory",
  },
  {
    src: "/results/brighton-park-capital-2.png",
    firm: "Brighton Park Capital",
    category: "Growth Equity",
  },
  {
    src: "/results/gryphon-investors.png",
    firm: "Gryphon Investors",
    category: "Middle Market PE",
  },
  {
    src: "/results/tcv-capital.png",
    firm: "TCV",
    category: "Growth Equity",
  },
  {
    src: "/results/payden.png",
    firm: "Payden & Rygel",
    category: "Asset Management",
  },
  {
    src: "/results/llr-partners.png",
    firm: "LLR Partners",
    category: "Middle Market PE",
  },
  {
    src: "/results/ggv-capital.png",
    firm: "GGV Capital",
    category: "Venture Capital",
  },
  {
    src: "/results/offit-capital.png",
    firm: "Offit Capital",
    category: "Wealth Management",
  },
  {
    src: "/results/digitalbridge-2.png",
    firm: "DigitalBridge",
    category: "Infrastructure PE",
  },
  {
    src: "/results/long-ridge.png",
    firm: "Long Ridge",
    category: "Growth Equity",
  },
  {
    src: "/results/msci.png",
    firm: "MSCI",
    category: "Financial Data",
  },
  {
    src: "/results/jmi-equity.png",
    firm: "JMI Equity",
    category: "Growth Equity",
  },
]

const allResults = [...results, ...results2]

function ResultCard({
  result,
  index,
  onClick,
}: {
  result: (typeof results)[0]
  index: number
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className="group relative flex-shrink-0 w-[340px] sm:w-[380px] rounded-xl overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-sm hover:border-gold/40 transition-all duration-300 cursor-pointer text-left"
    >
      {/* Firm label */}
      <div className="px-4 py-2.5 border-b border-white/10 flex items-center justify-between">
        <div className="min-w-0">
          <p className="text-sm font-semibold text-white truncate">{result.firm}</p>
          <p className="text-[11px] text-white/40">{result.category}</p>
        </div>
        <span className="flex-shrink-0 inline-flex items-center gap-1.5 rounded-full bg-green-500/20 px-2.5 py-0.5 text-[10px] font-semibold text-green-400">
          <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
          Interview Secured
        </span>
      </div>

      {/* Screenshot */}
      <div className="relative overflow-hidden">
        <Image
          src={result.src}
          alt={`Interview invitation from ${result.firm}`}
          width={760}
          height={300}
          className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-500"
          quality={85}
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/5 transition-colors duration-300 flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-navy/80 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full">
            Click to expand
          </span>
        </div>
      </div>
    </button>
  )
}

function Lightbox({
  results: allItems,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: {
  results: typeof allResults
  currentIndex: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}) {
  const current = allItems[currentIndex]

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-deep/95 backdrop-blur-xl"
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Counter */}
      <div className="absolute top-6 left-6 text-sm text-white/50">
        {currentIndex + 1} / {allItems.length}
      </div>

      {/* Prev */}
      <button
        onClick={(e) => {
          e.stopPropagation()
          onPrev()
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next */}
      <button
        onClick={(e) => {
          e.stopPropagation()
          onNext()
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Image */}
      <div
        className="relative max-w-4xl w-full mx-4 sm:mx-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="rounded-xl overflow-hidden border border-white/10 bg-navy/50 backdrop-blur-sm shadow-2xl">
          {/* Header */}
          <div className="px-5 py-3 border-b border-white/10 flex items-center justify-between">
            <div>
              <p className="text-base font-semibold text-white">{current.firm}</p>
              <p className="text-xs text-white/40">{current.category}</p>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-green-500/20 px-3 py-1 text-xs font-semibold text-green-400">
              <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
              Interview Secured
            </span>
          </div>
          {/* Image */}
          <Image
            src={current.src}
            alt={`Interview invitation from ${current.firm}`}
            width={1200}
            height={500}
            className="w-full h-auto"
            quality={95}
          />
        </div>
      </div>
    </div>
  )
}

export function ProofGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const openLightbox = (globalIndex: number) => setLightboxIndex(globalIndex)
  const closeLightbox = useCallback(() => setLightboxIndex(null), [])
  const prevImage = useCallback(
    () =>
      setLightboxIndex((prev) =>
        prev !== null ? (prev - 1 + allResults.length) % allResults.length : null
      ),
    []
  )
  const nextImage = useCallback(
    () =>
      setLightboxIndex((prev) =>
        prev !== null ? (prev + 1) % allResults.length : null
      ),
    []
  )

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (lightboxIndex === null) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox()
      if (e.key === "ArrowLeft") prevImage()
      if (e.key === "ArrowRight") nextImage()
    }
    window.addEventListener("keydown", handleKeyDown)
    document.body.style.overflow = "hidden"
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = ""
    }
  }, [lightboxIndex, closeLightbox, prevImage, nextImage])

  return (
    <>
      <section className="relative bg-navy-deep py-20 lg:py-28 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy-deep to-navy" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,_rgba(201,168,110,0.08),_transparent)]" />
        </div>

        <div className="relative">
          {/* Section header */}
          <div className="text-center mb-12 px-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 mb-6">
              <CheckCircle className="w-4 h-4 text-gold" />
              <span className="text-xs font-semibold uppercase tracking-widest text-gold">
                Verified Results
              </span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              From Cold Outreach to{" "}
              <span className="text-gradient-gold">Offer in Hand</span>
            </h2>
          </div>

          {/* Row 1 — scrolls left */}
          <div className="relative mb-5">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-r from-navy-deep via-navy-deep/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-l from-navy-deep via-navy-deep/80 to-transparent z-10 pointer-events-none" />

            <div className="flex animate-scroll-left" style={{ width: "max-content" }}>
              {/* Original set */}
              <div className="flex gap-5 pr-5">
                {results.map((result, i) => (
                  <ResultCard
                    key={`r1-a-${i}`}
                    result={result}
                    index={i}
                    onClick={() => openLightbox(i)}
                  />
                ))}
              </div>
              {/* Duplicate for seamless loop */}
              <div className="flex gap-5 pr-5">
                {results.map((result, i) => (
                  <ResultCard
                    key={`r1-b-${i}`}
                    result={result}
                    index={i}
                    onClick={() => openLightbox(i)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Row 2 — scrolls right */}
          <div className="relative">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-r from-navy-deep via-navy-deep/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-l from-navy-deep via-navy-deep/80 to-transparent z-10 pointer-events-none" />

            <div
              className="flex animate-scroll-right"
              style={{ width: "max-content" }}
            >
              {/* Original set */}
              <div className="flex gap-5 pr-5">
                {results2.map((result, i) => (
                  <ResultCard
                    key={`r2-a-${i}`}
                    result={result}
                    index={results.length + i}
                    onClick={() => openLightbox(results.length + i)}
                  />
                ))}
              </div>
              {/* Duplicate for seamless loop */}
              <div className="flex gap-5 pr-5">
                {results2.map((result, i) => (
                  <ResultCard
                    key={`r2-b-${i}`}
                    result={result}
                    index={results.length + i}
                    onClick={() => openLightbox(results.length + i)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Bottom note + CTA */}
          <div className="mt-12 text-center px-6">
            <p className="text-white/40 text-xs mb-6">
              Screenshots from real candidates. Personal information redacted for
              privacy.
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

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          results={allResults}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </>
  )
}
