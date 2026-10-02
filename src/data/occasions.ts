import type { MediaTone } from './types'

// The six official occasion categories from the website brief.
// `examples` is the full list from the brief. Cards show the first few;
// occasion pages show the full list. Images reuse completed work where it exists.
export type Occasion = {
  slug: string
  name: string
  description: string // one short line for the card
  intro: string // page introduction
  metaDescription: string
  planningNote: string // notice guidance already confirmed in booking terms
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
    intro: 'Decor for festivals, pujas and the seasonal moments that bring a home or temple together. We work across Hyderabad and surrounding areas, from a small vratham setup to a housewarming entrance.',
    metaDescription: 'Festival and tradition decor in Hyderabad, including Dussehra, Diwali, Vratham and housewarmings. Browse Alankarana designs or enquire on WhatsApp.',
    planningNote: 'Festival setups can take 3 hours to 1 day. Rituals such as Vratham, housewarming and puja usually need a minimum of 3 days.',
    examples: ['Dussehra', 'Diwali', 'Sankranti', 'Ugadi', 'Ganesh Chaturthi', 'Vratham', 'Housewarming / Griha Pravesh', 'Puja / temple decor', 'Seasonal installations'],
    image: '/images/designs/vratham-marigold-kolam.jpg',
    alt: 'Marigold and kolam Vratham decor by Alankarana',
    tone: 'gold',
  },
  {
    slug: 'weddings-related-functions',
    name: 'Weddings & Related Functions',
    description: 'Decor for the small and big moments around a wedding.',
    intro: 'Decor for the functions around a wedding, from pellikoduku and haldi to intimate receptions. We take wedding bookings year-round, with the busiest season from November to February.',
    metaDescription: 'Wedding function decor in Hyderabad for pellikoduku, haldi, mehendi, engagements and intimate receptions.',
    planningNote: 'Weddings, receptions and banquet engagements need a minimum of 1 week. Haldi, mehendi and Pelli Koduku usually need a minimum of 3 days. A small or home engagement can take 3 hours to 1 day.',
    examples: ['Pellikoduku', 'Pellikuthuru', 'Haldi', 'Mehendi', 'Engagement', 'Small weddings', 'Intimate receptions'],
    image: '/images/designs/wedding-manduva-marigold.jpg',
    alt: 'Manduva-style marigold wedding decor by Alankarana',
    tone: 'rose',
  },
  {
    slug: 'baby-family-milestones',
    name: 'Baby & Family Milestones',
    description: 'Gentle setups for the first ceremonies of a new arrival.',
    intro: 'Gentle setups for the first ceremonies of a new arrival, including baby showers, Srimantham and Annaprasana, prepared for homes across Hyderabad and surrounding areas.',
    metaDescription: 'Baby and family milestone decor in Hyderabad for showers, naming ceremonies and Annaprasana.',
    planningNote: 'Baby showers and naming ceremonies can take 3 hours to 1 day. Annaprasana and Seemantham usually need a minimum of 3 days.',
    examples: ['Baby shower', 'Srimantham', 'Gender reveal', 'Naming', 'Annaprasana', 'Aksharabhyasam'],
    image: '/images/designs/annaprasana-yashoda-krishna.jpg',
    alt: 'Traditional Annaprasana decor by Alankarana',
    tone: 'ivory',
  },
  {
    slug: 'birthdays-personal-moments',
    name: 'Birthdays & Personal Moments',
    description: 'Decor that makes a personal day feel special.',
    intro: 'Decor that makes a personal day feel considered, from birthdays and proposals to anniversaries and farewells. Share a reference and we will prepare a quote for your date and space.',
    metaDescription: 'Birthday and personal celebration decor in Hyderabad, including proposals, anniversaries and farewells.',
    planningNote: 'Birthdays, anniversaries and farewells can take 3 hours to 1 day, depending on how complex the decor is.',
    examples: ['Kids birthdays', 'Adult birthdays', 'Proposals', 'Anniversaries', 'Graduations', 'Retirement', 'Farewells'],
    image: '/images/designs/reception-peach-silk-floral-arch.jpg',
    alt: 'Peach silk and floral arch reception decor by Alankarana',
    tone: 'sand',
  },
  {
    slug: 'corporate-institutional',
    name: 'Corporate & Institutional',
    description: 'Decor for offices, teams and campus events.',
    intro: 'Decor for offices, teams and campus events, from openings and festive setups to launches and college gatherings across Hyderabad.',
    metaDescription: 'Corporate and campus event decor in Hyderabad for office openings, festive setups and launches.',
    planningNote: 'Corporate events and conferences need a minimum of 1 week.',
    examples: ['Office openings', 'Festive office decor', 'Meetings', 'Meetups', 'Annual R&R', 'Launches', 'College events'],
    image: '/images/occasions/corporate-institutional.jpg',
    alt: 'Office celebration decor',
    tone: 'ivory',
  },
  {
    slug: 'parties-community',
    name: 'Parties & Community',
    description: 'Setups for get-togethers with friends, family and neighbours.',
    intro: 'Setups for get-togethers with friends, family and neighbours, whether the gathering is at home, a café, a farm or a gated community.',
    metaDescription: 'Party and community celebration decor in Hyderabad for house parties, café gatherings and reunions.',
    planningNote: 'House parties and get-togethers can take 3 hours to 1 day, depending on how complex the decor is.',
    examples: ['House parties', 'Farm parties', 'Café gatherings', 'Gated community celebrations', 'Themed socials', 'Reunions'],
    image: '/images/occasions/parties-community.jpg',
    alt: 'Party decor for a community gathering',
    tone: 'gold',
  },
]

export const getOccasion = (slug: string) => occasions.find((occasion) => occasion.slug === slug)
