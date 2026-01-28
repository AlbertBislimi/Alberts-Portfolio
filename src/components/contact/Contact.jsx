import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { MdOutlineMail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm(
      'service_khnuiib', 
      'template_zvb1tu1', 
      form.current, 
      'user_KZFemUp6O7YlSR7vNkVl4'
    )
    e.target.reset()
  }

  const contactOptions = [
    {
      icon: MdOutlineMail,
      title: 'Email',
      value: 'ialbertbislimi@gmail.com',
      link: 'mailto:ialbertbislimi@gmail.com'
    },
    {
      icon: RiMessengerLine,
      title: 'Messenger',
      value: 'Facebook Messenger',
      link: 'https://m.me/albert.bislimii/'
    },
    {
      icon: BsWhatsapp,
      title: 'WhatsApp',
      value: '+38349588569',
      link: 'https://api.whatsapp.com/send?phone=38349588569'
    }
  ]

  return (
    <section id='contact' className="py-24">
      <div className="section-container">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h5 className="section-subtitle">Get in Touch</h5>
          <h2 className="section-heading">Contact Me</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Options */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {contactOptions.map((option, index) => {
              const Icon = option.icon
              return (
                <motion.article
                  key={index}
                  className="glass-card text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  <Icon className="text-4xl text-primary mx-auto mb-4" />
                  <h4 className="text-xl font-semibold mb-2">{option.title}</h4>
                  <h5 className="text-gray-400 text-sm mb-4">{option.value}</h5>
                  <a 
                    href={option.link} 
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary hover:text-primary-light text-sm transition-colors"
                  >
                    Send a message →
                  </a>
                </motion.article>
              )
            })}
          </motion.div>

          {/* Contact Form */}
          <motion.form 
            ref={form} 
            onSubmit={sendEmail}
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <input 
              type="text" 
              name='name' 
              placeholder='Your Full Name' 
              required 
              className="w-full px-6 py-4 bg-dark-lighter border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-primary focus:outline-none transition-colors"
            />
            <input 
              type="email" 
              name='email'  
              placeholder='Your Email' 
              required
              className="w-full px-6 py-4 bg-dark-lighter border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-primary focus:outline-none transition-colors"
            />
            <textarea 
              name="message" 
              rows="7" 
              placeholder='Your Message' 
              required
              className="w-full px-6 py-4 bg-dark-lighter border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-primary focus:outline-none transition-colors resize-none"
            />
            <button 
              type='submit' 
              className='btn-primary w-full py-4'
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact
