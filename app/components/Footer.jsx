"use client"

import { useState } from 'react'
import { Send, ArrowUpRight } from 'lucide-react'
import { useTheme } from '@/app/components/ThemeProvider'
import { contacts } from '@/app/data/contactsData'
import styles from '@/app/components/Footer.module.css'

export default function Footer() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const [copied, setCopied] = useState(false)

  const accent  = isDark ? '#4ade80' : '#16a34a'
  const heading = isDark ? '#d1fae5' : '#14532d'
  const muted   = isDark ? '#94a3b8' : '#64748b'

  const copyEmail = () => {
    navigator.clipboard.writeText('asankasampath200228@gmail.com').then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <section
      id="contact"
      className="relative w-full h-full overflow-hidden transition-colors duration-500"
      style={{ background: isDark ? '#070a08' : '#eff4f0' }}
    >
      {/* ── Ambient orbs — same as every other page ── */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-[8%] right-[8%] w-96 h-96 rounded-full"
          style={{
            background: isDark
              ? 'radial-gradient(circle,rgba(74,222,128,0.07),transparent 70%)'
              : 'radial-gradient(circle,rgba(74,222,128,0.12),transparent 70%)',
            filter: 'blur(60px)',
          }} />
        <div className="absolute bottom-[5%] left-[3%] w-72 h-72 rounded-full"
          style={{
            background: isDark
              ? 'radial-gradient(circle,rgba(16,185,129,0.05),transparent 70%)'
              : 'radial-gradient(circle,rgba(16,185,129,0.09),transparent 70%)',
            filter: 'blur(80px)',
          }} />
      </div>

      <div className={`relative z-10 h-full flex flex-col px-5 sm:px-8 md:px-12 pt-14 pb-8 overflow-y-auto ${styles.contactScroll}`}>

        {/* ── Section label — identical pattern to all pages ── */}
        <div className={`shrink-0 mb-8 ${styles.pageIn}`}>
          <p className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] mb-3"
            style={{ color: accent }}>
            <span className="inline-block w-6 h-px" style={{ background: accent }} />
            Let's Build
          </p>
          <h1
            className="text-3xl sm:text-4xl font-bold leading-tight"
            style={{ color: heading, fontFamily: "ui-sans-serif, system-ui, sans-serif", paddingBottom: '4px' }}
          >
            Ready to turn ideas into{' '}
            <span style={{ color: accent }}>flagship products?</span>
          </h1>
          <p className="mt-2 text-sm max-w-lg leading-relaxed" style={{ color: muted }}>
            Available for full-time roles, freelance, and ambitious collaborations.
            If you're building something real ? I'm in.
          </p>
        </div>

        {/* ── Main grid: left CTA + right cards ── */}
        <div className="grid lg:grid-cols-2 gap-5">

          {/* Left — CTA card */}
          <div
            className={`${styles.cardIn} rounded-2xl p-6 sm:p-8 flex flex-col justify-between gap-6`}
            style={{
              animationDelay: '0.10s',
              background: isDark
                ? 'linear-gradient(145deg,rgba(0,0,0,0.55),rgba(8,16,9,0.50))'
                : 'linear-gradient(145deg,rgba(255,255,255,0.88),rgba(240,248,240,0.80))',
              border: `1px solid ${isDark ? 'rgba(74,222,128,0.10)' : 'rgba(22,101,52,0.12)'}`,
              backdropFilter: 'blur(14px)',
            }}
          >
            {/* Big number / decorative */}
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] mb-4"
                style={{ color: accent }}>
                Open to opportunities
              </p>
              <p className="text-sm leading-relaxed" style={{ color: muted }}>
                Whether it's a startup MVP, a product overhaul, or a long-term engineering role 
                I bring full-stack depth, design sensibility, and a bias for shipping.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="mailto:asankasampath200228@gmail.com"
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-95"
                style={{
                  background: isDark
                    ? 'linear-gradient(135deg,#16a34a,#15803d)'
                    : 'linear-gradient(135deg,#16a34a,#166534)',
                  color: '#fff',
                  boxShadow: '0 4px 20px rgba(22,163,74,0.35)',
                  textDecoration: 'none',
                  fontFamily: "ui-sans-serif, system-ui, sans-serif",
                }}
              >
                <Send className="h-4 w-4" />
                Start a Conversation
              </a>

              <button
                onClick={copyEmail}
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-medium transition-all duration-200 hover:scale-[1.02] active:scale-95"
                style={{
                  background: 'transparent',
                  border: `1px solid ${copied
                    ? 'rgba(74,222,128,0.45)'
                    : isDark ? 'rgba(255,255,255,0.09)' : 'rgba(0,0,0,0.10)'}`,
                  color: copied ? accent : muted,
                  fontFamily: 'monospace',
                  fontSize: '12px',
                  cursor: 'pointer',
                }}
              >
                {copied ? '✓ Copied!' : 'Copy email'}
              </button>
            </div>
          </div>

          {/* Right — contact link cards */}
          <div className="flex flex-col gap-3">
            {contacts.map((item, i) => {
              const Icon = item.icon
              return (
                <a
                  key={item.name}
                  href={item.href}
                  target={item.name === 'Email' ? undefined : '_blank'}
                  rel={item.name === 'Email' ? undefined : 'noopener noreferrer'}
                  className={`${styles.cardIn} group flex items-center justify-between rounded-2xl px-5 py-4 transition-all duration-200 hover:scale-[1.01]`}
                  style={{
                    animationDelay: `${0.15 + i * 0.07}s`,
                    background: isDark
                      ? 'linear-gradient(145deg,rgba(0,0,0,0.55),rgba(8,16,9,0.50))'
                      : 'linear-gradient(145deg,rgba(255,255,255,0.88),rgba(240,248,240,0.80))',
                    border: `1px solid ${isDark ? 'rgba(74,222,128,0.10)' : 'rgba(22,101,52,0.12)'}`,
                    backdropFilter: 'blur(14px)',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.border = `1px solid ${isDark ? 'rgba(74,222,128,0.28)' : 'rgba(22,101,52,0.28)'}`
                    e.currentTarget.style.boxShadow = isDark ? '0 8px 28px rgba(74,222,128,0.07)' : '0 8px 28px rgba(22,101,52,0.07)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.border = `1px solid ${isDark ? 'rgba(74,222,128,0.10)' : 'rgba(22,101,52,0.12)'}`
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  {/* Icon + text */}
                  <div className="flex items-center gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{
                        background: isDark ? 'rgba(74,222,128,0.08)' : 'rgba(22,101,52,0.07)',
                        border: `1px solid ${isDark ? 'rgba(74,222,128,0.14)' : 'rgba(22,101,52,0.12)'}`,
                      }}
                    >
                      <Icon className="h-4 w-4" style={{ color: accent }} />
                    </div>
                    <div>
                      <p
                        className="text-sm font-semibold"
                        style={{ color: heading, fontFamily: "ui-sans-serif, system-ui, sans-serif", margin: 0, paddingBottom: '2px' }}
                      >
                        {item.name}
                      </p>
                      <p className="font-mono text-[10px]" style={{ color: muted, margin: 0 }}>
                        {item.handle}
                      </p>
                    </div>
                  </div>

                  {/* Arrow */}
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    style={{ color: accent, opacity: 0.55 }}
                  />
                </a>
              )
            })}
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div
          className="shrink-0 flex items-center justify-between flex-wrap gap-2 mt-8 pt-5"
          style={{ borderTop: `1px solid ${isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.06)'}` }}
        >
          <p className="font-mono text-[10px]" style={{ color: isDark ? '#334155' : '#cbd5e1', margin: 0 }}>
            © {new Date().getFullYear()} · Built with Next.js & Tailwind
          </p>
          <p className="font-mono text-[10px]" style={{ color: isDark ? '#334155' : '#cbd5e1', margin: 0 }}>
            Asanka · Sri Lanka 🇱🇰
          </p>
        </div>
      </div>
    </section>
  )
}