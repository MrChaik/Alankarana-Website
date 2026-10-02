import { Phone } from 'lucide-react'
import Button from './Button'
import { telUrl } from '@/lib/contact'

type Props = { label?: string; variant?: 'primary' | 'secondary'; size?: 'md' | 'lg'; className?: string }

// Mirrors WhatsAppButton. The number comes from data/site.ts (still a placeholder until confirmed).
export default function CallButton({ label = 'Call Us', variant = 'secondary', size = 'md', className }: Props) {
  return (
    <Button href={telUrl()} variant={variant} size={size} className={className}>
      <Phone size={18} strokeWidth={1.75} aria-hidden />
      {label}
    </Button>
  )
}
