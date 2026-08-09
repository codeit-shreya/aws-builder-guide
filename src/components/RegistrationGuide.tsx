import { siteConfig } from '../data/config'
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

      {/* Action card — open the signup link first */}
      <Reveal delay={60}>
        <div className="mt-8 rounded-2xl border border-(--color-amber)/30 bg-(--color-amber)/[0.05] p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <p className="font-display font-semibold text-(--color-paper) text-base mb-1">
              Ready to create your Builder ID?
            </p>
            <p className="text-sm text-(--color-mist) leading-relaxed max-w-lg">
              Use the official AWS Builder Center link to start your registration, then follow the steps below.
            </p>
          </div>
          <a
            href={siteConfig.builderCenterUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring shrink-0 font-display font-medium text-sm bg-(--color-amber) text-(--color-ink) px-5 py-2.5 rounded-full hover:bg-[#ffab24] transition-colors whitespace-nowrap"
          >
            Create Your Builder ID →
          </a>
        </div>
      </Reveal>

      <div className="mt-6">
        <StepTimeline />
      </div>
    </section>
  )
}
