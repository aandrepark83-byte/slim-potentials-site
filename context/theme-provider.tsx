"use client"

import React from "react"
import { siteData } from "@/data/site"

interface ThemeContextType {
  theme: {
    accent: string
    grayScale: string
  }
}

const ThemeContext = React.createContext<ThemeContextType | undefined>(undefined)

export function useTheme() {
  const context = React.useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = siteData.settings.theme

  // Generate CSS custom properties for the theme
  React.useEffect(() => {
    const root = document.documentElement

    // Set theme colors as CSS custom properties
    root.style.setProperty("--theme-accent", theme.accent)
    root.style.setProperty("--theme-grayscale", theme.grayScale)

    // Set semantic color mappings
    root.style.setProperty("--surface-primary", "hsl(var(--background))")
    root.style.setProperty("--text-primary", "hsl(var(--foreground))")
    root.style.setProperty("--dark-surface-primary", "hsl(var(--background))")
    root.style.setProperty("--dark-text-primary", "hsl(var(--foreground))")
  }, [theme])

  return <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
}
