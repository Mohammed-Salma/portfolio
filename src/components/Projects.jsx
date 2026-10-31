import { useState } from 'react'

function Gallery({ images }) {
  const [current, setCurrent] = useState(0)
  return (
    <div className="gallery">
      <div className="gallery-main">
        <img src={images[current].src} alt={images[current].alt} loading="lazy" />
      </div>
      {images.length > 1 && (
        <div className="gallery-thumbs">
          {images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              className={i === current ? 'is-current' : undefined}
              onClick={() => setCurrent(i)}
              aria-label={img.alt}
              aria-pressed={i === current}
            >
              <img src={img.src} alt="" loading="lazy" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

function ArchitectureDiagram({ diagram }) {
  const [a, b, c] = diagram.nodes
  return (
    <figure className="arch">
      <figcaption className="arch-title">{diagram.title}</figcaption>
      <div className="arch-flow">
        <span className="arch-node">{a}</span>
        <span className="arch-link" aria-hidden="true" />
        <span className="arch-node arch-node-strong">{b}</span>
        <span className="arch-link" aria-hidden="true" />
        <span className="arch-node">{c}</span>
      </div>
      <div className="arch-side">
        <span className="arch-branch" aria-hidden="true" />
        <span className="arch-node arch-node-pay">{diagram.side}</span>
      </div>
      <p className="arch-note">{diagram.note}</p>
    </figure>
  )
}

function Project({ p, flip }) {
  return (
    <article className={`project${flip ? ' project-flip' : ''}`} id={`project-${p.id}`}>
      <div className="project-visual">
        {p.images?.length > 0 && <Gallery images={p.images} />}
        {p.diagram && <ArchitectureDiagram diagram={p.diagram} />}
      </div>
      <div className="project-text">
        <p className="project-period">{p.period}</p>
        <h3>{p.title}</h3>
        {p.role && <p className="project-role">{p.role}</p>}
        <p className="project-summary">{p.summary}</p>
        <ul className="project-points">
          {p.points.map((pt) => <li key={pt}>{pt}</li>)}
        </ul>
        <ul className="stack" aria-label="Tech stack">
          {p.stack.map((s) => <li key={s} dir="ltr">{s}</li>)}
        </ul>
        {p.links.length > 0 && (
          <p className="project-links">
            {p.links.map((l) => (
              <a key={l.href} href={l.href} target="_blank" rel="noreferrer">{l.label}</a>
            ))}
          </p>
        )}
      </div>
    </article>
  )
}

export default function Projects({ t }) {
  return (
    <section className="section" id="projects" aria-labelledby="projects-title">
      <div className="wrap">
        <h2 id="projects-title">{t.projectsTitle}</h2>
        <div className="projects">
          {t.projects.map((p, i) => <Project key={p.id} p={p} flip={i % 2 === 1} />)}
        </div>
      </div>
    </section>
  )
}
