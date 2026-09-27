import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(useGSAP, SplitText)

// GSAP speaks the same motion language as the CSS tokens, so JS-driven and
// CSS-driven motion can't drift apart. See design-system/design-tokens.md.
gsap.defaults({ duration: 0.6, ease: 'power3.out' })

export const DURATION = {
  line: 0.7, // a headline line clearing its mask
  copy: 0.5, // supporting text and controls
  shape: 0.8, // large decorative shapes
}

/** Headline entrance: lines rise out of a mask, one after the next. */
export const LINES_IN = { yPercent: 110, duration: DURATION.line, stagger: 0.08 }

/** Supporting copy: a short rise, never the full headline distance. */
export const COPY_IN = { y: 20, autoAlpha: 0, duration: DURATION.copy }

export { gsap, SplitText, useGSAP }
