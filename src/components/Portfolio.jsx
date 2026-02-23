import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const projects = [
  {
    title: 'Gjeje Online',
    desc: 'Kosovo marketplace for buying and selling used items. Full-stack: React, Supabase, TypeScript, Tailwind. Real-time messaging, premium seller subscriptions, 100+ categories.',
    tags: ['React', 'Supabase', 'TypeScript', 'Tailwind'],
    github: 'https://github.com/AlbertBislimi/marketplace',
    demo: 'https://gjejeonline.com',
    color: 'from-blue-500/20 to-cyan-500/20',
    accent: 'border-blue-500/30',
  },
  {
    title: 'Mission Control Dashboard',
    desc: 'Multi-agent AI coordination dashboard. Real-time task management, Kanban boards, agent monitoring, and team communication for AI development teams.',
    tags: ['React', 'Convex', 'TypeScript', 'Real-time'],
    github: 'https://github.com/AlbertBislimi',
    demo: '#',
    color: 'from-violet-500/20 to-purple-500/20',
    accent: 'border-violet-500/30',
  },
  {
    title: 'E-Commerce Platform',
    desc: 'Full e-commerce solution with product management, payments, order tracking, and admin dashboard. Built for small Kosovo businesses to sell online.',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
    github: 'https://github.com/AlbertBislimi',
    demo: '#',
    color: 'from-emerald-500/20 to-teal-500/20',
    accent: 'border-emerald-500/30',
  },
  {
    title: 'Restaurant Booking System',
    desc: 'Table reservation system with admin panel, automated confirmations, and real-time availability calendar. Deployed for a Pristina restaurant.',
    tags: ['React', 'Node.js', 'Supabase', 'Realtime'],
    github: 'https://github.com/AlbertBislimi',
    demo: '#',
    color: 'from-orange-500/20 to-rose-500/20',
    accent: 'border-orange-500/30',
  },
]

export default function Portfolio() {
  const { ref, inView } = useInView()

  return (
    <section id="portfolio" ref={ref} className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">My Work</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Recent Projects</h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            A selection of projects I've built — from marketplaces to dashboards to business tools.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className={`group p-6 rounded-2xl bg-gradient-to-br ${project.color} border ${project.accent} glass hover:scale-[1.01] transition-transform`}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-white font-bold text-xl">{project.title}</h3>
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 glass rounded-lg text-slate-400 hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  {project.demo !== '#' && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 glass rounded-lg text-slate-400 hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.desc}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-full bg-white/5 text-slate-300 text-xs font-medium border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center mt-10"
        >
          <a
            href="https://github.com/AlbertBislimi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 glass border border-white/10 rounded-xl text-slate-300 hover:text-white transition-all font-medium"
          >
            <Github className="w-4 h-4" />
            See More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
