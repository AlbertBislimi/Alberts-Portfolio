import { motion } from 'framer-motion'
import { ArrowRight, Eye } from 'lucide-react'
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
  const previews = [
    {
      src: '/projects/mysearch.png',
      label: 'MySearch Agency',
      className: 'left-0 top-20 w-[360px] rotate-[-4deg]',
      objectPosition: 'center top',
    },
    {
      src: '/projects/swiss-dental.png',
      label: 'Swiss Dental Ferizaj',
      className: 'right-2 top-0 w-[340px] rotate-[3deg]',
      objectPosition: 'center top',
    },
    {
      src: '/projects/nubis.png',
      label: 'Nubis.app',
      className: 'bottom-14 left-24 w-[390px] rotate-[2deg]',
      objectPosition: 'center top',
    },
  ]

  return (
    <motion.div
      aria-hidden="true"
      initial={{ opacity: 0, x: 42, scale: 0.96 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.85, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
      className="hero-preview pointer-events-none absolute right-0 top-[45%] z-[2] hidden h-[560px] w-[620px] -translate-y-1/2 xl:block"
    >
      <div className="absolute inset-0 bg-accent/10 blur-[120px]" />
      {previews.map((preview, index) => (
        <motion.div
          key={preview.label}
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.5 + index * 0.12 }}
          className={`absolute overflow-hidden rounded-2xl border border-white/12 bg-[#151515] shadow-2xl shadow-black/40 ${preview.className}`}
        >
          <div className="flex h-9 items-center gap-2 border-b border-white/10 bg-white/[0.04] px-4">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-300/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
            <span className="hero-preview-label ml-3 truncate text-xs font-medium text-white/45">{preview.label}</span>
          </div>
          <img
            src={preview.src}
            alt=""
            className="h-52 w-full object-cover object-top"
            style={{ objectPosition: preview.objectPosition }}
            loading="eager"
          />
        </motion.div>
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
