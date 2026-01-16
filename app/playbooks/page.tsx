import type { Metadata } from "next"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Construction } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Playbooks - Under Development",
  description: "Our premium finance interview playbooks are currently under development. Check back soon!",
  openGraph: {
    title: "Playbooks - Under Development | Wall Street Playbook",
    description: "Our premium finance interview playbooks are currently under development. Check back soon!",
    url: "https://wallstreetplaybook.org/playbooks",
  },
  alternates: {
    canonical: "https://wallstreetplaybook.org/playbooks",
  },
}

export default function PlaybooksPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="relative bg-navy-deep min-h-[70vh] flex items-center justify-center overflow-hidden">
          {/* Background effects */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-navy-deep via-navy to-navy-deep" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,_rgba(201,168,110,0.15),_transparent)]" />
            <div 
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 30h60M30 0v60' stroke='%23C9A86E' stroke-width='0.5' fill='none'/%3E%3C/svg%3E")`,
              }}
            />
          </div>
          
          <div className="relative mx-auto max-w-3xl px-6 lg:px-8 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gold/10 border border-gold/30 mb-8">
              <Construction className="w-10 h-10 text-gold" />
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Under <span className="text-gradient-gold">Development</span>
            </h1>
            
            <p className="mt-6 text-lg leading-relaxed text-white/60 max-w-xl mx-auto">
              We're crafting premium playbooks to help you break into finance. 
              Check back soon for tactical guides on investment banking, private equity, and hedge fund recruiting.
            </p>
            
            <Link
              href="/"
              className="group mt-10 inline-flex items-center gap-2 rounded-xl bg-gold px-8 py-4 text-base font-semibold text-navy transition-all hover:bg-white hover:shadow-lg hover:shadow-gold/20"
            >
              Return Home
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
