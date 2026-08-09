const blocks = [
  { x: 0, y: 0, w: 2, h: 2, color: 'var(--color-violet)' },
  { x: 3, y: 1, w: 1, h: 1, color: 'var(--color-amber)' },
  { x: 5, y: 0, w: 2, h: 3, color: 'var(--color-violet)' },
  { x: 8, y: 2, w: 1, h: 1, color: 'var(--color-teal)' },
  { x: 1, y: 3, w: 1, h: 1, color: 'var(--color-teal)' },
  { x: 4, y: 4, w: 2, h: 2, color: 'var(--color-violet)' },
  { x: 7, y: 4, w: 1, h: 2, color: 'var(--color-amber)' },
  { x: 0, y: 6, w: 1, h: 1, color: 'var(--color-violet)' },
  { x: 2, y: 6, w: 2, h: 1, color: 'var(--color-teal)' },
]

export default function PixelMotif({ className = '' }: { className?: string }) {
  const unit = 16
  return (
    <svg
      viewBox="0 0 160 128"
      className={className}
      aria-hidden="true"
      role="presentation"
    >
      {blocks.map((b, i) => (
        <rect
          key={i}
          x={b.x * unit}
          y={b.y * unit}
          width={b.w * unit}
          height={b.h * unit}
          fill={b.color}
          opacity={0.85}
          className="animate-pop"
          style={{ animationDelay: `${i * 70}ms` }}
        />
      ))}
    </svg>
  )
}
