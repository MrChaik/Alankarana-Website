import type { Price } from '@/data/designs'

const inr = new Intl.NumberFormat('en-IN')

/** "Quote required" unless a verified price exists. */
export function formatPrice(price: Price): string {
  switch (price.kind) {
    case 'from': return `From ₹${inr.format(price.amount)}`
    case 'range': return `₹${inr.format(price.min)} to ₹${inr.format(price.max)}`
    default: return 'Quote required'
  }
}

const day = new Intl.DateTimeFormat('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
const fmt = (iso: string) => day.format(new Date(`${iso}T00:00:00`))

/** Returns null when no dates are set, so nothing is shown. */
export function formatDateRange(start?: string, end?: string): string | null {
  if (start && end) return `${fmt(start)} to ${fmt(end)}`
  if (start) return `From ${fmt(start)}`
  if (end) return `Until ${fmt(end)}`
  return null
}
