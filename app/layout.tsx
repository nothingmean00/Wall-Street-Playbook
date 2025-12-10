import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ExitIntentPopup } from "@/components/exit-intent-popup"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://wallstreetplaybook.org"),
  title: {
    default: "Wall Street Playbook | Break Into Investment Banking, PE & Hedge Funds",
    template: "%s | Wall Street Playbook",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Wall Street Playbook",
              url: "https://wallstreetplaybook.org",
              logo: "https://wallstreetplaybook.org/logo.png",
              description:
                "Premium preparation materials and services for investment banking, private equity, and hedge fund recruiting.",
              sameAs: [],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                email: "support@wallstreetplaybook.org",
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.className} ${playfair.variable} font-sans antialiased`}>
        {children}
        <ExitIntentPopup />
        <Analytics />
      </body>
    </html>
  )
}
