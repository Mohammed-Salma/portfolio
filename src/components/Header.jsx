function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.3 5.3l1.6 1.6M17.1 17.1l1.6 1.6M5.3 18.7l1.6-1.6M17.1 6.9l1.6-1.6" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z" />
    </svg>
  )
}

export default function Header({ t, theme, onToggleLang, onToggleTheme }) {
  const isDark = theme === 'dark'
  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <a className="brand" href="#top">{t.hero.name}</a>
        <nav aria-label={t.dir === 'rtl' ? 'الأقسام' : 'Sections'}>
          <ul className="nav-list">
            <li><a href="#projects">{t.nav.projects}</a></li>
            <li><a href="#experience">{t.nav.experience}</a></li>
            <li><a href="#skills">{t.nav.skills}</a></li>
            <li><a href="#contact">{t.nav.contact}</a></li>
          </ul>
        </nav>
        <div className="header-actions">
          <button
            type="button"
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-label={isDark ? t.theme.toLight : t.theme.toDark}
            title={isDark ? t.theme.toLight : t.theme.toDark}
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
          </button>
          <button type="button" className="lang-toggle" onClick={onToggleLang} aria-label={t.switchLabel}>
            {t.switchTo}
          </button>
          <a className="btn btn-small" href={t.cv.file} download>{t.cv.label}</a>
        </div>
      </div>
    </header>
  )
}
