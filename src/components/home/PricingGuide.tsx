import Container from '@/components/common/Container'
import SectionHeading from '@/components/common/SectionHeading'
import { Reveal, Stagger, StaggerItem } from '@/components/common/Reveal'
import PricingTier from '@/components/cards/PricingTier'
import Button from '@/components/ui/Button'
import { bookingTerms } from '@/data/booking'
import { pricingCopy, pricingTiers, startingPricePlaceholder } from '@/data/pricing'
import { formatPrice } from '@/lib/format'

const chip = 'rounded border border-line bg-card px-3.5 py-1.5 text-sm font-medium text-ink/80'

export default function PricingGuide() {
  const { notes, includes} = pricingCopy
  return (
    <section id="pricing" className="section bg-cream" aria-labelledby="pricing-heading">
      <Container>
        <SectionHeading id="pricing-heading" heading={pricingCopy.heading} text={pricingCopy.text} align="center" />

        <Stagger className="mt-10 grid gap-5 md:mt-14 md:grid-cols-3 lg:gap-6">
          {pricingTiers.map((t) => (
            <StaggerItem key={t.id} className="h-full">
              <PricingTier
                name={t.name}
                level={t.level}
                text={t.text}
                points={t.points}
                priceLabel={t.startingPrice ? formatPrice(t.startingPrice) : undefined}
                pendingLabel={startingPricePlaceholder}
              />
            </StaggerItem>
          ))}
        </Stagger>

        {/* How the final quote is worked out */}
        <Reveal className="mt-8 grid gap-8 rounded-lg border border-line bg-ivory p-7 md:mt-10 md:p-10 lg:grid-cols-2 lg:gap-0">
          <div className="lg:pr-12">
            <h3 className="type-h3">{notes.heading}</h3>
            <p className="type-body mt-2 text-muted">{notes.text}</p>
            <ul className="mt-5 flex flex-wrap gap-2.5">
              {notes.factors.map((f) => <li key={f} className={chip}>{f}</li>)}
            </ul>
          </div>
          <div className="border-t border-line pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
            <h3 className="type-h3">{includes.heading}</h3>
            <p className="type-body mt-2 text-muted">{includes.note}</p>
            <ul className="mt-5 flex flex-wrap gap-2.5">
              {includes.items.map((f) => <li key={f} className={chip}>{f}</li>)}
            </ul>
          </div>
        </Reveal>

        {/* Booking notice and payment terms */}
        <Reveal className="mt-8 rounded-lg border border-line bg-card p-7 md:p-10">
          <h3 className="type-h3">{bookingTerms.heading}</h3>
          <div className="mt-6 grid gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-8">
              <p className="type-caption">{bookingTerms.leadTimes.heading}</p>
              <dl className="mt-3 divide-y divide-line border-y border-line">
                {bookingTerms.leadTimes.items.map((l) => (
                  <div key={l.label} className="grid gap-1 py-3 sm:grid-cols-12 sm:gap-4">
                    <dt className="sm:col-span-4">
                      <span className="font-semibold text-ink">{l.label}</span>
                      <span className="block text-sm font-medium text-burgundy">{l.notice}</span>
                    </dt>
                    <dd className="text-sm text-muted sm:col-span-8">{l.examples}</dd>
                  </div>
                ))}
              </dl>
              <p className="type-caption mt-3">{bookingTerms.leadTimes.note}</p>
            </div>
            <div className="lg:col-span-4">
              <p className="type-caption">{bookingTerms.payment.heading}</p>
              <ul className="mt-3 space-y-2.5">
                {bookingTerms.payment.items.map((i) => <li key={i} className="type-body text-ink">{i}</li>)}
              </ul>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
