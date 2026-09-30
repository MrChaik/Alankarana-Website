import { Link } from 'react-router-dom'
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react'
import Container from '@/components/common/Container'
import Logo from '@/components/common/Logo'
import WhatsAppButton from '@/components/ui/WhatsAppButton'
import { legalLinks, navLinks, site } from '@/data/site'

const item = 'text-sm text-cream/75 transition-colors duration-200 hover:text-cream'

export default function Footer() {
  return (
    <footer className="bg-burgundy-dark text-cream">
      <Container className="grid gap-12 py-14 md:grid-cols-12 md:py-16">
        <div className="md:col-span-5">
          <Logo light />
          <p className="mt-4 max-w-xs font-display text-xl leading-snug text-cream/85">{site.tagline}</p>
          <div className="mt-6 flex items-center gap-4">
            <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-cream/75 transition-colors hover:text-gold-soft">
              <Instagram size={20} strokeWidth={1.5} />
            </a>
            <a href={site.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-cream/75 transition-colors hover:text-gold-soft">
              <Facebook size={20} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        <nav aria-label="Footer" className="md:col-span-3">
          <p className="type-label mb-4 text-gold-soft">Explore</p>
          <ul className="space-y-2.5">
            {navLinks.map((l) => (
              <li key={l.to}><Link to={l.to} className={item}>{l.label}</Link></li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-4">
          <p className="type-label mb-4 text-gold-soft">Get in touch</p>
          <ul className="space-y-3">
            <li className={`flex items-center gap-3 ${item}`}><Phone size={16} strokeWidth={1.5} />{site.phone}</li>
            <li className={`flex items-center gap-3 ${item}`}><Mail size={16} strokeWidth={1.5} />{site.email}</li>
            <li className={`flex items-center gap-3 ${item}`}><MapPin size={16} strokeWidth={1.5} />{site.city}</li>
          </ul>
          <WhatsAppButton variant="secondary" className="mt-6 !border-cream/40 !text-cream hover:!border-cream hover:!bg-cream/10" />
        </div>
      </Container>

      <div className="border-t border-cream/15">
        <Container className="flex flex-col gap-2 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-cream/60">© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <ul className="flex gap-5">
            {legalLinks.map((l) => (
              <li key={l.to}><Link to={l.to} className="text-xs text-cream/60 transition-colors hover:text-cream">{l.label}</Link></li>
            ))}
          </ul>
        </Container>
      </div>
    </footer>
  )
}
