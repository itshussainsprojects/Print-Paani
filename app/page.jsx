import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Droplets, CheckCircle } from "lucide-react"
import TestimonialCarousel from "@/components/testimonial-carousel"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2 text-center lg:text-left">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Custom Branded Water Bottles for Your Business
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl mx-auto lg:mx-0">
                  Make a splash with PrintPaani's premium customized water bottles. Elevate your brand while making a
                  positive impact on clean water initiatives in Pakistan.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg">
                  <Link href="/quote">
                    Get a Quote <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/design">Design Your Bottle</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/paa.png"
                width={500}
                height={500}
                alt="PrintPaani Branded Water Bottles"
                className="rounded-lg object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Choose PrintPaani?</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We offer premium quality, eco-friendly options, and a commitment to social impact.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-blue-100 p-3">
                <Droplets className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold">Premium Quality</h3>
              <p className="text-center text-gray-500">
                High-quality bottles with crystal clear printing that represents your brand perfectly.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-green-100 p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-green-600"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="M7 10h10" />
                  <path d="M7 14h10" />
                  <path d="M12 10v8" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Eco-Friendly</h3>
              <p className="text-center text-gray-500">
                Sustainable options that reduce environmental impact and showcase your values.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-purple-100 p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-purple-600"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Social Impact</h3>
              <p className="text-center text-gray-500">
                Every purchase helps provide clean water to communities across Pakistan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                A simple process to get your custom branded water bottles
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Request a Quote</h3>
              <p className="text-gray-500">
                Fill out our simple form with your requirements and get a custom quote within 24 hours.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Design & Approve</h3>
              <p className="text-gray-500">
                Work with our design team to create the perfect look for your branded bottles.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Production & Delivery</h3>
              <p className="text-gray-500">
                We produce your custom bottles and deliver them to your location across Pakistan.
              </p>
            </div>
          </div>

          <div className="flex justify-center mt-12">
            <Button asChild>
              <Link href="/how-it-works">Learn More About Our Process</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Design Tool Promo */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">New Feature</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Design Your Own Bottle</h2>
                <p className="text-gray-500 md:text-xl">
                  Try our new interactive design tool to customize your water bottles before placing an order. Choose
                  colors, add your logo, and see a preview in real-time.
                </p>
                <div className="pt-4">
                  <Button asChild>
                    <Link href="/design">Try Our Design Tool</Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/pics1.jpg"
                width={600}
                height={400}
                alt="Bottle Design Tool"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Social Impact Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex justify-center">
              <Image
                src="/images/pics2.jpg"
                width={400}
                height={400}
                alt="Clean Water Initiative"
                className="rounded-lg object-cover"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
                  Our Social Impact
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Every Bottle Makes a Difference</h2>
                <p className="text-gray-500 md:text-xl">
                  For every order of PrintPaani bottles, we contribute to clean water initiatives in communities across
                  Pakistan that need it most. Your brand doesn't just stand out - it stands for something.
                </p>
                <ul className="space-y-2 pt-4">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <span>5,000+ people provided with clean water access</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <span>25+ communities served across Pakistan</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <span>Partnerships with local NGOs for sustainable impact</span>
                  </li>
                </ul>
                <div className="pt-4">
                  <Button asChild>
                    <Link href="/impact">Learn About Our Impact</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">What Our Clients Say</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hear from businesses who have partnered with PrintPaani
              </p>
            </div>
          </div>

          <TestimonialCarousel />

          <div className="flex justify-center mt-8">
            <Button asChild variant="outline">
              <Link href="/portfolio">View Our Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Products</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Choose from our range of premium water bottles
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center rounded-lg border p-6 shadow-sm">
              <Image
                src="/images/1000ml.png"
                width={150}
                height={300}
                alt="500ml Bottle"
                className="mb-4"
              />
              <h3 className="text-xl font-bold mb-2">500ml Bottle</h3>
              <p className="text-gray-500 mb-4">Perfect for events, conferences, and small gatherings.</p>
              <Button asChild variant="outline">
                <Link href="/services">Learn More</Link>
              </Button>
            </div>

            <div className="flex flex-col items-center text-center rounded-lg border p-6 shadow-sm">
              <Image
                src="/images/500ml.png"
                width={150}
                height={300}
                alt="1000ml Bottle"
                className="mb-4"
              />
              <h3 className="text-xl font-bold mb-2">1000ml Bottle</h3>
              <p className="text-gray-500 mb-4">Our most popular size for all-day hydration needs.</p>
              <Button asChild variant="outline">
                <Link href="/services">Learn More</Link>
              </Button>
            </div>

            <div className="flex flex-col items-center text-center rounded-lg border p-6 shadow-sm">
              <Image
                src="/images/1500ml.png"
                width={150}
                height={300}
                alt="1500ml Bottle"
                className="mb-4"
              />
              <h3 className="text-xl font-bold mb-2">1500ml Bottle</h3>
              <p className="text-gray-500 mb-4">Ideal for sports events and outdoor activities.</p>
              <Button asChild variant="outline">
                <Link href="/services">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Make a Splash?</h2>
              <p className="max-w-[900px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Get started with PrintPaani today and elevate your brand while making a positive impact.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" variant="secondary">
                <Link href="/quote">Request a Quote</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-transparent text-white border-white hover:bg-white hover:text-blue-600"
              >
                <Link href="/design">Design Your Bottle</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

