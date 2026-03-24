"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"
import {Tooltip, TooltipContent, TooltipTrigger} from "@workspace/ui/components/tooltip/tooltip";

import { Keyboard } from "@workspace/ui/components/keyboard/keyboard"

interface LayoutToggleProps {
  className?: string
}

export function LayoutToggle({ className }: LayoutToggleProps) {
  const { theme, setTheme } = useTheme()

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className={cn(
            "inline-flex h-8 w-8 items-center justify-center rounded-lg border border-transparent transition-shadow hover:bg-accent relative [&_svg:not([class*='opacity-'])]:opacity-80 [&_svg]:pointer-events-none [&_svg]:shrink-0 cursor-pointer",
            className
          )}
          aria-label="Toggle layout"
          title="Toggle layout"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 3v18"></path>
            <rect width="12" height="18" x="6" y="3" rx="2"></rect>
            <path d="M22 3v18"></path>
          </svg>

          <span className="sr-only">Toggle layout</span>
        </button>
      </TooltipTrigger>
      <TooltipContent>
        <p className="text-[11px]">Toggle layout <Keyboard className="text-[11px] ml-1">L</Keyboard></p>
      </TooltipContent>
    </Tooltip>
  )
}
