import React from 'react'
import { motion } from 'framer-motion'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Nubis',
    description: 'AI-powered project management tool with generative AI workflow automation',
    tags: ['AI', 'Project Management', 'Automation'],
    github: 'https://github.com',
    demo: 'https://nubis.app'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Gjeje Online',
    description: 'Full-featured online marketplace platform built for Kosovo, connecting buyers and sellers',
    tags: ['E-commerce', 'Marketplace', 'React'],
    github: 'https://github.com',
    demo: 'https://gjejeonline.com'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio' className="py-24">
      <div className="section-container">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h5 className="section-subtitle">My Recent Work</h5>
          <h2 className="section-heading">Portfolio</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.map(({ id, image, title, description, tags, github, demo }, index) => (
            <motion.article
              key={id}
              className="glass-card group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img 
                  src={image} 
                  alt={title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <h3 className="text-2xl font-bold mb-3">{title}</h3>
              <p className="text-gray-400 mb-4 text-sm leading-relaxed">{description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {tags.map((tag, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1 text-xs bg-primary/20 text-primary-light rounded-full border border-primary/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <a 
                  href={github} 
                  className="btn-outline text-sm py-2 px-6"
                  target='_blank'
                  rel="noreferrer"
                >
                  Github
                </a>
                <a 
                  href={demo} 
                  className="btn-primary text-sm py-2 px-6"
                  target='_blank'
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </motion.article>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-gray-400 text-sm">More projects coming soon...</p>
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio
