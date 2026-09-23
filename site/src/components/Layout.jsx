import { Outlet, ScrollRestoration, useLocation } from 'react-router'
import { getNextProject, getProject } from '../data/projects'
import { useBackgroundSwitcher } from '../hooks/useBackgroundSwitcher'
import ContactCTA from './ContactCTA'
import Footer from './Footer'
import { LightboxProvider } from './Lightbox'
import Nav from './Nav'

export default function Layout() {
  useBackgroundSwitcher()
  const { pathname } = useLocation()

  // A case study ends on the next project's color; never let the contact band repeat it.
  const slug = pathname.slice(1)
  const contactField = getProject(slug) && getNextProject(slug).color === 'tangerine' ? 'butter' : 'tangerine'

  return (
    <LightboxProvider>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-5 focus:left-5 focus:z-50 focus:rounded-pill focus:bg-paper focus:px-5 focus:py-3">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Outlet />
      </main>
      <ContactCTA field={contactField} />
      <Footer />
      <ScrollRestoration />
    </LightboxProvider>
  )
}
