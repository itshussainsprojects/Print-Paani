"use client"

import { useEffect, useRef } from "react"

interface CO2AnimationProps {
  progress?: number
}

interface Particle {
  x: number
  y: number
  radius: number
  color: string
  alpha: number
  velocity: {
    x: number
    y: number
  }
}

export function CO2Animation({ progress = 1 }: CO2AnimationProps) {
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

    // Create CO2 particles
    const particles: Particle[] = []
    const particleCount = 30

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: canvas.height + Math.random() * 20,
        radius: 3 + Math.random() * 5,
        color: `rgba(${100 + Math.random() * 50}, ${100 + Math.random() * 50}, ${100 + Math.random() * 50}, 0.7)`,
        alpha: 0.7 + Math.random() * 0.3,
        velocity: {
          x: (Math.random() - 0.5) * 1,
          y: -1 - Math.random() * 2,
        },
      })
    }

    // Animation frame
    let animationFrameId: number

    const render = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw factory or emission source at the bottom
      drawFactory(ctx, canvas.width / 2, canvas.height - 20, 60, 40)

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        // Only show particles based on progress (inverse - more progress = fewer particles)
        if (Math.random() > progress * 0.8) {
          // Update position
          p.x += p.velocity.x
          p.y += p.velocity.y

          // Draw CO2 molecule
          drawCO2Molecule(ctx, p.x, p.y, p.radius, p.alpha)

          // Reset particle if it goes off screen
          if (p.y < -20 || p.x < -20 || p.x > canvas.width + 20) {
            p.x = Math.random() * canvas.width
            p.y = canvas.height + Math.random() * 20
            p.velocity.x = (Math.random() - 0.5) * 1
            p.velocity.y = -1 - Math.random() * 2
          }
        }
      }

      // Draw trees absorbing CO2 if progress is high
      if (progress > 0.3) {
        const treeCount = Math.floor(3 * progress)

        for (let i = 0; i < treeCount; i++) {
          const treeX = canvas.width * (0.2 + ((i * 0.3) % 0.8))
          const treeSize = 20 + (i % 3) * 5

          drawSimpleTree(ctx, treeX, canvas.height - 40, treeSize, progress)
        }
      }

      // Continue animation
      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      cancelAnimationFrame(animationFrameId)
    }
  }, [progress])

  // Function to draw a CO2 molecule
  function drawCO2Molecule(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number, alpha: number) {
    // Carbon atom (center)
    ctx.fillStyle = `rgba(50, 50, 50, ${alpha})`
    ctx.beginPath()
    ctx.arc(x, y, radius, 0, Math.PI * 2)
    ctx.fill()

    // Oxygen atoms (sides)
    ctx.fillStyle = `rgba(200, 0, 0, ${alpha})`
    ctx.beginPath()
    ctx.arc(x - radius * 1.5, y, radius * 0.8, 0, Math.PI * 2)
    ctx.fill()

    ctx.beginPath()
    ctx.arc(x + radius * 1.5, y, radius * 0.8, 0, Math.PI * 2)
    ctx.fill()

    // Draw "CO2" text
    ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`
    ctx.font = `${radius}px Arial`
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"
    ctx.fillText("CO₂", x, y)
  }

  // Function to draw a simple factory
  function drawFactory(ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number) {
    // Factory building
    ctx.fillStyle = "#777"
    ctx.fillRect(x - width / 2, y - height, width, height)

    // Factory chimney
    ctx.fillStyle = "#555"
    ctx.fillRect(x - width / 4, y - height - 20, width / 5, 20)
    ctx.fillRect(x + width / 10, y - height - 15, width / 5, 15)
  }

  // Function to draw a simple tree
  function drawSimpleTree(ctx: CanvasRenderingContext2D, x: number, y: number, size: number, progress: number) {
    // Tree trunk
    ctx.fillStyle = "#8B4513"
    ctx.fillRect(x - size / 8, y - size, size / 4, size)

    // Tree foliage
    ctx.fillStyle = "#228B22"
    ctx.beginPath()
    ctx.arc(x, y - size - size / 2, (size / 2) * progress, 0, Math.PI * 2)
    ctx.fill()

    // CO2 absorption effect
    if (progress > 0.5) {
      ctx.strokeStyle = "rgba(0, 200, 0, 0.2)"
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.arc(x, y - size - size / 2, size * progress, 0, Math.PI * 2)
      ctx.stroke()
    }
  }

  return (
    <div className="w-full h-full bg-teal-50 rounded-md">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  )
}
