import type { ComponentProps } from "react"

import { Button } from "@workspace/ui/components/button"
import Link from "next/link";
import {ObviaLogo} from "@/components/branding/logo"

export function NavigationLogo({
  className,
  ...props
}: ComponentProps<"nav">) {
  return (
    <Button asChild size="sm" variant="ghost" className="h-8 shadow-none">
      <Link href="/" className="flex items-center">
        <ObviaLogo />
      </Link>
    </Button>
  )
}
