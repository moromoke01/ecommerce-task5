import React from 'react'
import './BestSelling.css';
import eyes from '../../../assets/Fill Eye.png'
import heart from '../../../assets/Fill Heart.png'
import { useDispatch,useSelector  } from 'react-redux';
// import { addToWishlist } from '../../Wishlist/Features/WishlistSlice';
import './BestSelling.css';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../../CartPage/CartSlice';

const BestSellingCard = ({ id, src, productName, oldPrice, newPrice, rating }) => {
const product = { id, src, productName, oldPrice, newPrice, rating }
const dispatch = useDispatch();
const navigate = useNavigate();
const user = useSelector(state => state.auth.user);

  // const handleAddToWishlist = () => {
  //   if (user) {
  //     dispatch(addToWishlist({ id, src, productName, oldPrice, newPrice, rating }));
  //   } else {
  //     alert('Please log in to add items to your wishlist.');
  //   }
  // };


  const handleAddToCart = () => {
    if (user) {
      const item = { id, src, productName, oldPrice, newPrice, rating, quantity: 1 };
      dispatch(addToCart({ userId: user.uid, item }));
    } else {
      alert('Please log in to add items to your cart.');
    }
  };

  const handleNavigateToDetail = () => {
    navigate(`/product/${id}`, { state: { product } });
  };


  return (
    <div className='product-card' >
      <div className='product-image' >
        <img src={src} alt="product-image" onClick={handleNavigateToDetail}/>
        <div className='icons'>
           <img src={heart} alt="heart-icon" />
           <img src={eyes} alt="eyes-icon" />
         </div>

         <button className="add-to-cart-btn" onClick={handleAddToCart}>Add to Cart</button>
      </div>
      <p>{productName}</p>
            <p className='price-flex'>
                <span className="new-price">{newPrice}</span>
                <span className="old-price">{oldPrice}</span>   
            </p>
      <p>Rating: {rating}⭐</p>
      {/* <button onClick={handleAddToWishlist}>Add to Wishlist</button> */}
     
    </div>
  );
};

export default BestSellingCard;

