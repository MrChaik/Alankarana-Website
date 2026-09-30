import { Quote } from 'lucide-react'
import type { Testimonial } from '@/data/testimonials'

type Props = { testimonial: Testimonial; featured?: boolean }

// The quote is the focus; name, occasion and location are secondary and only shown when they exist.
// A name is shown only with the customer's permission. No ratings or stars.
export default function TestimonialCard({ testimonial: t, featured = false }: Props) {
  const name = t.attributionPermission ? t.name : undefined
  const meta = [t.occasion, t.location].filter(Boolean).join(', ')
  const isPlaceholder = t.status === 'placeholder'

  return (
    <figure className={`flex h-full flex-col rounded-lg border border-line bg-card ${featured ? 'p-8 md:p-12' : 'p-6 md:p-8'}`}>
      <Quote size={featured ? 34 : 24} strokeWidth={1.25} className="text-gold" aria-hidden />
      <blockquote
        className={`flex-1 font-display leading-snug ${featured ? 'mt-6 text-3xl md:text-4xl' : 'mt-4 text-xl md:text-2xl'} ${isPlaceholder ? 'text-ink/60' : 'text-ink'}`}
      >
        {t.quote}
      </blockquote>
      <figcaption className="mt-6 border-t border-line pt-4">
        {isPlaceholder ? (
          <p className="type-caption">Name, occasion and location will be added with the customer’s permission.</p>
        ) : (
          <>
            {name && <p className="font-sans text-sm font-semibold">{name}</p>}
            {meta && <p className="type-caption mt-0.5">{meta}</p>}
          </>
        )}
      </figcaption>
    </figure>
  )
}
