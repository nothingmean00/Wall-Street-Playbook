"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, BookOpen, X, ZoomIn } from "lucide-react"

interface PreviewPage {
  pageNumber: number
  content: React.ReactNode
}

interface PlaybookPreviewProps {
  title: string
  pages: PreviewPage[]
  totalPages: number
}

export function PlaybookPreview({ title, pages, totalPages }: PlaybookPreviewProps) {
  const [currentPage, setCurrentPage] = useState(0)
  const [isExpanded, setIsExpanded] = useState(false)

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
    }
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
            Page {pages[currentPage].pageNumber} of {totalPages}
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
      <div className={`relative bg-gray-100 ${expanded ? 'p-8' : 'p-4'}`}>
        <div 
          className={`bg-white shadow-md mx-auto ${expanded ? 'max-w-2xl' : ''}`}
          style={{ 
            aspectRatio: expanded ? 'auto' : '8.5/11',
            minHeight: expanded ? '600px' : 'auto'
          }}
        >
          <div className={`${expanded ? 'p-12' : 'p-6'} h-full overflow-hidden relative`}>
            {pages[currentPage].content}
            
            {/* Fade overlay on last preview page */}
            {currentPage === pages.length - 1 && (
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/95 to-transparent flex items-end justify-center pb-4">
                <span className="text-sm text-charcoal/60 bg-white px-3 py-1 rounded-full border border-border">
                  Purchase to continue reading...
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-gray-50 px-4 py-3 flex items-center justify-between border-t border-gray-200">
        <button
          onClick={prevPage}
          disabled={currentPage === 0}
          className="flex items-center gap-1 text-sm text-charcoal/70 hover:text-navy disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronLeft className="h-4 w-4" />
          Previous
        </button>
        
        <div className="flex items-center gap-1">
          {pages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentPage ? 'bg-gold' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextPage}
          disabled={currentPage === pages.length - 1}
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

// PE Recruiting Playbook Preview Content - Matches actual PDF
export function PEPlaybookPreview() {
  const pages: PreviewPage[] = [
    {
      pageNumber: 1,
      content: (
        <div className="flex flex-col items-center justify-center h-full text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-charcoal/40 mb-4">Wall Street Playbook</p>
          <h1 className="text-2xl font-bold text-navy leading-tight">
            2026 PRIVATE<br />EQUITY<br />RECRUITING GUIDE
          </h1>
          <p className="mt-6 text-sm text-charcoal/60 max-w-xs">
            The Definitive Resource for Undergraduates, IB Analysts & Career Switchers
          </p>
          <div className="mt-6 text-xs text-charcoal/40 space-y-1">
            <p>Timelines • Technical Mastery • Behavioral Strategy</p>
            <p>Compensation • Exits</p>
          </div>
          <div className="mt-8 px-3 py-1 rounded border border-gold/30 bg-gold/10">
            <p className="text-xs font-semibold text-gold">2025-2026 Edition</p>
          </div>
          <p className="mt-8 text-xs text-charcoal/30">Page 1 of 42</p>
        </div>
      ),
    },
    {
      pageNumber: 2,
      content: (
        <div className="text-xs">
          <h2 className="text-base font-bold text-navy mb-4">TABLE OF CONTENTS</h2>
          <div className="space-y-3">
            <div>
              <p className="font-semibold text-navy text-xs mb-1">PART I: THE RECRUITING ECOSYSTEM</p>
              <div className="space-y-0.5 text-charcoal/70 pl-2">
                <div className="flex justify-between"><span>Chapter 1: Market Structure & 2026 Timeline Forecast</span><span>5</span></div>
                <div className="flex justify-between"><span>Chapter 2: The Headhunter Landscape</span><span>12</span></div>
                <div className="flex justify-between"><span>Chapter 3: Bank-to-Fund Pipelines</span><span>18</span></div>
                <div className="flex justify-between"><span>Chapter 4: Non-Traditional Paths</span><span>24</span></div>
                <div className="flex justify-between"><span>Chapter 5: Undergrad & Direct Programs</span><span>28</span></div>
              </div>
            </div>
            <div>
              <p className="font-semibold text-navy text-xs mb-1">PART II: TECHNICAL MASTERY</p>
              <div className="space-y-0.5 text-charcoal/70 pl-2">
                <div className="flex justify-between"><span>Chapter 6: LBO Mechanics from First Principles</span><span>33</span></div>
                <div className="flex justify-between"><span>Chapter 7: Paper LBO Framework</span><span>40</span></div>
                <div className="flex justify-between"><span>Chapter 8: Modeling Test Execution</span><span>45</span></div>
                <div className="flex justify-between"><span>Chapter 9: Technical Questions Deep Dive</span><span>50</span></div>
              </div>
            </div>
            <div>
              <p className="font-semibold text-navy text-xs mb-1">PART III-VII: BEHAVIORAL, STRATEGY, COMP & MORE</p>
              <div className="space-y-0.5 text-charcoal/70 pl-2">
                <div className="flex justify-between"><span>Chapters 10-20...</span><span>56-105</span></div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      pageNumber: 3,
      content: (
        <div className="text-xs">
          <h2 className="text-base font-bold text-navy mb-3">INTRODUCTION</h2>
          <p className="font-semibold text-navy mb-2">The State of PE Recruiting in 2026</p>
          <div className="space-y-2 text-charcoal/80 leading-relaxed">
            <p>
              Private equity recruiting has reached an inflection point. The 2024-2025 cycle pushed 
              on-cycle acceleration to its logical extreme—megafunds interviewing analysts who hadn't 
              completed their first week of training—before the system began to crack. Blackstone 
              boycotted the process entirely. Apollo withdrew for the 2027 class.
            </p>
            <p>
              This guide synthesizes 2023-2026 data from headhunter sources, WSO forums, industry 
              practitioners, and proprietary research to provide actionable intelligence that contradicts 
              or goes beyond mainstream advice from WSO, Mergers & Inquisitions, and Breaking Into Wall Street.
            </p>
            <div className="p-2 bg-gold/10 rounded border-l-2 border-gold my-3">
              <p className="font-semibold text-navy text-xs">KEY INSIGHT:</p>
              <p className="text-xs mt-1">
                The conventional "megafund or bust" mentality is counterproductive for most candidates. 
                70% of PE buyouts occur in the $25M-$1B range, yet most recruiting advice ignores this reality.
              </p>
            </div>
            <p className="font-semibold text-navy">Who This Guide Is For</p>
            <p><strong>IB Analysts:</strong> Whether you're at a bulge bracket, elite boutique, or middle-market bank, this guide maps your path to PE.</p>
            <p><strong>Undergraduates:</strong> Direct-to-PE programs are expanding. We cover every major analyst program.</p>
          </div>
        </div>
      ),
    },
    {
      pageNumber: 5,
      content: (
        <div className="text-xs">
          <p className="text-[10px] text-charcoal/40 mb-2">CHAPTER 2</p>
          <h2 className="text-base font-bold text-navy mb-3">The Headhunter Landscape</h2>
          <p className="font-semibold text-navy mb-2">The Seven Firms That Control PE Access</p>
          <p className="text-charcoal/80 leading-relaxed mb-3">
            Seven headhunting firms dominate PE placement in North America. Understanding their 
            specialties, coverage, and preferences is essential:
          </p>
          <p className="font-semibold text-gold text-xs mb-2">Tier 1: Blue-Chip Megafund Coverage</p>
          <div className="p-2 bg-navy/5 rounded border border-navy/10 mb-2">
            <p className="font-semibold text-navy">CPI (Cromwell Partners International)</p>
            <p className="text-[10px] text-charcoal/50">Founded: 1996 • Processes: 3,000 candidates annually</p>
            <p className="mt-1"><span className="text-gold font-medium">Unique factor:</span> ONLY headhunter that asks paper LBO questions in initial meetings</p>
            <p className="text-[10px] text-charcoal/50 mt-1">Coverage: Advent, H&F, Silver Lake, THL, American Securities, New Mountain, GTCR, Ares</p>
          </div>
          <div className="p-2 bg-navy/5 rounded border border-navy/10">
            <p className="font-semibold text-navy">Henkel Search Partners (HSP)</p>
            <p className="text-[10px] text-charcoal/50">Founded: 2011 by former Morgan Stanley MD</p>
            <p className="mt-1"><span className="text-gold font-medium">Reputation:</span> Consistently rated "most pleasant to work with"</p>
            <p className="text-[10px] text-charcoal/50 mt-1">Coverage: KKR (all groups), Carlyle, Warburg Pincus, Vista, CD&R, BC Partners, TPG</p>
          </div>
        </div>
      ),
    },
    {
      pageNumber: 6,
      content: (
        <div className="text-xs">
          <div className="p-2 bg-navy/5 rounded border border-navy/10 mb-3">
            <p className="font-semibold text-navy">SG Partners</p>
            <p className="text-[10px] text-charcoal/50">Founded: Early 1990s by Sheri Gellman</p>
            <p className="mt-1"><span className="text-gold font-medium">Unique coverage:</span> Primary access to Blackstone's main PE fund</p>
            <p className="text-[10px] text-charcoal/50 mt-1">Coverage: Blackstone (main PE), Sixth Street, Summit Partners, GIP, Crestview</p>
            <p className="mt-1 text-charcoal/70">Strategy: Essential for Blackstone access despite mixed reputation.</p>
          </div>
          
          <p className="font-semibold text-navy mb-2">A-List vs. B-List Segmentation</p>
          <p className="text-charcoal/80 mb-2">Headhunters maintain ranked candidate lists that determine which firms you're shown to:</p>
          
          <div className="p-2 bg-gold/10 rounded border border-gold/30 mb-2">
            <p className="font-semibold text-gold">A-List (Top 10-20%)</p>
            <p className="text-[10px] mt-1">GS/MS/EVR M&A from target school with 3.8+ GPA. Gets priority megafund slots, multiple firm options, and proactive headhunter advocacy.</p>
          </div>
          
          <div className="p-2 bg-navy/5 rounded border border-navy/10 mb-2">
            <p className="font-semibold text-navy">B-List (Next 30-40%)</p>
            <p className="text-[10px] mt-1">Remaining BB/EB analysts from good schools. Fills secondary megafund positions and UMM slots. Must work harder to stand out.</p>
          </div>

          <div className="p-2 bg-gold/10 rounded border-l-2 border-gold">
            <p className="font-semibold text-navy text-[10px]">KEY INSIGHT:</p>
            <p className="text-[10px] mt-1">Even "purely informational" headhunter calls are evaluative from minute one. Your profile impression sticks permanently.</p>
          </div>
        </div>
      ),
    },
  ]

  return (
    <PlaybookPreview
      title="2026 PE Recruiting Playbook"
      pages={pages}
      totalPages={42}
    />
  )
}
