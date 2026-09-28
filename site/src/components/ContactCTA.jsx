import { contact } from '../data/projects'
import Field from './Field'
import Pill from './Pill'
import Stamp from './Stamp'

// Closing call to action, shared by every page.
export default function ContactCTA({ field = 'tangerine' }) {
  return (
    <Field field={field} id="contact" className="py-section" aria-labelledby="contact-title">
      <div className="container-wild grid items-center gap-12 lg:grid-cols-[1fr_auto]">
        <div>
          <h2 id="contact-title" className="max-w-[12ch] text-display-1 font-black">Let’s build something worth using.</h2>
          <p className="mt-8 max-w-[45ch] text-lead">
            I’m open to full-time roles in product design, UI/UX and product management, plus select freelance projects. If you have something interesting, let’s talk.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
            <Pill href={`mailto:${contact.email}`}>Send email</Pill>
            <a href={contact.linkedin} target="_blank" rel="noreferrer" className="link-sweep eyebrow">LinkedIn</a>
            <a href={contact.resume} target="_blank" rel="noreferrer" className="link-sweep eyebrow">Resume</a>
          </div>
        </div>
        <Stamp text="Say hello · Say hello · Say hello · " size={200} className="hidden lg:grid">
          <span className="text-display-3 font-black">Hi</span>
        </Stamp>
      </div>
    </Field>
  )
}
