export default function Experience({ t }) {
  return (
    <section className="section section-tint" id="experience" aria-labelledby="experience-title">
      <div className="wrap">
        <h2 id="experience-title">{t.experienceTitle}</h2>
        <ol className="timeline">
          {t.experience.map((e) => (
            <li key={e.role}>
              <p className="timeline-period">{e.period}</p>
              <div>
                <h3>{e.role}</h3>
                <p className="timeline-place">{e.place}</p>
                <p>{e.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
