import { useEffect, useId, useLayoutEffect, useRef, useState } from 'react'
import { fieldVar } from '../hooks/useBackgroundSwitcher'
import { altText } from '../lib/alt'
import Prose from './Prose'
import ZoomImage from './ZoomImage'

// Vertical tabs for a run of decisions/features that each have a screenshot:
// titles on the left, the chosen one's screenshot + copy on the right.
// One viewport tall instead of one row per item. Arrow keys move between tabs.
//
// Every panel is rendered into the same grid cell and cross-fades, so switching
// stays interruptible. The stack's height follows the active panel and animates
// to it, so the page neither jumps nor reserves a hole under the short ones.
export default function FeatureTabs({ items, imagesFor, accent, splitIndex }) {
  const [active, setActive] = useState(0)
  const [height, setHeight] = useState()
  const tabs = useRef([])
  const panels = useRef([])
  const id = useId()

  // Track the active panel's natural height, including late-loading images.
  useLayoutEffect(() => {
    const el = panels.current[active]
    if (!el) return
    const sync = () => setHeight(el.offsetHeight)
    sync()
    const ro = new ResizeObserver(sync)
    ro.observe(el)
    return () => ro.disconnect()
  }, [active])

  useEffect(() => {
    const onResize = () => setHeight(panels.current[active]?.offsetHeight)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [active])

  const onKeyDown = (e) => {
    const dir = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[e.key]
    if (!dir && e.key !== 'Home' && e.key !== 'End') return
    e.preventDefault()
    const next = e.key === 'Home' ? 0 : e.key === 'End' ? items.length - 1 : (active + dir + items.length) % items.length
    setActive(next)
    tabs.current[next]?.focus()
  }

  return (
    <div className="grid gap-6 lg:grid-cols-12">
      <div role="tablist" aria-orientation="vertical" className="flex flex-col border-t border-ink lg:col-span-4" onKeyDown={onKeyDown}>
        {items.map((it, i) => {
          const { index, title: t } = splitIndex(it.title)
          const selected = i === active
          return (
            <button
              key={it.title}
              ref={(el) => (tabs.current[i] = el)}
              role="tab"
              id={`${id}-tab-${i}`}
              aria-selected={selected}
              aria-controls={`${id}-panel-${i}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(i)}
              className={`grid grid-cols-[35px_1fr] items-baseline gap-2 border-b border-ink px-3 py-4 text-left transition-colors duration-fast ${selected ? 'bg-ink text-paper' : 'hover:bg-ink/10'}`}
            >
              <span className="font-mono text-mono-sm">{index || String(i + 1).padStart(2, '0')}</span>
              <span className="text-display-5">{t}</span>
            </button>
          )
        })}
      </div>

      <div
        className="grid overflow-hidden transition-[height] duration-base ease-quick lg:col-span-8"
        style={{ height }}
      >
        {items.map((item, i) => {
          const { title } = splitIndex(item.title)
          const imgs = imagesFor(item.title).filter((m) => m.role === 'image')
          const selected = i === active
          return (
            <div
              key={item.title}
              ref={(el) => (panels.current[i] = el)}
              role="tabpanel"
              id={`${id}-panel-${i}`}
              aria-labelledby={`${id}-tab-${i}`}
              inert={!selected}
              className={`col-start-1 row-start-1 flex h-fit flex-col gap-8 transition-opacity duration-base ease-quick ${
                selected ? 'opacity-100' : 'invisible opacity-0'
              }`}
            >
              {imgs.length > 0 && (
                <div className="relative self-start">
                  <div aria-hidden className="absolute -inset-3 rounded-card" style={{ background: fieldVar(accent) }} />
                  <div className={`relative grid gap-3 ${imgs.length > 1 ? 'grid-cols-2' : ''}`}>
                    {imgs.map((img) => (
                      <ZoomImage key={img.src} item={img} alt={altText(img, title)} className="bg-paper" imgClassName="max-h-[420px] w-full object-contain" />
                    ))}
                  </div>
                </div>
              )}
              <div>
                <h3 className="text-display-4">{title}</h3>
                <Prose blocks={item.blocks} className="mt-4" />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
