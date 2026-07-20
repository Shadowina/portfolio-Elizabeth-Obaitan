import { Github, Linkedin, Mail, ArrowUpRight, Sparkles } from 'lucide-react'

const SOCIALS = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/Shadowina' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/elizabeth-obaitan-708551199/' },
  { icon: Mail, label: 'Email', href: 'mailto:obaitanshazam@gmail.com' },
]

const HERO_CONTENT = {
  en: {
    badge: 'Full-stack & AI Engineer',
    title: 'A whole new world of possibilities',
    intro: "Hi, I'm Elizabeth, a Software Engineering and Digital Transformation master’s student from Esigelec College of Engineering in France. I build things that work, vibe, and spark curiosity.",
    stats: [
      { value: '2+ years', label: 'crafting interfaces' },
      { value: '9 launches', label: 'shipped with care' },
      { value: 'Paris, FR', label: 'Available remotely and in-person' },
    ],
    primaryCta: 'Explore my work',
    secondaryCta: "Let's collaborate",
  },
  fr: {
    badge: 'Developpeuse full-stack et backend',
    title: 'Construire des experiences numeriques vivantes',
    intro: "Bonjour, moi c'est Elizabeth. Je cree des produits utiles, harmonieux et stimulants. Je soigne chaque detail pour que l'utilisateur profite simplement de l'experience.",
    stats: [
      { value: '2+ ans', label: "de creation d'interfaces" },
      { value: '9 lancements', label: 'livres avec soin' },
      { value: 'Paris, FR', label: 'Disponible a distance' },
    ],
    primaryCta: 'Voir mes projets',
    secondaryCta: 'Collaborons ensemble',
  }
}

export default function Hero({ language }) {
  const content = HERO_CONTENT[language] || HERO_CONTENT.en;
  return (
    <section id="home" className="hero section-orbs">
      <div className="section-orbs__spark" />
      <div className="section-orbs__spark" />
      <div className="section-orbs__spark" />
      <div className="section-orbs__spark" />
      <div className="hero__inner">
        <div className="hero__copy">
          <span className="hero__badge neon-badge">{content.badge}</span>
          <h1>{content.title}</h1>
          <p>{content.intro}</p>

          <div className="hero__stats">
            {content.stats.map((stat) => (
              <div key={stat.value}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>

          <div className="hero__cta">
            <a href="#projects" className="hero-button hero-button--primary">
              <span>{content.primaryCta}</span>
              <ArrowUpRight size={18} aria-hidden />
            </a>
            <a href="#contact" className="hero-button hero-button--secondary">
              <span>{content.secondaryCta}</span>
              <Sparkles size={18} aria-hidden />
            </a>
          </div>

          <div className="hero__social">
            {SOCIALS.map(({ icon: Icon, label, href }) => (
              <a key={label} href={href} aria-label={label} target="_blank" rel="noreferrer">
                <Icon size={22} />
              </a>
            ))}
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__glow" />
          <div className="hero__portrait">
            <img src="/images/Elizabeth-Obaitan002.png" alt="Elizabeth Obaitan" />
            <span className="hero__ring hero__ring--one" />
            <span className="hero__ring hero__ring--two" />
          </div>
       
          <div className="hero__spark hero__spark--one" />
          <div className="hero__spark hero__spark--two" />
          <div className="hero__spark hero__spark--three" />
        </div>
      </div>
    </section>
  )
}