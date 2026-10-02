import Container from '@/components/common/Container'
import SectionHeading from '@/components/common/SectionHeading'
import { Stagger, StaggerItem } from '@/components/common/Reveal'
import ProjectCard from '@/components/cards/ProjectCard'
import Button from '@/components/ui/Button'
import { designs } from '@/data/designs'

// Completed projects that are not already in "Featured designs".
const projects = designs.filter((d) => d.source === 'real-work' && !d.featured)

// Alternating wide / narrow cards, two per row on desktop (7+5, then 5+7).
const slot = (i: number) => (['lg:col-span-7', 'lg:col-span-5', 'lg:col-span-5', 'lg:col-span-7'] as const)[i % 4]

export default function OurWork() {
  return (
    <section id="our-work" className="section bg-cream" aria-labelledby="work-heading">
      <Container>
        <SectionHeading id="work-heading" heading="Our work" text="A look at decor projects Alankarana has completed." />

        <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 md:mt-14 lg:grid-cols-12 lg:gap-6">
          {projects.map((p, i) => (
            <StaggerItem key={p.id} className={`h-full ${slot(i)}`}>
              <ProjectCard design={p} className="aspect-[4/3] lg:aspect-auto lg:h-[26rem]" />
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-10 text-center">
          <Button to="/catalogue?status=real-work" size="lg">View Our Work</Button>
        </div>
      </Container>
    </section>
  )
}
