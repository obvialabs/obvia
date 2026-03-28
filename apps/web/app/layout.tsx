import type React from "react"

import {
  obviaSans,
  obviaMono
} from "@obvia/fonts"

import "@obvia/interface/obvia.css"

import { Providers } from "@interface/providers"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>): React.JSX.Element {
  return (
    <html lang="en" suppressHydrationWarning>
    <body className={`${obviaSans.variable} ${obviaMono.variable} font-sans antialiased`}>
    <Providers>{children}</Providers>
    </body>
    </html>
  )
}
