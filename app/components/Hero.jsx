'use client'
import { FiDownload, FiMail, FiArrowUpRight } from 'react-icons/fi'
import { FaGithub, FaLinkedinIn, FaMediumM } from 'react-icons/fa'
import Image from 'next/image'
import { useTheme } from '@/app/components/ThemeProvider'
import styles from '@/app/components/Hero.module.css'


const socials = [
  { href: 'https://github.com/AsankaXtremeS',                icon: FaGithub,     label: 'GitHub'   },
  { href: 'https://www.linkedin.com/in/asanka-s-a5b5b42a9/', icon: FaLinkedinIn, label: 'LinkedIn' },
  { href: 'https://medium.com/@asankasampath200228',          icon: FaMediumM,    label: 'Medium'   },
]

// ── Per-letter animated word ───────────────────────────────────────────────
function AnimatedWord({ text, baseDelay = 0, className = '', style = {} }) {
  return (
    <span className={`block ${className}`} style={style} aria-label={text}>
      {text.split('').map((ch, i) => (
        <span
          key={i}
          aria-hidden="true"
          className={`inline-block ${styles.animateLetter}`}
          style={{ animationDelay: `${baseDelay + i * 0.045}s` }}
        >
          {ch === ' ' ? '\u00A0' : ch}
        </span>
      ))}
    </span>
  )
}

export default function Hero() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const t = isDark
    ? {
        pageBg:     'bg-[#070a08]',
        nameColor:  'text-white',
        panel:      'bg-black/80 border-emerald-400/35 text-emerald-100',
        panelHover: 'hover:border-green-300/70 hover:text-green-300',
        cta:        'bg-green-500/20 border-emerald-300 text-green-200 hover:bg-green-500/30 hover:border-green-200',
        ctaSecond:  'bg-black/80 border-emerald-400/35 text-emerald-100 hover:border-green-300/70 hover:text-green-300',
        statusText: 'text-green-300',
        descText:   'text-emerald-100/75',
        pillText:   'text-green-300',
        badgeText:  'text-green-300',
        badgeSub:   'text-emerald-400/60',
        handle:     'text-emerald-400/50',
        rule:       'from-green-500',
        watermark1: 'text-white/[0.025]',
        watermark2: 'text-green-500/[0.055]',
        orb1:       'bg-green-500/10',
        orb2:       'bg-emerald-600/[0.08]',
        bracket:    'border-emerald-300/60',
        bracketDim: 'border-emerald-400/25',
      }
    : {
        pageBg:     'bg-[#f0f4f1]',
        nameColor:  'text-gray-900',
        panel:      'bg-white/90 border-emerald-600/20 text-slate-800',
        panelHover: 'hover:border-green-600/50 hover:text-green-700',
        cta:        'bg-green-500 border-green-500 text-white hover:bg-green-600 hover:border-green-600',
        ctaSecond:  'bg-white/90 border-slate-200 text-slate-800 hover:border-green-500/60 hover:text-green-700',
        statusText: 'text-green-700',
        descText:   'text-slate-600',
        pillText:   'text-green-700',
        badgeText:  'text-green-700',
        badgeSub:   'text-slate-400',
        handle:     'text-slate-400',
        rule:       'from-green-600',
        watermark1: 'text-black/[0.04]',
        watermark2: 'text-green-600/[0.06]',
        orb1:       'bg-green-400/20',
        orb2:       'bg-emerald-400/12',
        bracket:    'border-green-600/40',
        bracketDim: 'border-green-500/20',
      }

  const handleDownloadCV = () => {
    const link = document.createElement('a')
    link.href = '/Assets/CV.pdf'
    link.download = 'Asanka_Sampath_CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section
      id="home"
      className={`relative min-h-screen w-full overflow-hidden flex flex-col justify-center
        px-6 sm:px-10 md:px-16 lg:px-24 pt-16 pb-14 transition-colors duration-500 ${t.pageBg}`}
    >
      {/* ── Watermark — slides in from opposite sides ── */}
      <div aria-hidden="true" className="pointer-events-none select-none absolute inset-0 flex flex-col justify-center overflow-hidden">
        <span
          className={`font-black uppercase leading-none tracking-tighter ${styles.animateWmLeft} ${t.watermark1}`}
          style={{ fontSize: 'clamp(90px, 21vw, 270px)', lineHeight: 0.82 }}
        >
          ASANKA
        </span>
        <span
          className={`font-black uppercase leading-none tracking-tighter ${styles.animateWmRight} ${t.watermark2}`}
          style={{ fontSize: 'clamp(55px, 13vw, 165px)', lineHeight: 0.82, marginLeft: '4vw' }}
        >
          SAMPATH
        </span>
      </div>

      {/* ── Orbs ── */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className={`absolute top-[15%] right-[8%] w-72 h-72 rounded-full blur-[100px] ${t.orb1}`} />
        <div className={`absolute bottom-[10%] left-[5%] w-56 h-56 rounded-full blur-[80px] ${t.orb2}`} />
      </div>

      {/* ── Main grid ── */}
      <div className="relative z-10 grid lg:grid-cols-[1fr_auto] gap-14 lg:gap-6 items-center max-w-7xl mx-auto w-full">

        {/* Left */}
        <div className="flex flex-col gap-5 sm:gap-6">

          {/* Status badge */}
          <div
            className={`inline-flex items-center gap-2.5 self-start rounded-xl border px-3.5 py-2 backdrop-blur-md ${styles.animateFadeUp} ${t.panel}`}
            style={{ animationDelay: '0.05s' }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            <span className={`font-mono text-[10px] sm:text-xs uppercase tracking-[0.24em] font-semibold ${t.statusText}`}>
              Fullstack Engineer · AI/ML Enthusiast
            </span>
          </div>

          {/* ── Title — letter-by-letter drop ── */}
          <h1 className="font-black uppercase leading-[0.86] tracking-tight overflow-hidden">
            <AnimatedWord
              text="ASANKA"
              baseDelay={0.15}
              className={`${t.nameColor} black-ops-one-regular`}
              style={{
                fontSize: 'clamp(48px, 9.5vw, 124px)',
                fontFamily: "'Black Ops One', system-ui",
              }}
            />
            <AnimatedWord
              text="FULL-STACK DEV"
              baseDelay={0.52}
              className="text-green-500"
              style={{ fontSize: 'clamp(26px, 5vw, 65px)', letterSpacing: '0.06em' }}
            />
          </h1>

          {/* Rule */}
          <div
            className={`h-[2px] rounded-full ${styles.animateExpand} bg-gradient-to-r ${t.rule} to-transparent`}
            style={{ animationDelay: '1.15s' }}
          />

          {/* Description */}
          <div
            className={`${styles.animateFadeUp} max-w-[520px] rounded-2xl border px-5 py-4 backdrop-blur-md ${t.panel}`}
            style={{ animationDelay: '1.25s' }}
          >
            <p className={`text-sm sm:text-[15px] leading-[1.85] font-light ${t.descText}`}>
              An undergraduate Fullstack Software Engineer passionate about clean
              architecture, scalable systems, and writing code that actually makes sense.
              Currently exploring the world of AI/ML and how it fits into real-world products.
            </p>
          </div>

          

          {/* CTA */}
          <div className={`flex flex-wrap items-center gap-3 sm:gap-4 ${styles.animateFadeUp}`} style={{ animationDelay: '1.48s' }}>
            <button
              onClick={handleDownloadCV}
              className={`group inline-flex items-center gap-2 rounded-xl border font-semibold
                text-sm px-5 py-3 transition-all duration-300 hover:scale-110 shadow-lg shadow-green-500/15 ${t.cta}`}
            >
              <FiDownload className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
              Download CV
            </button>
            <a
              href="mailto:your.email@example.com"
              className={`group inline-flex items-center gap-2 rounded-xl border font-semibold
                text-sm px-5 py-3 transition-all duration-300 hover:scale-110 ${t.ctaSecond}`}
            >
              <FiMail className="w-4 h-4" />
              Get in Touch
              <FiArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Socials */}
          <div className={`flex items-center gap-2 ${styles.animateFadeUp}`} style={{ animationDelay: '1.58s' }}>
            {socials.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`h-11 w-11 rounded-xl border flex items-center justify-center
                  transition-all duration-300 hover:scale-110 ${t.panel} ${t.panelHover}`}
              >
                <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            ))}
            <span className={`font-mono text-xs ml-2 ${t.handle}`}>Platform & Social links</span>
          </div>
        </div>

        {/* Right — Photo */}
        <div className={`flex justify-center lg:justify-end lg:pl-10 ${styles.animateFadeUp}`} style={{ animationDelay: '0.3s' }}>
          <div className="relative">
            <div className="absolute inset-0 -z-10 scale-95 rounded-3xl blur-[56px] bg-green-500/20" />

            <div className={`absolute -top-4 -left-4 w-9 h-9 border-t-2 border-l-2 rounded-tl-lg ${t.bracket}`} />
            <div className={`absolute -top-4 -right-4 w-9 h-9 border-t-2 border-r-2 rounded-tr-lg ${t.bracketDim}`} />
            <div className={`absolute -bottom-4 -left-4 w-9 h-9 border-b-2 border-l-2 rounded-bl-lg ${t.bracketDim}`} />
            <div className={`absolute -bottom-4 -right-4 w-9 h-9 border-b-2 border-r-2 rounded-br-lg ${t.bracket}`} />

            <div className="overflow-hidden rounded-2xl">
              <Image
                src="/Assets/profilev2.png"
                alt="Asanka Sampath – Fullstack Software Engineer"
                width={500}
                height={560}
                priority
                style={{ height: 'auto' }}
                className="w-[290px] sm:w-[340px] md:w-[400px] lg:w-[440px] xl:w-[500px] h-auto object-cover"
              />
            </div>

            <div className={`absolute -bottom-6 -left-8 sm:-left-12 flex items-center gap-2.5
              rounded-xl border px-4 py-3 backdrop-blur-md shadow-xl ${styles.animateFloatSoft} ${t.panel}`}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              <span className={`font-mono text-[11px] sm:text-[13px] font-semibold whitespace-nowrap ${t.badgeText}`}>
                Open to opportunities
              </span>
            </div>

            <div className={`absolute -top-5 -right-5 sm:-right-9 rounded-xl border px-4 py-2.5
              backdrop-blur-md shadow-xl ${styles.animateFloatSoftDelay} ${t.panel}`}>
              <p className={`font-mono text-[11px] sm:text-[13px] font-bold ${t.badgeText}`}>UG · CS</p>
              <p className={`font-mono text-[10px] sm:text-[11px] ${t.badgeSub}`}>Software Eng.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}