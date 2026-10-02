import { useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import Breadcrumb from '@/components/common/Breadcrumb'
import Container from '@/components/common/Container'
import SectionHeading from '@/components/common/SectionHeading'
import DesignCard from '@/components/cards/DesignCard'
import CatalogueFilters from '@/components/catalogue/CatalogueFilters'
import Button from '@/components/ui/Button'
import { filterDesigns, filterGroups, optionLabel } from '@/data/catalogue'
import type { FilterKey, Filters } from '@/data/catalogue'

// Central discovery page. Filters live in the URL, e.g. /catalogue?venue=home&occasion=weddings-related-functions
export default function Catalogue() {
  const [params, setParams] = useSearchParams()

  // Read filters from the URL. Unknown values are ignored.
  const filters: Filters = {}
  for (const g of filterGroups) {
    const value = params.get(g.key)
    if (value && g.options.some((o) => o.slug === value)) filters[g.key] = value
  }

  const setFilter = (key: FilterKey, slug: string) => {
    const next = new URLSearchParams(params)
    if (slug) next.set(key, slug)
    else next.delete(key)
    setParams(next, { replace: true })
  }

  const results = filterDesigns(filters)
  const activeLabels = (Object.entries(filters) as [FilterKey, string][]).map(([k, v]) => optionLabel(k, v))

  return (
    <>
      <section className="bg-ivory py-10 md:py-14" aria-labelledby="catalogue-heading">
        <Container>
          <Breadcrumb
            items={[
              { label: 'Home', to: '/' },
              activeLabels.length ? { label: 'Catalogue', to: '/catalogue' } : { label: 'Catalogue' },
              ...(activeLabels.length ? [{ label: activeLabels.join(', ') }] : []),
            ]}
          />

          <SectionHeading
            as="h1"
            id="catalogue-heading"
            heading="Explore Our Designs"
            text="Browse Alankarana decor by occasion, venue, style and budget. Completed projects are marked Real Work; the rest are concepts to inspire your own setup."
          />
        </Container>
      </section>

      <section className="section !pt-10 md:!pt-12" aria-label="Designs">
        <Container>
          <CatalogueFilters filters={filters} onChange={setFilter} onClear={() => setParams({}, { replace: true })} />

          <p className="type-caption mt-8" aria-live="polite">
            {results.length} {results.length === 1 ? 'design' : 'designs'}
          </p>

          {results.length ? (
            <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {results.map((design) => (
                <motion.div key={design.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                  <DesignCard design={design} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="mt-4 rounded-lg border border-line bg-card px-6 py-16 text-center">
              <h2 className="type-h3">No designs found</h2>
              <p className="type-body mt-2 text-muted">Try removing a filter to see more designs.</p>
              <Button onClick={() => setParams({}, { replace: true })} className="mt-6">Clear Filters</Button>
            </div>
          )}
        </Container>
      </section>
    </>
  )
}
