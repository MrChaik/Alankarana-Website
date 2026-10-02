import { Link, useParams } from 'react-router-dom'
import Breadcrumb from '@/components/common/Breadcrumb'
import Container from '@/components/common/Container'
import Media from '@/components/common/Media'
import { Reveal } from '@/components/common/Reveal'
import DesignGallery from '@/components/catalogue/DesignGallery'
import RelatedDesigns from '@/components/catalogue/RelatedDesigns'
import Button from '@/components/ui/Button'
import SourceBadge from '@/components/ui/SourceBadge'
import WhatsAppButton from '@/components/ui/WhatsAppButton'
import { optionLabel } from '@/data/catalogue'
import { getDesign, occasionName } from '@/data/designs'
import { occasions } from '@/data/occasions'
import { withSource } from '@/lib/contact'
import { formatMonthYear, formatPrice } from '@/lib/format'

export default function DesignDetail() {
  const { id = '' } = useParams()
  const design = getDesign(id)

  if (!design) {
    return (
      <section className="section">
        <Container className="text-center">
          <h1 className="type-h1">Design not found</h1>
          <p className="type-body mx-auto mt-4 max-w-md text-muted">We couldn’t find that design. It may have been moved or removed.</p>
          <Button to="/catalogue" size="lg" className="mt-8">Back to Catalogue</Button>
        </Container>
      </section>
    )
  }

  const message = withSource(
    `Hi Alankarana, I'm interested in the "${design.title}" design (ID: ${design.id}). I'd like to know more about availability and pricing.`,
    `Design page /catalogue/${design.id}`,
  )
  const whatsapp = (label: string, size: 'md' | 'lg' = 'lg') => (
    <WhatsAppButton label={label} message={message} size={size} className="w-full sm:w-auto" />
  )

  // Only fields that exist in the data are shown.
  const facts = [
    ['Area', design.area],
    ['Venue type', design.venue.map((v) => optionLabel('venue', v)).join(', ')],
    ['Completed', design.date && formatMonthYear(design.date)],
    ['Palette', design.palette.join(', ')],
    ['Setup time', design.setupTime],
    ['Lead time', design.leadTime],
    ['Season', design.season],
  ].filter(([, value]) => value) as [string, string][]

  const bestFor = occasions.find((o) => o.slug === design.occasion)?.examples ?? []
  const hasDetails = design.materials.length > 0 || bestFor.length > 0

  return (
    // key: a different design (e.g. from Related Designs) starts fresh, gallery included
    <div key={design.id}>
      <section className="pb-12 pt-8 md:pb-16 md:pt-10">
        <Container>
          <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Catalogue', to: '/catalogue' }, { label: design.title }]} />

          <Reveal className="grid gap-8 md:grid-cols-2 md:gap-10 lg:gap-16">
            <div>
              <div className="relative">
                <Media src={design.image} alt={design.alt} tone={design.tone} eager className="aspect-[4/5] rounded-lg border border-line shadow-soft" />
                <div className="absolute left-3 top-3"><SourceBadge source={design.source} /></div>
              </div>
              {/* Concept images are never presented as completed work */}
              <p className="type-caption mt-3">
                {design.source === 'real-work'
                  ? 'Real Work: photographed at a completed Alankarana project.'
                  : 'Concept / Inspiration: a design idea, not a completed Alankarana project.'}
              </p>
            </div>

            <div>
              <Link to={`/occasions/${design.occasion}`} className="type-label text-gold hover:text-burgundy">{occasionName(design.occasion)}</Link>
              <h1 className="type-h1 mt-2">{design.title}</h1>
              {design.description && <p className="type-body mt-4 text-muted">{design.description}</p>}

              {/* Tags are informational, not links */}
              <ul className="mt-5 flex flex-wrap gap-2">
                {design.style.map((s) => (
                  <li key={s} className="rounded-full border border-line px-3 py-1 text-xs text-ink/75">{optionLabel('style', s)}</li>
                ))}
              </ul>

              <dl className="mt-6 divide-y divide-line border-y border-line">
                {facts.map(([label, value]) => (
                  <div key={label} className="flex gap-4 py-3 text-sm">
                    <dt className="w-28 shrink-0 text-muted">{label}</dt>
                    <dd className="font-medium">{value}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-6 rounded-lg border border-line bg-card p-5">
                <p className="type-caption">Pricing</p>
                <p className="font-display text-2xl font-semibold text-burgundy">
                  {design.price.kind === 'quote' ? 'Price on enquiry' : formatPrice(design.price)}
                </p>
                <p className="type-caption mt-1">Final pricing depends on design, materials, scope and event requirements.</p>
              </div>

              <div className="mt-6">{whatsapp('Enquire on WhatsApp')}</div>
            </div>
          </Reveal>
        </Container>
      </section>

      {hasDetails && (
        <section className="border-t border-line py-12 md:py-16" aria-label="Design details">
          <Container>
            <Reveal className="grid gap-10 md:grid-cols-2 md:gap-16">
              {design.materials.length > 0 && (
                <div>
                  <h2 className="type-h3">Materials &amp; Props</h2>
                  <ul className="type-body mt-4 space-y-1.5 text-muted">
                    {design.materials.map((m) => <li key={m}>{m}</li>)}
                  </ul>
                </div>
              )}
              {bestFor.length > 0 && (
                <div>
                  <h2 className="type-h3">Best For</h2>
                  <p className="type-body mt-4 text-muted">{bestFor.join(', ')}</p>
                </div>
              )}
            </Reveal>
          </Container>
        </section>
      )}

      {(design.gallery?.length ?? 0) > 0 && (
        <section className="border-t border-line py-12 md:py-16" aria-labelledby="gallery-heading">
          <Container>
            <h2 id="gallery-heading" className="type-h2 mb-8">Design Gallery</h2>
            <DesignGallery design={design} />
          </Container>
        </section>
      )}

      <section className="bg-ivory py-16 text-center md:py-20" aria-labelledby="enquiry-heading">
        <Container>
          <Reveal>
            <h2 id="enquiry-heading" className="type-h2">Planning something similar?</h2>
            <p className="type-body mx-auto mt-4 max-w-xl text-muted">
              Share your date, venue and reference with us and we’ll help you understand the possibilities.
            </p>
            <div className="mt-8">{whatsapp('Enquire on WhatsApp')}</div>
          </Reveal>
        </Container>
      </section>

      <RelatedDesigns design={design} />
    </div>
  )
}
