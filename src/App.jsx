import { useEffect, useState } from 'react'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import Projects from './components/sections/Projects'
import Contact from './components/sections/Contact'

export default function App() {
  const [theme, setTheme] = useState(() => {
    if (localStorage.getItem('theme')) {
      return localStorage.getItem('theme')
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  useEffect(() => {
    const html = document.documentElement
    if (theme === 'dark') {
      html.setAttribute('data-theme', 'dark')
    } else {
      html.removeAttribute('data-theme')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }

  return (
    <div className="w-full">
      <Navbar theme={theme} onThemeToggle={toggleTheme} />
      <Hero />
      <Projects />
      <Contact />
    </div>
  )
}
