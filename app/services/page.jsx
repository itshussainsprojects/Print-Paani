import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Products & Services</h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover our range of customizable water bottles and branding options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottle Options */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Bottle Options</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Choose from our range of high-quality bottles in various sizes to suit your needs.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
              <Image
                src="/images/1000ml.png"
                width={200}
                height={300}
                alt="500ml Water Bottle"
                className="object-contain"
              />
              <h3 className="text-xl font-bold">500ml Bottle</h3>
              <p className="text-center text-gray-500">
                Perfect for events, conferences, and small gatherings. Our most popular size.
              </p>
              <ul className="space-y-2 text-left">
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  <span>BPA-free plastic</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  <span>Leak-proof design</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  <span>Full-color label options</span>
                </li>
              </ul>
              <Button asChild size="sm" className="mt-2">
                <Link href="/quote">Get a Quote</Link>
              </Button>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
              <Image
                src="/images/500ml.png"
                width={200}
                height={300}
                alt="1000ml Water Bottle"
                className="object-contain"
              />
              <h3 className="text-xl font-bold">1000ml Bottle</h3>
              <p className="text-center text-gray-500">
                Ideal for sports events, outdoor activities, and all-day hydration needs.
              </p>
              <ul className="space-y-2 text-left">
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  <span>BPA-free plastic</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  <span>Ergonomic grip</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  <span>Wide mouth for easy drinking</span>
                </li>
              </ul>
              <Button asChild size="sm" className="mt-2">
                <Link href="/quote">Get a Quote</Link>
              </Button>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
              <Image
                src="/images/1500ml.png"
                width={200}
                height={300}
                alt="1500ml Water Bottle"
                className="object-contain"
              />
              <h3 className="text-xl font-bold">1500ml Bottle</h3>
              <p className="text-center text-gray-500">
                Our largest size, perfect for long events, marathons, and high-activity situations.
              </p>
              <ul className="space-y-2 text-left">
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  <span>BPA-free plastic</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  <span>Built-in handle for easy carrying</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  <span>Premium durability</span>
                </li>
              </ul>
              <Button asChild size="sm" className="mt-2">
                <Link href="/quote">Get a Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Customization Options */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Customization Options</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Make your bottles truly yours with our extensive customization options.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-5xl py-12">
            <Tabs defaultValue="labels" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="labels">Label Design</TabsTrigger>
                <TabsTrigger value="colors">Colors</TabsTrigger>
                <TabsTrigger value="caps">Cap Options</TabsTrigger>
              </TabsList>
              <TabsContent value="labels" className="p-4">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold">Custom Label Design</h3>
                    <p className="text-gray-500">
                      Our high-quality printing ensures your brand looks its best. Upload your own design or work with
                      our design team to create something special. We offer full-color printing with vibrant,
                      long-lasting results.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-blue-600" />
                        Full-color digital printing
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-blue-600" />
                        Water-resistant labels
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-blue-600" />
                        Design assistance available
                      </li>
                    </ul>
                  </div>
                  <div className="relative mx-auto w-full max-w-[400px]">
                    <Image
                      src="/images/b1.png"
                      alt="Label Design Options"
                      width={400}
                      height={400}
                      className="mx-auto rounded-xl overflow-hidden object-cover"
                    />
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="colors" className="p-4">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold">Color Options</h3>
                    <p className="text-gray-500">
                      Choose from our wide range of bottle colors to match your brand identity. We offer standard colors
                      as well as custom color matching for larger orders.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-blue-600" />
                        12 standard colors available
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-blue-600" />
                        Pantone color matching
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-blue-600" />
                        Transparent and opaque options
                      </li>
                    </ul>
                  </div>
                  <div className="relative mx-auto w-full max-w-[400px]">
                    <Image
                      src="/images/coloroption.png"
                      alt="Color Options"
                      width={400}
                      height={400}
                      className="mx-auto rounded-xl overflow-hidden object-cover"
                    />
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="caps" className="p-4">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold">Cap Customization</h3>
                    <p className="text-gray-500">
                      Add an extra touch of branding with custom cap colors. Choose from standard screw caps, sports
                      caps, or flip-top options to suit your needs.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-blue-600" />
                        Multiple cap styles
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-blue-600" />
                        Custom cap colors
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-blue-600" />
                        Logo embossing available
                      </li>
                    </ul>
                  </div>
                  <div className="relative mx-auto w-full max-w-[400px]">
                    <Image
                      src="/images/capoption.png"
                      alt="Cap Options"
                      width={400}
                      height={400}
                      className="mx-auto rounded-xl overflow-hidden object-cover"
                    />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Pricing</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Transparent pricing with no hidden fees. Volume discounts available.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
            <div className="flex flex-col rounded-lg border p-6 shadow-sm">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">500ml Bottles</h3>
                <p className="text-gray-500">Starting at</p>
                <div className="text-4xl font-bold">
                  Rs. 45<span className="text-xl font-normal">/bottle</span>
                </div>
                <p className="text-sm text-gray-500">(Minimum order: 100 bottles)</p>
              </div>
              <ul className="mt-6 space-y-2 text-left">
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  <span>Basic label customization</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  <span>Standard cap colors</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  <span>Bulk packaging</span>
                </li>
              </ul>
              <Button asChild className="mt-6">
                <Link href="/quote">Get a Quote</Link>
              </Button>
            </div>
            <div className="flex flex-col rounded-lg border p-6 shadow-sm border-blue-600">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">1000ml Bottles</h3>
                <p className="text-gray-500">Starting at</p>
                <div className="text-4xl font-bold">
                  Rs. 65<span className="text-xl font-normal">/bottle</span>
                </div>
                <p className="text-sm text-gray-500">(Minimum order: 100 bottles)</p>
              </div>
              <ul className="mt-6 space-y-2 text-left">
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  <span>Full-color label customization</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  <span>Custom cap colors</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  <span>Individual packaging option</span>
                </li>
              </ul>
              <Button asChild className="mt-6">
                <Link href="/quote">Get a Quote</Link>
              </Button>
            </div>
            <div className="flex flex-col rounded-lg border p-6 shadow-sm">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">1500ml Bottles</h3>
                <p className="text-gray-500">Starting at</p>
                <div className="text-4xl font-bold">
                  Rs. 85<span className="text-xl font-normal">/bottle</span>
                </div>
                <p className="text-sm text-gray-500">(Minimum order: 100 bottles)</p>
              </div>
              <ul className="mt-6 space-y-2 text-left">
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  <span>Premium label customization</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  <span>Specialty finishes available</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  <span>Gift-ready packaging option</span>
                </li>
              </ul>
              <Button asChild className="mt-6">
                <Link href="/quote">Get a Quote</Link>
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-4 text-center mt-8">
            <p className="max-w-[700px] text-gray-500">
              Need a custom quote? Contact us for volume discounts and special requirements.
            </p>
            <Button asChild variant="outline">
              <Link href="/contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Get Started?</h2>
              <p className="max-w-[900px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Request a quote today and elevate your brand with PrintPaani's custom water bottles.
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

