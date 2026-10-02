import { BadgeCheck, Heart, Layers, MessageCircle, Package, PenLine } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

// Describes how the service and website work, taken from the website brief.
// These are not claims about company performance: no statistics, awards or guarantees.
export type Benefit = { title: string; text: string; icon: LucideIcon }

export const whyAlankarana = {
  heading: 'Why Alankarana',
  text: 'How we approach your celebration.',
  benefits: [
    { title: 'Thoughtful Design', text: 'Decor ideas shaped around your occasion, space and reference.', icon: PenLine },
    { title: 'Personalised Approach', text: 'We talk through your reference and requirements instead of pushing a fixed package.', icon: Heart },
    { title: 'Clear Starting Points', text: 'Standard, Premium and Luxury give you a starting point before your final quote.', icon: Layers },
    { title: 'In-House Inventory', text: 'Backdrops, stands, lighting and decor essentials are kept in-house, with trusted partners for special props.', icon: Package },
    { title: 'Real Work', text: 'Completed projects are shown separately from concepts and inspiration.', icon: BadgeCheck },
    { title: 'Easy Enquiry', text: 'Share a reference and continue the conversation on WhatsApp or by phone.', icon: MessageCircle },
  ] as Benefit[],
}
