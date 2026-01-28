import React from 'react'
import { motion } from 'framer-motion'
import { FiArrowUpRight, FiGithub } from 'react-icons/fi'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.png'

const Portfolio = () => {
  const projects = [
    {
      image: IMG1,
      title: 'Nubis',
      description: 'AI-powered project management platform with generative workflow automation. Built with React, TypeScript, and integrated AI capabilities for intelligent task management.',
      tags: ['React', 'TypeScript', 'AI', 'Node.js'],
      github: 'https://github.com',
      demo: 'https://nubis.app'
    },
    {
      image: IMG2,
      title: 'Gjeje Online',
      description: 'Full-featured marketplace platform for Kosovo connecting buyers and sellers. Complete e-commerce solution with payment integration and real-time notifications.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com',
      demo: 'https://gjejeonline.com'
    },
  ]

  return (
    <section id='portfolio' className="py-24">
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Projects<span className="text-cyan">.</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group border border-white/10 hover:border-cyan/50 transition-all duration-300 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-64 bg-dark-lighter">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
              </div>

              {/* Project Info */}
              <div className="p-6 bg-dark-lighter/50">
                <h3 className="text-2xl font-bold mb-3 flex items-center justify-between">
                  {project.title}
                  <FiArrowUpRight className="text-cyan" />
                </h3>
                <p className="text-text-gray text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 text-xs border border-cyan/30 text-cyan font-mono">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm text-text-gray hover:text-cyan transition-colors"
                  >
                    <FiGithub /> Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm text-text-gray hover:text-cyan transition-colors"
                  >
                    <FiArrowUpRight /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
