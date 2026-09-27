import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react'

const LightboxContext = createContext(() => {})
export const useLightbox = () => useContext(LightboxContext)

// How far the closed state sits toward the thumbnail that opened it. Full distance
// would fling across the screen; a third reads as "this grew out of that".
const ORIGIN_PULL = 0.35

// One shared <dialog> for enlarging screenshots. It grows out of the thumbnail
// that opened it and leaves along the same path, so the two feel connected.
// Esc, the close button, or a click on the backdrop closes it; focus returns
// to the opener because <dialog> handles that for us.
export function LightboxProvider({ children }) {
  const ref = useRef(null)
  const [item, setItem] = useState(null)
  const [open_, setOpen] = useState(false)

  // Lock the page while the lightbox owns the screen. Both elements need it:
  // `overflow-x: clip` on body makes body the scroller once the root is hidden.
  useEffect(() => {
    if (!open_) return
    const root = document.documentElement
    const { body } = document
    const previous = [root.style.overflow, body.style.overflow]
    root.style.overflow = 'hidden'
    body.style.overflow = 'hidden'
    return () => {
      root.style.overflow = previous[0]
      body.style.overflow = previous[1]
    }
  }, [open_])

  const open = useCallback((next, originRect) => {
    setItem(next)
    requestAnimationFrame(() => {
      const dialog = ref.current
      if (!dialog) return
      const onScreen =
        originRect && originRect.bottom > 0 && originRect.top < window.innerHeight
      if (onScreen) {
        // Clamped to a quarter of the viewport: enough to read as "it came from
        // there", never a flight across the screen from an off-screen thumbnail.
        const limitX = window.innerWidth / 4
        const limitY = window.innerHeight / 4
        const clamp = (v, limit) => Math.max(-limit, Math.min(limit, v))
        const dx = clamp((originRect.left + originRect.width / 2 - window.innerWidth / 2) * ORIGIN_PULL, limitX)
        const dy = clamp((originRect.top + originRect.height / 2 - window.innerHeight / 2) * ORIGIN_PULL, limitY)
        dialog.style.setProperty('--lightbox-dx', `${Math.round(dx)}px`)
        dialog.style.setProperty('--lightbox-dy', `${Math.round(dy)}px`)
      } else {
        dialog.style.removeProperty('--lightbox-dx')
        dialog.style.removeProperty('--lightbox-dy')
      }
      dialog.showModal()
      setOpen(true)
    })
  }, [])

  return (
    <LightboxContext.Provider value={open}>
      {children}
      <dialog
        ref={ref}
        className="lightbox"
        aria-label={item?.alt || 'Image'}
        onClick={(e) => e.target === e.currentTarget && ref.current.close()}
        onClose={() => { setItem(null); setOpen(false) }}
      >
        {item && (
          <figure className="relative">
            <img src={item.src} alt={item.alt} className="max-h-[90vh] w-auto rounded-card bg-paper object-contain" />
            {item.alt && <figcaption className="mt-3 text-center font-mono text-mono-sm uppercase text-paper">{item.alt}</figcaption>}
            <button
              type="button"
              onClick={() => ref.current.close()}
              className="press-pop absolute -top-5 -right-5 grid size-12 place-items-center rounded-full bg-paper text-display-5 leading-none"
              aria-label="Close image"
            >
              ×
            </button>
          </figure>
        )}
      </dialog>
    </LightboxContext.Provider>
  )
}
