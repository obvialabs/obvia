import React from "react"

import { Header } from "@/components/layout/header/header"

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-white dark:bg-[#111] text-foreground transition-colors duration-300 selection:bg-zinc-200 dark:selection:bg-zinc-800">
      <Header />

    </div>
  )
}
