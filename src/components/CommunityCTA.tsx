import { siteConfig } from '../data/config'
import Reveal from './Reveal'

export default function CommunityCTA() {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-16 sm:pb-20">
      <Reveal>
        <div className="rounded-3xl border border-(--color-teal)/25 bg-(--color-teal)/[0.05] p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h2 className="font-display text-xl sm:text-2xl font-semibold text-(--color-paper) mb-2">
              Want to learn more?
            </h2>
            <p className="text-sm sm:text-[15px] text-(--color-mist) leading-relaxed max-w-md">
              Join our student AWS community to get updates about discussions, learning resources, events and opportunities.
            </p>
          </div>
          <a
            href={siteConfig.communityLink}
            className="focus-ring shrink-0 font-display font-medium text-sm border border-(--color-teal)/50 text-(--color-teal) px-6 py-3 rounded-full hover:bg-(--color-teal)/10 transition-colors whitespace-nowrap"
          >
            Join the community
          </a>
        </div>
      </Reveal>
    </section>
  )
}
