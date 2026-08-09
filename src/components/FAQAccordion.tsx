import { useState } from 'react'
import Reveal from './Reveal'

interface FAQItem {
  q: string
  a: string | string[]
  cta?: { label: string; href: string }
}

const faqs: FAQItem[] = [
  {
    q: 'Does anyone get paid if I sign up?',
    a: [
      'No. Creating an AWS Builder ID is free, and you don\'t need to pay anyone to register.',
      'I\'m sharing this as part of my role as an AWS Student Builder Campus Leader to help students discover AWS learning and community opportunities.',
    ],
  },
  {
    q: 'Is the AWS Builder ID free?',
    a: 'Yes. Creating an AWS Builder ID is free.',
  },
  {
    q: 'What is AWS Builder Center, really?',
    a: 'AWS Builder Center is a place where you can learn, connect and build with AWS. It brings together learning resources, technical content, community opportunities and tools for people who want to explore AWS.',
  },
  {
    q: 'Is Builder ID the same as an AWS account?',
    a: 'No. Your AWS Builder ID is separate from an AWS account. It is a personal identity/profile used to access Builder Center and certain AWS builder experiences.',
  },
  {
    q: 'Do I need to know AWS already?',
    a: 'No. This guide is designed for students who are just getting started.',
  },
  {
    q: 'I\'m stuck during signup. What should I do?',
    a: 'Don\'t worry. Take a screenshot of the step where you\'re stuck and contact me for help.',
    cta: { label: 'Get help', href: '#help' },
  },
]

function AccordionItem({ item, index }: { item: FAQItem; index: number }) {
  const [open, setOpen] = useState(false)
  const answers = Array.isArray(item.a) ? item.a : [item.a]
  const panelId = `faq-panel-${index}`
  const buttonId = `faq-button-${index}`

  return (
    <div className="border-b border-(--color-line)">
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((o) => !o)}
          className="focus-ring w-full flex items-center gap-4 py-5 text-left group"
        >
          <span className="font-mono text-xs text-(--color-line) shrink-0">{String(index + 1).padStart(2, '0')}</span>
          <span className="flex-1 font-display text-base sm:text-lg font-medium text-(--color-paper) group-hover:text-(--color-amber) transition-colors">
            {item.q}
          </span>
          <span
            aria-hidden="true"
            className={`shrink-0 w-7 h-7 rounded-full border border-(--color-line) flex items-center justify-center text-(--color-mist) transition-transform duration-300 ${open ? 'rotate-45' : ''}`}
          >
            +
          </span>
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className="grid transition-[grid-template-rows] duration-300 ease-out"
        style={{ gridTemplateRows: open ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <div className="pb-5 pl-10 pr-8 space-y-3">
            {answers.map((a, i) => (
              <p key={i} className="text-sm sm:text-[15px] text-(--color-mist) leading-relaxed">
                {a}
              </p>
            ))}
            {item.cta && (
              <a
                href={item.cta.href}
                className="focus-ring inline-flex items-center gap-1.5 text-sm font-medium text-(--color-amber) hover:text-[#ffab24] mt-1"
              >
                {item.cta.label} →
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function FAQAccordion() {
  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
      <Reveal>
        <span className="font-mono text-[11px] tracking-wider uppercase text-(--color-teal)">Questions</span>
        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-(--color-paper) mt-2 mb-8">
          Frequently asked questions
        </h2>
      </Reveal>
      <Reveal delay={80}>
        <div className="rounded-2xl border border-(--color-line) bg-(--color-panel) px-5 sm:px-6">
          {faqs.map((item, i) => (
            <AccordionItem key={item.q} item={item} index={i} />
          ))}
        </div>
      </Reveal>
    </section>
  )
}
