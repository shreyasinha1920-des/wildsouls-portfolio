import { Link } from 'react-router'
import { fieldVar } from '../hooks/useBackgroundSwitcher'

// Ink pill (or field-colored with `field`). The label runs like a marquee on hover.
export default function Pill({ to, href, field, children, className = '', ...rest }) {
  const cls = `pill ${field ? 'pill--field' : ''} ${className}`
  const style = field ? { background: fieldVar(field) } : undefined
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
