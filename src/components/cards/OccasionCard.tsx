import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Media from '@/components/common/Media'
import type { Occasion } from '@/data/occasions'

export default function OccasionCard({ occasion }: { occasion: Occasion }) {
  return (
    <motion.article
      initial="rest"
      animate="rest"
      whileHover="hover"
      className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-line bg-card transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-gold-soft hover:shadow-lift"
    >
      <Media src={occasion.image} alt={occasion.alt} tone={occasion.tone} className="aspect-[5/4]" />
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <h3 className="type-h3">
          {/* The link covers the whole card, so the card is one tap target */}
          <Link to={`/catalogue?occasion=${occasion.slug}`} className="after:absolute after:inset-0">{occasion.name}</Link>
        </h3>
        <p className="type-body mt-2 text-muted">{occasion.description}</p>
        <p className="type-caption mt-3">{occasion.examples.slice(0, 3).join(', ')} and more</p>
        <span className="type-label mt-5 inline-flex items-center gap-1.5 pt-1 text-burgundy">
          Explore
          <ArrowRight size={16} strokeWidth={1.75} aria-hidden className="transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </motion.article>
  )
}
