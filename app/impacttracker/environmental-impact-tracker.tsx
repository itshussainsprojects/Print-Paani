"use client"

import React from "react"

import { useEffect, useState } from "react"
import { Droplets, Leaf, Wind } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TreeAnimation } from "./animations/tree-animation"
import { WaterAnimation } from "./animations/water-animation"
import { CO2Animation } from "./animations/co2-animation"

interface EnvironmentalImpactTrackerProps {
  bottlesDelivered?: number
}

export default function EnvironmentalImpactTracker({ bottlesDelivered = 3000 }: EnvironmentalImpactTrackerProps) {
  // Calculate the environmental metrics
  const plasticBottlesSaved = bottlesDelivered * 20
  const co2Saved = plasticBottlesSaved * 0.025 // in kg
  const treesEquivalent = co2Saved / 21

  return (
    <div className="w-full max-w-5xl mx-auto p-4 md:p-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-2">Your Environmental Impact</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          By choosing PrintPaani's custom bottles, you've made a significant positive impact on our planet.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MetricCard
          icon={<Droplets className="h-10 w-10 text-blue-500" />}
          title="Plastic Bottles Saved"
          value={plasticBottlesSaved}
          description="Single-use plastic bottles kept out of landfills and oceans"
          color="blue"
          animation={<WaterAnimation />}
        />

        <MetricCard
          icon={<Wind className="h-10 w-10 text-teal-500" />}
          title="CO₂ Saved"
          value={co2Saved.toFixed(1)}
          unit="kg"
          description="Reduction in carbon dioxide emissions"
          color="teal"
          animation={<CO2Animation />}
        />

        <MetricCard
          icon={<Leaf className="h-10 w-10 text-green-500" />}
          title="Trees Equivalent"
          value={treesEquivalent.toFixed(1)}
          description="Equivalent CO₂ absorption capacity of trees"
          color="green"
          animation={<TreeAnimation />}
        />
      </div>

      <div className="mt-8 text-center text-sm text-gray-500">
        <p>Based on {bottlesDelivered.toLocaleString()} custom bottles delivered</p>
        <p className="mt-1">Each reusable bottle replaces approximately 20 single-use plastic bottles per month</p>
      </div>
    </div>
  )
}

interface MetricCardProps {
  icon: React.ReactNode
  title: string
  value: string | number
  unit?: string
  description: string
  color: "blue" | "teal" | "green"
  animation?: React.ReactNode
}

function MetricCard({ icon, title, value, unit = "", description, color, animation }: MetricCardProps) {
  const [count, setCount] = useState(0)
  const targetValue = Number.parseFloat(value.toString())
  const [animationProgress, setAnimationProgress] = useState(0)

  // Color classes based on the color prop
  const colorClasses = {
    blue: "bg-blue-50 border-blue-200",
    teal: "bg-teal-50 border-teal-200",
    green: "bg-green-50 border-green-200",
  }

  useEffect(() => {
    // Animate the counter
    const duration = 2000 // 2 seconds
    const frameDuration = 1000 / 60 // 60fps
    const totalFrames = Math.round(duration / frameDuration)
    let frame = 0

    const counter = setInterval(() => {
      frame++
      const progress = frame / totalFrames
      setAnimationProgress(progress)
      const currentCount = Math.floor(targetValue * progress)

      setCount(currentCount)

      if (frame === totalFrames) {
        clearInterval(counter)
        setCount(targetValue)
        setAnimationProgress(1)
      }
    }, frameDuration)

    return () => clearInterval(counter)
  }, [targetValue])

  return (
    <Card className={`${colorClasses[color]} border-2 overflow-hidden transition-all duration-300 hover:shadow-lg`}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          {icon}
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center justify-center py-4">
          <div className="text-4xl md:text-5xl font-bold mb-2 flex items-baseline">
            <AnimatedCounter value={count} />
            {unit && <span className="ml-1 text-2xl">{unit}</span>}
          </div>
          <CardDescription className="text-center mb-4">{description}</CardDescription>

          {/* Animation container */}
          <div className="w-full h-32 mt-2 relative overflow-hidden rounded-md">
            {React.isValidElement(animation) &&
              React.cloneElement(animation as React.ReactElement, { progress: animationProgress })}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function AnimatedCounter({ value }: { value: number }) {
  // Format the number with commas for thousands
  const formattedValue = typeof value === "number" ? value.toLocaleString("en-US", { maximumFractionDigits: 1 }) : value

  return <span className="tabular-nums">{formattedValue}</span>
}
