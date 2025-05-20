import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-amber-100 to-amber-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-amber-900">
                About Brahmapadham
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl">
                Dedicated to spreading the timeless wisdom of the Bhagavad Gita and guiding spiritual seekers on their
                journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-800">Our Story</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">The Journey of Brahmapadham</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Brahmapadham Bhagavad Gita Adhyātmika Kṣetram was established in 1995 by Swami Atmajnananda with the
                  vision of creating a spiritual center dedicated to the study and practice of the teachings of the
                  Bhagavad Gita.
                </p>
                <p>
                  What began as a small study group meeting in a modest room has now grown into a comprehensive
                  spiritual center that serves thousands of seekers annually through various programs, classes, and
                  retreats.
                </p>
                <p>
                  Our name "Brahmapadham" refers to the ultimate spiritual goal - the state of Brahman or divine
                  consciousness. "Adhyātmika Kṣetram" signifies a field or center for spiritual growth and inner
                  transformation.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-[500px] aspect-square overflow-hidden rounded-lg">
                <img
                  alt="Brahmapadham Center"
                  className="object-cover w-full h-full"
                  src="/placeholder.svg?height=600&width=600"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-12 md:py-24 bg-amber-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex justify-center order-last lg:order-first">
              <div className="relative w-full max-w-[500px] aspect-square overflow-hidden rounded-lg">
                <img
                  alt="Spiritual teachings"
                  className="object-cover w-full h-full"
                  src="/placeholder.svg?height=600&width=600"
                />
              </div>
            </div>
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-800">Our Mission</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Spreading Timeless Wisdom</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Our mission is to make the profound wisdom of the Bhagavad Gita accessible to all, regardless of
                  background or prior knowledge, and to provide a supportive environment for spiritual growth and
                  self-discovery.
                </p>
                <p>We aim to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Present the timeless teachings of the Bhagavad Gita in a way that is relevant to modern life</li>
                  <li>Create a community of spiritual seekers supporting each other on their journey</li>
                  <li>Provide practical tools for spiritual growth through meditation, study, and service</li>
                  <li>Foster a deeper understanding of the self and one's relationship with the divine</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Teachers */}
      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-800">Our Teachers</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Guided by Experience and Wisdom</h2>
              <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl">
                Our teachers bring decades of study, practice, and devotion to their guidance of spiritual seekers.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 mt-12">
            <div className="flex flex-col items-center text-center">
              <div className="relative w-40 h-40 overflow-hidden rounded-full mb-4">
                <img
                  alt="Swami Atmajnananda"
                  className="object-cover w-full h-full"
                  src="/placeholder.svg?height=160&width=160"
                />
              </div>
              <h3 className="text-xl font-bold">Swami Atmajnananda</h3>
              <p className="text-amber-800">Founder & Spiritual Director</p>
              <p className="text-gray-700 mt-2">
                With over 40 years of spiritual practice and study, Swamiji brings profound insight and compassionate
                guidance to all seekers.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="relative w-40 h-40 overflow-hidden rounded-full mb-4">
                <img
                  alt="Acharya Vidyananda"
                  className="object-cover w-full h-full"
                  src="/placeholder.svg?height=160&width=160"
                />
              </div>
              <h3 className="text-xl font-bold">Acharya Vidyananda</h3>
              <p className="text-amber-800">Senior Teacher</p>
              <p className="text-gray-700 mt-2">
                A scholar of Sanskrit and ancient texts, Acharyaji specializes in making complex philosophical concepts
                accessible to all.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="relative w-40 h-40 overflow-hidden rounded-full mb-4">
                <img
                  alt="Dr. Priya Sharma"
                  className="object-cover w-full h-full"
                  src="/placeholder.svg?height=160&width=160"
                />
              </div>
              <h3 className="text-xl font-bold">Dr. Priya Sharma</h3>
              <p className="text-amber-800">Meditation Guide</p>
              <p className="text-gray-700 mt-2">
                With a background in psychology and yoga, Dr. Sharma leads our meditation programs and workshops on
                mindfulness.
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-12">
            <Link href="/teachers" passHref>
              <Button className="bg-amber-800 hover:bg-amber-900">
                Meet All Teachers <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Facilities */}
      <section className="py-12 md:py-24 bg-amber-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-800">
                Our Facilities
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">A Sacred Space for Transformation</h2>
              <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl">
                Our center is designed to provide a peaceful environment conducive to spiritual practice and learning.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
            <div className="flex flex-col">
              <div className="relative aspect-video overflow-hidden rounded-lg mb-4">
                <img
                  alt="Meditation Hall"
                  className="object-cover w-full h-full"
                  src="/placeholder.svg?height=200&width=300"
                />
              </div>
              <h3 className="text-xl font-bold">Meditation Hall</h3>
              <p className="text-gray-700 mt-2">
                A serene space that can accommodate up to 100 practitioners for group meditation and spiritual
                discourses.
              </p>
            </div>
            <div className="flex flex-col">
              <div className="relative aspect-video overflow-hidden rounded-lg mb-4">
                <img alt="Library" className="object-cover w-full h-full" src="/placeholder.svg?height=200&width=300" />
              </div>
              <h3 className="text-xl font-bold">Spiritual Library</h3>
              <p className="text-gray-700 mt-2">
                Housing over 5,000 volumes on spirituality, philosophy, and religious texts from various traditions.
              </p>
            </div>
            <div className="flex flex-col">
              <div className="relative aspect-video overflow-hidden rounded-lg mb-4">
                <img
                  alt="Retreat Accommodations"
                  className="object-cover w-full h-full"
                  src="/placeholder.svg?height=200&width=300"
                />
              </div>
              <h3 className="text-xl font-bold">Retreat Accommodations</h3>
              <p className="text-gray-700 mt-2">
                Simple, comfortable rooms for those attending residential programs and retreats at our center.
              </p>
            </div>
            <div className="flex flex-col">
              <div className="relative aspect-video overflow-hidden rounded-lg mb-4">
                <img
                  alt="Study Rooms"
                  className="object-cover w-full h-full"
                  src="/placeholder.svg?height=200&width=300"
                />
              </div>
              <h3 className="text-xl font-bold">Study Rooms</h3>
              <p className="text-gray-700 mt-2">
                Dedicated spaces for group discussions, study circles, and interactive learning sessions.
              </p>
            </div>
            <div className="flex flex-col">
              <div className="relative aspect-video overflow-hidden rounded-lg mb-4">
                <img
                  alt="Dining Hall"
                  className="object-cover w-full h-full"
                  src="/placeholder.svg?height=200&width=300"
                />
              </div>
              <h3 className="text-xl font-bold">Dining Hall</h3>
              <p className="text-gray-700 mt-2">
                Where we serve sattvic vegetarian meals prepared with mindfulness and devotion during retreats and
                events.
              </p>
            </div>
            <div className="flex flex-col">
              <div className="relative aspect-video overflow-hidden rounded-lg mb-4">
                <img alt="Garden" className="object-cover w-full h-full" src="/placeholder.svg?height=200&width=300" />
              </div>
              <h3 className="text-xl font-bold">Meditation Garden</h3>
              <p className="text-gray-700 mt-2">
                A beautiful outdoor space with walking paths and sitting areas for contemplation and connecting with
                nature.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Begin Your Spiritual Journey</h2>
              <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl">
                We welcome seekers from all backgrounds to join our community and explore the transformative teachings
                of the Bhagavad Gita.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/contact" passHref>
                <Button className="bg-amber-800 hover:bg-amber-900">Contact Us</Button>
              </Link>
              <Link href="/events" passHref>
                <Button variant="outline" className="border-amber-800 text-amber-800 hover:bg-amber-50">
                  Upcoming Events
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
