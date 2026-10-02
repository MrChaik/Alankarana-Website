import type { LucideIcon } from 'lucide-react'

type Props = { title: string; text: string; icon: LucideIcon; className?: string }

// Open layout (no box): a gold rule, a small icon, a short heading and a line or two.
export default function BenefitCard({ title, text, icon: Icon, className = '' }: Props) {
  return (
    <div className={`h-full border-t border-gold-soft pt-6 ${className}`}>
      <Icon size={24} strokeWidth={1.25} className="text-burgundy" aria-hidden />
      <h3 className="type-h3 mt-4">{title}</h3>
      <p className="type-body mt-2 text-muted">{text}</p>
    </div>
  )
}
