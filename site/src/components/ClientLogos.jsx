import { clients } from '../data/media'

// Client logos as an endless ticker. The PNGs have opaque white backgrounds:
// grayscale + high contrast pushes the mark to ink, and multiply (on the animated
// row, which is its own stacking context) drops the white against the page color,
// so they sit on any field color.
export default function ClientLogos() {
  const row = [...clients, ...clients] // two copies → seamless -50% loop

  return (
    <div className="group overflow-hidden" aria-label="Clients">
      <ul className="flex w-max animate-ticker items-center gap-12 mix-blend-multiply group-hover:[animation-play-state:paused]">
        {row.map((c, i) => (
          <li key={i} aria-hidden={i >= clients.length || undefined}>
            <img
              src={c.src}
              alt={i < clients.length ? c.name : ''}
              width="160"
              height="160"
              loading="lazy"
              className="size-30 object-contain [filter:grayscale(1)_brightness(0.7)_contrast(10)]"
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
