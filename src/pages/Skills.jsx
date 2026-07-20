const SKILL_ACCENTS = [
  'skills-card--violet',
  'skills-card--pink',
  'skills-card--indigo',
  'skills-card--teal',
  'skills-card--amber',
]

const SKILLS_CONTENT = {
  en: {
    eyebrow: 'Core strengths',
    title: 'Skills that power my projects',
    description: 'My toolkit blends engineering fundamentals, modern frameworks, and strong collaboration skills to build products that are both useful and delightful.',
    groups: [
      {
        title: 'Languages',
        items: ['TypeScript', 'Python', 'JavaScript', 'C#', 'SQL', 'Java', 'HTML/CSS', 'PHP'],
      },
      {
        title: 'Frameworks & Tools',
        items: ['ASP.NET', 'FastAPI', 'Celery', 'Redis', 'Bootstrap', 'Git', 'Docker', 'MongoDB', 'Tailwind CSS'],
      },
      {
        title: 'Libraries',
        items: ['React', 'FAISS', 'Pandas', 'Streamlit', 'MySQL', 'MariaDB', 'SQLAlchemy'],
      },
      {
        title: 'Soft Skills',
        items: ['Team collaboration', 'Adaptability', 'Problem-solving', 'Communication', 'Attention to detail', 'Fast learning'],
      },
      {
        title: 'Spoken Languages',
        items: ['English (fluent)', 'French'],
      },
      {
        title: 'Certifications',
        items: [
          'Python - Kaggle',
          'GenAI Intensive - Google (Kaggle)',
          "Stanford University Code in Place",
          'AI-Assisted Coding with GitHub Copilot',
        ],
      },
    ],
  },
  fr: {
    eyebrow: 'Forces principales',
    title: 'Competences qui alimentent mes projets',
    description: "Mon arsenal combine fondamentaux d'ingenierie, frameworks modernes et solides qualites humaines pour creer des produits utiles et plaisants.",
    groups: [
      {
        title: 'Langages',
        items: ['TypeScript', 'Python', 'JavaScript', 'C#', 'SQL', 'Java', 'HTML/CSS', 'PHP'],
      },
      {
        title: 'Frameworks et Outils',
        items: ['ASP.NET', 'FastAPI', 'Celery', 'Redis', 'Bootstrap', 'Git', 'Docker', 'MongoDB', 'Tailwind CSS'],
      },
      {
        title: 'Bibliotheques',
        items: ['React', 'FAISS', 'Pandas', 'Streamlit', 'MySQL', 'MariaDB', 'SQLAlchemy'],
      },
      {
        title: 'Soft Skills',
        items: ['Collaboration en equipe', 'Adaptabilite', 'Resolution de problemes', 'Communication', "Sens du detail", 'Apprentissage rapide'],
      },
      {
        title: 'Langues parlees',
        items: ['Anglais (courant)', 'Francais'],
      },
      {
        title: 'Certifications',
        items: [
          'Python - Kaggle',
          'GenAI Intensive - Google (Kaggle)',
          "Stanford University Code in Place",
          'AI-Assisted Coding with GitHub Copilot',
        ],
      },
    ],
  }
}

export default function Skills({ language }) {
  const content = SKILLS_CONTENT[language] || SKILLS_CONTENT.en;
  const skills = content.groups;
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