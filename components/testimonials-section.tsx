"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useLanguage } from "@/lib/i18n/context"

export function TestimonialsSection() {
  const { t, currentLanguage } = useLanguage()

  return (
    <section className={`py-12 md:py-24 ${currentLanguage.fontClass || ""}`}>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-800">
              {t("testimonials")}
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl spiritual-heading">
              {t("transformativeExperiences")}
            </h2>
            <p className="max-w-[900px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t("testimonialsText")}
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8 mt-8">
          <Card className="border-amber-200 spiritual-card">
            <CardHeader>
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Avatar" />
                  <AvatarFallback>RK</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg">Rajesh Kumar</CardTitle>
                  <CardDescription>Software Engineer</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                "The Gita study program at Brahmapadham has completely transformed my approach to work and life. I've
                learned to perform my duties with detachment and find peace amidst the chaos of modern life."
              </p>
            </CardContent>
          </Card>
          <Card className="border-amber-200 spiritual-card">
            <CardHeader>
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Avatar" />
                  <AvatarFallback>SP</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg">Sunita Patel</CardTitle>
                  <CardDescription>Teacher</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                "The meditation retreats have given me tools to manage stress and find inner calm. The teachings are
                presented in a way that's accessible yet profound, making ancient wisdom relevant to my daily life as an
                educator."
              </p>
            </CardContent>
          </Card>
          <Card className="border-amber-200 spiritual-card">
            <CardHeader>
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Avatar" />
                  <AvatarFallback>AM</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg">Arjun Mehta</CardTitle>
                  <CardDescription>Business Owner</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                "Learning about Karma Yoga has revolutionized how I run my business. I've found a way to be ambitious
                yet ethical, focused yet detached from outcomes. The community at Brahmapadham has become like a second
                family to me."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
