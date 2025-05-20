"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/lib/i18n/context"

export function TeachingsSection() {
  const { t, currentLanguage } = useLanguage()

  return (
    <section className={`py-12 md:py-24 ${currentLanguage.fontClass || ""}`}>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-800">
              {t("featuredTeachings")}
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl spiritual-heading">
              {t("wisdomFromGita")}
            </h2>
            <p className="max-w-[900px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t("teachingsText")}
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8 mt-8">
          <Card className="border-amber-200 spiritual-card">
            <CardHeader>
              <CardTitle>{t("karmaYoga")}</CardTitle>
              <CardDescription>{t("karmaYogaDesc")}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">{t("karmaYogaText")}</p>
            </CardContent>
            <CardFooter>
              <Link href="/teachings/karma-yoga" passHref>
                <Button variant="outline" className="w-full border-amber-800 text-amber-800 hover:bg-amber-50">
                  {t("readMore")}
                </Button>
              </Link>
            </CardFooter>
          </Card>
          <Card className="border-amber-200 spiritual-card">
            <CardHeader>
              <CardTitle>{t("bhaktiYoga")}</CardTitle>
              <CardDescription>{t("bhaktiYogaDesc")}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">{t("bhaktiYogaText")}</p>
            </CardContent>
            <CardFooter>
              <Link href="/teachings/bhakti-yoga" passHref>
                <Button variant="outline" className="w-full border-amber-800 text-amber-800 hover:bg-amber-50">
                  {t("readMore")}
                </Button>
              </Link>
            </CardFooter>
          </Card>
          <Card className="border-amber-200 spiritual-card">
            <CardHeader>
              <CardTitle>{t("jnanaYoga")}</CardTitle>
              <CardDescription>{t("jnanaYogaDesc")}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">{t("jnanaYogaText")}</p>
            </CardContent>
            <CardFooter>
              <Link href="/teachings/jnana-yoga" passHref>
                <Button variant="outline" className="w-full border-amber-800 text-amber-800 hover:bg-amber-50">
                  {t("readMore")}
                </Button>
              </Link>
            </CardFooter>
          </Card>
          <Card className="border-amber-200 spiritual-card">
            <CardHeader>
              <CardTitle>{t("dhyanaYoga")}</CardTitle>
              <CardDescription>{t("dhyanaYogaDesc")}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">{t("dhyanaYogaText")}</p>
            </CardContent>
            <CardFooter>
              <Link href="/teachings/dhyana-yoga" passHref>
                <Button variant="outline" className="w-full border-amber-800 text-amber-800 hover:bg-amber-50">
                  {t("readMore")}
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
        <div className="flex justify-center mt-8">
          <Link href="/teachings" passHref>
            <Button className="bg-amber-800 hover:bg-amber-900">
              {t("viewAllTeachings")} <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
