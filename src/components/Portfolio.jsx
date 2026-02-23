import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import p1 from '../assets/portfolio1.jpg'
import p2 from '../assets/portfolio2.png'
import p3 from '../assets/portfolio3.jpg'
import p5 from '../assets/portfolio5.png'
import p6 from '../assets/portfolio6.jpg'

const projects = [
  { id: 1, title: 'OneWay Gym Ferizaj', category: 'Website', tags: ['React', 'Vite', 'Tailwind'], image: p1, desc: 'Dark aesthetic gym site with real Instagram media, gallery with video lightbox and animated sections.' },
  { id: 2, title: 'E-Commerce Platform', category: 'E-commerce', tags: ['React', 'Node.js', 'Stripe'], image: p2, desc: 'Modern online store with cart, payments and inventory management.' },
  { id: 3, title: 'Restaurant Landing Page', category: 'Website', tags: ['React', 'Framer Motion'], image: p3, desc: 'Animated landing page with menu showcase, gallery and reservation form.' },
  { id: 4, title: 'Web App Dashboard', category: 'Web App', tags: ['React', 'Tailwind', 'Convex'], image: p5, desc: 'Real-time dashboard with live data, multi-user support and analytics.' },
  { id: 5, title: 'Beauty Salon Site', category: 'Website', tags: ['React', 'EmailJS'], image: p6, desc: 'Elegant website featuring service menu, team section and booking form.' },
]

const cats = ['All', 'Website', 'E-commerce', 'Web App']
const fadeUp = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0 } }

export default function Portfolio() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active)

  return (
    <section id="portfolio" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ show: { transition: { staggerChildren: 0.1 } } }} className="text-center mb-12">
          <motion.p variants={fadeUp} className="text-[#6366f1] text-sm font-semibold uppercase tracking-widest mb-3">Our Work</motion.p>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold">Recent Projects</motion.h2>
          <motion.p variants={fadeUp} className="text-white/40 mt-4 max-w-xl mx-auto">A selection of websites and apps we've built for Kosovo businesses and beyond.</motion.p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          {cats.map(cat => (
            <button key={cat} onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${active === cat ? 'bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white' : 'bg-white/5 text-white/50 hover:text-white hover:bg-white/10'}`}>
              {cat}
            </button>
          ))}
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map(project => (
              <motion.div key={project.id} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} whileHover={{ y: -8 }}
                className="group bg-glass rounded-2xl overflow-hidden cursor-pointer">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                    <p className="text-sm text-white/80">{project.desc}</p>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-base">{project.title}</h3>
                    <span className="text-xs text-[#6366f1] bg-[#6366f1]/10 px-2 py-1 rounded-full whitespace-nowrap ml-2">{project.category}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {project.tags.map(tag => <span key={tag} className="text-xs text-white/30 bg-white/5 px-2 py-0.5 rounded">{tag}</span>)}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
