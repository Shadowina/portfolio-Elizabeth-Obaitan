import { ExternalLink } from 'lucide-react'

export default function Projects({ projects, content }) {
  return (
    <section id="projects" className="projects section-orbs">
      <div className="section-orbs__spark" />
      <div className="section-orbs__spark" />
      <div className="section-orbs__spark" />
      <div className="section-heading">
        <span>{content.eyebrow}</span>
        <h2>{content.title}</h2>
        <p>{content.description}</p>
      </div>

      <div className="projects__grid">
        {projects.map((project) => (
          <article className="project-card surface-card" key={project.title}>
            <header className="project-card__header">
              <div className="project-card__pill neon-badge">{content.featuredPill}</div>
              <h3>{project.title}</h3>
            </header>
            <p className="project-card__description">{project.description}</p>
            <ul className="project-card__tags">
              {project.tech.map((tech) => (
                <li key={tech} className="tech-chip">{tech}</li>
              ))}
            </ul>
            <div className="project-card__footer">
              <a href={project.link} className="project-card__link">
                {content.viewProject}
                <ExternalLink size={16} aria-hidden />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}