import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

type Props = {
  children: ReactNode
  variant?: 'primary' | 'secondary'
  size?: 'md' | 'lg'
  to?: string // internal route
  href?: string // external link
  onClick?: () => void
  className?: string
}

const base =
  'inline-flex items-center justify-center gap-2 rounded font-sans font-semibold transition-colors duration-200 select-none'
const variants = {
  primary: 'bg-burgundy text-cream hover:bg-burgundy-dark',
  secondary: 'border border-burgundy/30 bg-transparent text-burgundy hover:border-burgundy hover:bg-burgundy/5',
}
const sizes = { md: 'h-11 px-5 text-sm', lg: 'h-12 px-7 text-[0.95rem]' }

const motionProps = { whileHover: { y: -1 }, whileTap: { y: 0, scale: 0.99 }, transition: { duration: 0.15 } }

export default function Button({ children, variant = 'primary', size = 'md', to, href, onClick, className = '' }: Props) {
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if (to)
    return (
      <motion.span {...motionProps} className="inline-flex">
        <Link to={to} className={cls}>{children}</Link>
      </motion.span>
    )
  if (href) {
    // Only web links open in a new tab; tel: and mailto: links should not.
    const external = /^https?:/.test(href)
    return (
      <motion.a href={href} className={cls} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} {...motionProps}>
        {children}
      </motion.a>
    )
  }
  return (
    <motion.button type="button" onClick={onClick} className={cls} {...motionProps}>
      {children}
    </motion.button>
  )
}
