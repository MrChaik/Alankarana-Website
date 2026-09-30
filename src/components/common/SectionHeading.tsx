import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '@/lib/motion'

type Props = {
  eyebrow?: string
  heading: string
  text?: string
  align?: 'left' | 'center'
  as?: 'h1' | 'h2'
  id?: string
  className?: string
}

export default function SectionHeading({ eyebrow, heading, text, align = 'left', as: Tag = 'h2', id, className = '' }: Props) {
  const center = align === 'center'
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={`max-w-2xl ${center ? 'mx-auto text-center' : ''} ${className}`}
    >
      {eyebrow && <p className="type-label mb-3 text-gold">{eyebrow}</p>}
      <Tag id={id} className={Tag === 'h1' ? 'type-h1' : 'type-h2'}>{heading}</Tag>
      {text && <p className="type-body mt-4 text-muted">{text}</p>}
    </motion.div>
  )
}
