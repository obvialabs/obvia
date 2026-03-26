import type React from "react"
import type {  Viewport } from "next"

import {
  obviaSans,
  obviaMono
} from "@obvia/fonts"

import "@workspace/ui/globals.css"
import { Providers } from "@/components/providers"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>): React.JSX.Element {
  return (
    <html lang="en" suppressHydrationWarning>
    <body className={`${obviaSans.variable} ${obviaMono.variable} font-sans antialiased o-background-200`}>
    <Providers>{children}</Providers>
    </body>
    </html>
  )
}
