import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MessageSquare, Figma, Code2, Rocket } from 'lucide-react'

const steps = [
  {
    num: '01',
    icon: MessageSquare,
    title: 'Konsultim',
    desc: 'Takohemi (online ose personalisht) dhe diskutojmë qëllimet, stilin, dhe nevojat e projektit tuaj.',
    time: 'Ditë 1',
  },
  {
    num: '02',
    icon: Figma,
    title: 'Dizajn',
    desc: 'Krijojmë prototip vizual në Figma. Ju shihni çfarë do të ndërtojmë para se të fillojmë kodimin.',
    time: 'Ditë 2-3',
  },
  {
    num: '03',
    icon: Code2,
    title: 'Zhvillim',
    desc: 'Ndërtojmë faqen me teknologji moderne, responsive, dhe optimizuar për shpejtësi dhe SEO.',
    time: 'Ditë 4-6',
  },
  {
    num: '04',
    icon: Rocket,
    title: 'Lansim',
    desc: 'Testojmë çdo gjë, lançojmë faqen live, dhe ju mësojmë si ta menaxhoni vetë.',
    time: 'Ditë 7',
  },
]

export default function Process() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} className="py-20 sm:py-28 bg-[#0A0A0A]">
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
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line — desktop only */}
          <div className="hidden lg:block absolute top-14 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 32 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative flex flex-col"
              >
                {/* Step circle */}
                <div className="relative mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#1A1A1A] border border-white/8 flex items-center justify-center group-hover:border-accent transition-colors">
                    <step.icon size={22} className="text-accent" />
                  </div>
                  {/* Step number badge */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-accent flex items-center justify-center">
                    <span className="text-white font-display font-700 text-xs">{i + 1}</span>
                  </div>
                </div>

                {/* Time badge */}
                <span className="text-xs font-display font-600 text-accent/80 mb-2">{step.time}</span>

                <h3 className="font-display font-700 text-xl text-white mb-3">{step.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
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
