import { useEffect, useState } from 'react'
import { content } from './content'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contact from './components/Contact'

function readStored(key) {
  try {
    return localStorage.getItem(key)
  } catch {
    return null
  }
}

function writeStored(key, value) {
  try {
    localStorage.setItem(key, value)
  } catch {
    // storage blocked: the choice just won't be remembered
  }
}

function initialLang() {
  const saved = readStored('lang')
  if (saved === 'en' || saved === 'ar') return saved
  return 'en'
}

function initialTheme() {
  const saved = readStored('theme')
  if (saved === 'light' || saved === 'dark') return saved
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export default function App() {
  const [lang, setLang] = useState(initialLang)
  const [theme, setTheme] = useState(initialTheme)
  const t = content[lang]

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = t.dir
    document.title = lang === 'ar' ? 'محمد سلامة | مطوّر ويب متكامل' : 'Mohammed Salma | Full-Stack Developer'
    writeStored('lang', lang)
  }, [lang, t.dir])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    writeStored('theme', theme)
  }, [theme])

  const toggleLang = () => setLang((l) => (l === 'en' ? 'ar' : 'en'))
  const toggleTheme = () => setTheme((m) => (m === 'dark' ? 'light' : 'dark'))

  return (
    <>
      <a className="skip" href="#main">{lang === 'ar' ? 'تخطَّ إلى المحتوى' : 'Skip to content'}</a>
      <Header t={t} theme={theme} onToggleLang={toggleLang} onToggleTheme={toggleTheme} />
      <main id="main">
        <Hero t={t} />
        <Projects t={t} />
        <Experience t={t} />
        <Skills t={t} />
        <Contact t={t} />
      </main>
    </>
  )
}
