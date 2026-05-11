const SKILL_ACCENTS = [
  'skills-card--violet',
  'skills-card--pink',
  'skills-card--indigo',
  'skills-card--teal',
  'skills-card--amber',
]

export default function Skills({ skills, content }) {
  return (
    <section id="skills" className="skills section-orbs">
      <div className="section-orbs__spark" />
      <div className="section-orbs__spark" />
      <div className="section-orbs__spark" />

      <div className="section-heading">
        <span>{content.eyebrow}</span>
        <h2>{content.title}</h2>
        <p>{content.description}</p>
      </div>

      <div className="skills__grid">
        {skills.map((group, idx) => (
          <article
            className={`skills-card surface-card ${SKILL_ACCENTS[idx % SKILL_ACCENTS.length]}`}
            style={{ animationDelay: `${idx * 90}ms` }}
            key={group.title}
          >
            <h3>{group.title}</h3>
            <ul className="skills-card__chips">
              {group.items.map((item) => (
                <li key={item} className="tech-chip">{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}