"use client"

import Link from "next/link"
import { Logo } from "@/components/ui/logo"
import { EmailCapture } from "@/components/email-capture"

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
    <footer className="bg-charcoal">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-6">
          {/* Brand column */}
          <div className="col-span-1 sm:col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
              <Logo className="h-8 w-8" />
              <span className="text-lg font-semibold text-white">Wall Street Playbook</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/50">
              Tactical preparation materials for candidates targeting investment banking, private equity, and hedge fund
              roles.
            </p>
            
            {/* Email Capture */}
            <div className="mt-6">
              <EmailCapture variant="footer" />
            </div>
          </div>

          {/* Playbooks */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold">Playbooks</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-white/60 transition-colors hover:text-gold">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold">Services</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-white/60 transition-colors hover:text-gold">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold">Company</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-white/60 transition-colors hover:text-gold">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold">Legal</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-white/60 transition-colors hover:text-gold">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-white/40">
              {new Date().getFullYear()} Wall Street Playbook. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-xs text-white/40">
              <span>Wall Street Playbook is not affiliated with any investment bank or financial institution.</span>
              <span className="hidden sm:inline">·</span>
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
