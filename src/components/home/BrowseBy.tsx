import Container from '@/components/common/Container'
import SectionHeading from '@/components/common/SectionHeading'
import { Reveal } from '@/components/common/Reveal'
import BrowseCategory from '@/components/cards/BrowseCategory'
import { browseGroups } from '@/data/browseCategories'

export default function BrowseBy() {
  const group = (id: string) => browseGroups.find((g) => g.id === id)!
  return (
    <section id="venues" className="section bg-cream" aria-labelledby="browse-heading">
      <Container>
        <SectionHeading id="browse-heading" heading="Browse by venue, style or budget" text="Not sure where to begin? Start from what you already know." />

        <Reveal className="mt-10 grid gap-12 md:mt-14 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7"><BrowseCategory group={group('venue')} /></div>
          <div className="space-y-10 lg:col-span-5">
            <BrowseCategory group={group('style')} />
            <BrowseCategory group={group('budget')} />
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
