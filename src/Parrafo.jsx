import './rk-components.css'

export function Parrafo({ label, children, width = '560px', size = '16px' }) {
  return (
    <section
      className="rk-paragraph"
      style={{ '--rk-paragraph-width': width, '--rk-paragraph-size': size }}
    >
      <span className="rk-paragraph__label">{label}</span>
      <p className="rk-paragraph__text">{children}</p>
    </section>
  )
}
