import { forwardRef } from 'react'
import type { GuideStepData } from '../data/steps'
import ScreenshotViewer from './ScreenshotViewer'

interface GuideStepProps {
  step: GuideStepData
  index: number
}

const GuideStep = forwardRef<HTMLDivElement, GuideStepProps>(({ step, index }, ref) => {
  return (
    <div ref={ref} id={step.id} className="scroll-mt-28 grid md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] gap-8 md:gap-12 py-12 md:py-16 border-b border-(--color-line) last:border-b-0">
      <div>
        <span className="font-mono text-4xl sm:text-5xl font-semibold text-(--color-line) block leading-none mb-3">
          {String(index + 1).padStart(2, '0')}
        </span>
        <h3 className="font-display text-xl sm:text-2xl font-semibold text-(--color-paper) mb-4 text-balance">
          {step.title}
        </h3>
        <div className="inline-flex items-start gap-2 rounded-xl bg-(--color-panel) border border-(--color-line) px-4 py-3 mb-4">
          <span className="text-(--color-amber) text-sm font-mono mt-0.5">→</span>
          <div>
            <p className="text-[11px] font-mono uppercase tracking-wider text-(--color-mist) mb-1">
              What you need to do
            </p>
            <p className="text-sm text-(--color-paper) leading-snug">{step.action}</p>
          </div>
        </div>
        <p className="text-sm sm:text-[15px] leading-relaxed text-(--color-mist)">
          {step.explanation}
        </p>

        {step.warning && (
          <div className="mt-5 rounded-xl border border-(--color-amber)/40 bg-(--color-amber)/[0.07] px-4 py-4">
            <p className="font-display text-sm font-semibold text-(--color-amber) mb-1.5 flex items-center gap-2">
              <span aria-hidden="true">⚠️</span> {step.warning.heading}
            </p>
            <p className="text-sm text-(--color-paper)/85 leading-relaxed">{step.warning.body}</p>
          </div>
        )}

        {step.tip && (
          <div className="mt-4 flex items-start gap-2.5 text-sm text-(--color-mist)">
            <span aria-hidden="true" className="text-(--color-teal) mt-0.5">💡</span>
            <p>
              <span className="text-(--color-teal) font-medium">Tip — </span>
              {step.tip}
            </p>
          </div>
        )}
      </div>

      <div className={`flex flex-col gap-6 ${step.images.length > 1 ? '' : 'justify-center'}`}>
        {step.images.map((img) => (
          <ScreenshotViewer key={img.src} src={img.src} alt={img.alt} />
        ))}
      </div>
    </div>
  )
})

GuideStep.displayName = 'GuideStep'
export default GuideStep
