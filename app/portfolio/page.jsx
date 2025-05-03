import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PortfolioPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Portfolio</h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore our past projects and see how we've helped businesses elevate their brand with custom water
                bottles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="all">All Projects</TabsTrigger>
                <TabsTrigger value="corporate">Corporate</TabsTrigger>
                <TabsTrigger value="events">Events</TabsTrigger>
                <TabsTrigger value="hospitality">Hospitality</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <div className="group relative overflow-hidden rounded-lg">
                  <Image
                    src="pani 1.png"
                    width={600}
                    height={400}
                    alt="TechCorp Branded Bottles"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                    <div className="text-center p-4">
                      <h3 className="text-xl font-bold text-white">TechCorp Annual Conference</h3>
                      <p className="text-white/80">500ml bottles with metallic finish</p>
                    </div>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-lg">
                  <Image
                    src="pani2.png"
                    width={600}
                    height={400}
                    alt="EcoResort Branded Bottles"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                    <div className="text-center p-4">
                      <h3 className="text-xl font-bold text-white">EcoResort Amenities</h3>
                      <p className="text-white/80">1000ml bottles with embossed logo</p>
                    </div>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-lg">
                  <Image
                    src="pani3.png"
                    width={600}
                    height={400}
                    alt="Marathon Event Bottles"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                    <div className="text-center p-4">
                      <h3 className="text-xl font-bold text-white">City Marathon 2023</h3>
                      <p className="text-white/80">1500ml bottles with sponsor logos</p>
                    </div>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-lg">
                  <Image
                    src="pani4.png"
                    width={600}
                    height={400}
                    alt="Luxury Hotel Bottles"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                    <div className="text-center p-4">
                      <h3 className="text-xl font-bold text-white">Grand Luxury Hotel</h3>
                      <p className="text-white/80">500ml bottles with gold accents</p>
                    </div>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-lg">
                  <Image
                    src="pani5.png"
                    width={600}
                    height={400}
                    alt="Fashion Brand Bottles"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                    <div className="text-center p-4">
                      <h3 className="text-xl font-bold text-white">StyleNow Fashion Week</h3>
                      <p className="text-white/80">1000ml bottles with full-wrap design</p>
                    </div>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-lg">
                  <Image
                    src="pani6.png"
                    width={600}
                    height={400}
                    alt="Corporate Retreat Bottles"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                    <div className="text-center p-4">
                      <h3 className="text-xl font-bold text-white">GlobalCorp Team Retreat</h3>
                      <p className="text-white/80">1500ml bottles with personalized names</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="corporate" className="mt-0">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <div className="group relative overflow-hidden rounded-lg">
                  <Image
                    src="/pani 1.png"
                    width={600}
                    height={400}
                    alt="TechCorp Branded Bottles"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                    <div className="text-center p-4">
                      <h3 className="text-xl font-bold text-white">TechCorp Annual Conference</h3>
                      <p className="text-white/80">500ml bottles with metallic finish</p>
                    </div>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-lg">
                  <Image
                    src="/pani6.png"
                    width={600}
                    height={400}
                    alt="Corporate Retreat Bottles"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                    <div className="text-center p-4">
                      <h3 className="text-xl font-bold text-white">GlobalCorp Team Retreat</h3>
                      <p className="text-white/80">1500ml bottles with personalized names</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="events" className="mt-0">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <div className="group relative overflow-hidden rounded-lg">
                  <Image
                    src="/pani3.png"
                    width={600}
                    height={400}
                    alt="Marathon Event Bottles"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                    <div className="text-center p-4">
                      <h3 className="text-xl font-bold text-white">City Marathon 2023</h3>
                      <p className="text-white/80">1500ml bottles with sponsor logos</p>
                    </div>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-lg">
                  <Image
                    src="/pani5.png"
                    width={600}
                    height={400}
                    alt="Fashion Brand Bottles"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                    <div className="text-center p-4">
                      <h3 className="text-xl font-bold text-white">StyleNow Fashion Week</h3>
                      <p className="text-white/80">1000ml bottles with full-wrap design</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="hospitality" className="mt-0">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <div className="group relative overflow-hidden rounded-lg">
                  <Image
                    src="/pani2.png"
                    width={600}
                    height={400}
                    alt="EcoResort Branded Bottles"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                    <div className="text-center p-4">
                      <h3 className="text-xl font-bold text-white">EcoResort Amenities</h3>
                      <p className="text-white/80">1000ml bottles with embossed logo</p>
                    </div>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-lg">
                  <Image
                    src="/pani4.png"
                    width={600}
                    height={400}
                    alt="Luxury Hotel Bottles"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                    <div className="text-center p-4">
                      <h3 className="text-xl font-bold text-white">Grand Luxury Hotel</h3>
                      <p className="text-white/80">500ml bottles with gold accents</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Client Testimonials</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hear what our clients have to say about their experience with PrintPaani.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col justify-between rounded-lg border p-6 shadow-sm">
              <div>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5 text-yellow-500"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-500">
                  "PrintPaani delivered exceptional quality bottles with our branding. The process was smooth and the
                  results were outstanding."
                </p>
              </div>
              <div className="mt-6 flex items-center">
                <Image
                  src="/images/user4.png"
                  width={50}
                  height={50}
                  alt="imran"
                  className="rounded-full"
                />
                <div className="ml-3">
                  <p className="text-sm font-medium">Imran Siddique</p>
                  <p className="text-sm text-gray-500">Conference Organizer, PakDev</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between rounded-lg border p-6 shadow-sm">
              <div>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5 text-yellow-500"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-500">
                  "We love that our branded bottles not only look great but also contribute to clean water initiatives.
                  It aligns perfectly with our values."
                </p>
              </div>
              <div className="mt-6 flex items-center">
                <Image
                  src="/images/user2.png"
                  width={50}
                  height={50}
                  alt="fatima ahmed"
                  className="rounded-full"
                />
                <div className="ml-3">
                  <p className="text-sm font-medium">Fatima Ahmed</p>
                  <p className="text-sm text-gray-500">CEO, GreenPak Solutions

</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between rounded-lg border p-6 shadow-sm">
              <div>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5 text-yellow-500"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-500">
                  "The customization options are fantastic. Our event attendees loved the personalized water bottles
                  with our logo."
                </p>
              </div>
              <div className="mt-6 flex items-center">
                <Image
                  src="/images/user1.png"
                  width={50}
                  height={50}
                  alt="Ahmed Khan"
                  className="rounded-full"
                />
                <div className="ml-3">
                  <p className="text-sm font-medium">Ahmed Khan</p>
                  <p className="text-sm text-gray-500">
                  Marketing Director, TechPak</p>
                </div>
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Join Our Portfolio?
              </h2>
              <p className="max-w-[900px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Let's create a custom water bottle solution that elevates your brand and makes an impact.
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
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

