import { Link } from 'react-router-dom'
import { site } from '@/data/site'

export default function Logo({ light = false, icon = false }: { light?: boolean; icon?: boolean }) {
  return (
    <Link
      to="/"
      aria-label={`${site.name} home`}
      className={`inline-flex items-center gap-2 font-display text-[1.65rem] font-semibold leading-none tracking-wide ${light ? 'text-cream' : 'text-burgundy'}`}
    >
      {icon && <img src="/alankarana-icon.png" alt="" className="h-10 w-auto shrink-0 rounded-sm" />}
      <span>{site.name}</span>
    </Link>
  )
}
