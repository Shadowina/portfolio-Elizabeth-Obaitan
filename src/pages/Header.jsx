import { Menu, X } from 'lucide-react'

const LANGUAGE_OPTIONS = [
  { code: 'en', label: 'EN' },
  { code: 'fr', label: 'FR' },
]

export default function Header({
  isScrolled,
  activeSection,
  isMenuOpen,
  setIsMenuOpen,
  language,
  setLanguage,
  navItems,
  labels,
}) {
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