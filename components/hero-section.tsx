"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useLanguage } from "@/lib/i18n/context"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-amber-100 to-amber-50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-amber-900">
                {t("heroTitle")}
              </h1>
              <p className="max-w-[600px] text-gray-700 md:text-xl dark:text-gray-400">{t("heroSubtitle")}</p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/teachings" passHref>
                <Button className="bg-amber-800 hover:bg-amber-900">
                  {t("exploreTeachings")} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/about" passHref>
                <Button variant="outline" className="border-amber-800 text-amber-800 hover:bg-amber-50">
                  {t("learnAboutUs")}
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-[500px] aspect-square overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-amber-800/20 z-10"></div>
              <Image
                alt="Bhagavad Gita teachings"
                className="object-cover"
                src="/images/temple-building.png"
                fill
                sizes="(max-width: 768px) 100vw, 500px"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 text-white">
                <div className="text-lg font-medium">Spiritual Wisdom</div>
                <div className="text-sm opacity-90">Ancient teachings for modern life</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
