import Link from "next/link"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-off-white">
      <Navbar />

      <main className="flex flex-1 items-center justify-center py-16 lg:py-24">
        <div className="mx-auto max-w-xl px-6 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-gold">404 Error</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-charcoal sm:text-5xl">Page Not Found</h1>
          <p className="mt-6 text-lg leading-relaxed text-charcoal/60">
            The page you are looking for does not exist or has been moved.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/"
              className="rounded-lg bg-navy px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-gold hover:text-navy"
            >
              Back to Home
            </Link>
            <Link
              href="/playbooks"
              className="rounded-lg border border-charcoal/20 bg-white px-8 py-3.5 text-sm font-semibold text-charcoal transition-colors hover:border-gold hover:text-gold"
            >
              Browse Playbooks
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
