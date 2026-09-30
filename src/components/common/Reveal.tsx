import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { fadeUp, stagger, viewportOnce } from '@/lib/motion'

type Props = { children: ReactNode; className?: string }

/** Fades one block in as it enters the screen. */
export function Reveal({ children, className = '' }: Props) {
  return (
    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce} className={className}>
      {children}
    </motion.div>
  )
}

/** Wrap a grid/list in <Stagger> and each child in <StaggerItem> for a gentle sequenced fade. */
export function Stagger({ children, className = '' }: Props) {
  return (
    <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewportOnce} className={className}>
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className = '' }: Props) {
  return <motion.div variants={fadeUp} className={className}>{children}</motion.div>
}
