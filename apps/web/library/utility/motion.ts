const containerVariants = {
  hidden  : { opacity: 0 },
  show    : {
    opacity     : 1,
    transition  : { staggerChildren: 0.2, delayChildren: 0.3 },
  },
} as const

const fadeUp = {
  hidden  : { opacity: 0, y: 20 },
  show    : { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
} as const

const hoverGrow = {
  hover   : { scale: 1.05 },
  tap     : { scale: 0.95 },
} as const
