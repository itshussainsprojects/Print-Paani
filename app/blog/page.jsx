"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "sonner"

export default function BlogPage() {
  const [isLoading, setIsLoading] = useState(false)
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">PrintPaani Blog</h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Insights on branding, hydration, and our social impact initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex justify-center">
              <Image
                src="/images/pics1.jpg"
                width={600}
                height={400}
                alt="The Power of Branded Water Bottles"
                className="rounded-lg object-cover"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="inline-block rounded-md bg-blue-100 px-3 py-1 text-sm text-blue-800">Featured</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  The Power of Branded Water Bottles in Corporate Marketing
                </h2>
                <p className="text-gray-500 md:text-xl">
                  Discover how custom branded water bottles can elevate your corporate marketing strategy and create
                  lasting impressions with clients and employees.
                </p>
                <p className="text-sm text-gray-500">By Haider Ali | June 15, 2024 | 8 min read</p>
              </div>
              <Button asChild>
                <Link href="/blog/power-of-branded-water-bottles">Read More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Articles */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Latest Articles</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore our latest insights and stories.
              </p>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="p-0">
                <Image
                  src="/images/hydration.jpg"
                  width={400}
                  height={200}
                  alt="Hydration and Productivity"
                  className="aspect-[2/1] w-full object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="p-6">
                <div className="inline-block rounded-md bg-green-100 px-3 py-1 text-sm text-green-800 mb-3">Health</div>
                <CardTitle className="text-xl mb-2">The Link Between Hydration and Workplace Productivity</CardTitle>
                <CardDescription>
                  Research shows that proper hydration can increase productivity by up to 14%. Learn how providing
                  branded water bottles can benefit your team.
                </CardDescription>
                <p className="text-sm text-gray-500 mt-4">By Hassan Khan | May 28, 2024</p>
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-0">
                <Button asChild variant="outline" size="sm">
                  <Link href="https://www.employhealth.com.au/critical-hydration-in-the-workplace/#:~:text=Boosting%20Productivity%3A,increase%20in%20mistakes%20and%20accidents.">Read Article</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="p-0">
                <Image
                  src="/images/sustain.jpg"
                  width={400}
                  height={200}
                  alt="Sustainable Branding"
                  className="aspect-[2/1] w-full object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="p-6">
                <div className="inline-block rounded-md bg-orange-100 px-3 py-1 text-sm text-orange-800 mb-3">
                  Sustainability
                </div>
                <CardTitle className="text-xl mb-2">Sustainable Branding: Making an Eco-Friendly Impact</CardTitle>
                <CardDescription>
                  How eco-friendly branded water bottles can enhance your company's sustainability initiatives while
                  making a positive impression.
                </CardDescription>
                <p className="text-sm text-gray-500 mt-4">By Zakir khan | April 15, 2025</p>
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-0">
                <Button asChild variant="outline" size="sm">
                  <Link href="https://studionoel.co.uk/sustainability-branding#:~:text=By%20reducing%20environmental%20impact%2C%20sustainable,ensuring%20long%2Dterm%20economic%20sustainability.">Read Article</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="p-0">
                <Image
                  src="/images/senit.png"
                  width={400}
                  height={200}
                  alt="Clean Water Initiative"
                  className="aspect-[2/1] w-full object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="p-6">
                <div className="inline-block rounded-md bg-purple-100 px-3 py-1 text-sm text-purple-800 mb-3">
                  Social Impact
                </div>
                <CardTitle className="text-xl mb-2">How Our Clean Water Initiative is Changing Lives</CardTitle>
                <CardDescription>
                  A look at the communities benefiting from PrintPaani's clean water projects and how your purchases
                  make a difference.
                </CardDescription>
                <p className="text-sm text-gray-500 mt-4">By Saif Khan | March 22, 2023</p>
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-0">
                <Button asChild variant="outline" size="sm">
                  <Link href="https://mtjfoundation.org/2025/02/20/the-power-of-clean-water-transforming-lives-one-drop-at-a-time/#:~:text=Through%20our%20Clean%20Water%20Initiative,walk%20miles%20to%20fetch%20it.">Read Article</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="p-0">
                <Image
                  src="/images/advertise.jpg"
                  width={400}
                  height={200}
                  alt="Event Branding"
                  className="aspect-[2/1] w-full object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="p-6">
                <div className="inline-block rounded-md bg-blue-100 px-3 py-1 text-sm text-blue-800 mb-3">
                  Marketing
                </div>
                <CardTitle className="text-xl mb-2">
                  Maximizing Brand Visibility at Events with Custom Water Bottles
                </CardTitle>
                <CardDescription>
                  Strategic tips for using branded water bottles to enhance your presence at conferences, trade shows,
                  and corporate events.
                </CardDescription>
                <p className="text-sm text-gray-500 mt-4">By Farhan khalid | February 10, 2023</p>
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-0">
                <Button asChild variant="outline" size="sm">
                  <Link href="https://www.thebrandcompany.net/en_GB/blog/events-9/personalized-water-bottles-for-companies-impact-and-benefits-in-events-342?srsltid=AfmBOop1hdXQU9oC3e1qnmxHCXQeXJIZEgdHbkEnxDwYO-gJWLe1tA3J">Read Article</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="p-0">
                <Image
                  src="/images/b1.png"
                  width={400}
                  height={200}
                  alt="Design Trends"
                  className="aspect-[2/1] w-full object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="p-6">
                <div className="inline-block rounded-md bg-pink-100 px-3 py-1 text-sm text-pink-800 mb-3">Design</div>
                <CardTitle className="text-xl mb-2">2023 Design Trends for Branded Water Bottles</CardTitle>
                <CardDescription>
                  Stay ahead of the curve with the latest design trends and innovations in branded water bottle
                  aesthetics.
                </CardDescription>
                <p className="text-sm text-gray-500 mt-4">By Fawad Alam | January 18, 2023</p>
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-0">
                <Button asChild variant="outline" size="sm">
                  <Link href="https://www.pinterest.com/pin/top-10-packaging-design-trends-how-to-stay-ahead-in-2023--121597258675188238/">Read Article</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="p-0">
                <Image
                  src="/images/roi.png"
                  width={400}
                  height={200}
                  alt="ROI of Branded Merchandise"
                  className="aspect-[2/1] w-full object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="p-6">
                <div className="inline-block rounded-md bg-yellow-100 px-3 py-1 text-sm text-yellow-800 mb-3">
                  Business
                </div>
                <CardTitle className="text-xl mb-2">Measuring the ROI of Branded Merchandise</CardTitle>
                <CardDescription>
                  How to calculate and maximize the return on investment from your branded water bottle campaigns.
                </CardDescription>
                <p className="text-sm text-gray-500 mt-4">By Hira Asad | December 5, 2022</p>
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-0">
                <Button asChild variant="outline" size="sm">
                  <Link href="https://www.realthread.com/blog/roi-of-custom-apparel">Read Article</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className="flex justify-center mt-10">
            <Button asChild variant="outline">
              <Link href="/blog/archive">View All Articles</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Subscribe to Our Newsletter
              </h2>
              <p className="max-w-[900px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Stay updated with our latest articles, product launches, and impact stories.
              </p>
            </div>
            <div className="mx-auto w-full max-w-md space-y-2">
              <form className="flex space-x-2" onSubmit={async (e) => {
                e.preventDefault()
                setIsLoading(true)
                const email = e.currentTarget.email.value

                try {
                  const response = await fetch('/api/newsletter', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email })
                  })

                  const data = await response.json()

                  if (!response.ok) {
                    throw new Error(data.error || 'Failed to subscribe')
                  }

                  toast.success('Successfully subscribed to newsletter!')
                  e.target.reset()
                } catch (error) {
                  toast.error(error.message)
                } finally {
                  setIsLoading(false)
                }
              }}>
                <input
                  name="email"
                  className="flex h-10 w-full rounded-md border border-blue-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-gray-900"
                  placeholder="Enter your email"
                  type="email"
                  required
                  disabled={isLoading}
                />
                <Button type="submit" variant="secondary" disabled={isLoading}>
                  {isLoading ? 'Subscribing...' : 'Subscribe'}
                </Button>
              </form>
              <p className="text-xs text-blue-100">We respect your privacy. Unsubscribe at any time.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

