import { clients } from '../data/media'

// Client logos as an endless ticker.
//
// The source PNGs are full-colour on opaque white. `logo-ink` flattens them to
// ink: desaturate, then a steep ramp that only keeps near-white as white, so a
// mid-tone brand colour (Booking Holdings' cyan, Fortive's green) lands on black
// instead of washing out. Multiply on the moving row then drops the white,
// leaving the mark sitting directly on whatever field colour is behind it.
function InkFilter() {
  return (
    <svg aria-hidden className="absolute size-0" focusable="false">
      <filter id="logo-ink" colorInterpolationFilters="sRGB">
        <feColorMatrix type="saturate" values="0" />
        <feComponentTransfer>
          <feFuncR type="linear" slope="8" intercept="-6.6" />
          <feFuncG type="linear" slope="8" intercept="-6.6" />
          <feFuncB type="linear" slope="8" intercept="-6.6" />
        </feComponentTransfer>
      </filter>
    </svg>
  )
}

export default function ClientLogos() {
  const row = [...clients, ...clients] // two copies → seamless -50% loop

  return (
    <div className="group overflow-hidden" role="group" aria-label="Clients">
      <InkFilter />
      <ul data-loop className="flex w-max animate-ticker items-center gap-12 mix-blend-multiply group-hover:[animation-play-state:paused]">
        {row.map((c, i) => (
          <li key={i} aria-hidden={i >= clients.length || undefined}>
            <img
              src={c.src}
              alt={i < clients.length ? c.name : ''}
              width="160"
              height="160"
              loading="lazy"
              className="size-30 object-contain [filter:url(#logo-ink)]"
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
