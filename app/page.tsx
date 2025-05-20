import Link from "next/link"
import { ArrowRight, Calendar, BookOpen, Users, MapPin } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { HeroSection } from "@/components/hero-section"
import { UpcomingEvents } from "@/components/upcoming-events"
import { TeachingsSection } from "@/components/teachings-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { TranslatedFooter } from "@/components/translated-footer"
import { DailySchedule } from "@/components/daily-schedule"
import { MissionSection } from "@/components/mission-section"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <MissionSection />

      {/* Daily Schedule Preview */}
      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-800">
                Daily Schedule
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Daily Routine</h2>
              <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl">
                Join us for our daily spiritual activities and programs at the temple.
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-5xl">
            <DailySchedule />
            <div className="flex justify-center mt-6">
              <Link href="/schedule" passHref>
                <Button className="bg-amber-800 hover:bg-amber-900">
                  View Full Schedule <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Offerings */}
      <section className="py-12 md:py-24 bg-amber-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-800">Our Offerings</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Spiritual Growth & Learning
              </h2>
              <p className="max-w-[900px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover our comprehensive programs designed to deepen your understanding of the Bhagavad Gita and
                ancient wisdom.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8 mt-8">
            <Card className="border-amber-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">Gita Classes</CardTitle>
                <CardDescription>In-depth study of sacred texts</CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="flex items-center gap-2 text-amber-800">
                  <BookOpen className="h-5 w-5" />
                  <span>Verse-by-verse explanation</span>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/teachings" passHref>
                  <Button variant="outline" className="w-full border-amber-800 text-amber-800 hover:bg-amber-50">
                    Explore Classes
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="border-amber-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">Meditation Retreats</CardTitle>
                <CardDescription>Immersive spiritual experiences</CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="flex items-center gap-2 text-amber-800">
                  <Users className="h-5 w-5" />
                  <span>Guided by experienced teachers</span>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/retreats" passHref>
                  <Button variant="outline" className="w-full border-amber-800 text-amber-800 hover:bg-amber-50">
                    View Retreats
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="border-amber-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">Community Events</CardTitle>
                <CardDescription>Connect with fellow seekers</CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="flex items-center gap-2 text-amber-800">
                  <Calendar className="h-5 w-5" />
                  <span>Regular gatherings and celebrations</span>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/events" passHref>
                  <Button variant="outline" className="w-full border-amber-800 text-amber-800 hover:bg-amber-50">
                    See Calendar
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Teachings Preview */}
      <TeachingsSection />

      {/* Upcoming Events */}
      <UpcomingEvents />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Location */}
      <section className="py-12 md:py-24 bg-amber-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-800">Visit Us</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Spiritual Center</h2>
              <p className="text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Experience the serene atmosphere of our center, designed to facilitate spiritual growth and inner peace.
              </p>
              <div className="flex items-center gap-2 text-amber-800">
                <MapPin className="h-5 w-5" />
                <address className="not-italic">
                  Sai viswa Layout, Bangalore Highway, Near Taj Hotel,
                  <br />
                  Ramalayam Street Tirupati-517503,
                  <br />
                  Tirupati District, Andhra Pradesh, India
                </address>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/contact" passHref>
                  <Button className="bg-amber-800 hover:bg-amber-900">Contact Us</Button>
                </Link>
                <Link href="/directions" passHref>
                  <Button variant="outline" className="border-amber-800 text-amber-800 hover:bg-amber-50">
                    Get Directions
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-[500px] aspect-video overflow-hidden rounded-lg">
                <Image
                  alt="Brahmapadham Center"
                  className="object-cover w-full h-full"
                  src="/images/temple-building.png"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Join Our Spiritual Community</h2>
              <p className="max-w-[600px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Subscribe to receive updates on classes, events, and spiritual insights.
              </p>
            </div>
            <div className="w-full max-w-md space-y-2">
              <form className="flex space-x-2">
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1"
                  placeholder="Enter your email"
                  type="email"
                  required
                />
                <Button type="submit" className="bg-amber-800 hover:bg-amber-900">
                  Subscribe
                </Button>
              </form>
              <p className="text-xs text-gray-500">We respect your privacy. Unsubscribe at any time.</p>
            </div>
          </div>
        </div>
      </section>

      <TranslatedFooter />
    </div>
  )
}
