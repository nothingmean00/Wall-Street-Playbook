import type { Metadata } from "next"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import Link from "next/link"
import { ArrowRight, CheckCircle, XCircle, Clock, Target, GraduationCap, Briefcase } from "lucide-react"

export const metadata: Metadata = {
  title: "Didn't Get IB Offers? What to Do Next | Alternative Paths",
  description:
    "Failed investment banking recruiting? Here's the realistic playbook—lateral paths, alternative careers that still lead to PE, and how to reposition for next cycle.",
  keywords: [
    "failed investment banking recruiting",
    "no IB offer what to do",
    "investment banking rejection",
    "IB recruiting failed",
    "alternative to investment banking",
    "didn't get banking offer",
    "investment banking plan b",
    "lateral into investment banking",
  ],
  openGraph: {
    title: "Didn't Get IB Offers? What to Do Next | Wall Street Playbook",
    description: "Failed IB recruiting? Here's your playbook for what actually works next.",
    url: "https://wallstreetplaybook.org/failed-ib-recruiting",
    images: [{ url: "https://wallstreetplaybook.org/og-recruiting.jpg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://wallstreetplaybook.org/failed-ib-recruiting",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://wallstreetplaybook.org/og-recruiting.jpg"],
  },
}

export default function FailedIBRecruitingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-navy pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              No IB Offers? <span className="text-gold">Here's What Actually Works Next</span>
            </h1>
            <p className="mt-6 text-lg text-white/70">
              Recruiting didn't go your way. That sucks. But your finance career isn't over—it just takes a different path.
            </p>
          </div>
        </section>

        {/* Reality Check */}
        <section className="bg-gold py-6">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <p className="text-center text-navy font-medium">
              Goldman received <strong>360,000 applications</strong> for internships in 2025. Under 1% got offers. 
              You're not alone, and you're not a failure.
            </p>
          </div>
        </section>

        {/* What NOT to Do */}
        <section className="bg-cream py-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-navy">What NOT to Do</h2>
            <div className="mt-2 h-1 w-16 bg-gold" />
            <p className="mt-6 text-charcoal/70">
              Before we talk about what works, let's eliminate the paths that don't lead anywhere.
            </p>

            <div className="mt-10 space-y-4">
              {[
                {
                  title: "Don't take a back office role thinking you'll transfer",
                  desc: "Internal moves from ops to IB almost never happen at major banks. You'll get stuck.",
                },
                {
                  title: "Don't take a completely unrelated job",
                  desc: "Working in marketing or retail for 2 years doesn't help. You'll just be 2 years behind.",
                },
                {
                  title: "Don't do nothing and 'recruit again next year'",
                  desc: "A gap year with no relevant experience makes you less competitive, not more.",
                },
                {
                  title: "Don't spend $100K on a random Master's degree",
                  desc: "A Master's in Finance from a no-name school doesn't fix the problem. Save the money for a real MBA later.",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-lg bg-red-50 border border-red-200">
                  <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-red-800">{item.title}</p>
                    <p className="text-sm text-red-700 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Three Paths */}
        <section className="bg-navy py-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white">The Three Paths That Actually Work</h2>
            <div className="mt-2 h-1 w-16 bg-gold" />

            <div className="mt-10 space-y-8">
              {/* Path 1 */}
              <div className="rounded-xl bg-white/5 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-8 w-8 rounded-full bg-gold flex items-center justify-center text-navy font-bold">1</div>
                  <h3 className="text-lg font-semibold text-white">Lateral from an Adjacent Role (1-2 Years)</h3>
                </div>
                <p className="text-white/70 text-sm mb-4">
                  Get a job in a related field, excel for 1-2 years, then lateral into IB. This is the most common 
                  path for people who didn't get IB directly.
                </p>
                
                <div className="mb-4">
                  <p className="text-gold text-sm font-medium mb-2">Best lateral-in roles:</p>
                  <ul className="space-y-2 text-sm text-white/60">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                      <span><strong className="text-white">Big 4 Transaction Advisory (TAS)</strong> — Direct deal experience, highest conversion rate</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                      <span><strong className="text-white">Valuation / Due Diligence</strong> — Learn core IB skills</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                      <span><strong className="text-white">Corporate Development</strong> — Work on M&A from the buy-side</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                      <span><strong className="text-white">Corporate Banking / Leveraged Finance</strong> — Deal exposure, banker relationships</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                      <span><strong className="text-white">Middle-Market PE / Search Funds</strong> — Can sometimes lateral back to banking</span>
                    </li>
                  </ul>
                </div>

                <div className="p-3 bg-white/5 rounded-lg text-sm text-white/60">
                  <strong className="text-gold">Pro tip:</strong> Big 4 TAS has the highest IB conversion rate. 
                  About 55% of people who make it to IB from accounting go through TAS.
                </div>
              </div>

              {/* Path 2 */}
              <div className="rounded-xl bg-white/5 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-8 w-8 rounded-full bg-gold flex items-center justify-center text-navy font-bold">2</div>
                  <h3 className="text-lg font-semibold text-white">Delay Graduation / Master's at Same School</h3>
                </div>
                <p className="text-white/70 text-sm mb-4">
                  If you're still a student, you can buy yourself another recruiting cycle.
                </p>
                <ul className="space-y-2 text-sm text-white/60">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                    <span><strong className="text-white">Delay graduation by one semester</strong> — Re-recruit as a "junior" again</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                    <span><strong className="text-white">Stay for a 1-year Master's</strong> — If your school offers one, you get another shot at campus recruiting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                    <span><strong className="text-white">Use the extra time</strong> — Get a relevant internship, improve technicals, expand network</span>
                  </li>
                </ul>
              </div>

              {/* Path 3 */}
              <div className="rounded-xl bg-white/5 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-8 w-8 rounded-full bg-gold flex items-center justify-center text-navy font-bold">3</div>
                  <h3 className="text-lg font-semibold text-white">Top MBA (The Reset Button)</h3>
                </div>
                <p className="text-white/70 text-sm mb-4">
                  A top MBA (M7/T15) lets you recruit for IB associate roles regardless of your undergrad experience. 
                  It's the most expensive option, but it works.
                </p>
                <ul className="space-y-2 text-sm text-white/60">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                    <span>Work 2-4 years first (ideally in a related role)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                    <span>Get into a top program (school ranking matters for IB recruiting)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                    <span>Recruit during your MBA for associate-level roles</span>
                  </li>
                </ul>
                <div className="mt-4 p-3 bg-white/5 rounded-lg text-sm text-white/60">
                  <strong className="text-gold">Cost-benefit:</strong> $200K+ investment but very high IB placement 
                  rates from M7 schools. Worth it if you want IB and other paths haven't worked.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Alternative Destinations */}
        <section className="bg-cream py-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-navy">Plot Twist: Maybe You Don't Need IB</h2>
            <div className="mt-2 h-1 w-16 bg-gold" />
            <p className="mt-6 text-charcoal/70">
              Be honest: did you want IB, or did you want what IB leads to? If it's the latter, there are other paths.
            </p>

            <div className="mt-10 space-y-6">
              <div className="rounded-xl bg-white p-6 shadow-sm">
                <h3 className="font-semibold text-navy">If you wanted PE...</h3>
                <p className="text-sm text-charcoal/70 mt-2">
                  Some middle-market PE firms hire directly from undergrad or from non-IB roles. Growth equity 
                  firms are more flexible. You can also reach PE through corp dev, Big 4 TAS, or direct-to-MBA paths.
                </p>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-sm">
                <h3 className="font-semibold text-navy">If you wanted high compensation...</h3>
                <p className="text-sm text-charcoal/70 mt-2">
                  Tech, consulting, and sales & trading can pay comparably. Senior corporate finance roles 
                  at F500 companies pay well with better hours. Don't assume IB is the only path to money.
                </p>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-sm">
                <h3 className="font-semibold text-navy">If you wanted deal experience...</h3>
                <p className="text-sm text-charcoal/70 mt-2">
                  Corporate development, Big 4 TAS, and even some FP&A roles offer M&A exposure. 
                  You can work on deals without being an investment banker.
                </p>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-sm">
                <h3 className="font-semibold text-navy">If you wanted prestige...</h3>
                <p className="text-sm text-charcoal/70 mt-2">
                  Honest question: is that a good reason to pursue a career? Prestige fades. 
                  Pick a path where you'll actually enjoy the work.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-navy">Realistic Timelines</h2>
            <div className="mt-2 h-1 w-16 bg-gold" />

            <div className="mt-10 space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-lg bg-off-white">
                <Clock className="h-5 w-5 text-gold flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-navy">Big 4 TAS → IB Lateral</p>
                  <p className="text-sm text-charcoal/70 mt-1">1.5-2.5 years in TAS, then lateral. Total: 2-3 years.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-off-white">
                <Clock className="h-5 w-5 text-gold flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-navy">Delay Graduation + Re-recruit</p>
                  <p className="text-sm text-charcoal/70 mt-1">Extra semester or 1-year Master's. Total: 6 months - 1 year delay.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-off-white">
                <Clock className="h-5 w-5 text-gold flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-navy">Work → MBA → IB Associate</p>
                  <p className="text-sm text-charcoal/70 mt-1">2-4 years working, 2 years MBA. Total: 4-6 years.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-off-white">
                <Clock className="h-5 w-5 text-gold flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-navy">Skip IB, go directly to target (e.g., corp dev → PE)</p>
                  <p className="text-sm text-charcoal/70 mt-1">Varies. Can be faster than the IB route if you're strategic.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-navy py-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-white">
              Need Help Repositioning for Your Next Move?
            </h2>
            <p className="mt-4 text-white/60">
              Whether you're targeting TAS, corp dev, or preparing to re-recruit, your resume needs to tell the right story.
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
