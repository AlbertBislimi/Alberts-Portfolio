import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const projects = [
  {
    title: 'Moon Dashboard',
    desc: 'AI-powered project management dashboard with real-time agent collaboration, task tracking, and Convex backend.',
    tags: ['React', 'Convex', 'Tailwind', 'AI'],
    category: 'App',
    color: 'from-purple-900/40 to-brand/10',
  },
  {
    title: 'Kosovo Restaurant POS',
    desc: 'Full-stack point-of-sale system for a Pristina restaurant chain. Order management, inventory, and analytics.',
    tags: ['Next.js', 'Supabase', 'Stripe'],
    category: 'E-Commerce',
    color: 'from-blue-900/40 to-cyan-900/20',
  },
  {
    title: 'Real Estate Platform',
    desc: 'Property listing platform for Kosovo market with map integration, filters, and agent contact system.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Maps'],
    category: 'Platform',
    color: 'from-green-900/40 to-emerald-900/20',
  },
  {
    title: 'Agency Landing Page',
    desc: 'High-converting landing page for a digital marketing agency. Achieved 40% increase in lead generation.',
    tags: ['Vite', 'Framer Motion', 'EmailJS'],
    category: 'Landing',
    color: 'from-orange-900/40 to-red-900/20',
  },
  {
    title: 'E-Learning Platform',
    desc: 'Online course platform with video streaming, progress tracking, quizzes, and certification system.',
    tags: ['React', 'Firebase', 'Stripe'],
    category: 'App',
    color: 'from-pink-900/40 to-purple-900/20',
  },
  {
    title: 'Logistics Dashboard',
    desc: 'Real-time fleet tracking and delivery management system for a Kosovo logistics company.',
    tags: ['Vue.js', 'WebSockets', 'Maps API'],
    category: 'Platform',
    color: 'from-indigo-900/40 to-blue-900/20',
  },
]

const categories = ['All', 'App', 'Platform', 'E-Commerce', 'Landing']

function ProjectCard({ project, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="card overflow-hidden group hover:border-brand/30 transition-all duration-300 hover:-translate-y-1"
    >
      {/* Gradient header */}
      <div className={`h-40 bg-gradient-to-br ${project.color} flex items-center justify-center relative`}>
        <div className="absolute inset-0 bg-dark-card/40" />
        <span className="relative text-4xl">
          {project.category === 'App' ? '💻' :
           project.category === 'Platform' ? '🌐' :
           project.category === 'E-Commerce' ? '🛒' : '🚀'}
        </span>
        <span className="absolute top-3 right-3 text-xs bg-brand/20 text-brand border border-brand/30 rounded-full px-2.5 py-1">
          {project.category}
        </span>
      </div>

      <div className="p-5">
        <h3 className="font-display font-bold text-base mb-2 group-hover:text-brand transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.desc}</p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map(tag => (
            <span key={tag} className="text-xs bg-dark border border-dark-border rounded-md px-2 py-0.5 text-gray-500">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Portfolio() {
  const [active, setActive] = useState('All')
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true })

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active)

  return (
    <section id="portfolio" className="py-24 bg-dark-card/30">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm text-brand font-medium uppercase tracking-widest">Portfolio</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-4">
            Projects I'm{' '}
            <span className="gradient-text">Proud Of</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Real products built for real clients. From MVPs to full-scale platforms.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`text-sm px-4 py-2 rounded-lg border transition-all duration-200 ${
                active === cat
                  ? 'bg-brand text-white border-brand'
                  : 'border-dark-border text-gray-400 hover:border-brand/40 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
