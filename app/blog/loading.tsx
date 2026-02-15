export default function BlogLoading() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Nav placeholder */}
      <div className="h-[72px] bg-navy" />

      {/* Hero skeleton */}
      <section className="bg-navy pt-12 pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto h-8 w-64 animate-pulse rounded-lg bg-white/10" />
            <div className="mx-auto mt-4 h-5 w-96 animate-pulse rounded-lg bg-white/10" />
          </div>
        </div>
      </section>

      {/* Filter bar skeleton */}
      <section className="bg-off-white pt-10 pb-4">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex gap-3 flex-wrap">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-9 w-24 animate-pulse rounded-full bg-charcoal/5 border border-border" />
            ))}
          </div>
        </div>
      </section>

      {/* Blog cards skeleton */}
      <section className="bg-off-white py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="rounded-xl border border-border bg-white p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="h-6 w-20 animate-pulse rounded-full bg-charcoal/5" />
                  <div className="h-4 w-16 animate-pulse rounded bg-charcoal/5" />
                </div>
                <div className="h-6 w-full animate-pulse rounded bg-charcoal/10" />
                <div className="mt-2 h-6 w-3/4 animate-pulse rounded bg-charcoal/10" />
                <div className="mt-4 space-y-2">
                  <div className="h-4 w-full animate-pulse rounded bg-charcoal/5" />
                  <div className="h-4 w-5/6 animate-pulse rounded bg-charcoal/5" />
                </div>
                <div className="mt-6 h-4 w-24 animate-pulse rounded bg-gold/10" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
