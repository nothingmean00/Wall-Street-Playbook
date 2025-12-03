export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-off-white">
      <div className="flex flex-col items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded bg-gold">
          <span className="text-lg font-bold text-navy">WSP</span>
        </div>
        <div className="h-1 w-32 overflow-hidden rounded-full bg-charcoal/10">
          <div className="h-full w-1/2 animate-pulse rounded-full bg-gold" />
        </div>
      </div>
    </div>
  )
}
