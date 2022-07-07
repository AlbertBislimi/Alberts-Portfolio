import React from 'react'
import './footer.css'
import {BsGithub} from 'react-icons/bs'
import {FaLinkedin} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Albert</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        {/*<li><a href="#services">Services</a></li>*/}
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/AlbertBislimi"><BsGithub/></a>
        <a href="https://www.linkedin.com/in/albert-bislimi/"><FaLinkedin/></a>
        <a href="https://twitter.com/AlbertBislimi"><BsTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; all rights reserved to Albert. </small>
      </div>
    </footer>
  )
}

export default Footer