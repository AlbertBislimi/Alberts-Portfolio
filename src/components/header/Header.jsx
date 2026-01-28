import React from 'react'
import { motion } from 'framer-motion'
import { BsLinkedin, BsTwitter, BsGithub } from 'react-icons/bs'
import { SiDribbble } from 'react-icons/si'

const Header = () => {
  const socials = [
    { icon: BsLinkedin, link: 'https://www.linkedin.com/in/albert-bislimi/' },
    { icon: BsGithub, link: 'https://github.com/AlbertBislimi' },
    { icon: BsTwitter, link: 'https://twitter.com/AlbertBislimi' },
    { icon: SiDribbble, link: '#' },
  ]

  return (
    <>
      {/* Top Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-bg/80 backdrop-blur-sm border-b border-white/5">
        <div className="section-container">
          <div className="flex justify-between items-center py-6">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-2xl font-bold cursor-pointer"
            >
              <span className="text-white">Albert</span>
              <span className="text-cyan">/</span>
            </button>
            <div className="hidden md:flex gap-8 text-sm">
              <a href="#about" className="text-text-gray hover:text-cyan transition-colors">About</a>
              <a href="#experience" className="text-text-gray hover:text-cyan transition-colors">Experience</a>
              <a href="#portfolio" className="text-text-gray hover:text-cyan transition-colors">Projects</a>
              <a href="#contact" className="text-text-gray hover:text-cyan transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="min-h-screen flex items-center pt-24">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Code Square */}
            <motion.div 
              className="flex justify-center md:justify-start"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="cyan-square flex items-center justify-center">
                <span className="text-6xl font-mono text-cyan">&lt;/&gt;</span>
              </div>
            </motion.div>

            {/* Right: Intro Text */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                Hi, I'm <span className="text-cyan">Albert.</span>
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold text-text-gray mb-6">
                Frontend Developer
              </h2>
              
              {/* Social Links */}
              <div className="flex gap-4">
                {socials.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noreferrer"
                      className="w-10 h-10 border border-text-gray/30 flex items-center justify-center hover:border-cyan hover:text-cyan transition-colors"
                    >
                      <Icon className="text-lg" />
                    </a>
                  )
                })}
              </div>
            </motion.div>
          </div>

          {/* Tech Stack Bar */}
          <motion.div 
            className="mt-24 border-y border-white/10 py-6 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex gap-4 justify-center flex-wrap">
              {['REACT', 'JAVASCRIPT', 'TYPESCRIPT', 'TAILWIND', 'NODE.JS', 'FIGMA', 'GIT', 'HTML', 'CSS'].map((tech, i) => (
                <span key={i} className="tech-badge">{tech}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </header>
    </>
  )
}

export default Header
