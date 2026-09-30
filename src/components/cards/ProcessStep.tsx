import type { LucideIcon } from 'lucide-react'

type Props = { number: string; title: string; text: string; icon: LucideIcon; isLast?: boolean }

// The parent grid uses `lg:gap-8`; the horizontal connector reaches into that gap (right-[-1.25rem]).
export default function ProcessStep({ number, title, text, icon: Icon, isLast = false }: Props) {
  return (
    <div className="relative flex gap-5 lg:block">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[999px] border border-gold-soft bg-card text-burgundy">
        <Icon size={22} strokeWidth={1.5} aria-hidden />
      </div>

      {!isLast && (
        <>
          <span aria-hidden className="absolute bottom-0 left-7 top-[3.75rem] w-px bg-line lg:hidden" />
          <span aria-hidden className="absolute left-[4.25rem] right-[-1.25rem] top-7 hidden h-px bg-line lg:block" />
        </>
      )}

      <div className="pb-9 lg:mt-5 lg:pb-0">
        <p className="font-display text-2xl font-medium leading-none text-gold" aria-label={`Step ${Number(number)}`}>{number}</p>
        <h3 className="type-h3 mt-2">{title}</h3>
        <p className="type-body mt-2 max-w-[16rem] text-muted">{text}</p>
      </div>
    </div>
  )
}
