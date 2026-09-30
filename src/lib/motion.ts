import type { Variants } from 'framer-motion'

// One easing curve for the whole site: calm, no bounce.
export const ease = [0.22, 1, 0.36, 1] as const

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease } },
}

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
}

// Put on a wrapper to stagger direct children that use fadeUp.
export const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

// Small image zoom on hover: whileHover="hover" on the wrapper, these variants on the <motion.img>.
export const imageHover: Variants = {
  rest: { scale: 1 },
  hover: { scale: 1.04, transition: { duration: 0.6, ease } },
}

export const viewportOnce = { once: true, margin: '-60px' } as const
