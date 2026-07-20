import { ExternalLink } from 'lucide-react'

const PROJECTS_CONTENT = {
  en: {
    eyebrow: 'Selected work',
    title: 'Projects that mix creativity with solid engineering',
    description: "A little collection of projects I’ve had fun building, mixing creative interfaces with solid, scalable tech behind the scenes.",
    featuredPill: 'Featured build',
    viewProject: 'View project',
    list: [
      {
        title: 'Promptify',
        description: 'Music assistant where users input prompts by vibe/mood to generate playlists, with save-to-Spotify integration.',
        tech: ['Streamlit', 'Gemini API', 'Spotify API', 'Python', 'RAG'],
        link: '#',
      },
      {
        title: 'Aurea',
        description: 'A mental wellness app that enables users to securely log, organize, and revisit mood entries with notes, tags, images, and Spotify context.',
        tech: ['React', 'Firebase', 'Cloud Firestore', 'Tailwind CSS', 'JavaScript'],
        link: 'https://github.com/Shadowina/Aurea',
      },
      {
        title: 'Bookhaven',
        description: 'Online library management system using HTML, CSS, PHP, Bootstrap, and MariaDB.',
        tech: ['PHP', 'HTML/CSS', 'Bootstrap', 'MariaDB'],
        link: 'https://github.com/Shadowina/Book-Haven',
      },
      {
        title: 'EzzyTickets',
        description: 'Event ticketing platform built with ASP.NET and MariaDB for seamless event management.',
        tech: ['ASP.NET', 'MariaDB', 'C#'],
        link: 'https://github.com/Shadowina/ezzyTickets-aspnet-mvc-application-ecommerce-',
      },
    ],
  },
  fr: {
    eyebrow: 'Projets selectionnes',
    title: "Des projets qui melangent creativite et ingenierie solide",
    description: "Un apercu des produits que j'ai eu plaisir a concevoir: chacun associe une interface expressive a une architecture fiable et evolutive.",
    featuredPill: 'Projet phare',
    viewProject: 'Voir le projet',
    list: [
      {
        title: 'Promptify',
        description: "Assistant musical ou les utilisateurs decrivent une ambiance pour generer des playlists, avec integration d'enregistrement sur Spotify.",
        tech: ['Streamlit', 'Gemini API', 'Spotify API', 'Python', 'RAG'],
        link: '#',
      },
      {
        title: 'Aurea',
        description: "Application de bien-etre mental permettant de consigner, organiser et revisiter des entrees d'humeur avec notes, tags, images et contexte Spotify.",
        tech: ['React', 'Firebase', 'Cloud Firestore', 'Tailwind CSS', 'JavaScript'],
        link: 'https://github.com/Shadowina/Aurea',
      },
      {
        title: 'Bookhaven',
        description: 'Systeme de gestion de bibliotheque en ligne avec HTML, CSS, PHP, Bootstrap et MariaDB.',
        tech: ['PHP', 'HTML/CSS', 'Bootstrap', 'MariaDB'],
        link: 'https://github.com/Shadowina/Book-Haven',
      },
      {
        title: 'EzzyTickets',
        description: "Plateforme de billetterie evenementielle construite avec ASP.NET et MariaDB pour une gestion fluide des evenements.",
        tech: ['ASP.NET', 'MariaDB', 'C#'],
        link: 'https://github.com/Shadowina/ezzyTickets-aspnet-mvc-application-ecommerce-',
      },
    ],
  }
}

export default function Projects({ language }) {
  const content = PROJECTS_CONTENT[language] || PROJECTS_CONTENT.en;
  const projects = content.list;
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