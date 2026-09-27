import { useRef } from 'react'
import { Link, useParams } from 'react-router'
import Carousel from '../components/Carousel'
import FeatureTabs from '../components/FeatureTabs'
import Field from '../components/Field'
import Media from '../components/Media'
import Pill from '../components/Pill'
import Prose from '../components/Prose'
import ZoomImage from '../components/ZoomImage'
import { caseStudies } from '../data/caseStudies'
import { projectMedia } from '../data/media'
import { getNextProject, getProject } from '../data/projects'
import { fieldVar } from '../hooks/useBackgroundSwitcher'
import { altText } from '../lib/alt'
import { COPY_IN, gsap, LINES_IN, SplitText, useGSAP } from '../lib/motion'
import NotFound from './NotFound'

const GALLERY = /^(screen highlights|key screens)$/i
// Pale fields get a saturated accent shape, saturated fields get a pale one,
// so the arch behind the hero always reads against its page.
const PALE = new Set(['cream', 'butter', 'sky', 'blush', 'orchid', 'lavender', 'pink'])
const accentFor = (color) => (PALE.has(color) ? 'terracotta' : 'butter')
const bodyLength = (it) => (it.blocks || []).reduce((n, b) => n + (b.text || b.list?.join(' ') || '').length, 0)

// "01 — Trust Architecture" → { index: '01', title: 'Trust Architecture' }
function splitIndex(title) {
  const m = title.match(/^(\d{1,2})\s*[—·–-]\s*(.+)$/)
  return m ? { index: m[1], title: m[2] } : { index: null, title }
}

export default function CaseStudy() {
  const { slug } = useParams()
  const project = getProject(slug)
  const cs = caseStudies[slug]
  if (!project || !cs) return <NotFound />
  return <CaseStudyBody key={slug} project={project} cs={cs} />
}

function CaseStudyBody({ project, cs }) {
  const media = projectMedia[project.slug]
  const imagesFor = (title) => media.sections.find((s) => s.title === title)?.items || []
  const next = getNextProject(project.slug)
  const accent = accentFor(project.color)
  const outcome = cs.sections.find((s) => s.title === 'Outcome')
  const body = cs.sections.filter((s) => s !== outcome)

  return (
    <article>
      <Header project={project} cs={cs} hero={media.hero} accent={accent} />

      <Field field={project.color} className="pb-section">
        <div className="flex flex-col gap-20">
          {body.map((s) =>
            GALLERY.test(s.title) ? (
              <GallerySection key={s.title} section={s} images={imagesFor(s.title)} />
            ) : (
              <Section key={s.title} section={s} imagesFor={imagesFor} accent={accent} />
            ),
          )}
        </div>
      </Field>

      {outcome && <Outcome section={outcome} field={accent} />}
      <NextProject next={next} />
    </article>
  )
}

function Header({ project, cs, hero, accent }) {
  const ref = useRef(null)

  // Half the length of the home hero: this plays on all ten case studies and on
  // every back-and-forth, so it introduces the page without holding it up.
  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      const q = gsap.utils.selector(ref)
      const supporting = [q('[data-cs="eyebrow"]'), q('[data-cs="hook"]'), q('[data-cs="tags"] > *')].flat()

      mm.add({ reduce: '(prefers-reduced-motion: reduce)', full: '(prefers-reduced-motion: no-preference)' }, (ctx) => {
        if (ctx.conditions.reduce) {
          gsap.from([q('[data-cs="title"]'), ...supporting, q('[data-cs="art"]')], {
            autoAlpha: 0,
            duration: 0.25,
            stagger: 0.04,
          })
          return
        }

        SplitText.create(q('[data-cs="title"]'), {
          type: 'lines',
          mask: 'lines',
          autoSplit: true,
          onSplit(self) {
            return gsap
              .timeline()
              .from(self.lines, { ...LINES_IN, duration: 0.55, stagger: 0.06 }, 0)
              .from(q('[data-cs="eyebrow"]'), { ...COPY_IN, duration: 0.4 }, 0.05)
              .from(q('[data-cs="art"]'), { scale: 0.96, autoAlpha: 0, duration: 0.6 }, 0.1)
              .from(q('[data-cs="hook"]'), { ...COPY_IN, duration: 0.4 }, 0.3)
              .from(q('[data-cs="tags"] > *'), { ...COPY_IN, duration: 0.35, stagger: 0.05 }, 0.4)
          },
        })
      })
    },
    { scope: ref },
  )

  return (
    <Field field={project.color} className="pt-24 pb-24" aria-labelledby="cs-title" ref={ref}>
      <div className="container-wild">
        <div className="grid items-center gap-16 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Link to="/#work" viewTransition className="link-sweep eyebrow mb-6 inline-block">
              ← All work
            </Link>
            <p data-cs="eyebrow" className="eyebrow mb-3">{cs.eyebrow === 'Project' ? 'Case study' : cs.eyebrow}</p>
            {/* split-safe: text-wrap: balance interferes with line splitting */}
            <h1 id="cs-title" data-cs="title" className="text-display-1 font-black [text-wrap:initial]">{cs.title}</h1>
            <p data-cs="hook" className="mt-6 max-w-[30ch] text-display-5">{cs.hook}</p>
            <ul data-cs="tags" className="mt-8 flex flex-wrap gap-2" aria-label="Project type">
              {cs.tags.map((t) => (
                <li key={t} className="rounded-pill border border-ink px-4 py-1 font-mono text-mono-sm uppercase">{t}</li>
              ))}
            </ul>
          </div>
          <div data-cs="art" className="relative will-change-transform lg:col-span-6">
            <div aria-hidden className="absolute inset-x-5 -top-10 bottom-10 rounded-arch" style={{ background: fieldVar(accent) }} />
            <ZoomImage item={hero} alt={`${cs.title} overview`} eager className="relative" imgClassName="w-full" />
          </div>
        </div>

        <dl className="mt-24 grid border-t border-ink sm:grid-cols-3">
          {cs.stats.map((s) => (
            <div key={s.value + s.label} className="flex flex-col-reverse border-b border-ink py-6 sm:border-b-0 sm:pr-6 sm:[&:not(:first-child)]:border-l sm:[&:not(:first-child)]:pl-6">
              <dt className="font-mono text-mono-sm uppercase">{s.label}</dt>
              <dd data-count className="text-display-2 font-black tabular-nums">{s.value}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-6 border-t border-ink pt-5 text-small">{cs.meta}</p>
      </div>
    </Field>
  )
}

// Default section: title pinned on the left, copy and media on the right.
function Section({ section, imagesFor, accent }) {
  const { index, title } = splitIndex(section.title)
  const images = imagesFor(section.title)
  const items = section.items || []
  const itemImages = items.map((it) => imagesFor(it.title))
  const bigImages = itemImages.map((imgs) => imgs.filter((i) => i.role === 'image'))
  const withBig = bigImages.filter((b) => b.length).length
  const mostHaveBig = withBig >= Math.max(2, Math.ceil(items.length / 2))
  const logoOnly = items.length > 0 && !withBig && itemImages.some((i) => i.length)
  const longBodies = items.length > 0 && items.reduce((n, it) => n + bodyLength(it), 0) / items.length > 220

  // Items that each carry a screenshot become full-width rows (long copy) or a card strip (short copy).
  if (mostHaveBig && longBodies) return <FeatureRows section={section} title={title} imagesFor={imagesFor} accent={accent} />
  if (mostHaveBig) return <CardStrip section={section} title={title} imagesFor={imagesFor} />

  // Otherwise a stray item screenshot joins the section's own images, below the cards.
  const extraImages = [...images, ...bigImages.flat()]

  return (
    <section className="container-wild grid gap-8 lg:grid-cols-12 lg:gap-6" aria-label={title}>
      <SectionTitle index={index} title={title} className="lg:col-span-4" sticky />
      <div className="lg:col-span-8">
        {section.statement && <p className="max-w-[26ch] text-display-3">{section.statement}</p>}
        <Prose blocks={section.blocks} />
        {items.length > 0 && (logoOnly ? <LogoCards items={items} imagesFor={imagesFor} /> : <TextCards items={items} />)}
        {extraImages.length > 0 && <SectionImages images={extraImages} title={title} />}
        <Links links={section.links} />
      </div>
    </section>
  )
}

function SectionTitle({ index, title, className = '', sticky = false }) {
  return (
    <div className={className}>
      <h2 data-reveal className={`text-display-3 ${sticky ? 'lg:sticky lg:top-10' : ''}`}>
        {index && <span className="mb-2 block font-mono text-mono-sm">{index}</span>}
        {title}
      </h2>
    </div>
  )
}

function SectionImages({ images, title }) {
  // One image keeps its own proportions; several share a grid on a paper mat.
  if (images.length === 1) {
    const [img] = images
    return (
      <ZoomImage
        item={img}
        alt={altText(img, title)}
        className="mt-10 w-fit"
        imgClassName="max-h-[420px] w-auto max-w-full"
        data-parallax="0.12"
      />
    )
  }
  const cols = images.length === 2 ? 'sm:grid-cols-2' : 'sm:grid-cols-3'
  return (
    <div className={`mt-10 grid gap-5 ${cols}`}>
      {images.map((img) => (
        <ZoomImage key={img.src} item={img} alt={altText(img, title)} className="bg-paper" imgClassName="max-h-[480px] w-full object-contain" />
      ))}
    </div>
  )
}

function LogoCards({ items, imagesFor }) {
  return (
    <ul data-reveal-group="0.07" className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {items.map((it) => {
        const logo = imagesFor(it.title).find((i) => i.role === 'logo')
        return (
          <li key={it.title} className="border-t border-ink pt-5">
            <div className="flex items-center gap-4">
              {/* The paper disc sits behind the logo only: most of these marks are
                  brand-colored, so they need a light backing to stay legible.
                  No logo (FontJoy has none on the source site) → a lettermark,
                  so the row still lines up with its neighbours. */}
              <span className="grid size-14 shrink-0 place-items-center rounded-full bg-paper">
                {logo ? (
                  <Media item={logo} alt={altText(logo, it.title)} className="size-9 object-contain" />
                ) : (
                  <span aria-hidden className="font-mono text-display-5">{it.title.charAt(0)}</span>
                )}
              </span>
              <h3 className="text-display-5">{it.title}</h3>
            </div>
            <Prose blocks={it.blocks} className="mt-4 text-small" />
            {it.link && <a href={it.link.href} target="_blank" rel="noreferrer" className="link-sweep eyebrow mt-4">{it.link.label}</a>}
          </li>
        )
      })}
    </ul>
  )
}

function TextCards({ items }) {
  return (
    <ul data-reveal-group="0.07" className={`mt-10 grid gap-x-6 border-t border-ink ${items.length > 1 ? 'sm:grid-cols-2' : ''}`}>
      {items.map((it) => {
        const { index, title } = splitIndex(it.title)
        return (
          <li key={it.title} className="border-b border-ink py-6">
            {index && <span className="mb-2 block font-mono text-mono-sm">{index}</span>}
            <h3 className="text-display-5">{title}</h3>
            <Prose blocks={it.blocks} className="mt-3 text-small" />
          </li>
        )
      })}
    </ul>
  )
}

// Decisions and features with long copy: alternating text / screenshot rows.
function FeatureRows({ section, title, imagesFor, accent }) {
  return (
    <section className="container-wild" aria-label={title}>
      <SectionTitle title={title} className="mb-12 max-w-[600px]" />
      <Prose blocks={section.blocks} className="mb-12" />
      {section.items.length >= 3 && (
        <div className="hidden lg:block">
          <FeatureTabs items={section.items} imagesFor={imagesFor} accent={accent} splitIndex={splitIndex} />
        </div>
      )}
      <ol className={`flex flex-col gap-20 ${section.items.length >= 3 ? 'lg:hidden' : ''}`}>
        {section.items.map((it, i) => {
          const { index, title: itemTitle } = splitIndex(it.title)
          const imgs = imagesFor(it.title).filter((m) => m.role === 'image')
          const flip = i % 2 === 1
          return (
            <li
              key={it.title}
              data-reveal="side"
              data-from={flip ? 'right' : 'left'}
              className="grid items-center gap-10 lg:grid-cols-12 lg:gap-6"
            >
              <div className={`lg:col-span-5 ${flip ? 'lg:order-2 lg:col-start-8' : ''}`}>
                <span className="mb-3 block font-mono text-mono-sm">{index || String(i + 1).padStart(2, '0')}</span>
                <h3 className="text-display-4">{itemTitle}</h3>
                <Prose blocks={it.blocks} className="mt-5" />
              </div>
              {imgs.length > 0 && (
                <div className={`relative lg:col-span-7 ${flip ? 'lg:order-1' : 'lg:col-start-6'}`}>
                  <div aria-hidden className={`absolute -inset-y-5 w-2/3 rounded-card ${flip ? '-left-5' : '-right-5'}`} style={{ background: fieldVar(accent) }} />
                  <div className={`relative grid gap-3 ${imgs.length > 1 ? 'grid-cols-2' : ''}`}>
                    {imgs.map((img) => (
                      <ZoomImage key={img.src} item={img} alt={altText(img, itemTitle)} className="bg-paper" imgClassName="max-h-[440px] w-full object-contain" />
                    ))}
                  </div>
                </div>
              )}
            </li>
          )
        })}
      </ol>
    </section>
  )
}

// Short-copy items with a screenshot each (variants, brands, features): one scrolling strip.
function CardStrip({ section, title, imagesFor }) {
  return (
    <section aria-label={title}>
      <div className="container-wild mb-10 grid gap-6 lg:grid-cols-12">
        <SectionTitle title={title} className="lg:col-span-4" />
        <Prose blocks={section.blocks} className="lg:col-span-8" />
      </div>
      <ul className="carousel" tabIndex={0} role="region" aria-label={`${title}, scrollable`}>
        {section.items.map((it) => {
          const img = imagesFor(it.title).find((m) => m.role === 'image')
          const tall = img && img.height > img.width
          return (
            <li key={it.title} className={tall ? 'w-[300px]' : 'w-[340px] md:w-[440px]'}>
              {img && <ZoomImage item={img} alt={altText(img, it.title)} className="bg-paper" imgClassName={`w-full object-cover object-top ${tall ? 'aspect-[4/5]' : 'aspect-[16/10]'}`} />}
              <h3 className="mt-5 text-display-5">{it.title}</h3>
              <Prose blocks={it.blocks} className="mt-2 text-small" />
              {it.link && <a href={it.link.href} target="_blank" rel="noreferrer" className="link-sweep eyebrow mt-3">{it.link.label}</a>}
            </li>
          )
        })}
      </ul>
    </section>
  )
}

function GallerySection({ section, images }) {
  if (!images.length) return null
  return (
    <section aria-label={section.title}>
      <div className="container-wild mb-8">
        <SectionTitle title={section.title} />
        <Prose blocks={section.blocks} className="mt-5" />
      </div>
      <Carousel items={images} label={section.title} />
    </section>
  )
}

function Links({ links }) {
  if (!links?.length) return null
  return (
    <ul className="mt-8 flex flex-wrap gap-6">
      {links.map((l) => (
        <li key={l.href}>
          <a href={l.href} target="_blank" rel="noreferrer" className="link-sweep link-sweep--on eyebrow">{l.label}</a>
        </li>
      ))}
    </ul>
  )
}

function Outcome({ section, field }) {
  return (
    <Field field={field} className="py-section" aria-labelledby="outcome-title">
      <div className="container-wild grid gap-8 lg:grid-cols-12 lg:gap-6">
        <h2 id="outcome-title" className="text-display-2 font-black lg:col-span-4">Outcome</h2>
        <div className="lg:col-span-8">
          {section.blocks.map((b, i) =>
            b.list ? (
              <ul key={i} data-reveal-group="0.12" className="border-t border-ink">
                {b.list.map((li) => <li key={li} className="border-b border-ink py-5 text-display-5">{li}</li>)}
              </ul>
            ) : (
              <p key={i} data-reveal className="mb-5 max-w-[40ch] text-display-5 last:mb-0">{b.text}</p>
            ),
          )}
          <Links links={section.links} />
        </div>
      </div>
    </Field>
  )
}

// The page tints to the next project's color as you reach it: a cue to keep going.
function NextProject({ next }) {
  const card = projectMedia[next.slug].card
  return (
    <Field field={next.color} className="py-section">
      <div className="group container-wild grid items-center gap-10 md:grid-cols-12">
        <div className="md:col-span-7">
          <p className="eyebrow mb-3">Next case study</p>
          <Link to={`/${next.slug}`} viewTransition className="text-display-1 font-black">
            <span className="link-sweep">{next.title}</span>
          </Link>
          <p className="mt-5 max-w-[50ch]">{next.summary}</p>
          {/* Forward is the default, but the way out of the loop is right beside it. */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Pill to={`/${next.slug}`}>Read case study</Pill>
            <Pill to="/#work" ghost>See all projects</Pill>
          </div>
        </div>
        <Link to={`/${next.slug}`} viewTransition aria-hidden tabIndex={-1} className="md:col-span-5">
          <Media data-parallax="0.15" item={card} alt="" className="aspect-[5/2] w-full rounded-card object-cover object-top transition-transform duration-base ease-spring group-hover:-translate-y-2 group-active:-translate-y-0.5" />
        </Link>
      </div>
    </Field>
  )
}
