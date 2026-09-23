# Shreya Sinha, portfolio

Portfolio for [shreyasinha.co.in](https://shreyasinha.co.in), rebuilt in a new visual language:
full-bleed color fields, a heavy display serif, tracked monospace UI text, arches and pills.

## Stack

React 19 + Vite + Tailwind v4, React Router. No CMS: content lives in `site/src/data/`.

## Layout

```
design-system/      Design tokens: tokens.css (source of truth), tailwind.config.js, design-tokens.md
site/               The app
  src/data/         Content: home.js, caseStudies.js, projects.js, media.js
  src/components/   Field, Stamp, Pill, Carousel, FeatureTabs, Lightbox, …
  public/images/    Brand, clients, and per-project images
sitemap.md          Page and section map of the original site
```

## Running it

```bash
npm install --prefix site
npm run dev --prefix site
```

`npm run build --prefix site` writes the production build to `site/dist/`.

## Design system

`design-system/tokens.css` holds every color, type size, spacing step, radius and motion
token; `tailwind.config.js` reads from it, so class names can only produce on-system values.
`design-tokens.md` documents the system and records where the automated extraction was wrong.
