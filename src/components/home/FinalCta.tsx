import { Phone } from 'lucide-react'
import Container from '@/components/common/Container'
import Media from '@/components/common/Media'
import { Reveal } from '@/components/common/Reveal'
import Button from '@/components/ui/Button'
import WhatsAppButton from '@/components/ui/WhatsAppButton'
import { finalCta } from '@/data/home'
import { site } from '@/data/site'

export default function FinalCta() {
  const tel = `tel:${site.phone.replace(/[^+\d]/g, '')}`
  return (
    <section className="section bg-ivory" aria-labelledby="cta-heading">
      <Container>
        <Reveal className="overflow-hidden rounded-lg bg-burgundy text-cream lg:grid lg:grid-cols-12">
          <div className="p-8 md:p-12 lg:col-span-7 lg:p-16">
            <h2 id="cta-heading" className="type-h1">{finalCta.heading}</h2>
            <p className="type-body mt-4 max-w-md text-cream/80">{finalCta.text}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <WhatsAppButton size="lg" label="Chat on WhatsApp" className="!bg-cream !text-burgundy hover:!bg-ivory" />
              <Button href={tel} variant="secondary" size="lg" className="!border-cream/40 !text-cream hover:!border-cream hover:!bg-cream/10">
                <Phone size={18} strokeWidth={1.75} aria-hidden />
                Call us
              </Button>
            </div>
          </div>
          <Media src={finalCta.image} alt="Celebration decor" tone="rose" className="aspect-[16/9] lg:col-span-5 lg:aspect-auto lg:min-h-[22rem]" />
        </Reveal>
      </Container>
    </section>
  )
}
