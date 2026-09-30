import Container from '@/components/common/Container'
import Media from '@/components/common/Media'
import { Reveal } from '@/components/common/Reveal'
import Button from '@/components/ui/Button'
import { about } from '@/data/home'

export default function AboutIntro() {
  return (
    <section className="section bg-cream" aria-labelledby="about-heading">
      <Container className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="relative mx-auto w-full max-w-md lg:col-span-5 lg:mx-0 lg:max-w-none">
          {/* Offset gold outline behind the photo */}
          <div aria-hidden className="absolute -bottom-3 -right-3 h-full w-full rounded-lg border border-gold-soft" />
          <Media src={about.image} alt="The Alankarana team at work" tone="ivory" className="relative aspect-[4/5] rounded-lg" />
        </Reveal>

        <Reveal className="lg:col-span-6 lg:col-start-7">
          <p className="type-label text-burgundy">{about.label}</p>
          <h2 id="about-heading" className="type-h1 mt-4">{about.heading}</h2>
          <p className="type-body mt-5 max-w-lg text-muted">{about.text}</p>
          <Button to="/about" variant="secondary" size="lg" className="mt-8">About Alankarana</Button>
        </Reveal>
      </Container>
    </section>
  )
}
