import { dashboardStep, profileStep } from '../data/steps'
import Reveal from './Reveal'
import ScreenshotViewer from './ScreenshotViewer'

export default function CompletionSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 border-t border-(--color-line)">
      <Reveal>
        <span className="font-mono text-[11px] tracking-wider uppercase text-(--color-green)">All done</span>
        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-(--color-paper) mt-2 mb-3">
          You're in 🎉
        </h2>
        <p className="text-(--color-mist) max-w-xl leading-relaxed">
          Once you finish the steps above, your AWS Builder ID is created and you land on your Builder Center home.
        </p>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-8 md:gap-10 mt-10">
        <Reveal>
          <div className="rounded-2xl border border-(--color-line) bg-(--color-panel) p-6 sm:p-7 h-full flex flex-col">
            <h3 className="font-display text-lg font-semibold text-(--color-paper) mb-2">{dashboardStep.title}</h3>
            <p className="text-sm text-(--color-mist) leading-relaxed mb-5">{dashboardStep.explanation}</p>
            <div className="mt-auto">
              <ScreenshotViewer src={dashboardStep.images[0].src} alt={dashboardStep.images[0].alt} />
            </div>
          </div>
        </Reveal>

        <Reveal delay={90}>
          <div className="rounded-2xl border border-(--color-line) bg-(--color-panel) p-6 sm:p-7 h-full flex flex-col">
            <h3 className="font-display text-lg font-semibold text-(--color-paper) mb-2">{profileStep.title}</h3>
            <p className="text-sm text-(--color-mist) leading-relaxed mb-5">{profileStep.explanation}</p>
            <div className="mt-auto grid grid-cols-2 gap-3">
              {profileStep.images.map((img) => (
                <ScreenshotViewer key={img.src} src={img.src} alt={img.alt} />
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal delay={160}>
        <div className="mt-8 rounded-2xl border border-(--color-teal)/30 bg-(--color-teal)/[0.06] px-5 sm:px-6 py-5 flex items-start gap-3">
          <span className="text-(--color-teal) mt-0.5" aria-hidden="true">💡</span>
          <p className="text-sm text-(--color-paper)/90 leading-relaxed">
            Save your Builder ID details somewhere safe so you can easily access your profile later.
          </p>
        </div>
      </Reveal>
    </section>
  )
}
