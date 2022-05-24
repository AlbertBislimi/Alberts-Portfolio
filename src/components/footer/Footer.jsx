import React from 'react'
import './footer.css'
import {BsGithub} from 'react-icons/bs'
import {FiInstagram} from 'react-icons/fi'
import {BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Albert</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Experience</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Testimonials</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com"><BsGithub/></a>
        <a href="https://instagram.com"><FiInstagram/></a>
        <a href="https://twitter.com"><BsTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; all rights reserved to Albert. </small>
      </div>
    </footer>
  )
}

export default Footer