import { useState } from 'react'
import './rk-components.css'

/**
 * filters: [{ id, label }]  (además de "todos", que siempre existe)
 * items:   [{ label, tag, tags: string[] }]
 */
export function ListaFiltro({ filters, items, width = 'min(420px,90vw)' }) {
  const [active, setActive] = useState('todos')
  const visible = items.filter(
    (item) => active === 'todos' || item.tags.includes(active)
  )

  return (
    <section className="rk-list-filter" style={{ width }}>
      <div className="rk-list-filter__filters">
        <button
          className={`rk-chip${active === 'todos' ? ' is-active' : ''}`}
          onClick={() => setActive('todos')}
        >
          Todos
        </button>
        {filters.map((f) => (
          <button
            key={f.id}
            className={`rk-chip${active === f.id ? ' is-active' : ''}`}
            onClick={() => setActive(f.id)}
          >
            {f.label}
          </button>
        ))}
      </div>
      <ul className="rk-list-filter__items">
        {visible.map((item, i) => (
          <li className="rk-list-filter__item" key={i}>
            {item.label} <span className="rk-list-filter__tag">{item.tag}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
