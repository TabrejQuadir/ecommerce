import React from 'react';
import './Footer.css';
import footer_logo from '../Asset/logo.png'
import instagram from '../Asset/instagram_icon.png'
import pinetrest from '../Asset/pintester_icon.png'
import whatsapp from '../Asset/whatsapp_icon.png'

const Footer = () => {
    const currentDate = new Date().getFullYear();
    return (
        <div className='footer'>
            <div className='footer-content'>
                <div className='footer-logo'>
                    <img src={footer_logo} alt='Footer-Logo' />
                    <p>SHOPPER</p>
                </div>
                <ul className='footer-links'>
                    <li>Company</li>
                    <li>Products</li>
                    <li>Offices</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <div className='footer-social-icons'>
                    <div className='footer-icon-container'>
                        <img src={instagram} alt="Instagram" />
                    </div>
                    <div className='footer-icon-container'>
                        <img src={whatsapp} alt="Whatsapp" />
                    </div>
                    <div className='footer-icon-container'>
                        <img src={pinetrest} alt="Pinterest" />
                    </div>
                </div>
            </div>
            <div className='footer-bottom'>
                <hr />
                <p>Copyright © {currentDate} - All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer;
