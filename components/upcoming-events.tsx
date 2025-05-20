"use client"

import Link from "next/link"
import { ArrowRight, Calendar, Clock, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/lib/i18n/context"

export function UpcomingEvents() {
  const { t, currentLanguage } = useLanguage()

  return (
    <section className={`py-12 md:py-24 bg-amber-50 ${currentLanguage.fontClass || ""}`}>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-800">Calendar</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl spiritual-heading">
              {t("upcomingEvents")}
            </h2>
            <p className="max-w-[900px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t("eventsSubtitle")}
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8 mt-8">
          <Card className="border-amber-200 spiritual-card">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>{t("gitaJayanti")}</CardTitle>
                  <CardDescription>{t("gitaJayantiDesc")}</CardDescription>
                </div>
                <Badge className="bg-amber-600">Special Event</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-amber-800">
                  <Calendar className="h-4 w-4" />
                  <span>{t("gitaJayantiDate")}</span>
                </div>
                <div className="flex items-center gap-2 text-amber-800">
                  <Clock className="h-4 w-4" />
                  <span>{t("gitaJayantiTime")}</span>
                </div>
                <div className="flex items-center gap-2 text-amber-800">
                  <MapPin className="h-4 w-4" />
                  <span>{t("gitaJayantiLocation")}</span>
                </div>
                <p className="text-gray-700 mt-2">{t("gitaJayantiText")}</p>
              </div>
            </CardContent>
            <CardFooter>
              <Link href="/events/gita-jayanti" passHref>
                <Button variant="outline" className="w-full border-amber-800 text-amber-800 hover:bg-amber-50">
                  {t("register")}
                </Button>
              </Link>
            </CardFooter>
          </Card>
          <Card className="border-amber-200 spiritual-card">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>{t("meditationRetreat")}</CardTitle>
                  <CardDescription>{t("meditationRetreatDesc")}</CardDescription>
                </div>
                <Badge className="bg-amber-600">Limited Spots</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-amber-800">
                  <Calendar className="h-4 w-4" />
                  <span>{t("meditationRetreatDate")}</span>
                </div>
                <div className="flex items-center gap-2 text-amber-800">
                  <Clock className="h-4 w-4" />
                  <span>{t("meditationRetreatTime")}</span>
                </div>
                <div className="flex items-center gap-2 text-amber-800">
                  <MapPin className="h-4 w-4" />
                  <span>{t("meditationRetreatLocation")}</span>
                </div>
                <p className="text-gray-700 mt-2">{t("meditationRetreatText")}</p>
              </div>
            </CardContent>
            <CardFooter>
              <Link href="/events/meditation-retreat" passHref>
                <Button variant="outline" className="w-full border-amber-800 text-amber-800 hover:bg-amber-50">
                  {t("register")}
                </Button>
              </Link>
            </CardFooter>
          </Card>
          <Card className="border-amber-200 spiritual-card">
            <CardHeader>
              <CardTitle>{t("studyCircle")}</CardTitle>
              <CardDescription>{t("studyCircleDesc")}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-amber-800">
                  <Calendar className="h-4 w-4" />
                  <span>{t("studyCircleDate")}</span>
                </div>
                <div className="flex items-center gap-2 text-amber-800">
                  <Clock className="h-4 w-4" />
                  <span>{t("studyCircleTime")}</span>
                </div>
                <div className="flex items-center gap-2 text-amber-800">
                  <MapPin className="h-4 w-4" />
                  <span>{t("studyCircleLocation")}</span>
                </div>
                <p className="text-gray-700 mt-2">{t("studyCircleText")}</p>
              </div>
            </CardContent>
            <CardFooter>
              <Link href="/events/study-circle" passHref>
                <Button variant="outline" className="w-full border-amber-800 text-amber-800 hover:bg-amber-50">
                  {t("joinNextSession")}
                </Button>
              </Link>
            </CardFooter>
          </Card>
          <Card className="border-amber-200 spiritual-card">
            <CardHeader>
              <CardTitle>Spiritual Discourse Series</CardTitle>
              <CardDescription>By Swami Atmajnananda</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-amber-800">
                  <Calendar className="h-4 w-4" />
                  <span>October 5-10, 2025</span>
                </div>
                <div className="flex items-center gap-2 text-amber-800">
                  <Clock className="h-4 w-4" />
                  <span>6:00 PM - 8:00 PM</span>
                </div>
                <div className="flex items-center gap-2 text-amber-800">
                  <MapPin className="h-4 w-4" />
                  <span>Lecture Hall, Brahmapadham Center</span>
                </div>
                <p className="text-gray-700 mt-2">
                  A special series of evening discourses on "Applying Gita's Wisdom in Modern Life" by renowned
                  spiritual teacher.
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Link href="/events/discourse-series" passHref>
                <Button variant="outline" className="w-full border-amber-800 text-amber-800 hover:bg-amber-50">
                  Register
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
        <div className="flex justify-center mt-8">
          <Link href="/events" passHref>
            <Button className="bg-amber-800 hover:bg-amber-900">
              {t("viewAllEvents")} <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
