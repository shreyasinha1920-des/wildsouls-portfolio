import { useRef } from 'react'
import { altText } from '../lib/alt'
import ZoomImage from './ZoomImage'

const isTall = (i) => i.height > i.width * 1.2

// Full-bleed horizontal strip of screens: one row of scroll instead of a wall of
// images. Tall (phone) screens and wide (desktop) screens share one row height.
export default function Carousel({ items, label }) {
  const ref = useRef(null)
  const allTall = items.every(isTall)
  const h = allTall ? 'h-[440px] md:h-[520px]' : 'h-[260px] md:h-[380px]'
  const move = (dir) => ref.current?.scrollBy({ left: dir * ref.current.clientWidth * 0.8, behavior: 'smooth' })

  return (
    <div>
      <div className="container-wild mb-5 flex items-center justify-between gap-5">
        <p className="eyebrow">{items.length} screens</p>
        <div className="flex gap-2">
          {[-1, 1].map((dir) => (
            <button
              key={dir}
              type="button"
              onClick={() => move(dir)}
              className="grid size-12 place-items-center rounded-full border border-ink transition-colors duration-fast hover:bg-ink hover:text-paper"
              aria-label={dir < 0 ? 'Previous screens' : 'Next screens'}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden className={dir < 0 ? 'rotate-180' : ''}>
                <path d="M4 10h11M11 5l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
          ))}
        </div>
      </div>
      <ul ref={ref} className="carousel" tabIndex={0} role="region" aria-label={label}>
        {items.map((item) => (
          <li key={item.src}>
            <figure>
              <ZoomImage item={item} alt={altText(item, label)} className={h} imgClassName="h-full w-auto" />
              <figcaption className="mt-3 font-mono text-mono-sm uppercase">{altText(item, label)}</figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </div>
  )
}
