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
  const month36 = []
  const year1 = []
  const year2 = []
  const year3 = []

  let lt10k = 0
  let lt20k = 0
  let gt50k = 0
  let gt100k = 0
  let gt200k = 0

  for (let i = 0; i < N; i++) {
    // Year 1 ending sessions (month 12) - same as before
    const r1 = Math.random()
    let s12 = r1 < 0.15 ? lognormal(5000, 0.55) : r1 < 0.85 ? lognormal(15000, 0.45) : lognormal(35000, 0.55)
    s12 = clamp(s12, 1000, 200_000)

    // Year 2 growth multiplier: SEO compounds but with diminishing returns
    // Some pages hit top 3, others decay, email list adds 10-20% traffic boost
    const y2GrowthMult = tri(1.3, 1.8, 2.5) // 30-150% growth year-over-year
    const s24 = s12 * y2GrowthMult

    // Year 3 growth: slower compounding, more mature
    const y3GrowthMult = tri(1.15, 1.35, 1.7) // 15-70% growth
    const s36 = s24 * y3GrowthMult

    // Shares (assume optimization improves these slightly over time)
    const playShare = tri(0.12, 0.20, 0.30) // better internal linking, more intent pages
    const resumeShare = tri(0.03, 0.06, 0.12) // more social proof, better positioning

    // Conversion rates (mature site with heavy proof)
    const playCR = tri(0.025, 0.040, 0.060)
    const resumeCR = tri(0.008, 0.015, 0.025)

    // Playbook catalog expansion
    // Year 1: 2 live → Year 2: 4-6 live → Year 3: 6-8 live
    const numPlaybooksY1 = 2
    const numPlaybooksY2 = tri(4, 5, 6)
    const numPlaybooksY3 = tri(6, 7, 8)

    // AOV increases with more catalog + bundle offerings
    const basePrice = clamp(tri(67, 97, 127), 47, 127)
    
    // Year 1: some cross-sell
    const crossSellProbY1 = tri(0.10, 0.18, 0.28)
    const crossDiscount = tri(0.10, 0.20, 0.30)
    const crossPrice = clamp(tri(47, 97, 127), 47, 127)
    const playAOV_Y1 = basePrice + crossSellProbY1 * (1 - crossDiscount) * crossPrice

    // Year 2: bundles are available, higher cross-sell
    const crossSellProbY2 = tri(0.20, 0.30, 0.45)
    const playAOV_Y2 = basePrice + crossSellProbY2 * (1 - crossDiscount) * crossPrice * 1.2

    // Year 3: mature catalog, many buy 2-3 playbooks
    const crossSellProbY3 = tri(0.30, 0.40, 0.55)
    const playAOV_Y3 = basePrice + crossSellProbY3 * (1 - crossDiscount) * crossPrice * 1.4

    // Resume services capacity scaling
    const rewriteProb = tri(0.25, 0.40, 0.55)
    const resumeAOV = rewriteProb * 497 + (1 - rewriteProb) * 197

    const cap12 = tri(6, 12, 20) // month 12 capacity
    const cap24 = cap12 * tri(1.5, 2.0, 2.5) // hire help or systemize
    const cap36 = cap24 * tri(1.2, 1.5, 1.8)

    // Simulate each year
    let cumulative = 0

    // Year 1 (months 1-12)
    let y1Total = 0
    for (let m = 1; m <= 12; m++) {
      const sm = s12 * Math.pow(m / 12, 2.2)
      const playOrders = poisson(sm * playShare * playCR)
      const playRev = playOrders * playAOV_Y1

      let resumeOrders = poisson(sm * resumeShare * resumeCR)
      const capm = cap12 * Math.pow(m / 12, 1.8)
      resumeOrders = Math.min(resumeOrders, Math.floor(capm))
      const resumeRev = resumeOrders * resumeAOV

      y1Total += playRev + resumeRev
      cumulative += playRev + resumeRev
    }

    // Year 2 (months 13-24)
    let y2Total = 0
    for (let m = 13; m <= 24; m++) {
      const progress = (m - 12) / 12
      const sm = s12 + (s24 - s12) * progress
      const playOrders = poisson(sm * playShare * playCR)
      const playRev = playOrders * playAOV_Y2

      let resumeOrders = poisson(sm * resumeShare * resumeCR)
      const capm = cap12 + (cap24 - cap12) * progress
      resumeOrders = Math.min(resumeOrders, Math.floor(capm))
      const resumeRev = resumeOrders * resumeAOV

      y2Total += playRev + resumeRev
      cumulative += playRev + resumeRev
    }

    // Year 3 (months 25-36)
    let y3Total = 0
    for (let m = 25; m <= 36; m++) {
      const progress = (m - 24) / 12
      const sm = s24 + (s36 - s24) * progress
      const playOrders = poisson(sm * playShare * playCR)
      const playRev = playOrders * playAOV_Y3

      let resumeOrders = poisson(sm * resumeShare * resumeCR)
      const capm = cap24 + (cap36 - cap24) * progress
      resumeOrders = Math.min(resumeOrders, Math.floor(capm))
      const resumeRev = resumeOrders * resumeAOV

      y3Total += playRev + resumeRev
      cumulative += playRev + resumeRev
    }

    // Month 36 run-rate
    const playOrders36 = poisson(s36 * playShare * playCR)
    const playRev36 = playOrders36 * playAOV_Y3
    let resumeOrders36 = poisson(s36 * resumeShare * resumeCR)
    resumeOrders36 = Math.min(resumeOrders36, Math.floor(cap36))
    const resumeRev36 = resumeOrders36 * resumeAOV

    const rev36 = playRev36 + resumeRev36
    month36.push(rev36)
    year1.push(y1Total)
    year2.push(y2Total)
    year3.push(y3Total)

    if (rev36 < 10_000) lt10k++
    if (rev36 < 20_000) lt20k++
    if (rev36 > 50_000) gt50k++
    if (rev36 > 100_000) gt100k++
    if (rev36 > 200_000) gt200k++
  }

  const qs = [0.1, 0.25, 0.5, 0.75, 0.9]

  console.log("Monte Carlo 3-YEAR forecast (playbooks + resume services)")
  console.log(`N=${N}`)
  console.log("\nKey assumptions:")
  console.log("- Year 1: base model (see prior run)")
  console.log("- Year 2: sessions grow Tri(1.3x, 1.8x, 2.5x) via SEO compounding + email list")
  console.log("- Year 3: sessions grow Tri(1.15x, 1.35x, 1.7x) - slower but still up")
  console.log("- Playbook catalog: Y1=2, Y2=4-6, Y3=6-8 live playbooks")
  console.log("- Cross-sell increases: Y1=18%, Y2=30%, Y3=40% (more bundles)")
  console.log("- Resume capacity scales: Y1 cap=12/mo → Y2=24/mo → Y3=36/mo")
  console.log("- Traffic → money page share improves slightly (better internal links, more intent pages)")

  console.log("\n=== MONTH 36 (end of year 3) run-rate ===")
  for (const q of qs) console.log(`  p${Math.round(q * 100)}: ${fmtCurrency(quantile(month36, q))}/mo`)
  console.log(`\n  P(<$10k/mo): ${((lt10k / N) * 100).toFixed(1)}%`)
  console.log(`  P(<$20k/mo): ${((lt20k / N) * 100).toFixed(1)}%`)
  console.log(`  P(>$50k/mo): ${((gt50k / N) * 100).toFixed(1)}%`)
  console.log(`  P(>$100k/mo): ${((gt100k / N) * 100).toFixed(1)}%`)
  console.log(`  P(>$200k/mo): ${((gt200k / N) * 100).toFixed(1)}%`)

  console.log("\n=== ANNUAL REVENUE by year ===")
  console.log("\nYear 1:")
  for (const q of qs) console.log(`  p${Math.round(q * 100)}: ${fmtCurrency(quantile(year1, q))}`)

  console.log("\nYear 2:")
  for (const q of qs) console.log(`  p${Math.round(q * 100)}: ${fmtCurrency(quantile(year2, q))}`)

  console.log("\nYear 3:")
  for (const q of qs) console.log(`  p${Math.round(q * 100)}: ${fmtCurrency(quantile(year3, q))}`)

  // 3-year cumulative
  const total3yr = year1.map((v, idx) => v + year2[idx] + year3[idx])
  console.log("\n3-YEAR TOTAL (cumulative):")
  for (const q of qs) console.log(`  p${Math.round(q * 100)}: ${fmtCurrency(quantile(total3yr, q))}`)
}

run()
