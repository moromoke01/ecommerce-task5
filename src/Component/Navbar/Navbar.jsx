import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IoCartOutline, IoHeartOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { RiSearchLine } from "react-icons/ri";
import { listenAuthState, logout } from '../../Features/AuthSlice';
import './Navbar.css';

const Navbar = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);
    const [isOpen, setIsOpen] = useState(false);
    const [showUserMenu, setShowUserMenu] = useState(false);

    useEffect(() => {
        dispatch(listenAuthState());
    }, [dispatch]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleUserMenu = () => {
        setShowUserMenu(!showUserMenu);
    };

    const handleLogout = () => {
        dispatch(logout());
        setShowUserMenu(false);
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
            <div className={`nav-right-icons ${isOpen ? 'active' : ''}`}>
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
                    {user ? (
                        <span className="icon user" onClick={toggleUserMenu}>
                            <FiUser className='icon-link' />
                            {showUserMenu && (
                                <div className="user-menu">
                                    <Link to="/myaccount" onClick={() => setShowUserMenu(false)}>
                                       <p><FiUser />Manage Account</p>
                                    </Link>
                                    <Link to="/view-profile" onClick={() => setShowUserMenu(false)}>View Profile</Link>
                                    <Link to="/" onClick={() => setShowUserMenu(false)}>My Order</Link>
                                    <Link to="/" onClick={() => setShowUserMenu(false)}>My Cancellation</Link>
                                    <Link to="/" onClick={() => setShowUserMenu(false)}>My reviews</Link>
                                    <button onClick={handleLogout}>Logout</button>
                                </div>
                            )}
                        </span>
                    ) : (
                        <span className="icon">
                            <Link to="/login"><FiUser className='icon-link' /></Link>
                        </span>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
