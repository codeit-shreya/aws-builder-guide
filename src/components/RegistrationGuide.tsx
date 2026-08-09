import Reveal from './Reveal'
import StepTimeline from './StepTimeline'

export default function RegistrationGuide() {
  return (
    <section id="guide" className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 scroll-mt-16">
      <Reveal>
        <span className="font-mono text-[11px] tracking-wider uppercase text-(--color-amber)">The walkthrough</span>
        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-(--color-paper) mt-2 mb-3">
          Create your AWS Builder ID
        </h2>
        <p className="text-(--color-mist) max-w-xl leading-relaxed">
          Follow each step using the screenshots below. Scroll normally, or use the dots and
          Previous / Next buttons to jump around.
        </p>
      </Reveal>

      <div className="mt-6">
        <StepTimeline />
      </div>
    </section>
  )
}
