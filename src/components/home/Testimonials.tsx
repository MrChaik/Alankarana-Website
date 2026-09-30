import Container from '@/components/common/Container'
import SectionHeading from '@/components/common/SectionHeading'
import { Stagger, StaggerItem } from '@/components/common/Reveal'
import TestimonialCard from '@/components/cards/TestimonialCard'
import { testimonials } from '@/data/testimonials'

// One large quote on the left, two smaller ones stacked on the right. Stacks on mobile.
export default function Testimonials() {
  const [lead, ...others] = testimonials
  return (
    <section className="section bg-ivory" aria-labelledby="testimonials-heading">
      <Container>
        <SectionHeading id="testimonials-heading" heading="What customers say" />
        <Stagger className="mt-10 grid gap-5 md:mt-14 lg:grid-cols-12 lg:gap-6">
          {lead && <StaggerItem className="h-full lg:col-span-7"><TestimonialCard testimonial={lead} featured /></StaggerItem>}
          <div className="grid gap-5 lg:col-span-5 lg:gap-6">
            {others.slice(0, 2).map((t) => (
              <StaggerItem key={t.id} className="h-full"><TestimonialCard testimonial={t} /></StaggerItem>
            ))}
          </div>
        </Stagger>
      </Container>
    </section>
  )
}
