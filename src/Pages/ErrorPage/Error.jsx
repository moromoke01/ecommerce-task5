import React from 'react';
import './Error.css';
import { Link } from "react-router-dom"

const ErrorPage = () => {
    return (
        <div className="error-container">
            <h1 className="error-title">404 Not Found</h1>
            <p className="error-message">Your visited page not found, You may go to home page</p>
            <button className='error-btn'>
                <Link to="/home" className='error-link'>Back to HomePage</Link>
            </button>
        </div>
    );
}

export default ErrorPage;
