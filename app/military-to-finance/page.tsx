import type { Metadata } from "next"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import Link from "next/link"
import { ArrowRight, CheckCircle, Shield, Target, Users, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "Military to Finance | Veteran's Guide to Wall Street Careers",
  description:
    "How to transition from military service to investment banking, private equity, and finance careers. Leverage your leadership experience and access veteran-specific programs at top banks.",
  keywords: [
    "military to finance",
    "military to investment banking",
    "veteran finance careers",
    "military to wall street",
    "veteran investment banking",
    "military MBA finance",
    "JPMorgan veteran program",
    "Goldman Sachs veterans",
  ],
  openGraph: {
    title: "Military to Finance | Wall Street Playbook",
    description: "The veteran's playbook for breaking into high finance.",
    url: "https://wallstreetplaybook.org/military-to-finance",
  },
  alternates: {
    canonical: "https://wallstreetplaybook.org/military-to-finance",
  },
}

export default function MilitaryToFinancePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-navy pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-gold/10 px-4 py-2 text-sm font-medium text-gold mb-6">
              <Shield className="h-4 w-4" />
              For Veterans & Active Duty
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Military to Finance: <span className="text-gold">Your Playbook</span>
            </h1>
            <p className="mt-6 text-lg text-white/70">
              The skills that made you effective in uniform are exactly what finance needs. Here's how to translate them.
            </p>
          </div>
        </section>

        {/* Why Military Backgrounds Work */}
        <section className="bg-cream py-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-navy">Why Banks Want Veterans</h2>
            <div className="mt-2 h-1 w-16 bg-gold" />
            <p className="mt-6 text-charcoal/70">
              This isn't charity hiring. Military experience produces skills that directly transfer to high-pressure finance roles.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {[
                {
                  icon: Target,
                  title: "Decision-Making Under Pressure",
                  desc: "You've made high-stakes calls with incomplete information and tight deadlines. That's every day in banking.",
                },
                {
                  icon: Users,
                  title: "Leadership & Team Management",
                  desc: "You've led people in situations where failure has real consequences. Managing a deal team is comparatively straightforward.",
                },
                {
                  icon: Shield,
                  title: "Discipline & Work Ethic",
                  desc: "100-hour weeks in banking? You've done harder. Banks know veterans won't complain about the hours.",
                },
                {
                  icon: Award,
                  title: "Attention to Detail",
                  desc: "In the military, mistakes cost lives. In banking, they cost millions. Same rigor, different stakes.",
                },
              ].map((item, i) => {
                const Icon = item.icon
                return (
                  <div key={i} className="rounded-xl bg-white p-6 shadow-sm">
                    <Icon className="h-6 w-6 text-gold" />
                    <h3 className="mt-4 font-semibold text-navy">{item.title}</h3>
                    <p className="mt-2 text-sm text-charcoal/70">{item.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Veteran Programs */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-navy">Veteran-Specific Programs at Major Banks</h2>
            <div className="mt-2 h-1 w-16 bg-gold" />
            <p className="mt-6 text-charcoal/70">
              Major banks actively recruit veterans through dedicated programs. These aren't side projects—they're real pipelines to full-time roles.
            </p>

            <div className="mt-10 space-y-4">
              {[
                {
                  bank: "JPMorgan Chase",
                  program: "Military Veteran Internship Program",
                  details: "10-week paid internship converting to full-time offers. Multiple business lines.",
                },
                {
                  bank: "Goldman Sachs",
                  program: "Veterans Integration Program (VIP)",
                  details: "Direct pathway to associate and analyst roles across divisions.",
                },
                {
                  bank: "Morgan Stanley",
                  program: "Military & Veterans Network",
                  details: "Active recruiting and mentorship program for transitioning service members.",
                },
                {
                  bank: "Bank of America",
                  program: "Military Affairs Program",
                  details: "Dedicated recruiting for veteran candidates across all divisions.",
                },
                {
                  bank: "Citi",
                  program: "Veterans Hiring Initiative",
                  details: "Committed to hiring 1,000+ veterans annually.",
                },
              ].map((item, i) => (
                <div key={i} className="p-4 rounded-lg bg-off-white">
                  <p className="font-semibold text-navy">{item.bank}</p>
                  <p className="text-sm text-gold font-medium">{item.program}</p>
                  <p className="text-sm text-charcoal/70 mt-1">{item.details}</p>
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm text-charcoal/60">
              Most major banks have veteran recruiting programs. Check their careers pages for "military" or "veteran" specific opportunities.
            </p>
          </div>
        </section>

        {/* The Paths */}
        <section className="bg-navy py-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white">Your Three Paths In</h2>
            <div className="mt-2 h-1 w-16 bg-gold" />

            <div className="mt-10 space-y-8">
              <div className="rounded-xl bg-white/5 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-8 w-8 rounded-full bg-gold flex items-center justify-center text-navy font-bold">1</div>
                  <h3 className="text-lg font-semibold text-white">MBA Route (Most Common for Officers)</h3>
                </div>
                <p className="text-white/70 text-sm mb-4">
                  Top MBA programs actively recruit military officers. The degree provides structured recruiting and resets your career level.
                </p>
                <ul className="space-y-2 text-sm text-white/60">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                    <span>Most M7/T15 schools have veteran recruiting initiatives</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                    <span>Yellow Ribbon and GI Bill can significantly reduce costs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                    <span>Enter at associate level (not analyst) post-MBA</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl bg-white/5 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-8 w-8 rounded-full bg-gold flex items-center justify-center text-navy font-bold">2</div>
                  <h3 className="text-lg font-semibold text-white">Direct Hire Through Veteran Programs</h3>
                </div>
                <p className="text-white/70 text-sm mb-4">
                  Major banks hire veterans directly into analyst and associate roles through dedicated programs.
                </p>
                <ul className="space-y-2 text-sm text-white/60">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                    <span>Apply 6-12 months before separation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                    <span>Leverage veteran networks inside banks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                    <span>Expect same technical interview rigor as other candidates</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl bg-white/5 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-8 w-8 rounded-full bg-gold flex items-center justify-center text-navy font-bold">3</div>
                  <h3 className="text-lg font-semibold text-white">Transitional Role First</h3>
                </div>
                <p className="text-white/70 text-sm mb-4">
                  Start in a role that leverages your military experience, then lateral to banking.
                </p>
                <ul className="space-y-2 text-sm text-white/60">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                    <span>Defense consulting firms (Booz Allen, SAIC, Leidos)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                    <span>Operations roles at banks (then move internally)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                    <span>Corporate finance at defense contractors</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Translating Your Experience */}
        <section className="bg-cream py-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-navy">Translating Military Experience</h2>
            <div className="mt-2 h-1 w-16 bg-gold" />
            <p className="mt-6 text-charcoal/70">
              Banks won't understand military terminology. You need to translate your experience into business language.
            </p>

            <div className="mt-10 space-y-6">
              <div className="rounded-lg overflow-hidden border border-border">
                <div className="grid grid-cols-2 bg-navy text-white text-sm font-medium">
                  <div className="p-3 border-r border-white/20">Military Language</div>
                  <div className="p-3">Finance Translation</div>
                </div>
                {[
                  ["Commanded 150-person unit", "Led cross-functional team of 150 across multiple operating locations"],
                  ["Managed $50M equipment budget", "Owned $50M annual budget with P&L accountability"],
                  ["Mission planning & execution", "Strategic planning and operational execution"],
                  ["After-action reviews", "Post-project analysis and process improvement"],
                  ["Intel analysis & briefings", "Data analysis and executive presentations"],
                ].map((row, i) => (
                  <div key={i} className="grid grid-cols-2 text-sm border-t border-border">
                    <div className="p-3 border-r border-border text-red-700 bg-red-50">{row[0]}</div>
                    <div className="p-3 text-green-700 bg-green-50">{row[1]}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-navy">Veteran Resources</h2>
            <div className="mt-2 h-1 w-16 bg-gold" />

            <div className="mt-10 space-y-4">
              {[
                {
                  name: "American Corporate Partners (ACP)",
                  desc: "Free mentorship matching veterans with corporate professionals, including finance executives.",
                },
                {
                  name: "Hiring Our Heroes",
                  desc: "U.S. Chamber of Commerce program with corporate fellowships and career transition support.",
                },
                {
                  name: "Service Academy Career Conferences",
                  desc: "Recruiting events specifically for service academy graduates.",
                },
                {
                  name: "Wall Street Warfighters",
                  desc: "Veteran-focused finance networking and job placement.",
                },
                {
                  name: "Veterati",
                  desc: "Free mentorship calls with veterans in your target industry.",
                },
              ].map((item, i) => (
                <div key={i} className="p-4 rounded-lg bg-off-white">
                  <p className="font-semibold text-navy">{item.name}</p>
                  <p className="text-sm text-charcoal/70 mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-navy py-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-white">
              Need Help Translating Your Military Experience?
            </h2>
            <p className="mt-4 text-white/60">
              Your resume needs to speak finance, not military. We'll help you translate your experience 
              into language that resonates with banking hiring managers.
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
