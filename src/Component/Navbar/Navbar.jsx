import React, { useState } from 'react';
import './Navbar.css';
import { IoCartOutline, IoHeartOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { RiSearchLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="logo">
                <strong>Exclusive</strong>
            </div>
            <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <ul className={`nav-items ${isOpen ? 'active' : ''}`}>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/signup">Signup</Link></li>
            </ul>
            <div className="nav-right-icons">
                <div className="search-cart">
                    <input type="text" placeholder="What are you looking for?" className="search-bar" />
                    <RiSearchLine />
                </div>
                <div className="nav-icons">
                    <span className="icon heart">
                        <Link to="/wishlist"><IoHeartOutline className='icon-link' /></Link>
                    </span>
                    <span className="icon cart">
                        <Link to="/cart"><IoCartOutline className='icon-link' /></Link>
                    </span>
                    <span className="icon">
                        <Link to="/login"><FiUser className='icon-link' /></Link>
                    </span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
