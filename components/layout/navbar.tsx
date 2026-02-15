"use client"

import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { ChevronRight, ChevronDown } from "lucide-react"
import { Logo } from "@/components/ui/logo"

const interviewPrepLinks = [
  { name: "IB Interview Prep", href: "/investment-banking-interview-prep" },
  { name: "Technical Questions 2026", href: "/ib-technical-interview-2026" },
  { name: "DCF Interview Questions", href: "/dcf-interview-questions-2026" },
  { name: "LBO Interview Questions", href: "/lbo-interview-questions-2026" },
  { name: "M&A Interview Questions", href: "/ma-interview-questions-2026" },
  { name: "Valuation Methods", href: "/valuation-methods-investment-banking" },
  { name: "PE Interview Prep", href: "/pe-interview-prep-2026" },
  { name: "Accounting Questions", href: "/accounting-interview-questions-finance" },
]

const guidesLinks = [
  { name: "Non-Target to IB", href: "/non-target-investment-banking" },
  { name: "IB Recruiting 2026", href: "/investment-banking-recruiting-2026" },
  { name: "PE Recruiting 2026", href: "/private-equity-recruiting-2026" },
  { name: "Cold Email Templates", href: "/cold-email-templates-investment-banking" },
  { name: "Networking Playbook 2026", href: "/finance-networking-playbook-2026" },
  { name: "LBO Modeling Guide", href: "/lbo-modeling-guide" },
  { name: "DCF Model Guide", href: "/dcf-model-guide" },
  { name: "IB Resume Guide", href: "/investment-banking-resume" },
]

const navigation = [
  { name: "Playbooks", href: "/playbooks" },
  { name: "Interview Prep", href: "/investment-banking-interview-prep", dropdown: interviewPrepLinks },
  { name: "Guides", href: "/non-target-investment-banking", dropdown: guidesLinks },
  { name: "Resume Services", href: "/resume-services" },
  { name: "Jobs", href: "/jobs" },
  { name: "Blog", href: "/blog" },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleMouseEnter = (name: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current)
    setOpenDropdown(name)
  }

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setOpenDropdown(null)
    }, 150)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-navy/95 backdrop-blur-xl shadow-lg shadow-navy/10 py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <nav aria-label="Main navigation" className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2.5 sm:gap-3">
          <Logo className="h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0 transition-transform group-hover:scale-105" />
          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-bold tracking-tight text-white">
              Wall Street Playbook
            </span>
            <span className="text-[10px] uppercase tracking-widest text-gold/70 hidden sm:block">
              Finance Recruiting Prep
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-x-0.5">
          {navigation.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => item.dropdown ? handleMouseEnter(item.name) : undefined}
              onMouseLeave={item.dropdown ? handleMouseLeave : undefined}
            >
              <Link
                href={item.href}
                className="relative flex items-center gap-1 px-3 py-2 text-sm font-medium text-white/80 transition-colors duration-200 hover:text-white group"
              >
                {item.name}
                {item.dropdown && (
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${openDropdown === item.name ? 'rotate-180 text-gold' : 'text-white/40'}`} />
                )}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-3/4" />
              </Link>

              {/* Dropdown */}
              {item.dropdown && (
                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-200 ${
                    openDropdown === item.name
                      ? 'opacity-100 translate-y-0 pointer-events-auto'
                      : 'opacity-0 -translate-y-2 pointer-events-none'
                  }`}
                >
                  <div className="w-64 rounded-xl border border-white/10 bg-navy/95 backdrop-blur-xl shadow-2xl shadow-black/30 overflow-hidden">
                    <div className="p-2">
                      {item.dropdown.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                          onClick={() => setOpenDropdown(null)}
                        >
                          {link.name}
                          <ChevronRight className="h-3.5 w-3.5 text-white/20" />
                        </Link>
                      ))}
                    </div>
                    <div className="border-t border-white/5 p-2">
                      <Link
                        href={item.href}
                        className="flex items-center justify-between rounded-lg px-3 py-2.5 text-xs font-semibold text-gold hover:bg-gold/5 transition-colors"
                        onClick={() => setOpenDropdown(null)}
                      >
                        View all {item.name.toLowerCase()}
                        <ChevronRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex lg:items-center lg:gap-4">
          <Link
            href="/submit-resume?service=resume-review"
            className="group relative rounded-xl bg-gold px-6 py-2.5 text-sm font-semibold text-navy overflow-hidden transition-all hover:shadow-lg hover:shadow-gold/25"
          >
            <span className="relative z-10">Get Started</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
        </div>

        {/* Mobile menu button */}
        <button 
          type="button" 
          className="lg:hidden relative p-2 rounded-lg text-white hover:bg-white/10 transition-colors" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-nav-menu"
        >
          <span className="sr-only">{mobileMenuOpen ? "Close menu" : "Open menu"}</span>
          <div className="relative w-6 h-6">
            <span className={`absolute left-0 block w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'top-3 rotate-45' : 'top-1'}`} />
            <span className={`absolute left-0 top-3 block w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`absolute left-0 block w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'top-3 -rotate-45' : 'top-5'}`} />
          </div>
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        id="mobile-nav-menu"
        role="region"
        aria-label="Mobile navigation"
        className={`lg:hidden fixed inset-0 top-[72px] z-50 transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-navy-deep/80 backdrop-blur-xl"
          onClick={() => setMobileMenuOpen(false)}
        />
        
        {/* Menu content */}
        <div className={`relative bg-navy border-t border-white/10 transition-transform duration-300 max-h-[calc(100vh-72px)] overflow-y-auto ${mobileMenuOpen ? 'translate-y-0' : '-translate-y-4'}`}>
          <div className="px-6 py-6 space-y-1">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <>
                    <button
                      className="group flex w-full items-center justify-between py-3.5 px-4 rounded-xl text-lg font-medium text-white/80 hover:text-white hover:bg-white/5 transition-all"
                      onClick={() => setMobileExpanded(mobileExpanded === item.name ? null : item.name)}
                    >
                      {item.name}
                      <ChevronDown className={`w-5 h-5 text-white/30 transition-transform duration-200 ${mobileExpanded === item.name ? 'rotate-180 text-gold' : ''}`} />
                    </button>
                    {mobileExpanded === item.name && (
                      <div className="ml-4 mb-2 space-y-0.5 border-l border-white/10 pl-4">
                        {item.dropdown.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="block py-2.5 px-3 rounded-lg text-sm text-white/60 hover:text-white hover:bg-white/5 transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {link.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="group flex items-center justify-between py-3.5 px-4 rounded-xl text-lg font-medium text-white/80 hover:text-white hover:bg-white/5 transition-all"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                    <ChevronRight className="w-5 h-5 text-white/30 group-hover:text-gold group-hover:translate-x-1 transition-all" />
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4 mt-4 border-t border-white/10">
              <Link
                href="/submit-resume?service=resume-review"
                className="flex items-center justify-center gap-2 rounded-xl bg-gold px-6 py-4 text-base font-semibold text-navy transition-all hover:bg-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Your Resume Reviewed
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
