import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Media from '@/components/common/Media'
import SourceBadge from '@/components/ui/SourceBadge'
import { occasionName } from '@/data/designs'
import type { Design } from '@/data/designs'
import { formatPrice } from '@/lib/format'

// Reusable: the Designs catalogue page will render this same card.
export default function DesignCard({ design }: { design: Design }) {
  const quote = design.price.kind === 'quote'
  return (
    <motion.article
      initial="rest"
      animate="rest"
      whileHover="hover"
      className="relative flex h-full flex-col overflow-hidden rounded-lg border border-line bg-card transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lift"
    >
      <div className="relative">
        <Media src={design.image} alt={design.alt} tone={design.tone} className="aspect-[4/5]" />
        {/* Every design image is labelled: Real Work (completed project) or Concept */}
        <div className="absolute left-3 top-3"><SourceBadge source={design.source} /></div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="type-h3">{design.title}</h3>
        <p className="type-caption mt-1.5 flex flex-wrap items-center gap-x-2.5 gap-y-1">
          <span>{occasionName(design.occasion)}</span>
          <span aria-hidden className="h-3 w-px bg-line" />
          <span>{design.venue}</span>
          <span aria-hidden className="h-3 w-px bg-line" />
          <span>{design.style}</span>
        </p>
        <div className="mt-auto flex items-end justify-between gap-4 border-t border-line pt-4">
          <div>
            <p className="type-caption">{quote ? 'Price' : 'Indicative price'}</p>
            <p className="font-sans text-base font-semibold text-burgundy">{formatPrice(design.price)}</p>
          </div>
          <Link
            to={`/designs/${design.id}`}
            className="type-label border-b border-burgundy/40 pb-0.5 text-burgundy transition-colors hover:border-burgundy after:absolute after:inset-0"
          >
            View Design
          </Link>
        </div>
      </div>
    </motion.article>
  )
}
