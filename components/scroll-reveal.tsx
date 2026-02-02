"use client"

import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"
import { ReactNode } from "react"

type AnimationType = 
  | "fade-up" 
  | "fade-down" 
  | "fade-left" 
  | "fade-right" 
  | "zoom-in" 
  | "zoom-out"
  | "fade"

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  animation?: AnimationType
  delay?: number // in milliseconds
  duration?: number // in milliseconds
  threshold?: number
  once?: boolean
  as?: keyof JSX.IntrinsicElements
}

const animationStyles: Record<AnimationType, { initial: string; animate: string }> = {
  "fade-up": {
    initial: "opacity-0 translate-y-8",
    animate: "opacity-100 translate-y-0",
  },
  "fade-down": {
    initial: "opacity-0 -translate-y-8",
    animate: "opacity-100 translate-y-0",
  },
  "fade-left": {
    initial: "opacity-0 translate-x-8",
    animate: "opacity-100 translate-x-0",
  },
  "fade-right": {
    initial: "opacity-0 -translate-x-8",
    animate: "opacity-100 translate-x-0",
  },
  "zoom-in": {
    initial: "opacity-0 scale-95",
    animate: "opacity-100 scale-100",
  },
  "zoom-out": {
    initial: "opacity-0 scale-105",
    animate: "opacity-100 scale-100",
  },
  "fade": {
    initial: "opacity-0",
    animate: "opacity-100",
  },
}

export function ScrollReveal({
  children,
  className,
  animation = "fade-up",
  delay = 0,
  duration = 600,
  threshold = 0.1,
  once = true,
  as: Component = "div",
}: ScrollRevealProps) {
  const { ref, isInView } = useInView({ threshold, triggerOnce: once })

  const { initial, animate } = animationStyles[animation]

  return (
    <Component
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn(
        "transition-all ease-out",
        isInView ? animate : initial,
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </Component>
  )
}

// Stagger children with automatic delays
interface ScrollRevealGroupProps {
  children: ReactNode[]
  className?: string
  animation?: AnimationType
  staggerDelay?: number // delay between each child in ms
  duration?: number
  threshold?: number
  once?: boolean
}

export function ScrollRevealGroup({
  children,
  className,
  animation = "fade-up",
  staggerDelay = 100,
  duration = 600,
  threshold = 0.1,
  once = true,
}: ScrollRevealGroupProps) {
  return (
    <div className={className}>
      {children.map((child, index) => (
        <ScrollReveal
          key={index}
          animation={animation}
          delay={index * staggerDelay}
          duration={duration}
          threshold={threshold}
          once={once}
        >
          {child}
        </ScrollReveal>
      ))}
    </div>
  )
}
