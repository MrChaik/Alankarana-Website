import { Calendar, FileText, Image, Sparkles } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

// The real enquiry journey from the website brief: a human conversation and a tailored quote.
// There is no instant booking, checkout or automatic quote, so none is implied here.

export type ProcessStepData = { number: string; title: string; text: string; icon: LucideIcon }

export const howItWorks: ProcessStepData[] = [
  { number: '01', title: 'Share Your Reference', text: 'Send us a design or reference image, or a reel you like.', icon: Image },
  { number: '02', title: 'Confirm Date & Scope', text: 'Tell us the date, time, venue area and what you would like set up.', icon: Calendar },
  { number: '03', title: 'Receive Your Quote', text: 'We review your reference and requirements and send you a tailored quote.', icon: FileText },
  { number: '04', title: 'Enjoy the Setup', text: 'Our team prepares and installs the decor for your celebration.', icon: Sparkles },
]

export const howItWorksNote = 'Every enquiry is handled personally, and your quote follows the conversation.'
export const howItWorksWhatsappMessage = 'Hi Alankarana, I’d like to share a reference for my celebration decor.'
