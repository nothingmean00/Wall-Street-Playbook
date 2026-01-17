"use client"

import { Mail, CheckCircle, Building2 } from "lucide-react"

// Placeholder data - replace with actual screenshot images later
const interviewInvites = [
  { firm: "Goldman Sachs", division: "Investment Banking", type: "Summer Analyst" },
  { firm: "Morgan Stanley", division: "M&A", type: "Full-Time Analyst" },
  { firm: "J.P. Morgan", division: "Investment Banking", type: "Summer Analyst" },
  { firm: "Lazard", division: "Restructuring", type: "Summer Analyst" },
  { firm: "Evercore", division: "Advisory", type: "Full-Time Analyst" },
  { firm: "PJT Partners", division: "Restructuring", type: "Summer Analyst" },
  { firm: "Centerview", division: "M&A", type: "Summer Analyst" },
  { firm: "Moelis", division: "Advisory", type: "Full-Time Analyst" },
  { firm: "KKR", division: "Private Equity", type: "Associate" },
  { firm: "Blackstone", division: "Private Equity", type: "Analyst" },
  { firm: "Apollo", division: "Private Equity", type: "Associate" },
  { firm: "Carlyle", division: "Private Equity", type: "Analyst" },
  { firm: "Warburg Pincus", division: "Growth Equity", type: "Associate" },
  { firm: "TPG", division: "Private Equity", type: "Associate" },
  { firm: "Bain Capital", division: "Private Equity", type: "Associate" },
  { firm: "Advent International", division: "Private Equity", type: "Associate" },
  { firm: "Citadel", division: "Hedge Fund", type: "Analyst" },
  { firm: "Point72", division: "Hedge Fund", type: "Analyst" },
  { firm: "Millennium", division: "Hedge Fund", type: "Analyst" },
  { firm: "D.E. Shaw", division: "Hedge Fund", type: "Analyst" },
  { firm: "Two Sigma", division: "Quantitative", type: "Analyst" },
  { firm: "AQR", division: "Quantitative", type: "Analyst" },
  { firm: "Houlihan Lokey", division: "Restructuring", type: "Summer Analyst" },
  { firm: "Guggenheim", division: "Advisory", type: "Summer Analyst" },
  { firm: "William Blair", division: "Investment Banking", type: "Summer Analyst" },
  { firm: "Harris Williams", division: "M&A", type: "Analyst" },
  { firm: "Lincoln International", division: "M&A", type: "Summer Analyst" },
  { firm: "Rothschild", division: "Advisory", type: "Full-Time Analyst" },
  { firm: "Perella Weinberg", division: "Advisory", type: "Summer Analyst" },
  { firm: "Qatalyst", division: "Technology M&A", type: "Analyst" },
]

function EmailPreview({ firm, division, type, index }: { firm: string; division: string; type: string; index: number }) {
  const colors = [
    "from-blue-500/20 to-blue-600/10",
    "from-emerald-500/20 to-emerald-600/10",
    "from-violet-500/20 to-violet-600/10",
    "from-amber-500/20 to-amber-600/10",
    "from-rose-500/20 to-rose-600/10",
  ]
  const colorClass = colors[index % colors.length]

  return (
    <div className="group relative flex-shrink-0 w-[320px] rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-4 backdrop-blur-sm transition-all duration-300 hover:border-gold/30 hover:bg-white/10">
      {/* Email header */}
      <div className="flex items-start gap-3">
        <div className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${colorClass}`}>
          <Building2 className="h-5 w-5 text-white/80" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-white truncate">{firm}</span>
            <CheckCircle className="h-4 w-4 text-gold flex-shrink-0" />
          </div>
          <p className="text-xs text-white/50 truncate">recruiting@{firm.toLowerCase().replace(/[^a-z]/g, '')}.com</p>
        </div>
      </div>

      {/* Email subject */}
      <div className="mt-3 rounded-lg bg-white/5 p-3">
        <div className="flex items-center gap-2 text-xs text-white/40 mb-1">
          <Mail className="h-3 w-3" />
          <span>Interview Invitation</span>
        </div>
        <p className="text-sm font-medium text-white">
          {type} Interview - {division}
        </p>
        <p className="mt-1 text-xs text-white/50 line-clamp-2">
          We are pleased to invite you to interview for the {type} position in our {division} group...
        </p>
      </div>

      {/* Redacted indicator */}
      <div className="mt-3 flex items-center justify-between text-xs text-white/30">
        <span>Name redacted for privacy</span>
        <span className="text-gold/60">Verified ✓</span>
      </div>
    </div>
  )
}

export function ProofGallery() {
  return (
    <section className="relative bg-navy-deep py-20 lg:py-28 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy-deep to-navy" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,_rgba(201,168,110,0.08),_transparent)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 mb-6">
            <CheckCircle className="w-4 h-4 text-gold" />
            <span className="text-xs font-semibold uppercase tracking-widest text-gold">Proven Results</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Interview Invitations from <span className="text-gradient-gold">30+ Top Firms</span>
          </h2>
          <p className="mt-4 text-lg text-white/60 max-w-2xl mx-auto">
            Our frameworks have generated real interview invitations from the most competitive firms in finance. 
            Here's a sample of what's possible.
          </p>
        </div>

        {/* Scrolling gallery */}
        <div className="relative">
          {/* Gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-navy-deep to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-navy-deep to-transparent z-10 pointer-events-none" />

          {/* First row - scrolling left */}
          <div className="flex gap-4 mb-4 animate-scroll-left">
            {[...interviewInvites.slice(0, 15), ...interviewInvites.slice(0, 15)].map((invite, index) => (
              <EmailPreview key={`row1-${index}`} {...invite} index={index} />
            ))}
          </div>

          {/* Second row - scrolling right */}
          <div className="flex gap-4 animate-scroll-right">
            {[...interviewInvites.slice(15), ...interviewInvites.slice(15)].map((invite, index) => (
              <EmailPreview key={`row2-${index}`} {...invite} index={index + 15} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-white/50 text-sm mb-4">
            Want the same frameworks that generated these results?
          </p>
          <a
            href="/submit-resume?service=resume-review"
            className="inline-flex items-center gap-2 rounded-xl bg-gold px-8 py-4 text-base font-semibold text-navy transition-all hover:bg-white hover:shadow-lg hover:shadow-gold/20"
          >
            Get Your Resume Reviewed
          </a>
        </div>
      </div>
    </section>
  )
}
