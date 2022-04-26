import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Dogacan Kaynak</a>
        <ul className='permalinks'>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="footer__socials">
          <a href="https://www.linkedin.com/in/dogacankaynak/"><FaLinkedin/></a>
          <a href="https://instagram.com/dogacankaynak"><FaInstagram/></a>
          <a href="https://facebook.com/dogacankaynak"><FaFacebookF/></a>
        </div>

        <div className="footer__copyright">
          <small>&copy; Dogacan Kaynak. All rights reserved.</small>
        </div>
    </footer>
  )
}

export default Footer