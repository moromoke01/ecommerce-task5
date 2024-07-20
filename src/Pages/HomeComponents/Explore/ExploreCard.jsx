import React from 'react';
import { LuEye } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist } from '../../Wishlist/WishlistSlice'; 
import { addToCart } from '../../CartPage/CartSlice';
import './Explore.css';
import { useNavigate } from 'react-router-dom';

const ExploreCard = ({ id, src, productName, newPrice, rating }) => {
  const product = { id, src, productName, newPrice, rating };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  const handleAddToWishlist = () => {
    if (user) {
      dispatch(addToWishlist({ userId: user.uid, item: { id, src, productName, newPrice, rating } }));
    } else {
      alert('Please log in to add items to your wishlist.');
    }
  };

  const handleAddToCart = () => {
    if (user) {
      const item = { id, src, productName, newPrice, rating, quantity: 1 };
      dispatch(addToCart({ userId: user.uid, item }));
    } else {
      alert('Please log in to add items to your cart.');
    }
  };

  const handleNavigateToDetail = () => {
    navigate(`/product/${id}`, { state: { product } });
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={src} alt="product" onClick={handleNavigateToDetail} />
        <div className="action-icons">
        <CiHeart className="icon-1" onClick={handleAddToWishlist} />
          
        <LuEye className="icon-2"/>
        </div>
        <button className="add-to-cart-btn" onClick={handleAddToCart}>Add to Cart</button>
      </div>
      <p>{productName}</p>
      <p className="new-price">{newPrice}</p>
      <p>Rating: {rating}⭐</p>
    </div>
  );
};

export default ExploreCard;
