import { BriefcaseBusiness, CalendarDays, MapPin } from 'lucide-react'

export default function Experience({ content }) {
  return (
    <section id="experience" className="experience section-orbs">
      <div className="section-orbs__spark" />
      <div className="section-orbs__spark" />
      <div className="section-orbs__spark" />

      <div className="section-heading">
        <span>{content.eyebrow}</span>
        <h2>{content.title}</h2>
        <p>{content.description}</p>
      </div>

      <div className="experience__timeline">
        {content.roles.map((role) => (
          <article className="experience-card surface-card" key={`${role.title}-${role.org}`}>
            <div className="experience-card__topline" />
            <header className="experience-card__header">
              <div className="experience-card__icon">
                <BriefcaseBusiness size={20} aria-hidden />
              </div>
              <div>
                <h3>{role.title}</h3>
                <p>{role.org}</p>
              </div>
            </header>

            <div className="experience-card__meta">
              <div>
                <CalendarDays size={16} aria-hidden />
                <span>{role.period}</span>
              </div>
              <div>
                <MapPin size={16} aria-hidden />
                <span>{role.location}</span>
              </div>
            </div>

            <ul>
              {role.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
