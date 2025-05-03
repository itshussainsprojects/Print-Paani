import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ImpactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Social Impact</h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                How PrintPaani is making a difference in communities through clean water initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Overview */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Mission</h2>
                <p className="text-gray-500 md:text-xl">
                  At PrintPaani, we believe that access to clean water is a fundamental human right. Our mission goes beyond providing premium branded water bottles – we're committed to making a tangible difference in communities facing water scarcity and contamination.
                </p>
                <p className="text-gray-500 md:text-xl">
                  For every 100 bottles sold, we fund a clean water project that provides safe drinking water to a family in need. To date, we've helped over 5,000 people gain access to clean water through our initiatives.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?height=400&width=400"
                width={400}
                height={400}
                alt="Clean Water Initiative"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Impact in Numbers</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Every purchase contributes to these growing numbers.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
              <div className="text-5xl font-bold text-blue-600">5,000+</div>
              <h3 className="text-xl font-bold">People Impacted</h3>
              <p className="text-center text-gray-500">
                Individuals who now have access to clean, safe drinking water.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
              <div className="text-5xl font-bold text-green-600">25+</div>
              <h3 className="text-xl font-bold">Communities Served</h3>
              <p className="text-center text-gray-500">
                Villages and neighborhoods where we've implemented clean water projects.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
              <div className="text-5xl font-bold text-purple-600">500,000+</div>
              <h3 className="text-xl font-bold">Liters of Clean Water</h3>
              <p className="text-center text-gray-500">
                The estimated amount of clean water provided through our initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">How It Works</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our approach to creating sustainable clean water solutions.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-8 lg:gap-12">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex justify-center">
                <div className="relative flex h-[300px] w-[300px] items-center justify-center rounded-full bg-blue-100 lg:h-[400px] lg:w-[400px]">
                  <div className="absolute flex h-20 w-20 items-center justify-center rounded-full bg-blue-600 text-3xl font-bold text-white">
                    1
                  </div>
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    width={300}
                    height={300}
                    alt="Identify Communities"
                    className="rounded-full object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Identify Communities in Need</h3>
                  <p className="text-gray-500 md:text-lg">
                    We work with local NGOs and water experts to identify communities facing water scarcity or contamination issues. We prioritize areas with the greatest need and where our intervention can make a significant impact.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4 order-2 lg:order-1">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Implement Sustainable Solutions</h3>
                  <p className="text-gray-500 md:text-lg">
                    Depending on the specific needs of each community, we implement various solutions including water purification systems, wells, rainwater harvesting systems, and filtration technologies. We focus on sustainable solutions that can be maintained by the community.
                  </p>
                </div>
              </div>
              <div className="flex justify-center order-1 lg:order-2">
                <div className="relative flex h-[300px] w-[300px] items-center justify-center rounded-full bg-green-100 lg:h-[400px] lg:w-[400px]">
                  <div className="absolute flex h-20 w-20 items-center justify-center rounded-full bg-green-600 text-3xl font-bold text-white">
                    2
                  </div>
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    width={300}
                    height={300}
                    alt="Implement Solutions"
                    className="rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex justify-center">
                <div className="relative flex h-[300px] w-[300px] items-center justify-center rounded-full bg-purple-100 lg:h-[400px] lg:w-[400px]">
                  <div className="absolute flex h-20 w-20 items-center justify-center rounded-full bg-purple-600 text-3xl font-bold text-white">
                    3
                  </div>
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    width={300}
                    height={300}
                    alt="Education and Training"
                    className="rounded-full object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Education and Training</h3>
                  <p className="text-gray-500 md:text-lg">
                    We provide education on water conservation, hygiene practices, and system maintenance to ensure long-term success. Community members are trained to maintain and operate the water systems, creating a sense of ownership and sustainability.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4 order-2 lg:order-1">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Monitor and Report</h3>
                  <p className="text-gray-500 md:text-lg">
                    We continuously monitor the impact of our projects and provide transparent reporting to our customers and partners. Each project is evaluated for effectiveness, and we make adjustments as needed to ensure optimal results.
                  </p>
                </div>
              </div>
              <div className="flex justify-center order-1 lg:order-2">
                <div className="relative flex h-[300px] w-[300px] items-center justify-center rounded-full bg-orange-100 lg:h-[400px] lg:w-[400px]">
                  <div className="absolute flex h-20 w-20 items-center justify-center rounded-full bg-orange-600 text-3xl font-bold text-white">
                    4
                  </div>
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    width={300}
                    height={300}
                    alt="Monitor and Report"
                    className="rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Featured Projects</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Some of the communities we've helped through our clean water initiatives.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col rounded-lg border overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  fill
                  alt="Lahore Village Project"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col p-6">
                <h3 className="text-xl font-bold mb-2">Lahore Village Project</h3>
                <p className="text-gray-500 mb-4">
                  Installed a community water purification system serving 500 people in a drought-prone village in Rajasthan.
                </p>
                <ul className="space-y-1 text-gray-500 mb-4">
                  <li>• 500 people impacted</li>
                  <li>• Water purification system</li>
                  <li>• Completed: March 2022</li>
                </ul>
                <Button asChild variant="outline" className="mt-auto">
                  <Link href="/impact/rajasthan-project">View Project Details</Link>
                </Button>
              </div>
            </div>
            <div className="flex flex-col rounded-lg border overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  fill
                  alt="Maharashtra School Initiative"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col p-6">
                <h3 className="text-xl font-bold mb-2">Islamabad School Initiative</h3>
                <p className="text-gray-500 mb-4">
                  Provided clean drinking water systems to 5 schools in rural Maharashtra, benefiting over 1,200 students.
                </p>
                <ul className="space-y-1 text-gray-500 mb-4">
                  <li>• 1,200 students impacted</li>
                  <li>• 5 school water systems</li>
                  <li>• Completed: August 2022</li>
                </ul>
                <Button asChild variant="outline" className="mt-auto">
                  <Link href="/impact/maharashtra-project">View Project Details</Link>
                </Button>
              </div>
            </div>
            <div className="flex flex-col rounded-lg border overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  fill
                  alt="Bihar Community Well"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col p-6">
                <h3 className="text-xl font-bold mb-2">Multan Community Well</h3>
                <p className="text-gray-500 mb-4">
                  Constructed a deep well with filtration system in a village in Bihar, providing clean water to 300 residents.
                </p>
                <ul className="space-y-1 text-gray-500 mb-4">
                  <li>• 300 people impacted</li>
                  <li>• Deep well with filtration</li>
                  <li>• Completed: December 2022</li>
                </ul>
                <Button asChild variant="outline" className="mt-auto">
                  <Link href="/impact/bihar-project">View Project Details</Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <Button asChild>
              <Link href="/impact/all-projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Partner With Us */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?height=400&width=400"
                width={400}
                height={400}
                alt="Partner With Us"
                className="rounded-lg object-cover"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Partner With Us</h2>
                <p className="text-gray-500 md:text-xl">
                  Beyond purchasing branded water bottles, there are many ways your organization can partner with PrintPaani to make a bigger impact.
                </p>
                <ul className="space-y-2 text-gray-500 md:text-xl">
                  <li className="flex items-start">
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
                      className="mr-2 h-5 w-5 text-blue-600 shrink-0 mt-0.5"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Co-branded clean water projects</span>
                  </li>
                  <li className="flex items-start">
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
                      className="mr-2 h-5 w-5 text-blue-600 shrink-0 mt-0.5"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Corporate volunteer opportunities</span>
                  </li>
                  <li className="flex items-start">
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
                      className="mr-2 h-5 w-5 text-blue-600 shrink-0 mt-0.5"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Matching donation programs</span>
                  </li>
                  <li className="flex items-start">
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
                      className="mr-2 h-5 w-5 text-blue-600 shrink-0 mt-0.5"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Sponsorship of specific community projects</span>
                  </li>
                </ul>
                <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                  <Button asChild>
                    <Link href="/contact">Contact Us to Partner</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

