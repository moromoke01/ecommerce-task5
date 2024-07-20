import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWishlistItems, removeFromWishlist } from './WishlistSlice';
import { useNavigate } from 'react-router-dom';
import './Wishlist.css';
import { addToCart } from '../CartPage/CartSlice';
import { MdDeleteOutline } from "react-icons/md";
import RelatedItems from './ReltedItems/RelatedItems';

const WishlistPage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      dispatch(fetchWishlistItems(user.uid));
    }
  }, [user, dispatch]);

  const handleRemoveFromWishlist = (itemId) => {
    dispatch(removeFromWishlist({ itemId }));
  };

  const handleAddToCart = () => {
    if (user) {
      const item = { id, src, productName, newPrice, rating, quantity: 1 };
      dispatch(addToCart({ userId: user.uid, item }));
    } else {
      alert('Please log in to add items to your cart.');
    }
  };

  return (
    <div>
    <div className="wishlist-page">
      <h2>Your Wishlist</h2>
      <div className="wishlist-grid">
        {wishlistItems.map((item) => (
            <>
        <div key={item.id} className="product-card">

          <div className="product-image">
            <img src={item.src} alt={item.productName} onClick={() => navigate(`/product/${item.id}`)} />
            <div >
              <MdDeleteOutline className="icon" onClick={() => handleRemoveFromWishlist(item.id)}/>
           </div>
        <button className="add-to-cart-btn" onClick={handleAddToCart}>Add to Cart</button>
      </div>
      
      <p>{item.productName}</p>
      <p className="new-price">{item.newPrice}</p>
      <p>Rating: {item.rating}⭐</p>
          {/* <div className="wishlist-details">
              <p>{item.productName}</p>
              <p>{item.newPrice}</p>
              <p>Rating: {item.rating}⭐</p>
              <button >Remove</button>
            </div> */}

        </div>
            </>
        ))}
      </div>
      
    </div>

    <div className='related-item'>
      <RelatedItems/>
    </div>
    </div>
  );
};

export default WishlistPage;
