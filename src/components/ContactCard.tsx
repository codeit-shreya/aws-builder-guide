import { siteConfig } from '../data/config'
import Reveal from './Reveal'

export default function ContactCard() {
  return (
    <section id="help" className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-20 scroll-mt-20">
      <Reveal>
        <div className="rounded-3xl border border-(--color-line) bg-gradient-to-br from-(--color-panel) to-(--color-panel-raised) p-8 sm:p-12 text-center">
          <span className="font-mono text-[11px] tracking-wider uppercase text-(--color-amber)">Still stuck?</span>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-(--color-paper) mt-2 mb-3">
            Send me a screenshot
          </h2>
          <p className="text-(--color-mist) max-w-md mx-auto leading-relaxed mb-7">
            Send me a screenshot of the step you're having trouble with and I'll help you figure it out.
          </p>
          <a
            href={siteConfig.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex items-center gap-2 font-display font-medium text-sm sm:text-[15px] bg-(--color-amber) text-(--color-ink) px-6 py-3 rounded-full hover:bg-[#ffab24] transition-colors"
          >
            Message {siteConfig.authorName.split(' ')[0]} on WhatsApp
          </a>
        </div>
      </Reveal>
    </section>
  )
}
