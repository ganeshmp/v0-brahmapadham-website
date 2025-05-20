"use client"

import type React from "react"

import { LanguageProvider } from "./context"

export function I18nProviderWrapper({ children }: { children: React.ReactNode }) {
  return <LanguageProvider>{children}</LanguageProvider>
}
