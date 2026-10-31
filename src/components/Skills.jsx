export default function Skills({ t }) {
  return (
    <section className="section" id="skills" aria-labelledby="skills-title">
      <div className="wrap">
        <h2 id="skills-title">{t.skillsTitle}</h2>
        <div className="skills">
          {t.skills.map((s) => (
            <div className="skill-group" key={s.group}>
              <h3>{s.group}</h3>
              <ul>
                {s.items.map((it) => <li key={it}>{it}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
