import { CalendarDays } from 'lucide-react'
import { Link } from 'react-router-dom'
import Container from '@/components/common/Container'
import Media from '@/components/common/Media'
import { Reveal } from '@/components/common/Reveal'
import Button from '@/components/ui/Button'
import SourceBadge from '@/components/ui/SourceBadge'
import { campaign } from '@/data/campaigns'
import { getDesign } from '@/data/designs'
import type { Design } from '@/data/designs'
import { formatDateRange } from '@/lib/format'

// Driven entirely by data/campaigns.ts. Dates, offer, featured designs and the image badge
// only render when the data has them, so nothing is shown that has not been confirmed.
export default function CampaignSection() {
  const dates = formatDateRange(campaign.startDate, campaign.endDate)
  const designs = campaign.featuredDesignIds.map(getDesign).filter((d): d is Design => Boolean(d))

  return (
    <section className="section bg-cream" aria-labelledby="campaign-heading">
      <Container>
        <Reveal className="relative lg:pb-16">
          <div className="relative lg:w-[78%]">
            <Media
              src={campaign.image}
              alt={campaign.imageAlt}
              tone="gold"
              label="Campaign image goes here"
              className="aspect-[4/3] rounded-lg md:aspect-[16/9]"
            />
            {campaign.imageKind && <div className="absolute left-3 top-3"><SourceBadge source={campaign.imageKind} /></div>}
          </div>

          <div className="relative mx-4 -mt-12 rounded-lg bg-burgundy p-7 text-cream shadow-lift md:mx-10 md:p-10 lg:absolute lg:bottom-0 lg:right-0 lg:mx-0 lg:mt-0 lg:w-[44%] lg:p-12">
            <p className="type-label text-gold-soft">{campaign.label}</p>
            <h2 id="campaign-heading" className="type-h1 mt-3">{campaign.name}</h2>
            <p className="type-body mt-4 text-cream/80">{campaign.description}</p>

            {(dates || campaign.offer) && (
              <ul className="mt-5 space-y-2 text-sm text-cream/90">
                {dates && (
                  <li className="flex items-center gap-2.5"><CalendarDays size={16} strokeWidth={1.5} aria-hidden />{dates}</li>
                )}
                {campaign.offer && <li className="font-semibold">{campaign.offer}</li>}
              </ul>
            )}

            {designs.length > 0 && (
              <ul className="mt-5 flex flex-wrap gap-2">
                {designs.map((d) => (
                  <li key={d.id}>
                    <Link to={`/designs/${d.id}`} className="inline-block rounded border border-cream/35 px-3 py-1.5 text-sm text-cream transition-colors hover:border-cream hover:bg-cream/10">
                      {d.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}

            <Button to={campaign.cta.to} size="lg" className="mt-7 !bg-cream !text-burgundy hover:!bg-ivory">{campaign.cta.label}</Button>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
