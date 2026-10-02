import { site } from '@/data/site'

/** tel: link built from the configured phone number in data/site.ts. */
export const telUrl = () => `tel:${site.phone.replace(/[^+\d]/g, '')}`

/** Adds a source line to a WhatsApp message so the team can see which page the enquiry came from. */
export const withSource = (message: string, source: string) => `${message}\n\nSource: ${source}`
