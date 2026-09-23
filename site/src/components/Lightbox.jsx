import { createContext, useCallback, useContext, useRef, useState } from 'react'

const LightboxContext = createContext(() => {})
export const useLightbox = () => useContext(LightboxContext)

// One shared <dialog> for enlarging screenshots. Esc, the close button,
// or a click on the backdrop closes it; focus returns to the opener.
export function LightboxProvider({ children }) {
  const ref = useRef(null)
  const [item, setItem] = useState(null)

  const open = useCallback((next) => {
    setItem(next)
    requestAnimationFrame(() => ref.current?.showModal())
  }, [])

  return (
    <LightboxContext.Provider value={open}>
      {children}
      <dialog
        ref={ref}
        className="lightbox"
        aria-label={item?.alt || 'Image'}
        onClick={(e) => e.target === e.currentTarget && ref.current.close()}
        onClose={() => setItem(null)}
      >
        {item && (
          <figure className="relative">
            <img src={item.src} alt={item.alt} className="max-h-[90vh] w-auto rounded-card bg-paper object-contain" />
            {item.alt && <figcaption className="mt-3 text-center font-mono text-mono-sm uppercase text-paper">{item.alt}</figcaption>}
            <button
              type="button"
              onClick={() => ref.current.close()}
              className="absolute -top-5 -right-5 grid size-12 place-items-center rounded-full bg-paper text-display-5 leading-none"
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
