"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface ReadingProgressProps {
  className?: string
  showPercentage?: boolean
  color?: "gold" | "navy" | "white"
  height?: "sm" | "md" | "lg"
  // Target element to track progress for (defaults to document body)
  targetRef?: React.RefObject<HTMLElement>
}

const colorStyles = {
  gold: "bg-gold",
  navy: "bg-navy",
  white: "bg-white",
}

const heightStyles = {
  sm: "h-0.5",
  md: "h-1",
  lg: "h-1.5",
}

export function ReadingProgress({
  className,
  showPercentage = false,
  color = "gold",
  height = "md",
  targetRef,
}: ReadingProgressProps) {
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const calculateProgress = () => {
      let scrollHeight: number
      let scrollTop: number
      let clientHeight: number

      if (targetRef?.current) {
        // Track progress for specific element
        const element = targetRef.current
        const rect = element.getBoundingClientRect()
        const elementTop = rect.top + window.scrollY
        const elementBottom = elementTop + element.offsetHeight
        
        scrollTop = window.scrollY
        clientHeight = window.innerHeight
        scrollHeight = elementBottom - clientHeight
        
        // Adjust scrollTop relative to element
        scrollTop = Math.max(0, scrollTop - elementTop)
        scrollHeight = Math.max(1, element.offsetHeight - clientHeight)
      } else {
        // Track progress for entire document
        scrollHeight = document.documentElement.scrollHeight - window.innerHeight
        scrollTop = window.scrollY
        clientHeight = window.innerHeight
      }

      // Calculate progress percentage
      const currentProgress = scrollHeight > 0 
        ? Math.min(100, Math.max(0, (scrollTop / scrollHeight) * 100))
        : 0

      setProgress(currentProgress)
      
      // Show progress bar after scrolling a bit
      setIsVisible(scrollTop > 100)
    }

    // Initial calculation
    calculateProgress()

    // Use requestAnimationFrame for smooth updates
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          calculateProgress()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", calculateProgress, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", calculateProgress)
    }
  }, [targetRef])

  return (
    <div
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-opacity duration-300",
        isVisible ? "opacity-100" : "opacity-0",
        className
      )}
    >
      {/* Background track */}
      <div className={cn("w-full bg-navy/10", heightStyles[height])}>
        {/* Progress fill */}
        <div
          className={cn(
            "h-full transition-all duration-150 ease-out",
            colorStyles[color]
          )}
          style={{ 
            width: `${progress}%`,
            boxShadow: color === "gold" ? "0 0 10px rgba(201, 168, 110, 0.5)" : undefined
          }}
        />
      </div>
      
      {/* Optional percentage display */}
      {showPercentage && isVisible && (
        <div 
          className={cn(
            "absolute right-4 top-full mt-2 px-2 py-1 text-xs font-medium rounded",
            "bg-navy text-white shadow-lg"
          )}
        >
          {Math.round(progress)}%
        </div>
      )}
    </div>
  )
}
