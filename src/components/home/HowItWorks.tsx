import Container from '@/components/common/Container'
import SectionHeading from '@/components/common/SectionHeading'
import { Reveal, Stagger, StaggerItem } from '@/components/common/Reveal'
import ProcessStep from '@/components/cards/ProcessStep'
import WhatsAppButton from '@/components/ui/WhatsAppButton'
import { howItWorks, howItWorksNote, howItWorksWhatsappMessage } from '@/data/howItWorks'

export default function HowItWorks() {
  return (
    <section className="section bg-ivory" aria-labelledby="how-heading">
      <Container>
        <SectionHeading id="how-heading" heading="How it works" text="A simple enquiry, then a quote made for you." />

        <Stagger className="mt-12 grid lg:mt-16 lg:grid-cols-4 lg:gap-8">
          {howItWorks.map((s, i) => (
            <StaggerItem key={s.number}>
              <ProcessStep {...s} isLast={i === howItWorks.length - 1} />
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mt-10 flex flex-col items-start gap-5 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between lg:mt-14">
          <p className="type-body max-w-lg text-muted">{howItWorksNote}</p>
          <WhatsAppButton label="Share your reference" message={howItWorksWhatsappMessage} variant="secondary" size="lg" />
        </Reveal>
      </Container>
    </section>
  )
}
