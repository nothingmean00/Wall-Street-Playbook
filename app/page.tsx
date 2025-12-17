import type { Metadata } from "next"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/home/hero-section"
import { WhatYouGet } from "@/components/home/what-you-get"
import { FeaturedPlaybooks } from "@/components/home/featured-playbooks"
import { ResumeServicesSection } from "@/components/home/resume-services-section"
import { WhyItWorks } from "@/components/home/why-it-works"
import { BlogPreview } from "@/components/home/blog-preview"
import { JobsPreview } from "@/components/home/jobs-preview"
import { CTASection } from "@/components/home/cta-section"

export const metadata: Metadata = {
  title: "Wall Street Playbook | Break Into Investment Banking, PE & Hedge Funds",
  description:
    "Proven tactics, frameworks, and tools used by candidates who land roles in investment banking, private equity, and hedge funds. Premium playbooks and resume services.",
  alternates: {
    canonical: "https://wallstreetplaybook.org",
  },
}

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <WhatYouGet />
        <FeaturedPlaybooks />
        <ResumeServicesSection />
        <JobsPreview />
        <WhyItWorks />
        <BlogPreview />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
