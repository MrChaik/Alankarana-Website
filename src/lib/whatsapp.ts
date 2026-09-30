import { site } from '@/data/site'

/** Build a wa.me link with an optional pre-filled message (e.g. "I'd like a quote for a Sangeet at ..."). */
export function whatsappUrl(message?: string) {
  const text = message ? `?text=${encodeURIComponent(message)}` : ''
  return `https://wa.me/${site.whatsappNumber}${text}`
}
