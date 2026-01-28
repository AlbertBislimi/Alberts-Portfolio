import React from 'react'
import { motion } from 'framer-motion'
import { FiStar } from 'react-icons/fi'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'

const Testimonials = () => {
  const testimonials = [
    {
      avatar: AVTR1,
      name: 'Flandra Sadiku',
      role: 'Business Owner',
      review: 'Very helpful when building my website, I now have my ecommerce store built from scratch'
    },
    {
      avatar: AVTR2,
      name: 'Endrit',
      role: 'Client',
      review: 'Albert was very helpful and fast to respond to my inquiry to help with my website issues. His knowledge was comprehensive.'
    },
    {
      avatar: AVTR3,
      name: 'Eric',
      role: 'Agency Partner',
      review: 'Fantastic service and great guy. We recommend to anyone who needs a website or web services.'
    },
  ]

  return (
    <section id='testimonials' className="py-24 bg-dark-lighter/30">
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Testimonials<span className="text-cyan">.</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="p-6 border border-white/10 hover:border-cyan/50 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className="text-cyan fill-cyan" />
                ))}
              </div>

              {/* Review */}
              <p className="text-text-gray text-sm leading-relaxed mb-6">
                "{testimonial.review}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-cyan/30"
                />
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-text-gray text-xs">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
