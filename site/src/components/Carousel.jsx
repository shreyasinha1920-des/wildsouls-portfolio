import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { useCallback, useEffect, useRef, useState } from 'react'
import { altText } from '../lib/alt'
import { gsap } from '../lib/motion'
import ZoomImage from './ZoomImage'

gsap.registerPlugin(ScrollToPlugin)

const isTall = (i) => i.height > i.width * 1.2
const prefersReducedMotion = () => window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

// Full-bleed horizontal strip of screens: one row of scroll instead of a wall of
// images. Tall (phone) screens and wide (desktop) screens share one row height.
export default function Carousel({ items, label }) {
  const ref = useRef(null)
  const [edges, setEdges] = useState({ start: true, end: false })
  // The row height follows the majority shape, not every slide: a recap strip of
  // phone screens keeps its tall row even when a tablet shot or a branding board
  // is mixed in, instead of shrinking all seven phones to suit two outliers.
  const mostlyTall = items.filter(isTall).length >= Math.ceil(items.length * 0.6)
  // One row height per strip; each slide's width then follows its own image, so a
  // tall capture stays slim without the row collapsing and a wide one stays wide.
  const row = mostlyTall ? '[--row:420px] md:[--row:520px]' : '[--row:300px] md:[--row:400px]'

  // Arrows go dead at the ends rather than silently doing nothing.
  const readEdges = useCallback(() => {
    const el = ref.current
    if (!el) return
    const max = el.scrollWidth - el.clientWidth
    setEdges({ start: el.scrollLeft <= 2, end: el.scrollLeft >= max - 2 })
  }, [])

  useEffect(() => {
    readEdges()
    const el = ref.current
    el?.addEventListener('scroll', readEdges, { passive: true })
    window.addEventListener('resize', readEdges)
    return () => {
      el?.removeEventListener('scroll', readEdges)
      window.removeEventListener('resize', readEdges)
    }
  }, [readEdges])

  const move = (dir) => {
    const el = ref.current
    if (!el) return
    const target = el.scrollLeft + dir * el.clientWidth * 0.8
    if (prefersReducedMotion()) {
      el.scrollLeft = target
      return
    }
    // overwrite kills the tween in flight and picks up from where it is, so
    // holding the arrow tracks the clicks instead of queueing them.
    gsap.to(el, { scrollTo: { x: target }, duration: 0.5, ease: 'power2.out', overwrite: true })
  }

  return (
    <div>
      <div className="container-wild mb-5 flex items-center justify-between gap-5">
        <p className="eyebrow">{items.length} screens</p>
        <div className="flex gap-2">
          {[-1, 1].map((dir) => {
            const atEdge = dir < 0 ? edges.start : edges.end
            return (
              <button
                key={dir}
                type="button"
                onClick={() => move(dir)}
                disabled={atEdge}
                className="press-pop grid size-12 place-items-center rounded-full border border-ink transition-[colors,opacity] duration-fast hover:bg-ink hover:text-paper disabled:pointer-events-none disabled:opacity-25"
                aria-label={dir < 0 ? 'Previous screens' : 'Next screens'}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden className={dir < 0 ? 'rotate-180' : ''}>
                  <path d="M4 10h11M11 5l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </button>
            )
          })}
        </div>
      </div>
      <ul ref={ref} className={`carousel ${row}`} tabIndex={0} role="region" aria-label={`${label}, scrollable`}>
        {items.map((item) => {
          const caption = altText(item, label)
          // A long scrolling capture is far taller than it is wide. Fitting the
          // whole thing in the row would leave a sliver a few pixels across, so it
          // gets a proper column width and is cropped from the top; the lightbox
          // still opens the full image.
          const isColumn = item.height > item.width * 2.4
          return (
            <li key={item.src} className="flex flex-col">
              {/* The caption names the screen, so the image itself stays silent
                  rather than having a screen reader read the same words twice. */}
              <ZoomImage
                item={item}
                alt=""
                label={caption}
                className={`h-[var(--row)] max-w-[78vw] ${isColumn ? 'w-[220px] md:w-[260px]' : 'min-w-[180px]'}`}
                imgClassName={isColumn ? 'h-full w-full object-cover object-top' : 'h-full w-auto'}
              />
              {/* width:0 keeps the caption out of the slide's intrinsic width, so it
                  wraps under its own image instead of stretching the slide and
                  running into the next caption. */}
              <figcaption className="mt-4 w-0 min-w-full font-mono text-mono-sm uppercase">{caption}</figcaption>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
