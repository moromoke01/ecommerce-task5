// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchCartItems, removeFromCart, updateQuantity } from './CartSlice';

// const CartPage = () => {
//   const dispatch = useDispatch();
//   const user = useSelector((state) => state.auth.user);
//   const cartItems = useSelector((state) => state.cart.cartItems);

//   useEffect(() => {
//     if (user) {
//       dispatch(fetchCartItems(user.uid));
//     }
//   }, [user, dispatch]);

//   const handleRemoveFromCart = (itemId) => {
//     dispatch(removeFromCart({ userId: user.uid, itemId }));
//   };

//   const handleUpdateQuantity = (itemId, quantity) => {
//     dispatch(updateQuantity({ userId: user.uid, itemId, quantity }));
//   };

//   return (
//     <div>
//       <h2>Your Cart</h2>
//       <ul>
//         {cartItems.map((item) => (
//           <li key={item.id}>
//             <p>{item.productName}</p>
//             <p>{item.newPrice}</p>
//             <input
//               type="number"
//               value={item.quantity}
//               onChange={(e) => handleUpdateQuantity(item.id, e.target.value)}
//             />
//             <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default CartPage;





// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchCartItems, loadCartItems } from './CartSlice'; 
// import { useNavigate } from 'react-router-dom'; 
// import './Cart.css'; 

// const CartPage = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const user = useSelector((state) => state.auth.user);
//   const cartItems = useSelector((state) => state.cart.cartItems);

//   useEffect(() => {
//     if (user) {
//       dispatch(fetchCartItems(user.uid));
//     }
//   }, [user, dispatch]);

//   useEffect(() => {
//     localStorage.setItem('cartItems', JSON.stringify(cartItems));
//   }, [cartItems]);

//   useEffect(() => {
//     const savedCartItems = JSON.parse(localStorage.getItem('cartItems'));
//     if (savedCartItems) {
//       dispatch(loadCartItems(savedCartItems));
//     }
//   }, [dispatch]);

//   const handleReturnToShop = () => {
//     navigate('/'); 
//   };

//   const handleUpdateCart = () => {

//     alert('Cart updated!'); 
//   };

//   return (
//     <div className="cart-page">
//       {/* <h2>Your Cart</h2> */}
//       <p> Home / <b>Cart</b> </p>
//       <table className="cart-table">
//         <thead>
//           <tr>
//             <th>Product</th>
//             <th>Price</th>
//             <th>Quantity</th>
//             <th>Subtotal</th>
//           </tr>
//         </thead>
//         <tbody>
//           {cartItems.map((item) => (
//             <tr key={item.id}>
//               <td>{item.productName}</td>
//               <td>{item.newPrice}</td>
//               <td>{item.quantity}</td>
//               <td>{item.newPrice * item.quantity}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <div className="cart-actions">
//         <button onClick={handleReturnToShop} className="return-to-shop">
//           Return to Shop
//         </button>
//         <button onClick={handleUpdateCart} className="update-cart">
//           Update Cart
//         </button>
//       </div>
//       <div className="coupon">
//         <input type="text" placeholder="Coupon Code" />
//         <button className="apply-coupon">Apply Coupon</button>
//       </div>
//     </div>
//   );
// };

// export default CartPage;




import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCartItems, removeFromCart, updateQuantity } from './CartSlice';
import { useNavigate } from 'react-router-dom'; 
import './Cart.css'; 

const CartPage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const cartItems = useSelector((state) => state.cart.cartItems);
 const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      dispatch(fetchCartItems(user.uid));
    }
  }, [user, dispatch]);

  // const handleRemoveFromCart = (itemId) => {
  //   dispatch(removeFromCart({ userId: user.uid, itemId }));
  // };

  // const handleUpdateQuantity = (itemId, quantity) => {
  //   dispatch(updateQuantity({ userId: user.uid, itemId, quantity }));
  // };

  const handleReturnToShop = () => {
    navigate('/'); 
  };

  const handleUpdateCart = () => {
    alert('Cart updated!'); 
  };

  return (
    <div className="cart-page">
      {/* <h2>Your Cart</h2> */}
      <p> Home / <b>Cart</b> </p>
      <table className="cart-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>{item.productName}</td>
              <td>{item.newPrice}</td>
              <td>{item.quantity}</td>
              <td>{item.newPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="cart-actions">
        <button onClick={handleReturnToShop} className="return-to-shop">
          Return to Shop
        </button>
        <button onClick={handleUpdateCart} className="update-cart">
          Update Cart
        </button>
      </div>
      <div className="coupon">
        <input type="text" placeholder="Coupon Code" />
        <button className="apply-coupon">Apply Coupon</button>
      </div>
    </div>
  );
};

export default CartPage;



