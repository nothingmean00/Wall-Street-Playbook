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
  // Explicit trailing slash behavior — prevents URL ambiguity that confuses crawlers
  trailingSlash: false,
  // NOTE: www → non-www redirect should be configured in Vercel Dashboard
  // (Settings → Domains) rather than here, to avoid CORS issues with API routes
  // and the web manifest. Vercel handles domain-level redirects before the app runs.

  // Headers for AI crawlers / GEO (Generative Engine Optimization)
  async headers() {
    return [
      {
        // All public pages — signal to AI crawlers that content is available
        source: '/((?!api|_next|scripts|admin).*)',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'all, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
          },
        ],
      },
      {
        // llms.txt — AI content discovery file
        source: '/llms.txt',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/plain; charset=utf-8',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, s-maxage=86400',
          },
        ],
      },
    ]
  },
}

export default nextConfig
