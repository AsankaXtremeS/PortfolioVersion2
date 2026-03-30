"use client"

import { useMemo, useState, type ReactNode } from 'react'
import Header from '@/app/components/Header'
import Hero from '@/app/components/Hero'
import Projects from '@/app/components/Projects'
import Skills from '@/app/components/Skills'
import Blog from '@/app/components/Blog'
import Footer from '@/app/components/Footer'

type SectionKey = 'home' | 'about' | 'projects' | 'blog' | 'contact'

export default function Home() {
  const [activeSection, setActiveSection] = useState<SectionKey>('home')

  const sectionContent = useMemo(() => {
    const sections: Record<SectionKey, ReactNode> = {
      home: <Hero />,
      about: <Skills />,
      projects: <Projects />,
      blog: <Blog />,
      contact: <Footer />,
    }

    return sections[activeSection]
  }, [activeSection])

  return (
    <>
      <Header activeSection={activeSection} onNavigate={setActiveSection} />
      <main className="h-dvh overflow-hidden">
        <div key={activeSection} className="h-full panel-enter">
          {sectionContent}
        </div>
      </main>
    </>
  )
}