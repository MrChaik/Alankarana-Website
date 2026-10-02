import Container from '@/components/common/Container'
import SectionHeading from '@/components/common/SectionHeading'
import { Stagger, StaggerItem } from '@/components/common/Reveal'
import BenefitCard from '@/components/cards/BenefitCard'
import { whyAlankarana } from '@/data/whyAlankarana'

export default function WhyAlankarana() {
  return (
    <section className="section bg-ivory" aria-labelledby="why-heading">
      <Container>
        <SectionHeading id="why-heading" heading={whyAlankarana.heading} text={whyAlankarana.text} />
        <Stagger className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:mt-16">
          {whyAlankarana.benefits.map((b) => (
            <StaggerItem key={b.title} className="h-full"><BenefitCard {...b} /></StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  )
}
