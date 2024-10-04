import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
        <div className='footer-content-left'>
          <img src={assets.logo} alt="" className='logo-image'/>
          <p>&copy; 2024 Gear Up & Go. Proudly serving adventurers with honesty and reliability for years!</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className='footer-content-center'>
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>

        </div>
        <div className='footer-content-right'>
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91-9771234567</li>
            <li>contact@gearupgo.com</li>
          </ul>

        </div>
      </div>
      <hr/>
      <p footer-copyright>&copy; 2024 Adventure Gear Rentals. All rights reserved. |</p>
    </div>
  )
}

export default Footer
