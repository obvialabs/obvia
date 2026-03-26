import React from "react"

import {
  NavigationContent, NavigationLink
} from "@workspace/ui/components/navigation/navigation"


export function ProductsContent() {
  return (
    <NavigationContent className="flex max-w-full flex-col rounded-lg lg:min-w-3xl xl:min-w-4xl">
      <NavigationLink className="border-border group relative flex overflow-hidden rounded-t-lg border-b" href="/studio">
        <div className="relative flex w-full items-end justify-between p-6">
          <div className="flex flex-col gap-0.5">
            <span className="text-foreground/40 text-xs tracking-wider uppercase">Platform</span>

            <span className="text-foreground/60 group-hover:text-accent-foreground mt-5 text-sm font-medium transition-colors duration-300 ease-out"><b>Obvia</b> Studio</span>
            <span className="text-foreground/40 text-xs">Customize components, design full websites, and create your applications — all powered by an AI‑assisted studio experience</span>
          </div>

          <svg viewBox="0 0 8 8" width="16" height="16" role="img" aria-labelledby="title" fill="none" className="text-fg0 group-hover:text-fgAccent1 -rotate-90 transition-all duration-300 ease-out group-hover:translate-x-1">
            <title id="title" lang="en">Chevron Icon</title>
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M1.5 2.5h1v1h-1v-1Zm2 2v-1h-1v1h1Zm1 0v1h-1v-1h1Zm1-1v1h-1v-1h1Zm0 0v-1h1v1h-1Z"
                  fill="currentColor"></path>
          </svg>
        </div>
      </NavigationLink>

      <div className="flex gap-6 p-6">
        <div className="flex flex-1 flex-col gap-3">
          <span className="text-foreground/40 text-xs tracking-wider uppercase">Interface</span>

          <NavigationLink className="flex flex-row items-center text-foreground transition-all duration-200 ease-out" href="/primitives">
            <div className="group flex flex-col gap-0.5">
              <span className="text-foreground/60 group-hover:text-accent-foreground text-sm transition-colors"><b>Obvia</b> Primitives</span>
              <span className="text-foreground/40 text-xs leading-normal">Essential building blocks for interface design</span>
            </div>
          </NavigationLink>

          <NavigationLink className="flex flex-row items-center text-foreground transition-all duration-200 ease-out" href="/components">
            <div className="group flex flex-col gap-0.5">
              <span className="text-foreground/60 group-hover:text-accent-foreground text-sm transition-colors"><b>Obvia</b> Components</span>
              <span className="text-foreground/40 text-xs leading-normal">Reusable components for modern interfaces</span></div>
          </NavigationLink>

          <NavigationLink className="flex flex-row items-center text-foreground transition-all duration-200 ease-out" href="/blocks">
            <div className="group flex flex-col gap-0.5">
              <span className="text-foreground/60 group-hover:text-accent-foreground text-sm transition-colors"><b>Obvia</b> Blocks</span>
              <span className="text-foreground/40 text-xs leading-normal">Structured layouts for rapid prototyping</span></div>
          </NavigationLink>

          <NavigationLink className="flex flex-row items-center text-foreground transition-all duration-200 ease-out" href="/templates">
            <div className="group flex flex-col gap-0.5">
              <span className="text-foreground/60 group-hover:text-accent-foreground text-sm transition-colors"><b>Obvia</b> Templates</span>
              <span className="text-foreground/40 text-xs leading-normal">Premium website and dashboard templates</span></div>
          </NavigationLink>
        </div>

        <div className="flex flex-1 flex-col gap-3">
          <span className="text-foreground/40 text-xs tracking-wider uppercase">Typeface</span>

          <NavigationLink className="flex flex-row items-center text-foreground transition-all duration-200 ease-out" href="/fonts/sans">
            <div className="group flex flex-col gap-0.5">
              <span className="text-foreground/60 group-hover:text-accent-foreground text-sm transition-colors"><b>Obvia</b> Sans</span>
              <span className="text-foreground/40 text-xs leading-normal">Prototype and deploy simple voice agents</span>
            </div>
          </NavigationLink>

          <NavigationLink className="flex flex-row items-center text-foreground transition-all duration-200 ease-out" href="/fonts/mono">
            <div className="group flex flex-col gap-0.5">
              <span className="text-foreground/60 group-hover:text-accent-foreground text-sm transition-colors"><b>Obvia</b> Mono</span>
              <span className="text-foreground/40 text-xs leading-normal">Prototype and deploy simple voice agents</span>
            </div>
          </NavigationLink>

          <NavigationLink className="flex flex-row items-center text-foreground transition-all duration-200 ease-out" href="/fonts/pixel">
            <div className="group flex flex-col gap-0.5">
              <span className="text-foreground/60 group-hover:text-accent-foreground text-sm transition-colors"><b>Obvia</b> Pixel</span>
              <span className="text-foreground/40 text-xs leading-normal">Prototype and deploy simple voice agents</span>
            </div>
          </NavigationLink>
        </div>

        <div className="flex flex-1 flex-col gap-3">
          <span className="text-foreground/40 text-xs tracking-wider uppercase">Observe</span>

          <NavigationLink className="flex flex-row items-center text-foreground transition-all duration-200 ease-out" href="/console">
            <div className="group flex flex-col gap-0.5">
              <span className="text-foreground/60 group-hover:text-accent-foreground text-sm transition-colors"><b>Obvia</b> Console</span>
              <span className="text-foreground/40 text-xs leading-normal">Prototype and deploy simple voice agents</span>
            </div>
          </NavigationLink>

          <NavigationLink className="flex flex-row items-center text-foreground transition-all duration-200 ease-out" href="/desktop">
            <div className="group flex flex-col gap-0.5">
              <span className="text-foreground/60 group-hover:text-accent-foreground text-sm transition-colors"><b>Obvia</b> Desktop</span>
              <span className="text-foreground/40 text-xs leading-normal">Prototype and deploy simple voice agents</span>
            </div>
          </NavigationLink>

          <NavigationLink className="flex flex-row items-center text-foreground transition-all duration-200 ease-out" href="/registry">
            <div className="group flex flex-col gap-0.5">
              <span className="text-foreground/60 group-hover:text-accent-foreground text-sm transition-colors"><b>Obvia</b> Registry</span>
              <span className="text-foreground/40 text-xs leading-normal">Prototype and deploy simple voice agents</span>
            </div>
          </NavigationLink>

        </div>

      </div>
    </NavigationContent>
  )
}
