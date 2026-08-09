import Reveal from './Reveal'

const items = [
  { n: '01', title: 'Have an email/account ready', body: 'You\'ll sign up with an email address, or with an existing Google, Apple, GitHub or Amazon account.' },
  { n: '02', title: 'Keep a few minutes free', body: 'The signup flow is a short series of screens — enough time to go through them without rushing.' },
  { n: '03', title: 'Follow the screenshots carefully', body: 'Each step below shows exactly what the real screen looks like, so you know what to expect.' },
]

export default function BeforeYouStart() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
      <Reveal>
        <span className="font-mono text-[11px] tracking-wider uppercase text-(--color-teal)">Getting ready</span>
        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-(--color-paper) mt-2 mb-3">
          Before you start
        </h2>
        <p className="text-(--color-mist) max-w-xl leading-relaxed">
          You don't need prior AWS or cloud experience to follow this guide.
        </p>
      </Reveal>

      <div className="grid sm:grid-cols-3 gap-4 sm:gap-5 mt-9">
        {items.map((item, i) => (
          <Reveal key={item.n} delay={i * 90}>
            <div className="rounded-2xl border border-(--color-line) bg-(--color-panel) p-6 h-full">
              <span className="font-mono text-2xl text-(--color-line)">{item.n}</span>
              <h3 className="font-display text-base font-semibold text-(--color-paper) mt-3 mb-1.5">
                {item.title}
              </h3>
              <p className="text-sm text-(--color-mist) leading-relaxed">{item.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
