import { Link } from 'react-router-dom'
import { site } from '@/data/site'

// Text wordmark for now. When the logo file is added to /public/images, swap the text for an <img>.
export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link
      to="/"
      aria-label={`${site.name} home`}
      className={`font-display text-[1.65rem] font-semibold leading-none tracking-wide ${light ? 'text-cream' : 'text-burgundy'}`}
    >
      {site.name}
    </Link>
  )
}
