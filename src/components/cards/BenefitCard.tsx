import type { LucideIcon } from 'lucide-react'

type Props = { title: string; text: string; icon: LucideIcon; className?: string }

export default function BenefitCard({ title, text, icon: Icon, className = '' }: Props) {
  return (
    <div className={`h-full rounded-lg border border-line bg-card p-6 md:p-7 ${className}`}>
      <Icon size={26} strokeWidth={1.25} className="text-burgundy" aria-hidden />
      <h3 className="type-h3 mt-5">{title}</h3>
      <p className="type-body mt-2 text-muted">{text}</p>
    </div>
  )
}
