"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, ChevronRight } from "lucide-react"
import { Logo } from "@/components/ui/logo"

const navigation = [
  { name: "Resume Services", href: "/resume-services" },
  { name: "Jobs", href: "/jobs" },
  { name: "Blog", href: "/blog" },
  { name: "Playbooks", href: "/playbooks" },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
        <div className="hidden lg:flex lg:items-center lg:gap-x-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative px-4 py-2 text-sm font-medium text-white/80 transition-colors duration-200 hover:text-white group"
            >
              {item.name}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-3/4" />
            </Link>
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
        <div className={`relative bg-navy border-t border-white/10 transition-transform duration-300 ${mobileMenuOpen ? 'translate-y-0' : '-translate-y-4'}`}>
          <div className="px-6 py-8 space-y-2">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className="group flex items-center justify-between py-4 px-4 rounded-xl text-lg font-medium text-white/80 hover:text-white hover:bg-white/5 transition-all"
                onClick={() => setMobileMenuOpen(false)}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.name}
                <ChevronRight className="w-5 h-5 text-white/30 group-hover:text-gold group-hover:translate-x-1 transition-all" />
              </Link>
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
