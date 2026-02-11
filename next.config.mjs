/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
  },
  experimental: {
    optimizeCss: true,
  },
  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Enable gzip compression
  compress: true,
  // Power pack performance
  poweredByHeader: false,
  // NOTE: www → non-www redirect should be configured in Vercel Dashboard
  // (Settings → Domains) rather than here, to avoid CORS issues with API routes
  // and the web manifest. Vercel handles domain-level redirects before the app runs.
}

export default nextConfig
