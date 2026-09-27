import { useLightbox } from './Lightbox'
import Media from './Media'

// A screenshot that opens full size in the lightbox, growing out of this
// thumbnail's position. Height caps live on the caller so a tall capture never
// swallows the scroll.
export default function ZoomImage({ item, alt, label, className = '', imgClassName = '', eager, ...rest }) {
  const open = useLightbox()
  if (!item) return null
  const imgAlt = alt ?? item.alt ?? ''
  const name = label ?? imgAlt

  return (
    <button
      type="button"
      onClick={(e) => open({ src: item.src, alt: name }, e.currentTarget.getBoundingClientRect())}
      className={`group block cursor-zoom-in overflow-hidden rounded-card ${className}`}
      aria-label={name ? `Enlarge: ${name}` : 'Enlarge image'}
    >
      <Media item={item} alt={imgAlt} eager={eager} {...rest} className={`transition-transform duration-slow ease-move group-hover:scale-[1.02] group-active:scale-100 ${imgClassName}`} />
    </button>
  )
}
