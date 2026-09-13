import { useEffect, useRef } from 'react'
import './rk-components.css'

export function BarraProgreso({
  label,
  value,
  height = '10px',
  width = 'min(320px,90vw)',
}) {
  const fillRef = useRef(null)

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setTimeout(() => {
        if (fillRef.current) fillRef.current.style.width = `${value}%`
      }, 50)
    })
    return () => cancelAnimationFrame(id)
  }, [value])

  return (
    <div className="rk-progress" style={{ width }}>
      <div className="rk-progress__top">
        <span className="rk-progress__label">{label}</span>
        <span className="rk-progress__percent">{value}%</span>
      </div>
      <div
        className="rk-progress__track"
        style={{ '--rk-progress-height': height }}
      >
        <div className="rk-progress__fill" ref={fillRef} />
      </div>
    </div>
  )
}
