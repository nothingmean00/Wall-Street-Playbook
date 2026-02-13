"use client"

import { useEffect, useRef } from "react"
import { track } from "@vercel/analytics"

interface PageTrackerProps {
  /** Event name, e.g. "blog_post_viewed", "playbook_page_viewed" */
  event: string
  /** Properties to send with the event */
  properties?: Record<string, string | number>
}

/**
 * Fires a custom page-level event once on mount.
 * Use for tracking specific page views with metadata (slug, category, etc.)
 */
export function PageTracker({ event, properties }: PageTrackerProps) {
  const fired = useRef(false)

  useEffect(() => {
    if (!fired.current) {
      fired.current = true
      track(event, properties || {})
    }
  }, [event, properties])

  return null
}
