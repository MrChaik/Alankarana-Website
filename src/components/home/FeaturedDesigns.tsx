import Container from '@/components/common/Container'
import SectionHeading from '@/components/common/SectionHeading'
import { Stagger, StaggerItem } from '@/components/common/Reveal'
import DesignCard from '@/components/cards/DesignCard'
import Button from '@/components/ui/Button'
import { featuredDesigns } from '@/data/designs'

export default function FeaturedDesigns() {
  return (
    <section className="section bg-ivory" aria-labelledby="designs-heading">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading id="designs-heading" heading="Featured designs" text="A selection of decor looks to start from." />
          <Button to="/catalogue" variant="secondary" className="self-start">View all designs</Button>
        </div>

        {/* Swipeable row on mobile and tablet, 3-column grid on desktop */}
        <Stagger className="-mx-5 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 sm:-mx-8 sm:px-8 md:mt-14 lg:mx-0 lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible lg:px-0 lg:pb-0">
          {featuredDesigns.map((d) => (
            <StaggerItem key={d.id} className="w-[72%] shrink-0 snap-start sm:w-[44%] md:w-[36%] lg:w-auto">
              <DesignCard design={d} />
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  )
}
