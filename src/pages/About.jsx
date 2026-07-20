import { Code, Palette, Zap } from 'lucide-react'

const CARD_ICONS = [<Code size={22} />, <Palette size={22} />, <Zap size={22} />]

const ABOUT_CONTENT = {
  en: {
    eyebrow: 'Behind the pixels',
    title: 'The "why" behind the interfaces I build',
    description: 'I create interesting applications that are both useful and delightful. My mission is to make the internet feel just a bit friendlier and cooler for users.',
    cards: [
      {
        title: 'What I am interested in',
        items: ['Full-stack development', 'Agentic AI', 'Generative AI', 'Pixel-perfect implementation'],
      },
      {
        title: 'Playful sparks',
        items: ['Joyful, accessible interfaces', 'Micro-interactions that guide', 'Responsive layouts that just fit'],
      },
      {
        title: 'Beyond the screen',
        items: ['Digital art + sci-fi fan', 'Music enthusiast', 'Always learning something new (and laughing)'],
      },
    ],
  },
  fr: {
    eyebrow: 'Derriere les pixels',
    title: 'Le "pourquoi" des interfaces que je conçois',
    description: "Je construis avec empathie, car chaque clic ou geste vient d'une personne qui veut accomplir quelque chose. Ma mission: rendre le web plus fluide, plus humain et plus agreable.",
    cards: [
      {
        title: 'Ce que je suis interessée par',
        items: ['Developpement full-stack', 'Agentic AI', 'Generative AI', 'Implementation pixel-parfaite'],
      },
      {
        title: 'Etincelles creatives',
        items: ['Interfaces accessibles et engageantes', 'Micro-interactions qui guident', 'Mises en page responsive naturelles'],
      },
      {
        title: "Au-dela de l'ecran",
        items: ['Passionnee de digital art et sci-fi', 'Grande amatrice de musique', "Toujours en train d'apprendre et de sourire"],
      },
    ],
  }
}

export default function About({ language }) {
  const content = ABOUT_CONTENT[language] || ABOUT_CONTENT.en;
  return (
    <section id="about" className="about section-orbs">
      <div className="section-orbs__spark" />
      <div className="section-orbs__spark" />
      <div className="section-orbs__spark" />
      <div className="section-heading">
        <span>{content.eyebrow}</span>
        <h2>{content.title}</h2>
        <p>{content.description}</p>
      </div>

      <div className="about__grid">
        {content.cards.map((card, index) => (
          <article className="about-card surface-card" style={{ animationDelay: `${index * 120}ms` }} key={card.title}>
            <div className="about-card__icon">{CARD_ICONS[index % CARD_ICONS.length]}</div>
            <h3>{card.title}</h3>
            <ul>
              {card.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}