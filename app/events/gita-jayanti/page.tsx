import { ArrowLeft, Calendar, Clock, MapPin, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { EventRegistrationForm } from "@/components/event-registration-form"
import { Footer } from "@/components/footer"

export default function GitaJayantiPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-amber-100 to-amber-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-amber-900">
                Gita Jayanti Celebration
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl">
                Annual celebration of the Bhagavad Gita - A special three-day event
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
                  Special Event
                </div>
                <h2 className="text-3xl font-bold tracking-tighter">About the Celebration</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Gita Jayanti marks the sacred day when Lord Krishna imparted the eternal wisdom of the Bhagavad Gita
                    to Arjuna on the battlefield of Kurukshetra. This annual celebration is one of the most significant
                    events at our center.
                  </p>
                  <p>
                    Join us for a spiritually enriching three-day celebration featuring Bhagavad Gita chanting,
                    discourses, meditation sessions, cultural programs, and more. This event is designed to deepen your
                    understanding of the Gita's timeless teachings and their application in daily life.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold">Event Details</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-amber-800" />
                    <span>December 13-15, 2024 (Friday to Sunday)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-amber-800" />
                    <span>Full day program (See detailed schedule below)</span>
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
                    <span>Open to all devotees (Limited spots available for residential participants)</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold">Program Highlights</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Complete Bhagavad Gita Parayanam (recitation)</li>
                  <li>Spiritual discourses by renowned scholars</li>
                  <li>Guided meditation sessions</li>
                  <li>Yoga and Pranayama practices</li>
                  <li>Cultural performances and bhajans</li>
                  <li>Special puja and havan ceremonies</li>
                  <li>Sattvic meals provided to all participants</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold">What to Bring</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Your personal copy of the Bhagavad Gita (if you have one)</li>
                  <li>Comfortable clothing suitable for meditation and yoga</li>
                  <li>Notebook and pen for taking notes</li>
                  <li>For residential participants: personal toiletries and essentials</li>
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
              <div className="relative w-full aspect-[3/4] overflow-hidden rounded-lg">
                <Image src="/images/telugu-flyer.png" alt="Gita Jayanti Celebration" fill className="object-contain" />
              </div>

              <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
                <h3 className="text-xl font-bold text-amber-800 mb-4">Daily Schedule Overview</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Day 1 (December 13, Friday)</h4>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                      <li>6:00 AM - 7:00 AM: Yoga Pranayama</li>
                      <li>9:30 AM - 11:00 AM: Guided Meditation with Omkaram</li>
                      <li>11:30 AM - 12:30 PM: Bhagavatgita 1-3 Chapters Group Chanting</li>
                      <li>12:00 PM - 1:00 PM: Lunch Break</li>
                      <li>2:00 PM - 2:30 PM: Bhagavatgita 4-6 Chapters Group Chanting</li>
                      <li>2:30 PM - 3:30 PM: Discourse on Method Of Application Of Bhagavadgita 4-6 Chapters</li>
                      <li>4:00 PM - 5:30 PM: Guided Meditation with OMKARAM</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold">Day 2 (December 14, Saturday)</h4>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                      <li>6:00 AM - 7:00 AM: Yoga Pranayama</li>
                      <li>9:30 AM - 11:00 AM: Guided Meditation with NADAM</li>
                      <li>11:30 AM - 12:30 PM: Bhagavatgita 7-9 Chapters Group Chanting</li>
                      <li>12:00 PM - 1:00 PM: Lunch Break</li>
                      <li>2:00 PM - 2:30 PM: Bhagavatgita 10-12 Chapters Group Chanting</li>
                      <li>2:30 PM - 3:30 PM: Discourse on Method Of Application Of Bhagavadgita 10-12 Chapters</li>
                      <li>4:00 PM - 5:30 PM: Guided Meditation with NADAM</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold">Day 3 (December 15, Sunday)</h4>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                      <li>6:00 AM - 7:00 AM: Yoga Pranayama</li>
                      <li>9:30 AM - 11:00 AM: Guided Meditation with NAMAM</li>
                      <li>11:30 AM - 12:30 PM: Bhagavatgita 13-15 Chapters Group Chanting</li>
                      <li>12:00 PM - 1:00 PM: Lunch Break</li>
                      <li>2:00 PM - 2:30 PM: Bhagavatgita 16-18 Chapters Group Chanting</li>
                      <li>2:30 PM - 3:30 PM: Discourse on Method Of Application Of Bhagavadgita 16-18 Chapters</li>
                      <li>4:00 PM - 5:30 PM: Guided Meditation with NAMAM</li>
                    </ul>
                  </div>
                </div>
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
                  <li className="flex items-center gap-2">
                    <span className="font-semibold">Pallavi:</span>
                    <span>8919476469</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="font-semibold">Radhakrishna:</span>
                    <span>9440474849</span>
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Register for Gita Jayanti</h2>
              <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl">
                Complete the form below to register for this special three-day celebration.
              </p>
            </div>
          </div>

          <EventRegistrationForm eventName="Gita Jayanti Celebration" eventDates="December 13-15, 2024" />
        </div>
      </section>

      <Footer />
    </div>
  )
}
