'use client'

import { useState, useEffect } from 'react'
import { Sun, Moon, Home, User, FolderKanban, Mail, BookOpen } from 'lucide-react'
import { useTheme } from '@/app/components/ThemeProvider'
import styles from '@/app/components/Header.module.css'

const navItems = [
  { name: 'Home', section: 'home', icon: Home },
  { name: 'About Me', section: 'about', icon: User },
  { name: 'Projects', section: 'projects', icon: FolderKanban },
  { name: 'Blog', section: 'blog', icon: BookOpen },
  { name: 'Contact', section: 'contact', icon: Mail },
]

export default function Header({ activeSection = 'home', onNavigate }) {
  const [internalActiveSection, setInternalActiveSection] = useState(activeSection)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    setInternalActiveSection(activeSection)
  }, [activeSection])

  useEffect(() => {
    if (onNavigate) {
      return
    }

    const handleScroll = () => {
      const sections = ['home', 'skills', 'projects', 'blog', 'contact']
      const scrollPosition = window.scrollY + 180
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          const sectionName = sections[i] === 'home' ? 'home' : 
                             sections[i] === 'skills' ? 'about' :
                             sections[i]
          setInternalActiveSection(sectionName)
          break
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [onNavigate])

  const isDark = theme === 'dark'
  const currentActiveSection = onNavigate ? activeSection : internalActiveSection

  const handleNavClick = (section) => {
    if (onNavigate) {
      onNavigate(section)
    } else {
      setInternalActiveSection(section)

      const elementId = section === 'about' ? 'skills' : section

      const element = document.getElementById(elementId)
      if (element) {
        const headerOffset = 50
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
      }
    }
  }

  const squareBase = isDark
    ? 'bg-black border-emerald-400/35 text-emerald-100 hover:text-green-300 hover:border-green-300/70'
    : 'bg-[#0f1411] border-emerald-500/35 text-emerald-100 hover:text-green-300 hover:border-green-400/70'

  const squareActive = isDark
    ? 'bg-green-500/20 border-emerald-300 text-green-200'
    : 'bg-green-500/20 border-emerald-300 text-green-200'

  const labelBase = isDark
    ? 'bg-slate-900/95 text-slate-100 border-emerald-400/35'
    : 'bg-white/95 text-slate-800 border-emerald-600/35'

  return (
    <>
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden md:flex">
        <nav className="glass-surface rounded-3xl px-3 py-4 flex flex-col items-center gap-2">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = currentActiveSection === item.section

            return (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.section)}
                className={`group relative h-12 w-12 rounded-xl border flex items-center justify-center transition-all duration-300 hover:scale-110 ${squareBase} ${
                  isActive ? squareActive : ''
                }`}
                aria-label={item.name}
                type="button"
              >
                <Icon size={18} />
                <span className={`pointer-events-none absolute right-16 px-2 py-1 rounded-md text-xs border opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap ${labelBase}`}>
                  {item.name}
                </span>
              </button>
            )
          })}

          <button
            aria-label="Toggle theme"
            onClick={toggleTheme}
            className={`${styles.themeToggle} group relative h-12 w-12 rounded-xl border flex items-center justify-center transition-all duration-300 hover:scale-110 ${squareBase}`}
          >
            {isDark ? (
              <Sun size={18} className={`${styles.themeIcon} text-green-300 transition-all duration-300 group-hover:scale-110`} />
            ) : (
              <Moon size={18} className={`${styles.themeIcon} text-slate-700 transition-all duration-300 group-hover:scale-110`} />
            )}
            <span className={`pointer-events-none absolute right-16 px-2 py-1 rounded-md text-xs border opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap ${labelBase}`}>
              Theme
            </span>
          </button>
        </nav>
      </div>

      <div className={`fixed bottom-4 left-1/2 -translate-x-1/2 z-50 md:hidden rounded-2xl border backdrop-blur-lg px-2.5 py-2.5 ${
        isDark ? 'bg-black/92 border-emerald-400/30' : 'bg-[#0f1411]/92 border-emerald-500/30'
      }`}>
        <nav className="flex items-center gap-1">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = currentActiveSection === item.section

            return (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.section)}
                className={`h-10 w-10 rounded-lg border flex items-center justify-center transition-all duration-300 ${squareBase} ${
                  isActive ? squareActive : ''
                }`}
                aria-label={item.name}
                type="button"
              >
                <Icon size={16} />
              </button>
            )
          })}
          <button
            aria-label="Toggle theme"
            onClick={toggleTheme}
            className={`${styles.themeToggle} group h-10 w-10 rounded-lg border flex items-center justify-center transition-all duration-300 ${squareBase}`}
          >
            {isDark ? (
              <Sun size={16} className={`${styles.themeIcon} text-green-300 transition-all duration-300`} />
            ) : (
              <Moon size={16} className={`${styles.themeIcon} text-slate-700 transition-all duration-300`} />
            )}
          </button>
        </nav>
      </div>
    </>
  )
}
