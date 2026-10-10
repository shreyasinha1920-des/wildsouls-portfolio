import { useRef } from 'react'
import { Link } from 'react-router'
import { fieldVar } from '../hooks/useBackgroundSwitcher'
import { gsap, useGSAP } from '../lib/motion'
import Media from './Media'

// Compact ruled index of projects.
//
// On a mouse, a preview trails the cursor: quickTo reuses one tween per axis, so
// every pointer move retargets the motion in flight instead of stacking tweens,
// and the card banks slightly into the direction of travel. Keyboard focus parks
// the same preview beside the focused row. On touch, each row carries its image
// inline and none of this runs.
export default function WorkIndex({ items }) {
  const root = useRef(null)
  const preview = useRef(null)
  const media = useRef(null)
  const active = useRef(null)
  const move = useRef(() => {})
  const show = useRef(() => {})
  const hide = useRef(() => {})

  useGSAP(
    () => {
      const card = preview.current
      const mm = gsap.matchMedia()

      mm.add(
        {
          reduce: '(prefers-reduced-motion: reduce)',
          full: '(prefers-reduced-motion: no-preference) and (hover: hover)',
        },
        (ctx) => {
          if (!ctx.conditions.full) return // no preview on touch or under reduced motion

          gsap.set(card, { xPercent: -50, yPercent: -50, autoAlpha: 0, scale: 0.92 })

          const xTo = gsap.quickTo(card, 'x', { duration: 0.45, ease: 'power3' })
          const yTo = gsap.quickTo(card, 'y', { duration: 0.45, ease: 'power3' })
          const tiltTo = gsap.quickTo(card, 'rotation', { duration: 0.6, ease: 'power3' })

          let lastX = 0
          let lastT = 0

          move.current = (e) => {
            const now = performance.now()
            const dt = Math.max(now - lastT, 16)
            // Bank into the direction of travel, capped so it stays a hint.
            tiltTo(gsap.utils.clamp(-7, 7, ((e.clientX - lastX) / dt) * 6))
            lastX = e.clientX
            lastT = now
            xTo(e.clientX + 190)
            yTo(e.clientY)
          }

          show.current = (item, atRect, point) => {
            const wasHidden = active.current === null
            active.current = item
            if (media.current) {
              media.current.src = item.image.src
              preview.current.style.setProperty('--preview-bg', fieldVar(item.color))
            }
            if (atRect) {
              // Keyboard: park it beside the row, no trailing.
              gsap.set(card, { x: Math.min(atRect.right - 200, window.innerWidth - 220), y: atRect.top + atRect.height / 2, rotation: 0 })
            } else if (point && wasHidden) {
              // Mouse, first contact: put the card under the cursor before it
              // fades in. Without this it fades in at whatever x/y it was last
              // left at — the top-left corner on the very first hover — and
              // then slides across the page to catch up.
              gsap.set(card, { x: point.x + 190, y: point.y, rotation: 0 })
              // Seed the velocity sampler too, or the first move reads a jump
              // from the stale position and banks the card hard.
              lastX = point.x
              lastT = performance.now()
            }
            gsap.to(card, { autoAlpha: 1, scale: 1, duration: 0.3, ease: 'power3.out', overwrite: 'auto' })
          }

          hide.current = () => {
            active.current = null
            // Reverses from wherever it is: no waiting for the entrance to finish.
            gsap.to(card, { autoAlpha: 0, scale: 0.92, duration: 0.25, ease: 'power2.out', overwrite: 'auto' })
          }
        },
      )
    },
    { scope: root },
  )

  return (
    <div ref={root} onPointerMove={(e) => move.current(e)} onPointerLeave={() => hide.current()}>
      <ul className="border-t border-ink">
        {items.map((p) => (
          <li key={p.slug} className="border-b border-ink">
            <Link
              to={`/${p.slug}`}
              viewTransition
              onPointerEnter={(e) => e.pointerType === 'mouse' && show.current(p, null, { x: e.clientX, y: e.clientY })}
              onFocus={(e) => show.current(p, e.currentTarget.getBoundingClientRect())}
              onBlur={() => hide.current()}
              className="group grid gap-x-6 gap-y-3 py-6 md:grid-cols-12 md:items-baseline"
            >
              <span className="md:hidden">
                <Media item={p.image} alt="" className="aspect-[5/2] w-full rounded-card object-cover object-top" />
              </span>
              <h3 className="text-display-3 md:col-span-5">
                <span className="link-sweep">{p.title}</span>
              </h3>
              <p className="text-small md:col-span-5">{p.summary}</p>
              <p className="font-mono text-mono-sm uppercase md:col-span-2 md:text-right">{p.tags[0]}</p>
            </Link>
          </li>
        ))}
      </ul>

      <div
        ref={preview}
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-20 hidden w-[340px] rounded-card p-3 [background:var(--preview-bg,transparent)] [@media(hover:hover)]:block"
      >
        <img ref={media} alt="" className="aspect-[5/2] w-full rounded-card object-cover object-top" />
      </div>
    </div>
  )
}
