import { ArrowLeft, Calendar, Clock, MapPin, Sun } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"

export default function MorningMeditationPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-amber-100 to-amber-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-amber-900">
                Morning Meditation
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl">
                Start your day with mindfulness and inner peace
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-800">
                  Daily Program
                </div>
                <h2 className="text-3xl font-bold tracking-tighter">About Morning Meditation</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Our daily Morning Meditation sessions offer a peaceful start to your day. In the serene atmosphere
                    of our meditation hall, you can cultivate mindfulness, clarity, and inner peace that will carry you
                    through your daily activities.
                  </p>
                  <p>
                    These sessions begin with gentle pranayama (breathing exercises) to calm the mind, followed by
                    guided meditation that helps both beginners and experienced practitioners to deepen their practice.
                    The session concludes with a few minutes of silent meditation and a short spiritual reflection.
                  </p>
                  <p>
                    According to the Bhagavad Gita, the early morning hours (Brahma Muhurta) are especially conducive to
                    meditation and spiritual practice. By joining our morning meditation, you align yourself with this
                    ancient wisdom and set a positive tone for your entire day.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold">Session Details</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-amber-800" />
                    <span>Monday to Saturday</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-amber-800" />
                    <span>6:00 AM - 7:00 AM</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-amber-800" />
                    <span>
                      Meditation Hall, Brahmapadham Bhagavad Gita Adhyātmika Kṣetram
                      <br />
                      Sai viswa Layout, Bangalore Highway, Near Taj Hotel,
                      <br />
                      Ramalayam Street, Tirupati-517503
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Sun className="h-5 w-5 text-amber-800" />
                    <span>Open to all, no prior experience necessary</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold">Session Structure</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>5:30 AM - Aditya Hrudayam chanting (optional)</li>
                  <li>6:00 AM - Gentle stretching and pranayama (10 minutes)</li>
                  <li>6:10 AM - Guided meditation (20 minutes)</li>
                  <li>6:30 AM - Silent meditation (20 minutes)</li>
                  <li>6:50 AM - Closing chant and spiritual reflection (10 minutes)</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold">What to Bring</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Comfortable, loose-fitting clothing</li>
                  <li>Your own meditation cushion or mat (optional, we provide basic seating)</li>
                  <li>A light shawl or blanket (the early morning can be cool)</li>
                  <li>A water bottle</li>
                </ul>
              </div>

              <div className="flex justify-start">
                <Link href="/events" passHref>
                  <Button variant="outline" className="border-amber-800 text-amber-800 hover:bg-amber-50">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Events
                  </Button>
                </Link>
              </div>
            </div>

            <div className="space-y-8">
              <div className="relative w-full aspect-square overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Morning Meditation"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-bold">Begin Your Day Mindfully</h3>
                    <p>Experience the peace of early morning meditation</p>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
                <h3 className="text-xl font-bold text-amber-800 mb-4">Benefits of Morning Meditation</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Reduced stress and anxiety throughout the day</li>
                  <li>Improved focus and mental clarity</li>
                  <li>Enhanced emotional regulation</li>
                  <li>Greater sense of peace and well-being</li>
                  <li>Deeper connection with your spiritual self</li>
                  <li>Establishment of a consistent meditation practice</li>
                </ul>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
                <h3 className="text-xl font-bold text-amber-800 mb-4">Testimonials</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <p className="italic text-gray-700">
                      "Starting my day with the morning meditation at Brahmapadham has completely transformed my daily
                      experience. I feel more centered, calm, and ready to face whatever challenges come my way."
                    </p>
                    <p className="font-medium">- Suresh M., Business Owner</p>
                  </div>
                  <div className="space-y-2">
                    <p className="italic text-gray-700">
                      "As a beginner, I was nervous about joining, but the teachers are so welcoming and provide clear
                      guidance. Now I can't imagine starting my day any other way!"
                    </p>
                    <p className="font-medium">- Lakshmi R., Homemaker</p>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
                <h3 className="text-xl font-bold text-amber-800 mb-4">How to Join</h3>
                <p className="text-gray-700 mb-4">
                  No registration is required for our daily morning meditation sessions. Simply arrive at the Meditation
                  Hall a few minutes before 6:00 AM on any weekday or Saturday. Newcomers are always welcome!
                </p>
                <p className="text-gray-700 mb-4">
                  We recommend arriving by 5:45 AM to settle in comfortably before the session begins.
                </p>
                <p className="text-gray-700 mb-4">For more information, please contact:</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="font-semibold">Kalpana:</span>
                    <span>8790244582</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="font-semibold">Email:</span>
                    <span>bbatpt@gmail.com</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Button className="w-full bg-amber-800 hover:bg-amber-900">Join Next Session</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
