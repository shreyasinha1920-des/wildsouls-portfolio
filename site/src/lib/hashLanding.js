import { useEffect } from 'react'

// When someone arrives on a #hash from another site (the doors in the 404 storybook, a
// shared link), the browser jumps to the section as soon as it exists, before lazy images,
// fonts and the scroll-triggered sections above it have settled, so the section drifts
// away from the top. Keep it aligned while the page settles, for a few seconds at most,
// and let go the moment the visitor scrolls, touches or presses a key.
let landed = false

export function useHashLanding() {
  useEffect(() => {
    if (landed) return
    landed = true
    const id = decodeURIComponent(window.location.hash.slice(1))
    if (!id) return

    let done = false
    const started = performance.now()
    const align = () => {
      if (done) return
      const el = document.getElementById(id)
      if (el && Math.abs(el.getBoundingClientRect().top) > 2) el.scrollIntoView({ block: 'start' })
    }
    const stop = () => cleanup()
    const ro = new ResizeObserver(align)
    const timer = setInterval(align, 200)
    const limit = setTimeout(() => cleanup(), 4000)

    function cleanup() {
      if (done) return
      done = true
      // React's StrictMode (development) unmounts and remounts at once: let the remount run.
      if (performance.now() - started < 50) landed = false
      clearInterval(timer)
      clearTimeout(limit)
      ro.disconnect()
      window.removeEventListener('load', align)
      for (const type of ['wheel', 'touchstart', 'keydown', 'pointerdown']) window.removeEventListener(type, stop)
    }

    for (const type of ['wheel', 'touchstart', 'keydown', 'pointerdown']) window.addEventListener(type, stop, { passive: true })
    window.addEventListener('load', align)
    document.fonts?.ready.then(align)
    ro.observe(document.body)
    requestAnimationFrame(align)
    return cleanup
  }, [])
}
