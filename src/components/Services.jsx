import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const services = [
  {
    icon: '🚀',
    title: 'Web App Development',
    desc: 'Custom full-stack applications built with React, Node.js, and modern databases. Fast, scalable, and built to last.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
  },
  {
    icon: '🎨',
    title: 'Landing Pages & Sites',
    desc: 'High-converting landing pages and business websites that make your brand look world-class. Mobile-first, SEO-ready.',
    tags: ['Next.js', 'Tailwind', 'Framer Motion'],
  },
  {
    icon: '🛒',
    title: 'E-Commerce Solutions',
    desc: 'Online stores that actually sell. Payment integration, inventory management, and a smooth checkout experience.',
    tags: ['Shopify', 'WooCommerce', 'Stripe'],
  },
  {
    icon: '📱',
    title: 'Mobile-First Design',
    desc: 'Every pixel crafted for mobile users first. Because your Kosovo customers are on their phones.',
    tags: ['Responsive', 'PWA', 'Performance'],
  },
  {
    icon: '⚡',
    title: 'Speed & SEO Optimization',
    desc: 'Slow sites lose customers. I optimize for Core Web Vitals, Lighthouse scores, and Google rankings.',
    tags: ['Core Web Vitals', 'SEO', 'Caching'],
  },
  {
    icon: '🔧',
    title: 'Maintenance & Support',
    desc: 'Ongoing support, updates, and improvements so you can focus on running your business — not your website.',
    tags: ['24/7 Support', 'Updates', 'Monitoring'],
  },
]

function ServiceCard({ service, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
      className="card p-6 hover:border-brand/40 transition-colors duration-300 group"
    >
      <div className="text-3xl mb-4">{service.icon}</div>
      <h3 className="font-display font-bold text-lg mb-2 group-hover:text-brand transition-colors">
        {service.title}
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed mb-4">{service.desc}</p>
      <div className="flex flex-wrap gap-2">
        {service.tags.map(tag => (
          <span key={tag} className="text-xs bg-dark border border-dark-border rounded-lg px-2.5 py-1 text-gray-500">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Services() {
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true })

  return (
    <section id="services" className="py-24 max-w-6xl mx-auto px-6">
      <motion.div
        ref={titleRef}
        initial={{ opacity: 0, y: 30 }}
        animate={titleInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-sm text-brand font-medium uppercase tracking-widest">What I Do</span>
        <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-4">
          Services Built for{' '}
          <span className="gradient-text">Your Growth</span>
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Whether you're a startup in Pristina or an established business in Prizren —
          I build the digital tools that help you compete and win.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service, i) => (
          <ServiceCard key={service.title} service={service} index={i} />
        ))}
      </div>
    </section>
  )
}
