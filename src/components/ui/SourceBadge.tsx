import { BadgeCheck, Lightbulb } from 'lucide-react'
import type { DesignSource } from '@/data/designs'

// Sits on top of an image. The two states differ in fill, outline and icon so they are
// never confused: solid burgundy = a completed Alankarana project, dashed outline = concept.
export default function SourceBadge({ source }: { source: DesignSource }) {
  return source === 'real-work' ? (
    <span className="inline-flex items-center gap-1.5 rounded bg-burgundy px-2.5 py-1 text-xs font-semibold text-cream shadow-soft">
      <BadgeCheck size={14} strokeWidth={1.75} aria-hidden />
      Real Work
    </span>
  ) : (
    <span className="inline-flex items-center gap-1.5 rounded border border-dashed border-gold bg-card px-2.5 py-1 text-xs font-semibold text-ink/75">
      <Lightbulb size={14} strokeWidth={1.75} aria-hidden />
      Concept
    </span>
  )
}
