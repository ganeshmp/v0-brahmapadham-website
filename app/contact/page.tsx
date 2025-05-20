import { Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-amber-100 to-amber-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-amber-900">
                Contact Us
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl">
                We're here to answer your questions and help you on your spiritual journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter">Get in Touch</h2>
                <p className="text-gray-700 mt-2">
                  Fill out the form below, and we'll get back to you as soon as possible.
                </p>
              </div>
              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="first-name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      First name
                    </label>
                    <Input id="first-name" placeholder="Enter your first name" required />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="last-name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Last name
                    </label>
                    <Input id="last-name" placeholder="Enter your last name" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="Enter your email" required />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Phone (optional)
                  </label>
                  <Input id="phone" type="tel" placeholder="Enter your phone number" />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Subject
                  </label>
                  <Input id="subject" placeholder="What is your message about?" required />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Message
                  </label>
                  <Textarea id="message" placeholder="Enter your message" className="min-h-[150px]" required />
                </div>
                <Button type="submit" className="w-full bg-amber-800 hover:bg-amber-900">
                  Send Message
                </Button>
              </form>
            </div>
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter">Contact Information</h2>
                <p className="text-gray-700 mt-2">
                  You can reach us through any of the following methods or visit our center in person.
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-amber-800 mt-1" />
                  <div>
                    <h3 className="font-semibold">Address</h3>
                    <address className="not-italic text-gray-700 mt-1">
                      123 Spiritual Path
                      <br />
                      Peaceful Valley
                      <br />
                      India - 400001
                    </address>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-amber-800 mt-1" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-gray-700 mt-1">
                      Main: +91 98765 43210
                      <br />
                      Office: +91 98765 43211
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-amber-800 mt-1" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-700 mt-1">
                      General Inquiries: info@brahmapadham.org
                      <br />
                      Programs: programs@brahmapadham.org
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-xl">Hours of Operation</h3>
                <div className="mt-2 space-y-2 text-gray-700">
                  <p>
                    <span className="font-medium">Office Hours:</span>
                    <br />
                    Monday to Saturday: 9:00 AM - 5:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                  <p>
                    <span className="font-medium">Meditation Hall:</span>
                    <br />
                    Daily: 5:00 AM - 9:00 PM
                  </p>
                  <p>
                    <span className="font-medium">Library:</span>
                    <br />
                    Monday to Saturday: 10:00 AM - 6:00 PM
                    <br />
                    Sunday: 10:00 AM - 2:00 PM
                  </p>
                </div>
              </div>
              <div className="relative w-full h-[300px] overflow-hidden rounded-lg">
                <img
                  alt="Map of Brahmapadham Center"
                  className="object-cover w-full h-full"
                  src="/placeholder.svg?height=300&width=600"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button className="bg-amber-800 hover:bg-amber-900">View on Google Maps</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-24 bg-amber-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Frequently Asked Questions</h2>
              <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl">
                Find answers to common questions about our center and programs.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-12 mt-12">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Do I need prior knowledge to attend your programs?</h3>
              <p className="text-gray-700">
                No, our programs are designed for seekers at all levels. We offer introductory sessions for beginners
                and more advanced studies for those with prior knowledge.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Are your programs only for Hindus?</h3>
              <p className="text-gray-700">
                Not at all. We welcome people from all religious backgrounds, as well as those who don't follow any
                particular faith. The teachings of the Bhagavad Gita are universal.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Do I need to register in advance for classes?</h3>
              <p className="text-gray-700">
                While drop-ins are welcome for weekly classes, we recommend registration for workshops, retreats, and
                special events as spaces are limited.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Is there a fee for your programs?</h3>
              <p className="text-gray-700">
                Some programs are offered free of charge, while others have a nominal fee to cover operational costs. We
                also offer scholarships for those who cannot afford the fees.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">What should I bring to meditation sessions?</h3>
              <p className="text-gray-700">
                We provide meditation cushions and mats, but you're welcome to bring your own if you prefer. Wear
                comfortable clothing that allows you to sit for extended periods.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
