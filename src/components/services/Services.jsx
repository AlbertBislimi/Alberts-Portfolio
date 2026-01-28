import React from 'react'
import { motion } from 'framer-motion'
import { SiFigma, SiReact, SiTailwindcss, SiJavascript, SiTypescript, SiNodedotjs } from 'react-icons/si'

const Services = () => {
  const skills = [
    { icon: SiReact, name: 'React & Next.js', hours: '500+ hours', color: '#61dafb' },
    { icon: SiJavascript, name: 'JavaScript ES6+', hours: '800+ hours', color: '#f7df1e' },
    { icon: SiTypescript, name: 'TypeScript', hours: '300+ hours', color: '#3178c6' },
    { icon: SiTailwindcss, name: 'Tailwind CSS', hours: '400+ hours', color: '#06b6d4' },
    { icon: SiNodedotjs, name: 'Node.js & Express', hours: '350+ hours', color: '#339933' },
    { icon: SiFigma, name: 'UI/UX Design', hours: '250+ hours', color: '#f24e1e' },
  ]

  return (
    <section id='formation' className="py-24 bg-dark-lighter/30">
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Skills<span className="text-cyan">.</span>
        </motion.h2>

        <div className="max-w-3xl mx-auto space-y-4">
          {skills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <motion.div
                key={index}
                className="flex items-center justify-between p-6 border border-white/10 hover:border-cyan/50 transition-all duration-300 group"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="flex items-center gap-4">
                  <div 
                    className="w-12 h-12 flex items-center justify-center border border-white/20 group-hover:border-cyan transition-colors"
                    style={{ color: skill.color }}
                  >
                    <Icon className="text-2xl" />
                  </div>
                  <span className="font-semibold">{skill.name}</span>
                </div>
                <div className="text-right">
                  <span className="text-text-gray text-sm">{skill.hours}</span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
