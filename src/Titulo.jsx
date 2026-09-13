import './rk-components.css'

/**
 * Fijos: color (var(--text-h)/var(--accent)), forma (pildora + encabezado),
 * proposito (titulo principal de una vista), estructura (header > eyebrow + heading).
 * Ajustable via props: size/eyebrowSize/gap (proporciones), eyebrow/heading (contenido).
 */
export function Titulo({
  eyebrow,
  heading,
  as: Tag = 'h1',
  size = '52px',
  eyebrowSize = '12px',
  gap,
}) {
  return (
    <header
      className="rk-title"
      style={{
        '--rk-title-size': size,
        '--rk-title-eyebrow-size': eyebrowSize,
        ...(gap ? { '--rk-title-gap': gap } : {}),
      }}
    >
      <span className="rk-title__eyebrow">{eyebrow}</span>
      <Tag className="rk-title__text">{heading}</Tag>
    </header>
  )
}
