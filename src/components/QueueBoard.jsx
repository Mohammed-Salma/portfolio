import { useEffect, useState } from 'react'

// A queue display like the ones in bank and service-center lobbies:
// it calls the next "ticket" (a technology) to its "counter" every few seconds.
const INTERVAL_MS = 2600

function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
}

export default function QueueBoard({ board }) {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const rows = board.rows

  useEffect(() => {
    if (paused || prefersReducedMotion()) return
    const id = setInterval(() => setActive((i) => (i + 1) % rows.length), INTERVAL_MS)
    return () => clearInterval(id)
  }, [paused, rows.length])

  const current = rows[active]
  const number = String(active + 1).padStart(3, '0')

  return (
    <figure className="board-wrap">
      <div
        className="board"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="board-now">
          <span className="board-title">{board.title}</span>
          <div className="board-call" aria-live="polite">
            <span className="board-number" key={`n${active}`}>{number}</span>
            <span className="board-call-text" key={`t${active}`}>
              <span className="board-tech" dir="ltr">{current.ticket}</span>
              <span className="board-counter">{current.counter}</span>
            </span>
          </div>
        </div>

        <table className="board-table">
          <thead>
            <tr>
              <th scope="col">{board.ticket}</th>
              <th scope="col">{board.counter}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={r.ticket} className={i === active ? 'is-active' : undefined}>
                <td>
                  <button type="button" onClick={() => setActive(i)} aria-pressed={i === active}>
                    <span className="board-row-num">{String(i + 1).padStart(3, '0')}</span>
                    <span dir="ltr">{r.ticket}</span>
                  </button>
                </td>
                <td>{r.counter}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <figcaption>{board.caption}</figcaption>
    </figure>
  )
}
