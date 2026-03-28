"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { cn } from "@obvia/utilities"
import { Tooltip, TooltipContent, TooltipTrigger } from "@workspace/ui/components/tooltip/tooltip"
import { Keyboard } from "@workspace/ui/components/keyboard/keyboard"
import { motion, AnimatePresence } from "framer-motion"

interface ThemeToggleProps {
  className?: string
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = theme === "dark"

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          onClick={() => setTheme(isDark ? "light" : "dark")}
          className={cn(
            "inline-flex h-8 w-8 items-center justify-center rounded-lg border border-transparent transition-shadow hover:bg-accent/5 relative cursor-pointer",
            className
          )}
          aria-label="Toggle theme"
        >
          {!mounted ? (
            // Skeleton state
            <motion.div
              className="size-5 rounded-full bg-gray-300 dark:bg-gray-700 animate-pulse"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            />
          ) : (
            <AnimatePresence mode="wait" initial={false}>
              {isDark ? (
                <motion.svg
                  key="sun"
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  initial={{ opacity: 0, scale: 0.8, rotate: -90 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.8, rotate: 90 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </motion.svg>
              ) : (
                <motion.svg
                  key="moon"
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  initial={{ opacity: 0, scale: 0.8, rotate: 90 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.8, rotate: -90 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
                </motion.svg>
              )}
            </AnimatePresence>
          )}
          <span className="sr-only">Toggle theme</span>
        </button>
      </TooltipTrigger>
      <TooltipContent>
        <p className="text-[11px]">
          Toggle theme <Keyboard className="text-[11px] ml-1">T</Keyboard>
        </p>
      </TooltipContent>
    </Tooltip>
  )
}
