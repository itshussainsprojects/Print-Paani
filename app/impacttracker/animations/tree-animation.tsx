"use client"

import { useEffect, useRef } from "react"

interface TreeAnimationProps {
  progress?: number
}

export function TreeAnimation({ progress = 1 }: TreeAnimationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      const container = canvas.parentElement
      if (container) {
        canvas.width = container.clientWidth
        canvas.height = container.clientHeight
      }
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Calculate tree dimensions based on progress
    const maxHeight = canvas.height * 0.9
    const trunkWidth = canvas.width * 0.05
    const currentHeight = maxHeight * progress

    // Draw ground
    ctx.fillStyle = "#8B4513" // Brown color for ground
    ctx.fillRect(0, canvas.height - 10, canvas.width, 10)

    // Draw trunk
    ctx.fillStyle = "#8B4513" // Brown color for trunk
    const trunkHeight = currentHeight * 0.4
    const trunkX = canvas.width / 2 - trunkWidth / 2
    const trunkY = canvas.height - 10 - trunkHeight
    ctx.fillRect(trunkX, trunkY, trunkWidth, trunkHeight)

    // Draw foliage (tree crown)
    if (progress > 0.4) {
      const foliageProgress = (progress - 0.4) / 0.6 // Normalize progress for foliage

      ctx.fillStyle = "#228B22" // Forest green
      const foliageRadius = canvas.width * 0.2 * foliageProgress
      const foliageX = canvas.width / 2
      const foliageY = trunkY

      // Draw multiple circles for the foliage to create a tree crown effect
      ctx.beginPath()
      ctx.arc(foliageX, foliageY, foliageRadius, 0, Math.PI * 2)
      ctx.fill()

      ctx.beginPath()
      ctx.arc(foliageX - foliageRadius * 0.5, foliageY + foliageRadius * 0.3, foliageRadius * 0.8, 0, Math.PI * 2)
      ctx.fill()

      ctx.beginPath()
      ctx.arc(foliageX + foliageRadius * 0.5, foliageY + foliageRadius * 0.3, foliageRadius * 0.8, 0, Math.PI * 2)
      ctx.fill()

      ctx.beginPath()
      ctx.arc(foliageX, foliageY - foliageRadius * 0.5, foliageRadius * 0.8, 0, Math.PI * 2)
      ctx.fill()
    }

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [progress])

  return (
    <div className="w-full h-full bg-green-50 rounded-md">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  )
}
