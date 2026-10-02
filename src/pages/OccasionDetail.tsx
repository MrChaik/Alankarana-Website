import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import DesignCard from '@/components/cards/DesignCard'
import OccasionCard from '@/components/cards/OccasionCard'
import Breadcrumb from '@/components/common/Breadcrumb'
import Container from '@/components/common/Container'
import Media from '@/components/common/Media'
import { Stagger, StaggerItem } from '@/components/common/Reveal'
import Button from '@/components/ui/Button'
import WhatsAppButton from '@/components/ui/WhatsAppButton'
import { bookingTerms } from '@/data/booking'
import { designsForOccasion } from '@/data/designs'
import { getOccasion, occasions } from '@/data/occasions'
import { site } from '@/data/site'
import { withSource } from '@/lib/contact'

const DEFAULT_TITLE = 'Alankarana | Celebration decor in Hyderabad'
const DEFAULT_DESCRIPTION = 'Alankarana — celebration decor in Hyderabad.'

function usePageMeta(title: string, description: string) {
  useEffect(() => {
    const meta = document.querySelector('meta[name="description"]')
    const previousTitle = document.title
    const previousDescription = meta?.getAttribute('content') ?? DEFAULT_DESCRIPTION
    document.title = title
    meta?.setAttribute('content', description)
    return () => {
      document.title = previousTitle
      meta?.setAttribute('content', previousDescription)
    }
  }, [title, description])
}

export default function OccasionDetail() {
  const { slug = '' } = useParams()
  const occasion = getOccasion(slug)
  usePageMeta(
    occasion ? `${occasion.name} decor in Hyderabad | Alankarana` : 'Occasion not found | Alankarana',
    occasion?.metaDescription ?? DEFAULT_DESCRIPTION,
  )

  if (!occasion) {
    return (
      <section className="section">
        <Container className="text-center">
          <h1 className="type-h1">Occasion not found</h1>
          <p className="type-body mx-auto mt-4 max-w-md text-muted">
            We couldn’t find that occasion. Choose one from the homepage to see decor made for it.
          </p>
          <Button to="/#occasions" size="lg" className="mt-8">Choose an occasion</Button>
        </Container>
      </section>
    )
  }

  const matches = designsForOccasion(occasion.slug)
  const related = occasions.filter((item) => item.slug !== occasion.slug)
  const message = withSource(
    `Hi Alankarana, I’d like to plan decor for ${occasion.name}.`,
    `Occasion page /occasions/${occasion.slug}`,
  )
  const catalogueTo = `/catalogue?occasion=${occasion.slug}`

  return (
    <div key={occasion.slug}>
      <section className="pb-12 pt-8 md:pb-16 md:pt-10">
        <Container>
          <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Occasions', to: '/#occasions' }, { label: occasion.name }]} />
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-6">
              <p className="type-label text-burgundy">{site.serviceArea}</p>
              <h1 className="type-h1 mt-3">{occasion.name}</h1>
              <p className="type-body mt-4 max-w-xl text-muted">{occasion.intro}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <WhatsAppButton label="Enquire on WhatsApp" message={message} size="lg" className="w-full sm:w-auto" />
                <Button to={catalogueTo} variant="secondary" size="lg" className="w-full sm:w-auto">Browse designs</Button>
              </div>
            </div>
            <Media src={occasion.image} alt={occasion.alt} tone={occasion.tone} eager className="aspect-[4/5] w-full rounded-lg sm:aspect-[4/3] lg:col-span-6" />
          </div>
        </Container>
      </section>

      <section className="section bg-ivory" aria-labelledby="celebrations-heading">
        <Container>
          <h2 id="celebrations-heading" className="type-h2">Celebrations we decorate</h2>
          <p className="type-body mt-3 max-w-2xl text-muted">{occasion.description}</p>
          <ul className="mt-8 flex flex-wrap gap-2.5">
            {occasion.examples.map((example) => (
              <li key={example} className="rounded border border-line bg-card px-3.5 py-1.5 text-sm font-medium text-ink/80">{example}</li>
            ))}
          </ul>
        </Container>
      </section>

      {/* <section className="section bg-cream" aria-labelledby="occasion-designs-heading">
        <Container>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 id="occasion-designs-heading" className="type-h2">Designs for this occasion</h2>
              <p className="type-body mt-3 max-w-2xl text-muted">
                {matches.length > 0
                  ? 'Completed projects are marked Real Work. Use one as a starting point for your own quote.'
                  : 'We are adding photographed designs for this occasion.'}
              </p>
            </div>
            {matches.length > 0 && <Button to={catalogueTo} variant="secondary" className="self-start">View in catalogue</Button>}
          </div>

          {matches.length > 0 ? (
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {matches.map((design) => <DesignCard key={design.id} design={design} />)}
            </div>
          ) : (
            <div className="mt-8 max-w-2xl rounded-lg border border-line bg-card p-7 md:p-10">
              <h3 className="type-h3">We’re adding designs for this occasion</h3>
              <p className="type-body mt-3 text-muted">
                Tell us the date, venue area and a reference you like. We will check availability and prepare a tailored quote.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <WhatsAppButton label="Enquire on WhatsApp" message={message} size="lg" className="w-full sm:w-auto" />
                <Button to="/catalogue" variant="secondary" size="lg" className="w-full sm:w-auto">Browse all designs</Button>
              </div>
            </div>
          )}
        </Container>
      </section> */}

      <section className="section bg-ivory" aria-labelledby="planning-heading">
        <Container className="max-w-3xl">
          <h2 id="planning-heading" className="type-h2">How planning works</h2>
          <p className="type-body mt-4 text-muted">
            Share a reference, the date and the venue area. We check availability and send a quote made for this celebration.
          </p>
          <p className="type-body mt-4 text-ink">{occasion.planningNote}</p>
          <p className="type-caption mt-3">{bookingTerms.leadTimes.note}</p>
          <p className="type-body mt-4 text-muted">
            Standard, Premium and Luxury are starting points, not fixed packages. Your final quote follows the conversation.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button to="/pricing" size="lg" className="w-full sm:w-auto">View pricing guide</Button>
            <WhatsAppButton label="Enquire on WhatsApp" message={message} variant="secondary" size="lg" className="w-full sm:w-auto" />
          </div>
        </Container>
      </section>

      <section className="section bg-cream" aria-labelledby="related-occasions-heading">
        <Container>
          <h2 id="related-occasions-heading" className="type-h2">Other occasions</h2>
          <Stagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {related.map((item) => (
              <StaggerItem key={item.slug}><OccasionCard occasion={item} /></StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>
    </div>
  )
}
