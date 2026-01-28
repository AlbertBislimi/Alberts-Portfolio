import React from 'react'
import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'

const Experience = () => {
  const experiences = [
    {
      date: 'Jan 2024 - Present',
      company: 'Nubis',
      role: 'Frontend Developer',
      description: 'Building AI-powered project management tools with modern web technologies. Implementing generative AI workflow automation features and creating responsive user interfaces.'
    },
    {
      date: 'Jun 2023 - Dec 2023',
      company: 'Gjeje Online',
      role: 'Full-Stack Developer',
      description: 'Developed a complete online marketplace platform for Kosovo. Built both frontend and backend systems, implemented payment processing, and created an intuitive user experience for buyers and sellers.'
    },
    {
      date: 'Jan 2022 - May 2023',
      company: 'Freelance',
      role: 'Web Developer',
      description: 'Worked with various clients worldwide to deliver custom web solutions. Specialized in React applications, responsive designs, and modern UI/UX implementations.'
    },
  ]

  return (
    <section id='experience' className="py-24 bg-dark-lighter/30">
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Experience<span className="text-cyan">.</span>
        </motion.h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="border-l-2 border-cyan/20 pl-8 pb-8 relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Timeline Dot */}
              <div className="absolute -left-2 top-0 w-4 h-4 bg-cyan rounded-full group-hover:scale-125 transition-transform"></div>
              
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <span className="text-cyan text-sm font-mono">{exp.date}</span>
                  <h3 className="text-xl font-bold text-white mt-2 flex items-center gap-2">
                    {exp.company} <span className="text-text-gray">|</span> {exp.role}
                    <FiArrowUpRight className="text-cyan opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                </div>
              </div>
              <p className="text-text-gray leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
