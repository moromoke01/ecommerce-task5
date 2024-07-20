// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
          
                <ul className='footer-items'>
                    <li><strong>Exclusive</strong></li>
                    <li>Subscribe</li>
                    <li>Get 10% off your first order</li>
                    <li><input type='Email' placeholder='Enter your Email' /></li>
                </ul>
           
                <ul className='footer-items'>
                    <li><strong>Support</strong></li>
                    <li>111 Bijoy sarani Dhaka,<br /> DH 1515, Bangladesh</li>
                    <li>exclusive@gmail.com</li>
                    <li>+88015-88888-9999</li>
                </ul>
         
                <ul className='footer-items'>
                    <li><strong>Account</strong></li>
                    <li>My Account</li>
                    <li>Login/Register</li>
                    <li>Cart</li>
                    <li>Wishlist</li>
                    <li>Shop</li>
                </ul>
          
                <ul className='footer-items'>
                    <li><strong>Quick Link</strong></li>
                    <li>Privacy Policy</li>
                    <li>Terms of Use</li>
                    <li>FAQ</li>
                    <li>Contact</li>
                </ul>
           
           
                <ul className='footer-items'>
                    <li><strong>Download App</strong></li>
                    <p>Save $3 with App New User Only</p>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li className='icons'>

                    </li>
                </ul>
            
           <p className='copyright'> &copy; Copyright Rimel 2022. All right reserved</p>
        </footer>
    );
};

export default Footer;
