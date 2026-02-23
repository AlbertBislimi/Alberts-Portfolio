import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const businessTypes = ['Restaurants', 'Gyms', 'Salons', 'Hotels', 'Clinics', 'Shops']

export default function Hero() {
  const [idx, setIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = businessTypes[idx]
    let t
    if (!deleting && displayed.length < word.length) {
      t = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80)
    } else if (!deleting && displayed.length === word.length) {
      t = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && displayed.length > 0) {
      t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 50)
    } else {
      setDeleting(false)
      setIdx(i => (i + 1) % businessTypes.length)
    }
    return () => clearTimeout(t)
  }, [displayed, deleting, idx])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div animate={{ scale: [1,1.2,1], opacity: [0.3,0.5,0.3] }} transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-40 -left-40 w-96 h-96 rounded-full blur-3xl bg-[#6366f1]/20" />
        <motion.div animate={{ scale: [1.2,1,1.2], opacity: [0.2,0.4,0.2] }} transition={{ duration: 10, repeat: Infinity }}
          className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full blur-3xl bg-[#8b5cf6]/20" />
        <motion.div animate={{ x: [0,30,0], y: [0,-30,0] }} transition={{ duration: 12, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-3xl bg-pink-500/10" />
      </div>
      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.1) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-white/60 mb-8">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          Available for new projects · Kosovo & Remote
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
          Websites That Bring<br />Clients To Your{' '}
          <span className="text-gradient">{displayed}<span className="animate-pulse">|</span></span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-white/50 max-w-2xl mx-auto mb-10 font-light">
          Kosovo's modern web studio. Fast, beautiful websites that rank on Google and convert visitors into real customers.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] px-8 py-4 rounded-full text-base font-semibold hover:opacity-90 transition-all hover:scale-105 shadow-lg shadow-[#6366f1]/25">
            See Our Work
          </button>
          <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="border border-white/20 px-8 py-4 rounded-full text-base font-medium text-white/70 hover:text-white hover:border-white/40 transition-all">
            Get a Free Quote →
          </button>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center gap-12 mt-16 pt-16 border-t border-white/5">
          {[['20+', 'Projects Delivered'], ['3+', 'Years Experience'], ['100%', 'Client Satisfaction']].map(([n, l]) => (
            <div key={l} className="text-center">
              <div className="text-3xl font-bold text-gradient">{n}</div>
              <div className="text-sm text-white/40 mt-1">{l}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/20">
        <div className="w-6 h-10 border-2 border-current rounded-full flex items-start justify-center pt-1.5">
          <div className="w-1 h-2 bg-current rounded-full" />
        </div>
      </motion.div>
    </section>
  )
}
