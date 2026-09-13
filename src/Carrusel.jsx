import { useRef, useState } from 'react'
import './rk-components.css'

/**
 * items: [{ title, description }]
 */
export function Carrusel({ items, cardWidth = '200px', gap = 'var(--rk-space-4)' }) {
  const trackRef = useRef(null)
  const cardRefs = useRef([])
  const [active, setActive] = useState(0)

  const goTo = (i) => {
    cardRefs.current[i]?.scrollIntoView({
      behavior: 'smooth',
      inline: 'start',
      block: 'nearest',
    })
  }

  const handleScroll = () => {
    const track = trackRef.current
    const first = cardRefs.current[0]
    if (!track || !first) return
    const i = Math.round(track.scrollLeft / first.getBoundingClientRect().width)
    setActive(i)
  }

  return (
    <section
      className="rk-slider"
      style={{ '--rk-slider-card-w': cardWidth, '--rk-slider-gap': gap }}
    >
      <div className="rk-slider__track" ref={trackRef} onScroll={handleScroll}>
        {items.map((item, i) => (
          <article
            className="rk-slider__card"
            key={i}
            ref={(el) => (cardRefs.current[i] = el)}
          >
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
      <div className="rk-slider__nav">
        {items.map((_, i) => (
          <button
            key={i}
            className={`rk-slider__dot${i === active ? ' is-active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Ir a la tarjeta ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
