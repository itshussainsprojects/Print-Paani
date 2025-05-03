import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HowItWorksPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                A simple guide to our ordering and customization process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
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
                    alt="Request a Quote"
                    className="rounded-full object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter">Request a Quote</h2>
                  <p className="text-gray-500 md:text-xl">
                    Fill out our simple quote request form with your requirements, including bottle size, quantity, and
                    customization needs. Our team will review your request and get back to you within 24 hours with a
                    detailed quote.
                  </p>
                  <Button asChild className="mt-4">
                    <Link href="/quote">Get Started</Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4 order-2 lg:order-1">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter">Design Submission</h2>
                  <p className="text-gray-500 md:text-xl">
                    Once you approve the quote, you can submit your design files or work with our design team to create
                    a custom label for your bottles. We accept various file formats including AI, PSD, PDF, and
                    high-resolution JPG/PNG files.
                  </p>
                  <ul className="mt-4 space-y-2 text-gray-500 md:text-xl">
                    <li>• Logo files in vector format (preferred)</li>
                    <li>• Brand guidelines including colors and fonts</li>
                    <li>• Any specific design requirements</li>
                  </ul>
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
                    alt="Design Submission"
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
                    alt="Design Approval"
                    className="rounded-full object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter">Design Approval</h2>
                  <p className="text-gray-500 md:text-xl">
                    Our design team will create a digital proof of how your branded bottles will look. You'll have the
                    opportunity to review and request revisions until you're completely satisfied with the design.
                  </p>
                  <p className="text-gray-500 md:text-xl">
                    We offer up to three rounds of revisions at no additional cost to ensure your bottles look exactly
                    how you want them.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4 order-2 lg:order-1">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter">Production & Quality Control</h2>
                  <p className="text-gray-500 md:text-xl">
                    Once the design is approved, we move to production. Our team carefully monitors each step of the
                    process to ensure the highest quality. We conduct rigorous quality checks before packaging your
                    order.
                  </p>
                  <p className="text-gray-500 md:text-xl">
                    Production typically takes 7-10 business days depending on order volume and complexity.
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
                    alt="Production"
                    className="rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex justify-center">
                <div className="relative flex h-[300px] w-[300px] items-center justify-center rounded-full bg-red-100 lg:h-[400px] lg:w-[400px]">
                  <div className="absolute flex h-20 w-20 items-center justify-center rounded-full bg-red-600 text-3xl font-bold text-white">
                    5
                  </div>
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    width={300}
                    height={300}
                    alt="Delivery"
                    className="rounded-full object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter">Delivery & Impact</h2>
                  <p className="text-gray-500 md:text-xl">
                    Your branded bottles are carefully packaged and shipped to your specified location. We offer
                    nationwide delivery with tracking information provided via email.
                  </p>
                  <p className="text-gray-500 md:text-xl">
                    With every order, we contribute to clean water initiatives. You'll receive an impact certificate
                    showing how your purchase has helped provide clean water to communities in need.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Guidelines */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Design Guidelines</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                To ensure the best results for your branded bottles, please follow these design guidelines.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2">
            <div className="flex flex-col space-y-4 rounded-lg border p-6 shadow-sm">
              <h3 className="text-xl font-bold">File Formats</h3>
              <ul className="space-y-2 text-gray-500">
                <li>• Vector formats (AI, EPS, PDF) preferred for logos</li>
                <li>• High-resolution (300 DPI) JPG or PNG files accepted</li>
                <li>• Files should be in CMYK color mode for accurate printing</li>
                <li>• Maximum file size: 25MB</li>
              </ul>
            </div>
            <div className="flex flex-col space-y-4 rounded-lg border p-6 shadow-sm">
              <h3 className="text-xl font-bold">Label Dimensions</h3>
              <ul className="space-y-2 text-gray-500">
                <li>• 500ml Bottle: 8cm x 20cm (wxh)</li>
                <li>• 1000ml Bottle: 10cm x 25cm (wxh)</li>
                <li>• 1500ml Bottle: 12cm x 30cm (wxh)</li>
                <li>• Include 3mm bleed on all sides</li>
              </ul>
            </div>
            <div className="flex flex-col space-y-4 rounded-lg border p-6 shadow-sm">
              <h3 className="text-xl font-bold">Design Tips</h3>
              <ul className="space-y-2 text-gray-500">
                <li>• Keep important elements away from edges</li>
                <li>• Use high contrast for better visibility</li>
                <li>• Consider how design wraps around the bottle</li>
                <li>• Simplify complex designs for better printing</li>
              </ul>
            </div>
            <div className="flex flex-col space-y-4 rounded-lg border p-6 shadow-sm">
              <h3 className="text-xl font-bold">Need Design Help?</h3>
              <p className="text-gray-500">
                Don't have design files ready? Our in-house design team can help create a custom label for your bottles
                at an additional cost. Contact us for design services.
              </p>
              <Button asChild variant="outline" className="mt-2">
                <Link href="/contact">Contact Design Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Frequently Asked Questions</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Have questions about our process? Find answers to common questions below.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12">
            <div className="rounded-lg border p-6 shadow-sm">
              <h3 className="text-xl font-bold">What is the minimum order quantity?</h3>
              <p className="mt-2 text-gray-500">
                Our minimum order quantity is 100 bottles per design. For larger orders of 1000+ bottles, we offer
                volume discounts.
              </p>
            </div>
            <div className="rounded-lg border p-6 shadow-sm">
              <h3 className="text-xl font-bold">How long does the entire process take?</h3>
              <p className="mt-2 text-gray-500">
                From quote approval to delivery, the process typically takes 2-3 weeks. This includes design approval
                (3-5 days), production (7-10 days), and shipping (2-5 days depending on location).
              </p>
            </div>
            <div className="rounded-lg border p-6 shadow-sm">
              <h3 className="text-xl font-bold">Can I see a sample before placing a bulk order?</h3>
              <p className="mt-2 text-gray-500">
                Yes, we offer sample bottles for a nominal fee. The sample fee is credited toward your final order when
                you proceed with the bulk purchase.
              </p>
            </div>
            <div className="rounded-lg border p-6 shadow-sm">
              <h3 className="text-xl font-bold">What payment methods do you accept?</h3>
              <p className="mt-2 text-gray-500">
                We accept bank transfers, credit cards, and digital payment methods. For orders above Rs50,000, we
                require a 50% advance payment, with the balance due before shipping.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-4 text-center">
            <p className="max-w-[700px] text-gray-500">
              Have more questions? Check our comprehensive FAQ page or contact us directly.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild>
                <Link href="/faq">View All FAQs</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
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
                Request a quote today and let's begin creating your custom branded water bottles.
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

