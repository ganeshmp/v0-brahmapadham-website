import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, Clock, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Footer } from "@/components/footer"

export default function EventsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-amber-100 to-amber-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-amber-900">
                Events & Programs
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl">
                Join us for transformative experiences and deepen your spiritual practice through our various events and
                programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-800">Featured</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Special Events</h2>
              <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl">
                Don't miss these upcoming special events at Brahmapadham.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8 mt-12">
            <Card className="border-amber-200">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Gita Jayanti Celebration</CardTitle>
                    <CardDescription>Annual celebration of the Bhagavad Gita</CardDescription>
                  </div>
                  <Badge className="bg-amber-600">Special Event</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-amber-800">
                    <Calendar className="h-4 w-4" />
                    <span>December 13-15, 2024</span>
                  </div>
                  <div className="flex items-center gap-2 text-amber-800">
                    <Clock className="h-4 w-4" />
                    <span>Full day program</span>
                  </div>
                  <div className="flex items-center gap-2 text-amber-800">
                    <MapPin className="h-4 w-4" />
                    <span>Main Hall, Brahmapadham Center</span>
                  </div>
                  <p className="text-gray-700 mt-2">
                    A three-day celebration featuring chanting, discourses, and cultural programs commemorating the day
                    when Lord Krishna imparted the eternal wisdom of the Gita to Arjuna.
                  </p>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/events/gita-jayanti" passHref>
                  <Button className="w-full bg-amber-800 hover:bg-amber-900">Register Now</Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="border-amber-200">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Weekend Meditation Retreat</CardTitle>
                    <CardDescription>Intensive meditation practice</CardDescription>
                  </div>
                  <Badge className="bg-amber-600">Limited Spots</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-amber-800">
                    <Calendar className="h-4 w-4" />
                    <span>November 10-12, 2025</span>
                  </div>
                  <div className="flex items-center gap-2 text-amber-800">
                    <Clock className="h-4 w-4" />
                    <span>Residential Program</span>
                  </div>
                  <div className="flex items-center gap-2 text-amber-800">
                    <MapPin className="h-4 w-4" />
                    <span>Retreat Center, Brahmapadham</span>
                  </div>
                  <p className="text-gray-700 mt-2">
                    Immerse yourself in a weekend of guided meditation, silence, and spiritual teachings to deepen your
                    practice. This retreat is suitable for both beginners and experienced meditators.
                  </p>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/events/meditation-retreat" passHref>
                  <Button className="w-full bg-amber-800 hover:bg-amber-900">Register Now</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Regular Programs */}
      <section className="py-12 md:py-24 bg-amber-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-800">
                Regular Programs
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Weekly & Monthly Activities</h2>
              <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl">
                Join our ongoing programs to establish a regular spiritual practice.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8 mt-12">
            <Card className="border-amber-200">
              <CardHeader>
                <CardTitle>Weekly Gita Study Circle</CardTitle>
                <CardDescription>Chapter-by-chapter study</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-amber-800">
                    <Calendar className="h-4 w-4" />
                    <span>Every Sunday</span>
                  </div>
                  <div className="flex items-center gap-2 text-amber-800">
                    <Clock className="h-4 w-4" />
                    <span>10:00 AM - 12:00 PM</span>
                  </div>
                  <div className="flex items-center gap-2 text-amber-800">
                    <MapPin className="h-4 w-4" />
                    <span>Study Hall, Brahmapadham Center</span>
                  </div>
                  <p className="text-gray-700 mt-2">
                    Join our ongoing study circle where we explore the Bhagavad Gita verse by verse with detailed
                    explanations.
                  </p>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/events/study-circle" passHref>
                  <Button variant="outline" className="w-full border-amber-800 text-amber-800 hover:bg-amber-50">
                    Join Next Session
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="border-amber-200">
              <CardHeader>
                <CardTitle>Morning Meditation</CardTitle>
                <CardDescription>Start your day with mindfulness</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-amber-800">
                    <Calendar className="h-4 w-4" />
                    <span>Monday to Saturday</span>
                  </div>
                  <div className="flex items-center gap-2 text-amber-800">
                    <Clock className="h-4 w-4" />
                    <span>6:00 AM - 7:00 AM</span>
                  </div>
                  <div className="flex items-center gap-2 text-amber-800">
                    <MapPin className="h-4 w-4" />
                    <span>Meditation Hall, Brahmapadham Center</span>
                  </div>
                  <p className="text-gray-700 mt-2">
                    Begin your day with guided meditation and chanting to cultivate peace and mindfulness.
                  </p>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/events/morning-meditation" passHref>
                  <Button variant="outline" className="w-full border-amber-800 text-amber-800 hover:bg-amber-50">
                    Learn More
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="border-amber-200">
              <CardHeader>
                <CardTitle>Bhajan & Kirtan</CardTitle>
                <CardDescription>Devotional singing</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-amber-800">
                    <Calendar className="h-4 w-4" />
                    <span>Every Thursday</span>
                  </div>
                  <div className="flex items-center gap-2 text-amber-800">
                    <Clock className="h-4 w-4" />
                    <span>6:30 PM - 8:00 PM</span>
                  </div>
                  <div className="flex items-center gap-2 text-amber-800">
                    <MapPin className="h-4 w-4" />
                    <span>Main Hall, Brahmapadham Center</span>
                  </div>
                  <p className="text-gray-700 mt-2">
                    Experience the joy of devotional singing and chanting in a community setting. All are welcome
                    regardless of musical experience.
                  </p>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/events/bhajan-kirtan" passHref>
                  <Button variant="outline" className="w-full border-amber-800 text-amber-800 hover:bg-amber-50">
                    Learn More
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Upcoming Events Calendar */}
      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-800">Calendar</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Upcoming Events</h2>
              <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl">
                Plan your visit with our comprehensive event calendar.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-5xl mt-12">
            <div className="bg-white rounded-lg shadow-sm border border-amber-200 overflow-hidden">
              <div className="p-6 border-b border-amber-200">
                <h3 className="text-xl font-bold">October 2025</h3>
              </div>
              <div className="p-6 space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-amber-100 text-amber-800 rounded-lg p-3 text-center min-w-[80px]">
                      <div className="text-lg font-bold">05</div>
                      <div className="text-sm">Oct</div>
                    </div>
                    <div>
                      <h4 className="font-semibold">Spiritual Discourse Series - Day 1</h4>
                      <p className="text-gray-700">6:00 PM - 8:00 PM | Lecture Hall</p>
                      <p className="text-gray-700 mt-1">
                        "Applying Gita's Wisdom in Modern Life" by Swami Atmajnananda
                      </p>
                    </div>
                    <Link href="/events/discourse-series" className="ml-auto">
                      <Button variant="outline" className="border-amber-800 text-amber-800 hover:bg-amber-50">
                        Details
                      </Button>
                    </Link>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-amber-100 text-amber-800 rounded-lg p-3 text-center min-w-[80px]">
                      <div className="text-lg font-bold">06</div>
                      <div className="text-sm">Oct</div>
                    </div>
                    <div>
                      <h4 className="font-semibold">Spiritual Discourse Series - Day 2</h4>
                      <p className="text-gray-700">6:00 PM - 8:00 PM | Lecture Hall</p>
                      <p className="text-gray-700 mt-1">"Finding Purpose Through Karma Yoga" by Swami Atmajnananda</p>
                    </div>
                    <Link href="/events/discourse-series" className="ml-auto">
                      <Button variant="outline" className="border-amber-800 text-amber-800 hover:bg-amber-50">
                        Details
                      </Button>
                    </Link>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-amber-100 text-amber-800 rounded-lg p-3 text-center min-w-[80px]">
                      <div className="text-lg font-bold">10</div>
                      <div className="text-sm">Oct</div>
                    </div>
                    <div>
                      <h4 className="font-semibold">Youth Workshop: Understanding the Gita</h4>
                      <p className="text-gray-700">10:00 AM - 1:00 PM | Study Hall</p>
                      <p className="text-gray-700 mt-1">Interactive workshop for young adults (ages 16-25)</p>
                    </div>
                    <Link href="/events/youth-workshop" className="ml-auto">
                      <Button variant="outline" className="border-amber-800 text-amber-800 hover:bg-amber-50">
                        Details
                      </Button>
                    </Link>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-amber-100 text-amber-800 rounded-lg p-3 text-center min-w-[80px]">
                      <div className="text-lg font-bold">15</div>
                      <div className="text-sm">Oct</div>
                    </div>
                    <div>
                      <h4 className="font-semibold">Full Moon Meditation</h4>
                      <p className="text-gray-700">7:00 PM - 9:00 PM | Meditation Garden</p>
                      <p className="text-gray-700 mt-1">Special meditation session under the full moon</p>
                    </div>
                    <Link href="/events/full-moon-meditation" className="ml-auto">
                      <Button variant="outline" className="border-amber-800 text-amber-800 hover:bg-amber-50">
                        Details
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="p-6 border-t border-amber-200 flex justify-center">
                <Link href="/events/calendar" passHref>
                  <Button className="bg-amber-800 hover:bg-amber-900">
                    View Full Calendar <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshops & Courses */}
      <section className="py-12 md:py-24 bg-amber-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-800">Learning</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Workshops & Courses</h2>
              <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl">
                Deepen your knowledge and practice through our structured learning programs.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8 mt-12">
            <Card className="border-amber-200">
              <CardHeader>
                <CardTitle>Introduction to Meditation</CardTitle>
                <CardDescription>4-week course for beginners</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-amber-800">
                    <Calendar className="h-4 w-4" />
                    <span>Starts November 5, 2025</span>
                  </div>
                  <div className="flex items-center gap-2 text-amber-800">
                    <Clock className="h-4 w-4" />
                    <span>Wednesdays, 6:00 PM - 7:30 PM</span>
                  </div>
                  <p className="text-gray-700 mt-2">
                    Learn the fundamentals of meditation practice, including proper posture, breathing techniques, and
                    methods to calm the mind. Suitable for complete beginners.
                  </p>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/courses/intro-meditation" passHref>
                  <Button className="w-full bg-amber-800 hover:bg-amber-900">Enroll Now</Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="border-amber-200">
              <CardHeader>
                <CardTitle>Bhagavad Gita: Comprehensive Study</CardTitle>
                <CardDescription>12-week in-depth course</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-amber-800">
                    <Calendar className="h-4 w-4" />
                    <span>Starts January 10, 2026</span>
                  </div>
                  <div className="flex items-center gap-2 text-amber-800">
                    <Clock className="h-4 w-4" />
                    <span>Saturdays, 10:00 AM - 12:30 PM</span>
                  </div>
                  <p className="text-gray-700 mt-2">
                    A systematic study of all 18 chapters of the Bhagavad Gita with detailed explanations, discussions,
                    and practical applications. Includes study materials.
                  </p>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/courses/gita-comprehensive" passHref>
                  <Button className="w-full bg-amber-800 hover:bg-amber-900">Enroll Now</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/courses" passHref>
              <Button variant="outline" className="border-amber-800 text-amber-800 hover:bg-amber-50">
                View All Courses <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Registration Info */}
      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-800">Registration</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">How to Register</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Participating in our events and programs is easy. You can register through any of the following
                  methods:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Online:</strong> Use the registration links provided with each event listing on our website.
                  </li>
                  <li>
                    <strong>In Person:</strong> Visit our center during office hours to register at the reception desk.
                  </li>
                  <li>
                    <strong>Phone:</strong> Call our office at +91 8790244582 to register over the phone.
                  </li>
                  <li>
                    <strong>Email:</strong> Send your registration details to bbatpt@gmail.com.
                  </li>
                </ul>
                <p>
                  For most regular weekly programs, registration is not required - you can simply drop in. For special
                  events, retreats, and courses, advance registration is necessary as spaces are limited.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/contact" passHref>
                  <Button className="bg-amber-800 hover:bg-amber-900">Contact Us</Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-[500px] aspect-square overflow-hidden rounded-lg">
                <Image
                  alt="Registration desk"
                  className="object-cover"
                  src="/placeholder.svg?height=600&width=600"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
