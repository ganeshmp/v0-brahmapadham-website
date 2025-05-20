import { DailySchedule } from "@/components/daily-schedule"
import { WorkshopSchedule } from "@/components/workshop-schedule"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function SchedulePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-amber-100 to-amber-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-amber-900">
                Daily Schedule & Programs
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl">
                Join us for our daily activities and special programs at Brahmapadham Bhagavad Gita Adhyātmika Kṣetram.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Schedule Section */}
      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-800">
                Daily Activities
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Temple Daily Routine</h2>
              <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl">
                Our daily schedule of spiritual activities and programs at the temple.
              </p>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-[500px] aspect-[3/4] overflow-hidden rounded-lg">
                <Image src="/images/temple-building.png" alt="Daily Schedule" fill className="object-contain" />
              </div>
            </div>
            <div>
              <DailySchedule />
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Schedule Section */}
      <section className="py-12 md:py-24 bg-amber-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-800">
                Special Programs
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Upcoming Workshops & Events</h2>
              <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl">
                Special residential workshops and events for deeper spiritual practice.
              </p>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <WorkshopSchedule />
            <div className="flex flex-col gap-6">
              <div className="relative w-full aspect-[3/4] overflow-hidden rounded-lg">
                <Image src="/images/telugu-flyer.png" alt="Telugu Event Flyer" fill className="object-contain" />
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-700">Gita Jayanti Celebration: December 13-15, 2024</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Programs */}
      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-800">Programs</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Special Announcements</h2>
              <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl">
                Stay updated with our latest programs and announcements.
              </p>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg">
              <Image src="/images/telugu-promo.png" alt="Telugu Promotional Material" fill className="object-contain" />
            </div>
            <div className="space-y-6">
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

              <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
                <h3 className="text-xl font-bold text-amber-800 mb-4">Address</h3>
                <p>
                  Sai viswa Layout, Bangalore Highway, Near Taj Hotel,
                  <br />
                  Ramalayam Street Tirupati-517503,
                  <br />
                  Tirupati District, Andhra Pradesh, India
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
