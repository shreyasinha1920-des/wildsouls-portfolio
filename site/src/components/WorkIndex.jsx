import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { fieldVar } from '../hooks/useBackgroundSwitcher'
import Media from './Media'

// Compact ruled index of projects. On hover-capable pointers a preview follows
// the cursor; keyboard focus parks the same preview beside the focused row, so
// tabbing through the list shows what clicking would open. On touch, each row
// carries its image inline.
export default function WorkIndex({ items }) {
  const [active, setActive] = useState(null)
  const preview = useRef(null)

  const placeAt = (x, y) => {
    if (preview.current) preview.current.style.transform = `translate(${Math.round(x)}px, ${Math.round(y)}px)`
  }
  const move = (e) => placeAt(e.clientX + 30, e.clientY - 100)
  const follow = (p) => (e) => {
    // Park the preview at the right edge of the focused row.
    const r = e.currentTarget.getBoundingClientRect()
    placeAt(Math.min(r.right - 380, window.innerWidth - 380), r.top)
    setActive(p)
  }

  return (
    <div onPointerMove={move} onPointerLeave={() => setActive(null)}>
      <ul className="border-t border-ink">
        {items.map((p) => (
          <li key={p.slug} className="border-b border-ink">
            <Link
              to={`/${p.slug}`}
              viewTransition
              onPointerEnter={(e) => e.pointerType === 'mouse' && setActive(p)}
              onFocus={follow(p)}
              onBlur={() => setActive(null)}
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
        className="pointer-events-none fixed top-0 left-0 z-20 hidden w-[360px] [@media(hover:hover)]:block"
      >
        <div
          className={`rounded-card p-3 transition-[opacity,scale] duration-base ease-spring ${active ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}
          style={{ background: active ? fieldVar(active.color) : 'transparent' }}
        >
          {active && <Media item={active.image} alt="" eager className="aspect-[5/2] w-full rounded-card object-cover object-top" />}
        </div>
      </div>
    </div>
  )
}
