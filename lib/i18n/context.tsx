"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { type Language, languages, translations } from "./translations"

type LanguageContextType = {
  currentLanguage: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

const defaultLanguage = languages[0] // English

const LanguageContext = createContext<LanguageContextType>({
  currentLanguage: defaultLanguage,
  setLanguage: () => {},
  t: (key: string) => key,
})

export const useLanguage = () => useContext(LanguageContext)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(defaultLanguage)

  // Load saved language preference on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language")
    if (savedLanguage) {
      const lang = languages.find((l) => l.code === savedLanguage)
      if (lang) {
        setCurrentLanguage(lang)
      }
    }
  }, [])

  const setLanguage = (language: Language) => {
    setCurrentLanguage(language)
    localStorage.setItem("language", language.code)
  }

  // Translation function
  const t = (key: string): string => {
    const keys = key.split(".")
    let value = translations[currentLanguage.code]

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k]
      } else {
        // Fallback to English if translation not found
        let fallback = translations["en"]
        for (const k of keys) {
          if (fallback && typeof fallback === "object" && k in fallback) {
            fallback = fallback[k]
          } else {
            return key // Return the key itself if no translation found
          }
        }
        return typeof fallback === "string" ? fallback : key
      }
    }

    return typeof value === "string" ? value : key
  }

  return <LanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>{children}</LanguageContext.Provider>
}
