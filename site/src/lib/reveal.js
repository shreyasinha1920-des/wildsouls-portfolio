import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { gsap, SplitText, useGSAP } from './motion'

gsap.registerPlugin(ScrollTrigger)

// Scroll behaviour, one module, five deliberately different treatments:
//
//   [data-reveal]            a block rises into place once            (headings, intros)
//   [data-reveal-group]      its children arrive in sequence          (cards, ruled rows)
//   [data-reveal="side"]     enters from the edge it sits on          (alternating feature rows)
//   [data-parallax]          drifts against the scroll, scrubbed      (imagery)
//   [data-count]             counts up to its number once             (stats)
//   [data-words]             words surface as the line passes         (the manifesto, once)
//
// Everything fires at "top 85%", so a block is already a sixth of the way into
// the viewport when it moves: the reader watches it happen instead of finding it
// finished. Nothing hides until we know motion is wanted.

const ENTER = 'top 85%'

const debounce = (fn, wait = 200) => {
  let id
  return () => {
    clearTimeout(id)
    id = setTimeout(fn, wait)
  }
}

const rise = (targets, stagger = 0.08) =>
  gsap.to(targets, { autoAlpha: 1, y: 0, duration: 0.6, stagger, overwrite: true })

export function useScrollReveals(routeKey) {
  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add(
        { reduce: '(prefers-reduced-motion: reduce)', full: '(prefers-reduced-motion: no-preference)' },
        (ctx) => {
          // Reduced motion: nothing is ever hidden, so there is nothing to reveal.
          if (ctx.conditions.reduce) return

          const q = (sel) => gsap.utils.toArray(sel)

          // ── 1. Blocks that rise ──────────────────────────────
          const blocks = q('[data-reveal]:not([data-reveal="side"])')
          gsap.set(blocks, { autoAlpha: 0, y: 28 })
          ScrollTrigger.batch(blocks, { start: ENTER, once: true, onEnter: (b) => rise(b) })

          // ── 2. Groups whose children arrive in sequence ──────
          q('[data-reveal-group]').forEach((group) => {
            const kids = [...group.children]
            gsap.set(kids, { autoAlpha: 0, y: 24 })
            ScrollTrigger.create({
              trigger: group,
              start: ENTER,
              once: true,
              onEnter: () => rise(kids, Number(group.dataset.revealGroup) || 0.08),
            })
          })

          // ── 3. Rows that enter from the side they live on ────
          q('[data-reveal="side"]').forEach((el) => {
            const fromLeft = el.dataset.from !== 'right'
            gsap.set(el, { autoAlpha: 0, x: fromLeft ? -40 : 40 })
            ScrollTrigger.create({
              trigger: el,
              start: ENTER,
              once: true,
              onEnter: () => gsap.to(el, { autoAlpha: 1, x: 0, duration: 0.7, overwrite: true }),
            })
          })

          // ── 4. Imagery that drifts against the scroll ────────
          q('[data-parallax]').forEach((el) => {
            const distance = (Number(el.dataset.parallax) || 0.3) * 100
            gsap.fromTo(
              el,
              { y: distance / 2 },
              {
                y: -distance / 2,
                ease: 'none',
                scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true },
              },
            )
          })

          // ── 5. Stats that count up ───────────────────────────
          // The final text is kept on the element: a re-run (route change, a
          // second pass in StrictMode) must never leave a zero behind.
          q('[data-count]').forEach((el) => {
            const finalText = el.dataset.countTo ?? el.textContent.trim()
            el.dataset.countTo = finalText
            const match = finalText.match(/^(\D*)(\d+)(.*)$/s)
            if (!match) return // "Solo", "Live", "Enterprise": nothing to count
            const [, prefix, digits, suffix] = match

            let started = false
            const count = () => {
              if (started) return
              started = true
              const value = { n: 0 }
              el.textContent = `${prefix}0${suffix}`
              gsap.to(value, {
                n: Number(digits),
                duration: 0.9,
                ease: 'power2.out',
                onUpdate: () => {
                  el.textContent = `${prefix}${Math.round(value.n)}${suffix}`
                },
                onComplete: () => {
                  el.textContent = finalText
                },
              })
            }

            const trigger = ScrollTrigger.create({ trigger: el, start: ENTER, once: true, onEnter: count })
            const box = el.getBoundingClientRect()
            if (box.bottom < 0) {
              trigger.kill() // scrolled past already: the number is just the number
            } else if (box.top < window.innerHeight * 0.85) {
              count() // on screen at arrival: count now, while it can be watched
            }
          })

          // ── 6. The manifesto, word by word ───────────────────
          q('[data-words]').forEach((el) => {
            SplitText.create(el, {
              type: 'words',
              autoSplit: true,
              onSplit(self) {
                return gsap.fromTo(
                  self.words,
                  { autoAlpha: 0.15 },
                  {
                    autoAlpha: 1,
                    ease: 'none',
                    stagger: 0.3,
                    scrollTrigger: { trigger: el, start: 'top 80%', end: 'center 55%', scrub: true },
                  },
                )
              },
            })
          })

          // Nothing may stay hidden. On a #hash landing or a restored scroll
          // position, whatever sits above the fold is shown outright; whatever is
          // already on screen animates now rather than waiting for a scroll that
          // may never come.
          ScrollTrigger.refresh()
          const pending = [...blocks, ...q('[data-reveal-group] > *'), ...q('[data-reveal="side"]')]

          const sweep = () => {
            const onScreen = []
            pending.forEach((el) => {
              if (gsap.getProperty(el, 'autoAlpha')) return // already shown
              const box = el.getBoundingClientRect()
              if (box.bottom < 0) gsap.set(el, { autoAlpha: 1, x: 0, y: 0 })
              else if (box.top < window.innerHeight * 0.85) onScreen.push(el)
            })
            if (onScreen.length) {
              gsap.to(onScreen, { autoAlpha: 1, x: 0, y: 0, duration: 0.6, stagger: 0.06, overwrite: true })
            }
          }

          sweep()
          // A #hash lands (or the scroll position is restored) after this runs, so
          // sweep again once the jump has happened, and after any later refresh.
          const settle = setTimeout(sweep, 400)
          ScrollTrigger.addEventListener('refresh', sweep)

          // Lazy images and late fonts change the page height under us, so the
          // trigger positions have to be recomputed once things settle.
          const refresh = debounce(() => ScrollTrigger.refresh(), 200)
          const images = q('img').filter((img) => !img.complete)
          images.forEach((img) => img.addEventListener('load', refresh, { once: true }))
          document.fonts?.ready.then(refresh)

          return () => {
            clearTimeout(settle)
            ScrollTrigger.removeEventListener('refresh', sweep)
            images.forEach((img) => img.removeEventListener('load', refresh))
            // Leave the real numbers behind if we're torn down mid-count.
            q('[data-count]').forEach((el) => {
              if (el.dataset.countTo) el.textContent = el.dataset.countTo
            })
          }
        },
      )
    },
    { dependencies: [routeKey], revertOnUpdate: true },
  )
}
