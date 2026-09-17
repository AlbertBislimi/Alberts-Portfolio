import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, Eye } from 'lucide-react'
import { useLang } from '../i18n/useLang'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] },
  }),
}

function HeroPreview() {
  const { t } = useLang()
  const previews = [
    {
      src: '/projects/mysearch.png',
      label: 'MySearch Agency',
      tabLabel: 'MySearch',
      href: 'https://mysearchagency.com',
      accent: '#F97316',
      className: 'left-0 top-0',
    },
    {
      src: '/projects/gjeje.png',
      label: 'Gjeje.online',
      tabLabel: 'Gjeje',
      href: 'https://gjejeonline.com',
      accent: '#10B981',
      className: 'right-0 top-3',
    },
    {
      src: '/projects/nubis.png',
      label: 'Nubis.app',
      tabLabel: 'Nubis',
      href: 'https://nubis.app',
      accent: '#3B82F6',
      className: 'left-5 top-[170px]',
    },
    {
      src: '/projects/swiss-dental.png',
      label: 'Swiss Dental Ferizaj',
      tabLabel: 'Swiss Dental',
      href: 'https://swiss-dental-ferizaj-demo.surge.sh',
      accent: '#0EA5E9',
      className: 'right-0 top-[176px]',
    },
    {
      src: '/projects/ame-company.png',
      label: 'AME Company',
      tabLabel: 'AME',
      href: 'https://ame-company.surge.sh/',
      accent: '#F5C518',
      className: 'left-0 top-[340px]',
    },
    {
      src: '/projects/pps.png',
      label: 'Prishtina Profesional Security',
      tabLabel: 'PPS',
      href: 'https://prishtina-profesional-security-demo.surge.sh',
      accent: '#B91C1C',
      className: 'right-2 top-[346px]',
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, x: 42, scale: 0.96 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.85, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
      style={{ top: 'calc(47% - 260px)' }}
      className="hero-preview absolute right-4 z-20 hidden h-[520px] w-[470px] xl:block"
    >
      <div className="pointer-events-none absolute inset-0 bg-accent/10 blur-[120px]" />
      {previews.map((preview, index) => (
        <motion.a
          key={preview.label}
          href={preview.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${preview.label} — ${t['work.viewLive']}`}
          initial={{ opacity: 0, x: 30, y: 18, scale: 0.94 }}
          animate={{
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            transition: { duration: 0.55, delay: 0.35 + index * 0.08, ease: [0.22, 1, 0.36, 1] },
          }}
          whileHover={{
            y: -8,
            scale: 1.25,
            zIndex: 20,
            transition: { type: 'spring', stiffness: 300, damping: 24 },
          }}
          whileFocus={{
            y: -8,
            scale: 1.25,
            zIndex: 20,
            transition: { type: 'spring', stiffness: 300, damping: 24 },
          }}
          whileTap={{ scale: 0.995 }}
          className={`group absolute h-[154px] w-[214px] origin-center outline-none focus-visible:z-30 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-[#0A0A0A] ${preview.className}`}
        >
          <div className="absolute left-0 top-0 z-10 flex h-6 max-w-[138px] items-center gap-1.5 rounded-t-xl border border-b-0 border-white/10 bg-[#1A1A1A] px-3">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: preview.accent }} />
            <span className="truncate text-[9px] font-semibold uppercase tracking-[0.1em] text-white/65">
              {preview.tabLabel}
            </span>
          </div>
          <div className="relative mt-5 h-[132px] overflow-hidden rounded-b-2xl rounded-tr-2xl border border-white/12 bg-[#111] shadow-xl shadow-black/30">
            <img
              src={preview.src}
              alt=""
              className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.08] group-focus-visible:scale-[1.08]"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/5 to-transparent opacity-85 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 px-3 pb-3">
              <div className="min-w-0">
                <span className="block truncate font-display text-sm font-700 text-white">{preview.label}</span>
                <span
                  className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.13em] opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100"
                  style={{ color: preview.accent }}
                >
                  {t['work.viewLive']}
                </span>
              </div>
              <ArrowUpRight
                size={15}
                className="mb-0.5 shrink-0 text-white/70 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-focus-visible:-translate-y-0.5 group-focus-visible:translate-x-0.5"
              />
            </div>
          </div>
        </motion.a>
      ))}
    </motion.div>
  )
}

export default function Hero() {
  const { t } = useLang()

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0A0A0A]">
      {/* Grain texture overlay */}
      <div className="grain absolute inset-0 pointer-events-none" />

      {/* Background glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-accent/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-blue-400/5 blur-[100px] pointer-events-none" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <HeroPreview />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 pt-28 pb-20 xl:pr-[500px]">

        {/* Main headline */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="font-display font-800 text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight max-w-4xl xl:max-w-3xl"
        >
          {t['hero.title.before']}{' '}
          <span className="text-gradient">{t['hero.title.highlight']}</span>
          {' '}{t['hero.title.after']}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="mt-6 text-lg sm:text-xl text-white/55 max-w-2xl leading-relaxed"
        >
          {t['hero.subtitle']}
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <a href="#kontakt" className="btn-primary text-base py-4 px-8">
            {t['hero.cta.primary']}
            <ArrowRight size={18} />
          </a>
          <a href="#punimet" className="btn-secondary text-base py-4 px-8">
            <Eye size={18} />
            {t['hero.cta.secondary']}
          </a>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={4}
          className="mt-14 flex flex-wrap items-center gap-6 text-sm text-white/40"
        >
          <span className="flex items-center gap-2">
            <span className="text-accent">✓</span>
            {t['hero.trust.1']}
          </span>
          <span className="w-px h-4 bg-white/10 hidden sm:block" />
          <span className="flex items-center gap-2">
            <span className="text-accent">✓</span>
            {t['hero.trust.2']}
          </span>
          <span className="w-px h-4 bg-white/10 hidden sm:block" />
          <span className="flex items-center gap-2">
            <span className="text-accent">✓</span>
            {t['hero.trust.3']}
          </span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-white/30 tracking-widest uppercase">{t['hero.scroll']}</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent"
        />
      </motion.div>
    </section>
  )
}
