import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Container from '@/components/common/Container'
import SectionHeading from '@/components/common/SectionHeading'
import { Stagger, StaggerItem } from '@/components/common/Reveal'
import DesignCard from '@/components/cards/DesignCard'
import { relatedDesigns } from '@/data/catalogue'
import type { Design } from '@/data/designs'

export default function RelatedDesigns({ design }: { design: Design }) {
  const related = relatedDesigns(design, 4)
  if (!related.length) return null

  return (
    <section className="section bg-cream" aria-labelledby="related-heading">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading id="related-heading" heading="Related Designs" text="Similar designs based on occasion, venue and style." />
          <Link to="/catalogue" className="type-label inline-flex items-center gap-1.5 text-burgundy hover:underline underline-offset-4">
            View All Designs <ArrowRight size={16} strokeWidth={1.75} aria-hidden />
          </Link>
        </div>

        <Stagger className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((r) => (
            <StaggerItem key={r.id}><DesignCard design={r} /></StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  )
}
