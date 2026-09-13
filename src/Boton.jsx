import './rk-components.css'

export function Boton({
  icon,
  label,
  onClick,
  type = 'button',
  padY = '12px',
  padX = '22px',
  fontSize = '16px',
}) {
  return (
    <button
      type={type}
      className="rk-btn"
      onClick={onClick}
      style={{
        '--rk-btn-pad-y': padY,
        '--rk-btn-pad-x': padX,
        '--rk-btn-font-size': fontSize,
      }}
    >
      {icon && <span className="rk-btn__icon">{icon}</span>}
      <span className="rk-btn__label">{label}</span>
    </button>
  )
}
