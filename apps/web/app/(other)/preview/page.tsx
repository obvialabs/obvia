"use client"

import { PreviewBackground } from "@/components/branding/preview"
import { ObviaWordmark } from "@/components/branding/wordmark"

export default function PreviewPage() {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#00b773] text-zinc-100 selection:bg-white/20">
      {/* Background with WebGLLiquid */}
      <div className="absolute inset-0 z-0 bg-[#00b773]">
        <PreviewBackground delayMs={0} className="absolute inset-0 z-10 block h-full w-full opacity-90" />

        {/* Vignette & gradient overlays */}
        <div className="absolute inset-0 z-20 bg-[radial-gradient(circle_at_center,transparent_0%,#080808_90%)] opacity-80 animate-fade-in" />
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#00b773] via-transparent to-[#00b773]/40 animate-gradient-move" />
      </div>

      {/* Content */}
      <div className="relative z-30 flex flex-col items-center gap-6 p-8 text-center animate-fade-in-up">
        {/* Badge */}
        <div className="inline-flex items-center rounded-full border border-white/5 bg-white/5 px-4 py-1.5 backdrop-blur-md mb-4">
          {/* Status */}
          <span className="mr-2.5 flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00b773] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00b773]"></span>
          </span>

          {/* Subtitle */}
          <span className="text-xs font-light tracking-wide text-gray-200">
            a complete design system for premium applications
          </span>
        </div>

        {/* Wordmark */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
          <ObviaWordmark className="bg-gradient-to-b h-24 sm:h-32 md:h-48 from-white via-white to-white/40 bg-clip-text block pb-4 pr-2" />
        </div>

        {/* Description */}
        <p className="max-w-3xl text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-gray-200 leading-relaxed tracking-tight animate-fade-in-up delay-200">
          A next‑gen design system with end‑to‑end capabilities — interface, console, fonts, icons, and studio — built for clarity, scalability, and elegance.
        </p>
      </div>
    </div>
  )
}
