import type { Price } from './designs'

// Pricing Guide (homepage). Standard, Premium and Luxury are guided starting points, NOT fixed packages.
// Price ranges are from Alankarana's Pricing Packages sheet. The Standard and Premium ranges overlap (₹40,000 to ₹50,000) as provided.
// Leave `startingPrice` null for a tier to show the "to be confirmed" placeholder instead.

export type PricingTierData = {
  id: 'standard' | 'premium' | 'luxury'
  name: string
  level: 1 | 2 | 3
  text: string
  points: string[] // from the brief's tier definitions
  startingPrice: Price | null
}

export const pricingTiers: PricingTierData[] = [
  { id: 'standard', name: 'Standard', level: 1, text: 'A modest, attractive setup.', points: ['Specified regular flowers', 'Basic reusable props'], startingPrice: { kind: 'range', min: 10000, max: 50000 } },
  { id: 'premium', name: 'Premium', level: 2, text: 'A larger or more detailed setup.', points: ['Selected premium flowers', 'Greater regular-flower allowance'], startingPrice: { kind: 'range', min: 40000, max: 80000 } },
  { id: 'luxury', name: 'Luxury', level: 3, text: 'A custom concept.', points: ['Luxury flowers or props', 'Wider coverage'], startingPrice: { kind: 'range', min: 80000, max: 100000, openEnded: true } },
]

export const startingPricePlaceholder = 'Starting price to be confirmed'

export const pricingCopy = {
  heading: 'A simple guide to pricing',
  text: 'Three price ranges to help you plan. Your final quote is tailored to your celebration.',
  notes: {
    heading: 'Starting points, not fixed packages',
    text: 'Prices may vary with the customisation you ask for. Exact specifications and any exclusions are confirmed when we send your quotation.',
    factors: ['Venue size', 'Guest count', 'Event theme', 'Colour palette', 'Location', 'Scope of decor'],
  },
  includes: {
    heading: 'Confirmed in your quotation',
    items: ['Size / coverage', 'Flowers used', 'Labour', 'Transport', 'Exclusions'],
    note: 'These are finalised for each event. Transport is included within the city.',
  }
}
