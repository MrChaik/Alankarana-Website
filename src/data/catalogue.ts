import { occasions } from './occasions'
import { browseGroups } from './browseCategories'
import { designs } from './designs'
import type { Design } from './designs'

// Filter setup for the Catalogue page. Options come from existing data where possible,
// so the homepage links, the filters and the design records all use the same slugs.

export type FilterKey = 'occasion' | 'venue' | 'style' | 'budget' | 'status'
export type FilterOption = { slug: string; label: string }
export type FilterGroup = { key: FilterKey; label: string; allLabel: string; options: FilterOption[] }

const browse = (id: string): FilterOption[] =>
  browseGroups.find((g) => g.id === id)!.items.map(({ slug, label }) => ({ slug, label }))

export const filterGroups: FilterGroup[] = [
  { key: 'occasion', label: 'Occasion', allLabel: 'All Occasions', options: occasions.map((o) => ({ slug: o.slug, label: o.name })) },
  { key: 'venue', label: 'Venue', allLabel: 'All Venues', options: browse('venue') },
  { key: 'style', label: 'Style', allLabel: 'All Styles', options: browse('style') },
  { key: 'budget', label: 'Budget', allLabel: 'All Budgets', options: browse('budget') },
  {
    key: 'status',
    label: 'Status',
    allLabel: 'All Designs',
    options: [
      { slug: 'real-work', label: 'Real Work' },
      { slug: 'concept', label: 'Concept' },
    ],
  },
]

export type Filters = Partial<Record<FilterKey, string>>

export const optionLabel = (key: FilterKey, slug: string) =>
  filterGroups.find((g) => g.key === key)?.options.find((o) => o.slug === slug)?.label ?? slug

// The values a design carries for each filter. A design matches when its values include the selection.
const valuesOf = (design: Design, key: FilterKey): string[] => {
  switch (key) {
    case 'occasion': return [design.occasion]
    case 'venue': return design.venue
    case 'style': return design.style
    case 'budget': return [design.budget]
    case 'status': return [design.source]
  }
}

/**
 * Designs related to `design`, best match first (max `limit`).
 * Score: same occasion +3, shared venue +2, +1 per shared style. Designs with no overlap are left out.
 */
export const relatedDesigns = (design: Design, limit = 4) => {
  const score = (o: Design) =>
    (o.occasion === design.occasion ? 3 : 0) +
    (o.venue.some((v) => design.venue.includes(v)) ? 2 : 0) +
    o.style.filter((s) => design.style.includes(s)).length

  return designs
    .filter((o) => o.id !== design.id)
    .map((o) => ({ o, score: score(o) }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score) // stable: ties keep catalogue order
    .slice(0, limit)
    .map(({ o }) => o)
}

/** Designs matching every selected filter. */
export const filterDesigns = (filters: Filters) =>
  designs.filter((design) =>
    (Object.entries(filters) as [FilterKey, string][]).every(([key, slug]) => valuesOf(design, key).includes(slug)),
  )
