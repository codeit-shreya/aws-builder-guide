import { siteConfig } from '../data/config'

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-(--color-ink)/85 backdrop-blur-md border-b border-(--color-line)">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-[57px] sm:h-[65px] flex items-center justify-between">
        <a href="#top" className="focus-ring flex items-center gap-2 font-display font-semibold text-(--color-paper)">
          <span className="w-2 h-2 rounded-sm bg-(--color-amber)" />
          Builder ID Guide
        </a>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-(--color-mist)">
          <a href="#what-is-it" className="focus-ring hover:text-(--color-paper) transition-colors">What is it?</a>
          <a href="#guide" className="focus-ring hover:text-(--color-paper) transition-colors">Guide</a>
          <a href="#help" className="focus-ring hover:text-(--color-paper) transition-colors">Help</a>
          <a
            href={siteConfig.registrationFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring border border-(--color-teal)/50 text-(--color-teal) px-3 py-1 rounded-full hover:bg-(--color-teal)/10 transition-colors whitespace-nowrap"
          >
            Register
          </a>
        </nav>
        <a
          href="#guide"
          className="focus-ring font-mono text-xs sm:text-sm bg-(--color-amber) text-(--color-ink) px-4 py-2 rounded-full hover:bg-[#ffab24] transition-colors"
        >
          Start guide
        </a>
      </div>
    </header>
  )
}
