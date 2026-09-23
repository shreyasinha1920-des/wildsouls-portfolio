import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { fieldVar } from '../hooks/useBackgroundSwitcher'
import Media from './Media'

// Compact ruled index of projects. On hover-capable pointers, a preview of the
// project floats with the cursor; on touch, each row shows its image inline.
export default function WorkIndex({ items }) {
  const [active, setActive] = useState(null)
  const preview = useRef(null)
  const move = (e) => {
    if (preview.current) preview.current.style.transform = `translate(${e.clientX + 30}px, ${e.clientY - 100}px)`
  }

  return (
    <div onPointerMove={move} onPointerLeave={() => setActive(null)}>
      <ul className="border-t border-ink">
        {items.map((p) => (
          <li key={p.slug} className="border-b border-ink">
            <Link
              to={`/${p.slug}`}
              onPointerEnter={(e) => e.pointerType === 'mouse' && setActive(p)}
              onFocus={() => setActive(null)}
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
          className={`rounded-card p-3 transition-[opacity,scale] duration-base ease-out ${active ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}
          style={{ background: active ? fieldVar(active.color) : 'transparent' }}
        >
          {active && <Media item={active.image} alt="" eager className="aspect-[5/2] w-full rounded-card object-cover object-top" />}
        </div>
      </div>
    </div>
  )
}
