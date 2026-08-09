import { siteConfig } from '../data/config'
import PixelMotif from './PixelMotif'

const badges = ['Beginner friendly', 'Step-by-step', 'Free Builder ID']

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-grid border-b border-(--color-line)">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-(--color-ink) pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 sm:pt-24 pb-16 sm:pb-20 relative">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
          <div className="animate-fade-up">
            <p className="inline-flex items-center gap-2 font-mono text-[11px] tracking-wider uppercase text-(--color-teal) border border-(--color-teal)/30 bg-(--color-teal)/[0.06] rounded-full px-3 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-(--color-teal)" />
              Student-created guide • Not an official AWS website
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.4rem] font-semibold leading-[1.08] text-balance text-(--color-paper)">
              Your AWS Builder ID,
              <br />
              <span className="text-(--color-amber)">step by step.</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-(--color-mist) max-w-xl leading-relaxed">
              New to AWS? Don't worry. Follow this simple visual guide to create your AWS Builder ID
              and get started with AWS Builder Center — built from real screenshots of the actual signup flow.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#guide"
                className="focus-ring font-display font-medium text-sm sm:text-[15px] bg-(--color-amber) text-(--color-ink) px-6 py-3 rounded-full hover:bg-[#ffab24] transition-colors"
              >
                Start the guide
              </a>
              <a
                href={siteConfig.builderCenterUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring font-display font-medium text-sm sm:text-[15px] border border-(--color-teal)/50 text-(--color-teal) px-6 py-3 rounded-full hover:bg-(--color-teal)/10 transition-colors"
              >
                Create Your Builder ID →
              </a>
              <a
                href="#what-is-it"
                className="focus-ring font-display font-medium text-sm sm:text-[15px] border border-(--color-line) text-(--color-paper) px-6 py-3 rounded-full hover:border-(--color-mist) transition-colors"
              >
                What is Builder Center?
              </a>
            </div>
            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-2">
              {badges.map((b) => (
                <span key={b} className="flex items-center gap-1.5 text-xs sm:text-sm text-(--color-mist)">
                  <span className="text-(--color-green)">✓</span> {b}
                </span>
              ))}
            </div>

            {/* Already have a Builder ID? — second path for returning students */}
            <div className="mt-6 rounded-xl border border-(--color-teal)/25 bg-(--color-teal)/[0.05] px-4 py-3.5 flex flex-col sm:flex-row sm:items-center gap-3">
              <p className="text-sm text-(--color-mist) leading-snug flex-1">
                <span className="font-medium text-(--color-paper)/90">Already have your AWS Builder ID?</span>{' '}
                Submit your Builder Alias, semester and department to complete your registration.
              </p>
              <a
                href={siteConfig.registrationFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring shrink-0 font-display font-medium text-xs border border-(--color-teal)/50 text-(--color-teal) px-4 py-2 rounded-full hover:bg-(--color-teal)/10 transition-colors whitespace-nowrap"
              >
                Complete Registration Form →
              </a>
            </div>
          </div>

          <div className="hidden lg:flex justify-center animate-fade-up" style={{ animationDelay: '150ms' }}>
            <div className="rounded-3xl border border-(--color-line) bg-(--color-panel) p-10 shadow-2xl">
              <PixelMotif className="w-40 h-32" />
              <p className="mt-6 font-mono text-[11px] text-(--color-mist) text-center">
                builder.aws.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
