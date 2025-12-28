import React from 'react'
import './Footer.css'

import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pinterest_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="Shooper Logo" />
        <p>SHOOPER</p>
      </div>

      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <div className="footer-socials-icon">
        <div className="footer-icons-container">
          <img src={instagram_icon} alt="Instagram" />
        </div>
        <div className="footer-icons-container">
          <img src={pinterest_icon} alt="Pinterest" />
        </div>
        <div className="footer-icons-container">
          <img src={whatsapp_icon} alt="WhatsApp" />
        </div>
      </div>

      <div className="footer-copyright">
        <hr />
        <p>© 2025 - Manoj Patil</p>
      </div>
    </footer>
  )
}

export default Footer
