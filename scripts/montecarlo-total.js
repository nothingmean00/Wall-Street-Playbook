function randn() {
  let u = 0,
    v = 0
  while (u === 0) u = Math.random()
  while (v === 0) v = Math.random()
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v)
}

function clamp(x, a, b) {
  return Math.max(a, Math.min(b, x))
}

function tri(a, c, b) {
  const u = Math.random()
  const fc = (c - a) / (b - a)
  return u < fc ? a + Math.sqrt(u * (b - a) * (c - a)) : b - Math.sqrt((1 - u) * (b - a) * (b - c))
}

function lognormal(median, sigma) {
  return median * Math.exp(sigma * randn())
}

function quantile(arr, q) {
  const a = [...arr].sort((x, y) => x - y)
  const pos = (a.length - 1) * q
  const lo = Math.floor(pos)
  const hi = Math.ceil(pos)
  if (lo === hi) return a[lo]
  const w = pos - lo
  return a[lo] * (1 - w) + a[hi] * w
}

function fmtCurrency(x) {
  return `$${Math.round(x).toLocaleString("en-US")}`
}

// Poisson sampler: Knuth for small λ, normal approx for large λ
function poisson(lambda) {
  if (lambda <= 0) return 0
  if (lambda < 30) {
    const L = Math.exp(-lambda)
    let k = 0
    let p = 1
    do {
      k++
      p *= Math.random()
    } while (p > L)
    return k - 1
  }

  const n = lambda + Math.sqrt(lambda) * randn()
  return Math.max(0, Math.round(n))
}

function run() {
  const N = 100_000
  const month12 = []
  const year1 = []

  let lt2k = 0
  let lt5k = 0
  let gt10k = 0
  let gt25k = 0
  let gt50k = 0

  for (let i = 0; i < N; i++) {
    // Month-12 sessions mixture (proxy for "blog agent + SEO compounding")
    const r = Math.random()
    let s12 =
      r < 0.15 ? lognormal(5000, 0.55) : r < 0.85 ? lognormal(15000, 0.45) : lognormal(35000, 0.55)
    s12 = clamp(s12, 1000, 200_000)

    // Shares of total sessions landing on key revenue pages
    const playShare = tri(0.10, 0.18, 0.28) // /playbooks + intent pages that push playbooks
    const resumeShare = tri(0.02, 0.05, 0.10) // /resume-services + /submit-resume

    // Conversion rates (assumes strong "proof" screenshots are live)
    const playCR = tri(0.02, 0.035, 0.055)
    const resumeCR = tri(0.005, 0.01, 0.02)

    // Playbook order value (more playbooks + cross-sell)
    const basePrice = clamp(tri(67, 97, 127), 47, 127)
    const crossSellProb = tri(0.10, 0.18, 0.28) // % of playbook buyers who add a 2nd playbook/bundle item
    const crossDiscount = tri(0.10, 0.20, 0.30)
    const crossPrice = clamp(tri(47, 97, 127), 47, 127)
    const playAOV = basePrice + crossSellProb * (1 - crossDiscount) * crossPrice

    // Resume services AOV (actual prices from lib/data.ts) + capacity cap
    const rewriteProb = tri(0.25, 0.40, 0.55)
    const resumeAOV = rewriteProb * 497 + (1 - rewriteProb) * 197
    const cap12 = tri(6, 12, 20) // max fulfilled orders/mo by month 12 (scaled earlier)

    // Traffic ramp over the year (slow early, faster later)
    let y = 0
    for (let m = 1; m <= 12; m++) {
      const sm = s12 * Math.pow(m / 12, 2.2)

      // Playbooks
      const playVisits = sm * playShare
      const playOrders = poisson(playVisits * playCR)
      const playRev = playOrders * playAOV

      // Resume services (capacity constrained)
      const resumeVisits = sm * resumeShare
      let resumeOrders = poisson(resumeVisits * resumeCR)
      const capm = cap12 * Math.pow(m / 12, 1.8)
      resumeOrders = Math.min(resumeOrders, Math.floor(capm))
      const resumeRev = resumeOrders * resumeAOV

      y += playRev + resumeRev
    }

    // Month 12 run-rate (sessions = s12)
    const playOrders12 = poisson(s12 * playShare * playCR)
    const playRev12 = playOrders12 * playAOV

    let resumeOrders12 = poisson(s12 * resumeShare * resumeCR)
    resumeOrders12 = Math.min(resumeOrders12, Math.floor(cap12))
    const resumeRev12 = resumeOrders12 * resumeAOV

    const rev12 = playRev12 + resumeRev12
    month12.push(rev12)
    year1.push(y)

    if (rev12 < 2000) lt2k++
    if (rev12 < 5000) lt5k++
    if (rev12 > 10_000) gt10k++
    if (rev12 > 25_000) gt25k++
    if (rev12 > 50_000) gt50k++
  }

  const qs = [0.1, 0.25, 0.5, 0.75, 0.9]

  console.log("Monte Carlo TOTAL revenue (playbooks + resume services)")
  console.log(`N=${N}`)
  console.log("Key assumptions:")
  console.log("- Month-12 sessions: 15% low (median 5k), 70% base (median 15k), 15% high (median 35k)")
  console.log("- Playbook traffic share: Tri(10%,18%,28%); playbook CR (with proof): Tri(2.0%,3.5%,5.5%)")
  console.log(
    "- Playbook AOV includes cross-sell: base Tri($67,$97,$127) + cross-sell Tri(10%,18%,28%) at 10-30% discount",
  )
  console.log("- Resume traffic share: Tri(2%,5%,10%); resume CR: Tri(0.5%,1.0%,2.0%)")
  console.log("- Resume AOV: mix of $197 review / $497 rewrite (rewrite share Tri(25%,40%,55%))")
  console.log("- Resume capacity cap at month 12: Tri(6,12,20) orders/mo (scaled earlier months)")
  console.log("- 12-mo traffic ramp ~ (m/12)^2.2")

  console.log("\nMONTH 12 run-rate:")
  for (const q of qs) console.log(`  p${Math.round(q * 100)}: ${fmtCurrency(quantile(month12, q))}`)
  console.log(`  P(<$2k/mo): ${(lt2k / N * 100).toFixed(1)}%`)
  console.log(`  P(<$5k/mo): ${(lt5k / N * 100).toFixed(1)}%`)
  console.log(`  P(>$10k/mo): ${(gt10k / N * 100).toFixed(1)}%`)
  console.log(`  P(>$25k/mo): ${(gt25k / N * 100).toFixed(1)}%`)
  console.log(`  P(>$50k/mo): ${(gt50k / N * 100).toFixed(1)}%`)

  console.log("\nYEAR 1 cumulative:")
  for (const q of qs) console.log(`  p${Math.round(q * 100)}: ${fmtCurrency(quantile(year1, q))}`)
}

run()
