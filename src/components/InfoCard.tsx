import type { ReactNode } from 'react'

interface InfoCardProps {
  eyebrow?: string
  title: string
  children: ReactNode
  accent?: 'amber' | 'teal' | 'violet'
}

const accentMap = {
  amber: 'text-(--color-amber)',
  teal: 'text-(--color-teal)',
  violet: 'text-(--color-violet)',
}

export default function InfoCard({ eyebrow, title, children, accent = 'teal' }: InfoCardProps) {
  return (
    <div className="rounded-2xl border border-(--color-line) bg-(--color-panel) p-6 sm:p-7 h-full transition-colors hover:border-(--color-mist)/40">
      {eyebrow && (
        <span className={`font-mono text-[11px] tracking-wider uppercase ${accentMap[accent]}`}>
          {eyebrow}
        </span>
      )}
      <h3 className="font-display text-lg sm:text-xl font-semibold text-(--color-paper) mt-2 mb-2">
        {title}
      </h3>
      <div className="text-sm sm:text-[15px] leading-relaxed text-(--color-mist)">
        {children}
      </div>
    </div>
  )
}
