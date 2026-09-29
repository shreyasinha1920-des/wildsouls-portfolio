import { contact } from '../data/projects'
import Field from './Field'

// Lines lifted from the "How I work" copy, run as the footer ticker.
const mottos = ['Context before canvas', 'Structure before surface', 'First draft, fast', 'Every pixel has a reason', 'Developers are partners']

function Spark() {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" aria-hidden className="shrink-0">
      <path d="M15 0c1 9 6 14 15 15-9 1-14 6-15 15-1-9-6-14-15-15 9-1 14-6 15-15Z" fill="currentColor" />
    </svg>
  )
}

export default function Footer() {
  const run = [...mottos, ...mottos]
  return (
    <Field as="footer" field="terracotta" className="pt-24">
      <div className="container-wild grid gap-10 md:grid-cols-2">
        <div>
          <p className="eyebrow mb-3">Write to me</p>
          <a href={`mailto:${contact.email}`} className="link-sweep text-display-3">{contact.email}</a>
        </div>
        <ul className="flex flex-wrap gap-x-8 gap-y-3 md:justify-end md:self-end">
          <li><a href={contact.linkedin} target="_blank" rel="noreferrer" className="link-sweep eyebrow">LinkedIn</a></li>
          <li><a href={contact.behance} target="_blank" rel="noreferrer" className="link-sweep eyebrow">Behance</a></li>
          <li><a href={contact.resume} download={contact.resumeName} className="link-sweep eyebrow">Resume</a></li>
        </ul>
      </div>

      <div className="mt-24 overflow-hidden border-y border-ink py-5" aria-hidden>
        <div data-loop className="flex w-max animate-ticker items-center gap-10">
          {run.map((m, i) => (
            <span key={i} className="flex items-center gap-10 text-display-4 whitespace-nowrap">
              {m} <Spark />
            </span>
          ))}
        </div>
      </div>

      <p className="container-wild py-8 font-mono text-mono-sm uppercase [padding-bottom:max(40px,env(safe-area-inset-bottom))]">
        © {new Date().getFullYear()} Shreya Sinha · The Subtle Things
      </p>
    </Field>
  )
}
