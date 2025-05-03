import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="container px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {/* Logo and Social Section */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-6">
              <Link href="/" className="block">
                <div className="relative w-[250px] h-[300px] mx-auto sm:mx-0">
                  <Image
                    src="/images/l.png"
                    alt="PrintPaani Logo"
                    fill
                    style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
                    priority
                  />
                </div>
              </Link>
            </div>
            <p className="text-gray-400 mb-6 text-center sm:text-left">
              Premium customized water bottles for your brand. Make a splash with PrintPaani.
            </p>
            <div className="flex space-x-4 justify-center sm:justify-start">
              <Link href="https://facebook.com" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://instagram.com" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://twitter.com" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="https://linkedin.com" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-center sm:text-left">Quick Links</h3>
            <ul className="space-y-2 text-center sm:text-left">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-400 hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-gray-400 hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/impact" className="text-gray-400 hover:text-white transition-colors">
                  Social Impact
                </Link>
              </li>
            </ul>
          </div>

          {/* Important Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-center sm:text-left">Important Links</h3>
            <ul className="space-y-2 text-center sm:text-left">
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              {/* <li>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li> */}
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/quote" className="text-gray-400 hover:text-white transition-colors">
                  Get a Quote
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-center sm:text-left">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start justify-center sm:justify-start">
                <MapPin className="h-5 w-5 text-gray-400 mr-2 mt-0.5 shrink-0" />
                <span className="text-gray-400">
                  Blue Area, Sector G-5/1, House No. 123
                  <br />
                  Islamabad, Pakistan
                </span>
              </li>
              <li className="flex items-center justify-center sm:justify-start">
                <Phone className="h-5 w-5 text-gray-400 mr-2 shrink-0" />
                <span className="text-gray-400">+92 370 5248040</span>
              </li>
              <li className="flex items-center justify-center sm:justify-start">
                <Mail className="h-5 w-5 text-gray-400 mr-2 shrink-0" />
                <span className="text-gray-400">info@printpaani.pk</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} PrintPaani. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

