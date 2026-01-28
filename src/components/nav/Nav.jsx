import React, { useState } from 'react'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { RiServiceLine } from 'react-icons/ri'
import { BiMessageSquareDetail } from 'react-icons/bi'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  
  const navItems = [
    { href: '#', icon: AiOutlineHome, label: 'Home' },
    { href: '#about', icon: AiOutlineUser, label: 'About' },
    { href: '#portfolio', icon: RiServiceLine, label: 'Portfolio' },
    { href: '#contact', icon: BiMessageSquareDetail, label: 'Contact' },
  ]

  return (
    <nav className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 animate-slide-up">
      <div className="flex gap-2 bg-dark-lighter/80 backdrop-blur-lg border border-white/10 rounded-full px-6 py-4 shadow-2xl">
        {navItems.map(({ href, icon: Icon, label }) => (
          <a
            key={href}
            href={href}
            onClick={() => setActiveNav(href)}
            className={`
              relative p-3 rounded-full transition-all duration-300
              ${activeNav === href 
                ? 'bg-primary text-white shadow-lg shadow-primary/50' 
                : 'text-gray-400 hover:text-white hover:bg-white/10'
              }
            `}
            aria-label={label}
          >
            <Icon className="text-xl" />
          </a>
        ))}
      </div>
    </nav>
  )
}

export default Nav
