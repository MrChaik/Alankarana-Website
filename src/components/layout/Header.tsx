import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Container from '@/components/common/Container'
import Logo from '@/components/common/Logo'
import WhatsAppButton from '@/components/ui/WhatsAppButton'
import { navLinks } from '@/data/site'
import { ease } from '@/lib/motion'

const linkCls = ({ isActive }: { isActive: boolean }) =>
  `text-sm font-medium transition-colors duration-200 hover:text-burgundy ${isActive ? 'text-burgundy' : 'text-ink/80'}`

export default function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => setOpen(false), [pathname])

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-cream">
      <Container className="flex h-16 items-center justify-between lg:h-[72px]">
        <Logo />

        <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
          {navLinks.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkCls}>{l.label}</NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <WhatsAppButton className="hidden lg:inline-flex" />
          <button
            type="button"
            className="-mr-2 p-2 text-burgundy lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.nav
            aria-label="Mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease }}
            className="overflow-hidden border-t border-line bg-cream lg:hidden"
          >
            <Container className="flex flex-col py-3">
              {navLinks.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  className={({ isActive }) => `border-b border-line/70 py-3.5 font-display text-xl ${isActive ? 'text-burgundy' : 'text-ink'}`}
                >
                  {l.label}
                </NavLink>
              ))}
              <WhatsAppButton size="lg" className="my-5 w-full" />
            </Container>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
