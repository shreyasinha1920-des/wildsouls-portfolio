import { Link } from 'react-router'
import { fieldVar } from '../hooks/useBackgroundSwitcher'
import Media from './Media'

// Arch card: a field-colored arch with the screenshot layered over it,
// then title, tags, summary and the outcome line.
export default function ArchCard({ to, title, tags = [], summary, outcome, image, color, eager = false }) {
  return (
    <Link to={to} className="group flex flex-col">
      <div className="relative px-5 pt-14">
        <div aria-hidden className="absolute inset-x-0 top-0 bottom-10 rounded-arch" style={{ background: fieldVar(color) }} />
        <Media
          item={image}
          alt=""
          eager={eager}
          className="relative aspect-[5/2] w-full rounded-card object-cover object-top transition-transform duration-base ease-move group-hover:-translate-y-2"
        />
      </div>
      <h3 className="mt-6 text-display-4">
        <span className="link-sweep">{title}</span>
      </h3>
      <p className="mt-2 font-mono text-mono-sm uppercase">{tags.join(' / ')}</p>
      {summary && <p className="mt-4 text-small">{summary}</p>}
      {outcome && <p className="mt-4 border-t border-ink pt-3 text-small font-medium">{outcome}</p>}
    </Link>
  )
}
