import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

type Crumb = { label: string; to?: string }

// The last item is the current page (no link).
export default function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="type-caption mb-6 flex flex-wrap items-center gap-1.5">
      {items.map((item, i) => (
        <span key={i} className="inline-flex items-center gap-1.5">
          {i > 0 && <ChevronRight size={14} aria-hidden />}
          {item.to ? (
            <Link to={item.to} className="hover:text-burgundy">{item.label}</Link>
          ) : (
            <span className="text-ink" aria-current="page">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  )
}
