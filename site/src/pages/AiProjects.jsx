import Field from '../components/Field'
import Pill from '../components/Pill'
import ZoomImage from '../components/ZoomImage'
import { projectMedia } from '../data/media'

const prototypes = [
  {
    title: 'Ebb',
    color: 'mint',
    href: 'https://shreyasinha1920-des.github.io/ebb-prototype/',
    body: 'An income app for freelancers with irregular income. Its core idea is “safe to spend”: what’s actually safe to spend right now once bills and savings are accounted for, since a bank balance alone doesn’t mean much without a steady paycheck.',
    built: 'Built in 10 days using 8 AI tools end to end: Claude for research; Uizard, Khroma, FontJoy, Midjourney and Relume for design; Cursor and GitHub Copilot for the plain HTML/CSS/JS build. Documented as a day-by-day build-in-public series on LinkedIn.',
  },
  {
    title: 'Alice, Lost — An Interactive 404',
    color: 'blush',
    href: 'https://alice-lost.vercel.app/',
    body: 'A 404 page told as a 23-page picture book. Alice’s Adventures in Wonderland, set in John Tenniel’s 1865 engravings and printed live in riso inks: turn the pages, drink the potion and the whole book shrinks, eat the cake and Alice grows right out of it, trace a golden thread to a door in a tree. However lost you got, the story ends by taking you somewhere real on this site.',
    built: 'Built with Claude Code in Vite and TypeScript with no framework: a WebGL riso press (halftone screens, overprint, misregistration) over a hand-made canvas brush library, GSAP for the page turns, Web Audio for a generative music box, and Tenniel’s public-domain plates cut out and hand-coloured in code.',
  },
  {
    title: 'Gravity Well — Black Hole Mission Hero',
    color: 'sky',
    href: 'https://gravity-well-hero-section.vercel.app/',
    body: "An interactive hero section built around a black hole. Move your cursor and it acts as a gravity source, bending a field of dust particles; scroll and the camera dollies into a raymarched black hole whose gravity gradually takes over from the cursor’s.",
    built: 'Built with Next.js, TypeScript and WebGPU, with a shader engine handling geodesic light-bending, an accretion disk with Doppler beaming and redshift, bloom, and adaptive quality tiers, plus a graceful static-starfield fallback for browsers without WebGPU.',
  },
  {
    title: 'Aurum — AI Portfolio Dashboard',
    color: 'orchid',
    href: 'https://aurum-ai-dashboard.vercel.app/',
    body: "A stock portfolio dashboard where the AI isn’t a chat bubble in the corner but part of the page. A Siri-style orb glows behind your portfolio value; ask a question, typed or spoken, and it comes forward to answer with charts, while the cards it’s talking about light up behind it.",
    built: 'Built with Claude Code in Next.js, TypeScript and GSAP, using SmoothUI’s Siri Orb and dither charts. Import your own holdings from a Zerodha export, CSV or PDF statement, read entirely in the browser, and every chart, stat and answer recalculates, in rupees against the Nifty 50 for Indian portfolios.',
  },
  {
    title: 'Safal AI',
    color: 'lavender',
    to: '/safal-ai',
    cta: 'Read the case study',
    body: 'An AI-powered internal platform for a US government contracting firm, putting years of contract data, employee expertise and performance history behind plain-English questions. Ask it to “summarize five contracts where technical assistance is a specific task” and it answers, with the contracts to back it up.',
    built: 'Designed end to end as the solo product designer: three AI tools (Past Performances, Resume AI and Verify Contracts), a conversational interface that cites its references, and role-based access for admins, editors and viewers.',
  },
]

export default function AiProjects() {
  const { hero, sections } = projectMedia['ai-projects']
  const imageFor = (title) => sections.find((s) => s.title === title)?.items[0]

  return (
    <>
      <Field field="lavender" className="pt-24 pb-section" aria-labelledby="ai-title">
        <div className="container-wild">
          <div className="grid gap-6 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <p className="eyebrow mb-3">Built with AI</p>
              <h1 id="ai-title" className="text-display-1 font-black">AI Projects</h1>
            </div>
            <p className="max-w-[34ch] text-display-5 md:col-span-5">
              Prototypes I design and build by working directly with AI tools, from first idea to a live, working demo. I add to this as I go.
            </p>
          </div>
          <div className="relative mt-16">
            <div aria-hidden className="absolute -inset-x-5 -top-5 bottom-10 rounded-card bg-field-mint" />
            <ZoomImage item={hero} alt={hero.alt} eager className="relative" imgClassName="w-full" />
          </div>
        </div>
      </Field>

      <Field field="cream" className="py-section">
        <ol className="container-wild flex flex-col gap-24">
          {prototypes.map((p, i) => {
            const flip = i % 2 === 1
            return (
              <li
                key={p.title}
                data-reveal="side"
                data-from={flip ? 'right' : 'left'}
                className="grid items-center gap-10 lg:grid-cols-12 lg:gap-6"
              >
                <div className={`relative lg:col-span-7 ${flip ? 'lg:order-2 lg:col-start-6' : ''}`}>
                  <div aria-hidden className={`absolute -inset-y-5 w-2/3 rounded-card ${flip ? '-right-5' : '-left-5'}`} style={{ background: `var(--field-${p.color})` }} />
                  <ZoomImage item={imageFor(p.title)} alt={imageFor(p.title)?.alt} className="relative" imgClassName="w-full" />
                </div>
                <div className={`lg:col-span-5 ${flip ? 'lg:order-1' : 'lg:col-start-8'}`}>
                  <span className="mb-3 block font-mono text-mono-sm">{String(i + 1).padStart(2, '0')}</span>
                  <h2 className="text-display-3">{p.title}</h2>
                  <p className="mt-5">{p.body}</p>
                  <p className="mt-4 text-small">{p.built}</p>
                  {p.to ? (
                    <Pill to={p.to} field={p.color} className="mt-8">
                      {p.cta}
                    </Pill>
                  ) : (
                    <Pill href={p.href} target="_blank" rel="noreferrer" field={p.color} className="mt-8">
                      {p.cta ?? 'Open prototype'}
                    </Pill>
                  )}
                </div>
              </li>
            )
          })}
        </ol>
      </Field>
    </>
  )
}
