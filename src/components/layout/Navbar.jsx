import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiSun, FiMoon } from 'react-icons/fi'
import agLogo from '../../assets/ag-logo.svg'

export default function Navbar({ theme, onThemeToggle }) {
  const [isHidden, setIsHidden] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [isSolid, setIsSolid] = useState(false)

  useEffect(() => {
    let lastScrollY = 0
    let ticking = false

    const updateNavBar = () => {
      const currentScrollY = window.scrollY

      // Show/hide on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHidden(true)
      } else {
        setIsHidden(false)
      }

      // Solid background after hero scroll
      setIsSolid(currentScrollY > window.innerHeight * 0.8)

      lastScrollY = currentScrollY
      setScrollY(currentScrollY)
      ticking = false
    }

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateNavBar)
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Projects', href: '#projects' },
    { name: 'Resume', href: '/resume.pdf' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        animate={{ y: isHidden ? -100 : 0 }}
        transition={{ duration: 0.3 }}
        className="hidden sm:flex fixed top-0 left-0 right-0 z-40 items-center justify-between px-6 lg:px-12 h-16 transition-all duration-300"
        style={{
          backgroundColor: isSolid ? 'var(--surface)' : 'transparent',
          boxShadow: isSolid ? 'var(--shadow-card)' : 'none',
        }}
      >
        <a href="#hero" className="no-underline flex items-center" style={{ width: 32, height: 32 }}>
          <img src={agLogo} alt="Angela Gao" style={{ width: '100%', height: '100%' }} />
        </a>

        <div className="flex items-center gap-1">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-2 text-sm text-text-secondary hover:text-text-primary transition-colors relative group"
            >
              {link.name}
              <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </a>
          ))}
        </div>

        <button
          onClick={onThemeToggle}
          className="p-2 rounded-full hover:bg-bg-subtle transition-colors"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
        </button>
      </motion.nav>

      {/* Mobile Bottom Navigation */}
      <motion.nav
        animate={{ y: isHidden && scrollY > 200 ? 100 : 0 }}
        transition={{ duration: 0.3 }}
        className="sm:hidden fixed bottom-0 left-0 right-0 z-40 flex items-center justify-around px-4 h-14 bg-surface backdrop-blur-md border-t border-border"
      >
        {navLinks.map(link => (
          <a
            key={link.name}
            href={link.href}
            className="flex flex-col items-center gap-1 text-xs text-text-secondary hover:text-accent transition-colors"
          >
            <span>{link.name}</span>
          </a>
        ))}
        <button
          onClick={onThemeToggle}
          className="p-2 hover:text-accent transition-colors"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
        </button>
      </motion.nav>
    </>
  )
}
