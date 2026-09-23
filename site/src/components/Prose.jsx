// Renders structured copy blocks: paragraphs, label/value pairs (grouped into a
// ruled definition list) and bullet lists, in reading order.
export default function Prose({ blocks = [], className = '' }) {
  const groups = []
  for (const b of blocks) {
    const last = groups[groups.length - 1]
    if (b.term && last?.type === 'dl') last.items.push(b)
    else groups.push(b.term ? { type: 'dl', items: [b] } : b)
  }

  return (
    <div className={`prose-wild ${className}`}>
      {groups.map((g, i) =>
        g.type === 'dl' ? (
          <dl key={i} className="max-w-[65ch] border-t border-ink">
            {g.items.map((d) => (
              <div key={d.term} className="grid gap-2 border-b border-ink py-5 md:grid-cols-[180px_1fr] md:gap-6">
                <dt className="font-mono text-mono-sm uppercase">{d.term}</dt>
                <dd>{d.text}</dd>
              </div>
            ))}
          </dl>
        ) : g.list ? (
          <ul key={i}>
            {g.list.map((li) => <li key={li}>{li}</li>)}
          </ul>
        ) : (
          <p key={i}>{g.text}</p>
        ),
      )}
    </div>
  )
}
