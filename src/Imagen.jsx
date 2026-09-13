import './rk-components.css'

export function Imagen({
  src,
  alt = '',
  placeholder = 'imagen',
  caption,
  width = '360px',
  aspect = '16/9',
  radius = 'var(--rk-radius-md)',
}) {
  return (
    <figure
      className="rk-image"
      style={{
        '--rk-image-width': width,
        '--rk-image-aspect': aspect,
        '--rk-image-radius': radius,
      }}
    >
      <div className="rk-image__frame">
        {src ? (
          <img src={src} alt={alt} />
        ) : (
          <span className="rk-image__placeholder">{placeholder}</span>
        )}
      </div>
      {caption && <figcaption className="rk-image__caption">{caption}</figcaption>}
    </figure>
  )
}
