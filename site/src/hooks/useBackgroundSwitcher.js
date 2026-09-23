import { useEffect } from 'react'
import { useLocation } from 'react-router'

const CORE = new Set(['ink', 'paper', 'cream'])
export const fieldVar = (field) => (CORE.has(field) ? `var(--${field})` : `var(--field-${field})`)

// Signature motion: one page background that tweens to the color of whichever
// [data-field] section is crossing the middle of the viewport.
export function useBackgroundSwitcher() {
  const { pathname } = useLocation()

  useEffect(() => {
    const root = document.documentElement
    const sections = [...document.querySelectorAll('[data-field]')]
    if (!sections.length) return
    root.style.setProperty('--page-bg', fieldVar(sections[0].dataset.field))

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) root.style.setProperty('--page-bg', fieldVar(e.target.dataset.field))
        }
      },
      { rootMargin: '-50% 0px -50% 0px' },
    )
    sections.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [pathname])
}
