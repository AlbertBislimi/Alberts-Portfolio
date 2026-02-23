import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const skills = [
  { name: 'React / Next.js', level: 95 },
  { name: 'Node.js / Express', level: 88 },
  { name: 'TypeScript', level: 85 },
  { name: 'Tailwind CSS', level: 95 },
  { name: 'PostgreSQL / Supabase', level: 82 },
  { name: 'UI/UX Design', level: 80 },
]

function SkillBar({ name, level, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between text-sm mb-1.5">
        <span className="text-gray-300">{name}</span>
        <span className="text-gray-500">{level}%</span>
      </div>
      <div className="h-1.5 bg-dark-border rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay: index * 0.1, ease: 'easeOut' }}
          className="h-full bg-gradient-to-r from-brand to-purple-400 rounded-full"
        />
      </div>
    </div>
  )
}

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="py-24 max-w-6xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left — text */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="text-sm text-brand font-medium uppercase tracking-widest">About Me</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-6">
            A Developer Who{' '}
            <span className="gradient-text">Gets It Done</span>
          </h2>
          <div className="space-y-4 text-gray-400 leading-relaxed">
            <p>
              I'm Albert Bislimi, a full-stack developer from Kosovo with a passion for building
              digital products that actually work for businesses. I combine technical depth
              with a designer's eye — because great software should look as good as it performs.
            </p>
            <p>
              Over the past 3+ years, I've helped local businesses in Kosovo and clients
              worldwide launch websites, SaaS platforms, and e-commerce stores that drive
              real results. I believe Kosovo businesses deserve world-class digital tools.
            </p>
            <p>
              When I'm not coding, I'm exploring the latest in AI, contributing to open-source,
              or drinking way too much coffee ☕
            </p>
          </div>

          <div className="mt-8 flex gap-4">
            <a href="#contact" className="btn-primary">Get in Touch</a>
            <a
              href="https://github.com/AlbertBislimi"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline flex items-center gap-2"
            >
              GitHub →
            </a>
          </div>
        </motion.div>

        {/* Right — skills */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h3 className="font-display font-bold text-lg mb-6 text-gray-300">Tech Stack</h3>
          {skills.map((skill, i) => (
            <SkillBar key={skill.name} {...skill} index={i} />
          ))}

          <div className="mt-8 grid grid-cols-2 gap-4">
            {[
              { icon: '📍', text: 'Based in Kosovo' },
              { icon: '🌍', text: 'Remote-friendly' },
              { icon: '💬', text: 'English & Albanian' },
              { icon: '⚡', text: 'Fast turnaround' },
            ].map(item => (
              <div key={item.text} className="card px-4 py-3 flex items-center gap-3 text-sm text-gray-400">
                <span>{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
