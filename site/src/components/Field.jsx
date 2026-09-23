// A full-bleed section that claims a field color for the background switcher.
export default function Field({ field, as: Tag = 'section', className = '', children, ...rest }) {
  return (
    <Tag data-field={field} className={className} {...rest}>
      {children}
    </Tag>
  )
}
