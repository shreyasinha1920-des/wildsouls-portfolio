import { Link } from 'react-router'
import { fieldVar } from '../hooks/useBackgroundSwitcher'

// Ink pill: `field` fills it with a page colour, `ghost` leaves it an outline for
// a secondary action. The label runs like a marquee on hover.
export default function Pill({ to, href, field, ghost, children, className = '', ...rest }) {
  const cls = `pill ${ghost ? 'pill--ghost' : ''} ${field ? 'pill--field' : ''} ${className}`
  const style = field && !ghost ? { background: fieldVar(field) } : undefined
  const label = (
    <span className="pill__inner">
      <span className="pill__text">{children}</span>
      <span className="pill__text pill__clone" aria-hidden>
        {children}
      </span>
    </span>
  )

  if (to) return <Link to={to} viewTransition className={cls} style={style} {...rest}>{label}</Link>
  return <a href={href} className={cls} style={style} {...rest}>{label}</a>
}
