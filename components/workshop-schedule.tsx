import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function WorkshopSchedule() {
  return (
    <div className="space-y-4">
      <Card className="border-amber-200">
        <CardHeader className="bg-amber-800 text-white">
          <CardTitle className="text-center">Upcoming Workshop</CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-4">
          <div className="text-center space-y-2">
            <h3 className="text-xl font-bold text-amber-800">Bhagavad Gita Adhyayanam-Acharana</h3>
            <p className="text-lg">A Three Day Residential Workshop</p>
            <p className="font-semibold">December 13-15, 2024</p>
            <p>Organized By Department of BRAHMAPATHAM BHAGAVADGITA SPIRITUAL TRAINING</p>
            <p className="font-medium">VENUE: BRAHMAPATHAM BHAGAVADGITA ADHYATMIKA KSHETRAM</p>
          </div>

          <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg">
            <Image src="/images/workshop-schedule.png" alt="Workshop Schedule" fill className="object-contain" />
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-700 mb-4">
              The workshop includes Yoga Pranayama, Guided Meditation, Bhagavatgita Group Chanting, and Discourse on
              Method of Application of Bhagavadgita for all 18 chapters.
            </p>
            <Link href="/events/workshop-registration" passHref>
              <Button className="bg-amber-800 hover:bg-amber-900">Register for Workshop</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
