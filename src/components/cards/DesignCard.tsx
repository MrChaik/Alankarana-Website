import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Media from '@/components/common/Media'
import SourceBadge from '@/components/ui/SourceBadge'
import { optionLabel } from '@/data/catalogue'
import { occasionName } from '@/data/designs'
import type { Design } from '@/data/designs'
import { formatPrice } from '@/lib/format'

// Reusable: used by the Catalogue page and the homepage featured row.
export default function DesignCard({ design }: { design: Design }) {
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
          {design.area && (
            <>
              <span aria-hidden className="h-3 w-px bg-line" />
              <span>{design.area}</span>
            </>
          )}
        </p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {design.style.map((st) => (
            <li key={st} className="rounded-full border border-line px-2.5 py-0.5 text-xs text-ink/75">{optionLabel('style', st)}</li>
          ))}
        </ul>
        <div className="mt-auto flex items-end justify-between gap-4 border-t border-line pt-4">
          {/* Price only appears once a verified price exists */}
          <p className="font-sans text-sm font-semibold text-burgundy">{design.price.kind !== 'quote' && formatPrice(design.price)}</p>
          <Link
            to={`/catalogue/${design.id}`}
            className="type-label border-b border-burgundy/40 pb-0.5 text-burgundy transition-colors hover:border-burgundy after:absolute after:inset-0"
          >
            View Design
          </Link>
        </div>
      </div>
    </motion.article>
  )
}
