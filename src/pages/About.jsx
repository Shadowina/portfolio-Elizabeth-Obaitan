import { Code, Palette, Zap } from 'lucide-react'

const CARD_ICONS = [<Code size={22} />, <Palette size={22} />, <Zap size={22} />]

export default function About({ content }) {
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