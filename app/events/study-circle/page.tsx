import { ArrowLeft, Calendar, Clock, MapPin, BookOpen } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"

export default function StudyCirclePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-amber-100 to-amber-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-amber-900">
                Weekly Gita Study Circle
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl">
                Join our ongoing study circle where we explore the Bhagavad Gita verse by verse
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
                  Regular Program
                </div>
                <h2 className="text-3xl font-bold tracking-tighter">About the Study Circle</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Our Weekly Gita Study Circle is a systematic exploration of the Bhagavad Gita, one of the most
                    profound spiritual texts of all time. Each week, we study and discuss a few verses in depth,
                    gradually working our way through all 18 chapters.
                  </p>
                  <p>
                    The study circle is led by experienced teachers who provide clear explanations of the Sanskrit
                    verses, their meanings, and their practical applications in daily life. Participants are encouraged
                    to ask questions and share insights, creating a rich, interactive learning environment.
                  </p>
                  <p>
                    Whether you're new to the Bhagavad Gita or have studied it for years, this study circle offers a
                    supportive community for deepening your understanding and applying these timeless teachings in your
                    life.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold">Program Details</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-amber-800" />
                    <span>Every Sunday</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-amber-800" />
                    <span>10:00 AM - 12:00 PM</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-amber-800" />
                    <span>
                      Study Hall, Brahmapadham Bhagavad Gita Adhyātmika Kṣetram
                      <br />
                      Sai viswa Layout, Bangalore Highway, Near Taj Hotel,
                      <br />
                      Ramalayam Street, Tirupati-517503
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <BookOpen className="h-5 w-5 text-amber-800" />
                    <span>Current focus: Chapter 7 - Jnana-Vijnana Yoga (The Yoga of Knowledge and Wisdom)</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold">Format of Each Session</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Opening chanting and brief meditation (15 minutes)</li>
                  <li>Review of previous week's verses (15 minutes)</li>
                  <li>Introduction to new verses with Sanskrit recitation (20 minutes)</li>
                  <li>Detailed explanation and commentary (30 minutes)</li>
                  <li>Group discussion and Q&A (30 minutes)</li>
                  <li>Practical application and closing thoughts (10 minutes)</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold">What to Bring</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Your copy of the Bhagavad Gita (we can provide one if you don't have it)</li>
                  <li>Notebook and pen for taking notes</li>
                  <li>An open mind and heart ready to receive the teachings</li>
                </ul>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
                <h3 className="text-xl font-bold text-amber-800 mb-4">Upcoming Sessions</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-amber-100 text-amber-800 rounded-lg p-3 text-center min-w-[80px]">
                      <div className="text-lg font-bold">22</div>
                      <div className="text-sm">Oct</div>
                    </div>
                    <div>
                      <h4 className="font-semibold">Chapter 7, Verses 7-12</h4>
                      <p className="text-gray-700">
                        Understanding Krishna as the Supreme Truth and the source of everything
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-amber-100 text-amber-800 rounded-lg p-3 text-center min-w-[80px]">
                      <div className="text-lg font-bold">29</div>
                      <div className="text-sm">Oct</div>
                    </div>
                    <div>
                      <h4 className="font-semibold">Chapter 7, Verses 13-19</h4>
                      <p className="text-gray-700">The divine and demonic natures, and the four types of devotees</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-amber-100 text-amber-800 rounded-lg p-3 text-center min-w-[80px]">
                      <div className="text-lg font-bold">05</div>
                      <div className="text-sm">Nov</div>
                    </div>
                    <div>
                      <h4 className="font-semibold">Chapter 7, Verses 20-30</h4>
                      <p className="text-gray-700">
                        Worship of other deities, the veiled nature of the Supreme, and knowledge of the Absolute
                      </p>
                    </div>
                  </div>
                </div>
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
                  alt="Gita Study Circle"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-bold">Deepen Your Understanding</h3>
                    <p>Explore the wisdom of the Bhagavad Gita in community</p>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
                <h3 className="text-xl font-bold text-amber-800 mb-4">Benefits of Joining</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Systematic study of the entire Bhagavad Gita</li>
                  <li>Clear explanations of complex philosophical concepts</li>
                  <li>Community of like-minded spiritual seekers</li>
                  <li>Opportunity to ask questions and clarify doubts</li>
                  <li>Practical guidance for applying teachings in daily life</li>
                  <li>Development of regular spiritual study habit</li>
                </ul>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
                <h3 className="text-xl font-bold text-amber-800 mb-4">Testimonials</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <p className="italic text-gray-700">
                      "The weekly Gita study circle has transformed my understanding of this sacred text. The teachers
                      explain complex concepts in such a clear way, and the group discussions help me see different
                      perspectives. I've been attending for six months and look forward to it every week."
                    </p>
                    <p className="font-medium">- Ramesh K., Software Engineer</p>
                  </div>
                  <div className="space-y-2">
                    <p className="italic text-gray-700">
                      "As a beginner to the Bhagavad Gita, I was worried I wouldn't understand, but the study circle is
                      so welcoming and the pace is perfect. I'm learning so much and finding practical ways to apply
                      these ancient teachings in my modern life."
                    </p>
                    <p className="font-medium">- Priya S., Teacher</p>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
                <h3 className="text-xl font-bold text-amber-800 mb-4">How to Join</h3>
                <p className="text-gray-700 mb-4">
                  No registration is required for the weekly study circle. Simply arrive at the Study Hall a few minutes
                  before 10:00 AM on any Sunday. Newcomers are always welcome!
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
