"use client"

import type { ComponentProps, PropsWithChildren } from "react"
import { motion } from "motion/react"

import { cn } from "@obvia/utilities"

import { ObviaLogo } from "@interface/branding/logo"

type ProductProps = ComponentProps<typeof ProductTrigger> & PropsWithChildren<{ className?: string }>

export function ProductLogo({
  className
}: { className?: string }) {
  return (
    <ObviaLogo
      className={cn(
        "size-7 mr-2 inline-block transition duration-500 grayscale group-hover:grayscale-0",
        className
      )}
    />
  )
}

export function ProductTrigger({
  className,
  ...props
}: ComponentProps<typeof motion.a>) {
  return (
    <motion.a
      className={cn(
        "group block w-full md:w-auto rounded-sm px-5 py-3 hover:bg-white/5 transition duration-500 ease-in-out text-center",
        className
      )}
      {...props}
    />
  )
}

export function Product({
  children,
  className,
  ...props
}: ProductProps) {
  return (
    <ProductTrigger {...props}>
      <ProductLogo />

      <span className={cn("text-lg tracking-wide transition duration-500 text-gray-50 group-hover:text-[#00b773]", className)}>
        {children}
      </span>
    </ProductTrigger>
  )
}

export function Products({
  className,
  ...props
}: ComponentProps<typeof motion.div>){
  return (
    <motion.div
      className={cn("relative z-30 grid grid-cols-2 md:grid-cols-5 items-stretch justify-center gap-4 px-6 text-center", className)}
      {...props}
    />
  )
}
