import { links } from '../content'
import QueueBoard from './QueueBoard'

export default function Hero({ t }) {
  const h = t.hero
  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <div className="hero-id">
            <div className="avatar-frame">
              <img className="avatar" src={h.avatar} alt={h.name} width="96" height="96" />
              <span className="avatar-dot" aria-hidden="true" />
            </div>
            <div>
              <p className="hero-name">{h.name}</p>
              <p className="hero-role">{h.role}</p>
              <p className="hero-status">{h.status}</p>
            </div>
          </div>
          <h1>{h.headline}</h1>
          <p className="hero-intro">{h.intro}</p>
          <div className="hero-actions">
            <a className="btn" href="#projects">{h.primary}</a>
            <a className="btn btn-ghost" href={`mailto:${links.email}`}>{h.secondary}</a>
          </div>
        </div>
        <QueueBoard board={t.board} />
      </div>
    </section>
  )
}
