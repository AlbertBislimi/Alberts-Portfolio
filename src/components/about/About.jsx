import React from 'react'
import { motion } from 'framer-motion'
import ME from '../../assets/me-about.jpg'

const About = () => {
  return (
    <section id='about' className="py-24">
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          About<span className="text-cyan">.</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
          {/* Image Square */}
          <motion.div 
            className="flex justify-center md:justify-start"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-64 h-64 bg-cyan/20 border border-cyan/30 overflow-hidden">
              <img 
                src={ME} 
                alt="Albert Bislimi" 
                className="w-full h-full object-cover opacity-90"
              />
            </div>
          </motion.div>

          {/* About Text */}
          <motion.div
            className="text-text-gray leading-relaxed space-y-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p>
              <strong className="text-white">Web Developer</strong> transitioning to a career in technology.
            </p>
            <p>
              Currently, my focus is on learning and mastering essential web development skills. 
              I have a solid foundation in <strong className="text-cyan">HTML</strong>, <strong className="text-cyan">CSS</strong>, <strong className="text-cyan">JavaScript</strong>, 
              and <strong className="text-cyan">React</strong>.
            </p>
            <p>
              I'm passionate about creating modern, responsive web applications that provide 
              exceptional user experiences. Always eager to learn new technologies and best practices.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
