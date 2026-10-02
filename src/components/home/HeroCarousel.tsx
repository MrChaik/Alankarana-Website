import { useEffect, useRef, useState } from 'react'
import { animate, motion, useMotionValue, type PanInfo } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Media from '@/components/common/Media'
import { hero } from '@/data/home'
import { ease } from '@/lib/motion'

const INTERVAL_MS = 5000
const SWIPE_OFFSET = 50
const SWIPE_VELOCITY = 400

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduced(media.matches)
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])
  return reduced
}

export default function HeroCarousel() {
  const slides = hero.slides
  const count = slides.length
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [dragging, setDragging] = useState(false)
  const [width, setWidth] = useState(0)
  const reduced = usePrefersReducedMotion()
  const viewportRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)

  useEffect(() => {
    const el = viewportRef.current
    if (!el) return
    const measure = () => setWidth(el.clientWidth)
    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const previous = useRef(index)
  useEffect(() => {
    if (!width || dragging) return
    const wraps = Math.abs(index - previous.current) > 1
    previous.current = index
    const controls = animate(x, -index * width, {
      duration: reduced || wraps ? 0 : 0.55,
      ease,
    })
    return () => controls.stop()
  }, [index, dragging, reduced, width, x])

  useEffect(() => {
    if (reduced || paused || dragging || count < 2) return
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % count)
    }, INTERVAL_MS)
    return () => window.clearInterval(timer)
  }, [reduced, paused, dragging, count])

  const go = (next: number) => setIndex((next + count) % count)

  const onDragEnd = (_: unknown, info: PanInfo) => {
    setDragging(false)
    const offset = info.offset.x
    const velocity = info.velocity.x
    if (offset < -SWIPE_OFFSET || velocity < -SWIPE_VELOCITY) go(index + 1)
    else if (offset > SWIPE_OFFSET || velocity > SWIPE_VELOCITY) go(index - 1)
  }

  return (
    <div
      ref={viewportRef}
      className="relative aspect-[4/5] overflow-hidden rounded-lg sm:aspect-[4/3] lg:aspect-[5/4]"
      role="region"
      aria-roledescription="carousel"
      aria-label="Celebration decor"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <motion.div
        className="flex h-full cursor-grab active:cursor-grabbing"
        style={{ x }}
        drag="x"
        dragElastic={0.12}
        dragMomentum={false}
        onDragStart={() => setDragging(true)}
        onDragEnd={onDragEnd}
      >
        {slides.map((slide, i) => (
          <div key={slide.src} className="h-full min-w-full shrink-0" aria-hidden={i !== index}>
            <Media
              src={slide.src}
              alt={i === index ? slide.alt : ''}
              tone={slide.tone}
              eager={i === 0}
              className="pointer-events-none h-full w-full"
            />
          </div>
        ))}
      </motion.div>

      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => go(index - 1)}
        className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-cream/90 text-burgundy shadow-sm transition-colors hover:bg-cream"
      >
        <ChevronLeft size={22} strokeWidth={1.75} aria-hidden />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => go(index + 1)}
        className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-cream/90 text-burgundy shadow-sm transition-colors hover:bg-cream"
      >
        <ChevronRight size={22} strokeWidth={1.75} aria-hidden />
      </button>
    </div>
  )
}
