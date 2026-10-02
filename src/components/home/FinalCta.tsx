import Container from '@/components/common/Container'
import Media from '@/components/common/Media'
import { Reveal } from '@/components/common/Reveal'
import CallButton from '@/components/ui/CallButton'
import WhatsAppButton from '@/components/ui/WhatsAppButton'
import { finalCta } from '@/data/finalCta'
import { withSource } from '@/lib/contact'

export default function FinalCta() {
  return (
    <section id="contact" className="section bg-ivory" aria-labelledby="cta-heading">
      <Container>
        <Reveal className="overflow-hidden rounded-lg bg-burgundy text-cream lg:grid lg:grid-cols-12">
          <div className="p-8 md:p-12 lg:col-span-7 lg:p-16">
            <p className="type-label text-gold-soft">{finalCta.label}</p>
            <h2 id="cta-heading" className="type-h1 mt-4">{finalCta.heading}</h2>
            <p className="type-body mt-4 max-w-md text-cream/85">{finalCta.text}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <WhatsAppButton
                size="lg"
                label="WhatsApp Us"
                message={withSource(finalCta.whatsappMessage, finalCta.source)}
                className="w-full !bg-cream !text-burgundy hover:!bg-ivory sm:w-auto"
              />
              <CallButton size="lg" className="w-full !border-cream/40 !text-cream hover:!border-cream hover:!bg-cream/10 sm:w-auto" />
            </div>

            <p className="type-caption mt-5 !text-cream/70">{finalCta.note}</p>
          </div>
          <Media src={finalCta.image} alt={finalCta.imageAlt} tone="rose" label="Photo goes here" className="aspect-[16/9] lg:col-span-5 lg:aspect-auto lg:min-h-[22rem]" />
        </Reveal>
      </Container>
    </section>
  )
}
