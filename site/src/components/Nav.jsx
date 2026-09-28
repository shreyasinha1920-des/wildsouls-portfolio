import { Link, useLocation } from 'react-router'
import { brand } from '../data/media'
import Stamp from './Stamp'

const left = [
  { label: 'Work', to: '/#work' },
  { label: 'About', to: '/#about' },
]
const right = [
  { label: 'Process', to: '/#process' },
  { label: 'Contact', to: '#contact' },
]

const NavLinks = ({ links, className, current }) => (
  <ul className={`flex gap-8 ${className}`}>
    {links.map((l) => (
      <li key={l.label}>
        <Link
          to={l.to}
          viewTransition
          aria-current={l.to === current ? 'page' : undefined}
          className={`link-sweep eyebrow ${l.to === current ? 'link-sweep--on' : ''}`}
        >
          {l.label}
        </Link>
      </li>
    ))}
  </ul>
)

// Links split around a centered logo stamp; the rule under the row breaks for it.
export default function Nav() {
  const { pathname, hash } = useLocation()
  const current = pathname === '/' ? `/${hash}` : null

  return (
    <header className="relative z-10">
      <p className="bg-ink px-5 py-3 text-center text-small text-paper [padding-top:max(15px,env(safe-area-inset-top))]">
        Open to Product Design, UI/UX and Product Manager roles, plus select freelance projects.
      </p>
      <nav aria-label="Main" className="relative">
        <div className="container-wild grid grid-cols-[1fr_auto_1fr] items-center gap-5 pt-5 pb-5 md:pb-0">
          <NavLinks links={left} current={current} className="hidden md:flex" />
          <Link to="/" viewTransition aria-label="Shreya Sinha, home" className="col-start-2 md:-mb-14">
            <Stamp text="Shreya Sinha · Product Designer · " size={110} tone="paper">
              <img src={brand.logo} alt="" width="45" height="45" className="size-9 rounded-xs" />
            </Stamp>
          </Link>
          <NavLinks links={right} current={current} className="hidden justify-end md:flex" />
        </div>
        <NavLinks links={[...left, ...right]} current={current} className="container-wild flex-wrap justify-center gap-y-2 pb-5 md:hidden" />
        <div aria-hidden className="absolute inset-x-0 top-[68px] -z-10 hidden md:block">
          <div className="flex">
            <span className="h-px flex-1 bg-ink" />
            <span className="w-[140px]" />
            <span className="h-px flex-1 bg-ink" />
          </div>
        </div>
      </nav>
    </header>
  )
}
