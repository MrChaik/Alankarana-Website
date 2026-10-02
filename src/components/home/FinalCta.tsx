import Container from '@/components/common/Container'
import { Reveal } from '@/components/common/Reveal'
import EnquiryForm from './EnquiryForm'
import { finalCta } from '@/data/finalCta'

export default function FinalCta() {
  return (
    <section id="contact" className="section bg-ivory" aria-labelledby="cta-heading">
      <Container>
        <Reveal className="rounded-lg border border-line bg-card p-7 shadow-soft md:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
            <div>
              <p className="type-label text-burgundy">{finalCta.label}</p>
              <h2 id="cta-heading" className="type-h1 mt-4">Tell us about your celebration</h2>
              <p className="type-body mt-4 max-w-md text-muted">
                Share a few details and continue the enquiry with our team on WhatsApp.
              </p>
              <p className="type-caption mt-5">{finalCta.note}</p>
            </div>
            <EnquiryForm />
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
