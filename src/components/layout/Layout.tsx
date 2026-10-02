import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

export default function Layout() {
  // A hash scrolls to that homepage section. A new page with no hash starts at the top.
  // Filter changes (query string only) keep the scroll position.
  const { pathname, hash } = useLocation()
  useEffect(() => {
    const scroll = () => {
      const root = document.documentElement
      const previous = root.style.scrollBehavior
      root.style.scrollBehavior = 'auto'
      if (hash) {
        const el = document.getElementById(hash.slice(1))
        if (el) el.scrollIntoView({ block: 'start' })
        else window.scrollTo(0, 0)
      } else {
        window.scrollTo(0, 0)
      }
      window.requestAnimationFrame(() => {
        root.style.scrollBehavior = previous
      })
    }

    // Scroll after native hash handling and menu layout changes have settled.
    const menuOpen = document.querySelector('nav[aria-label="Mobile"]')
    const timer = window.setTimeout(scroll, menuOpen ? 350 : 100)
    return () => window.clearTimeout(timer)
  }, [pathname, hash])

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1"><Outlet /></main>
      <Footer />
    </div>
  )
}
