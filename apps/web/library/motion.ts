/**
 * Fades in container and staggers child animations
 */
export const landingStagger = {
  hidden  : { opacity: 0 },
  show    : {
    opacity     : 1,
    transition  : { staggerChildren: 0.2, delayChildren: 0.3 },
  }
} as const

/**
 * Moves element up while fading in
 */
export const landingFadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
} as const

/**
 * Slightly grows on hover and shrinks on tap
 */
export const landingGrow = {
  hover : { scale: 1.05 },
  tap   : { scale: 0.95 }
} as const
