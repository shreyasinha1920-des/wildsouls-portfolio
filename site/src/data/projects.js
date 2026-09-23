// Case-study index. Order = the "next project" chain (last loops to first).
// `color` is the project's field color token (see design-system/tokens.css).
// Case-study copy lives in caseStudies.js; images in media.js.
export const projects = [
  {
    slug: 'vitalsthailand',
    title: 'Vitals Thailand',
    color: 'tangerine',
    featured: true,
    tags: ['E-commerce', 'Healthcare', 'Web & Mobile', 'UX Redesign'],
    summary: "A full end-to-end redesign of a Bangkok-based health supplement platform — transforming an untrustworthy infinite scroll into a complete, trusted e-commerce experience with AI-powered wellness guidance.",
    outcome: "Live and serving customers across Thailand.",
  },
  {
    slug: 'rocketpages-project',
    title: 'RocketPages',
    color: 'poppy',
    featured: true,
    tags: ['SaaS', 'Web Application', 'Design System', 'Branding'],
    summary: "Designed a no-code website builder from the ground up — brand identity, UX, component library, and editor interface.",
    outcome: "Live platform, used by real businesses across Africa.",
  },
  {
    slug: 'earthly-lunar',
    title: 'Earthly Lunar',
    color: 'jade',
    tags: ['Enterprise', 'Developer Tools', 'Web Application'],
    summary: "A microservice health monitoring dashboard for large engineering organizations — dual-audience design serving both high-level management views and deep developer insights.",
  },
  {
    slug: 'rootwords-project',
    title: 'RootWords',
    color: 'butter',
    tags: ['Mobile App', 'EdTech', 'Gamification', 'Branding'],
    summary: "Turned complex medical vocabulary into an addictive word-spinning game — making Latin and Greek roots feel like play, not study.",
  },
  {
    slug: 'safal-ai',
    title: 'Safal AI',
    color: 'lavender',
    tags: ['Enterprise', 'AI-Powered', 'SaaS', 'Internal Tool'],
    summary: "An AI-powered intelligence platform for a US government contracting firm — search past performance contracts, surface employee expertise, and verify contract data through a conversational AI interface.",
  },
  {
    slug: 'herstories',
    title: 'HerStories',
    color: 'orchid',
    tags: ['Mobile App', 'Entertainment', 'Social'],
    summary: "An interactive reading app for young women — customizable avatars, branching narratives, and a social community built around stories that feel personal.",
  },
  {
    slug: 'eightfold-career-pages',
    title: 'Eightfold Career Pages',
    color: 'sky',
    tags: ['Enterprise', 'Brand-Matched Design', 'Live Work'],
    summary: "Career pages for Fortive, Dexcom, 10x Genomics, Ralliant and Booking Holdings — each brand's identity translated into a tailored hiring experience within platform constraints.",
    outcome: "5 live career pages, used for hiring today.",
  },
  {
    slug: 'pdf-to-web',
    title: 'PDF to Web',
    color: 'blush',
    tags: ['Web Experience', 'Content Design', 'Enterprise'],
    summary: "Converted gated MuleSoft PDF content into an engaging web experience — preserving SEO, user tracking, and engagement goals while making the content genuinely readable.",
    outcome: "Validated through user testing before the project paused post-acquisition.",
  },
  {
    slug: 'redcrackle',
    title: 'RedCrackle',
    color: 'brick',
    tags: ['Agency Website', 'Brand Identity', 'Digital Transformation'],
    summary: "Full brand identity and website for a digital transformation agency — from logo and visual system through to a conversion-focused web presence.",
    outcome: "Live at redcrackle.com, pitching Fortune 500 clients daily.",
  },
  {
    slug: 'ebb',
    title: 'Ebb',
    color: 'mint',
    tags: ['Fintech', 'Mobile App', 'AI-Augmented Design'],
    summary: "A smart money flow app for freelancers, designed in 10 days using 8 AI tools. A live experiment in AI-augmented product design.",
  },
]

export const getProject = (slug) => projects.find((p) => p.slug === slug)

export const getNextProject = (slug) => {
  const i = projects.findIndex((p) => p.slug === slug)
  return projects[(i + 1) % projects.length]
}

export const contact = {
  email: 'hello@shreyasinha.co.in',
  resume: 'https://drive.google.com/drive/folders/16VVJrjuPeVmmJaebISHGY5LBlZ1i8sXF?usp=drive_link',
  linkedin: 'https://linkedin.com/in/shreyasinhadesigns/',
  behance: 'https://behance.net/shreyasinha1920',
}
