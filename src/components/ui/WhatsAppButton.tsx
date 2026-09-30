import { MessageCircle } from 'lucide-react'
import Button from './Button'
import { whatsappUrl } from '@/lib/whatsapp'
import { site } from '@/data/site'

type Props = {
  label?: string
  /** Pre-filled message, e.g. built from the current occasion, venue or design. */
  message?: string
  variant?: 'primary' | 'secondary'
  size?: 'md' | 'lg'
  className?: string
}

export default function WhatsAppButton({ label = 'WhatsApp Us', message = site.defaultWhatsappMessage, variant = 'primary', size = 'md', className }: Props) {
  return (
    <Button href={whatsappUrl(message)} variant={variant} size={size} className={className}>
      <MessageCircle size={18} strokeWidth={1.75} aria-hidden />
      {label}
    </Button>
  )
}
