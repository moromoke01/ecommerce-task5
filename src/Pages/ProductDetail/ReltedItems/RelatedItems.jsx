import React from 'react';
import RelatedItemsCard from './RelatedItemsCard';
import './RelatedItems.css';
import Product1 from '../../../assets/product1.png'; 
import Product2 from '../../../assets/product2.png'; 
import Product3 from '../../../assets/product3.png'; 
import Product4 from '../../../assets/product4.png'; 
import rectangle from '../../../assets/Rectangle 17 (1).png';


const RelatedItems = () => {

const RelatedItemsData = [
  {
    id: 1,
    img: Product1,
    productName: 'HAVIT HV-G92 Gamepad',
    newPrice: '$120',
    oldPrice: '$160',
    rating: '',
    Discount: '-30%'
  },
  {
    id: 2,
    img: Product2,
    productName: 'AK-900 wired Keyboard',
    newPrice: '$250',
    oldPrice: '$180',
    rating: '',
    Discount: '-40%'
  },
  {
    id: 3,
    img: Product3,
    productName: 'IPS LCD Gaming Monitor',
    newPrice: '$300',
    oldPrice: '$260',
    rating: '',
    Discount: '-35%'
  },
  {
    id: 4,
    img: Product4,
    productName: 'RGB liquid CPU Cooler',
    newPrice: '$420',
    oldPrice: '$360',
    rating: 3.5
  }
];

  return (
    <div className='RelatedItemSection'>
      <div className='RelatedItems-headline'>
        <p>
          <img src={rectangle} alt="rectangle" /> Related Item
        </p>
      </div>

      <div className='products'>
        {RelatedItemsData.map( product => (
          <RelatedItemsCard 
            key={product.id}
            src={product.img}
            productName={product.productName}
            oldPrice={product.oldPrice}
            newPrice={product.newPrice}
            rating={product.rating}
            discount={product.Discount}
          />
        ))}
      </div>
      {/* <button className='RelatedItems-button'>View All Products</button> */}
    </div>
  );
}

export default RelatedItems
