// src/components/HeroSection.js
import React, { useState } from 'react';
import './Hero.css'
import { BsApple } from "react-icons/bs";


const HeroSection = () => {
    const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
    const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);

    const toggleDropdown1 = () => setIsDropdownOpen1(!isDropdownOpen1);
    const toggleDropdown2 = () => setIsDropdownOpen2(!isDropdownOpen2);

    return (
        <div className="hero-section">
            <aside className="sidebar">
                <ul>
                    <li onClick={toggleDropdown1}>
                        Woman`s Fashion
                        {isDropdownOpen1 && (
                            <ul className="dropdown">
                                <li>Subcategory 1-1</li>
                                <li>Subcategory 1-2</li>
                            </ul>
                        )}
                    </li>
                    <li onClick={toggleDropdown2}>
                        Men`s Fashion
                        {isDropdownOpen2 && (
                            <ul className="dropdown">
                                <li>Subcategory 2-1</li>
                                <li>Subcategory 2-2</li>
                            </ul>
                        )}
                    </li>
                    <li>Electronics</li>
                    <li>Home and Lifestyle</li>
                    <li>Medicine</li>
                    <li>Sports & Outdoor</li>
                    <li>Baby`s & Toys</li>
                    <li>Groceries & Pets</li>
                    <li>Health & Beauty</li>
                </ul>
            </aside>
            <div className='hero-advert'>
         <div className='hero-text'>
            <p> <BsApple /> Iphone 14 series</p>
            <h1>Up to 10% off Voucher</h1>
            <p>Shop Now</p>
         </div>

         <div className='hero-img'>
            {/* <img src={AppleIphone} alt="Apple-Iphone" /> */}
         </div>
      </div>
        </div>
    );
};

export default HeroSection;








