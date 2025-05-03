import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Frequently Asked Questions
              </h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Find answers to common questions about PrintPaani's products and services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">General Questions</h2>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>What is PrintPaani?</AccordionTrigger>
                    <AccordionContent>
                      PrintPaani is a company that specializes in providing custom branded water bottles for businesses,
                      events, and organizations. We combine premium quality products with social responsibility by
                      contributing to clean water initiatives with every purchase.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>
                      What makes PrintPaani different from other branded bottle providers?
                    </AccordionTrigger>
                    <AccordionContent>
                      PrintPaani stands out through our commitment to quality, customization options, and social impact.
                      With every order, we contribute to clean water initiatives, helping communities gain access to
                      safe drinking water. We also offer a wide range of customization options and premium quality
                      bottles that ensure your brand is represented in the best possible way.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Where is PrintPaani located?</AccordionTrigger>
                    <AccordionContent>
                      Our headquarters and main production facility are located in  Blue Area ,Islamabad,Pakistan. We serve
                      clients nationwide and have distribution partners in major cities across India.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Products & Customization</h2>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-4">
                    <AccordionTrigger>What bottle sizes do you offer?</AccordionTrigger>
                    <AccordionContent>
                      We offer three standard bottle sizes: 500ml, 1000ml, and 1500ml. Each size is available with
                      various customization options to suit your branding needs.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5">
                    <AccordionTrigger>What customization options are available?</AccordionTrigger>
                    <AccordionContent>
                      We offer a wide range of customization options including:
                      <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Full-color label printing</li>
                        <li>Custom cap colors</li>
                        <li>Embossed logos</li>
                        <li>QR code integration</li>
                        <li>Metallic and specialty finishes</li>
                        <li>Different bottle shapes (subject to availability)</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-6">
                    <AccordionTrigger>Are your bottles BPA-free?</AccordionTrigger>
                    <AccordionContent>
                      Yes, all our bottles are 100% BPA-free and made from food-grade materials that comply with safety
                      standards. We prioritize both quality and safety in all our products.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-7">
                    <AccordionTrigger>Do you offer eco-friendly options?</AccordionTrigger>
                    <AccordionContent>
                      Yes, we offer eco-friendly options including bottles made from recycled materials and
                      biodegradable components. Our eco-friendly line is designed to minimize environmental impact while
                      still providing excellent branding opportunities.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Ordering Process</h2>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-8">
                    <AccordionTrigger>What is the minimum order quantity?</AccordionTrigger>
                    <AccordionContent>
                      Our minimum order quantity is 100 bottles per design. For larger orders of 1000+ bottles, we offer
                      volume discounts.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-9">
                    <AccordionTrigger>How long does the ordering process take?</AccordionTrigger>
                    <AccordionContent>
                      From quote approval to delivery, the process typically takes 2-3 weeks. This includes design
                      approval (3-5 days), production (7-10 days), and shipping (2-5 days depending on location). Rush
                      orders can be accommodated for an additional fee, subject to our production schedule.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-10">
                    <AccordionTrigger>Can I see a sample before placing a bulk order?</AccordionTrigger>
                    <AccordionContent>
                      Yes, we offer sample bottles for a nominal fee. The sample fee is credited toward your final order
                      when you proceed with the bulk purchase. Samples help you assess the quality and appearance of
                      your branded bottles before committing to a larger order.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-11">
                    <AccordionTrigger>What file formats do you accept for designs?</AccordionTrigger>
                    <AccordionContent>
                      We accept vector formats (AI, EPS, PDF) for logos and designs, as these provide the best quality
                      for printing. We also accept high-resolution (300 DPI) JPG or PNG files. For best results, files
                      should be in CMYK color mode.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Payment & Shipping</h2>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-12">
                    <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
                    <AccordionContent>
                      We accept bank transfers, credit cards, and digital payment methods. For orders above Rs50,000, we
                      require a 50% advance payment, with the balance due before shipping.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-13">
                    <AccordionTrigger>Do you ship nationwide?</AccordionTrigger>
                    <AccordionContent>
                      Yes, we offer nationwide shipping across India. Shipping costs are calculated based on the
                      delivery location and order volume. We provide tracking information for all shipments.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-14">
                    <AccordionTrigger>What is your return policy?</AccordionTrigger>
                    <AccordionContent>
                      Since our products are custom-made to your specifications, we do not accept returns unless there
                      is a manufacturing defect. If you receive defective products, please contact us within 7 days of
                      receipt, and we will work to resolve the issue promptly.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Social Impact</h2>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-15">
                    <AccordionTrigger>How does PrintPaani contribute to clean water initiatives?</AccordionTrigger>
                    <AccordionContent>
                      For every 100 bottles sold, we fund a clean water project that provides safe drinking water to a
                      family in need. We partner with established NGOs and water organizations to implement these
                      projects in communities facing water scarcity and contamination.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-16">
                    <AccordionTrigger>Can I learn more about the specific impact of my purchase?</AccordionTrigger>
                    <AccordionContent>
                      Yes, with every order, we provide an impact certificate that details how your purchase has
                      contributed to our clean water initiatives. For larger orders, we can provide more detailed
                      information about the specific projects your purchase has supported.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-17">
                    <AccordionTrigger>
                      Can my company get involved in your social impact initiatives beyond purchasing bottles?
                    </AccordionTrigger>
                    <AccordionContent>
                      We welcome partnerships with companies that want to make a bigger impact. We offer co-branded
                      clean water projects, volunteer opportunities, and other ways to get involved. Contact our team to
                      discuss how we can collaborate on making a difference.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-500 mb-4">
                Didn't find the answer you're looking for? Contact our team for assistance.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
                <Button asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/quote">Request a Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

