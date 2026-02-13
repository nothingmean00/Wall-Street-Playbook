"use client"

import { useEffect, useRef } from "react"
import { track } from "@vercel/analytics"

interface ScrollTrackerProps {
  /** Page identifier for the event, e.g. "homepage", "blog/my-post" */
  page: string
}

/**
 * Tracks scroll depth milestones (25%, 50%, 75%, 100%) via Vercel Analytics.
 * Place once per page. Each milestone fires only once per page load.
 */
export function ScrollTracker({ page }: ScrollTrackerProps) {
  const milestones = useRef(new Set<number>())

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      if (docHeight <= 0) return

      const percent = Math.round((scrollTop / docHeight) * 100)

      for (const milestone of [25, 50, 75, 100]) {
        if (percent >= milestone && !milestones.current.has(milestone)) {
          milestones.current.add(milestone)
          track("scroll_depth", { page, depth: milestone })
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [page])

  return null
}
