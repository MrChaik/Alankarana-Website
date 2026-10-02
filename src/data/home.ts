import { designs } from './designs'
import type { MediaTone } from './types'

// Homepage hero content. Other sections have their own data files in this folder.
// Slides are photos only: three featured designs, then three completed projects that have photos.

const slideIds = [
  'wedding-manduva-marigold',
  'reception-peach-silk-floral-arch',
  'engagement-coral-peach-rose-arch',
  'pelli-koduku-banana-leaf-pandiri',
  'annaprasana-yashoda-krishna',
  'vratham-marigold-kolam',
]

export type HeroSlide = { src: string; alt: string; tone: MediaTone }

export const hero = {
  heading: 'Thoughtful decor for moments worth celebrating in Hyderabad',
  text: 'Celebration decor across Hyderabad and surrounding areas, from festivals and weddings to baby showers and birthdays. Browse our designs or message us on WhatsApp to begin.',
  slides: slideIds.map((id) => {
    const design = designs.find((item) => item.id === id)
    if (!design) throw new Error(`Missing hero slide: ${id}`)
    return { src: design.image, alt: design.alt, tone: design.tone } satisfies HeroSlide
  }),
}
