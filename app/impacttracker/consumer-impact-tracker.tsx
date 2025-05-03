"use client"

import React, { useEffect, useState, useRef } from "react"
import { Droplets, Leaf, Wind, Share2, Info, Calendar, Users, Download } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TreeAnimation } from "./animations/tree-animation"
import { WaterAnimation } from "./animations/water-animation"
import { CO2Animation } from "./animations/co2-animation"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { toast } from "@/components/ui/use-toast"

interface ImpactData {
  bottlesDelivered: number
  timestamp: string
  businessName: string
}

interface SupabaseImpactData {
  id: string
  user_bottles: number
  total_bottles: number
  impact_history: ImpactData[]
  updated_at: string
}

export default function ConsumerImpactTracker() {
  const [activeTab, setActiveTab] = useState("your-impact")
  const [showShareDialog, setShowShareDialog] = useState(false)
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null)
  const [isGeneratingImage, setIsGeneratingImage] = useState(false)
  const [impactData, setImpactData] = useState<SupabaseImpactData | null>(null)
  const [loading, setLoading] = useState(true)
  const shareCardRef = useRef<HTMLDivElement>(null)
  const downloadLinkRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    fetchImpactData()
  }, [])

  const fetchImpactData = async () => {
    try {
      const response = await fetch('/api/impact-tracker')
      if (!response.ok) {
        throw new Error('Failed to fetch impact data')
      }
      const data = await response.json()
      setImpactData(data)
    } catch (error) {
      console.error('Error fetching impact data:', error)
      toast({
        title: "Error",
        description: "Failed to fetch impact data. Please try again later.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  // Calculate metrics for individual impact
  const userBottles = impactData?.user_bottles ?? 0
  const userPlasticBottlesSaved = userBottles * 20
  const userCo2Saved = userPlasticBottlesSaved * 0.025 // in kg
  const userTreesEquivalent = userCo2Saved / 21

  // Calculate metrics for collective impact
  const totalBottlesDelivered = impactData?.total_bottles ?? 0
  const totalPlasticBottlesSaved = totalBottlesDelivered * 20
  const totalCo2Saved = totalPlasticBottlesSaved * 0.025 // in kg
  const totalTreesEquivalent = totalCo2Saved / 21

  // Share message for social media
  const shareMessage = `I've saved ${userPlasticBottlesSaved} plastic bottles, ${userCo2Saved.toFixed(
    1,
  )} kg of CO₂, and the equivalent of ${userTreesEquivalent.toFixed(1)} trees with my PrintPaani bottles!`

  // Function to share on social media
  const shareOnSocial = (platform: "facebook" | "twitter" | "whatsapp") => {
    let shareUrl = ""
    const encodedMessage = encodeURIComponent(shareMessage)
    const encodedUrl = encodeURIComponent("https://printpaani.com")

    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedMessage}`
        break
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?text=${encodedMessage}&url=${encodedUrl}`
        break
      case "whatsapp":
        shareUrl = `https://wa.me/?text=${encodedMessage} ${encodedUrl}`
        break
    }

    // Open share dialog in a new window
    window.open(shareUrl, "_blank", "width=600,height=400")
    toast({
      title: "Sharing on " + platform,
      description: "Opening share dialog...",
    })
  }

  // Function to generate impact card image
  const generateImpactCardImage = async () => {
    if (!shareCardRef.current || isGeneratingImage) return

    setIsGeneratingImage(true)

    try {
      // Show loading toast
      toast({
        title: "Generating image...",
        description: "Please wait while we prepare your impact card",
      })

      // Dynamically import html2canvas
      const html2canvasModule = await import("html2canvas")
      const html2canvas = html2canvasModule.default

      // Create a clone of the element to ensure proper rendering
      const element = shareCardRef.current.cloneNode(true) as HTMLElement
      document.body.appendChild(element)

      // Set styles for proper rendering
      element.style.position = "absolute"
      element.style.left = "-9999px"
      element.style.width = `${shareCardRef.current.offsetWidth}px`

      // Render with higher quality
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: null,
      })

      // Remove the cloned element
      document.body.removeChild(element)

      // Create download URL
      const url = canvas.toDataURL("image/png")
      setDownloadUrl(url)

      toast({
        title: "Success!",
        description: "Your impact card image is ready to download",
      })

      // Trigger download if link is available
      if (downloadLinkRef.current) {
        downloadLinkRef.current.click()
      }
    } catch (error) {
      console.error("Error generating image:", error)
      toast({
        title: "Error",
        description: "Could not generate image. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsGeneratingImage(false)
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500"></div>
      </div>
    )
  }

  return (
    <div className="w-full max-w-5xl mx-auto p-4 md:p-6 bg-white rounded-xl shadow-lg">
      <div className="text-center mb-6">
        <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-2">Real-Time Environmental Impact</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Track the positive environmental impact of your PrintPaani purchases in real-time.
        </p>
      </div>

      <Tabs defaultValue="your-impact" className="w-full" onValueChange={setActiveTab}>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-4">
          <TabsList className="w-full sm:w-auto overflow-x-auto">
            <TabsTrigger value="your-impact" className="px-4">
              Your Impact
            </TabsTrigger>
            <TabsTrigger value="collective-impact" className="px-4">
              Collective Impact
            </TabsTrigger>
            <TabsTrigger value="impact-history" className="px-4">
              Impact Timeline
            </TabsTrigger>
          </TabsList>

          <div className="flex justify-center gap-4 mt-2 sm:mt-0">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="icon" onClick={() => setShowShareDialog(true)}>
                    <Share2 className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Share your impact</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="icon">
                  <Info className="h-4 w-4" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>About Environmental Impact</DialogTitle>
                  <DialogDescription>Learn how we calculate your environmental impact</DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">Plastic Bottles Saved</h4>
                    <p className="text-sm text-muted-foreground">
                      Each reusable bottle replaces approximately 20 single-use plastic bottles per month.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium">CO₂ Saved</h4>
                    <p className="text-sm text-muted-foreground">
                      Each plastic bottle produces about 25g (0.025 kg) of CO₂ during production.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium">Trees Equivalent</h4>
                    <p className="text-sm text-muted-foreground">
                      One mature tree absorbs approximately 21kg of CO₂ per year.
                    </p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <TabsContent value="your-impact" className="mt-0">
          <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-semibold text-teal-700 mb-4">Your Personal Environmental Impact</h3>
            <p className="text-gray-600 mb-4">
              By using {userBottles} PrintPaani bottles, you've personally made the following impact:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <MetricCard
                icon={<Droplets className="h-10 w-10 text-blue-500" />}
                title="Plastic Bottles Saved"
                value={userPlasticBottlesSaved}
                description="Single-use plastic bottles kept out of landfills and oceans"
                color="blue"
                animation={<WaterAnimation />}
              />

              <MetricCard
                icon={<Wind className="h-10 w-10 text-teal-500" />}
                title="CO₂ Saved"
                value={userCo2Saved.toFixed(1)}
                unit="kg"
                description="Reduction in carbon dioxide emissions"
                color="teal"
                animation={<CO2Animation />}
              />

              <MetricCard
                icon={<Leaf className="h-10 w-10 text-green-500" />}
                title="Trees Equivalent"
                value={userTreesEquivalent.toFixed(1)}
                description="Equivalent number of trees needed to absorb the CO₂ saved"
                color="green"
                animation={<TreeAnimation />}
              />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="collective-impact" className="mt-0">
          <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-semibold text-teal-700 mb-4">Our Collective Impact</h3>
            <p className="text-gray-600 mb-4">
              Together with other PrintPaani users, we've made this collective impact:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <MetricCard
                icon={<Droplets className="h-10 w-10 text-blue-500" />}
                title="Total Plastic Bottles Saved"
                value={totalPlasticBottlesSaved}
                description="Single-use plastic bottles kept out of landfills and oceans"
                color="blue"
                animation={<WaterAnimation />}
              />

              <MetricCard
                icon={<Wind className="h-10 w-10 text-teal-500" />}
                title="Total CO₂ Saved"
                value={totalCo2Saved.toFixed(1)}
                unit="kg"
                description="Reduction in carbon dioxide emissions"
                color="teal"
                animation={<CO2Animation />}
              />

              <MetricCard
                icon={<Leaf className="h-10 w-10 text-green-500" />}
                title="Total Trees Equivalent"
                value={totalTreesEquivalent.toFixed(1)}
                description="Equivalent number of trees needed to absorb the CO₂ saved"
                color="green"
                animation={<TreeAnimation />}
              />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="impact-history" className="mt-0">
          <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-teal-700 mb-4">Impact Timeline</h3>
            <p className="text-gray-600 mb-4">
              See how our collective impact has grown over time:
            </p>

            <div className="space-y-4">
              {impactData?.impact_history?.map((entry, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-teal-100 rounded-full">
                      <Calendar className="h-5 w-5 text-teal-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-teal-700">{entry.businessName}</h4>
                      <p className="text-sm text-gray-500">
                        {new Date(entry.timestamp).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-teal-700">
                      {entry.bottlesDelivered.toLocaleString()} bottles
                    </p>
                    <p className="text-sm text-gray-500">
                      {(entry.bottlesDelivered * 20).toLocaleString()} plastic bottles saved
                    </p>
                  </div>
                </div>
              ))}
              {(!impactData?.impact_history || impactData.impact_history.length === 0) && (
                <div className="text-center text-gray-500 py-8">
                  No impact history available yet
                </div>
              )}
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {/* Share Dialog */}
      <Dialog open={showShareDialog} onOpenChange={setShowShareDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Share Your Impact</DialogTitle>
            <DialogDescription>
              Share your environmental impact with friends and family
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div ref={shareCardRef} className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-teal-700 mb-2">My Environmental Impact</h3>
              <div className="space-y-2">
                <p className="text-gray-600">
                  I've saved {userPlasticBottlesSaved} plastic bottles from landfills
                </p>
                <p className="text-gray-600">
                  Reduced CO₂ emissions by {userCo2Saved.toFixed(1)} kg
                </p>
                <p className="text-gray-600">
                  Equivalent to {userTreesEquivalent.toFixed(1)} trees
                </p>
              </div>
            </div>
            <div className="flex justify-center gap-4">
              <Button onClick={() => shareOnSocial("facebook")} variant="outline">
                Facebook
              </Button>
              <Button onClick={() => shareOnSocial("twitter")} variant="outline">
                Twitter
              </Button>
              <Button onClick={() => shareOnSocial("whatsapp")} variant="outline">
                WhatsApp
              </Button>
            </div>
            <div className="flex justify-center">
              <Button onClick={generateImpactCardImage} disabled={isGeneratingImage}>
                {isGeneratingImage ? "Generating..." : "Download Impact Card"}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Hidden download link */}
      <a
        ref={downloadLinkRef}
        href={downloadUrl || "#"}
        download="my-environmental-impact.png"
        className="hidden"
      />
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
              React.cloneElement(animation as React.ReactElement<{ progress?: number }>, {
                progress: animationProgress,
              })}
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
