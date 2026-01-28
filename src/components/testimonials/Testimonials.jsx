import React from 'react'
import { motion } from 'framer-motion'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

const data = [
  {
    avatar: AVTR1,
    name: 'Flandra Sadiku',
    review: 'Very helpful when building my website, I now have my ecommerce store built from scratch'
  },
  {
    avatar: AVTR2,
    name: 'Endrit',
    review: 'Albert was very helpful and fast to respond to my inquiry to help with my website issues. His knowledge was comprehensive.'
  },
  {
    avatar: AVTR3,
    name: 'Eric',
    review: 'Fantastic service and great guy. We recommend to anyone who needs a website or web services. Well be using for any further web based services we require!'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials' className="py-24">
      <div className="section-container">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h5 className="section-subtitle">Review from clients</h5>
          <h2 className="section-heading">Testimonials</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Swiper 
            className="pb-16"
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ 
              clickable: true,
              bulletActiveClass: '!bg-primary'
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {data.map(({ avatar, name, review }, index) => (
              <SwiperSlide key={index}>
                <div className="glass-card h-full flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-primary/30 mb-6">
                    <img 
                      src={avatar} 
                      alt={name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h5 className="font-semibold text-lg mb-4">{name}</h5>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    "{review}"
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
