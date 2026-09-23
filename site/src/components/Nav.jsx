import { Link } from 'react-router'
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

const NavLinks = ({ links, className }) => (
  <ul className={`flex gap-8 ${className}`}>
    {links.map((l) => (
      <li key={l.label}>
        <Link to={l.to} className="link-sweep eyebrow">{l.label}</Link>
      </li>
    ))}
  </ul>
)

// Links split around a centered logo stamp; the rule under the row breaks for it.
export default function Nav() {
  return (
    <header className="relative z-10">
      <p className="bg-ink px-5 py-3 text-center text-small text-paper">
        Open to full-time Product Designer roles and select freelance projects.
      </p>
      <nav aria-label="Main" className="relative">
        <div className="container-wild grid grid-cols-[1fr_auto_1fr] items-center gap-5 pt-5 pb-5 md:pb-0">
          <NavLinks links={left} className="hidden md:flex" />
          <Link to="/" aria-label="Shreya Sinha, home" className="col-start-2 md:-mb-14">
            <Stamp text="Shreya Sinha · Product Designer · " size={110} tone="paper">
              <img src={brand.logo} alt="" width="45" height="45" className="size-9 rounded-xs" />
            </Stamp>
          </Link>
          <NavLinks links={right} className="hidden justify-end md:flex" />
        </div>
        <NavLinks links={[...left, ...right]} className="container-wild flex-wrap justify-center gap-y-2 pb-5 md:hidden" />
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
