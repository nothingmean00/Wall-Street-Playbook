"use client"

import { useState } from "react"
import { Document, Page, pdfjs } from "react-pdf"
import { ChevronLeft, ChevronRight, BookOpen, X, ZoomIn, Loader2 } from "lucide-react"
import "react-pdf/dist/Page/AnnotationLayer.css"
import "react-pdf/dist/Page/TextLayer.css"

// Set up PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`

interface PlaybookPreviewProps {
  title: string
  pdfUrl: string
  previewPages?: number // Number of pages to preview (default 5)
  totalPages: number
}

export function PlaybookPreview({ title, pdfUrl, previewPages = 5, totalPages }: PlaybookPreviewProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const [isExpanded, setIsExpanded] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

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

  const PreviewContent = ({ expanded = false }: { expanded?: boolean }) => (
    <div className={`bg-white rounded-lg shadow-lg overflow-hidden ${expanded ? 'max-w-4xl w-full max-h-[90vh]' : ''}`}>
      {/* Header */}
      <div className="bg-navy px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BookOpen className="h-4 w-4 text-gold" />
          <span className="text-sm font-medium text-white">Preview: {title}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-white/60">
            Page {currentPage} of {totalPages} ({maxPreviewPage} preview pages)
          </span>
          {expanded ? (
            <button
              onClick={() => setIsExpanded(false)}
              className="ml-2 p-1 rounded hover:bg-white/10 transition-colors"
            >
              <X className="h-4 w-4 text-white/60" />
            </button>
          ) : (
            <button
              onClick={() => setIsExpanded(true)}
              className="ml-2 p-1 rounded hover:bg-white/10 transition-colors"
              title="Expand preview"
            >
              <ZoomIn className="h-4 w-4 text-white/60" />
            </button>
          )}
        </div>
      </div>

      {/* Page Content */}
      <div className={`relative bg-gray-100 ${expanded ? 'p-8' : 'p-4'} flex justify-center`}>
        <div className="relative">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
              <Loader2 className="h-8 w-8 animate-spin text-gold" />
            </div>
          )}
          
          {error ? (
            <div className="flex items-center justify-center p-12 text-charcoal/60">
              {error}
            </div>
          ) : (
            <Document
              file={pdfUrl}
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={onDocumentLoadError}
              loading={null}
            >
              <Page
                pageNumber={currentPage}
                width={expanded ? 600 : 350}
                renderTextLayer={false}
                renderAnnotationLayer={false}
              />
            </Document>
          )}
          
          {/* Fade overlay on last preview page */}
          {currentPage === maxPreviewPage && !error && (
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/95 to-transparent flex items-end justify-center pb-4">
              <span className="text-sm text-charcoal/60 bg-white px-3 py-1 rounded-full border border-border shadow-sm">
                Purchase to read all {totalPages} pages...
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-gray-50 px-4 py-3 flex items-center justify-between border-t border-gray-200">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="flex items-center gap-1 text-sm text-charcoal/70 hover:text-navy disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronLeft className="h-4 w-4" />
          Previous
        </button>
        
        <div className="flex items-center gap-1">
          {Array.from({ length: maxPreviewPage }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-2 h-2 rounded-full transition-colors ${
                page === currentPage ? 'bg-gold' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextPage}
          disabled={currentPage === maxPreviewPage}
          className="flex items-center gap-1 text-sm text-charcoal/70 hover:text-navy disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          Next
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  )

  return (
    <>
      {/* Inline Preview */}
      <PreviewContent />

      {/* Expanded Modal */}
      {isExpanded && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
          onClick={() => setIsExpanded(false)}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <PreviewContent expanded />
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
