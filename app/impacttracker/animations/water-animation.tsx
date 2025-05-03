"use client"

import { useEffect, useRef } from "react"

interface WaterAnimationProps {
  progress?: number
}

export function WaterAnimation({ progress = 1 }: WaterAnimationProps) {
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

    // Animation frame
    let animationFrameId: number
    let offset = 0

    const render = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Calculate water level based on progress
      const waterLevel = canvas.height * (1 - progress * 0.7)

      // Draw water background
      const gradient = ctx.createLinearGradient(0, waterLevel, 0, canvas.height)
      gradient.addColorStop(0, "rgba(30, 144, 255, 0.6)")
      gradient.addColorStop(1, "rgba(0, 90, 190, 0.8)")

      ctx.fillStyle = gradient
      ctx.fillRect(0, waterLevel, canvas.width, canvas.height - waterLevel)

      // Draw water waves
      ctx.beginPath()
      ctx.moveTo(0, waterLevel)

      // Draw sine wave for water surface
      for (let x = 0; x < canvas.width; x++) {
        const y = waterLevel + Math.sin(x * 0.05 + offset) * 3
        ctx.lineTo(x, y)
      }

      ctx.lineTo(canvas.width, canvas.height)
      ctx.lineTo(0, canvas.height)
      ctx.closePath()
      ctx.fillStyle = "rgba(30, 144, 255, 0.3)"
      ctx.fill()

      // Draw water bottles if progress is high enough
      if (progress > 0.3) {
        const bottleCount = Math.floor(5 * progress)

        for (let i = 0; i < bottleCount; i++) {
          const bottleX = canvas.width * (0.1 + ((i * 0.2) % 0.8))
          const bottleY = waterLevel + 20 + (i % 3) * 10

          // Draw bottle
          drawBottle(ctx, bottleX, bottleY, 10, 25)
        }
      }

      // Update offset for wave animation
      offset += 0.05

      // Continue animation
      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      cancelAnimationFrame(animationFrameId)
    }
  }, [progress])

  // Function to draw a simple bottle
  function drawBottle(ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number) {
    // Bottle body
    ctx.fillStyle = "rgba(200, 230, 255, 0.7)"
    ctx.beginPath()
    ctx.roundRect(x - width / 2, y - height / 2, width, height, 3)
    ctx.fill()

    // Bottle neck
    ctx.fillStyle = "rgba(200, 230, 255, 0.7)"
    ctx.beginPath()
    ctx.roundRect(x - width / 4, y - height / 2 - height / 6, width / 2, height / 6, 2)
    ctx.fill()

    // Bottle cap
    ctx.fillStyle = "rgba(0, 100, 200, 0.8)"
    ctx.beginPath()
    ctx.arc(x, y - height / 2 - height / 6, width / 4, 0, Math.PI * 2)
    ctx.fill()
  }

  return (
    <div className="w-full h-full bg-blue-50 rounded-md">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  )
}
