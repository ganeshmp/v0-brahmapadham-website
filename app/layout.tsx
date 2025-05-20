import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { I18nProviderWrapper } from "@/lib/i18n/provider-wrapper"
import { TranslatedNavigation } from "@/components/translated-navigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Brahmapadham Bhagavad Gita Adhyātmika Kṣetram",
  description:
    "Discover the timeless wisdom of the Bhagavad Gita and embark on a journey of spiritual transformation and self-realization.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <I18nProviderWrapper>
            <div className="relative flex min-h-screen flex-col">
              <TranslatedNavigation />
              <main className="flex-1">{children}</main>
            </div>
          </I18nProviderWrapper>
        </ThemeProvider>
      </body>
    </html>
  )
}
