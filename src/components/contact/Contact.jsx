import React from 'react'
import { motion } from 'framer-motion'
import { FiLinkedin, FiGithub, FiMail, FiArrowUpRight } from 'react-icons/fi'
import { BsTwitter } from 'react-icons/bs'

const Contact = () => {
  const contacts = [
    {
      icon: FiLinkedin,
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/albert-bislimi/'
    },
    {
      icon: FiGithub,
      name: 'GitHub',
      link: 'https://github.com/AlbertBislimi'
    },
    {
      icon: BsTwitter,
      name: 'Twitter',
      link: 'https://twitter.com/AlbertBislimi'
    },
    {
      icon: FiMail,
      name: 'E-mail',
      link: 'mailto:ialbertbislimi@gmail.com'
    },
  ]

  return (
    <section id='contact' className="py-24">
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Contact<span className="text-cyan">.</span>
        </motion.h2>

        <motion.p 
          className="text-center text-text-gray mb-12 max-w-md mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Contact me or follow my social media
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {contacts.map((contact, index) => {
            const Icon = contact.icon
            return (
              <motion.a
                key={index}
                href={contact.link}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between p-6 border border-white/10 hover:border-cyan transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center border border-white/20 group-hover:border-cyan transition-colors">
                    <Icon className="text-xl" />
                  </div>
                  <span className="font-semibold">{contact.name}</span>
                </div>
                <FiArrowUpRight className="text-cyan opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Contact
