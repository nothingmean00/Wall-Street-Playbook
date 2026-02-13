"use client"

import { useEffect, useRef } from "react"
import { track } from "@vercel/analytics"

interface BlogTrackerProps {
  slug: string
  category: string
  readTime?: string
}

/**
 * Tracks blog post views and scroll depth.
 * Also tracks time-on-page at 30s, 60s, and 120s milestones.
 */
export function BlogTracker({ slug, category, readTime }: BlogTrackerProps) {
  const fired = useRef(false)
  const timeMilestones = useRef(new Set<number>())
  const scrollMilestones = useRef(new Set<number>())

  useEffect(() => {
    // Track blog post view (once)
    if (!fired.current) {
      fired.current = true
      track("blog_post_viewed", { slug, category, readTime: readTime || "unknown" })
    }

    // Track time on page (engagement signal)
    const timers = [30, 60, 120].map((seconds) =>
      setTimeout(() => {
        if (!timeMilestones.current.has(seconds)) {
          timeMilestones.current.add(seconds)
          track("blog_time_on_page", { slug, seconds })
        }
      }, seconds * 1000)
    )

    // Track scroll depth
    function handleScroll() {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      if (docHeight <= 0) return
      const percent = Math.round((scrollTop / docHeight) * 100)

      for (const milestone of [25, 50, 75, 100]) {
        if (percent >= milestone && !scrollMilestones.current.has(milestone)) {
          scrollMilestones.current.add(milestone)
          track("scroll_depth", { page: `blog/${slug}`, depth: milestone })
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      timers.forEach(clearTimeout)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [slug, category, readTime])

  return null
}
