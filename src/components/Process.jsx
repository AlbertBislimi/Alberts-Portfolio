import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { MessageSquare, Figma, Code2, Rocket } from 'lucide-react'

const steps = [
  {
    num: '01',
    icon: MessageSquare,
    title: 'Konsultim',
    desc: 'Takohemi (online ose personalisht) dhe diskutojmë qëllimet, stilin, dhe nevojat e projektit tuaj.',
    time: 'Ditë 1',
    color: '#3B82F6',
    detail: 'Konsultimi është falas dhe pa asnjë detyrim. Mund të flasim në WhatsApp, Zoom, ose personalisht në Ferizaj.',
  },
  {
    num: '02',
    icon: Figma,
    title: 'Dizajn',
    desc: 'Krijojmë prototip vizual në Figma. Ju shihni çfarë do të ndërtojmë para se të fillojmë kodimin.',
    time: 'Ditë 2–3',
    color: '#8B5CF6',
    detail: 'Ju aprovojeni dizajnin para çdo linje kodi. Ndryshimet në këtë fazë janë të lehta dhe falas.',
  },
  {
    num: '03',
    icon: Code2,
    title: 'Zhvillim',
    desc: 'Ndërtojmë faqen me teknologji moderne, responsive, dhe optimizuar për shpejtësi dhe SEO.',
    time: 'Ditë 4–6',
    color: '#10B981',
    detail: 'React, Tailwind CSS, dhe hosting modern. Faqja ngarkohet nën 1 sekondë dhe funksionon perfekt në çdo pajisje.',
  },
  {
    num: '04',
    icon: Rocket,
    title: 'Lansim',
    desc: 'Testojmë çdo gjë, lançojmë faqen live, dhe ju mësojmë si ta menaxhoni vetë.',
    time: 'Ditë 7',
    color: '#F59E0B',
    detail: '30 ditë mbështetje falas pas lansimit. Nëse diçka nuk funksionon, e rregullojmë menjëherë.',
  },
]

function StepCard({ step, i, isInView }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: i * 0.13, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative flex flex-col cursor-default"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Card */}
      <motion.div
        animate={{
          borderColor: hovered ? `${step.color}40` : 'rgba(255,255,255,0.07)',
          backgroundColor: hovered ? 'rgba(26,26,26,0.9)' : 'rgba(17,17,17,0.6)',
          y: hovered ? -6 : 0,
        }}
        transition={{ duration: 0.28, ease: 'easeOut' }}
        className="relative rounded-2xl border p-6 pb-5 overflow-hidden h-full flex flex-col"
        style={{ borderColor: 'rgba(255,255,255,0.07)' }}
      >
        {/* Glow blob on hover */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            background: `radial-gradient(ellipse at 20% 20%, ${step.color}18 0%, transparent 65%)`,
          }}
        />

        {/* Top row: icon + number */}
        <div className="relative flex items-start justify-between mb-5">
          <motion.div
            className="w-12 h-12 rounded-xl flex items-center justify-center"
            animate={{
              backgroundColor: hovered ? `${step.color}22` : `${step.color}12`,
              scale: hovered ? 1.08 : 1,
            }}
            transition={{ duration: 0.25 }}
          >
            <step.icon size={20} style={{ color: step.color }} />
          </motion.div>

          <motion.span
            className="font-display font-800 text-4xl leading-none select-none"
            animate={{ opacity: hovered ? 0.18 : 0.07, color: step.color }}
            transition={{ duration: 0.25 }}
          >
            {step.num}
          </motion.span>
        </div>

        {/* Time badge */}
        <span
          className="text-xs font-display font-600 mb-2"
          style={{ color: step.color, opacity: 0.8 }}
        >
          {step.time}
        </span>

        <h3 className="font-display font-700 text-lg text-white mb-2">{step.title}</h3>
        <p className="text-sm text-white/45 leading-relaxed flex-1">{step.desc}</p>

        {/* Expanded detail on hover */}
        <AnimatePresence>
          {hovered && (
            <motion.p
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: 'auto', marginTop: 12 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="text-xs leading-relaxed overflow-hidden"
              style={{ color: step.color, opacity: 0.75 }}
            >
              {step.detail}
            </motion.p>
          )}
        </AnimatePresence>

        {/* Bottom accent line */}
        <motion.div
          className="absolute bottom-0 left-6 right-6 h-px rounded-full"
          animate={{ scaleX: hovered ? 1 : 0, opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          style={{
            background: `linear-gradient(90deg, transparent, ${step.color}80, transparent)`,
            transformOrigin: 'center',
          }}
        />
      </motion.div>
    </motion.div>
  )
}

export default function Process() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="procesi" ref={ref} className="py-20 sm:py-28 bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="section-label">Procesi</span>
          <h2 className="mt-4 font-display font-800 text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
            Nga idea deri në{' '}
            <span className="text-gradient">lansim</span>
            <br />brenda 7 ditëve
          </h2>
          <p className="mt-4 text-white/40 text-sm">
            Zhvendos kursorin mbi çdo hap për të mësuar më shumë
          </p>
        </motion.div>

        {/* Connector line — desktop only */}
        <div className="relative">
          <div className="hidden lg:block absolute top-[3.25rem] left-[calc(12.5%+1.5rem)] right-[calc(12.5%+1.5rem)] h-px">
            <div className="w-full h-full bg-gradient-to-r from-transparent via-white/8 to-transparent" />
            {/* Animated dots along the line */}
            {[0, 33, 66].map((pos) => (
              <motion.div
                key={pos}
                className="absolute top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-white/20"
                style={{ left: `${pos}%` }}
                animate={{ opacity: [0.2, 0.6, 0.2] }}
                transition={{ duration: 2.4, repeat: Infinity, delay: pos * 0.012 }}
              />
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((step, i) => (
              <StepCard key={i} step={step} i={i} isInView={isInView} />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.65 }}
          className="mt-14 text-center"
        >
          <a href="#kontakt" className="btn-primary inline-flex text-base">
            Fillo me konsultimin falas
          </a>
        </motion.div>
      </div>
    </section>
  )
}
