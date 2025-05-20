import Link from "next/link"
import { ArrowRight, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Footer } from "@/components/footer"

export default function TeachingsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-amber-100 to-amber-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-amber-900">
                Teachings & Wisdom
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl">
                Explore the timeless wisdom of the Bhagavad Gita and its practical application in modern life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-800">Introduction</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">The Bhagavad Gita: A Timeless Guide</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  The Bhagavad Gita, often referred to as simply "the Gita," is a 700-verse Hindu scripture that is part
                  of the Indian epic Mahabharata. It contains a conversation between Prince Arjuna and his guide Lord
                  Krishna on a variety of theological and philosophical issues.
                </p>
                <p>
                  Composed approximately 2,000 years ago, the Gita's enduring relevance lies in its practical approach
                  to life's challenges and its profound insights into human nature, duty, purpose, and spiritual growth.
                </p>
                <p>
                  At Brahmapadham, we approach the Gita not merely as a religious text but as a practical guide to
                  living a balanced, purposeful, and spiritually fulfilling life in today's complex world.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/teachings/introduction" passHref>
                  <Button className="bg-amber-800 hover:bg-amber-900">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-[500px] aspect-square overflow-hidden rounded-lg">
                <img
                  alt="Bhagavad Gita manuscript"
                  className="object-cover w-full h-full"
                  src="/placeholder.svg?height=600&width=600"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Teachings */}
      <section className="py-12 md:py-24 bg-amber-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-800">
                Core Teachings
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">The Four Paths of Yoga</h2>
              <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl">
                The Bhagavad Gita outlines four main spiritual paths, each suited to different temperaments and
                personalities.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8 mt-12">
            <Card className="border-amber-200">
              <CardHeader>
                <CardTitle>Karma Yoga: The Path of Action</CardTitle>
                <CardDescription>Chapter 3 of the Bhagavad Gita</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Karma Yoga is the path of selfless action performed without attachment to results. It teaches that
                    right action, done with the right attitude, leads to spiritual growth and liberation.
                  </p>
                  <p>Key principles include:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Performing duties without attachment to outcomes</li>
                    <li>Acting as an offering to the divine</li>
                    <li>Understanding the law of cause and effect</li>
                    <li>Balancing effort with surrender</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/teachings/karma-yoga" passHref>
                  <Button variant="outline" className="w-full border-amber-800 text-amber-800 hover:bg-amber-50">
                    Explore Karma Yoga
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="border-amber-200">
              <CardHeader>
                <CardTitle>Bhakti Yoga: The Path of Devotion</CardTitle>
                <CardDescription>Chapter 12 of the Bhagavad Gita</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Bhakti Yoga is the path of devotion and love for the divine. It emphasizes surrender, worship, and
                    developing a personal relationship with God.
                  </p>
                  <p>Key principles include:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Cultivating divine love and devotion</li>
                    <li>Practicing surrender (sharanagati)</li>
                    <li>Engaging in worship and prayer</li>
                    <li>Seeing the divine in all beings</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/teachings/bhakti-yoga" passHref>
                  <Button variant="outline" className="w-full border-amber-800 text-amber-800 hover:bg-amber-50">
                    Explore Bhakti Yoga
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="border-amber-200">
              <CardHeader>
                <CardTitle>Jnana Yoga: The Path of Knowledge</CardTitle>
                <CardDescription>Chapters 13-18 of the Bhagavad Gita</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Jnana Yoga is the path of knowledge and wisdom. It involves intellectual inquiry, self-analysis, and
                    the discrimination between the real and the unreal.
                  </p>
                  <p>Key principles include:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Self-inquiry (atma vichara)</li>
                    <li>Discrimination between the eternal and temporary</li>
                    <li>Understanding the nature of consciousness</li>
                    <li>Transcending identification with the body and mind</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/teachings/jnana-yoga" passHref>
                  <Button variant="outline" className="w-full border-amber-800 text-amber-800 hover:bg-amber-50">
                    Explore Jnana Yoga
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="border-amber-200">
              <CardHeader>
                <CardTitle>Dhyana Yoga: The Path of Meditation</CardTitle>
                <CardDescription>Chapter 6 of the Bhagavad Gita</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Dhyana Yoga is the path of meditation and concentration. It focuses on developing mental discipline
                    and achieving higher states of consciousness.
                  </p>
                  <p>Key principles include:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Practices of concentration and meditation</li>
                    <li>Control of the senses and mind</li>
                    <li>Developing equanimity in all situations</li>
                    <li>Experiencing higher states of consciousness</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/teachings/dhyana-yoga" passHref>
                  <Button variant="outline" className="w-full border-amber-800 text-amber-800 hover:bg-amber-50">
                    Explore Dhyana Yoga
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Concepts */}
      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-800">Key Concepts</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Fundamental Teachings of the Gita</h2>
              <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl">
                Explore these essential concepts that form the foundation of the Bhagavad Gita's wisdom.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 mt-12">
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm border border-amber-200">
              <BookOpen className="h-12 w-12 text-amber-800 mb-4" />
              <h3 className="text-xl font-bold">Dharma</h3>
              <p className="text-gray-700 mt-2">
                The concept of righteous duty, cosmic order, and living in alignment with one's true purpose and nature.
              </p>
              <Link
                href="/teachings/concepts/dharma"
                className="text-amber-800 hover:text-amber-900 mt-4 inline-flex items-center"
              >
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm border border-amber-200">
              <BookOpen className="h-12 w-12 text-amber-800 mb-4" />
              <h3 className="text-xl font-bold">Atman & Brahman</h3>
              <p className="text-gray-700 mt-2">
                Understanding the individual soul (Atman) and its relationship with the ultimate reality or universal
                consciousness (Brahman).
              </p>
              <Link
                href="/teachings/concepts/atman-brahman"
                className="text-amber-800 hover:text-amber-900 mt-4 inline-flex items-center"
              >
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm border border-amber-200">
              <BookOpen className="h-12 w-12 text-amber-800 mb-4" />
              <h3 className="text-xl font-bold">Gunas</h3>
              <p className="text-gray-700 mt-2">
                The three qualities of nature (sattva, rajas, and tamas) that influence all aspects of existence and
                human behavior.
              </p>
              <Link
                href="/teachings/concepts/gunas"
                className="text-amber-800 hover:text-amber-900 mt-4 inline-flex items-center"
              >
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm border border-amber-200">
              <BookOpen className="h-12 w-12 text-amber-800 mb-4" />
              <h3 className="text-xl font-bold">Karma</h3>
              <p className="text-gray-700 mt-2">
                The law of cause and effect that governs all actions and their consequences across lifetimes.
              </p>
              <Link
                href="/teachings/concepts/karma"
                className="text-amber-800 hover:text-amber-900 mt-4 inline-flex items-center"
              >
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm border border-amber-200">
              <BookOpen className="h-12 w-12 text-amber-800 mb-4" />
              <h3 className="text-xl font-bold">Moksha</h3>
              <p className="text-gray-700 mt-2">
                Liberation from the cycle of birth and death, and the ultimate goal of spiritual practice according to
                the Gita.
              </p>
              <Link
                href="/teachings/concepts/moksha"
                className="text-amber-800 hover:text-amber-900 mt-4 inline-flex items-center"
              >
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm border border-amber-200">
              <BookOpen className="h-12 w-12 text-amber-800 mb-4" />
              <h3 className="text-xl font-bold">Sthitaprajna</h3>
              <p className="text-gray-700 mt-2">
                The state of steady wisdom and equanimity that remains undisturbed by pleasure, pain, and the dualities
                of life.
              </p>
              <Link
                href="/teachings/concepts/sthitaprajna"
                className="text-amber-800 hover:text-amber-900 mt-4 inline-flex items-center"
              >
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Study Resources */}
      <section className="py-12 md:py-24 bg-amber-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-800">Resources</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Study Materials & Resources</h2>
              <div className="space-y-4 text-gray-700">
                <p>We offer a variety of resources to support your study of the Bhagavad Gita and spiritual growth:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Recommended Translations:</strong> Carefully selected editions of the Bhagavad Gita with
                    insightful commentaries.
                  </li>
                  <li>
                    <strong>Study Guides:</strong> Structured materials to help you navigate the teachings chapter by
                    chapter.
                  </li>
                  <li>
                    <strong>Audio Lectures:</strong> Recorded discourses by our teachers on various aspects of the Gita.
                  </li>
                  <li>
                    <strong>Practice Workbooks:</strong> Interactive materials to help you apply the teachings in your
                    daily life.
                  </li>
                  <li>
                    <strong>Online Courses:</strong> Structured learning experiences for those who cannot attend in
                    person.
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/resources" passHref>
                  <Button className="bg-amber-800 hover:bg-amber-900">
                    Browse Resources <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-[500px] aspect-square overflow-hidden rounded-lg">
                <img
                  alt="Study materials"
                  className="object-cover w-full h-full"
                  src="/placeholder.svg?height=600&width=600"
                />
              </div>
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
                Join our community and explore the transformative teachings of the Bhagavad Gita through our various
                programs.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/events" passHref>
                <Button className="bg-amber-800 hover:bg-amber-900">Upcoming Classes</Button>
              </Link>
              <Link href="/contact" passHref>
                <Button variant="outline" className="border-amber-800 text-amber-800 hover:bg-amber-50">
                  Contact Us
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
