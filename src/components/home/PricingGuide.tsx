import Container from '@/components/common/Container'
import SectionHeading from '@/components/common/SectionHeading'
import { Reveal, Stagger, StaggerItem } from '@/components/common/Reveal'
import PricingTier from '@/components/cards/PricingTier'
import Button from '@/components/ui/Button'
import { pricingFactors, tiers } from '@/data/home'

const accents = ['none', 'burgundy', 'gold'] as const
const features = ['Key inclusion goes here', 'Key inclusion goes here', 'Key inclusion goes here']

export default function PricingGuide() {
  return (
    <section className="section bg-cream" aria-labelledby="pricing-heading">
      <Container>
        <SectionHeading id="pricing-heading" heading="A simple guide to pricing" text="Three levels to help you plan your budget." align="center" />

        <Stagger className="mt-10 grid gap-5 md:mt-14 md:grid-cols-3 lg:gap-6">
          {tiers.map((t, i) => (
            <StaggerItem key={t.name}>
              <PricingTier {...t} features={features} accent={accents[i]} />
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mx-auto mt-10 max-w-2xl text-center md:mt-14">
          <p className="type-body text-muted">Prices shown are starting points. The final price depends on:</p>
          <ul className="mt-4 flex flex-wrap justify-center gap-2.5">
            {pricingFactors.map((f) => (
              <li key={f} className="rounded border border-line bg-card px-3.5 py-1.5 text-sm font-medium text-ink/80">{f}</li>
            ))}
          </ul>
          <Button to="/pricing" size="lg" className="mt-8">View Pricing Guide</Button>
        </Reveal>
      </Container>
    </section>
  )
}
