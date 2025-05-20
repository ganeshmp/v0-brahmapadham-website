"use client"

import Link from "next/link"
import { Frame, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage } from "@/lib/i18n/context"

export function TranslatedNavigation() {
  const { t } = useLanguage()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold mr-4">
          <Frame className="h-6 w-6 text-amber-800" />
          <span className="hidden md:inline-block">Brahmapadham</span>
        </Link>
        <nav className="hidden md:flex flex-row items-center gap-5 text-sm lg:gap-6">
          <Link href="/" className="font-medium transition-colors hover:text-amber-800">
            {t("home")}
          </Link>
          <Link href="/about" className="font-medium transition-colors hover:text-amber-800">
            {t("about")}
          </Link>
          <Link href="/teachings" className="font-medium transition-colors hover:text-amber-800">
            {t("teachings")}
          </Link>
          <Link href="/events" className="font-medium transition-colors hover:text-amber-800">
            {t("events")}
          </Link>
          <Link href="/schedule" className="font-medium transition-colors hover:text-amber-800">
            {t("schedule")}
          </Link>
          <Link href="/contact" className="font-medium transition-colors hover:text-amber-800">
            {t("contact")}
          </Link>
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <LanguageSwitcher />
          <nav className="flex items-center space-x-2">
            <Link href="/donate" passHref>
              <Button variant="outline" className="hidden md:flex border-amber-800 text-amber-800 hover:bg-amber-50">
                {t("donate")}
              </Button>
            </Link>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col space-y-4 mt-8">
                  <Link href="/" className="font-medium transition-colors hover:text-amber-800">
                    {t("home")}
                  </Link>
                  <Link href="/about" className="font-medium transition-colors hover:text-amber-800">
                    {t("about")}
                  </Link>
                  <Link href="/teachings" className="font-medium transition-colors hover:text-amber-800">
                    {t("teachings")}
                  </Link>
                  <Link href="/events" className="font-medium transition-colors hover:text-amber-800">
                    {t("events")}
                  </Link>
                  <Link href="/schedule" className="font-medium transition-colors hover:text-amber-800">
                    {t("schedule")}
                  </Link>
                  <Link href="/contact" className="font-medium transition-colors hover:text-amber-800">
                    {t("contact")}
                  </Link>
                  <Link href="/donate" className="font-medium transition-colors hover:text-amber-800">
                    {t("donate")}
                  </Link>
                  <div className="pt-4">
                    <LanguageSwitcher />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </nav>
        </div>
      </div>
    </header>
  )
}
