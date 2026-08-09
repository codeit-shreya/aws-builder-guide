import { useEffect, useState } from 'react'

interface ScreenshotViewerProps {
  src: string
  alt: string
  urlLabel?: string
}

export default function ScreenshotViewer({ src, alt, urlLabel = 'builder.aws.com' }: ScreenshotViewerProps) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <div className="browser-frame w-full">
        <div className="flex items-center gap-2 px-4 py-2.5 bg-[#131b30] border-b border-(--color-line)">
          <span className="w-2.5 h-2.5 rounded-full bg-[#4a5674]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#4a5674]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#4a5674]" />
          <div className="ml-2 flex-1 truncate rounded-md bg-[#0c1424] px-3 py-1 text-[11px] font-mono text-(--color-mist) border border-(--color-line)">
            {urlLabel}
          </div>
        </div>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="group relative block w-full cursor-zoom-in focus-ring"
          aria-label={`Zoom into screenshot: ${alt}`}
        >
          <img
            src={src}
            alt={alt}
            className="w-full block"
            loading="lazy"
          />
          <span className="absolute inset-0 bg-(--color-ink)/0 group-hover:bg-(--color-ink)/10 transition-colors flex items-end justify-end p-3">
            <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[11px] font-mono bg-(--color-ink)/85 text-(--color-paper) px-2.5 py-1 rounded-full border border-(--color-line)">
              click to zoom
            </span>
          </span>
        </button>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-(--color-ink)/92 backdrop-blur-sm p-4 sm:p-8 animate-fade-up"
          style={{ animationDuration: '0.25s' }}
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={alt}
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute top-5 right-5 text-(--color-paper) w-10 h-10 rounded-full border border-(--color-line) bg-(--color-panel) hover:bg-(--color-panel-raised) transition-colors focus-ring"
            aria-label="Close zoomed screenshot"
          >
            ×
          </button>
          <img
            src={src}
            alt={alt}
            onClick={(e) => e.stopPropagation()}
            className="max-w-full max-h-full rounded-xl border border-(--color-line) shadow-2xl"
          />
        </div>
      )}
    </>
  )
}
