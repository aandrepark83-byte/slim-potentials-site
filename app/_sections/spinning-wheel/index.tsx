"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X, Gift } from "lucide-react"

const wheelSegments = [
  { text: "25% OFF", color: "bg-red-500", discount: 25 },
  { text: "FREE SHIPPING", color: "bg-black", discount: "free-shipping" }, // Changed from bg-blue-500 to bg-black
  { text: "30% OFF", color: "bg-green-500", discount: 30 },
  { text: "BUY 1 GET 1", color: "bg-orange-500", discount: "bogo" },
  { text: "40% OFF", color: "bg-purple-500", discount: 40 },
  { text: "FREE BOTTLE", color: "bg-pink-500", discount: "free-bottle" },
  { text: "35% OFF", color: "bg-emerald-500", discount: 35 },
  { text: "50% OFF", color: "bg-emerald-600", discount: 50 },
]

export function SpinningWheel() {
  const [isVisible, setIsVisible] = useState(false)
  const [isSpinning, setIsSpinning] = useState(false)
  const [rotation, setRotation] = useState(0)
  const [result, setResult] = useState<string | null>(null)
  const [email, setEmail] = useState("")
  const [animationId, setAnimationId] = useState<number | null>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 10000)

    return () => clearTimeout(timer)
  }, [])

  const spinWheel = () => {
    if (isSpinning) return

    setIsSpinning(true)
    const randomIndex = Math.floor(Math.random() * wheelSegments.length)
    const segmentAngle = 360 / wheelSegments.length

    const segmentCenter = randomIndex * segmentAngle + segmentAngle / 2
    const finalRotation = rotation + 1800 + (360 - segmentCenter)

    let startTime: number
    const startRotation = rotation
    const duration = 4000

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      const easeOut = 1 - Math.pow(1 - progress, 3)
      const currentRotation = startRotation + (finalRotation - startRotation) * easeOut

      setRotation(currentRotation)

      if (progress < 1) {
        const id = requestAnimationFrame(animate)
        setAnimationId(id)
      } else {
        setIsSpinning(false)
        const selectedSegment = wheelSegments[randomIndex]
        setResult(selectedSegment.text)
        setAnimationId(null)
      }
    }

    const id = requestAnimationFrame(animate)
    setAnimationId(id)
  }

  useEffect(() => {
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [animationId])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    console.log("Email submitted:", email)
    alert(`Congratulations! Your ${result} discount code has been sent to ${email}`)
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
      <div className="bg-background rounded-2xl p-6 md:p-8 max-w-md w-full relative shadow-2xl border border-primary/20">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="text-center mb-6">
          <div className="flex justify-center mb-3">
            <Gift className="h-10 w-10 text-primary animate-pulse" />
          </div>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2">🎉 Exclusive Offer!</h2>
          <p className="text-muted-foreground text-sm">Spin now for massive savings on Slim Potentials supplements!</p>
          <div className="mt-2 text-xs text-primary font-semibold bg-primary/10 px-3 py-1 rounded-full inline-block">
            ⏰ Limited Time Only
          </div>
        </div>

        {!result ? (
          <>
            <div className="relative w-64 h-64 mx-auto mb-6">
              <div className="absolute inset-0 rounded-full border-8 border-gradient-to-r from-primary to-primary/60 shadow-2xl">
                <div className="w-full h-full rounded-full border-4 border-white shadow-inner overflow-hidden relative">
                  <div
                    className="w-full h-full relative"
                    style={{
                      transform: `rotate(${rotation}deg)`,
                      transformOrigin: "center center",
                    }}
                  >
                    {wheelSegments.map((segment, index) => {
                      const angle = (360 / wheelSegments.length) * index
                      return (
                        <div
                          key={index}
                          className={`absolute w-full h-full ${segment.color} flex items-center justify-center shadow-inner`}
                          style={{
                            clipPath: `polygon(50% 50%, ${50 + 50 * Math.cos(((angle - 22.5) * Math.PI) / 180)}% ${50 + 50 * Math.sin(((angle - 22.5) * Math.PI) / 180)}%, ${50 + 50 * Math.cos(((angle + 22.5) * Math.PI) / 180)}% ${50 + 50 * Math.sin(((angle + 22.5) * Math.PI) / 180)}%)`,
                          }}
                        >
                          <span
                            className="text-xs font-bold drop-shadow-lg text-white" // Changed from text-black to text-white for better contrast
                            style={{
                              transform: `rotate(${angle}deg) translateY(-80px)`,
                              transformOrigin: "center center",
                            }}
                          >
                            {segment.text}
                          </span>
                        </div>
                      )
                    })}
                  </div>

                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full border-4 border-primary shadow-lg z-10"></div>
                </div>
              </div>

              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 z-20">
                <div className="relative">
                  <div className="w-0 h-0 border-l-6 border-r-6 border-b-12 border-l-transparent border-r-transparent border-b-primary drop-shadow-xl"></div>
                  <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-primary rounded-full shadow-lg"></div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button
                onClick={spinWheel}
                disabled={isSpinning}
                size="lg"
                className="px-8 py-3 font-semibold text-lg bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSpinning ? "🎰 Spinning..." : "🎯 SPIN TO WIN!"}
              </Button>
              <p className="text-xs text-muted-foreground mt-2">No purchase necessary • Everyone wins!</p>
            </div>
          </>
        ) : (
          <>
            <div className="text-center mb-6">
              <div className="text-5xl font-bold text-primary mb-2 animate-bounce">{result}</div>
              <div className="text-lg font-semibold text-green-600 mb-2">🎉 Congratulations!</div>
              <p className="text-muted-foreground">Enter your email to claim your exclusive reward!</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-center"
                required
              />
              <Button
                type="submit"
                size="lg"
                className="w-full font-semibold text-lg bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600"
              >
                🎁 Claim My {result} Reward
              </Button>
            </form>

            <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-xs text-green-700 text-center font-medium">
                ✅ Your discount code will be sent instantly to your email
              </p>
            </div>

            <p className="text-xs text-muted-foreground text-center mt-4">
              By submitting, you agree to receive promotional emails from Slim Potentials. Unsubscribe anytime.
            </p>
          </>
        )}
      </div>
    </div>
  )
}
