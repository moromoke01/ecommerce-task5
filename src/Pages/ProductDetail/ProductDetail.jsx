import React from 'react';
import { useLocation } from 'react-router-dom';
import './ProductDetail.css';
import RelatedItems from './ReltedItems/RelatedItems';


const ProductDetail = () => {
  const location = useLocation();
  const { product } = location.state || {};

  if (!product) {
    return <div>No product data available</div>;
  }

  return (
    <div className="product-detail-page">
      <p className='ref'>Account/ Gaming / <b>{product.productName}</b></p>
      <div className="product-detail">
      <div className="product-detail-main">
        <div className="product-images-column">
          <div className="small-image">
            <img src={product.src} alt="product-thumbnail" />
          </div>
          <div className="small-image">
            <img src={product.src} alt="product-thumbnail" />
          </div>
          <div className="small-image">
            <img src={product.src} alt="product-thumbnail" />
          </div>
          <div className="small-image">
            <img src={product.src} alt="product-thumbnail" />
          </div>
        </div>
        <div className="product-image-full">
          <img src={product.src} alt="product-full-size" />
        </div>
      </div>
      <div className="product-detail-info">
        <h2>{product.productName}</h2>
        <p>Rating: {product.rating}⭐</p>
        <p>{product.newPrice}.00</p>
        <p>Description: {product.description}</p>
        <hr />
        <div className="product-sizes">
          <div className="size-box">XS</div>
          <div className="size-box">S</div>
          <div className="size-box">M</div>
          <div className="size-box">L</div>
          <div className="size-box">XL</div>
        </div>
        <div className="product-actions">
          <div className="quantity-box">
            <button>-</button>
            <span>1</span>
            <button className="plus-button">+</button>
          </div>
          <button className="buy-now-button">Buy Now</button>
          <div className="love-icon">❤️</div>
        </div>

        <div className='delivery-info'>
          <span>
            <p>Free Delivery</p>
            <u>Enter your postal code for Delivery Availability</u>
          </span>

          <hr />

          <span>
            <p>Return Delivery</p>
            Free 30 Days Delivery Returns. <u>Details</u>
          </span>
        </div>
      </div>
    </div>


    <div className='related-item'>
      <RelatedItems/>
    </div>
    </div>
  );
};

export default ProductDetail;
