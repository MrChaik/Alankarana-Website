// Featured seasonal campaign.
// First campaign (from First_Campaigns sheet, priority 1): Wedding Decor, year-round, peak Nov to Feb.
// Fill in the fields below. Optional fields
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
  id: 'wedding-decor',
  status: 'live',
  label: 'Featured',
  name: 'Wedding Decor',
  description: 'Decor for weddings and the functions around them. We take wedding bookings year-round, with the busiest season from November to February.',
  image: '/images/designs/wedding-manduva-marigold-2.jpg', // a real wedding we decorated (landscape photo)
  imageAlt: 'Manduva-style marigold wedding decor by Alankarana',
  imageKind: 'real-work',
  featuredDesignIds: [], // the wedding designs are shown in "Featured designs" just below
  cta: { label: 'Explore Wedding Designs', to: '/catalogue?occasion=weddings-related-functions' },
}
