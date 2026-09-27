import { useId } from 'react'

// Circular stamp: tracked mono text set on a circle that slowly rotates
// around a still center (logo or glyph). `tone: 'paper'` gives a white disc
// with an ink ring, so a colored logo stays legible.
export default function Stamp({ text, children, size = 150, tone = 'ink', className = '' }) {
  const id = useId()
  const skin = tone === 'paper' ? 'bg-paper text-ink border border-ink' : 'bg-ink text-paper'
  return (
    <div className={`relative grid place-items-center rounded-full ${skin} ${className}`} style={{ width: size, height: size }}>
      <svg data-loop viewBox="0 0 100 100" className="absolute inset-0 size-full animate-rotate" aria-hidden>
        <defs>
          <path id={id} d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
        </defs>
        <text fill="currentColor" style={{ fontFamily: 'var(--font-mono)', fontSize: 8.5, letterSpacing: '0.2em', textTransform: 'uppercase' }}>
          <textPath href={`#${id}`} textLength="235">{text}</textPath>
        </text>
      </svg>
      <div className="relative">{children}</div>
    </div>
  )
}
