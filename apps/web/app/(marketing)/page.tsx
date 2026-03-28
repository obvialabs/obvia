"use client"

import { ObviaWordmark } from "@interface/branding/wordmark"
import { motion } from "motion/react"

import { ThemeToggle } from "@interface/layout/toggle/theme-toggle"
import { Background } from "@interface/landing/background"

import { Product, Products } from "@interface/landing/product"
import { landingStagger, landingFadeUp, landingGrow } from "@/library/motion"

export default function PreviewPage() {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#00b773] dark:bg-[#111] text-zinc-100 selection:bg-white/20">

      {/* Background */}
      <div className="absolute inset-0 z-0">
        {/* Mode Switcher */}
        <div className="absolute top-4 right-10 z-50">
          <ThemeToggle />
        </div>

        <Background
          delayMs={0}
          className="absolute inset-0 z-10 block h-full w-full opacity-90"
        />
        <div className="absolute inset-0 z-20 bg-[radial-gradient(circle_at_center,transparent_0%,#111_90%)] opacity-70" />
        <div className="absolute inset-0 z-30 bg-linear-to-t from-[#111]/20 via-transparent to-[#111]/40" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-30 flex flex-col items-center gap-10 text-center"
        variants={landingStagger}
        initial="hidden"
        animate="show"
      >
        {/* Badge */}
        <motion.div
          className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-md mb-6"
          variants={landingFadeUp}
          whileTap={landingGrow.tap}
        >
          <span className="mr-3 flex h-3 w-3 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-400"></span>
          </span>
          <span className="text-sm font-light tracking-wide text-gray-200">
            Coming in Q4 2026 — stay tuned for the full experience
          </span>
        </motion.div>

        {/* Wordmark */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center"
          variants={landingFadeUp}
        >
          <ObviaWordmark className="bg-linear-to-b from-white via-white to-white/40 bg-clip-text block h-28 sm:h-36 md:h-30 drop-shadow-lg" />
        </motion.div>

        {/* Description */}
        <motion.p
          className="max-w-3xl text-lg sm:text-xl md:text-2xl font-light text-gray-100 leading-relaxed tracking-tight"
          variants={landingFadeUp}
        >
          A next‑gen design system with end‑to‑end capabilities — interface, console, fonts, icons and studio — built for clarity, scalability, and elegance.
        </motion.p>

        <Products variants={landingFadeUp}>
          <Product href="#" variants={landingFadeUp} whileTap={landingGrow.tap}>Studio</Product>
          <Product href="#" variants={landingFadeUp} whileTap={landingGrow.tap}>Console</Product>
          <Product href="#" variants={landingFadeUp} whileTap={landingGrow.tap}>Interface</Product>
          <Product href="#" variants={landingFadeUp} whileTap={landingGrow.tap}>Typeface</Product>
          <Product href="#" variants={landingFadeUp} whileTap={landingGrow.tap}>Registry</Product>
        </Products>
      </motion.div>
    </div>
  )
}
