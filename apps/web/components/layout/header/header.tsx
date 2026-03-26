import React from "react"
import Link from "next/link"

import { CommandMenu } from "@/components/command-menu"

import { GithubToggle } from "@/components/layout/toggle/github-toggle"
import { LayoutToggle } from "@/components/layout/toggle/layout-toggle"
import { ThemeToggle } from "@/components/layout/toggle/theme-toggle"
import {Button} from "@workspace/ui/components/button";

import { ObviaLogo } from "@/components/branding/logo"
import {
  Navigation,
  NavigationItem,
  NavigationList,
  NavigationLink,
  NavigationTrigger
} from "@workspace/ui/components/navigation/navigation"

import {ProductsContent} from "@workspace/ui/components/navigation/content/products-content";


interface SiteHeaderProps {
    sidebarToggle?: React.ReactNode
}

export function Header({ sidebarToggle }: SiteHeaderProps) {
  return (
    <header className="z-50 sticky left-0 top-0 w-full transition-all duration-300 ease-out py-3">
      <div className="flex items-center h-12 px-4 sm:px-6 lg:px-8 max-w-[95rem] mx-auto w-full">
        <div className="flex flex-1 items-center">
          {sidebarToggle && (
            <div className="md:hidden">
              {sidebarToggle}
            </div>
          )}

          <Button asChild size="sm" variant="ghost" className="h-8 shadow-none">
            <Link href="/" className="flex items-center">
              <ObviaLogo className="size-5" />
            </Link>
          </Button>

          <Navigation className="hidden md:flex">
            <NavigationList>
              <NavigationItem>
                <NavigationTrigger className="text-xs text-foreground/60 transition-colors hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 bg-transparent hover:bg h-8 py-0 px-2.5 cursor-pointer">
                  Products
                </NavigationTrigger>

                <ProductsContent />
              </NavigationItem>

              <NavigationItem>
                <NavigationTrigger className="text-xs text-foreground/60 transition-colors hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 bg-transparent hover:bg h-8 py-0 px-2.5 cursor-pointer">
                  Resources
                </NavigationTrigger>

                <ProductsContent />
              </NavigationItem>

              <NavigationLink className="text-xs text-foreground/60 transition-colors hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 bg-transparent hover:bg h-8 cursor-pointer px-2.5">
                Enterprise
              </NavigationLink>

              <NavigationLink className="text-xs text-foreground/60 transition-colors hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 bg-transparent hover:bg h-8 cursor-pointer px-2.5">
                Customers
              </NavigationLink>

              <NavigationLink className="text-xs text-foreground/60 transition-colors hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 bg-transparent hover:bg h-8 cursor-pointer px-2.5">
                Pricing
              </NavigationLink>
            </NavigationList>
          </Navigation>


        </div>

        <div className="ml-auto flex items-center gap-2 md:flex-1 md:justify-end">
          <CommandMenu/>

          <div className="flex items-center gap-1 sm:gap-2 border-l border-border/40 pl-2 sm:pl-4">
            <GithubToggle/>

            <div className="hidden sm:block">
              <LayoutToggle/>
            </div>

            <ThemeToggle/>
          </div>
        </div>
      </div>
    </header>
  )
}
