import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { LeadMagnetCapture } from "@/components/lead-magnet-capture"
import { ArrowRight, CheckCircle, FileSpreadsheet, Clock, Calculator, Brain } from "lucide-react"

export const metadata: Metadata = {
  title: "Free Paper LBO Template | PE Interview Prep 2026",
  description:
    "Download the free Paper LBO template used by PE candidates in 2026 on-cycle recruiting. Includes IRR cheat sheet, quick reference formulas, and practice problems.",
  keywords: [
    "paper LBO template",
    "free LBO template",
    "PE interview template",
    "paper LBO cheat sheet",
    "LBO IRR calculator",
    "PE interview prep free",
  ],
  openGraph: {
    title: "Free Paper LBO Template | PE Interview Prep 2026",
    description:
      "The Paper LBO template used by PE candidates in 2026 on-cycle recruiting. Free download.",
    url: "https://wallstreetplaybook.org/paper-lbo-template",
  },
  alternates: {
    canonical: "https://wallstreetplaybook.org/paper-lbo-template",
  },
}

const templateIncludes = [
  {
    title: "Paper LBO Framework",
    description: "The exact 5-step process to solve any paper LBO in 10 minutes or less",
    icon: Calculator,
  },
  {
    title: "IRR Cheat Sheet",
    description: "Memorize-ready table: MOIC to IRR conversion for 3, 4, and 5-year holds",
    icon: Brain,
  },
  {
    title: "Quick Math Shortcuts",
    description: "Rule of 72/114/144 and compound growth approximations",
    icon: Clock,
  },
  {
    title: "3 Practice Problems",
    description: "Real paper LBO prompts with full solutions and explanations",
    icon: FileSpreadsheet,
  },
]

const whyThisTemplate = [
  "Same framework used by candidates who landed KKR, Blackstone, Apollo",
  "Tested in actual 2025-2026 on-cycle interviews",
  "Includes the shortcuts interviewers expect you to know",
  "Print-ready format for practice reps",
]

export default function PaperLBOTemplatePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow pt-0">
        {/* Hero Section */}
        <section className="relative bg-navy-deep pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-navy-deep via-navy to-navy-deep" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,_rgba(201,168,110,0.15),_transparent)]" />
          </div>
          
          <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 mb-6">
                  <FileSpreadsheet className="w-4 h-4 text-gold" />
                  <span className="text-xs font-semibold uppercase tracking-widest text-gold">Free Download</span>
                </div>
                
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                  Paper LBO <span className="text-gradient-gold">Template</span>
                </h1>
                <p className="mt-6 text-lg leading-relaxed text-white/60">
                  The exact framework and cheat sheet used by candidates who landed offers at 
                  megafunds in 2025-2026 on-cycle recruiting. Solve any paper LBO in 10 minutes.
                </p>

                <div className="mt-8 space-y-3">
                  {whyThisTemplate.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-white/80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <LeadMagnetCapture
                  magnetName="Paper LBO Template"
                  magnetDescription="Get the printable PDF with the 5-step framework, IRR cheat sheet, quick math shortcuts, and 3 practice problems with solutions."
                  buttonText="Get Free Template"
                />
              </div>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="bg-cream py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center mb-12">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">What's in the Template</h2>
              <div className="mt-2 h-1 w-20 bg-gold mx-auto" />
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {templateIncludes.map((item) => (
                <div key={item.title} className="rounded-2xl bg-white p-6 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy mb-4">
                    <item.icon className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="font-bold text-navy">{item.title}</h3>
                  <p className="mt-2 text-sm text-charcoal/60">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Preview Section */}
        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">IRR Cheat Sheet Preview</h2>
              <div className="mt-2 h-1 w-20 bg-gold" />
              <p className="mt-4 text-charcoal/70">
                Memorize this table. It's the fastest way to convert MOIC to IRR in your head.
              </p>

              <div className="mt-12 overflow-hidden rounded-2xl border border-border">
                <table className="w-full">
                  <thead>
                    <tr className="bg-navy text-white">
                      <th className="px-6 py-4 text-left text-sm font-bold">MOIC</th>
                      <th className="px-6 py-4 text-left text-sm font-bold">3-Year IRR</th>
                      <th className="px-6 py-4 text-left text-sm font-bold">4-Year IRR</th>
                      <th className="px-6 py-4 text-left text-sm font-bold">5-Year IRR</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { moic: "1.5x", y3: "14%", y4: "11%", y5: "8%" },
                      { moic: "2.0x", y3: "26%", y4: "19%", y5: "15%" },
                      { moic: "2.5x", y3: "36%", y4: "26%", y5: "20%" },
                      { moic: "3.0x", y3: "44%", y4: "32%", y5: "25%" },
                      { moic: "3.5x", y3: "52%", y4: "37%", y5: "28%" },
                    ].map((row, i) => (
                      <tr key={row.moic} className={`${i !== 4 ? 'border-b border-border' : ''} ${i === 1 ? 'bg-gold/10' : ''}`}>
                        <td className="px-6 py-4 text-sm font-bold text-navy">{row.moic}</td>
                        <td className="px-6 py-4 text-sm text-charcoal/70">{row.y3}</td>
                        <td className="px-6 py-4 text-sm text-charcoal/70">{row.y4}</td>
                        <td className="px-6 py-4 text-sm text-gold font-medium">{row.y5}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-8 rounded-xl bg-navy/10 p-6">
                <h3 className="font-bold text-navy mb-2">Quick Reference: Rule of 72</h3>
                <p className="text-sm text-charcoal/70">
                  Years to double = 72 ÷ IRR. So 15% IRR ≈ 4.8 years to 2x. 
                  <br/>
                  <span className="text-gold font-medium">The full template includes Rules of 114 and 144 for 3x and 4x.</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Second CTA */}
        <section className="bg-cream py-20 lg:py-28">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <div className="rounded-2xl bg-navy p-8 lg:p-12 text-center">
              <h2 className="text-2xl font-bold text-white sm:text-3xl">Get Your Free Paper LBO Template</h2>
              <p className="mt-4 text-white/60">
                Join 5,000+ finance professionals preparing for PE recruiting.
              </p>
              
              <div className="mt-8 max-w-md mx-auto">
                <LeadMagnetCapture
                  magnetName="Paper LBO Template"
                  magnetDescription="Printable PDF with framework, IRR cheat sheet, and practice problems."
                  buttonText="Download Free Template"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Related Resources */}
        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-2xl font-bold text-navy mb-8">Continue Your PE Prep</h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <Link href="/blog/paper-lbo-step-by-step-example" className="group rounded-xl border border-border bg-off-white/50 p-4 hover:border-gold transition-colors">
                  <p className="font-semibold text-navy group-hover:text-gold transition-colors">Paper LBO Guide</p>
                  <p className="mt-1 text-sm text-charcoal/60">Full walkthrough with worked examples</p>
                </Link>
                <Link href="/pe-interview-prep-2026" className="group rounded-xl border border-border bg-off-white/50 p-4 hover:border-gold transition-colors">
                  <p className="font-semibold text-navy group-hover:text-gold transition-colors">PE Interview Prep 2026</p>
                  <p className="mt-1 text-sm text-charcoal/60">Technical & behavioral questions</p>
                </Link>
                <Link href="/playbooks/pe-recruiting-playbook" className="group rounded-xl border border-border bg-gold/10 p-4 hover:border-gold transition-colors">
                  <p className="font-semibold text-navy group-hover:text-gold transition-colors">2026 PE Playbook</p>
                  <p className="mt-1 text-sm text-charcoal/60">Complete recruiting guide — $97</p>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
