import type React from "react"
import "./globals.css"
import { Providers } from "./providers"
import { Newsletter } from "./_sections/newsletter"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

// Use fallback fonts for reliable builds
const fontVariables = "--font-heading:serif --font-body:system-ui,sans-serif"

const siteData = {
  settings: {
    logo: {
      dark: {
        url: "/slim-potentials-logo.jpg",
        alt: "Slim Potentials",
        width: 160,
        height: 50,
      },
      light: {
        url: "/slim-potentials-logo.jpg",
        alt: "Slim Potentials",
        width: 160,
        height: 50,
      },
    },
  },
  header: {
    navbar: {
      items: [
        { _title: "Home", url: "/" },
        { _title: "Products", url: "#products" },
        { _title: "About", url: "#about" },
        { _title: "Contact", url: "/contact" },
      ],
    },
  },
  footer: {
    navbar: {
      items: [
        { _title: "Privacy Policy", url: "/privacy" },
        { _title: "Terms of Service", url: "/terms" },
        { _title: "Refund Policy", url: "/refund-policy" },
        { _title: "Shipping Policy", url: "/shipping-policy" },
        { _title: "Contact", url: "/contact" },
      ],
    },
    copyright: "© 2024 Slim Potentials. All rights reserved.",
    socialLinks: [
      {
        _title: "Instagram",
        url: "https://instagram.com/slimpotentials",
        icon: { url: "/icons/instagram.jpg" },
      },
      {
        _title: "TikTok",
        url: "https://tiktok.com/@slimpotentials",
        icon: { url: "/icons/tiktok.jpg" },
      },
      {
        _title: "Follow on Shop",
        url: "https://shop.app/slimpotentials",
        icon: { url: "/icons/shop.jpg" },
      },
    ],
    newsletter: {
      title: "Join Our Wellness Community",
      description: "Get exclusive health tips, product updates, and special offers delivered to your inbox.",
      placeholder: "Enter your email address",
    },
  },
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={`min-h-svh max-w-[100vw] bg-background text-foreground font-body`}
        style={{ "--font-heading": "serif", "--font-body": "system-ui, sans-serif" } as React.CSSProperties}
      >
        <Providers>
          <Header logo={siteData.settings.logo} header={siteData.header} />
          <main className="min-h-[calc(100svh-var(--header-height))]">{children}</main>
          <Newsletter newsletter={siteData.footer.newsletter} />
          <Footer footer={siteData.footer} logo={siteData.settings.logo} />
        </Providers>
      </body>
    </html>
  )
}

export const metadata = {
  title: "Slim Potentials - Premium Natural Supplements",
  description:
    "Transform your wellness journey with Slim Potentials' plant-based, nutrient-rich gummy supplements. Performance+ and Gutshield Gummies for optimal health.",
  keywords: "supplements, natural, gummies, wellness, health, plant-based, performance, gut health",
  generator: "v0.dev",
}
