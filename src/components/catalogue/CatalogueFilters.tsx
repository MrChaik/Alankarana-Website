import { ChevronDown, X } from 'lucide-react'
import { filterGroups, optionLabel } from '@/data/catalogue'
import type { FilterKey, Filters } from '@/data/catalogue'

type Props = {
  filters: Filters
  onChange: (key: FilterKey, slug: string) => void // empty slug clears that filter
  onClear: () => void
}

// Native selects keep this simple, accessible and easy to use on mobile.
export default function CatalogueFilters({ filters, onChange, onClear }: Props) {
  const active = filterGroups.filter((g) => filters[g.key])

  return (
    <div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {filterGroups.map((g) => (
          <label key={g.key} className="relative block">
            <span className="type-caption mb-1.5 block">{g.label}</span>
            <select
              value={filters[g.key] ?? ''}
              onChange={(e) => onChange(g.key, e.target.value)}
              className="h-11 w-full appearance-none truncate rounded border border-line bg-card pl-3.5 pr-9 text-sm font-medium text-ink transition-colors hover:border-burgundy/50"
            >
              <option value="">{g.allLabel}</option>
              {g.options.map((o) => (
                <option key={o.slug} value={o.slug}>{o.label}</option>
              ))}
            </select>
            <ChevronDown size={16} strokeWidth={1.75} aria-hidden className="pointer-events-none absolute bottom-3.5 right-3 text-burgundy" />
          </label>
        ))}
      </div>

      {active.length > 0 && (
        <div className="mt-4 flex flex-wrap items-center gap-2">
          {active.map((g) => (
            <button
              key={g.key}
              type="button"
              onClick={() => onChange(g.key, '')}
              aria-label={`Remove filter ${optionLabel(g.key, filters[g.key]!)}`}
              className="inline-flex items-center gap-1.5 rounded-full border border-burgundy/30 bg-burgundy/5 py-1 pl-3 pr-2 text-sm font-medium text-burgundy transition-colors hover:border-burgundy"
            >
              {optionLabel(g.key, filters[g.key]!)}
              <X size={14} strokeWidth={2} aria-hidden />
            </button>
          ))}
          <button type="button" onClick={onClear} className="type-label px-2 text-muted underline-offset-4 hover:text-burgundy hover:underline">
            Clear all
          </button>
        </div>
      )}
    </div>
  )
}
