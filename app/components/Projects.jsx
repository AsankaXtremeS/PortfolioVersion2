"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ArrowUpRight, Github, ExternalLink, X, Layers3, ShieldCheck, Zap } from 'lucide-react'
import { useTheme } from '@/app/components/ThemeProvider'
import { projects } from '@/app/data/projectsData'
import styles from '@/app/components/Projects.module.css'

// ── Modal ────────────────────────────────────────────────────────────────────
function ProjectModal({ project, isDark, onClose }) {
  const Icon = project.icon
  const accent = isDark ? '#4ade80' : '#16a34a'

  // close on Escape
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  // prevent body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  return (
    <div
      className={`${styles.modalBackdrop} fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6`}
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
      style={{ background: 'rgba(0,0,0,0.72)', backdropFilter: 'blur(8px)' }}
    >
      <div
        className={`${styles.modalSheet} relative w-full sm:max-w-3xl max-h-[92vh] overflow-hidden rounded-t-3xl sm:rounded-3xl flex flex-col`}
        style={{
          background: isDark
            ? 'linear-gradient(160deg,#0c140d 0%,#070a08 100%)'
            : 'linear-gradient(160deg,#f8fdf9 0%,#eff4f0 100%)',
          border: `1px solid ${isDark ? 'rgba(74,222,128,0.14)' : 'rgba(22,101,52,0.15)'}`,
          boxShadow: isDark
            ? '0 -20px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(74,222,128,0.05)'
            : '0 -20px 80px rgba(0,0,0,0.18)',
        }}
      >
        {/* ── Image hero ── */}
        <div className="relative h-52 sm:h-64 w-full shrink-0 overflow-hidden">
          <Image
            src={project.image}
            alt={project.name}
            fill
            sizes="(max-width: 640px) 100vw, 768px"
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background: isDark
                ? 'linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(7,10,8,0.88) 100%)'
                : 'linear-gradient(to bottom, rgba(0,0,0,0.08) 0%, rgba(239,244,240,0.92) 100%)',
            }}
          />

          {/* Close btn */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 flex items-center justify-center w-8 h-8 rounded-full transition-all duration-150 hover:scale-110"
            style={{
              background: isDark ? 'rgba(0,0,0,0.55)' : 'rgba(255,255,255,0.75)',
              border: `1px solid ${isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.10)'}`,
            }}
            aria-label="Close modal"
          >
            <X className="h-4 w-4" style={{ color: isDark ? '#cbd5e1' : '#475569' }} />
          </button>

          {/* Status + year badge */}
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <span
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono tracking-wider uppercase"
              style={{
                background: project.status === 'Live' ? 'rgba(74,222,128,0.18)' : 'rgba(148,163,184,0.18)',
                color: project.status === 'Live' ? '#4ade80' : '#94a3b8',
                border: `1px solid ${project.status === 'Live' ? 'rgba(74,222,128,0.35)' : 'rgba(148,163,184,0.25)'}`,
              }}
            >
              {project.status === 'Live' && <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />}
              {project.status}
            </span>
            <span
              className="px-2.5 py-1 rounded-full text-[10px] font-mono"
              style={{
                background: 'rgba(0,0,0,0.35)',
                color: 'rgba(255,255,255,0.6)',
                border: '1px solid rgba(255,255,255,0.10)',
              }}
            >
              {project.year}
            </span>
          </div>

          {/* Title over image bottom */}
          <div className="absolute bottom-5 left-6 right-6">
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase mb-1" style={{ color: accent }}>
              {project.tagline}
            </p>
            <h2
              className="text-2xl sm:text-3xl font-bold leading-tight"
              style={{
                color: isDark ? '#d1fae5' : '#14532d',
                fontFamily: "ui-sans-serif, system-ui, sans-serif",
                textShadow: isDark ? '0 2px 12px rgba(0,0,0,0.8)' : 'none',
              }}
            >
              {project.name}
            </h2>
          </div>
        </div>

        {/* ── Scrollable body ── */}
        <div
          className={`overflow-y-auto flex-1 px-6 sm:px-8 py-6 space-y-6 ${styles.modalBody}`}
        >
          {/* Stack chips */}
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full text-xs font-mono"
                style={{
                  background: isDark ? 'rgba(74,222,128,0.08)' : 'rgba(22,101,52,0.07)',
                  border: `1px solid ${isDark ? 'rgba(74,222,128,0.20)' : 'rgba(22,101,52,0.18)'}`,
                  color: isDark ? '#86efac' : '#166534',
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Overview text */}
          <div className="space-y-3">
            {project.overview.trim().split('\n\n').map((para, i) => (
              <p
                key={i}
                className="text-sm leading-relaxed"
                style={{ color: isDark ? '#cbd5e1' : '#374151' }}
              >
                {para}
              </p>
            ))}
          </div>
        </div>

        {/* ── Footer links ── */}
        <div
          className="shrink-0 flex items-center gap-3 px-6 sm:px-8 py-4 border-t"
          style={{ borderColor: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.07)' }}
        >
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-150 hover:scale-[1.02] active:scale-95"
            style={{
              background: isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.06)',
              border: `1px solid ${isDark ? 'rgba(255,255,255,0.10)' : 'rgba(0,0,0,0.10)'}`,
              color: isDark ? '#e2e8f0' : '#1e293b',
            }}
          >
            <Github className="h-4 w-4" />
            View on GitHub
          </a>

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-150 hover:scale-[1.02] active:scale-95"
              style={{
                background: isDark
                  ? 'linear-gradient(135deg,#16a34a,#15803d)'
                  : 'linear-gradient(135deg,#16a34a,#166534)',
                color: '#fff',
                boxShadow: '0 4px 16px rgba(22,163,74,0.35)',
              }}
            >
              <ExternalLink className="h-4 w-4" />
              View Live
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

// ── Project card ─────────────────────────────────────────────────────────────
function ProjectCard({ project, isDark, index, onExplore }) {
  const Icon = project.icon
  const accent = isDark ? '#4ade80' : '#16a34a'

  return (
    <article
      className={`${styles.projectCard} group relative flex flex-col overflow-hidden rounded-2xl`}
      style={{
        animationDelay: `${0.1 + index * 0.10}s`,
        background: isDark
          ? 'linear-gradient(145deg,rgba(0,0,0,0.60) 0%,rgba(8,16,9,0.55) 100%)'
          : 'linear-gradient(145deg,rgba(255,255,255,0.88) 0%,rgba(240,248,240,0.80) 100%)',
        border: `1px solid ${isDark ? 'rgba(74,222,128,0.10)' : 'rgba(22,101,52,0.12)'}`,
        backdropFilter: 'blur(14px)',
      }}
    >
      {/* Image */}
      <div className="relative h-44 sm:h-48 overflow-hidden shrink-0">
        <Image
          src={project.image}
          alt={project.name}
          fill
          sizes="(max-width: 640px) 88vw, 360px"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div
          className="absolute inset-0 transition-opacity duration-300"
          style={{
            background: isDark
              ? 'linear-gradient(to bottom, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.55) 100%)'
              : 'linear-gradient(to bottom, rgba(0,0,0,0.04) 0%, rgba(239,244,240,0.70) 100%)',
          }}
        />

        {/* Year + status badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          <span
            className="px-2 py-0.5 rounded-full text-[10px] font-mono"
            style={{
              background: 'rgba(0,0,0,0.45)',
              color: 'rgba(255,255,255,0.75)',
              border: '1px solid rgba(255,255,255,0.12)',
            }}
          >
            {project.year}
          </span>
          {project.status === 'Live' && (
            <span
              className="flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono"
              style={{
                background: 'rgba(74,222,128,0.18)',
                color: '#4ade80',
                border: '1px solid rgba(74,222,128,0.30)',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Live
            </span>
          )}
        </div>

        {/* Icon top-right */}
        <div
          className="absolute top-3 right-3 w-8 h-8 rounded-xl flex items-center justify-center"
          style={{
            background: 'rgba(0,0,0,0.40)',
            border: '1px solid rgba(255,255,255,0.12)',
            backdropFilter: 'blur(8px)',
          }}
        >
          <Icon className="h-4 w-4" style={{ color: '#4ade80' }} />
        </div>
      </div>

      {/* Body */}
      <div className="px-5 pt-5 pb-6 flex flex-col gap-3">
        <p className="font-mono text-[10px] tracking-[0.28em] uppercase" style={{ color: accent }}>
          {project.tagline}
        </p>
        <h3
          className="text-base sm:text-lg font-bold leading-snug pb-0.5"
          style={{ color: isDark ? '#d1fae5' : '#14532d', fontFamily: "ui-sans-serif, system-ui, sans-serif" }}
        >
          {project.name}
        </h3>
        <p
          className="text-xs sm:text-sm leading-relaxed"
          style={{ color: isDark ? '#94a3b8' : '#64748b' }}
        >
          {project.summary}
        </p>

        {/* Stack chips */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.stack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded-full text-[10px] font-mono"
              style={{
                background: isDark ? 'rgba(0,0,0,0.35)' : 'rgba(255,255,255,0.80)',
                border: `1px solid ${isDark ? 'rgba(74,222,128,0.15)' : 'rgba(22,101,52,0.15)'}`,
                color: isDark ? '#cbd5e1' : '#475569',
              }}
            >
              {tech}
            </span>
          ))}
          {project.stack.length > 4 && (
            <span className="px-2 py-0.5 rounded-full text-[10px] font-mono"
              style={{ color: isDark ? 'rgba(74,222,128,0.55)' : 'rgba(22,101,52,0.55)' }}>
              +{project.stack.length - 4}
            </span>
          )}
        </div>

        {/* Explore button */}
        <button
          onClick={() => onExplore(project)}
          className="explore-btn mt-1 flex items-center justify-between w-full px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-[1.01] active:scale-95"
          style={{
            background: isDark
              ? 'linear-gradient(135deg,rgba(22,163,74,0.20),rgba(21,128,61,0.15))'
              : 'linear-gradient(135deg,rgba(22,163,74,0.12),rgba(21,128,61,0.08))',
            border: `1px solid ${isDark ? 'rgba(74,222,128,0.25)' : 'rgba(22,101,52,0.22)'}`,
            color: accent,
          }}
        >
          <span>Explore Project</span>
          <ArrowUpRight className="h-4 w-4" />
        </button>
      </div>
    </article>
  )
}

// ── Main ─────────────────────────────────────────────────────────────────────
export default function Projects() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const [activeProject, setActiveProject] = useState(null)
  const [current, setCurrent] = useState(0)
  const [dragStart, setDragStart] = useState(null)
  const total = projects.length

  const prev = () => setCurrent(c => (c - 1 + total) % total)
  const next = () => setCurrent(c => (c + 1) % total)

  // drag / swipe handlers
  const onPointerDown = (e) => setDragStart(e.clientX)
  const onPointerUp   = (e) => {
    if (dragStart === null) return
    const delta = dragStart - e.clientX
    if (Math.abs(delta) > 50) delta > 0 ? next() : prev()
    setDragStart(null)
  }

  const accent = isDark ? '#4ade80' : '#16a34a'

  return (
    <>
      <section
        id="projects"
        className="relative h-full w-full overflow-hidden transition-colors duration-500"
        style={{ background: isDark ? '#070a08' : '#eff4f0' }}
      >
        {/* Ambient orbs */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-[10%] left-[20%] w-80 h-80 rounded-full"
            style={{ background: isDark ? 'radial-gradient(circle,rgba(74,222,128,0.06),transparent 70%)' : 'radial-gradient(circle,rgba(74,222,128,0.10),transparent 70%)', filter: 'blur(70px)' }}
          />
          <div className="absolute bottom-[5%] right-[10%] w-60 h-60 rounded-full"
            style={{ background: isDark ? 'radial-gradient(circle,rgba(16,185,129,0.05),transparent 70%)' : 'radial-gradient(circle,rgba(16,185,129,0.08),transparent 70%)', filter: 'blur(80px)' }}
          />
        </div>

        <div className="relative z-10 h-full flex flex-col px-5 sm:px-8 md:px-12 pt-14 pb-8">

          {/* ── Header row ── */}
          <div className={`flex items-end justify-between mb-8 shrink-0 ${styles.pageIn}`}>
            <div>
              <p className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] mb-2"
                style={{ color: accent }}>
                <span className="inline-block w-6 h-px" style={{ background: accent }} />
                Selected Work
              </p>
              <h1 className="text-3xl sm:text-4xl font-bold pt-1 pb-1"
                style={{ color: isDark ? '#d1fae5' : '#14532d', fontFamily: "ui-sans-serif, system-ui, sans-serif" }}>
                Projects Built to{' '}
                <span style={{ color: accent }}>Move Metrics</span>
              </h1>
            </div>

            {/* Arrow controls */}
            <div className="flex items-center gap-2 shrink-0 ml-4">
              <button
                onClick={prev}
                aria-label="Previous project"
                className="carousel-btn w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
                style={{
                  background: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)',
                  border: `1px solid ${isDark ? 'rgba(255,255,255,0.10)' : 'rgba(0,0,0,0.10)'}`,
                  color: isDark ? '#cbd5e1' : '#475569',
                }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button
                onClick={next}
                aria-label="Next project"
                className="carousel-btn w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
                style={{
                  background: isDark
                    ? 'linear-gradient(135deg,rgba(22,163,74,0.28),rgba(21,128,61,0.22))'
                    : 'linear-gradient(135deg,rgba(22,163,74,0.18),rgba(21,128,61,0.12))',
                  border: `1px solid ${isDark ? 'rgba(74,222,128,0.35)' : 'rgba(22,101,52,0.28)'}`,
                  color: accent,
                }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          {/* ── Carousel track ── */}
          <div
            className="relative flex-1 overflow-hidden cursor-grab active:cursor-grabbing select-none"
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
            onPointerLeave={() => setDragStart(null)}
          >
            {/* Sliding strip */}
            <div
              className="flex h-full transition-transform duration-500"
              style={{
                transform: `translateX(calc(-${current} * (min(360px, 88vw) + 20px)))`,
                gap: '20px',
                willChange: 'transform',
              }}
            >
              {projects.map((project, i) => (
                <div
                  key={project.id}
                  className="shrink-0 h-full"
                  style={{ width: 'min(360px, 88vw)' }}
                >
                  <div
                    className="h-full transition-all duration-500"
                    style={{
                      opacity: i === current || i === current + 1 ? 1 : 0.3,
                      transform: i === current || i === current + 1 ? 'scale(1)' : 'scale(0.96)',
                      filter: i === current || i === current + 1 ? 'none' : 'blur(2px)',
                    }}
                  >
                    <ProjectCard
                      project={project}
                      isDark={isDark}
                      index={i}
                      onExplore={setActiveProject}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Right fade hint */}
            <div
              className="pointer-events-none absolute inset-y-0 right-0 w-24"
              style={{
                background: isDark
                  ? 'linear-gradient(to left, #070a08 0%, transparent 100%)'
                  : 'linear-gradient(to left, #eff4f0 0%, transparent 100%)',
              }}
            />
          </div>

          {/* ── Dot indicators ── */}
          <div className="flex items-center justify-center gap-2.5 pt-5 shrink-0">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to project ${i + 1}`}
                className="transition-all duration-300"
                style={{
                  width:  i === current ? '24px' : '6px',
                  height: '6px',
                  borderRadius: '999px',
                  background: i === current ? accent : (isDark ? 'rgba(255,255,255,0.18)' : 'rgba(0,0,0,0.18)'),
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {activeProject && (
        <ProjectModal
          project={activeProject}
          isDark={isDark}
          onClose={() => setActiveProject(null)}
        />
      )}
    </>
  )
}