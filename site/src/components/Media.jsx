// Plain image with intrinsic size set (prevents layout shift) and lazy loading by default.
export default function Media({ item, alt, className = '', eager = false, style, ...rest }) {
  if (!item) return null
  return (
    <img
      src={item.src}
      alt={alt ?? item.alt ?? ''}
      width={item.width || undefined}
      height={item.height || undefined}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      className={className}
      style={style}
      {...rest}
    />
  )
}
