import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/LOGO.png'
import instagram_icon from '../Assets/instagram-brands-solid.svg'
import linkdin_icon from '../Assets/linkedin-brands-solid.svg'
import whatsapp_icon from '../Assets/whatsapp-brands-solid.svg'


const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="footerlogo" />
            <p>SHOPPER</p>
        </div>
        <ul className='footer-links'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className='footer-social-icon'>
            <div className="footer-icon-container">
                <img src={instagram_icon} alt="insta" />
            </div>
            <div className="footer-icon-container">
                <img src={linkdin_icon} alt="linkdin" />
            </div>
            <div className="footer-icon-container">
                <img src={whatsapp_icon} alt="whatsapp" />
            </div>
        </div>
        <div className="footer-copright">
        <hr />
            <p>Copyright @ 2024 - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer
