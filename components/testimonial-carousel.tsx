"use client"

import type React from "react"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "Ahmed Khan",
    role: "Marketing Director, TechPak",
    image: "/images/user1.png",
    rating: 5,
    text: "PrintPaani delivered exceptional quality bottles with our branding. The process was smooth and the results were outstanding. Our clients loved the premium feel of the bottles.",
    bottleImage: "/images/b1.png",
  },
  {
    id: 2,
    name: "Fatima Ahmed",
    role: "CEO, GreenPak Solutions",
    image: "/images/user2.png",
    rating: 5,
    text: "We love that our branded bottles not only look great but also contribute to clean water initiatives. It aligns perfectly with our company values and sustainability goals.",
    bottleImage: "/images/greenpak.png",
  },
  {
    id: 3,
    name: "Hassan Ali",
    role: "Event Manager, Lahore Expo",
    image: "/images/user3.png",
    rating: 5,
    text: "The customization options are fantastic. Our event attendees loved the personalized water bottles with our logo. We've received countless compliments on the design.",
    bottleImage: "/images/lahoreexpo.png",
  },
  {
    id: 4,
    name: "Zainab Malik",
    role: "Brand Manager, FutureTech",
    image: "/images/user6.png",
    rating: 4,
    text: "PrintPaani's team was incredibly responsive and helpful throughout the design process. The bottles arrived on time and looked even better than we expected.",
    bottleImage: "/images/futuretech.png",
  },
  {
    id: 5,
    name: "Imran Siddiqui",
    role: "Conference Organizer, PakDev",
    image: "/images/user4.png",
    rating: 5,
    text: "We ordered 1000 bottles for our annual conference, and they were a huge hit! The quality was excellent, and the social impact aspect resonated with our attendees.",
    bottleImage: "/images/pakdev.png",
  },
]

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }, [])

  // Auto-play functionality
  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide()
      }, 5000)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isAutoPlaying, nextSlide])

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false)
  const handleMouseLeave = () => setIsAutoPlaying(true)

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      nextSlide()
    }

    if (touchStart - touchEnd < -50) {
      // Swipe right
      prevSlide()
    }
  }

  // Calculate visible testimonials (current, prev, next)
  const getVisibleTestimonials = () => {
    const prev = currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1
    const next = currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1

    return {
      prev,
      current: currentIndex,
      next,
    }
  }

  const { prev, current, next } = getVisibleTestimonials()

  return (
    <div
      className="relative w-full overflow-hidden py-10"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="container px-4 md:px-6 mx-auto">
        <div className="relative">
          {/* Carousel container */}
          <div className="flex items-center justify-center">
            {/* Desktop view - show 3 cards */}
            <div className="hidden md:flex items-center justify-center gap-4 w-full">
              <Card className="w-full max-w-sm opacity-60 scale-90 transition-all duration-300 shadow-md">
                <CardContent className="p-6">
                  <TestimonialCard testimonial={testimonials[prev]} />
                </CardContent>
              </Card>

              <Card className="w-full max-w-sm z-10 scale-105 transition-all duration-300 shadow-lg">
                <CardContent className="p-6">
                  <TestimonialCard testimonial={testimonials[current]} />
                </CardContent>
              </Card>

              <Card className="w-full max-w-sm opacity-60 scale-90 transition-all duration-300 shadow-md">
                <CardContent className="p-6">
                  <TestimonialCard testimonial={testimonials[next]} />
                </CardContent>
              </Card>
            </div>

            {/* Mobile view - show only current card */}
            <div className="md:hidden w-full">
              <Card className="w-full transition-all duration-300 shadow-lg">
                <CardContent className="p-6">
                  <TestimonialCard testimonial={testimonials[current]} />
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Navigation buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full shadow-lg z-10"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6" />
            <span className="sr-only">Previous</span>
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full shadow-lg z-10"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6" />
            <span className="sr-only">Next</span>
          </Button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-6 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? "bg-blue-600 w-4" : "bg-gray-300"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

// Individual testimonial card component
function TestimonialCard({ testimonial }: { testimonial: (typeof testimonials)[0] }) {
  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center">
          <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
            <Image src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} fill className="object-cover" />
          </div>
          <div>
            <h4 className="font-bold">{testimonial.name}</h4>
            <p className="text-sm text-gray-500">{testimonial.role}</p>
          </div>
        </div>
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
            />
          ))}
        </div>
      </div>

      <div className="flex-1">
        <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
      </div>

      <div className="flex items-center justify-center mt-4 pt-4 border-t">
        <div className="relative h-32 w-16">
          <Image
            src={testimonial.bottleImage || "/placeholder.svg"}
            alt="Branded Bottle"
            fill
            className="object-contain"
          />
        </div>
        <p className="text-sm text-gray-500 ml-4">
          Custom branded bottle for {testimonial.name.split(" ")[0]}'s company
        </p>
      </div>
    </div>
  )
}

