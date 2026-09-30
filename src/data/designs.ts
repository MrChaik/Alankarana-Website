import { occasions } from './occasions'
import type { MediaTone } from './types'

// Reusable design records. The Designs catalogue and detail pages will read from here too.
// The records below are PLACEHOLDERS for testing the UI. They are not real Alankarana designs.

/** Where the image comes from. Concept images must never be shown as completed work. */
export type DesignSource = 'real-work' | 'concept'
export type DesignStatus = 'placeholder' | 'draft' | 'published'

/** Only ever use a number once the price is verified. Otherwise use { kind: 'quote' }. */
export type Price =
  | { kind: 'quote' }
  | { kind: 'from'; amount: number }
  | { kind: 'range'; min: number; max: number }

export type Design = {
  id: string // also used in the URL: /designs/:id
  title: string
  occasion: string // slug from data/occasions.ts
  venue: string
  style: string
  palette: string[]
  materials: string[]
  status: DesignStatus
  source: DesignSource
  price: Price
  setupTime?: string
  leadTime?: string
  season?: string
  image: string // public/images/designs/
  alt: string
  featured?: boolean
  tone: MediaTone // placeholder tint only
}

// Shared defaults for the placeholder records: nothing verified yet, so price is "quote".
const placeholder: Pick<Design, 'palette' | 'materials' | 'status' | 'price'> = {
  palette: [],
  materials: [],
  status: 'placeholder',
  price: { kind: 'quote' },
}

export const designs: Design[] = [
  { ...placeholder, id: 'placeholder-design-1', title: 'Placeholder design 1', occasion: 'weddings-related-functions', venue: 'Home', style: 'Traditional', source: 'concept', image: '/images/designs/placeholder-1.jpg', alt: 'Placeholder design 1', featured: true, tone: 'rose' },
  { ...placeholder, id: 'placeholder-design-2', title: 'Placeholder design 2', occasion: 'festivals-traditions', venue: 'Home', style: 'Festive', source: 'concept', image: '/images/designs/placeholder-2.jpg', alt: 'Placeholder design 2', featured: true, tone: 'gold' },
  // TEST ONLY: shows how a "Real work" card looks. Switch to 'concept' unless a photo of a completed project is supplied.
  { ...placeholder, id: 'placeholder-design-3', title: 'Placeholder design 3', occasion: 'baby-family-milestones', venue: 'Home', style: 'Pastel', source: 'real-work', image: '/images/designs/placeholder-3.jpg', alt: 'Placeholder design 3', featured: true, tone: 'ivory' },
  { ...placeholder, id: 'placeholder-design-4', title: 'Placeholder design 4', occasion: 'birthdays-personal-moments', venue: 'Home', style: 'Floral', source: 'concept', image: '/images/designs/placeholder-4.jpg', alt: 'Placeholder design 4', featured: true, tone: 'sand' },
  { ...placeholder, id: 'placeholder-design-5', title: 'Placeholder design 5', occasion: 'corporate-institutional', venue: 'Office', style: 'Contemporary', source: 'concept', image: '/images/designs/placeholder-5.jpg', alt: 'Placeholder design 5', featured: true, tone: 'ivory' },
  { ...placeholder, id: 'placeholder-design-6', title: 'Placeholder design 6', occasion: 'parties-community', venue: 'Outdoor / Farm', style: 'Minimal', source: 'concept', image: '/images/designs/placeholder-6.jpg', alt: 'Placeholder design 6', featured: true, tone: 'gold' },
]

export const featuredDesigns = designs.filter((d) => d.featured)

export const getDesign = (id: string) => designs.find((d) => d.id === id)

export const occasionName = (slug: string) => occasions.find((o) => o.slug === slug)?.name ?? slug
