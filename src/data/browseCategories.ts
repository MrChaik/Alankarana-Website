import { Building, Building2, Coffee, GraduationCap, Home, Hotel, Landmark, Trees } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

// "Browse by" groups for the homepage. These are navigation categories, not claims about inventory.
// Links point at routes that will be built later (venue pages, and the Designs catalogue with filters).
// Until then they fall back to the homepage.

export type BrowseItem = { slug: string; label: string; to: string; icon?: LucideIcon }

export type BrowseGroup = {
  id: 'venue' | 'style' | 'budget'
  title: string
  variant: 'tiles' | 'chips'
  items: BrowseItem[]
  note?: string
}

const venue = (slug: string, label: string, icon: LucideIcon): BrowseItem => ({ slug, label, icon, to: `/venues/${slug}` })
const style = (slug: string, label: string): BrowseItem => ({ slug, label, to: `/designs?style=${slug}` })
const budget = (slug: string, label: string): BrowseItem => ({ slug, label, to: `/designs?budget=${slug}` })

export const browseGroups: BrowseGroup[] = [
  {
    id: 'venue',
    title: 'Venue',
    variant: 'tiles',
    items: [
      venue('home', 'Home', Home),
      venue('office', 'Office', Building2),
      venue('cafe-restaurant', 'Café / Restaurant', Coffee),
      venue('hotel-venue', 'Hotel / Venue', Hotel),
      venue('temple', 'Temple', Landmark),
      venue('college', 'College', GraduationCap),
      venue('gated-community', 'Gated Community', Building),
      venue('farm-outdoor-space', 'Farm / Outdoor Space', Trees),
    ],
  },
  {
    id: 'style',
    title: 'Style',
    variant: 'chips',
    items: [
      style('floral', 'Floral'),
      style('minimal', 'Minimal'),
      style('traditional', 'Traditional'),
      style('festive', 'Festive'),
      style('elegant', 'Elegant'),
      style('colourful', 'Colourful'),
    ],
  },
  {
    id: 'budget',
    title: 'Budget',
    variant: 'chips',
    items: [budget('standard', 'Standard'), budget('premium', 'Premium'), budget('luxury', 'Luxury')],
    // Budget levels guide a starting point. They are not packages and carry no prices.
    note: 'A starting point for planning, not a fixed package. Every quote is tailored to your requirements.',
  },
]
