"use client"

import { useState } from "react"
import { Loader2, ShoppingCart } from "lucide-react"
import { track } from "@vercel/analytics"

interface BuyButtonProps {
  productId: string
  price: number
  label?: string
  className?: string
}

export function BuyButton({ productId, price, label = "Buy Now", className = "" }: BuyButtonProps) {
  const [loading, setLoading] = useState(false)

  const handleCheckout = async () => {
    setLoading(true)
    
    // Track checkout initiation
    track("checkout_started", { productId, price })
    
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId }),
      })

      const data = await response.json()
      
      if (data.url) {
        window.location.href = data.url
      } else {
        throw new Error("No checkout URL returned")
      }
    } catch (error) {
      console.error("Checkout error:", error)
      alert("Something went wrong. Please try again.")
      setLoading(false)
    }
  }

  return (
    <button
      onClick={handleCheckout}
      disabled={loading}
      className={`flex items-center justify-center gap-2 rounded-lg bg-gold px-4 sm:px-6 py-3.5 text-sm sm:text-base font-semibold text-navy transition-colors hover:bg-navy hover:text-white disabled:opacity-50 ${className}`}
    >
      {loading ? (
        <>
          <Loader2 className="h-5 w-5 animate-spin" />
          Processing...
        </>
      ) : (
        <>
          <ShoppingCart className="h-5 w-5" />
          {label} – ${price}
        </>
      )}
    </button>
  )
}

