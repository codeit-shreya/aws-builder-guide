import InfoCard from './InfoCard'
import Reveal from './Reveal'

const pillars: { eyebrow: string; title: string; body: string; accent: 'amber' | 'teal' | 'violet' }[] = [
  { eyebrow: 'Learn', title: 'Learning resources', body: 'Training, workshops and technical content to explore AWS at your own pace.', accent: 'teal' },
  { eyebrow: 'Connect', title: 'Communities & events', body: 'Follow builders, join community spaces, and find people building similar things.', accent: 'violet' },
  { eyebrow: 'Build', title: 'Explore and build with AWS', body: 'Tools and a toolbox of resources to support whatever you\'re working on.', accent: 'amber' },
]

export default function WhatIsBuilderCenter() {
  return (
    <section id="what-is-it" className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 scroll-mt-20">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        <Reveal>
          <span className="font-mono text-[11px] tracking-wider uppercase text-(--color-teal)">The basics</span>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-(--color-paper) mt-2 mb-4 text-balance">
            So... what is AWS Builder Center?
          </h2>
          <p className="text-(--color-mist) leading-relaxed mb-5">
            AWS Builder Center is a place where you can learn, connect and build with AWS. It brings together
            learning resources, technical content, community opportunities and tools for people who want to
            explore AWS.
          </p>
          <div className="rounded-2xl border border-(--color-violet)/30 bg-(--color-violet)/[0.07] p-5">
            <p className="text-sm text-(--color-paper)/90 leading-relaxed">
              <span className="font-display font-semibold text-(--color-violet)">Builder ID ≠ AWS account. </span>
              Your Builder ID is your personal identity/profile used to access Builder Center and certain AWS
              builder experiences. It is separate from an AWS account.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-4">
          {pillars.map((p, i) => (
            <Reveal key={p.eyebrow} delay={i * 90}>
              <InfoCard eyebrow={p.eyebrow} title={p.title} accent={p.accent}>
                {p.body}
              </InfoCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
