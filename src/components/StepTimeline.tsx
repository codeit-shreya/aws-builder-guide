import { useEffect, useRef, useState } from 'react'
import { steps } from '../data/steps'
import GuideStep from './GuideStep'
import ProgressIndicator from './ProgressIndicator'

export default function StepTimeline() {
  const refs = useRef<(HTMLDivElement | null)[]>([])
  const [active, setActive] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = refs.current.findIndex((el) => el === entry.target)
            if (idx !== -1) setActive(idx)
          }
        })
      },
      { rootMargin: '-35% 0px -50% 0px', threshold: 0 }
    )
    refs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const goTo = (idx: number) => {
    const clamped = Math.max(0, Math.min(steps.length - 1, idx))
    refs.current[clamped]?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div>
      <div className="sticky top-[57px] sm:top-[65px] z-30 -mx-4 sm:-mx-6 px-4 sm:px-6 py-3 mb-2 bg-(--color-ink)/90 backdrop-blur-md border-b border-(--color-line) flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
        <ProgressIndicator current={active + 1} total={steps.length} />

        <div className="hidden sm:flex items-center gap-1.5 flex-1 justify-center" aria-hidden="true">
          {steps.map((s, i) => (
            <button
              key={s.id}
              onClick={() => goTo(i)}
              className={`w-2 h-2 rounded-full transition-all focus-ring ${
                i === active ? 'bg-(--color-amber) w-5' : 'bg-(--color-line) hover:bg-(--color-mist)'
              }`}
              aria-label={`Go to step ${i + 1}`}
            />
          ))}
        </div>

        <div className="flex items-center gap-2 justify-between sm:justify-end">
          <button
            onClick={() => goTo(active - 1)}
            disabled={active === 0}
            className="focus-ring text-xs font-mono px-3 py-1.5 rounded-full border border-(--color-line) text-(--color-paper) hover:border-(--color-mist) disabled:opacity-30 disabled:pointer-events-none transition-colors"
          >
            ← Previous
          </button>
          <button
            onClick={() => goTo(active + 1)}
            disabled={active === steps.length - 1}
            className="focus-ring text-xs font-mono px-3 py-1.5 rounded-full border border-(--color-amber)/50 bg-(--color-amber)/10 text-(--color-amber) hover:bg-(--color-amber)/20 disabled:opacity-30 disabled:pointer-events-none transition-colors"
          >
            Next →
          </button>
        </div>
      </div>

      <div>
        {steps.map((step, i) => (
          <GuideStep
            key={step.id}
            step={step}
            index={i}
            ref={(el) => {
              refs.current[i] = el
            }}
          />
        ))}
      </div>
    </div>
  )
}
