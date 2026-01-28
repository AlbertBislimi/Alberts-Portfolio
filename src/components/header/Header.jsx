import React from 'react'
import { motion } from 'framer-motion'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Gradient blur effects */}
      <div className="gradient-blur gradient-blur-1"></div>
      <div className="gradient-blur gradient-blur-2"></div>
      
      <div className="section-container">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h5 
            className="text-gray-400 text-lg mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Hello, I'm
          </motion.h5>
          
          <motion.h1 
            className="text-6xl md:text-7xl lg:text-8xl font-bold mb-4 bg-gradient-to-r from-white via-primary-light to-primary bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Albert Bislimi
          </motion.h1>
          
          <motion.h5 
            className="text-xl md:text-2xl text-gray-300 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Frontend Developer & Product Builder
          </motion.h5>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <CTA />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <HeaderSocials />
          </motion.div>
          
          <motion.a 
            href="#about" 
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-primary hover:text-primary-light transition-colors"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <div className="flex flex-col items-center gap-2 animate-float">
              <span className="text-sm">Scroll Down</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </motion.a>
        </motion.div>
      </div>
    </header>
  )
}

export default Header
