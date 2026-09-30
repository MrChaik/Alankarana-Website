import Container from '@/components/common/Container'
import SectionHeading from '@/components/common/SectionHeading'
import { Stagger, StaggerItem } from '@/components/common/Reveal'
import ProjectCard from '@/components/cards/ProjectCard'
import Button from '@/components/ui/Button'
import { projects } from '@/data/projects'

// Completed projects only. First project leads; the rest support it.
// Desktop: lead spans two rows on the left, two projects stack on the right, two more sit below.
const slot = (i: number) =>
  i === 0 ? 'sm:col-span-2 lg:col-span-7 lg:row-span-2' : i <= 2 ? 'lg:col-span-5' : 'lg:col-span-6'

export default function OurWork() {
  return (
    <section className="section bg-cream" aria-labelledby="work-heading">
      <Container>
        <SectionHeading id="work-heading" heading="Our work" text="A look at decor projects Alankarana has completed." />

        <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 md:mt-14 lg:grid-cols-12 lg:gap-6">
          {projects.map((p, i) => (
            <StaggerItem key={p.id} className={`h-full ${slot(i)}`}>
              <ProjectCard
                project={p}
                featured={i === 0}
                className={i === 0 ? 'aspect-[4/5] sm:aspect-[16/10] lg:aspect-auto lg:h-full' : 'aspect-[4/3] lg:aspect-[16/10]'}
              />
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-10 text-center">
          <Button to="/our-work" size="lg">View Our Work</Button>
        </div>
      </Container>
    </section>
  )
}
