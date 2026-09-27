// A full-bleed section that claims a field color for the background switcher.
// `ref` rides along in rest (React 19 passes it as an ordinary prop), so callers
// can scope animations to a section.
export default function Field({ field, as: Tag = 'section', className = '', children, ...rest }) {
  return (
    <Tag data-field={field} className={className} {...rest}>
      {children}
    </Tag>
  )
}
