// The live site's alt text is inconsistent ("wix-image", "claude_logo", "icon", "demo-image").
// Normalise it, falling back to the section title the image belongs to.
const PLACEHOLDER = /^(demo|default|image|img)$/i

export function altText(item, context = '') {
  const raw = (item.alt || '').trim()
  if (/^icon$/i.test(raw)) return '' // decorative pain-point icons: the heading next to them says it all

  const cleaned = raw
    .replace(/[-_ ]?(image|images|img|logo|icon)$/i, '')
    .replace(/[-_]+/g, ' ')
    .trim()

  const base = !cleaned || PLACEHOLDER.test(cleaned) ? context : cleaned
  return item.role === 'logo' ? `${base} logo` : base
}
