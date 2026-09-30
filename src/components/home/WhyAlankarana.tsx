import Container from '@/components/common/Container'
import SectionHeading from '@/components/common/SectionHeading'
import { Stagger, StaggerItem } from '@/components/common/Reveal'
import BenefitCard from '@/components/cards/BenefitCard'
import { benefits } from '@/data/home'

export default function WhyAlankarana() {
  return (
    <section className="section bg-ivory" aria-labelledby="why-heading">
      <Container>
        <SectionHeading id="why-heading" heading="Why Alankarana" text="What to expect when you plan with us." />
        {/* 6-col grid on desktop: three cards on the first row, two wider cards below */}
        <Stagger className="mt-10 grid gap-5 sm:grid-cols-2 md:mt-14 lg:grid-cols-6 lg:gap-6">
          {benefits.map((b, i) => (
            <StaggerItem key={b.title} className={i < 3 ? 'lg:col-span-2' : 'lg:col-span-3'}>
              <BenefitCard {...b} />
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  )
}
