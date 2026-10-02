// Customer testimonials. Only add a testimonial once the customer has approved it.
// The entries below are PLACEHOLDERS, not real reviews. No names, ratings or star scores are
// invented. `name` is only shown when attributionPermission is true.

export type Testimonial = {
  id: string
  status: 'placeholder' | 'approved'
  quote: string
  name?: string
  occasion?: string
  location?: string
  attributionPermission: boolean
}

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    status: 'approved',
    quote: 'Absolutely loved the decor, exceeded expectations!',
    name: 'Priya and Arjun',
    occasion: 'Wedding · Mar 2026',
    location: 'Banjara Hills',
    attributionPermission: true,
  },
  { id: 'testimonial-2', status: 'placeholder', quote: 'Approved customer testimonial will be added here.', attributionPermission: false },
  { id: 'testimonial-3', status: 'placeholder', quote: 'Approved customer testimonial will be added here.', attributionPermission: false },
]
