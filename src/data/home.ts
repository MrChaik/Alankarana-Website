import { Heart, Layers, MessageCircle, PenLine, Receipt } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { MediaTone } from './types'

// All content in this file is PLACEHOLDER copy for the homepage structure phase.

export const hero = {
  heading: 'Thoughtful decor for moments worth celebrating in Hyderabad',
  text: 'Celebration decor for homes, offices and smaller venues in Hyderabad, from festivals and weddings to baby showers and birthdays. Browse our designs or message us on WhatsApp to begin.',
  // Real hero photo goes at this path (public/images/hero/). Until then a placeholder is shown.
  image: '/images/hero/hero-main.jpg',
  imageAlt: 'Celebration decor set up by Alankarana',
  imageSecondary: '/images/hero/hero-detail.jpg',
  imageSecondaryAlt: 'Close-up of flowers and decor materials',
}

export const tiers = [
  { name: 'Standard', price: 'From ₹X', text: 'Short description of this tier.', image: '/images/designs/tier-standard.jpg', tone: 'ivory' as MediaTone },
  { name: 'Premium', price: 'From ₹X', text: 'Short description of this tier.', image: '/images/designs/tier-premium.jpg', tone: 'rose' as MediaTone },
  { name: 'Luxury', price: 'From ₹X', text: 'Short description of this tier.', image: '/images/designs/tier-luxury.jpg', tone: 'gold' as MediaTone },
]

export const pricingFactors = ['Occasion', 'Venue', 'Design', 'Materials', 'Scale']

export const benefits: { title: string; text: string; icon: LucideIcon }[] = [
  { title: 'Thoughtful Design', text: 'Short description of this benefit.', icon: PenLine },
  { title: 'Personalised Approach', text: 'Short description of this benefit.', icon: Heart },
  { title: 'Flexible Setups', text: 'Short description of this benefit.', icon: Layers },
  { title: 'Clear Pricing', text: 'Short description of this benefit.', icon: Receipt },
  { title: 'Easy Enquiry', text: 'Short description of this benefit.', icon: MessageCircle },
]

export const about = {
  label: 'About Alankarana',
  heading: 'A short headline about the people behind the decor',
  text: 'A short paragraph introducing Alankarana, where it is based and what it cares about. The real story will be added in the next phase.',
  image: '/images/about/about-main.jpg',
}

export const finalCta = {
  heading: 'Planning a celebration?',
  text: 'Tell us about the occasion and the venue. We will help you find the right look.',
  image: '/images/campaigns/closing.jpg',
}
