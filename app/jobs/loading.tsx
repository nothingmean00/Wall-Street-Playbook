export default function JobsLoading() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Nav placeholder */}
      <div className="h-[72px] bg-navy" />

      {/* Hero skeleton */}
      <section className="bg-navy pt-12 pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto h-6 w-32 animate-pulse rounded-full bg-white/10" />
            <div className="mx-auto mt-6 h-10 w-80 animate-pulse rounded-lg bg-white/10" />
            <div className="mx-auto mt-4 h-5 w-96 animate-pulse rounded-lg bg-white/10" />
          </div>
          <div className="mt-10 grid grid-cols-3 gap-6 max-w-md mx-auto">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="text-center">
                <div className="mx-auto h-8 w-16 animate-pulse rounded bg-white/10" />
                <div className="mx-auto mt-2 h-3 w-20 animate-pulse rounded bg-white/5" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job cards skeleton */}
      <section className="bg-off-white py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Filters skeleton */}
          <div className="flex gap-3 mb-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-10 w-28 animate-pulse rounded-lg bg-charcoal/5 border border-border" />
            ))}
          </div>

          {/* Cards */}
          <div className="space-y-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="rounded-xl border border-border bg-white p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="h-5 w-64 animate-pulse rounded bg-charcoal/10" />
                    <div className="mt-2 h-4 w-40 animate-pulse rounded bg-charcoal/5" />
                    <div className="mt-3 flex gap-2">
                      <div className="h-6 w-20 animate-pulse rounded-full bg-charcoal/5" />
                      <div className="h-6 w-24 animate-pulse rounded-full bg-charcoal/5" />
                      <div className="h-6 w-16 animate-pulse rounded-full bg-charcoal/5" />
                    </div>
                  </div>
                  <div className="h-9 w-20 animate-pulse rounded-lg bg-gold/10" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
