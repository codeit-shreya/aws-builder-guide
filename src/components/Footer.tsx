import { siteConfig } from '../data/config'

export default function Footer() {
  return (
    <footer className="border-t border-(--color-line) bg-(--color-panel)">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <div className="flex flex-col sm:flex-row justify-between gap-8">
          <div>
            <p className="font-display font-semibold text-(--color-paper)">Student-created AWS Builder ID Guide</p>
            <p className="text-sm text-(--color-mist) mt-1">Created by {siteConfig.authorName}</p>
            <p className="text-xs text-(--color-mist)/70 mt-3 font-mono">
              Student-created resource • Not an official AWS website
            </p>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <a href={siteConfig.builderCenterLink} target="_blank" rel="noopener noreferrer" className="focus-ring text-(--color-mist) hover:text-(--color-paper) transition-colors">
              AWS Builder Center
            </a>
            <a href={siteConfig.awsDocsLink} target="_blank" rel="noopener noreferrer" className="focus-ring text-(--color-mist) hover:text-(--color-paper) transition-colors">
              AWS documentation
            </a>
            <a href={siteConfig.communityLink} className="focus-ring text-(--color-mist) hover:text-(--color-paper) transition-colors">
              Community
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
