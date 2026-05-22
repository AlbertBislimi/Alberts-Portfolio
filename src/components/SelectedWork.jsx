import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, ArrowUpRight } from 'lucide-react'
import { useLang } from '../i18n/useLang'

export default function SelectedWork() {
  const { t } = useLang()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  const projects = [
    {
      title: 'Gjeje.online',
      category: 'Discovery Platform · Kosovo',
      desc: t['work.gjeje.desc'],
      url: 'https://gjejeonline.com',
      image: '/projects/gjeje.png',
      tags: ['React', 'Supabase', 'Maps API'],
      color: '#10B981',
      year: '2025',
      highlight: t['work.gjeje.highlight'],
    },
    {
      title: 'MySearch Agency',
      category: 'Job & Real Estate Platform · Kosovo',
      desc: t['work.mysearch.desc'],
      url: 'https://mysearchagency.com',
      image: '/projects/mysearch.png',
      tags: ['React', 'Supabase', 'Tailwind'],
      color: '#F97316',
      year: '2025',
      highlight: t['work.mysearch.highlight'],
    },
    {
      title: 'Swiss Dental Ferizaj',
      category: t['work.swissdental.category'],
      desc: t['work.swissdental.desc'],
      url: 'https://swiss-dental-ferizaj-demo.surge.sh',
      image: '/projects/swiss-dental.png',
      tags: ['React', 'Tailwind', 'Framer Motion'],
      color: '#0EA5E9',
      year: '2025',
      highlight: t['work.swissdental.highlight'],
    },
    {
      title: 'Nubis.app',
      category: 'Project Management SaaS',
      desc: t['work.nubis.desc'],
      url: 'https://nubis.app',
      image: '/projects/nubis.png',
      tags: ['React', 'Node.js', 'PostgreSQL'],
      color: '#3B82F6',
      year: '2024',
      highlight: t['work.nubis.highlight'],
    },
    {
      title: 'Maris Restaurant',
      category: t['work.maris.category'],
      desc: t['work.maris.desc'],
      url: 'https://maris-restaurant-demo.surge.sh',
      image: '/projects/maris.png',
      tags: ['React', 'Tailwind', 'Framer Motion'],
      color: '#2C9B8A',
      year: '2025',
      highlight: t['work.maris.highlight'],
    },
    {
      title: 'Prishtina Profesional Security',
      category: t['work.pps.category'],
      desc: t['work.pps.desc'],
      url: 'https://prishtina-profesional-security-demo.surge.sh',
      image: '/projects/pps.png',
      tags: ['React', 'TypeScript', 'Tailwind'],
      color: '#B91C1C',
      year: '2025',
      highlight: t['work.pps.highlight'],
    },
  ]

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
            <span className="section-label">{t['work.label']}</span>
            <h2 className="mt-4 font-display font-800 text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
              {t['work.title.before']}{' '}
              <span className="text-gradient">{t['work.title.highlight']}</span>
            </h2>
          </div>
          <p className="text-white/55 max-w-xs sm:text-right text-sm leading-relaxed">
            {t['work.subtitle']}
          </p>
        </motion.div>

        {/* Project cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => {
            const featured = i === 0

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 32 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className={`group relative rounded-2xl overflow-hidden card-surface flex flex-col ${
                  featured ? 'md:col-span-2' : ''
                }`}
              >
                {/* Project preview area */}
                <div className={`relative overflow-hidden bg-[#111] ${featured ? 'h-64 sm:h-80' : 'h-52 sm:h-60'}`}>
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
                      {t['work.viewLive']}
                    </a>
                  </div>
                </div>

                {/* Card body */}
                <div className={`p-6 flex flex-col flex-1 ${featured ? 'sm:p-7' : ''}`}>
                  <div className={featured ? 'sm:flex sm:items-start sm:justify-between sm:gap-8' : ''}>
                    <div>
                      <h3 className={`font-display font-700 text-white ${featured ? 'text-2xl' : 'text-lg'}`}>
                        {project.title}
                      </h3>
                      <p className={`mt-2 text-sm text-white/55 leading-relaxed ${featured ? 'max-w-xl' : 'flex-1'}`}>
                        {project.desc}
                      </p>
                    </div>

                    {featured && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 hidden shrink-0 items-center gap-2 rounded-xl bg-accent px-5 py-3 font-display text-sm font-700 text-white transition-all hover:bg-accent-hover sm:inline-flex"
                      >
                        {t['work.viewLive']}
                        <ArrowUpRight size={15} />
                      </a>
                    )}
                  </div>

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
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
                    className="mt-5 flex items-center gap-1 text-sm font-display font-600 text-white/55 hover:text-white transition-colors group/link"
                  >
                    {project.url.replace('https://', '')}
                    <ArrowUpRight size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
