import React from 'react';
import './AccountPage.css';

const AccountPage = () => {
  return (
    <div className='Account'>
        <p>Home / <b> My Account</b></p>
    
    <div className="account-page">
      <div className="sidebar">
       
        <div className="list">
          <h2>Manage My Account</h2>
          <p className='red-text'>My Profile</p>
          <p>Address Book</p>
          <p>My Payment</p>
        </div>
        <div className="list">
          <h2>My Order</h2>
          <p>My Returns</p>
          <p>My cancellations</p>
        </div>

        <div className="list">
          <h2>My Wishlist</h2>
          </div>
      </div>

      <div className="content">
        <p className='red-text'>Edit Your Profile</p>
        <div className="input-row">
          <div>
            <label>First Name</label>
            <input type="text" placeholder="First Name" />
          </div>

          <div>
            <label > Last Name</label>
            <input type="text" placeholder="Second Name" />
          </div>
        </div>
        <div className="input-row">
          <div>
            <label>Email</label>
            <input type="email" placeholder="Email" />
          </div>
          
          <div>
            <label >Address</label>
            <input type="text" placeholder="Address" />
          </div>
        </div>
        <div>
            <label >Password Changes</label>
            <input type="password" placeholder="Old Password" className="full-width" />
            <input type="password" placeholder="New Password" className="full-width" />
            <input type="password" placeholder="Confirm Password" className="full-width" />
        </div>

        <div className='account-btn'>
            <p>Cancel</p>
            <button>Save Changes</button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default AccountPage;
