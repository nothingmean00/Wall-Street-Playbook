"use client"

import Link from "next/link"
import { Logo } from "@/components/ui/logo"
import { EmailCapture } from "@/components/email-capture"
import { ArrowUpRight } from "lucide-react"

const footerLinks = {
  products: [
    { name: "All Playbooks", href: "/playbooks" },
    { name: "IB Technical Guide", href: "/playbooks/ib-technical-guide" },
    { name: "PE Recruiting Playbook", href: "/playbooks/pe-recruiting-playbook" },
    { name: "Networking & Cold Email", href: "/playbooks/networking-cold-email-playbook" },
    { name: "LBO Modeling Course", href: "/playbooks/lbo-modeling-course" },
  ],
  services: [
    { name: "Resume Review", href: "/resume-services" },
    { name: "Resume Rewrite", href: "/resume-services" },
  ],
  resources: [
    { name: "Jobs & Internships", href: "/jobs" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
}

export function Footer() {
  return (
    <footer className="relative bg-navy-deep overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gold/3 rounded-full blur-3xl" />
      </div>
      
      {/* Top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      
      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-6">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="group flex items-center gap-3">
              <Logo className="h-10 w-10 transition-transform group-hover:scale-105" />
              <div>
                <span className="text-xl font-bold text-white">Wall Street Playbook</span>
                <p className="text-xs uppercase tracking-widest text-gold/60">Finance Recruiting Prep</p>
              </div>
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-white/50 max-w-sm">
              Tactical preparation materials for candidates targeting investment banking, private equity, and hedge fund roles.
            </p>
            
            {/* Email Capture */}
            <div className="mt-8">
              <p className="text-sm font-semibold text-white mb-3">Get recruiting insights</p>
              <EmailCapture variant="footer" />
            </div>
          </div>

          {/* Playbooks */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-gold">Playbooks</h3>
            <ul className="mt-5 space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="group flex items-center gap-1 text-sm text-white/50 transition-colors hover:text-gold"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-gold">Services</h3>
            <ul className="mt-5 space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="group flex items-center gap-1 text-sm text-white/50 transition-colors hover:text-gold"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-gold">Company</h3>
            <ul className="mt-5 space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="group flex items-center gap-1 text-sm text-white/50 transition-colors hover:text-gold"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-gold">Legal</h3>
            <ul className="mt-5 space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="group flex items-center gap-1 text-sm text-white/50 transition-colors hover:text-gold"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-white/30">
              © {new Date().getFullYear()} Wall Street Playbook. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-xs text-white/30">
              <span>Not affiliated with any investment bank or financial institution.</span>
              <span className="hidden sm:inline text-white/20">·</span>
              <a 
                href="https://techsalesplaybook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/50 hover:text-gold transition-colors"
              >
                Tech Sales Playbook
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
