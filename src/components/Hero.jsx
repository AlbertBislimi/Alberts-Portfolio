import { motion } from 'framer-motion'
import { ArrowRight, Eye } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] },
  }),
}

export default function Hero() {
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

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 pt-28 pb-20">

        {/* Main headline */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="font-display font-800 text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight max-w-4xl"
        >
          Website që{' '}
          <span className="text-gradient">bizneset e Kosovës</span>
          {' '}i duan
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="mt-6 text-lg sm:text-xl text-white/55 max-w-2xl leading-relaxed"
        >
          Projektojmë dhe ndërtojmë website profesionale që sjellin klientë të rinj
          me çmime transparente, dorëzim i shpejtë, dhe komunikim në shqip.
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
            Fillo projektin
            <ArrowRight size={18} />
          </a>
          <a href="#punimet" className="btn-secondary text-base py-4 px-8">
            <Eye size={18} />
            Shiko punimet
          </a>
        </motion.div>

        {/* Estimator nudge */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3.5}
          className="mt-5"
        >
          <a
            href="#estimator"
            className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors group"
          >
            <span className="text-accent">💰</span>
            Nuk jeni të sigurt për çmimin?
            <span className="text-accent group-hover:underline underline-offset-2">Llogaritni këtu →</span>
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
            Çmime transparente
          </span>
          <span className="w-px h-4 bg-white/10 hidden sm:block" />
          <span className="flex items-center gap-2">
            <span className="text-accent">✓</span>
            Komunikim në shqip
          </span>
          <span className="w-px h-4 bg-white/10 hidden sm:block" />
          <span className="flex items-center gap-2">
            <span className="text-accent">✓</span>
            Dorëzim brenda 7 ditëve
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
        <span className="text-xs text-white/30 tracking-widest uppercase">Zbulo</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent"
        />
      </motion.div>
    </section>
  )
}
