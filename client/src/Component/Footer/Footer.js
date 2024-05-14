import React from 'react';
import './Footer.css';
import footer_logo from '../Assest/logo.png'
import instagram from '../Assest/instagram_icon.png'
import pinetrest from '../Assest/pintester_icon.png'
import whatshapp from '../Assest/whatsapp_icon.png'

const Footer = () => {
    return (
        <div className='footer'>
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

            <div className='footer-social-icon'>
                <div className='footer-icons-container'>
                    <img src={instagram} alt="Instagram" />
                </div>
                <div className='footer-icons-container'>
                    <img src={whatshapp} alt="Whatshapp" />
                </div>
                <div className='footer-icons-container'>
                    <img src={pinetrest} alt="Pinetrest" />
                </div>
            </div>
        <div className='footer-copyright'>
        <hr/>
        <p> Copyright @ 2024 - All Right Reserved</p>
        </div>
        </div>
    )
}

export default Footer