import { useLightbox } from './Lightbox'
import Media from './Media'

// A screenshot that opens full size in the lightbox. `fit` caps its height so a
// tall capture never swallows the scroll.
export default function ZoomImage({ item, alt, className = '', imgClassName = '', eager }) {
  const open = useLightbox()
  if (!item) return null
  const label = alt ?? item.alt ?? ''

  return (
    <button
      type="button"
      onClick={() => open({ src: item.src, alt: label })}
      className={`group block cursor-zoom-in overflow-hidden rounded-card ${className}`}
      aria-label={label ? `Enlarge: ${label}` : 'Enlarge image'}
    >
      <Media item={item} alt={label} eager={eager} className={`transition-transform duration-slow ease-move group-hover:scale-[1.02] ${imgClassName}`} />
    </button>
  )
}
