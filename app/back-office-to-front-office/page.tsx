import type { Metadata } from "next"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import Link from "next/link"
import { ArrowRight, CheckCircle, AlertTriangle, ArrowUpRight, Building, Target } from "lucide-react"

export const metadata: Metadata = {
  title: "Back Office to Front Office | How to Make the Move in Finance",
  description:
    "Stuck in operations, middle office, or back office? Here's the realistic path to front office roles in trading, banking, and sales—and why it's harder than you think.",
  keywords: [
    "back office to front office",
    "middle office to front office",
    "operations to trading",
    "back office to investment banking",
    "move to front office",
    "operations to sales trading",
    "finance career change",
    "back office exit",
  ],
  openGraph: {
    title: "Back Office to Front Office | Wall Street Playbook",
    description: "The realistic path from operations to revenue-generating roles.",
    url: "https://wallstreetplaybook.org/back-office-to-front-office",
    images: [{ url: "https://wallstreetplaybook.org/og-recruiting.jpg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://wallstreetplaybook.org/back-office-to-front-office",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://wallstreetplaybook.org/og-recruiting.jpg"],
  },
}

export default function BackOfficeToFrontOfficePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-navy pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Back Office to Front Office: <span className="text-gold">The Real Talk</span>
            </h1>
            <p className="mt-6 text-lg text-white/70">
              It's possible. It's also significantly harder than most people realize. Here's the honest path.
            </p>
          </div>
        </section>

        {/* Reality Check */}
        <section className="bg-cream py-16">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <div className="rounded-xl bg-white p-8 shadow-sm">
              <div className="flex items-start gap-4">
                <AlertTriangle className="h-6 w-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl font-bold text-navy">The Uncomfortable Truth</h2>
                  <p className="mt-2 text-charcoal/70">
                    Banks prefer to hire entire classes of analysts through structured recruiting rather than 
                    evaluating internal transfers case-by-case. Moving from back office to front office at the 
                    same bank is often harder than getting hired externally at a different firm.
                  </p>
                  <p className="mt-4 text-charcoal/70">
                    That doesn't mean it's impossible. It means you need a strategy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why It's Hard */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-navy">Why This Move Is Difficult</h2>
            <div className="mt-2 h-1 w-16 bg-gold" />

            <div className="mt-10 space-y-4">
              {[
                {
                  title: "Physical & Organizational Separation",
                  desc: "At major banks, front and back office are often on different floors, buildings, or even cities. You don't naturally build relationships with front office managers.",
                },
                {
                  title: "Perception Problem",
                  desc: "Fair or not, front office managers wonder: 'If you were capable of doing this job, why didn't you get hired here in the first place?' You'll have to overcome this bias.",
                },
                {
                  title: "No Structured Path",
                  desc: "There's no 'back office to front office program.' Each move is negotiated individually, which means navigating politics and finding a sponsor.",
                },
                {
                  title: "Regulatory Barriers",
                  desc: "Some moves (like operations to trading) have compliance implications. Banks are cautious about internal moves that could create conflicts.",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-lg bg-off-white">
                  <span className="text-red-500 font-bold">✕</span>
                  <div>
                    <p className="font-medium text-navy">{item.title}</p>
                    <p className="text-sm text-charcoal/70 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What Actually Works */}
        <section className="bg-navy py-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white">What Actually Works</h2>
            <div className="mt-2 h-1 w-16 bg-gold" />

            <div className="mt-10 space-y-8">
              {/* Strategy 1 */}
              <div className="rounded-xl bg-white/5 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-8 w-8 rounded-full bg-gold flex items-center justify-center text-navy font-bold">1</div>
                  <h3 className="text-lg font-semibold text-white">Get a Role Adjacent to Front Office</h3>
                </div>
                <p className="text-white/70 text-sm mb-4">
                  Some back/middle office roles have daily interaction with front office. These are your bridge.
                </p>
                <ul className="space-y-2 text-sm text-white/60">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                    <span><strong className="text-white">Trade Support</strong> — Daily interaction with traders</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                    <span><strong className="text-white">Sales Support</strong> — Work directly with salespeople</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                    <span><strong className="text-white">Trading Assistant</strong> — Often converts to trader</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                    <span><strong className="text-white">Product Control</strong> — Close to traders, understands P&L</span>
                  </li>
                </ul>
              </div>

              {/* Strategy 2 */}
              <div className="rounded-xl bg-white/5 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-8 w-8 rounded-full bg-gold flex items-center justify-center text-navy font-bold">2</div>
                  <h3 className="text-lg font-semibold text-white">Move Externally to a Smaller Firm</h3>
                </div>
                <p className="text-white/70 text-sm mb-4">
                  Boutiques and smaller banks have less rigid separation. Your back office experience at Goldman 
                  can become a front office role at a regional firm.
                </p>
                <ul className="space-y-2 text-sm text-white/60">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                    <span>Regional boutiques are more flexible about backgrounds</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                    <span>Your big bank experience has cache at smaller firms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                    <span>Less structured = more willing to take a chance</span>
                  </li>
                </ul>
              </div>

              {/* Strategy 3 */}
              <div className="rounded-xl bg-white/5 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-8 w-8 rounded-full bg-gold flex items-center justify-center text-navy font-bold">3</div>
                  <h3 className="text-lg font-semibold text-white">Build Relationships Obsessively</h3>
                </div>
                <p className="text-white/70 text-sm mb-4">
                  If you stay at your current bank, you need a front office sponsor. This requires intentional networking.
                </p>
                <ul className="space-y-2 text-sm text-white/60">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                    <span>Find reasons to interact with front office daily</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                    <span>Volunteer for projects that cross the divide</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                    <span>Find a mentor in front office who will advocate for you</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                    <span>Make your ambition known (professionally) so you're considered for openings</span>
                  </li>
                </ul>
              </div>

              {/* Strategy 4 */}
              <div className="rounded-xl bg-white/5 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-8 w-8 rounded-full bg-gold flex items-center justify-center text-navy font-bold">4</div>
                  <h3 className="text-lg font-semibold text-white">MBA as a Reset</h3>
                </div>
                <p className="text-white/70 text-sm mb-4">
                  A top MBA lets you recruit for front office roles as if your back office experience didn't exist. 
                  It's the nuclear option—expensive but effective.
                </p>
                <ul className="space-y-2 text-sm text-white/60">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                    <span>Banks recruit MBAs for associate roles regardless of prior function</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                    <span>Your ops experience becomes "I understand how banks work"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                    <span>Worth it if other paths aren't working after 2-3 years of trying</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Easiest Transitions */}
        <section className="bg-cream py-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-navy">Easiest vs. Hardest Transitions</h2>
            <div className="mt-2 h-1 w-16 bg-gold" />

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="rounded-xl bg-green-50 border border-green-200 p-6">
                <h3 className="font-semibold text-green-800 mb-4">More Feasible</h3>
                <ul className="space-y-3 text-sm text-green-700">
                  <li className="flex items-start gap-2">
                    <ArrowUpRight className="h-4 w-4 flex-shrink-0 mt-0.5" />
                    <span>Trading Assistant → Trader</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowUpRight className="h-4 w-4 flex-shrink-0 mt-0.5" />
                    <span>Sales Support → Sales</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowUpRight className="h-4 w-4 flex-shrink-0 mt-0.5" />
                    <span>Product Control → Trading (same desk)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowUpRight className="h-4 w-4 flex-shrink-0 mt-0.5" />
                    <span>Move to smaller firm in front office role</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl bg-red-50 border border-red-200 p-6">
                <h3 className="font-semibold text-red-800 mb-4">Very Difficult</h3>
                <ul className="space-y-3 text-sm text-red-700">
                  <li className="flex items-start gap-2">
                    <span className="flex-shrink-0">✕</span>
                    <span>Generic Operations → Investment Banking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="flex-shrink-0">✕</span>
                    <span>IT/Technology → Front Office (without quant skills)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="flex-shrink-0">✕</span>
                    <span>Compliance → Revenue Role</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="flex-shrink-0">✕</span>
                    <span>Any back office role at major bank hub (NY, London) — too siloed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-navy">Realistic Timeline</h2>
            <div className="mt-2 h-1 w-16 bg-gold" />

            <div className="mt-10 space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-lg bg-off-white">
                <div className="h-8 w-8 rounded-full bg-navy flex items-center justify-center text-white text-sm font-bold flex-shrink-0">6m</div>
                <div>
                  <p className="font-medium text-navy">Best case (trading assistant → trader at same firm)</p>
                  <p className="text-sm text-charcoal/70 mt-1">You have a sponsor, there's an opening, and you're ready</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-off-white">
                <div className="h-8 w-8 rounded-full bg-navy flex items-center justify-center text-white text-sm font-bold flex-shrink-0">1-2y</div>
                <div>
                  <p className="font-medium text-navy">Typical case (lateral to smaller firm)</p>
                  <p className="text-sm text-charcoal/70 mt-1">Build experience, network externally, find the right opportunity</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-off-white">
                <div className="h-8 w-8 rounded-full bg-navy flex items-center justify-center text-white text-sm font-bold flex-shrink-0">3-4y</div>
                <div>
                  <p className="font-medium text-navy">MBA route</p>
                  <p className="text-sm text-charcoal/70 mt-1">Apply, attend 2-year program, recruit during school</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-navy py-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-white">
              Ready to Reposition for Front Office Roles?
            </h2>
            <p className="mt-4 text-white/60">
              Your resume needs to bridge the gap between where you are and where you want to be.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/submit-resume?service=resume-rewrite"
                className="group flex items-center gap-2 rounded-xl bg-gold px-8 py-4 text-base font-semibold text-navy hover:bg-white transition-colors"
              >
                Get Resume Rewrite — $497
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
