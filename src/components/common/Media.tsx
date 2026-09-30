import { useState } from 'react'
import { motion } from 'framer-motion'
import { Image as ImageIcon } from 'lucide-react'
import { imageHover } from '@/lib/motion'
import type { MediaTone } from '@/data/types'

const tones: Record<MediaTone, string> = {
  ivory: 'bg-ivory text-ink/40',
  gold: 'bg-gold-soft/45 text-ink/45',
  rose: 'bg-burgundy/10 text-burgundy/55',
  sand: 'bg-line text-ink/40',
}

type Props = {
  src?: string
  alt: string
  tone?: MediaTone
  label?: string
  /** Sets the shape, e.g. "aspect-[4/5]". Also pass rounding here, e.g. "rounded-lg". */
  className?: string
  eager?: boolean
}

/**
 * Photo frame. Shows the image at `src`; if the file is missing (or no src is given) it shows a
 * tinted placeholder instead, so pages look complete before photography is added.
 * For the hover zoom, place it inside an element with `whileHover="hover"` (see the card components).
 */
export default function Media({ src, alt, tone = 'ivory', label = 'Image placeholder', className = '', eager = false }: Props) {
  const [failed, setFailed] = useState(!src)

  return (
    <div className={`relative overflow-hidden bg-ivory ${className}`}>
      {failed ? (
        <motion.div
          variants={imageHover}
          role="img"
          aria-label={alt}
          className={`absolute inset-0 flex flex-col items-center justify-center gap-2 ${tones[tone]}`}
        >
          <svg aria-hidden viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full opacity-50">
            <g fill="none" stroke="currentColor" strokeWidth="0.25">
              <circle cx="100" cy="0" r="28" /><circle cx="100" cy="0" r="42" /><circle cx="100" cy="0" r="56" />
              <circle cx="0" cy="100" r="20" /><circle cx="0" cy="100" r="32" />
            </g>
          </svg>
          <ImageIcon size={22} strokeWidth={1.25} aria-hidden />
          <span className="relative text-xs font-medium">{label}</span>
        </motion.div>
      ) : (
        <motion.img
          variants={imageHover}
          src={src}
          alt={alt}
          loading={eager ? 'eager' : 'lazy'}
          onError={() => setFailed(true)}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
    </div>
  )
}
