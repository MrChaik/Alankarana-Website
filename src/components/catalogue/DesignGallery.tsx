import { useState } from 'react'
import Media from '@/components/common/Media'
import SourceBadge from '@/components/ui/SourceBadge'
import type { Design } from '@/data/designs'

// Simple gallery: one large image, thumbnails below. Hidden when there is only one image.
export default function DesignGallery({ design }: { design: Design }) {
  const images = [design.image, ...(design.gallery ?? [])]
  const [active, setActive] = useState(0)
  if (images.length < 2) return null

  return (
    <div>
      <div className="relative">
        <Media src={images[active]} alt={`${design.alt}, image ${active + 1}`} tone={design.tone} className="aspect-[4/3] rounded-lg border border-line" />
        <div className="absolute left-3 top-3"><SourceBadge source={design.source} /></div>
      </div>

      <ul className="mt-3 grid grid-cols-4 gap-3 sm:grid-cols-5 md:grid-cols-6">
        {images.map((src, i) => (
          <li key={src}>
            <button
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show image ${i + 1}`}
              aria-current={i === active}
              className={`block w-full overflow-hidden rounded border-2 transition-colors ${i === active ? 'border-burgundy' : 'border-transparent hover:border-gold-soft'}`}
            >
              <Media src={src} alt="" tone={design.tone} label="" className="aspect-square" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
