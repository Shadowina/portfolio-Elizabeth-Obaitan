import { Download, Github, Linkedin, Mail, Clock, MapPin } from 'lucide-react'

const QUICK_LINKS = [
  { icon: Mail, label: 'Email', value: 'obaitanshazam@gmail.com', href: 'mailto:obaitanshazam@gmail.com' },
  { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/elizabeth', href: 'https://www.linkedin.com/in/elizabeth-obaitan-708551199/' },
  { icon: Github, label: 'GitHub', value: 'github.com/elizabeth', href: 'https://github.com/Shadowina' },
]

const META_ICONS = [Clock, MapPin]

const CONTACT_CONTENT = {
  en: {
    badge: 'Open for new collaborations',
    title: "Let's turn ideas into joyful launches",
    description: "Tell me about your world, products, platforms, experiments. I'll bring the strategy, engineering craft, and a dose of playfulness to match.",
    startConversation: 'Start a conversation',
    resumeDownload: 'Download resume',
    quickLinksTitle: 'Quick links',
    detailsTitle: 'Details',
    quickLinks: {
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
    },
    meta: ['Replies within 24 hours', 'Based in Paris, FR (CET)'],
    note: "Let's grab a virtual coffee, or meet in Paris if you're nearby.",
    footer: 'Crafted with joy & curiosity.',
  },
  fr: {
    badge: 'Ouverte a de nouvelles collaborations',
    title: 'Transformons des idees en lancements memorables',
    description: "Parlez-moi de votre univers, de vos produits ou de vos experiments. J'apporte la strategie, la rigueur technique et une touche de creativite.",
    startConversation: 'Demarrer une conversation',
    resumeDownload: 'Telecharger le CV',
    quickLinksTitle: 'Liens rapides',
    detailsTitle: 'Details',
    quickLinks: {
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
    },
    meta: ['Reponse sous 24 heures', 'Basee a Paris, FR (CET)'],
    note: 'Partageons un cafe virtuel, ou rencontrons-nous a Paris si vous etes proche.',
    footer: 'Concu avec joie et curiosite.',
  }
}

export default function Contact({ language }) {
  const content = CONTACT_CONTENT[language] || CONTACT_CONTENT.en;
  const year = new Date().getFullYear()

  return (
    <footer id="contact" className="contact-footer section-orbs">
      <div className="section-orbs__spark" />
      <div className="section-orbs__spark" />
      <div className="section-orbs__spark" />
      <div className="section-orbs__spark" />
      <div className="contact-footer__inner">
        <div className="contact-footer__brand">
          <span className="contact-footer__badge neon-badge">{content.badge}</span>
          <h2>{content.title}</h2>
          <p>{content.description}</p>
          <div className="contact-footer__actions">
            <a className="hero-button hero-button--primary" href="mailto:obaitanshazam@gmail.com">
              <span>{content.startConversation}</span>
              <Mail size={18} aria-hidden />
            </a>
            <a className="contact-footer__resume" href="https://drive.google.com/file/d/1BnuyJWO2Iu3mvN_rOngPy2KGsCqHRDwd/view?usp=drive_link">
              <Download size={18} aria-hidden />
              {content.resumeDownload}
            </a>
          </div>
        </div>

        <div className="contact-footer__links">
          <h3>{content.quickLinksTitle}</h3>
          <ul>
            {QUICK_LINKS.map(({ icon: Icon, label, value, href }) => (
              <li key={label}>
                <Icon size={18} aria-hidden />
                <div>
                  <span>{content.quickLinks[label.toLowerCase()]}</span>
                  <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                    {value}
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="contact-footer__meta">
          <h3>{content.detailsTitle}</h3>
          <ul>
            {content.meta.map((text, index) => {
              const Icon = META_ICONS[index % META_ICONS.length]
              return (
              <li key={text}>
                <Icon size={18} aria-hidden />
                <span>{text}</span>
              </li>
              )
            })}
          </ul>
          <p className="contact-footer__note">{content.note}</p>
        </div>
      </div>

      <div className="contact-footer__bottom">
        <p>© {year} Elizabeth Obaitan — {content.footer}</p>
      </div>
    </footer>
  )
}