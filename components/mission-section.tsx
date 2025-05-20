"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useLanguage } from "@/lib/i18n/context"

export function MissionSection() {
  const { t } = useLanguage()

  return (
    <section className="py-12 md:py-24 bg-amber-50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-800">
              {t("ourMission")}
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("missionTitle")}</h2>
            <p className="text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t("missionText")}
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/about" passHref>
                <Button className="bg-amber-800 hover:bg-amber-900">
                  {t("learnMore")} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-full max-w-[500px] aspect-square overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-200/40 to-amber-600/40 z-10"></div>
              <Image
                alt="Temple Building"
                className="object-cover"
                src="/images/temple-building.png"
                fill
                sizes="(max-width: 768px) 100vw, 500px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
