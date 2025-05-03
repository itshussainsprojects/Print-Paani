import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About PrintPaani</h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Learn about our mission, values, and the impact we're making together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex justify-center">
              <Image
                src="/images/pics1.jpg"
                width={400}
                height={400}
                alt="PrintPaani Founders"
                className="rounded-lg object-cover"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Story</h2>
                <p className="text-gray-500 md:text-xl">
                  PrintPaani was founded in 2018 with a simple yet powerful vision: to transform the branded water
                  bottle industry in Pakistan by combining premium quality with social responsibility.
                </p>
                <p className="text-gray-500 md:text-xl">
                  Our founder,Haider Amin Khan , saw an opportunity to help businesses elevate their branding while
                  simultaneously addressing Pakistan's water crisis. They believed that every business interaction could
                  be a force for good.
                </p>
                <p className="text-gray-500 md:text-xl">
                  Today, PrintPaani serves hundreds of businesses across Pakistan, providing them with beautifully
                  branded water bottles while contributing to clean water initiatives in underserved communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Mission</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                At PrintPaani, our mission is twofold: to provide businesses with exceptional branded water bottles that
                enhance their image, and to leverage our success to bring clean water to communities in need across
                Pakistan.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-blue-100 p-3">
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
                  className="h-6 w-6 text-blue-600"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="m15 9-6 6" />
                  <path d="m9 9 6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Quality</h3>
              <p className="text-center text-gray-500">
                We never compromise on the quality of our products or service.
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
                  <path d="M7.5 12h9" />
                  <path d="M12 7.5v9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Sustainability</h3>
              <p className="text-center text-gray-500">We're committed to environmentally responsible practices.</p>
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
              <h3 className="text-xl font-bold">Impact</h3>
              <p className="text-center text-gray-500">
                We believe business can be a powerful force for positive change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Impact */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Social Impact</h2>
                <p className="text-gray-500 md:text-xl">
                  At PrintPaani, we believe that access to clean water is a fundamental human right. That's why we've
                  made it our mission to contribute to clean water initiatives with every purchase.
                </p>
                <p className="text-gray-500 md:text-xl">
                  For every 100 bottles sold, we fund a clean water project that provides safe drinking water to a
                  family in need. To date, we've helped over 5,000 people gain access to clean water.
                </p>
                <p className="text-gray-500 md:text-xl">
                  We partner with established NGOs and water organizations to ensure that our contributions make a real
                  difference in communities facing water scarcity and contamination across Pakistan.
                </p>
                <ul className="space-y-2 pt-4">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <span>Water filtration systems installed in rural communities</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <span>Clean water access for schools and healthcare facilities</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <span>Education programs on water conservation and hygiene</span>
                  </li>
                </ul>
                <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                  <Button asChild size="lg">
                    <Link href="/impact">Learn More About Our Impact</Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/paa.png"
                width={400}
                height={400}
                alt="PrintPaani Social Impact"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Team</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Meet the passionate individuals behind PrintPaani.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center space-y-4 text-center">
              <Image
                src="/images/user1.png"
                width={200}
                height={200}
                alt="haider amin khan "
                className="rounded-full object-cover"
              />
              <div>
                <h3 className="text-xl font-bold">Haider Amin Khan</h3>
                <p className="text-gray-500">Co-Founder & CEO</p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <Image
                src="/images/user2.png"
                width={200}
                height={200}
                alt="Fatima Khan"
                className="rounded-full object-cover"
              />
              <div>
                <h3 className="text-xl font-bold">Fatima Khan</h3>
                <p className="text-gray-500">Co-Founder & COO</p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <Image
                src="/images/user3.png"
                width={200}
                height={200}
                alt="Ahmed Raza"
                className="rounded-full object-cover"
              />
              <div>
                <h3 className="text-xl font-bold">Ahmed Raza</h3>
                <p className="text-gray-500">Head of Design</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Join Us in Making a Difference</h2>
              <p className="max-w-[900px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Partner with PrintPaani for your branded water bottles and be part of our mission to provide clean water
                to all.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" variant="secondary">
                <Link href="/quote">Get Started</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-transparent text-white border-white hover:bg-white hover:text-blue-600"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

