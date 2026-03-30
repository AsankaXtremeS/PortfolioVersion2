"use client"

import { useState } from 'react'
import Image from 'next/image'
import { useTheme } from '@/app/components/ThemeProvider'
import { posts } from '@/app/data/blogPosts'
import styles from '@/app/components/Blog.module.css'

const typeColors = {
  Engineering: { bg: 'rgba(74,222,128,0.10)', border: 'rgba(74,222,128,0.28)', text: '#4ade80' },
  Design:      { bg: 'rgba(167,139,250,0.10)', border: 'rgba(167,139,250,0.28)', text: '#a78bfa' },
  Product:     { bg: 'rgba(251,191,36,0.10)',  border: 'rgba(251,191,36,0.28)',  text: '#fbbf24' },
}

// Medium "M" logo SVG
function MediumIcon({ size = 16, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
    </svg>
  )
}

// ── Featured card (first post, large) ───────────────────────────────────────
function FeaturedCard({ post, isDark }) {
  const [hovered, setHovered] = useState(false)
  const tc = typeColors[post.type] ?? typeColors.Engineering
  const accent = isDark ? '#4ade80' : '#16a34a'

  return (
    <a
      href={post.mediumUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.featuredCard} group relative flex flex-col overflow-hidden rounded-2xl`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border: `1px solid ${isDark ? 'rgba(74,222,128,0.10)' : 'rgba(22,101,52,0.12)'}`,
        textDecoration: 'none',
      }}
    >
      {/* Image */}
      <div className="relative w-full overflow-hidden" style={{ height: '260px' }}>
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover transition-transform duration-700"
          style={{ transform: hovered ? 'scale(1.05)' : 'scale(1)' }}
        />
        {/* gradient */}
        <div className="absolute inset-0" style={{
          background: isDark
            ? 'linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(7,10,8,0.85) 100%)'
            : 'linear-gradient(to bottom, rgba(0,0,0,0.04) 0%, rgba(239,244,240,0.90) 100%)',
        }} />

        {/* type badge */}
        <div className="absolute top-4 left-4">
          <span className="px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider"
            style={{ background: tc.bg, border: `1px solid ${tc.border}`, color: tc.text }}>
            {post.type}
          </span>
        </div>

        {/* Medium badge top-right */}
        <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full"
          style={{ background: 'rgba(0,0,0,0.45)', border: '1px solid rgba(255,255,255,0.12)' }}>
          <MediumIcon size={12} color="rgba(255,255,255,0.7)" />
          <span className="text-[10px] font-mono" style={{ color: 'rgba(255,255,255,0.7)' }}>Medium</span>
        </div>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col gap-3" style={{
        background: isDark
          ? 'linear-gradient(145deg,rgba(0,0,0,0.58),rgba(8,16,9,0.52))'
          : 'linear-gradient(145deg,rgba(255,255,255,0.90),rgba(240,248,240,0.82))',
      }}>
        <h3 className="text-lg font-bold leading-snug"
          style={{ color: isDark ? '#d1fae5' : '#14532d', fontFamily: "ui-sans-serif, system-ui, sans-serif" }}>
          {post.title}
        </h3>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: isDark ? '#64748b' : '#94a3b8' }}>{post.date}</span>
            <span className="w-1 h-1 rounded-full" style={{ background: isDark ? '#334155' : '#cbd5e1' }} />
            <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: isDark ? '#64748b' : '#94a3b8' }}>{post.readTime}</span>
          </div>
          <div
            className="flex items-center gap-1.5 text-xs font-semibold transition-all duration-200"
            style={{
              color: accent,
              transform: hovered ? 'translateX(3px)' : 'translateX(0)',
            }}
          >
            Read on Medium
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2.5 6h7M6.5 3.5L9 6l-2.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </a>
  )
}

// ── Compact card (remaining posts) ──────────────────────────────────────────
function CompactCard({ post, isDark, delay }) {
  const [hovered, setHovered] = useState(false)
  const tc = typeColors[post.type] ?? typeColors.Engineering
  const accent = isDark ? '#4ade80' : '#16a34a'

  return (
    <a
      href={post.mediumUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="compact-card group flex gap-4 rounded-2xl p-4 transition-all duration-200"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        animationDelay: `${delay}s`,
        background: isDark
          ? hovered ? 'rgba(74,222,128,0.05)' : 'rgba(0,0,0,0.35)'
          : hovered ? 'rgba(22,101,52,0.05)' : 'rgba(255,255,255,0.75)',
        border: `1px solid ${isDark
          ? hovered ? 'rgba(74,222,128,0.22)' : 'rgba(74,222,128,0.08)'
          : hovered ? 'rgba(22,101,52,0.22)' : 'rgba(22,101,52,0.10)'}`,
        textDecoration: 'none',
        backdropFilter: 'blur(10px)',
      }}
    >
      {/* Thumbnail */}
      <div className="relative shrink-0 overflow-hidden rounded-xl" style={{ width: '88px', height: '88px' }}>
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="88px"
          className="object-cover transition-transform duration-500"
          style={{ transform: hovered ? 'scale(1.08)' : 'scale(1)' }}
        />
      </div>

      {/* Text */}
      <div className="flex flex-col justify-between flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <span className="px-2 py-0.5 rounded-full text-[9px] font-mono uppercase tracking-wider shrink-0"
            style={{ background: tc.bg, border: `1px solid ${tc.border}`, color: tc.text }}>
            {post.type}
          </span>
          <MediumIcon size={13} color={isDark ? 'rgba(255,255,255,0.30)' : 'rgba(0,0,0,0.25)'} />
        </div>

        <h3 className={`text-sm font-semibold leading-snug mt-2 ${styles.lineClamp2}`}
          style={{ color: isDark ? '#d1fae5' : '#14532d', fontFamily: "ui-sans-serif, system-ui, sans-serif" }}>
          {post.title}
        </h3>

        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[9px] uppercase tracking-widest" style={{ color: isDark ? '#475569' : '#94a3b8' }}>{post.date}</span>
            <span className="font-mono text-[9px]" style={{ color: isDark ? '#334155' : '#cbd5e1' }}>·</span>
            <span className="font-mono text-[9px] uppercase tracking-widest" style={{ color: isDark ? '#475569' : '#94a3b8' }}>{post.readTime}</span>
          </div>
          <svg
            width="14" height="14" viewBox="0 0 12 12" fill="none"
            style={{
              color: accent,
              transform: hovered ? 'translateX(2px)' : 'translateX(0)',
              transition: 'transform 0.2s ease',
            }}
          >
            <path d="M2.5 6h7M6.5 3.5L9 6l-2.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </a>
  )
}

// ── Main ─────────────────────────────────────────────────────────────────────
export default function Blog() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const featured = posts[0]
  const rest     = posts.slice(1)
  const accent   = isDark ? '#4ade80' : '#16a34a'

  return (
    <section
      id="blog"
      className="relative h-full w-full overflow-hidden transition-colors duration-500"
      style={{ background: isDark ? '#070a08' : '#eff4f0' }}
    >
      {/* Orbs */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-[8%] right-[12%] w-72 h-72 rounded-full"
          style={{ background: isDark ? 'radial-gradient(circle,rgba(74,222,128,0.06),transparent 70%)' : 'radial-gradient(circle,rgba(74,222,128,0.10),transparent 70%)', filter: 'blur(70px)' }} />
        <div className="absolute bottom-[10%] left-[5%] w-56 h-56 rounded-full"
          style={{ background: isDark ? 'radial-gradient(circle,rgba(167,139,250,0.04),transparent 70%)' : 'radial-gradient(circle,rgba(167,139,250,0.07),transparent 70%)', filter: 'blur(80px)' }} />
      </div>

      <div className={`relative z-10 h-full min-h-0 flex flex-col px-5 sm:px-8 md:px-12 pt-14 pb-8 overflow-y-auto ${styles.blogScroll}`}>

        {/* ── Header ── */}
        <div className={`flex items-end justify-between mb-8 shrink-0 ${styles.pageIn}`}>
          <div>
            <p className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] mb-2" style={{ color: accent }}>
              <span className="inline-block w-6 h-px" style={{ background: accent }} />
              Thought Process
            </p>
            <h1 className="text-2xl sm:text-4xl font-bold leading-[1.18] pb-1"
              style={{ color: isDark ? '#d1fae5' : '#14532d', fontFamily: "ui-sans-serif, system-ui, sans-serif" }}>
              Writing on{' '}
              <span style={{ color: accent }}>Medium</span>
            </h1>
          </div>

          {/* Medium profile link */}
          <a
            href="https://medium.com/@yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 hover:scale-[1.03] active:scale-95 shrink-0 ml-4"
            style={{
              background: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)',
              border: `1px solid ${isDark ? 'rgba(255,255,255,0.10)' : 'rgba(0,0,0,0.10)'}`,
              color: isDark ? '#cbd5e1' : '#475569',
              textDecoration: 'none',
            }}
          >
            <MediumIcon size={14} color={isDark ? '#cbd5e1' : '#475569'} />
            View Profile
          </a>
        </div>

        {/* ── Two-column layout ── */}
        <div className="grid lg:grid-cols-[1fr_1fr] gap-5 pb-2">

          {/* Left — featured */}
          <div className={styles.blogItem} style={{ animationDelay: '0.10s' }}>
            <FeaturedCard post={featured} isDark={isDark} />
          </div>

          {/* Right — compact list */}
          <div className="flex flex-col gap-3">
            {rest.map((post, i) => (
              <div key={post.id} className={styles.blogItem} style={{ animationDelay: `${0.18 + i * 0.08}s` }}>
                <CompactCard post={post} isDark={isDark} delay={0.18 + i * 0.08} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}