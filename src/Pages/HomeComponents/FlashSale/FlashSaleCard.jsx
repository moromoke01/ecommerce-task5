// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { addToCart } from '../../CartPage/CartSlice';
// import heart from '../../../assets/Fill Heart.png';
// import eyes from '../../../assets/Fill Eye.png';
// import './Flashsale.css';

// const FlashSaleCard = ({ id, src, productName, oldPrice, newPrice, rating }) => {
//   const product = { id, src, productName, oldPrice, newPrice, rating };
//   const dispatch = useDispatch();
//   const user = useSelector((state) => state.auth.user);

//   const handleAddToCart = () => {
//     if (user) {
//       const item = { id, src, productName, oldPrice, newPrice, rating, quantity: 1 };
//       dispatch(addToCart({ userId: user.uid, item }));
//     } else {
//       alert('Please log in to add items to your cart.');
//     }
//   };

//   return (
//     <div className="flashCard">
//       <div className="flash_img">
//         <img src={src} alt="flashcard-img" />
//         <div className="icons">
//           <img src={heart} alt="heart-icon" />
//           <img src={eyes} alt="eyes-icon" />
//         </div>
//         <button className="add-to-cart-btn" onClick={handleAddToCart}>Add to Cart</button>
//       </div>
//       <h3>{productName}</h3>
//       <p>
//         <span className="new-price">{newPrice}</span>
//         <span className="old-price">{oldPrice}</span>
//       </p>
//       <p>Rating: {rating}⭐</p>
//     </div>
//   );
// };

// export default FlashSaleCard;





// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { addToCart } from '../../CartPage/CartSlice';
// import heart from '../../../assets/Fill Heart.png';
// import eyes from '../../../assets/Fill Eye.png';
// import './Flashsale.css';

// const FlashSaleCard = ({ id, src, productName, oldPrice, newPrice, rating }) => {
//   const product = { id, src, productName, oldPrice, newPrice, rating };
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const user = useSelector((state) => state.auth.user);

//   const handleAddToCart = () => {
//     if (user) {
//       const item = { id, src, productName, oldPrice, newPrice, rating, quantity: 1 };
//       dispatch(addToCart({ userId: user.uid, item }));
//     } else {
//       alert('Please log in to add items to your cart.');
//     }
//   };

//   const handleNavigateToDetail = () => {
//     navigate(`/product/${id}`, { state: { product } });
//   };

//   return (
//     <div className="flashCard" onClick={handleNavigateToDetail}>
//       <div className="flash_img">
//         <img src={src} alt="flashcard-img" />
//         <div className="icons">
//           <img src={heart} alt="heart-icon" />
//           <img src={eyes} alt="eyes-icon" />
//         </div>
//         <button className="add-to-cart-btn" onClick={(e) => { e.stopPropagation(); handleAddToCart(); }}>
//           Add to Cart
//         </button>
//       </div>
//       <h3>{productName}</h3>
//       <p>
//         <span className="new-price">{newPrice}</span>
//         <span className="old-price">{oldPrice}</span>
//       </p>
//       <p>Rating: {rating}⭐</p>
//     </div>
//   );
// };

// export default FlashSaleCard;





import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../CartPage/CartSlice';
import heart from '../../../assets/Fill Heart.png';
import eyes from '../../../assets/Fill Eye.png';
import './Flashsale.css';

const FlashSaleCard = ({ id, src, productName, oldPrice, newPrice, rating }) => {
  const product = { id, src, productName, oldPrice, newPrice, rating };
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const handleAddToCart = (e) => {
    e.stopPropagation();
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
    <div className="flashCard" >
      <div className="flash_img">
        <img src={src} alt="flashcard-img" onClick={handleNavigateToDetail}/>
        <div className="icons">
          <img
            src={heart}
            alt="heart-icon"  
          />
          <img src={eyes} alt="eyes-icon" />
        </div>
        <button
          className="add-to-cart-btn" >
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

export default FlashSaleCard;
