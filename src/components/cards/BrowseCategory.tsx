import { Link } from 'react-router-dom'
import type { BrowseGroup } from '@/data/browseCategories'

const chip =
  'inline-flex h-11 items-center rounded border border-line bg-card px-5 text-sm font-medium text-ink transition-colors duration-200 hover:border-burgundy hover:text-burgundy'

// One "Browse by" group: icon tiles (venue) or simple chips (style, budget).
export default function BrowseCategory({ group }: { group: BrowseGroup }) {
  return (
    <div>
      <h3 className="type-h3">{group.title}</h3>

      {group.variant === 'tiles' ? (
        <ul className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {group.items.map(({ slug, label, to, icon: Icon }) => (
            <li key={slug}>
              <Link
                to={to}
                className="flex h-full min-h-[5.5rem] flex-col items-start gap-3 rounded-lg border border-line bg-card p-4 transition-[border-color,box-shadow] duration-200 hover:border-burgundy/50 hover:shadow-soft"
              >
                {Icon && <Icon size={22} strokeWidth={1.5} className="text-burgundy" aria-hidden />}
                <span className="text-sm font-medium leading-snug">{label}</span>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <ul className="mt-5 flex flex-wrap gap-3">
          {group.items.map(({ slug, label, to }) => (
            <li key={slug}><Link to={to} className={chip}>{label}</Link></li>
          ))}
        </ul>
      )}

      {group.note && <p className="type-caption mt-4 max-w-sm">{group.note}</p>}
    </div>
  )
}
