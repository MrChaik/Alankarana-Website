// Featured seasonal campaign.
// The brief does not confirm a first campaign, so this is a clearly marked placeholder.
// To go live: set status to 'live' and fill in the fields below. Optional fields
// (dates, offer, featured designs, image kind) only appear on the page when they have a value.
// Do not add dates, offers or prices until operations has confirmed them.

export type Campaign = {
  id: string
  status: 'placeholder' | 'live'
  label: string // small label above the name
  name: string
  description: string
  image: string // public/images/campaigns/
  imageAlt: string
  imageKind?: 'real-work' | 'concept' // shows a Real work / Concept badge on the image when set
  startDate?: string // 'YYYY-MM-DD'
  endDate?: string // 'YYYY-MM-DD'
  offer?: string // e.g. a confirmed offer or price line
  featuredDesignIds: string[] // ids from data/designs.ts
  cta: { label: string; to: string }
}

export const campaign: Campaign = {
  id: 'placeholder',
  status: 'placeholder',
  label: 'Featured campaign',
  name: 'Seasonal Campaign',
  description: 'Campaign content will be added after operations confirmation.',
  image: '/images/campaigns/featured.jpg',
  imageAlt: 'Seasonal campaign decor',
  featuredDesignIds: [],
  cta: { label: 'Explore Designs', to: '/designs' },
}
