import React from 'react'
import { BsGithub, BsTwitter } from 'react-icons/bs'
import { FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const links = [
    { href: '#about', label: 'About' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
  ]

  const socials = [
    { href: 'https://github.com/AlbertBislimi', icon: BsGithub, label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/albert-bislimi/', icon: FaLinkedin, label: 'LinkedIn' },
    { href: 'https://twitter.com/AlbertBislimi', icon: BsTwitter, label: 'Twitter' },
  ]

  return (
    <footer className="py-16 bg-dark-lighter/50 backdrop-blur-lg border-t border-white/5">
      <div className="section-container">
        <div className="text-center space-y-8">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-block text-3xl font-bold bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent hover:scale-110 transition-transform cursor-pointer"
          >
            Albert
          </button>

          {/* Links */}
          <ul className="flex flex-wrap justify-center gap-6 md:gap-8">
            {links.map((link) => (
              <li key={link.href}>
                <a 
                  href={link.href}
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Socials */}
          <div className="flex justify-center gap-6">
            {socials.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="text-xl text-gray-400 hover:text-primary transition-all duration-300 hover:scale-125"
                >
                  <Icon />
                </a>
              )
            })}
          </div>

          {/* Copyright */}
          <div className="text-gray-500 text-sm pt-8 border-t border-white/5">
            <p>&copy; {currentYear} Albert Bislimi. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
