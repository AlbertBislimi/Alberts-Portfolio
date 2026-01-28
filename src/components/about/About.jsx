import React from 'react'
import { motion } from 'framer-motion'
import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  const stats = [
    { icon: FaAward, title: 'Experience', value: '3+ Years' },
    { icon: FiUsers, title: 'Clients', value: '20+ Worldwide' },
    { icon: VscFolderLibrary, title: 'Projects', value: '20+ Completed' },
  ]

  return (
    <section id='about' className="py-24">
      <div className="section-container">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h5 className="section-subtitle">Get To Know</h5>
          <h2 className="section-heading">About Me</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-3xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary-dark/30 group-hover:opacity-0 transition-opacity duration-500"></div>
              <img 
                src={ME} 
                alt="Albert Bislimi" 
                className="w-full rounded-3xl transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Decorative blur */}
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl"></div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={index}
                    className="glass-card text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    <Icon className="text-2xl text-primary mx-auto mb-2" />
                    <h5 className="font-semibold text-sm mb-1">{stat.title}</h5>
                    <small className="text-gray-400 text-xs">{stat.value}</small>
                  </motion.div>
                )
              })}
            </div>

            <motion.p 
              className="text-gray-300 leading-relaxed mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              Since beginning my journey as a self-taught developer, I've been passionate about 
              building digital experiences that make an impact. I specialize in creating modern, 
              responsive web applications with a focus on clean code and exceptional user experience. 
              From concept to deployment, I bring ideas to life using cutting-edge technologies 
              like React, Tailwind CSS, and modern JavaScript.
            </motion.p>

            <motion.a 
              href="#contact" 
              className='btn-primary'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              Let's Talk
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
