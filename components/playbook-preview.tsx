"use client"

import { useState, useEffect } from "react"
import dynamic from "next/dynamic"
import { ChevronLeft, ChevronRight, BookOpen, X, Maximize2, Loader2, Lock } from "lucide-react"

// Dynamically import react-pdf with SSR disabled (uses browser APIs)
const Document = dynamic(
  () => import("react-pdf").then((mod) => mod.Document),
  { ssr: false }
)
const Page = dynamic(
  () => import("react-pdf").then((mod) => mod.Page),
  { ssr: false }
)

interface PlaybookPreviewProps {
  title: string
  pdfUrl: string
  previewPages?: number
  totalPages: number
}

export function PlaybookPreview({ title, pdfUrl, previewPages = 5, totalPages }: PlaybookPreviewProps) {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalPage, setModalPage] = useState(1)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [pdfWorkerReady, setPdfWorkerReady] = useState(false)
  const [inlineWidth, setInlineWidth] = useState(480)
  const [modalWidth, setModalWidth] = useState(550)

  // Set up PDF.js worker on client side only
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("react-pdf").then((pdfjs) => {
        pdfjs.pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.pdfjs.version}/build/pdf.worker.min.mjs`
        setPdfWorkerReady(true)
      })
    }
  }, [])

  // Responsive width calculation
  useEffect(() => {
    if (typeof window === "undefined") return
    const updateWidths = () => {
      setInlineWidth(window.innerWidth < 640 ? window.innerWidth - 80 : 480)
      setModalWidth(window.innerWidth < 640 ? window.innerWidth - 60 : 550)
    }
    updateWidths()
    window.addEventListener("resize", updateWidths)
    return () => window.removeEventListener("resize", updateWidths)
  }, [])

  // Handle Escape key and body scroll lock for modal
  useEffect(() => {
    if (!modalOpen) return
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModalOpen(false)
    }
    document.addEventListener("keydown", handleEscape)
    return () => {
      document.body.style.overflow = originalOverflow
      document.removeEventListener("keydown", handleEscape)
    }
  }, [modalOpen])

  const maxPreviewPage = Math.min(previewPages, totalPages)

  const openModalAtPage = (page: number) => {
    setModalPage(page)
    setModalOpen(true)
  }

  const nextPage = () => {
    if (modalPage < maxPreviewPage) setModalPage(modalPage + 1)
  }

  const prevPage = () => {
    if (modalPage > 1) setModalPage(modalPage - 1)
  }

  return (
    <>
      {/* ── Inline Preview (always visible, no click required) ── */}
      <div>
        {/* Loading / Error states */}
        {(!pdfWorkerReady || isLoading) && !error && (
          <div className="rounded-xl border border-border bg-gray-100 flex items-center justify-center min-h-[420px]">
            <div className="text-center">
              <Loader2 className="h-8 w-8 animate-spin text-gold mx-auto mb-2" />
              <p className="text-charcoal/50 text-sm">Loading preview...</p>
            </div>
          </div>
        )}

        {error && (
          <div className="rounded-xl border border-border bg-gray-100 flex items-center justify-center min-h-[300px]">
            <p className="text-charcoal/50 text-sm">{error}</p>
          </div>
        )}

        {/* Single Document for all inline content (page 1 + thumbnails) */}
        {pdfWorkerReady && !error && (
          <Document
            file={pdfUrl}
            onLoadSuccess={() => {
              setIsLoading(false)
              setError(null)
            }}
            onLoadError={(err: Error) => {
              setIsLoading(false)
              setError("Failed to load preview")
              console.error("PDF load error:", err)
            }}
            loading={null}
          >
            {/* Main page 1 — rendered inline */}
            <div className="rounded-xl overflow-hidden border border-border bg-gray-100">
              {/* Utility header */}
              <div className="bg-white/80 backdrop-blur-sm px-4 py-2.5 flex items-center justify-between border-b border-border">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-gold" />
                  <span className="text-xs font-medium text-navy">
                    Page 1 of {totalPages}
                  </span>
                </div>
                <button
                  onClick={() => openModalAtPage(1)}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium text-gold hover:bg-gold/10 transition-colors"
                >
                  <Maximize2 className="h-3.5 w-3.5" />
                  Full Preview
                </button>
              </div>

              {/* Page 1 render */}
              <div className="flex justify-center p-4 sm:p-6">
                <div
                  className="shadow-lg cursor-pointer hover:shadow-xl transition-shadow bg-white rounded-sm"
                  onClick={() => openModalAtPage(1)}
                >
                  <Page
                    pageNumber={1}
                    width={inlineWidth}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                  />
                </div>
              </div>
            </div>

            {/* Thumbnail strip — pages 2 through N */}
            {!isLoading && maxPreviewPage > 1 && (
              <div className="mt-4">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-medium text-charcoal/50 uppercase tracking-wider">
                    More preview pages
                  </span>
                  <div className="flex-1 h-px bg-border" />
                  <button
                    onClick={() => openModalAtPage(1)}
                    className="text-xs font-medium text-gold hover:text-gold/80 transition-colors"
                  >
                    View all →
                  </button>
                </div>

                <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                  {Array.from({ length: maxPreviewPage - 1 }, (_, i) => i + 2).map(
                    (pageNum) => (
                      <button
                        key={pageNum}
                        onClick={() => openModalAtPage(pageNum)}
                        className="flex-shrink-0 relative group rounded-lg overflow-hidden border border-border bg-white shadow-sm hover:shadow-md hover:border-gold/40 transition-all"
                      >
                        <Page
                          pageNumber={pageNum}
                          width={110}
                          renderTextLayer={false}
                          renderAnnotationLayer={false}
                        />
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/10 transition-colors flex items-center justify-center">
                          <Maximize2 className="h-5 w-5 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" />
                        </div>
                        {/* Page number label */}
                        <div className="absolute bottom-0 inset-x-0 bg-white/90 backdrop-blur-sm py-0.5 text-center border-t border-border/50">
                          <span className="text-[10px] font-medium text-charcoal/50">
                            Page {pageNum}
                          </span>
                        </div>
                      </button>
                    )
                  )}

                  {/* Locked pages teaser */}
                  <div className="flex-shrink-0 w-[110px] min-h-[140px] rounded-lg border-2 border-dashed border-gold/30 bg-gradient-to-br from-gold/5 to-navy/5 flex flex-col items-center justify-center gap-1.5 cursor-default">
                    <Lock className="h-5 w-5 text-gold/70" />
                    <span className="text-xs font-bold text-navy">
                      {totalPages - maxPreviewPage}+
                    </span>
                    <span className="text-[10px] text-charcoal/50 text-center leading-tight px-2">
                      more pages after purchase
                    </span>
                  </div>
                </div>
              </div>
            )}
          </Document>
        )}
      </div>

      {/* ── Expanded Modal ── */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80"
          onClick={() => setModalOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="preview-title"
        >
          <div
            className="bg-white rounded-xl shadow-2xl overflow-hidden w-full max-w-4xl max-h-[95vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-navy px-4 sm:px-6 py-4 flex items-center justify-between flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gold/20 flex items-center justify-center">
                  <BookOpen className="h-4 w-4 text-gold" />
                </div>
                <div>
                  <h3
                    id="preview-title"
                    className="text-white font-semibold text-sm sm:text-base"
                  >
                    {title}
                  </h3>
                  <p className="text-white/60 text-xs">
                    Page {modalPage} of {totalPages} • Previewing{" "}
                    {maxPreviewPage} pages
                  </p>
                </div>
              </div>
              <button
                onClick={() => setModalOpen(false)}
                className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Close preview"
              >
                <X className="h-5 w-5 text-white/70" />
              </button>
            </div>

            {/* PDF Content */}
            <div className="flex-1 overflow-auto bg-gray-200 flex items-start justify-center p-4 sm:p-8">
              <div className="relative bg-white shadow-xl rounded-sm">
                <Document file={pdfUrl} loading={null} className="flex justify-center">
                  <Page
                    pageNumber={modalPage}
                    width={modalWidth}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                    className="shadow-sm"
                  />
                </Document>

                {/* Fade overlay on last preview page */}
                {modalPage === maxPreviewPage && (
                  <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/95 to-transparent flex items-end justify-center pb-6">
                    <div className="text-center">
                      <p className="text-charcoal/70 text-sm mb-2">
                        End of preview
                      </p>
                      <span className="inline-flex items-center gap-2 text-sm text-navy font-semibold bg-gold/20 px-4 py-2 rounded-full">
                        <BookOpen className="h-4 w-4" />
                        Purchase to read all {totalPages} pages
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Navigation Footer */}
            <div className="bg-white border-t border-gray-200 px-4 sm:px-6 py-4 flex items-center justify-between flex-shrink-0">
              <button
                onClick={prevPage}
                disabled={modalPage === 1}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-charcoal hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft className="h-4 w-4" />
                <span className="hidden sm:inline">Previous</span>
              </button>

              <div className="flex items-center gap-2">
                {Array.from({ length: maxPreviewPage }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      onClick={() => setModalPage(page)}
                      className={`w-8 h-8 rounded-lg text-sm font-medium transition-colors ${
                        page === modalPage
                          ? "bg-navy text-white"
                          : "bg-gray-100 text-charcoal hover:bg-gray-200"
                      }`}
                    >
                      {page}
                    </button>
                  )
                )}
              </div>

              <button
                onClick={nextPage}
                disabled={modalPage === maxPreviewPage}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-charcoal hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <span className="hidden sm:inline">Next</span>
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

// PE Recruiting Playbook Preview - Using actual PDF
export function PEPlaybookPreview() {
  return (
    <PlaybookPreview
      title="2026 PE Recruiting Playbook"
      pdfUrl="https://53r2eh0lojknhqsa.public.blob.vercel-storage.com/PE-Recruiting-Guide-2026.pdf"
      previewPages={5}
      totalPages={42}
    />
  )
}

// Finance Technical Interview Guide Preview - Using actual PDF
export function IBTechnicalPreview() {
  return (
    <PlaybookPreview
      title="Finance Technical Interview Guide — 2026 Edition"
      pdfUrl="https://53r2eh0lojknhqsa.public.blob.vercel-storage.com/Finance-Technical-Interview-Guide-2026.pdf"
      previewPages={10}
      totalPages={80}
    />
  )
}

// Networking & Cold Email Playbook Preview - Using actual PDF
export function NetworkingPreview() {
  return (
    <PlaybookPreview
      title="Networking & Cold Email Playbook"
      pdfUrl="https://53r2eh0lojknhqsa.public.blob.vercel-storage.com/Networking-Cold-Email-Playbook.pdf"
      previewPages={5}
      totalPages={47}
    />
  )
}

// Behavioral Interview Guide Preview - Using actual PDF
export function BehavioralPreview() {
  return (
    <PlaybookPreview
      title="Behavioral Interview Guide — 2026 Edition"
      pdfUrl="https://53r2eh0lojknhqsa.public.blob.vercel-storage.com/Behavioral-Interview-Guide-2026.pdf"
      previewPages={10}
      totalPages={41}
    />
  )
}
