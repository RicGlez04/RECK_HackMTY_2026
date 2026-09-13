import './rk-components.css'

/**
 * data: [{ value, display, label }]
 * value  -> altura de la barra en % (0-100), controla --value
 * display -> texto mostrado arriba de la barra (ej. "13")
 * label  -> etiqueta debajo de la barra (ej. "11h")
 */
export function Grafica({ title, data, height = '160px', barWidth = '28px' }) {
  return (
    <section
      className="rk-chart"
      style={{ '--rk-chart-height': height, '--rk-chart-bar-w': barWidth }}
    >
      <h3 className="rk-chart__title">{title}</h3>
      <ul className="rk-chart__bars">
        {data.map((d, i) => (
          <li className="rk-chart__bar" key={i} style={{ '--value': d.value }}>
            <span className="rk-chart__value">{d.display}</span>
          </li>
        ))}
      </ul>
      <div className="rk-chart__labels">
        {data.map((d, i) => (
          <span className="rk-chart__label" key={i}>
            {d.label}
          </span>
        ))}
      </div>
    </section>
  )
}
