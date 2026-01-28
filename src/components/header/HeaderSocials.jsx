import React from 'react'
import { BsLinkedin, BsTwitter } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className="flex gap-6 justify-center items-center">
      <a 
        href="https://www.linkedin.com/in/albert-bislimi/" 
        target="_blank" 
        rel="noreferrer"
        className="text-2xl text-gray-400 hover:text-primary transition-colors duration-300 hover:scale-110 transform"
      >
        <BsLinkedin />
      </a>
      <a 
        href="https://github.com/AlbertBislimi" 
        target="_blank"
        rel="noreferrer"
        className="text-2xl text-gray-400 hover:text-primary transition-colors duration-300 hover:scale-110 transform"
      >
        <FaGithub />
      </a>
      <a 
        href="https://twitter.com/AlbertBislimi" 
        target="_blank"
        rel="noreferrer"
        className="text-2xl text-gray-400 hover:text-primary transition-colors duration-300 hover:scale-110 transform"
      >
        <BsTwitter />
      </a>
    </div>
  )
}

export default HeaderSocials
