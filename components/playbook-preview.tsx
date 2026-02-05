"use client"

import { useState, useEffect } from "react"
import dynamic from "next/dynamic"
import { ChevronLeft, ChevronRight, BookOpen, X, Maximize2, Loader2, Eye } from "lucide-react"

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
  const [currentPage, setCurrentPage] = useState(1)
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [pdfWorkerReady, setPdfWorkerReady] = useState(false)

  // Set up PDF.js worker on client side only
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("react-pdf").then((pdfjs) => {
        pdfjs.pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.pdfjs.version}/build/pdf.worker.min.mjs`
        setPdfWorkerReady(true)
      })
    }
  }, [])

  const maxPreviewPage = Math.min(previewPages, totalPages)

  const nextPage = () => {
    if (currentPage < maxPreviewPage) {
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const onDocumentLoadSuccess = () => {
    setIsLoading(false)
    setError(null)
  }

  const onDocumentLoadError = (err: Error) => {
    setIsLoading(false)
    setError("Failed to load preview")
    console.error("PDF load error:", err)
  }

  // Teaser card shown by default
  if (!isOpen) {
    return (
      <div className="my-8">
        <button
          onClick={() => setIsOpen(true)}
          className="w-full group"
        >
          <div className="relative overflow-hidden rounded-2xl border-2 border-gold/30 bg-gradient-to-br from-navy/5 to-gold/10 p-6 sm:p-8 transition-all hover:border-gold/60 hover:shadow-xl">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-navy/10 rounded-full blur-2xl" />
            
            <div className="relative flex flex-col sm:flex-row items-center gap-6">
              {/* Book icon */}
              <div className="flex-shrink-0 w-20 h-24 sm:w-24 sm:h-32 bg-white rounded-lg shadow-lg border border-charcoal/10 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-navy to-navy/80" />
                <div className="absolute inset-x-0 top-0 h-1 bg-gold" />
                <BookOpen className="relative h-10 w-10 text-white" />
                <div className="absolute bottom-2 left-2 right-2 space-y-1">
                  <div className="h-0.5 bg-white/30 rounded" />
                  <div className="h-0.5 bg-white/20 rounded w-3/4" />
                  <div className="h-0.5 bg-white/20 rounded w-1/2" />
                </div>
              </div>

              {/* Text content */}
              <div className="flex-1 text-center sm:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/20 text-gold text-xs font-semibold mb-3">
                  <Eye className="h-3 w-3" />
                  FREE PREVIEW
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-navy mb-2">
                  Look Inside This Playbook
                </h3>
                <p className="text-charcoal/70 text-sm sm:text-base mb-4">
                  Preview the first {previewPages} pages of the {totalPages}-page guide. See the table of contents, introduction, and sample chapters.
                </p>
                <div className="inline-flex items-center gap-2 text-gold font-semibold group-hover:gap-3 transition-all">
                  <Maximize2 className="h-4 w-4" />
                  Click to Open Preview
                </div>
              </div>
            </div>
          </div>
        </button>
      </div>
    )
  }

  // Full preview modal
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80"
      onClick={() => setIsOpen(false)}
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
              <h3 className="text-white font-semibold text-sm sm:text-base">{title}</h3>
              <p className="text-white/60 text-xs">
                Page {currentPage} of {totalPages} • Previewing {maxPreviewPage} pages
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="h-5 w-5 text-white/70" />
          </button>
        </div>

        {/* PDF Content */}
        <div className="flex-1 overflow-auto bg-gray-200 flex items-start justify-center p-4 sm:p-8">
          <div className="relative bg-white shadow-xl rounded-sm">
            {(isLoading || !pdfWorkerReady) && (
              <div className="absolute inset-0 flex items-center justify-center bg-white z-10 min-h-[500px]">
                <div className="text-center">
                  <Loader2 className="h-10 w-10 animate-spin text-gold mx-auto mb-3" />
                  <p className="text-charcoal/60 text-sm">Loading preview...</p>
                </div>
              </div>
            )}
            
            {error ? (
              <div className="flex items-center justify-center p-12 text-charcoal/60 min-h-[500px]">
                {error}
              </div>
            ) : pdfWorkerReady ? (
              <Document
                file={pdfUrl}
                onLoadSuccess={onDocumentLoadSuccess}
                onLoadError={onDocumentLoadError}
                loading={null}
                className="flex justify-center"
              >
                <Page
                  pageNumber={currentPage}
                  width={typeof window !== 'undefined' && window.innerWidth < 640 ? window.innerWidth - 60 : 550}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                  className="shadow-sm"
                />
              </Document>
            ) : null}
            
            {/* Fade overlay on last preview page */}
            {currentPage === maxPreviewPage && !error && !isLoading && (
              <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/95 to-transparent flex items-end justify-center pb-6">
                <div className="text-center">
                  <p className="text-charcoal/70 text-sm mb-2">End of preview</p>
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
            disabled={currentPage === 1}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-charcoal hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="hidden sm:inline">Previous</span>
          </button>
          
          <div className="flex items-center gap-2">
            {Array.from({ length: maxPreviewPage }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-8 h-8 rounded-lg text-sm font-medium transition-colors ${
                  page === currentPage 
                    ? 'bg-navy text-white' 
                    : 'bg-gray-100 text-charcoal hover:bg-gray-200'
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          <button
            onClick={nextPage}
            disabled={currentPage === maxPreviewPage}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-charcoal hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <span className="hidden sm:inline">Next</span>
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
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
