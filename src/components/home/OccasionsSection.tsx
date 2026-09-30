import Container from '@/components/common/Container'
import SectionHeading from '@/components/common/SectionHeading'
import { Stagger, StaggerItem } from '@/components/common/Reveal'
import OccasionCard from '@/components/cards/OccasionCard'
import { occasions } from '@/data/occasions'

export default function OccasionsSection() {
  return (
    <section className="section bg-ivory" aria-labelledby="occasions-heading">
      <Container>
        <SectionHeading id="occasions-heading" heading="Choose an occasion" text="Tell us what you are celebrating and see decor made for it." />
        <Stagger className="mt-10 grid gap-5 sm:grid-cols-2 md:mt-14 lg:grid-cols-3 lg:gap-6">
          {occasions.map((o) => (
            <StaggerItem key={o.slug}><OccasionCard occasion={o} /></StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  )
}
