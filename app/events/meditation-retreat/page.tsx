import { ArrowLeft, Calendar, Clock, MapPin, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { EventRegistrationForm } from "@/components/event-registration-form"
import { Footer } from "@/components/footer"

export default function MeditationRetreatPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-amber-100 to-amber-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-amber-900">
                Weekend Meditation Retreat
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl">
                Immerse yourself in a weekend of guided meditation, silence, and spiritual teachings
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-800">
                  Limited Spots
                </div>
                <h2 className="text-3xl font-bold tracking-tighter">About the Retreat</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    This intensive weekend meditation retreat offers a unique opportunity to deepen your meditation
                    practice in a supportive and serene environment. Under the guidance of experienced teachers, you
                    will learn various meditation techniques rooted in the ancient wisdom of the Bhagavad Gita.
                  </p>
                  <p>
                    The retreat is designed for both beginners and experienced meditators. Beginners will receive proper
                    instruction in meditation fundamentals, while experienced practitioners will have the opportunity to
                    deepen their practice through extended meditation sessions and advanced techniques.
                  </p>
                  <p>
                    Throughout the weekend, periods of noble silence will be observed to help participants turn inward
                    and fully experience the benefits of meditation practice.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold">Retreat Details</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-amber-800" />
                    <span>November 10-12, 2025 (Friday evening to Sunday afternoon)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-amber-800" />
                    <span>Begins Friday at 5:00 PM and concludes Sunday at 3:00 PM</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-amber-800" />
                    <span>
                      Brahmapadham Bhagavad Gita Adhyātmika Kṣetram
                      <br />
                      Sai viswa Layout, Bangalore Highway, Near Taj Hotel,
                      <br />
                      Ramalayam Street, Tirupati-517503
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-amber-800" />
                    <span>Limited to 30 participants to ensure personal attention</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold">What You Will Experience</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Guided meditation sessions with experienced teachers</li>
                  <li>Instruction in various meditation techniques (OMKARAM, NADAM, and NAMAM)</li>
                  <li>Yoga and pranayama practices to prepare the body for meditation</li>
                  <li>Discourses on the philosophy of meditation from the Bhagavad Gita</li>
                  <li>Periods of noble silence to deepen your practice and turn inward</li>
                  <li>Sattvic vegetarian meals that support meditation practice</li>
                  <li>Beautiful natural surroundings conducive to inner reflection</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold">What to Bring</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Comfortable, loose-fitting clothing for meditation and yoga</li>
                  <li>Personal meditation cushion or mat (if you have a preferred one)</li>
                  <li>Warm shawl or light blanket for meditation sessions</li>
                  <li>Personal toiletries and essentials</li>
                  <li>Journal for recording insights and experiences</li>
                  <li>Water bottle</li>
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
                  alt="Meditation Retreat"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-bold">Find Inner Peace</h3>
                    <p>Guided meditation in a serene environment</p>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
                <h3 className="text-xl font-bold text-amber-800 mb-4">Daily Schedule</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Morning</h4>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                      <li>5:30 AM: Wake-up bell</li>
                      <li>6:00 AM - 7:00 AM: Yoga and Pranayama</li>
                      <li>7:00 AM - 8:00 AM: Morning meditation</li>
                      <li>8:00 AM - 9:00 AM: Breakfast</li>
                      <li>9:30 AM - 11:00 AM: Guided meditation session</li>
                      <li>11:30 AM - 12:30 PM: Discourse on meditation techniques</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold">Afternoon</h4>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                      <li>12:30 PM - 2:00 PM: Lunch and rest</li>
                      <li>2:00 PM - 3:30 PM: Q&A session and personal guidance</li>
                      <li>4:00 PM - 5:30 PM: Extended meditation practice</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold">Evening</h4>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                      <li>6:00 PM - 7:00 PM: Light dinner</li>
                      <li>7:30 PM - 8:30 PM: Evening discourse</li>
                      <li>8:30 PM - 9:30 PM: Final meditation of the day</li>
                      <li>10:00 PM: Lights out</li>
                    </ul>
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-700">
                  Note: Noble silence will be observed from 8:30 PM until after breakfast the following day.
                </p>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
                <h3 className="text-xl font-bold text-amber-800 mb-4">Contact Information</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="font-semibold">Kalpana:</span>
                    <span>8790244582</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="font-semibold">Hemanth:</span>
                    <span>9030128922</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-12 md:py-24 bg-amber-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Register for the Meditation Retreat</h2>
              <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl">
                Secure your spot for this transformative weekend retreat. Limited to 30 participants.
              </p>
            </div>
          </div>

          <EventRegistrationForm eventName="Weekend Meditation Retreat" eventDates="November 10-12, 2025" />
        </div>
      </section>

      <Footer />
    </div>
  )
}
