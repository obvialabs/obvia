"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { cn } from "@obvia/utilities"

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
            <div
              className="size-5 rounded-full bg-gray-300 dark:bg-gray-700 animate-pulse"

            />
          ) : (
              isDark ? (
                <svg
                  key="sun"
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
              ) : (
                <svg
                  key="moon"
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
                </svg>
              )
          )}
          <span className="sr-only">Toggle theme</span>
        </button>

  )
}
