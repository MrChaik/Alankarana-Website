import type { MediaTone } from './types'

// The six official occasion categories from the website brief.
// `examples` is the full list from the brief (used by the future occasion pages);
// cards show the first few. Image files go in public/images/occasions/ (see `image`).
export type Occasion = {
  slug: string
  name: string
  description: string // one short line for the card
  examples: string[]
  image: string
  alt: string
  tone: MediaTone // tint of the placeholder shown until the photo exists
}

export const occasions: Occasion[] = [
  {
    slug: 'festivals-traditions',
    name: 'Festivals & Traditions',
    description: 'Festive decor for homes, pujas and seasonal moments.',
    examples: ['Dussehra', 'Diwali', 'Sankranti', 'Ugadi', 'Ganesh Chaturthi', 'Puja / temple decor', 'Seasonal installations'],
    image: '/images/occasions/festivals-traditions.jpg',
    alt: 'Festival decor with flowers and lamps',
    tone: 'gold',
  },
  {
    slug: 'weddings-related-functions',
    name: 'Weddings & Related Functions',
    description: 'Decor for the small and big moments around a wedding.',
    examples: ['Pellikoduku', 'Pellikuthuru', 'Haldi', 'Mehendi', 'Engagement', 'Small weddings', 'Intimate receptions'],
    image: '/images/occasions/weddings-related-functions.jpg',
    alt: 'Wedding function decor with floral details',
    tone: 'rose',
  },
  {
    slug: 'baby-family-milestones',
    name: 'Baby & Family Milestones',
    description: 'Gentle setups for the first ceremonies of a new arrival.',
    examples: ['Baby shower', 'Srimantham', 'Gender reveal', 'Naming', 'Annaprasana', 'Aksharabhyasam'],
    image: '/images/occasions/baby-family-milestones.jpg',
    alt: 'Baby shower decor in soft colours',
    tone: 'ivory',
  },
  {
    slug: 'birthdays-personal-moments',
    name: 'Birthdays & Personal Moments',
    description: 'Decor that makes a personal day feel special.',
    examples: ['Kids birthdays', 'Adult birthdays', 'Proposals', 'Anniversaries', 'Graduations', 'Retirement', 'Farewells'],
    image: '/images/occasions/birthdays-personal-moments.jpg',
    alt: 'Birthday decor with balloons and florals',
    tone: 'sand',
  },
  {
    slug: 'corporate-institutional',
    name: 'Corporate & Institutional',
    description: 'Decor for offices, teams and campus events.',
    examples: ['Office openings', 'Festive office decor', 'Meetings', 'Meetups', 'Annual R&R', 'Launches', 'College events'],
    image: '/images/occasions/corporate-institutional.jpg',
    alt: 'Office celebration decor',
    tone: 'ivory',
  },
  {
    slug: 'parties-community',
    name: 'Parties & Community',
    description: 'Setups for get-togethers with friends, family and neighbours.',
    examples: ['House parties', 'Farm parties', 'Café gatherings', 'Gated community celebrations', 'Themed socials', 'Reunions'],
    image: '/images/occasions/parties-community.jpg',
    alt: 'Party decor for a community gathering',
    tone: 'gold',
  },
]
