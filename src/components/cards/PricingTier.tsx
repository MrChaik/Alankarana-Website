import { Check } from 'lucide-react'
import Media from '@/components/common/Media'
import type { MediaTone } from '@/data/types'

type Props = {
  name: string
  price: string
  text: string
  image?: string
  tone?: MediaTone
  features?: string[]
  /** 'burgundy' or 'gold' gives the tier a coloured outline so the three tiers read as a progression. */
  accent?: 'none' | 'burgundy' | 'gold'
}

const outline = { none: 'border-line', burgundy: 'border-burgundy/60', gold: 'border-gold' }

export default function PricingTier({ name, price, text, image, tone, features = [], accent = 'none' }: Props) {
  return (
    <div className={`flex h-full flex-col overflow-hidden rounded-lg border bg-card ${outline[accent]}`}>
      <Media src={image} alt={`${name} decor`} tone={tone} className="aspect-[16/10]" />
      <div className="flex flex-1 flex-col p-6 md:p-7">
        <h3 className="type-h3">{name}</h3>
        <p className="mt-3 font-display text-3xl font-medium text-burgundy">{price}</p>
        <p className="type-body mt-3 text-muted">{text}</p>
        {features.length > 0 && (
          <ul className="mt-5 space-y-2.5 border-t border-line pt-5">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-sm text-ink/80">
                <Check size={16} strokeWidth={1.75} className="mt-0.5 shrink-0 text-gold" aria-hidden />
                {f}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
