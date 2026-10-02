import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

export default function Layout() {
  // A hash scrolls to that homepage section. A new page with no hash starts at the top.
  // Filter changes (query string only) keep the scroll position.
  const { pathname, hash } = useLocation()
  useEffect(() => {
    const scroll = (immediate: boolean) => {
      const root = document.documentElement
      const previous = root.style.scrollBehavior
      if (immediate) root.style.scrollBehavior = 'auto'
      if (hash) {
        const el = document.getElementById(hash.slice(1))
        if (el) el.scrollIntoView({ block: 'start', behavior: immediate ? 'auto' : 'smooth' })
        else window.scrollTo(0, 0)
      } else {
        window.scrollTo(0, 0)
      }
      if (immediate) root.style.scrollBehavior = previous
    }

    // Wait until the mobile menu has collapsed. Closing it cancels a smooth scroll.
    const menuOpen = document.querySelector('nav[aria-label="Mobile"]')
    if (menuOpen) {
      const timer = window.setTimeout(() => scroll(true), 350)
      return () => window.clearTimeout(timer)
    }
    scroll(false)
  }, [pathname, hash])

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1"><Outlet /></main>
      <Footer />
    </div>
  )
}
