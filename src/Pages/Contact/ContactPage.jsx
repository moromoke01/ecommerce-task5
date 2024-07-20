import React from 'react';
import './Contact.css';

const ContactPage = () => {
  return (
    <div className="contact-container">

      <div className="left-section">
        <h2 className="section-title">Call Us</h2>
        <p className="section-info">We are available 24/7, 7 days a week</p>
        <p className="section-info">Phone: =80567790011123</p>

      
        <hr className="divider" />
        <h2 className="section-title">Write to Us</h2>
        <p className="section-info">Address: 123 Example St, City, Country</p>
      </div>

 <div className="right-section">
    <div className='form-flex'>
        <div className="form-group">
          <label className="input-label">Name</label>
          <input type="text" className="input-field" />
        </div>
        <div className="form-group">
          <label className="input-label">Email</label>
          <input type="email" className="input-field" />
        </div>
        <div className="form-group">
          <label className="input-label">Phone Number</label>
          <input type="tel" className="input-field" />
        </div>
    </div>
        <div className="form-group">
          <label className="input-label">Message</label>
          <textarea className="textarea-field" placeholder="Write your message..." />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
