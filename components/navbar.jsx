"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Design", href: "/design" },
    { name: "Impact", href: "/impact" },
    { name: "FAQ", href: "/faq" },
    { name: "Tracker", href: "/impacttracker" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container px-4 md:px-6">
        <div className="flex h-20 sm:h-24 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="block">
              <div className="relative w-[100px] h-[165px] sm:w-[280px] sm:h-[90px] md:w-[250px] md:h-[165px]">
                <Image
                  src="/images/l.png"
                  alt="PrintPaani Logo"
                  fill
                  style={{ objectFit: 'contain' }}
                  priority
                />
              </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors hover:text-blue-600"
            >
              {link.name}
            </Link>
          ))}
            <Button asChild className="ml-4">
            <Link href="/quote">Get a Quote</Link>
          </Button>
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="px-2">
                  <div className="mb-8 mt-6">
                    <div className="relative w-[200px] h-[65px] mx-auto">
                      <Image
                        src="/images/l.png"
                        alt="PrintPaani Logo"
                        fill
                        style={{ objectFit: 'contain' }}
                        priority
                      />
                    </div>
              </div>
                  <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg font-medium transition-colors hover:text-blue-600"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <Button asChild className="mt-4">
                  <Link href="/quote" onClick={() => setIsOpen(false)}>
                    Get a Quote
                  </Link>
                </Button>
              </nav>
                </div>
            </SheetContent>
          </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

