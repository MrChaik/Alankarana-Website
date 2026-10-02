import { occasions } from './occasions'
import type { MediaTone } from './types'

// Reusable design records. The Catalogue page reads from here; the detail page and related designs use it too.
// The records below are real completed events from Alankarana's Event Record Sheet.

/** Where the image comes from. Concept images must never be shown as completed work. */
export type DesignSource = 'real-work' | 'concept'
export type DesignStatus = 'placeholder' | 'draft' | 'published'
export type Budget = 'standard' | 'premium' | 'luxury'

/** Only ever use a number once the price is verified. Otherwise use { kind: 'quote' }. */
export type Price =
  | { kind: 'quote' }
  | { kind: 'from'; amount: number }
  | { kind: 'range'; min: number; max: number; openEnded?: boolean } // openEnded: shown as "₹max+"

export type Design = {
  id: string // also used in the URL: /catalogue/:id
  title: string
  occasion: string // slug from data/occasions.ts
  area?: string // neighbourhood of the event, e.g. "Tellapur"
  date?: string // event date, 'YYYY-MM-DD'
  venue: string[] // venue-type slugs from data/catalogue.ts (a design can suit several). Empty until confirmed.
  style: string[] // slugs from data/catalogue.ts
  budget: Budget // a starting point for planning, not a price
  palette: string[]
  materials: string[]
  status: DesignStatus
  source: DesignSource
  price: Price
  description?: string // short intro shown on the detail page
  gallery?: string[] // extra photos for the detail page gallery (the main `image` is always first)
  setupTime?: string
  leadTime?: string
  season?: string
  image: string // public/images/designs/
  alt: string
  featured?: boolean
  tone: MediaTone // placeholder tint only
}

// Lead time = minimum booking notice, from Booking Terms.
const NOTICE_3_DAYS = 'Minimum 3 days’ notice'
const NOTICE_1_WEEK = 'Minimum 1 week’s notice'

// Prices charged to clients are not published: price stays "quote" unless a verified "from" price is supplied.
// Photos: public/images/designs/<id>.jpg, extra gallery photos <id>-2.jpg, <id>-3.jpg and so on. A tinted placeholder shows until a file exists.
// Homepage: "Featured designs" = the designs flagged `featured` (the three wedding looks).
// "Our work" = the other real-work designs, in this order, so keep the portrait photos in the narrow slots (see OurWork.tsx).
const base: Pick<Design, 'status' | 'source' | 'price' | 'palette'> = { status: 'published', source: 'real-work', price: { kind: 'quote' }, palette: [] }

export const designs: Design[] = [
  {
    ...base,
    id: 'wedding-manduva-marigold',
    title: 'Manduva-Style Marigold Wedding',
    occasion: 'weddings-related-functions',
    area: 'Tellapur',
    date: '2026-08-04',
    venue: [], // venue type to be confirmed
    style: ['traditional'],
    budget: 'luxury',
    description:
      'Full-venue Manduva-style wedding decor: marigold-garlanded staircase railings, marigold & jasmine rangoli-pattern wall hangings with hanging bells, marigold toran at the entrance door, kolam floor art, brass elephant statue & gramophone prop styling, chevron accent rug.',
    materials: ['Marigold garlands (loose & string)', 'Jasmine string garlands', 'Hanging bells', 'Brass decor props (elephant statue, gramophone)', 'Kolam floor stencils/art', 'Accent rugs', 'Entrance toran with bells'],
    setupTime: '8 hours',
    leadTime: NOTICE_1_WEEK,
    image: '/images/designs/wedding-manduva-marigold.jpg',
    gallery: [2, 3, 4, 5].map((n) => `/images/designs/wedding-manduva-marigold-${n}.jpg`),
    alt: 'Manduva-style marigold wedding decor by Alankarana',
    featured: true,
    tone: 'gold',
  },
  {
    ...base,
    id: 'reception-peach-silk-floral-arch',
    title: 'Peach Silk & Floral Arch Reception',
    occasion: 'weddings-related-functions',
    area: 'Secunderabad',
    date: '2026-07-15',
    venue: [],
    style: ['floral'],
    budget: 'luxury',
    palette: ['Peach', 'White', 'Lavender', 'Yellow'],
    description:
      'Luxury peach silk drape backdrop with a large square floral arch (white, lavender, yellow roses & greenery), rose-petal wall centerpiece, crystal wall sconces and chandeliers, upholstered loveseat for the couple, floral table runners for the head table.',
    materials: ['Peach silk drapery', 'Mixed roses (white/lavender/yellow)', 'Greenery', 'Artificial flower wall panel', 'Crystal sconces', 'Gold stands', 'Loveseat', 'Floral centerpieces', 'Lanterns'],
    setupTime: '8 hours',
    leadTime: NOTICE_1_WEEK,
    image: '/images/designs/reception-peach-silk-floral-arch.jpg',
    alt: 'Peach silk and floral arch reception decor by Alankarana',
    featured: true,
    tone: 'rose',
  },
  {
    ...base,
    id: 'engagement-coral-peach-rose-arch',
    title: 'Coral & Peach Rose Arch Engagement',
    occasion: 'weddings-related-functions',
    area: 'West Marredpally',
    date: '2026-06-06',
    venue: [],
    style: ['floral'],
    budget: 'premium',
    palette: ['Coral', 'Peach', 'White', 'Blush'],
    description:
      'Coral/peach drape backdrop with rose & marigold floral arch (white, blush, peach roses), trailing greenery, sheer curtain drapes framing wooden chairs.',
    materials: ['Fresh roses (white, blush, peach)', 'Marigold', 'Greenery', 'Sheer peach drapes', 'Gold urli pots', 'Pampas grass', 'Wooden chairs with olive cushions', 'Tealight candles'],
    setupTime: '5 hours',
    leadTime: 'Small or home engagement: 3 hours to 1 day. Banquet or large-scale: minimum 1 week',
    image: '/images/designs/engagement-coral-peach-rose-arch.jpg',
    alt: 'Coral and peach rose arch engagement decor by Alankarana',
    featured: true,
    tone: 'rose',
  },
  {
    ...base,
    id: 'pelli-koduku-banana-leaf-pandiri',
    title: 'Banana Leaf Pandiri Pelli Koduku',
    occasion: 'weddings-related-functions',
    area: 'West Marredpally',
    date: '2026-07-07',
    venue: [],
    style: ['traditional'],
    budget: 'premium',
    description: 'Traditional banana leaf backdrop with pandiri (ceremonial canopy) setup for the pre-wedding ritual.',
    materials: ['Fresh banana leaves', 'Marigold & flower garlands', 'Decorated bamboo/wooden pandiri poles', 'Props'],
    setupTime: '6 hours',
    leadTime: NOTICE_3_DAYS,
    image: '/images/designs/pelli-koduku-banana-leaf-pandiri.jpg',
    gallery: ['/images/designs/pelli-koduku-banana-leaf-pandiri-2.jpg', '/images/designs/pelli-koduku-banana-leaf-pandiri-3.jpg'],
    alt: 'Banana leaf pandiri Pelli Koduku decor by Alankarana',
    tone: 'gold',
  },
  {
    ...base,
    id: 'annaprasana-yashoda-krishna',
    title: 'Traditional Annaprasana Setup',
    occasion: 'baby-family-milestones',
    area: 'Financial District',
    date: '2026-06-22',
    venue: [],
    style: ['traditional'],
    budget: 'standard',
    description:
      'Traditional Annaprasana backdrop with hand-painted Yashoda-Krishna panel, marigold & jasmine garland swags, brass ritual props, banana stalk side pillars.',
    materials: ['Marigold garlands', 'Jasmine string garlands', 'Brass urli pots & lamps', 'Banana stalks', 'Fresh flowers', 'Decorative floor carpet', 'Ritual plates/thalis setup'],
    setupTime: '3 hours',
    leadTime: NOTICE_3_DAYS,
    image: '/images/designs/annaprasana-yashoda-krishna.jpg',
    alt: 'Traditional Annaprasana decor by Alankarana',
    tone: 'ivory',
  },
  {
    ...base,
    id: 'vratham-marigold-kolam',
    title: 'Marigold & Kolam Vratham Setup',
    occasion: 'festivals-traditions',
    area: 'West Marredpally',
    date: '2026-07-16',
    venue: [],
    style: ['traditional'],
    budget: 'standard',
    description:
      'Traditional banana-leaf printed backdrop panel with marigold & orange marigold swag garlands, floral motif centerpiece design, kolam-patterned floor mat.',
    materials: ['Marigold & orange marigold garlands', 'Fresh flower centerpiece motif', 'Printed banana-leaf backdrop board', 'Kolam floor mat', 'Floral corner posts'],
    setupTime: '2 hours',
    leadTime: NOTICE_3_DAYS,
    image: '/images/designs/vratham-marigold-kolam.jpg',
    alt: 'Marigold and kolam Vratham decor by Alankarana',
    tone: 'sand',
  },
  {
    ...base,
    id: 'housewarming-marigold-pergola',
    title: 'Marigold Pergola House Warming',
    occasion: 'festivals-traditions',
    area: 'Bachupally',
    date: '2026-09-13',
    venue: ['home'], // garden entrance, pooja mandir and welcome poster point to a home setup
    style: ['traditional'],
    budget: 'premium',
    palette: ['Yellow', 'Orange'],
    description:
      'Garden pergola entrance with marigold garland arch, decorated pooja mandir/altar with orange marigold garlands and banana stalks, personalized "Welcome to our House Warming" poster display styled with marigold arrangements in brass pots and cane baskets.',
    materials: ['Marigold garlands (yellow & orange)', 'Banana stalks', 'Brass pots', 'Cane/wicker baskets', 'Fresh marigold flower arrangements', 'Personalized welcome poster & easel stand'],
    setupTime: '7 hours',
    leadTime: NOTICE_3_DAYS,
    image: '/images/designs/housewarming-marigold-pergola.jpg', // no photo supplied yet: a placeholder shows
    alt: 'Marigold pergola house warming decor by Alankarana',
    tone: 'gold',
  },
]

export const featuredDesigns = designs.filter((d) => d.featured)

export const designsForOccasion = (slug: string) => designs.filter((design) => design.occasion === slug)

export const getDesign = (id: string) => designs.find((d) => d.id === id)

export const occasionName = (slug: string) => occasions.find((o) => o.slug === slug)?.name ?? slug
