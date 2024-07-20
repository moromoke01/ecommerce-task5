import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import { addToCart } from '../../CartPage/CartSlice';
import heart from '../../../assets/Fill Heart.png';
import eyes from '../../../assets/Fill Eye.png';
import './RelatedItems.css';

const RelatedItemsCard = ({  src, productName, oldPrice, newPrice, rating, discount }) => {
//   const product = { id, src, productName, oldPrice, newPrice, rating };
  const dispatch = useDispatch();
//   const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  const handleAddToCart = (e) => {
    e.stopPropagation(); 
    if (user) {
      const item = {  src, productName, oldPrice, newPrice, rating, discount, quantity: 1 };
      dispatch(addToCart({ userId: user.uid, item }));
    } else {
      alert('Please log in to add items to your cart.');
    }
  };

//   const handleNavigateToDetail = () => {
//     navigate(`/product/${id}`, { state: { product } });
//   };

  return (
    <div className="RelatedItems" >
      <div className="RelatedItemsCard_img">
        <img src={src} alt="RelatedItemsCard-img" />
        <span className="discount">{discount}</span>
        <div className="icons">
          <img src={heart} alt="heart-icon" />
          <img src={eyes} alt="eyes-icon" />
        </div>

        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          Add to Cart
        </button>

      </div>
      <h3>{productName}</h3>
      <p>
        <span className="new-price">{newPrice}</span>
        <span className="old-price">{oldPrice}</span>
      </p>
      <p>Rating: {rating}⭐</p>
    </div>
  );
};

export default RelatedItemsCard;
