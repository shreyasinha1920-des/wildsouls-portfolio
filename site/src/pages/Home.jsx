import { useRef } from 'react'
import ArchCard from '../components/ArchCard'
import ClientLogos from '../components/ClientLogos'
import Field from '../components/Field'
import Media from '../components/Media'
import Pill from '../components/Pill'
import Stamp from '../components/Stamp'
import WorkIndex from '../components/WorkIndex'
import { about, aiCard, clientsIntro, credentials, hero, process, skills, testimonials, workIntro } from '../data/home'
import { brand, projectMedia, skillIcons, testimonialPhotos } from '../data/media'
import { contact, projects } from '../data/projects'
import { COPY_IN, DURATION, gsap, LINES_IN, SplitText, useGSAP } from '../lib/motion'

export default function Home() {
  const featured = projects.filter((p) => p.featured)
  const more = projects.filter((p) => !p.featured).map((p) => ({ ...p, image: projectMedia[p.slug].card }))
  const heroRef = useRef(null)

  // Hero entrance. The headline leads, the portrait grows out of its arch beside
  // it, and the supporting copy and CTAs follow in reading order. Overlapping
  // starts keep the whole thing inside ~1.2s so it reads as one movement.
  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      const q = gsap.utils.selector(heroRef)

      mm.add(
        { reduce: '(prefers-reduced-motion: reduce)', full: '(prefers-reduced-motion: no-preference)' },
        (ctx) => {
          const { reduce } = ctx.conditions
          const supporting = [q('[data-hero="lede"]'), q('[data-hero="body"]'), q('[data-hero="cta"] > *')]

          // Reduced motion keeps the sequence, drops the travel.
          if (reduce) {
            gsap.from([q('[data-hero="title"]'), ...supporting.flat(), q('[data-hero="art"] > *')], {
              autoAlpha: 0,
              duration: 0.3,
              stagger: 0.05,
            })
            return
          }

          // autoSplit re-splits if Playfair lands late or the box is resized;
          // returning the timeline lets SplitText keep it in sync.
          SplitText.create(q('[data-hero="title"]'), {
            type: 'lines',
            mask: 'lines',
            autoSplit: true,
            onSplit(self) {
              const tl = gsap.timeline()
              return tl
                .from(self.lines, { ...LINES_IN }, 0)
                .from(q('[data-hero="disc"]'), { scale: 0.6, autoAlpha: 0, duration: DURATION.shape, ease: 'back.out(1.4)' }, 0.1)
                .from(
                  q('[data-hero="portrait"]'),
                  { scaleY: 0.92, autoAlpha: 0, duration: DURATION.shape, transformOrigin: 'bottom center' },
                  0.15,
                )
                .from(q('[data-hero="lede"]'), COPY_IN, 0.4)
                .from(q('[data-hero="body"]'), COPY_IN, 0.5)
                .from(q('[data-hero="cta"] > *'), { ...COPY_IN, stagger: 0.08 }, 0.6)
                .from(q('[data-hero="stamp"]'), { autoAlpha: 0, scale: 0.9, duration: DURATION.copy }, 0.75)
            },
          })
        },
      )
    },
    { scope: heroRef },
  )

  return (
    <>
      {/* ── Hero ── */}
      <Field field="terracotta" className="pt-24 pb-section" aria-labelledby="hero-title" ref={heroRef}>
        <div className="container-wild grid items-center gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            {/* split-safe: text-wrap: balance interferes with line splitting */}
            <h1 id="hero-title" data-hero="title" className="text-display-1 font-black [text-wrap:initial]">
              {hero.title}
            </h1>
            <p data-hero="lede" className="mt-8 max-w-[30ch] text-display-5">{hero.lede}</p>
            <p data-hero="body" className="mt-5 max-w-[60ch]">{hero.body}</p>
            <div data-hero="cta" className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
              <Pill href="#work">View my work</Pill>
              <a href={contact.resume} download={contact.resumeName} className="link-sweep link-sweep--on eyebrow">
                Download resume
              </a>
            </div>
          </div>

          <div data-hero="art" className="relative mx-auto w-full max-w-[400px] lg:col-span-5">
            <div data-hero="disc" aria-hidden className="absolute -top-8 -right-8 size-3/4 rounded-full bg-field-butter will-change-transform" />
            <div data-hero="portrait" className="relative overflow-hidden rounded-arch bg-field-lavender will-change-transform">
              <Media item={{ src: brand.portrait, width: 1254, height: 1254 }} alt="Portrait of Shreya Sinha" eager className="aspect-[4/5] w-full object-cover" />
            </div>
            <Stamp data-hero="stamp" text="5 years · Based in India · Open to work · " size={150} className="absolute -bottom-10 left-0 lg:-left-10">
              <span className="text-display-4 font-black">SS</span>
            </Stamp>
          </div>
        </div>
      </Field>

      {/* ── Clients ── */}
      <Field field="tangerine" className="py-20" aria-labelledby="clients-title">
        <div className="container-wild mb-12 grid gap-5 md:grid-cols-12 md:items-end">
          <h2 data-reveal id="clients-title" className="text-display-3 md:col-span-6">{clientsIntro.title}</h2>
          <p data-reveal className="max-w-[45ch] md:col-span-5 md:col-start-8">{clientsIntro.body}</p>
        </div>
        <ClientLogos />
      </Field>

      {/* ── Work ── */}
      <Field field="cream" id="work" className="py-section" aria-labelledby="work-title">
        <div className="container-wild">
          <div className="grid gap-5 md:grid-cols-12 md:items-end">
            <h2 data-reveal id="work-title" className="text-display-2 font-black md:col-span-7">{workIntro.title}</h2>
            <p data-reveal className="max-w-[45ch] md:col-span-4 md:col-start-9">{workIntro.body}</p>
          </div>

          <div data-reveal-group="0.12" className="mt-16 grid gap-x-6 gap-y-16 md:grid-cols-2 xl:grid-cols-3">
            {featured.map((p, i) => (
              <ArchCard key={p.slug} to={`/${p.slug}`} {...p} image={projectMedia[p.slug].card} eager={i === 0} />
            ))}
            <ArchCard to="/ai-projects" {...aiCard} image={projectMedia['ai-projects'].card} color="lavender" />
          </div>

          <h3 data-reveal className="eyebrow mt-24 mb-5">More work</h3>
          <WorkIndex items={more} />
        </div>
      </Field>

      {/* ── Testimonials ── */}
      <Field field="lavender" className="py-section" aria-labelledby="testimonials-title">
        <div className="container-wild">
          <div className="grid gap-5 md:grid-cols-12 md:items-end">
            <h2 data-reveal id="testimonials-title" className="text-display-2 font-black md:col-span-6">{testimonials.title}</h2>
            <p data-reveal className="max-w-[45ch] md:col-span-5 md:col-start-8">{testimonials.body}</p>
          </div>
          <div data-reveal-group="0.15" className="mt-16 grid gap-16 lg:grid-cols-2 lg:gap-6">
            {testimonials.quotes.map((q) => (
              <figure key={q.id} className="flex flex-col border-t border-ink pt-8">
                <blockquote className="flex-1">
                  <p className="text-display-4">“{q.pull}”</p>
                  <div className="mt-6 space-y-4 text-small">
                    {q.body.map((b) => <p key={b}>{b}</p>)}
                  </div>
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-4">
                  <Media item={{ src: testimonialPhotos[q.id], width: 500, height: 500 }} alt="" className="size-16 rounded-full object-cover" />
                  <span>
                    <span className="block text-display-5">{q.name}</span>
                    <span className="font-mono text-mono-sm uppercase">{q.role}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </Field>

      {/* ── About ── */}
      <Field field="blush" id="about" className="py-section" aria-labelledby="about-title">
        <div className="container-wild grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            {/* The hero crops this same portrait tall inside an arch; here it runs
                square and uncropped in the big-corner panel, so the two frames read
                as different treatments rather than a repeated picture. */}
            <div className="overflow-hidden rounded-corner-sm bg-field-terracotta lg:sticky lg:top-10 md:rounded-corner">
              <Media data-parallax="0.18" item={{ src: brand.portrait, width: 1254, height: 1254 }} alt="Shreya Sinha" className="aspect-square w-full scale-110 object-cover" />
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <h2 data-reveal id="about-title" className="text-display-2 font-black">{about.title}</h2>
            <div data-reveal-group="0.1" className="mt-8 space-y-5">
              {about.paragraphs.map((p) => <p key={p} className="max-w-[60ch]">{p}</p>)}
            </div>

            <h3 data-reveal className="eyebrow mt-16 mb-5">Skills</h3>
            <dl data-reveal-group="0.06" className="border-t border-ink">
              {skills.map((s) => (
                <div key={s.key} className="grid gap-3 border-b border-ink py-5 sm:grid-cols-[200px_1fr]">
                  <dt className="flex items-center gap-3 text-display-5">
                    <span className="grid size-10 shrink-0 place-items-center rounded-full bg-ink">
                      {/* icons ship in pale green: flatten to black, then invert to white on the ink disc */}
                      <img src={skillIcons[s.key]} alt="" width="20" height="20" className="size-5 [filter:brightness(0)_invert(1)]" />
                    </span>
                    {s.title}
                  </dt>
                  <dd className="text-small">{s.items.join(', ')}</dd>
                </div>
              ))}
            </dl>

            <h3 data-reveal className="eyebrow mt-16 mb-5">Education & certificates</h3>
            <ul data-reveal-group="0.06" className="space-y-3">
              {credentials.map((c) => (
                <li key={c.title}>
                  <span className="text-display-5">{c.title}</span>
                  <span className="block text-small">{c.by}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p data-words className="container-wild mt-section text-center text-display-1 font-black [text-wrap:initial]">
          {about.manifesto.map((line) => <span key={line} className="block">{line}</span>)}
        </p>
      </Field>

      {/* ── Process ── */}
      <Field field="terracotta" id="process" className="py-section" aria-labelledby="process-title">
        <div className="container-wild">
          <p data-reveal className="eyebrow mb-3">{process.eyebrow}</p>
          <h2 data-reveal id="process-title" className="max-w-[18ch] text-display-2 font-black">{process.title}</h2>
          <p data-reveal className="mt-6 max-w-[60ch]">{process.body}</p>

          <div className="mt-16 grid gap-16 lg:grid-cols-12 lg:gap-6">
            <section className="lg:col-span-4" aria-labelledby="ideal-title">
              <h3 id="ideal-title" className="mb-6 text-display-4">The ideal process</h3>
              <ol data-reveal-group="0.07" className="rounded-card bg-field-butter p-6">
                {process.ideal.map((s, i) => (
                  <li key={s.term} className="grid grid-cols-[30px_1fr] gap-3 border-b border-ink py-4 first:pt-0 last:border-0 last:pb-0">
                    <span className="font-mono text-mono-sm pt-1">{i + 1}</span>
                    <span>
                      <span className="block text-display-5">{s.term}</span>
                      <span className="text-small">{s.text}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </section>

            <section className="lg:col-span-7 lg:col-start-6" aria-labelledby="actual-title">
              <h3 id="actual-title" className="mb-6 text-display-4">How I actually work</h3>
              <ol data-reveal-group="0.09" className="border-t border-ink">
                {process.actual.map((s, i) => (
                  <li key={s.title} className="grid grid-cols-[45px_1fr] gap-3 border-b border-ink py-6">
                    <span className="font-mono text-mono-sm pt-2">{String(i + 1).padStart(2, '0')}</span>
                    <span>
                      <span className="block text-display-4">{s.title}</span>
                      <span className="mt-2 block max-w-[60ch]">{s.text}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </section>
          </div>
        </div>
      </Field>
    </>
  )
}
