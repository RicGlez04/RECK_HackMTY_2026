import './rk-components.css'

export function Documento({
  icon,
  name,
  info,
  actionLabel = 'Descargar',
  actionHref = '#',
  width = 'min(360px,90vw)',
}) {
  return (
    <div className="rk-doc" style={{ width }}>
      <div className="rk-doc__icon">{icon}</div>
      <div className="rk-doc__meta">
        <span className="rk-doc__name">{name}</span>
        {info && <span className="rk-doc__info">{info}</span>}
      </div>
      <a className="rk-doc__action" href={actionHref}>
        {actionLabel}
      </a>
    </div>
  )
}
