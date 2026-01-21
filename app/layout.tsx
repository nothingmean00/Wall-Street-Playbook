import type React from "react"
import type { Metadata, Viewport } from "next"
import { DM_Sans, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ExitIntentWrapper } from "@/components/exit-intent-wrapper"
import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  metadataBase: new URL("https://wallstreetplaybook.org"),
  title: {
    default: "Wall Street Playbook | Break Into Investment Banking, PE & Hedge Funds",
    template: "%s | Wall Street Playbook",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png" },
    ],
    other: [
      { rel: "manifest", url: "/site.webmanifest" },
    ],
  },
  description:
    "Proven tactics, frameworks, and tools used by candidates who land roles in investment banking, private equity, and hedge funds. Premium playbooks and resume services for elite finance recruiting.",
  keywords: [
    "investment banking interview prep",
    "private equity recruiting",
    "hedge fund interviews",
    "finance career",
    "wall street recruiting",
    "IB technical questions",
    "resume review investment banking",
    "breaking into finance",
    "LBO modeling",
    "DCF valuation",
    "banking networking",
  ],
  authors: [{ name: "Wall Street Playbook" }],
  creator: "Wall Street Playbook",
  publisher: "Wall Street Playbook",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://wallstreetplaybook.org",
    siteName: "Wall Street Playbook",
    title: "Wall Street Playbook | Break Into Investment Banking, PE & Hedge Funds",
    description:
      "Proven tactics, frameworks, and tools used by candidates who land roles in investment banking, private equity, and hedge funds.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Wall Street Playbook - Elite Finance Recruiting Preparation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wall Street Playbook | Break Into Investment Banking, PE & Hedge Funds",
    description:
      "Proven tactics, frameworks, and tools used by candidates who land roles in investment banking, private equity, and hedge funds.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://wallstreetplaybook.org",
  },
  category: "Finance",
}

export const viewport: Viewport = {
  themeColor: "#0A1A2F",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to external origins for faster resource loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://va.vercel-scripts.com" />
        
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Wall Street Playbook",
              url: "https://wallstreetplaybook.org",
              logo: "https://wallstreetplaybook.org/android-chrome-512x512.png",
              description:
                "Premium preparation materials and services for investment banking, private equity, and hedge fund recruiting.",
              sameAs: [
                "https://www.linkedin.com/company/wallstreetplaybook",
                "https://twitter.com/wsplaybook",
                "https://www.instagram.com/wallstreetplaybook",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                email: "support@wallstreetplaybook.org",
              },
            }),
          }}
        />
        {/* WebSite Schema for Sitelinks Search Box */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Wall Street Playbook",
              url: "https://wallstreetplaybook.org",
              description: "Premium preparation materials for investment banking, private equity, and hedge fund recruiting.",
              publisher: {
                "@type": "Organization",
                name: "Wall Street Playbook",
              },
            }),
          }}
        />
      </head>
      <body className={`${dmSans.className} ${playfair.variable} font-sans antialiased`}>
        {children}
        <ExitIntentWrapper />
        <Analytics />
      </body>
    </html>
  )
}
