"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { api } from '../services/api'

export default function QuotePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    bottleSize: "500ml",
    quantity: 100,
    customization: [],
    designHelp: "no",
    deadline: "",
    additionalInfo: "",
  })

  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState({ type: '', text: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCustomizationChange = (checked, value) => {
    setFormData((prev) => ({
      ...prev,
      customization: checked 
        ? [...prev.customization, value]
        : prev.customization.filter(item => item !== value)
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage({ type: '', text: '' })

    try {
      const response = await api.submitQuote(formData)
      if (response.success) {
        setMessage({ type: 'success', text: 'Quote request submitted successfully!' })
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          bottleSize: '500ml',
          quantity: 100,
          customization: [],
          designHelp: 'no',
          deadline: '',
          additionalInfo: ''
        })
      } else {
        setMessage({ type: 'error', text: response.message })
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to submit quote request. Please try again.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Request a Quote</h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Fill out the form below to get a custom quote for your branded water bottles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            {message.text && (
              <div className={`p-4 mb-4 rounded ${
                message.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
              }`}>
                {message.text}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">Contact Information</h2>
                <p className="text-gray-500">Tell us how we can reach you with your quote.</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Ahmed Ali"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="ahmed@example.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="+92 98765 43210"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company Name *</Label>
                  <Input
                    id="company"
                    name="company"
                    placeholder="Acme Inc."
                    required
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl font-bold">Order Details</h2>
                <p className="text-gray-500">Tell us about your requirements for branded water bottles.</p>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Bottle Size *</Label>
                  <RadioGroup
                    defaultValue="500ml"
                    name="bottleSize"
                    value={formData.bottleSize}
                    onValueChange={(value) => handleChange({ target: { name: "bottleSize", value } })}
                    className="flex flex-col space-y-1 sm:flex-row sm:space-x-4 sm:space-y-0"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="500ml" id="500ml" />
                      <Label htmlFor="500ml" className="font-normal">
                        500ml
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="1000ml" id="1000ml" />
                      <Label htmlFor="1000ml" className="font-normal">
                        1000ml
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="1500ml" id="1500ml" />
                      <Label htmlFor="1500ml" className="font-normal">
                        1500ml
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="quantity">Quantity (Minimum 100) *</Label>
                  <Input
                    id="quantity"
                    name="quantity"
                    type="number"
                    min="100"
                    placeholder="e.g., 500"
                    required
                    value={formData.quantity}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Customization Options (Select all that apply) *</Label>
                  <div className="grid gap-2 sm:grid-cols-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="label"
                        value="Custom Label"
                        checked={formData.customization.includes("Custom Label")}
                        onCheckedChange={(checked) => handleCustomizationChange(checked, "Custom Label")}
                      />
                      <Label htmlFor="label" className="font-normal">
                        Custom Label
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="cap"
                        value="Custom Cap Color"
                        checked={formData.customization.includes("Custom Cap Color")}
                        onCheckedChange={(checked) => handleCustomizationChange(checked, "Custom Cap Color")}
                      />
                      <Label htmlFor="cap" className="font-normal">
                        Custom Cap Color
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="embossed"
                        value="Embossed Logo"
                        checked={formData.customization.includes("Embossed Logo")}
                        onCheckedChange={(checked) => handleCustomizationChange(checked, "Embossed Logo")}
                      />
                      <Label htmlFor="embossed" className="font-normal">
                        Embossed Logo
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="metallic"
                        value="Metallic Finish"
                        checked={formData.customization.includes("Metallic Finish")}
                        onCheckedChange={(checked) => handleCustomizationChange(checked, "Metallic Finish")}
                      />
                      <Label htmlFor="metallic" className="font-normal">
                        Custom Design
                      </Label>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Do you need help with design? *</Label>
                  <RadioGroup
                    defaultValue="no"
                    name="designHelp"
                    value={formData.designHelp}
                    onValueChange={(value) => handleChange({ target: { name: "designHelp", value } })}
                    className="flex flex-col space-y-1 sm:flex-row sm:space-x-4 sm:space-y-0"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="design-yes" />
                      <Label htmlFor="design-yes" className="font-normal">
                        Yes, I need design assistance
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="design-no" />
                      <Label htmlFor="design-no" className="font-normal">
                        No, I have my own design
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="deadline">Delivery Deadline (if any)</Label>
                  <Input
                    id="deadline"
                    name="deadline"
                    type="date"
                    value={formData.deadline}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="additionalInfo">Additional Information</Label>
                  <Textarea
                    id="additionalInfo"
                    name="additionalInfo"
                    placeholder="Tell us any specific requirements or questions you have..."
                    className="min-h-[150px]"
                    value={formData.additionalInfo}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Submitting..." : "Submit Quote Request"}
              </Button>
              <p className="text-sm text-gray-500 text-center">
                By submitting this form, you agree to our{" "}
                <Link href="/privacy" className="underline">
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link href="/terms" className="underline">
                  Terms of Service
                </Link>
                .
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Frequently Asked Questions</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Common questions about our quote and ordering process.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2">
            <div className="rounded-lg border p-6 shadow-sm">
              <h3 className="text-xl font-bold">How long does it take to get a quote?</h3>
              <p className="mt-2 text-gray-500">
                We typically provide quotes within 24 hours of receiving your request.
              </p>
            </div>
            <div className="rounded-lg border p-6 shadow-sm">
              <h3 className="text-xl font-bold">What is the minimum order quantity?</h3>
              <p className="mt-2 text-gray-500">Our minimum order quantity is 50 bottles per design.</p>
            </div>
            <div className="rounded-lg border p-6 shadow-sm">
              <h3 className="text-xl font-bold">Do you offer rush orders?</h3>
              <p className="mt-2 text-gray-500">
                Yes, we can accommodate rush orders for an additional fee, depending on our current production schedule.
              </p>
            </div>
            <div className="rounded-lg border p-6 shadow-sm">
              <h3 className="text-xl font-bold">What payment methods do you accept?</h3>
              <p className="mt-2 text-gray-500">
                We accept bank transfers, credit cards, and digital payment methods. For orders above Rs50,000, we
                require a 50% advance payment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

