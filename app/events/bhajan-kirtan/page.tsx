import { ArrowLeft, Calendar, Clock, MapPin, Music } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"

export default function BhajanKirtanPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-amber-100 to-amber-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-amber-900">
                Bhajan & Kirtan
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl">
                Experience the joy of devotional singing and chanting
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
                  Weekly Program
                </div>
                <h2 className="text-3xl font-bold tracking-tighter">About Bhajan & Kirtan</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Our weekly Bhajan and Kirtan sessions offer a beautiful opportunity to connect with the divine
                    through the path of devotion (Bhakti Yoga). In the Bhagavad Gita, Lord Krishna says that of all
                    yogas, the path of devotion is especially dear to him.
                  </p>
                  <p>
                    During these sessions, we sing traditional bhajans (devotional songs) and participate in kirtan
                    (call-and- traditional bhajans (devotional songs) and participate in kirtan (call-and-response
                    chanting). These ancient practices create a powerful collective energy that uplifts the heart and
                    mind, allowing participants to experience deep devotion and spiritual connection.
                  </p>
                  <p>
                    No musical experience is necessary to participate. The melodies are simple and repetitive, making it
                    easy for everyone to join in. The focus is not on musical perfection but on the devotional spirit
                    and the joy of singing together in celebration of the divine.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold">Session Details</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-amber-800" />
                    <span>Every Thursday</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-amber-800" />
                    <span>6:30 PM - 8:00 PM</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-amber-800" />
                    <span>
                      Main Hall, Brahmapadham Bhagavad Gita Adhyātmika Kṣetram
                      <br />
                      Sai viswa Layout, Bangalore Highway, Near Taj Hotel,
                      <br />
                      Ramalayam Street, Tirupati-517503
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Music className="h-5 w-5 text-amber-800" />
                    <span>Open to all, no musical experience necessary</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold">Session Structure</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>6:30 PM - Opening prayers and brief meditation (10 minutes)</li>
                  <li>6:40 PM - Introduction to the evening's bhajans and their meanings (10 minutes)</li>
                  <li>6:50 PM - Bhajan singing with traditional instruments (40 minutes)</li>
                  <li>7:30 PM - Maha Mantra kirtan (20 minutes)</li>
                  <li>7:50 PM - Closing prayers and announcements (10 minutes)</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold">What to Bring</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>An open heart and willingness to participate</li>
                  <li>Your own musical instruments if you wish to play (optional)</li>
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
                  alt="Bhajan & Kirtan"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-bold">Devotion Through Music</h3>
                    <p>Experience the joy of communal singing and chanting</p>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
                <h3 className="text-xl font-bold text-amber-800 mb-4">Benefits of Bhajan & Kirtan</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Cultivation of devotion (bhakti) and spiritual connection</li>
                  <li>Calming of the mind and reduction of stress</li>
                  <li>Experience of joy and spiritual upliftment</li>
                  <li>Sense of community and shared spiritual practice</li>
                  <li>Purification of the heart and emotions</li>
                  <li>Development of concentration through repetitive chanting</li>
                </ul>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
                <h3 className="text-xl font-bold text-amber-800 mb-4">Testimonials</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <p className="italic text-gray-700">
                      "The Thursday bhajan sessions have become the highlight of my week. There's something magical
                      about singing together with others that opens my heart in a way nothing else can."
                    </p>
                    <p className="font-medium">- Anita D., Teacher</p>
                  </div>
                  <div className="space-y-2">
                    <p className="italic text-gray-700">
                      "I was hesitant to join because I'm not a good singer, but I was welcomed so warmly. Now I look
                      forward to these sessions every week. The energy in the room during kirtan is truly
                      transformative."
                    </p>
                    <p className="font-medium">- Ravi K., IT Professional</p>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
                <h3 className="text-xl font-bold text-amber-800 mb-4">How to Join</h3>
                <p className="text-gray-700 mb-4">
                  No registration is required for our weekly Bhajan & Kirtan sessions. Simply arrive at the Main Hall a
                  few minutes before 6:30 PM on any Thursday. Newcomers are always welcome!
                </p>
                <p className="text-gray-700 mb-4">For more information, please contact:</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="font-semibold">Pallavi:</span>
                    <span>8919476469</span>
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
