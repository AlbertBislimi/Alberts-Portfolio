import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: 'MySearch Agency',
    category: 'Job & Real Estate Platform · Kosovo',
    desc: 'Platformë për punësime dhe patundshmëri në Kosovë, me listim postimesh, filtra të avancuar dhe panel admin.',
    url: 'https://mysearchagency.com',
    image: '/projects/mysearch.png',
    tags: ['React', 'Supabase', 'Tailwind'],
    color: '#F97316',
    year: '2025',
    highlight: 'Platform i plotë',
  },
  {
    title: 'Nubis.app',
    category: 'Project Management SaaS',
    desc: 'Platformë e menaxhimit të projekteve me board-e, tasks, dhe kolaboracion në kohë reale.',
    url: 'https://nubis.app',
    image: '/projects/nubis.png',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    color: '#3B82F6',
    year: '2024',
    highlight: 'SaaS i plotë',
  },
  {
    title: 'Gjeje.online',
    category: 'Discovery Platform · Kosovo',
    desc: 'Platformë lokale për zbulimin e bizneseve dhe shërbimeve në Kosovë, me harta, filtra, dhe reviews.',
    url: 'https://gjejeonline.com',
    image: '/projects/gjeje.png',
    tags: ['React', 'Supabase', 'Maps API'],
    color: '#10B981',
    year: '2025',
    highlight: 'Made in Kosovo',
  },
]

export default function SelectedWork() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="punimet" ref={ref} className="py-20 sm:py-28 bg-[#0D0D0D]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 flex flex-col sm:flex-row sm:items-end justify-between gap-6"
        >
          <div>
            <span className="section-label">Punimet</span>
            <h2 className="mt-4 font-display font-800 text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
              Projektet e{' '}
              <span className="text-gradient">zgjedhura</span>
            </h2>
          </div>
          <p className="text-white/45 max-w-xs sm:text-right text-sm leading-relaxed">
            Projekte reale, klientë të vërtetë, rezultate të matshme.
          </p>
        </motion.div>

        {/* Project cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="group relative rounded-2xl overflow-hidden card-surface flex flex-col"
            >
              {/* Project preview area */}
              <div className="relative h-52 sm:h-60 overflow-hidden bg-[#111]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />

                {/* Highlight badge */}
                <div
                  className="absolute top-4 left-4 text-xs font-display font-600 px-2.5 py-1 rounded-full backdrop-blur-sm"
                  style={{ background: `${project.color}30`, color: project.color }}
                >
                  {project.highlight}
                </div>

                {/* Year badge */}
                <div className="absolute top-4 right-4 text-xs text-white/60 font-medium bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded-full">
                  {project.year}
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white text-black font-display font-700 text-sm px-4 py-2.5 rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                  >
                    <ExternalLink size={14} />
                    Shiko live
                  </a>
                </div>
              </div>

              {/* Card body */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display font-700 text-lg text-white">{project.title}</h3>
                <p className="mt-2 text-sm text-white/50 leading-relaxed flex-1">{project.desc}</p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="text-xs font-medium px-2.5 py-1 rounded-md bg-white/5 text-white/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 flex items-center gap-1 text-sm font-display font-600 text-white/40 hover:text-white transition-colors group/link"
                >
                  {project.url.replace('https://', '')}
                  <ArrowUpRight size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
