import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Container from '@/components/common/Container'
import Logo from '@/components/common/Logo'
import WhatsAppButton from '@/components/ui/WhatsAppButton'
import { navLinks } from '@/data/site'
import { ease } from '@/lib/motion'

// Hash links share the path "/", so match the fragment instead of NavLink's default.
function isCurrent(to: string, pathname: string, hash: string) {
  const hashAt = to.indexOf('#')
  if (hashAt !== -1) {
    const path = to.slice(0, hashAt) || '/'
    return pathname === path && hash === to.slice(hashAt)
  }
  return pathname === to
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const { pathname, hash } = useLocation()
  useEffect(() => {
    // Drop focus before the menu unmounts, or the browser scrolls to the top.
    const active = document.activeElement
    if (active instanceof HTMLElement && active.closest('nav[aria-label="Mobile"]')) active.blur()
    setOpen(false)
  }, [pathname, hash])

  const desktopCls = (to: string) =>
    `text-sm font-medium transition-colors duration-200 hover:text-burgundy ${isCurrent(to, pathname, hash) ? 'text-burgundy' : 'text-ink/80'}`
  const mobileCls = (to: string) =>
    `border-b border-line/70 py-3.5 font-display text-xl ${isCurrent(to, pathname, hash) ? 'text-burgundy' : 'text-ink'}`

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-cream">
      <Container className="flex h-16 items-center justify-between lg:h-[72px]">
        <Logo />

        <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
          {navLinks.map((l) => (
            <Link key={l.to} to={l.to} className={desktopCls(l.to)} aria-current={isCurrent(l.to, pathname, hash) ? 'page' : undefined}>{l.label}</Link>
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
                <Link
                  key={l.to}
                  to={l.to}
                  className={mobileCls(l.to)}
                  aria-current={isCurrent(l.to, pathname, hash) ? 'page' : undefined}
                >
                  {l.label}
                </Link>
              ))}
              <WhatsAppButton size="lg" className="my-5 w-full" />
            </Container>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
