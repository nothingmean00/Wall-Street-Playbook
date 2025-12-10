import type { Metadata } from "next"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { resumeServices } from "@/lib/data"
import { Check, Clock, FileText, Pencil, ArrowRight, Shield, Users, Award, BadgeCheck } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Investment Banking Resume Review & Rewrite Services",
  description:
    "Professional resume review and rewrite services optimized for investment banking, private equity, and hedge fund recruiting. Expert feedback with money-back guarantee.",
  keywords: [
    "investment banking resume review",
    "IB resume rewrite",
    "finance resume services",
    "wall street resume",
    "PE resume optimization",
    "banking resume feedback",
  ],
  openGraph: {
    title: "Investment Banking Resume Review & Rewrite | Wall Street Playbook",
    description:
      "Professional resume services optimized for IB, PE, and hedge fund recruiting. Expert feedback with money-back guarantee.",
    url: "https://wallstreetplaybook.org/resume-services",
  },
  alternates: {
    canonical: "https://wallstreetplaybook.org/resume-services",
  },
}

const comparisonPoints = [
  { feature: "Line-by-line feedback", review: true, rewrite: true },
  { feature: "Specific rewrite suggestions", review: true, rewrite: true },
  { feature: "Complete resume reconstruction", review: false, rewrite: true },
  { feature: "Experience repositioning", review: false, rewrite: true },
  { feature: "Bullet point optimization", review: "Suggestions", rewrite: "Done for you" },
  { feature: "Revision rounds", review: "1 Q&A", rewrite: "2 full rounds" },
  { feature: "Final document delivery", review: "Feedback doc", rewrite: "PDF + Word" },
]

export default function ResumeServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Page Header */}
        <section className="bg-navy py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-gold">Professional Services</p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">Resume Services</h1>
              <p className="mt-6 text-lg leading-relaxed text-white/70">
                Your resume is your first impression. We ensure it positions you as a top candidate from the first
                glance.
              </p>

              <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-2">
                <BadgeCheck className="h-5 w-5 text-gold" />
                <span className="text-sm font-medium text-gold">100% Money-Back Guarantee</span>
              </div>

              {/* Stats */}
              <div className="mt-12 grid grid-cols-3 gap-8 border-t border-white/10 pt-12">
                <div className="text-center">
                  <div className="text-lg font-semibold text-gold">Line-by-Line</div>
                  <div className="mt-1 text-sm text-white/60">Detailed Analysis</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-gold">3-7 Days</div>
                  <div className="mt-1 text-sm text-white/60">Turnaround</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-gold">IB-Focused</div>
                  <div className="mt-1 text-sm text-white/60">Formatting Standards</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-off-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-2">
              {resumeServices.map((service, index) => {
                const Icon = service.id === "resume-review" ? FileText : Pencil
                const isRecommended = index === 1

                return (
                  <div
                    key={service.id}
                    className={`relative flex flex-col overflow-hidden rounded-xl border bg-white shadow-sm ${
                      isRecommended ? "border-gold lg:scale-105 lg:shadow-xl" : "border-border"
                    }`}
                  >
                    {/* Recommended badge */}
                    {isRecommended && (
                      <div className="bg-gold px-4 py-2 text-center">
                        <span className="text-sm font-semibold text-navy">Recommended for Competitive Roles</span>
                      </div>
                    )}

                    {/* Card Header */}
                    <div className="border-b border-border p-8">
                      <div className="flex items-start gap-4">
                        <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-navy">
                          <Icon className="h-7 w-7 text-gold" />
                        </div>
                        <div className="flex-1">
                          <h2 className="text-2xl font-bold text-navy">{service.title}</h2>
                          <div className="mt-2 flex items-center gap-4">
                            <div className="flex items-center gap-1.5 text-sm text-charcoal/60">
                              <Clock className="h-4 w-4" />
                              <span>{service.turnaround}</span>
                            </div>
                            <div className="text-2xl font-bold text-gold">${service.price}</div>
                          </div>
                        </div>
                      </div>
                      <p className="mt-4 text-sm leading-relaxed text-charcoal/70">{service.description}</p>
                    </div>

                    {/* What's Included */}
                    <div className="flex-grow p-8">
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-charcoal/50">
                        What's Included
                      </h3>
                      <ul className="mt-4 space-y-3">
                        {service.includes.map((item, i) => (
                          <li key={i} className="flex gap-3">
                            <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gold/10">
                              <Check className="h-3 w-3 text-gold" />
                            </div>
                            <span className="text-sm leading-relaxed text-charcoal/80">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA */}
                    <div className="border-t border-border bg-off-white/50 p-8">
                      <Link
                        href={`/submit-resume?service=${service.id}`}
                        className={`w-full rounded-lg py-4 text-sm font-semibold transition-colors flex items-center justify-center gap-2 ${
                          isRecommended
                            ? "bg-gold text-navy hover:bg-navy hover:text-white"
                            : "bg-navy text-white hover:bg-gold hover:text-navy"
                        }`}
                      >
                        Get Started
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Comparison Table */}
            <div className="mx-auto mt-20 max-w-4xl">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-navy">Compare Services</h2>
                <div className="mt-2 flex justify-center">
                  <div className="h-1 w-10 bg-gold" />
                </div>
              </div>

              <div className="mt-10 overflow-hidden rounded-xl border border-border bg-white shadow-sm">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border bg-off-white/50">
                      <th className="px-6 py-4 text-left text-sm font-semibold text-navy">Feature</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-navy">Resume Review</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-navy">Resume Rewrite</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonPoints.map((point, index) => (
                      <tr key={index} className="border-b border-border last:border-0">
                        <td className="px-6 py-4 text-sm text-charcoal/80">{point.feature}</td>
                        <td className="px-6 py-4 text-center">
                          {typeof point.review === "boolean" ? (
                            point.review ? (
                              <Check className="mx-auto h-5 w-5 text-gold" />
                            ) : (
                              <span className="text-charcoal/30">—</span>
                            )
                          ) : (
                            <span className="text-sm text-charcoal/70">{point.review}</span>
                          )}
                        </td>
                        <td className="px-6 py-4 text-center">
                          {typeof point.rewrite === "boolean" ? (
                            point.rewrite ? (
                              <Check className="mx-auto h-5 w-5 text-gold" />
                            ) : (
                              <span className="text-charcoal/30">—</span>
                            )
                          ) : (
                            <span className="text-sm font-medium text-gold">{point.rewrite}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Process Section */}
            <div className="mx-auto mt-20 max-w-5xl">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-navy">How It Works</h2>
                <div className="mt-2 flex justify-center">
                  <div className="h-1 w-10 bg-gold" />
                </div>
              </div>

              <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-4">
                {[
                  {
                    step: "01",
                    title: "Submit",
                    description: "Upload your resume and share context on your target roles.",
                  },
                  {
                    step: "02",
                    title: "Analysis",
                    description: "We analyze against frameworks from successful placements.",
                  },
                  {
                    step: "03",
                    title: "Optimize",
                    description: "Receive detailed feedback or your rewritten resume.",
                  },
                  {
                    step: "04",
                    title: "Apply",
                    description: "Start submitting to your target firms with confidence.",
                  },
                ].map((item, index) => (
                  <div key={item.step} className="relative text-center">
                    {index < 3 && <div className="absolute top-5 left-1/2 hidden h-0.5 w-full bg-gold/30 md:block" />}
                    <div className="relative mx-auto flex h-10 w-10 items-center justify-center rounded-full border-2 border-gold bg-white">
                      <span className="text-sm font-bold text-gold">{item.step}</span>
                    </div>
                    <h4 className="mt-4 text-base font-semibold text-navy">{item.title}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-charcoal/70">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="bg-navy py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <div className="mb-12 rounded-xl border border-gold/20 bg-gold/5 p-8 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold/10">
                  <BadgeCheck className="h-8 w-8 text-gold" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-white">100% Money-Back Guarantee</h3>
                <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/70">
                  If you're not completely satisfied with your resume review or rewrite, we'll refund your payment in
                  full. No questions asked. We stand behind the quality of our work.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
                <div className="text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gold/10">
                    <Shield className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-white">Confidential</h3>
                  <p className="mt-2 text-sm text-white/60">
                    Your information is never shared or stored beyond delivery.
                  </p>
                </div>
                <div className="text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gold/10">
                    <Users className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-white">Expert Review</h3>
                  <p className="mt-2 text-sm text-white/60">
                    Reviewed by professionals with direct finance recruiting experience.
                  </p>
                </div>
                <div className="text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gold/10">
                    <Award className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-white">Results-Focused</h3>
                  <p className="mt-2 text-sm text-white/60">Optimized for getting callbacks, not just looking good.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-off-white py-16">
          <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
            <h2 className="text-2xl font-bold text-navy sm:text-3xl">Not Sure Which Service You Need?</h2>
            <p className="mt-4 text-base text-charcoal/70">
              If you have limited time or your resume needs significant repositioning, go with Resume Rewrite. If you
              want to learn and apply changes yourself, Resume Review gives you the roadmap.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/playbooks" className="text-sm font-semibold text-navy hover:text-gold">
                Or browse our Playbooks instead →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
