interface ProgressIndicatorProps {
  current: number
  total: number
}

export default function ProgressIndicator({ current, total }: ProgressIndicatorProps) {
  const pct = Math.round((current / total) * 100)
  return (
    <div className="flex items-center gap-3 w-full max-w-xs">
      <span className="font-mono text-[11px] text-(--color-mist) whitespace-nowrap">
        Step {current} of {total}
      </span>
      <div className="flex-1 h-1.5 rounded-full bg-(--color-line) overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-(--color-amber) to-(--color-teal) transition-[width] duration-500 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="font-mono text-[11px] text-(--color-mist)">{pct}%</span>
    </div>
  )
}
