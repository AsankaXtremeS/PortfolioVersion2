'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useTheme } from '@/app/components/ThemeProvider'
import { TYPE_STRINGS, education, categories } from '@/app/data/skillsData'
import styles from '@/app/components/Skills.module.css'

// ── Skill chip ──────────────────────────────────────────────────────────────
function SkillChip({ name, icon: Icon, isDark, delay }) {
  return (
    <div
      className={`${styles.skillChip} flex items-center gap-2 px-3 py-1.5 rounded-full border`}
      style={{
        animationDelay: `${delay}s`,
        borderColor: isDark ? 'rgba(74,222,128,0.18)' : 'rgba(22,101,52,0.18)',
        background: isDark ? 'rgba(0,0,0,0.38)' : 'rgba(255,255,255,0.72)',
      }}
    >
      {typeof Icon === 'function' && (
        <Icon
          className="h-3.5 w-3.5 shrink-0"
          style={{ color: isDark ? '#4ade80' : '#16a34a' }}
          aria-hidden="true"
        />
      )}
      <span
        className="text-xs font-mono tracking-wide whitespace-nowrap"
        style={{ color: isDark ? '#cbd5e1' : '#334155' }}
      >
        {name}
      </span>
    </div>
  )
}

// ── Category card ───────────────────────────────────────────────────────────
function CategoryCard({ cat, isDark, cardDelay }) {
  return (
    <div
      className={`${styles.catCard} rounded-2xl p-5 flex flex-col gap-4`}
      style={{
        animationDelay: `${cardDelay}s`,
        background: isDark
          ? 'linear-gradient(135deg,rgba(0,0,0,0.55) 0%,rgba(10,20,12,0.45) 100%)'
          : 'linear-gradient(135deg,rgba(255,255,255,0.82) 0%,rgba(240,248,240,0.72) 100%)',
        border: `1px solid ${isDark ? 'rgba(74,222,128,0.10)' : 'rgba(22,101,52,0.12)'}`,
        backdropFilter: 'blur(12px)',
      }}
    >
      {/* Card header */}
      <div className="flex items-center justify-between">
        <h3
          className="text-sm font-semibold tracking-widest uppercase"
          style={{ color: isDark ? '#86efac' : '#15803d' }}
        >
          {cat.title}
        </h3>
        <span
          className="text-[10px] font-mono"
          style={{ color: isDark ? 'rgba(134,239,172,0.35)' : 'rgba(21,128,61,0.35)' }}
        >
          {cat.id}
        </span>
      </div>

      {/* Skill chips */}
      <div className="flex flex-wrap gap-2">
        {cat.skills.map((skill, si) => (
          <SkillChip
            key={skill.name}
            {...skill}
            isDark={isDark}
            delay={cardDelay + si * 0.04}
          />
        ))}
      </div>
    </div>
  )
}

// ── Main component ──────────────────────────────────────────────────────────
export default function Skills() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  // ── Typewriter ──────────────────────────────────────────────────────────
  const [displayed, setDisplayed] = useState('')
  const [strIdx, setStrIdx]       = useState(0)
  const [charIdx, setCharIdx]     = useState(0)
  const [deleting, setDeleting]   = useState(false)

  useEffect(() => {
    const current = TYPE_STRINGS[strIdx]
    const speed   = deleting ? 40 : 70

    const timer = setTimeout(() => {
      if (!deleting) {
        setDisplayed(current.slice(0, charIdx + 1))
        if (charIdx + 1 === current.length) {
          setTimeout(() => setDeleting(true), 1800)
        } else {
          setCharIdx(c => c + 1)
        }
      } else {
        setDisplayed(current.slice(0, charIdx - 1))
        if (charIdx - 1 === 0) {
          setDeleting(false)
          setCharIdx(0)
          setStrIdx(s => (s + 1) % TYPE_STRINGS.length)
        } else {
          setCharIdx(c => c - 1)
        }
      }
    }, speed)

    return () => clearTimeout(timer)
  }, [charIdx, deleting, strIdx])

  const accent  = isDark ? '#4ade80' : '#16a34a'
  const muted   = isDark ? 'rgba(148,163,184,0.7)' : 'rgba(71,85,105,0.75)'
  const heading = isDark ? '#d1fae5' : '#14532d'

  return (
    <section
      id="skills"
      className="relative w-full overflow-hidden transition-colors duration-500"
      style={{ background: isDark ? '#070a08' : '#eff4f0', height: '100vh' }}
    >
      {/* ── Ambient orbs ── */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 overflow-hidden">
        <div
          className="absolute top-[8%] right-[8%] w-96 h-96 rounded-full"
          style={{
            background: isDark ? 'radial-gradient(circle,rgba(74,222,128,0.07),transparent 70%)' : 'radial-gradient(circle,rgba(74,222,128,0.12),transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        <div
          className="absolute bottom-[10%] right-[30%] w-72 h-72 rounded-full"
          style={{
            background: isDark ? 'radial-gradient(circle,rgba(16,185,129,0.05),transparent 70%)' : 'radial-gradient(circle,rgba(16,185,129,0.09),transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
      </div>

      {/* ── Master grid: [image-col | content-col] ── */}
      <div className="relative z-10 flex h-full">

        {/* ═══════════════════════════════════════════════════
            LEFT IMAGE PANEL  — 1/5 width, flush to left edge
            ═══════════════════════════════════════════════════ */}
        <div className="hidden lg:block relative h-full" style={{ width: '20%', flexShrink: 0 }}>
          {/* Full-height image — no sticky needed since section itself is viewport-height */}
          <div className="relative h-full w-full overflow-hidden">
            <Image
              src="/Assets/skillsPortrait.jpeg"
              alt="Asanka portrait"
              fill
              sizes="20vw"
              className="object-cover object-center"
              priority
            />
            {/* Dark-to-right gradient so content side reads cleanly */}
            <div
              className="absolute inset-0"
              style={{
                background: isDark
                  ? 'linear-gradient(to right, rgba(7,10,8,0) 0%, rgba(7,10,8,0.55) 80%, rgba(7,10,8,0.92) 100%)'
                  : 'linear-gradient(to right, rgba(239,244,240,0) 0%, rgba(239,244,240,0.45) 80%, rgba(239,244,240,0.90) 100%)',
              }}
            />
            {/* Vertical label */}
            <div
              className="absolute bottom-10 left-0 right-0 flex justify-center"
            >
              <span
                className="font-mono text-xl tracking-[0.35em] uppercase"
                style={{
                  writingMode: 'vertical-rl',
                  transform: 'rotate(180deg)',
                  color: isDark ? 'rgba(74,222,128,0.55)' : 'rgba(22,101,52,0.55)',
                  letterSpacing: '0.3em',
                }}
              >
                Skills & Education
              </span>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════
            RIGHT CONTENT PANEL — 4/5 width
            ═══════════════════════════════════════════════════ */}
        <div
          className={`flex-1 px-6 sm:px-10 xl:px-14 pt-20 pb-28 overflow-y-auto h-full scroll-smooth ${styles.rightPanel}`}
          style={{
            '--scrollbar-thumb': isDark ? 'rgba(74,222,128,0.25)' : 'rgba(22,101,52,0.22)',
            '--scrollbar-thumb-hover': isDark ? 'rgba(74,222,128,0.50)' : 'rgba(22,101,52,0.45)',
          }}
        >

          {/* ── Section header ── */}
          <div className={`${styles.sectionIn} mb-12`}>
            <p
              className="font-mono text-xs tracking-[0.3em] uppercase mb-3"
              style={{ color: accent }}
            >
              Capabilities
            </p>
            <h1
              className="text-3xl sm:text-4xl font-bold leading-[1.18] pb-1 mb-2"
              style={{ color: heading, fontFamily: "ui-sans-serif, system-ui, sans-serif" }}
            >
              I build{' '}
              <span style={{ color: accent }}>
                {displayed}
                <span className={styles.animateCursor}>|</span>
              </span>
            </h1>
            <p className="text-sm max-w-lg leading-relaxed" style={{ color: muted }}>
              A full-stack developer based in Sri Lanka crafting performant interfaces,
              resilient APIs, and intelligent workflows.
            </p>
          </div>

          {/* ── Skills bento grid ── */}
          <div className="bento-grid grid gap-3"
            style={{ gridTemplateColumns: 'repeat(12, 1fr)' }}
          >
            {/* Front-End — spans 7 cols (wider) */}
            <div className={`col-span-12 md:col-span-7 ${styles.catCard} rounded-2xl p-5 flex flex-col gap-4`}
              style={{
                animationDelay: '0.1s',
                background: isDark
                  ? 'linear-gradient(135deg,rgba(0,0,0,0.55) 0%,rgba(10,20,12,0.45) 100%)'
                  : 'linear-gradient(135deg,rgba(255,255,255,0.82) 0%,rgba(240,248,240,0.72) 100%)',
                border: `1px solid ${isDark ? 'rgba(74,222,128,0.10)' : 'rgba(22,101,52,0.12)'}`,
                backdropFilter: 'blur(12px)',
              }}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold tracking-widest uppercase" style={{ color: accent }}>Front-End</h3>
                <span className="text-[10px] font-mono" style={{ color: isDark ? 'rgba(134,239,172,0.35)' : 'rgba(21,128,61,0.35)' }}>01</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories[0].skills.map((skill, si) => (
                  <SkillChip key={skill.name} {...skill} isDark={isDark} delay={0.14 + si * 0.04} />
                ))}
              </div>
            </div>

            {/* Back-End — spans 5 cols */}
            <div className={`col-span-12 md:col-span-5 ${styles.catCard} rounded-2xl p-5 flex flex-col gap-4`}
              style={{
                animationDelay: '0.18s',
                background: isDark
                  ? 'linear-gradient(135deg,rgba(0,0,0,0.55) 0%,rgba(10,20,12,0.45) 100%)'
                  : 'linear-gradient(135deg,rgba(255,255,255,0.82) 0%,rgba(240,248,240,0.72) 100%)',
                border: `1px solid ${isDark ? 'rgba(74,222,128,0.10)' : 'rgba(22,101,52,0.12)'}`,
                backdropFilter: 'blur(12px)',
              }}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold tracking-widest uppercase" style={{ color: accent }}>Back-End</h3>
                <span className="text-[10px] font-mono" style={{ color: isDark ? 'rgba(134,239,172,0.35)' : 'rgba(21,128,61,0.35)' }}>02</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories[1].skills.map((skill, si) => (
                  <SkillChip key={skill.name} {...skill} isDark={isDark} delay={0.22 + si * 0.04} />
                ))}
              </div>
            </div>

            {/* Databases — spans 4 */}
            <div className={`col-span-12 md:col-span-4 ${styles.catCard} rounded-2xl p-5 flex flex-col gap-4`}
              style={{
                animationDelay: '0.26s',
                background: isDark
                  ? 'linear-gradient(135deg,rgba(0,0,0,0.55) 0%,rgba(10,20,12,0.45) 100%)'
                  : 'linear-gradient(135deg,rgba(255,255,255,0.82) 0%,rgba(240,248,240,0.72) 100%)',
                border: `1px solid ${isDark ? 'rgba(74,222,128,0.10)' : 'rgba(22,101,52,0.12)'}`,
                backdropFilter: 'blur(12px)',
              }}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold tracking-widest uppercase" style={{ color: accent }}>Databases</h3>
                <span className="text-[10px] font-mono" style={{ color: isDark ? 'rgba(134,239,172,0.35)' : 'rgba(21,128,61,0.35)' }}>03</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories[2].skills.map((skill, si) => (
                  <SkillChip key={skill.name} {...skill} isDark={isDark} delay={0.30 + si * 0.04} />
                ))}
              </div>
            </div>

            {/* DevOps — spans 4 */}
            <div className={`col-span-12 md:col-span-4 ${styles.catCard} rounded-2xl p-5 flex flex-col gap-4`}
              style={{
                animationDelay: '0.32s',
                background: isDark
                  ? 'linear-gradient(135deg,rgba(0,0,0,0.55) 0%,rgba(10,20,12,0.45) 100%)'
                  : 'linear-gradient(135deg,rgba(255,255,255,0.82) 0%,rgba(240,248,240,0.72) 100%)',
                border: `1px solid ${isDark ? 'rgba(74,222,128,0.10)' : 'rgba(22,101,52,0.12)'}`,
                backdropFilter: 'blur(12px)',
              }}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold tracking-widest uppercase" style={{ color: accent }}>DevOps</h3>
                <span className="text-[10px] font-mono" style={{ color: isDark ? 'rgba(134,239,172,0.35)' : 'rgba(21,128,61,0.35)' }}>04</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories[3].skills.map((skill, si) => (
                  <SkillChip key={skill.name} {...skill} isDark={isDark} delay={0.36 + si * 0.04} />
                ))}
              </div>
            </div>

            {/* AI/ML — spans 4 */}
            <div className={`col-span-12 md:col-span-4 ${styles.catCard} rounded-2xl p-5 flex flex-col gap-4`}
              style={{
                animationDelay: '0.38s',
                background: isDark
                  ? 'linear-gradient(135deg,rgba(0,0,0,0.55) 0%,rgba(10,20,12,0.45) 100%)'
                  : 'linear-gradient(135deg,rgba(255,255,255,0.82) 0%,rgba(240,248,240,0.72) 100%)',
                border: `1px solid ${isDark ? 'rgba(74,222,128,0.10)' : 'rgba(22,101,52,0.12)'}`,
                backdropFilter: 'blur(12px)',
              }}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold tracking-widest uppercase" style={{ color: accent }}>AI / ML</h3>
                <span className="text-[10px] font-mono" style={{ color: isDark ? 'rgba(134,239,172,0.35)' : 'rgba(21,128,61,0.35)' }}>05</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories[4].skills.map((skill, si) => (
                  <SkillChip key={skill.name} {...skill} isDark={isDark} delay={0.42 + si * 0.04} />
                ))}
              </div>
            </div>
          </div>

          {/* ── Divider ── */}
          <div
            className="my-12 h-px w-full"
            style={{ background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.07)' }}
          />

          {/* ── Education ── */}
          <div className={styles.sectionIn}>
            <div className="flex items-center gap-3 mb-8">
              <div
                className="w-0.5 h-5 rounded-full"
                style={{ background: accent }}
              />
              <h2
                className="text-xl font-semibold tracking-wide"
                style={{ color: heading, fontFamily: "ui-sans-serif, system-ui, sans-serif" }}
              >
                Education
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
              {education.map((item, idx) => (
                <article
                  key={item.degree}
                  className={`${styles.eduCard} rounded-2xl p-5 flex flex-col gap-2`}
                  style={{
                    animationDelay: `${0.45 + idx * 0.08}s`,
                    background: isDark
                      ? 'rgba(0,0,0,0.40)'
                      : 'rgba(255,255,255,0.72)',
                    border: `1px solid ${isDark ? 'rgba(74,222,128,0.12)' : 'rgba(22,101,52,0.14)'}`,
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <p
                    className="font-mono text-[10px] uppercase tracking-[0.25em]"
                    style={{ color: isDark ? 'rgba(74,222,128,0.7)' : 'rgba(22,101,52,0.7)' }}
                  >
                    {item.period}
                  </p>
                  <h3
                    className="text-sm font-semibold leading-snug"
                    style={{ color: heading }}
                  >
                    {item.degree}
                  </h3>
                  <p
                    className="text-xs font-medium"
                    style={{ color: accent }}
                  >
                    {item.institute}
                  </p>
                  <p
                    className="text-xs leading-relaxed mt-1"
                    style={{ color: muted }}
                  >
                    {item.focus}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}