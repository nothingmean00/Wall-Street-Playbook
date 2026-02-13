"use client"

import Link from "next/link"
import { track } from "@vercel/analytics"
import type { ComponentProps } from "react"

interface TrackedLinkProps extends ComponentProps<typeof Link> {
  /** Event name, defaults to "cta_clicked" */
  eventName?: string
  /** Location identifier for the CTA, e.g. "playbooks_hero", "blog_sidebar" */
  location: string
}

/**
 * A Next.js Link that fires a Vercel Analytics event on click.
 * Drop-in replacement for <Link> with built-in tracking.
 */
export function TrackedLink({
  eventName = "cta_clicked",
  location,
  onClick,
  children,
  ...props
}: TrackedLinkProps) {
  return (
    <Link
      {...props}
      onClick={(e) => {
        track(eventName, { location })
        onClick?.(e)
      }}
    >
      {children}
    </Link>
  )
}
