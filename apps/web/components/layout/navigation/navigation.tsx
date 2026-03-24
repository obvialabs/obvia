import type { ComponentProps } from "react"
import Link from "next/link"
import { Button } from "@workspace/ui/components/button"
import { cn } from "@/lib/utils"

export function Navigation({
  className,
  ...props
}: ComponentProps<"nav">) {
  return (
    <nav
      data-slot="navigation"
      className={cn("items-center hidden lg:flex", className)}
      {...props}
    />
  )
}

export function NavigationTrigger({
  className,
  ...props
}: ComponentProps<typeof Button>) {
  return (
    <Button
      size="sm"
      variant="ghost"
      className={cn("h-8 shadow-none", className)}
      {...props}
    />
  )
}

export function NavigationLink({
  className,
  ...props
}: ComponentProps<typeof Link>) {
  return (
    <NavigationTrigger asChild>
      <Link
        data-slot="navigation-link"
        className={cn("text-xs text-foreground/60 transition-colors hover:text-foreground", className)}
        {...props}
      />
    </NavigationTrigger>
  )
}
