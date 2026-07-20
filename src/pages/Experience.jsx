import { BriefcaseBusiness, CalendarDays, MapPin } from 'lucide-react'

const EXPERIENCE_CONTENT = {
  en: {
    eyebrow: 'Professional experience',
    title: 'Experience shaping real-world products',
    description: 'I have been building and shipping production-ready products across personal initiatives and collaborative projects, with a focus on backend reliability and intuitive interfaces.',
    roles: [
      {
        title: 'Full-Stack Intern',
        org: 'International Association of Universities (IAU)',
        period: '2026 - Present',
        location: 'Paris, FR ',
        highlights: [
          'Developed a data inbound application for the IAU to manage data inflow from various sources',
          'Designed and developed full-stack features using React/TypeScript (frontend) and FastAPI (backend), delivering internal web modules that reduced manual data-processing workflows by an estimated 40%, freeing staff time for higher-value tasks.',
          'Engineered end-to-end features for the data ingestion platform, and integrated Redis with Celery for broker + result storage in a containerized dev/prod topology.',
        ],
      },
    ],
  },
  fr: {
    eyebrow: 'Experience professionnelle',
    title: 'Experience dans la creation de produits concrets',
    description: "Je conçois et livre des produits prets pour la production a travers des initiatives personnelles et des collaborations, avec une attention forte a la fiabilite backend et a l'experience utilisateur.",
    roles: [
      {
        title: 'Developpeuse Full-Stack',
        org: 'IAU - International Association of Universities',
        period: 'Aujourd hui',
        location: 'Paris, FR ',
        highlights: [
          'Développé une application d’ingestion de données pour l’IAU afin de gérer les flux de données provenant de diverses sources',
          'Conçu et développé des fonctionnalités full-stack utilisant React/TypeScript (frontend) et FastAPI (backend), livrant des modules web internes qui réduisent les workflows de traitement de données manuel par 40%, libérant le temps des collaborateurs pour des tâches plus valorisantes.',
          'Conçu des fonctionnalités de bout en bout pour la plateforme d’ingestion de données et intégré Redis avec Celery pour la gestion du broker et du stockage des résultats dans une architecture conteneurisée de développement et de production.',
        ],
      }
    ],
  }
}

export default function Experience({ language }) {
  const content = EXPERIENCE_CONTENT[language] || EXPERIENCE_CONTENT.en;
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
