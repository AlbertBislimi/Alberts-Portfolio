import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: 'easeOut' } },
})

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-20 text-center">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.span
            variants={fadeUp(0)}
            className="inline-block text-sm font-medium text-brand bg-brand/10 border border-brand/20 rounded-full px-4 py-1.5 mb-6"
          >
            🇽🇰 Based in Kosovo — Serving Businesses Worldwide
          </motion.span>

          <motion.h1
            variants={fadeUp(0.1)}
            className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6"
          >
            I Build{' '}
            <span className="gradient-text">Digital Products</span>
            <br />
            That Grow Businesses
          </motion.h1>

          <motion.p
            variants={fadeUp(0.2)}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            Full-stack web developer helping Kosovo businesses and startups launch
            fast, convert visitors into customers, and stand out online.
          </motion.p>

          <motion.div
            variants={fadeUp(0.3)}
            className="flex flex-wrap gap-4 justify-center"
          >
            <a href="#portfolio" className="btn-primary">
              View My Work →
            </a>
            <a href="#contact" className="btn-outline">
              Let's Talk
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeUp(0.4)}
            className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto"
          >
            {[
              { value: '20+', label: 'Projects Built' },
              { value: '15+', label: 'Happy Clients' },
              { value: '3+', label: 'Years Experience' },
            ].map(stat => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-3xl font-bold gradient-text">{stat.value}</div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-8 bg-gradient-to-b from-gray-600 to-transparent"
        />
      </motion.div>
    </section>
  )
}
