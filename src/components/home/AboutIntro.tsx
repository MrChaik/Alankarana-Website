import Container from '@/components/common/Container'
import Media from '@/components/common/Media'
import { Reveal } from '@/components/common/Reveal'
import Button from '@/components/ui/Button'
import { about } from '@/data/about'

export default function AboutIntro() {
  return (
    <section id="about" className="section bg-cream" aria-labelledby="about-heading">
      <Container className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="relative mx-auto w-full max-w-md lg:col-span-5 lg:mx-0 lg:max-w-none">
          {/* Offset gold outline behind the photo */}
          <div aria-hidden className="absolute -bottom-3 -right-3 h-full w-full rounded-lg border border-gold-soft" />
          <Media src={about.image} alt={about.imageAlt} tone="ivory" label="About photo goes here" className="relative aspect-[4/5] rounded-lg" />
        </Reveal>

        <Reveal className="lg:col-span-6 lg:col-start-7">
          <p className="type-label text-burgundy">{about.label}</p>
          <h2 id="about-heading" className="type-h1 mt-4">{about.heading}</h2>
          <p className="type-body mt-5 max-w-lg text-muted">{about.text}</p>

          <p className="type-caption mt-8">{about.venuesLabel}</p>
          <ul className="mt-3 flex flex-wrap gap-2.5">
            {about.venues.map((v) => (
              <li key={v} className="rounded border border-line bg-card px-3.5 py-1.5 text-sm font-medium text-ink/80">{v}</li>
            ))}
          </ul>

          <Button to={about.cta.to} variant="secondary" size="lg" className="mt-9">{about.cta.label}</Button>
        </Reveal>
      </Container>
    </section>
  )
}
