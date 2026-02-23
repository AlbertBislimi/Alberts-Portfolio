import { motion } from 'framer-motion'
import { FiMonitor, FiShoppingBag, FiZap, FiStar, FiTrendingUp, FiSmartphone } from 'react-icons/fi'

const services = [
  { icon: FiMonitor, title: 'Business Websites', desc: 'Clean, modern websites that represent your brand and bring in customers 24/7.' },
  { icon: FiShoppingBag, title: 'E-commerce Stores', desc: 'Sell online with a store that looks great and converts browsers into buyers.' },
  { icon: FiZap, title: 'Landing Pages', desc: 'High-converting pages built to capture leads and drive specific actions.' },
  { icon: FiStar, title: 'Restaurant & Cafe Sites', desc: 'Showcase your menu, atmosphere, and take reservations — all in one place.' },
  { icon: FiTrendingUp, title: 'SEO & Google Visibility', desc: 'Get found on Google when locals search for your service. More visibility = more clients.' },
  { icon: FiSmartphone, title: 'Mobile-First Design', desc: 'Every site we build looks flawless on phones — where 80% of your customers browse.' },
]

const fadeUp = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0 } }

export default function Services() {
  return (
    <section id="services" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ show: { transition: { staggerChildren: 0.1 } } }} className="text-center mb-16">
          <motion.p variants={fadeUp} className="text-[#6366f1] text-sm font-semibold uppercase tracking-widest mb-3">What We Build</motion.p>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold">Services</motion.h2>
          <motion.p variants={fadeUp} className="text-white/40 mt-4 max-w-xl mx-auto">From a simple landing page to a full e-commerce store — we build it all, and we build it right.</motion.p>
        </motion.div>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ show: { transition: { staggerChildren: 0.1 } } }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(({ icon: Icon, title, desc }) => (
            <motion.div key={title} variants={fadeUp} whileHover={{ y: -5, scale: 1.02 }}
              className="bg-glass rounded-2xl p-6 group cursor-default hover:border-[#6366f1]/30 transition-all">
              <div className="w-12 h-12 bg-[#6366f1]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#6366f1]/20 transition-colors">
                <Icon className="text-[#6366f1]" size={22} />
              </div>
              <h3 className="font-semibold text-lg mb-2">{title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
