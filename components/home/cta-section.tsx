import Link from "next/link"
import { ArrowRight, Clock, Shield, Sparkles } from "lucide-react"

export function CTASection() {
  return (
    <section className="relative bg-navy-deep py-20 lg:py-28 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep via-navy to-navy-deep" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-gold/10 via-transparent to-transparent rounded-full blur-3xl" />
      </div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Urgency badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 mb-6">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-xs font-semibold uppercase tracking-widest text-gold">Limited Capacity</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Your Resume Is Your <span className="text-gradient-gold">First Impression</span>
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-white/60 max-w-xl mx-auto">
            Don't let a weak resume cost you the interview. Get expert feedback from someone who's been there.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/submit-resume?service=resume-review"
              className="group relative flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-gold px-10 py-5 text-lg font-bold text-navy overflow-hidden transition-all hover:shadow-xl hover:shadow-gold/30 hover:bg-white"
            >
              <span className="relative z-10">Get Your Resume Reviewed</span>
              <ArrowRight className="relative z-10 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/jobs"
              className="w-full sm:w-auto rounded-xl border-2 border-white/20 bg-white/5 backdrop-blur-sm px-8 py-4 text-base font-semibold text-white transition-all hover:border-gold hover:bg-gold/10 text-center"
            >
              View Open Positions
            </Link>
          </div>
          
          {/* Trust badges */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-white/50">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-gold" />
              <span className="text-sm font-medium">48-Hour Turnaround</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">30+ Top Firm Interviews</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-gold" />
              <span className="text-sm font-medium">100% Money-Back Guarantee</span>
            </div>
          </div>
          
          {/* Social proof microcopy */}
          <p className="mt-8 text-sm text-white/40">
            Join candidates who've landed interviews at Goldman, Blackstone, KKR, and more.
          </p>
        </div>
      </div>
    </section>
  )
}
