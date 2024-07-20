// src/components/Billing.js
import React from 'react';
import './Billing.css';
import product1 from '../../assets/product1.png'
import product3 from '../../assets/product3.png'
import cardType1 from '../../assets/card-type1.png'
import cardType2 from '../../assets/card-type2.png'
import cardType3 from '../../assets/card-type3.png'
import cardType4 from '../../assets/card-type4.png'

const Billing = () => {
    return (
        <div className="billing-container">
            <div className="billing-form">
                <h2>Billing Information</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="fullName">Full Name</label>
                        <input type="text" id="fullName" name="fullName" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="country">Company Name</label>
                        <input type="text" id="company" name="company" required />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="address">Street Address</label>
                        <input type="text" id="address" name="address" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="state">Apartment, floor, etc (optional)</label>
                        <input type="text" id="Apartment" name="Apartment" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input type="text" id="city" name="city" required />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="zip">Phone Number</label>
                        <input type="text" id="pnumb" name="pnumb" required />
                    </div>
                    

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                </form>
            </div>
            <div className="payment-details">
                <h2>Payment Details</h2>
                
                    <div className="payment-group">
                        <div className='pay-for-item'>
                            <img src={product1} alt="product1" />
                            <span>LCD Monitor</span>
                        </div>
                        <p>$650</p>
                    </div>

                    <div className="payment-group">
                        <div className='pay-for-item'>
                            <img src={product3} alt="product2" />
                            <span>LCD Monitor</span>
                        </div>
                        <p>1100</p>
                    </div>

                    <div className="payment-group border-bottom">
                        <p>subtotal:</p>
                        <p>$1750</p>
                    </div>

                    <div className="payment-group border-bottom">
                        <p>Shipping:</p>
                        <p>$Free</p>
                    </div>

                    <div className="payment-group">
                        <p>Total:</p>
                        <p>$1750</p>
                    </div>
                    
                    <div  className="payment-group">
                        <span>
                        <input type="radio" />
                        Bank
                        </span>

                        <div  className="payment-card-option">
                            <img src={cardType1} alt="cardType1" />
                            <img src={cardType2} alt="cardType2" />
                            <img src={cardType3} alt="cardType3" />
                            <img src={cardType4} alt="cardType4" />
                        </div>
                    </div>

                    <div >
                        <input type="radio" />
                        Cash on Delivery
                    </div>

                    <div className="payment-group coupon-space">
                        <input type="text" id="coupon" name="coupon" placeholder='Coupon Code' className='coupon'/>
                        <button className='payment-button'>Apply Coupon</button>
                    </div>
                
                <button className='payment-button'>Place Order</button>
            </div>
        </div>
    );
};

export default Billing;
