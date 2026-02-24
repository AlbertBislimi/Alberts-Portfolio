import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Code2, Zap } from 'lucide-react'

const skills = ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Node.js', 'Supabase', 'Figma', 'SEO']

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="rreth" ref={ref} className="py-20 sm:py-28 bg-[#0D0D0D]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: photo placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-[#1A1A1A] border border-white/8 flex items-center justify-center max-w-sm mx-auto md:mx-0">
              {/* Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-purple-500/5" />
              <div className="relative z-10 text-center">
                <div className="w-24 h-24 rounded-full bg-[#2A2A2A] border-2 border-accent/30 mx-auto flex items-center justify-center mb-4">
                  <span className="font-display font-800 text-3xl text-accent">AB</span>
                </div>
                <p className="text-white/40 text-sm font-medium">Foto e Albert</p>
                <p className="text-white/25 text-xs mt-1">Foto do të shtohet</p>
              </div>

              {/* Floating badge */}
              <div className="absolute bottom-5 left-5 right-5 bg-[#0A0A0A]/90 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0">
                  <Zap size={16} className="text-green-400" />
                </div>
                <div>
                  <p className="text-white text-sm font-display font-700">Pranon projekte</p>
                  <p className="text-white/40 text-xs">Pranojmë klientë të rinj tani</p>
                </div>
              </div>
            </div>

            {/* Experience badge */}
            <div className="absolute -top-4 -right-4 md:right-0 w-20 h-20 rounded-2xl bg-accent flex flex-col items-center justify-center shadow-lg shadow-accent/30">
              <span className="font-display font-800 text-2xl text-white">3+</span>
              <span className="text-white/80 text-xs font-medium leading-tight text-center">vite exp.</span>
            </div>
          </motion.div>

          {/* Right: content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="section-label">Rreth meje</span>
            <h2 className="mt-4 font-display font-800 text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
              Developer nga{' '}
              <span className="text-gradient">Ferizaj</span>
            </h2>

            <div className="mt-2 flex items-center gap-2 text-white/50">
              <MapPin size={14} className="text-accent" />
              <span className="text-sm font-medium">Ferizaj, Kosovë</span>
            </div>

            <p className="mt-6 text-white/60 leading-relaxed">
              Jam <strong className="text-white">Albert Bislimi</strong>, web developer me bazë në Ferizaj, Kosovë. 
              Ndërtoj faqe profesionale për bizneset lokale dhe ndërkombëtare që duan prezencë serioze online.
            </p>

            <p className="mt-4 text-white/60 leading-relaxed">
              E kam ndërtuar vetë këtë faqe — që do të thotë se di çfarë po bëj. 
              Punojë me klientë nga Kosova, Shqipëria, Maqedonia, dhe Franca — 
              gjithmonë me komunikim të qartë dhe rezultate reale.
            </p>

            {/* Skills */}
            <div className="mt-8">
              <div className="flex items-center gap-2 mb-4">
                <Code2 size={14} className="text-accent" />
                <span className="text-sm font-display font-600 text-white/70">Teknologjitë që përdor</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-sm font-medium px-3 py-1.5 rounded-lg bg-white/5 border border-white/8 text-white/70"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick facts */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#1A1A1A] border border-white/8">
                <div className="font-display font-700 text-lg text-white">15+</div>
                <div className="text-xs text-white/50 mt-0.5">Projekte të gatshme</div>
              </div>
              <div className="p-4 rounded-xl bg-[#1A1A1A] border border-white/8">
                <div className="font-display font-700 text-lg text-white">7 ditë</div>
                <div className="text-xs text-white/50 mt-0.5">Dorëzim mesatar</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
