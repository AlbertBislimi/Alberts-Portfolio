import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const skills = [
  { name: 'React / Next.js', level: 95 },
  { name: 'Node.js / Express', level: 88 },
  { name: 'TypeScript', level: 85 },
  { name: 'PostgreSQL / Supabase', level: 85 },
  { name: 'Tailwind CSS', level: 95 },
  { name: 'REST APIs & GraphQL', level: 82 },
]

const tech = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'Convex',
  'Supabase', 'PostgreSQL', 'Tailwind CSS', 'Framer Motion',
  'Vite', 'Git', 'Vercel',
]

export default function About() {
  const { ref, inView } = useInView()

  return (
    <section id="about" ref={ref} className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">About Me</p>
          <h2 className="text-4xl md:text-5xl font-black text-white">Who I Am</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              I'm Albert Bislimi, a full-stack developer from Kosovo building
              end-to-end web solutions. I work across the entire stack — from
              database design and API architecture to pixel-perfect UIs and
              deployment.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              I specialize in helping local Kosovo businesses establish a strong
              online presence with fast, modern websites that actually convert
              visitors into customers. My clients range from restaurants and
              salons to clinics and online marketplaces.
            </p>
            <div className="flex flex-wrap gap-2">
              {tech.map(t => (
                <span key={t} className="px-3 py-1 rounded-full bg-[#1a1a25] border border-white/10 text-slate-300 text-sm font-medium">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-5"
          >
            {skills.map((skill, i) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="text-slate-300 text-sm font-medium">{skill.name}</span>
                  <span className="text-primary text-sm font-semibold">{skill.level}%</span>
                </div>
                <div className="h-2 bg-[#1a1a25] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: 0.3 + i * 0.1, ease: 'easeOut' }}
                    className="h-full bg-gradient-to-r from-primary to-violet-500 rounded-full"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
