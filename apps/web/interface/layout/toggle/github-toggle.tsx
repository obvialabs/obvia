import type { SVGProps } from "react"
import Link from "next/link"

import { Button } from "@workspace/ui/components/button"

function GitHubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 0C5.373 0 0 5.372 0 12c0 5.303 3.438 9.8 8.207 11.387.6.11.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.388-1.333-1.757-1.333-1.757-1.089-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.834 2.807 1.305 3.493.998.108-.776.418-1.305.762-1.605-2.666-.304-5.467-1.333-5.467-5.93 0-1.312.469-2.382 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.009-.323 3.301 1.23A11.52 11.52 0 0 1 12 5.8c1.02.005 2.047.139 3.006.404 2.291-1.553 3.298-1.23 3.298-1.23.652 1.653.241 2.874.117 3.176.769.839 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.48 5.921.431.371.824 1.103.824 2.222v3.293c0 .319.192.688.802.576C20.566 21.795 24 17.298 24 12 24 5.372 18.627 0 12 0Z" />
    </svg>
  )
}

export function GithubToggle() {
  return (
    <Button asChild size="sm" variant="ghost" className="h-8 shadow-none">
      <Link href="https://github.com/selcukcukur/obvia" target="_blank" rel="noreferrer" className="flex items-center gap-1">
        <GitHubIcon className="h-4 w-4 opacity-70 group-hover:opacity-100 transition-opacity" />
        <span className="w-fit text-xs font-mono text-muted-foreground">111k</span>
      </Link>
    </Button>
  )
}
