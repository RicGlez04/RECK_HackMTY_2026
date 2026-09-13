import './rk-components.css'

/**
 * items: [{ label, meta }]  (meta es opcional)
 */
export function ListaSimple({ items, width = 'min(360px,90vw)' }) {
  return (
    <ul className="rk-list" style={{ width }}>
      {items.map((item, i) => (
        <li className="rk-list__item" key={i}>
          <span className="rk-list__marker" />
          <span className="rk-list__label">{item.label}</span>
          {item.meta && <span className="rk-list__meta">{item.meta}</span>}
        </li>
      ))}
    </ul>
  )
}
