import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Media from '@/components/common/Media'
import SourceBadge from '@/components/ui/SourceBadge'
import { occasionName } from '@/data/designs'
import type { Project } from '@/data/projects'

type Props = {
  project: Project
  /** Larger type for the lead project. Sizing/aspect comes from `className`. */
  featured?: boolean
  /** Shape of the photo, e.g. "aspect-[4/3]". */
  className?: string
}

// Completed-project card. Always labelled "Real Work". Missing details show an obvious
// "to be added" line rather than made-up content.
export default function ProjectCard({ project, featured = false, className = 'aspect-[4/3]' }: Props) {
  const occasion = project.occasion ? occasionName(project.occasion) : 'Occasion to be added'
  const venue = [project.venue, project.location].filter(Boolean).join(', ') || 'Venue to be added'

  return (
    <motion.article initial="rest" animate="rest" whileHover="hover" className="group relative h-full overflow-hidden rounded-lg">
      <Media src={project.coverImage} alt={project.title} tone="ivory" label="Project image placeholder" className={className} />

      {/* Soft tint on hover */}
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/15" />

      <div className="absolute left-3 top-3 md:left-4 md:top-4"><SourceBadge source="real-work" /></div>

      {/* Text sits on a soft scrim so it stays readable on any photo. Always visible; the description appears on hover. */}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 via-ink/45 to-transparent p-4 pt-16 text-cream md:p-5 md:pt-20">
        <p className="text-xs font-semibold text-gold-soft">{occasion}</p>
        <h3 className={`mt-1 font-display font-semibold leading-tight ${featured ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
          <Link to={`/our-work/${project.id}`} className="after:absolute after:inset-0">{project.title}</Link>
        </h3>
        <p className="mt-1 text-sm text-cream/80">{venue}</p>
        <p className="max-h-0 overflow-hidden text-sm text-cream/85 opacity-0 transition-all duration-300 group-focus-within:mt-2 group-focus-within:max-h-16 group-focus-within:opacity-100 group-hover:mt-2 group-hover:max-h-16 group-hover:opacity-100">
          {project.shortDescription}
        </p>
      </div>
    </motion.article>
  )
}
