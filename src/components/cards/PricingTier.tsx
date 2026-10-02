import { Check } from 'lucide-react'

type Props = {
  name: string
  /** 1 to 3. Shown as small rising bars so the tiers read as a progression, not a ranking. */
  level: 1 | 2 | 3
  text: string
  points: string[]
  /** Formatted price, or undefined while no verified price exists. */
  priceLabel?: string
  /** Shown instead of a price while it is still to be confirmed. */
  pendingLabel: string
}

export default function PricingTier({ name, level, text, points, priceLabel, pendingLabel }: Props) {
  return (
    <div className="flex h-full flex-col rounded-lg border border-line bg-card p-6 md:p-8">
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-display text-3xl font-semibold leading-none text-burgundy">{name}</h3>
        <span aria-hidden className="flex items-end gap-1 pt-1">
          {[1, 2, 3].map((n) => (
            <span key={n} className={`w-1.5 rounded-sm ${n <= level ? 'bg-gold' : 'bg-line'}`} style={{ height: 6 + n * 5 }} />
          ))}
        </span>
      </div>

      <p className="type-body mt-4 text-ink">{text}</p>

      <ul className="mt-5 flex-1 space-y-2.5">
        {points.map((p) => (
          <li key={p} className="flex items-start gap-2.5 text-sm text-muted">
            <Check size={16} strokeWidth={1.75} className="mt-0.5 shrink-0 text-gold" aria-hidden />
            {p}
          </li>
        ))}
      </ul>

      <div className="mt-7 border-t border-line pt-5">
        <p className="type-caption">Price range</p>
        {priceLabel ? (
          <p className="mt-1 font-display text-2xl font-medium text-burgundy">{priceLabel}</p>
        ) : (
          <p className="mt-2 inline-block rounded border border-dashed border-gold-soft px-3 py-1.5 text-sm font-medium text-ink/65">{pendingLabel}</p>
        )}
      </div>
    </div>
  )
}
