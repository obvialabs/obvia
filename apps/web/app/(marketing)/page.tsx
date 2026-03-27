"use client"

import { PreviewBackground } from "@interface/branding/preview"
import { ObviaWordmark } from "@interface/branding/wordmark"
import { motion } from "framer-motion"

import { ObviaLogo } from "@interface/branding/logo"
import {ThemeToggle} from "@interface/layout/toggle/theme-toggle"

export default function PreviewPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  } as const

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  } as const

  const hoverGrow = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  } as const


  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#00b773] dark:bg-[#111] text-zinc-100 selection:bg-white/20">

      {/* Background */}
      <div className="absolute inset-0 z-0">
        {/* Mode Switcher */}
        <div className="absolute top-4 right-10 z-50">
          <ThemeToggle />
        </div>

        <PreviewBackground
          delayMs={0}
          className="absolute inset-0 z-10 block h-full w-full opacity-90"
        />
        <div className="absolute inset-0 z-20 bg-[radial-gradient(circle_at_center,transparent_0%,#111_90%)] opacity-70" />
        <div className="absolute inset-0 z-30 bg-gradient-to-t from-[#111]/20 via-transparent to-[#111]/40" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-30 flex flex-col items-center gap-10 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >

        {/* Badge */}
        <motion.div
          className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-md mb-6"
          variants={fadeUp}
          whileTap={hoverGrow.tap}
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
          variants={fadeUp}
        >
          <ObviaWordmark className="bg-gradient-to-b from-white via-white to-white/40 bg-clip-text block h-28 sm:h-36 md:h-30 drop-shadow-lg" />
        </motion.div>

        {/* Description */}
        <motion.p
          className="max-w-3xl text-lg sm:text-xl md:text-2xl font-light text-gray-100 leading-relaxed tracking-tight"
          variants={fadeUp}
        >
          A next‑gen design system with end‑to‑end capabilities — interface, console, fonts, icons and studio — built for clarity, scalability, and elegance.
        </motion.p>

        {/* Menu with highlight */}
        <motion.div
          className="relative z-30 grid grid-cols-2 md:grid-cols-5 items-stretch justify-center gap-4 px-6 text-center"
          variants={fadeUp}
        >
          <motion.a
            href="#"
            className="group block w-full md:w-auto rounded-sm px-5 py-3 hover:bg-white/5 transition duration-500 ease-in-out text-center"
            variants={fadeUp}
            whileTap={hoverGrow.tap}
          >
            <ObviaLogo className="grayscale group-hover:grayscale-0 size-7 mr-2 inline-block transition duration-500" />
            <span className="text-lg tracking-wide text-gray-50 group-hover:text-[#00b773] transition duration-500">
      Studio
    </span>
          </motion.a>

          <motion.a
            href="#"
            className="group block w-full md:w-auto rounded-sm px-5 py-3 hover:bg-white/5 transition duration-500 ease-in-out text-center"
            variants={fadeUp}
            whileTap={hoverGrow.tap}
          >
            <ObviaLogo className="grayscale group-hover:grayscale-0 size-7 mr-2 inline-block transition duration-500" />
            <span className="text-lg tracking-wide text-gray-50 group-hover:text-[#00b773] transition duration-500">
      Console
    </span>
          </motion.a>

          <motion.a
            href="#"
            className="group relative block w-full md:w-auto rounded-sm px-5 py-3 hover:bg-white/5 transition duration-500 ease-in-out text-center"
            variants={fadeUp}
            whileTap={hoverGrow.tap}
          >
            <ObviaLogo className="grayscale group-hover:grayscale-0 size-7 mr-2 inline-block transition duration-500" />
            <span className="text-lg tracking-wide text-gray-50 group-hover:text-[#00b773] transition duration-500">
      Interface
    </span>
          </motion.a>

          <motion.a
            href="#"
            className="group relative block w-full md:w-auto rounded-sm px-5 py-3 hover:bg-white/5 transition duration-500 ease-in-out text-center"
            variants={fadeUp}
            whileTap={hoverGrow.tap}
          >
            <ObviaLogo className="group-hover:grayscale size-7 mr-2 inline-block transition duration-500" />
            <span className="text-lg tracking-wide text-gray-50 transition duration-500">
      Typeface
    </span>
          </motion.a>

          <motion.a
            href="#"
            className="group relative block w-full md:w-auto rounded-sm px-5 py-3 hover:bg-white/5 transition duration-500 ease-in-out text-center"
            variants={fadeUp}
            whileTap={hoverGrow.tap}
          >
            <ObviaLogo className="grayscale group-hover:grayscale-0 size-7 mr-2 inline-block transition duration-500" />
            <span className="text-lg tracking-wide text-gray-50 group-hover:text-[#00b773] transition duration-500">
      Registry
    </span>
          </motion.a>
        </motion.div>

      </motion.div>
    </div>
  )
}
