import { Menu, X } from 'lucide-react'

const LANGUAGE_OPTIONS = [
  { code: 'en', label: 'EN' },
  { code: 'fr', label: 'FR' },
]

const HEADER_CONTENT = {
  en: {
    navItems: [
      { id: 'home', label: 'Home' },
      { id: 'about', label: 'About' },
      { id: 'skills', label: 'Skills' },
      { id: 'experience', label: 'Experience' },
      { id: 'projects', label: 'Projects' },
      { id: 'contact', label: 'Contact' },
    ],
    header: {
      menuAria: 'Toggle navigation menu',
      languageAria: 'Switch language',
    }
  },
  fr: {
    navItems: [
      { id: 'home', label: 'Accueil' },
      { id: 'about', label: 'A propos' },
      { id: 'skills', label: 'Competences' },
      { id: 'experience', label: 'Experience' },
      { id: 'projects', label: 'Projets' },
      { id: 'contact', label: 'Contact' },
    ],
    header: {
      menuAria: 'Afficher le menu de navigation',
      languageAria: 'Changer la langue',
    }
  }
}

export default function Header({
  isScrolled,
  activeSection,
  isMenuOpen,
  setIsMenuOpen,
  language,
  setLanguage,
}) {
  const content = HEADER_CONTENT[language] || HEADER_CONTENT.en;
  const navItems = content.navItems;
  const labels = content.header;
  return (
    <header className={`site-header ${isScrolled ? 'site-header--scrolled' : ''}`}>
      <nav className="site-header__inner">
        <a href="#home" className="site-logo">
          Elizabeth<span>Obaitan</span>
        </a>

        <ul className={`site-menu ${isMenuOpen ? 'is-open' : ''}`}>
          {navItems.map((item) => {
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={activeSection === item.id ? 'is-active' : ''}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            )
          })}
        </ul>

        <div className="site-header__controls">
          <div className="site-language-toggle" aria-label={labels.languageAria} role="group">
            {LANGUAGE_OPTIONS.map(({ code, label }) => (
              <button
                type="button"
                key={code}
                className={`site-language-toggle__button ${language === code ? 'is-active' : ''}`}
                onClick={() => setLanguage(code)}
              >
                {label}
              </button>
            ))}
          </div>

        <button
          type="button"
          className="site-menu__toggle"
          aria-label={labels.menuAria}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        </div>
      </nav>
    </header>
  )
}