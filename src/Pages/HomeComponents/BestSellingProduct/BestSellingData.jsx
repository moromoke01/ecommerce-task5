import React, { useEffect } from 'react';
import bestProduct1 from '../../../assets/bestSelling1.png';
import bestProduct2 from '../../../assets/bestSelling2.png';
import bestProduct3 from '../../../assets/bestSelling3.png';
import bestProduct4 from '../../../assets/bestSelling4.png';
import BestSellingCard from './BestSellingCard';
import rectangle from '../../../assets/Rectangle 17 (1).png';
import './BestSelling.css';

const bestProductsData = [
  {
    id: 1,
    src: bestProduct1,
    productName: 'The north coat',
    newPrice: '$260',
    oldPrice: '$360'
  },
  {
    id: 2,
    src: bestProduct2,
    productName: 'Gucci duffle bag',
    newPrice: '$960',
    oldPrice: '$1160'
  },
  {
    id: 3,
    src: bestProduct3,
    productName: 'RGB liquid CPU cooler',
    newPrice: '$160',
    oldPrice: '$170'
  },
  {
    id: 4,
    src: bestProduct4,
    productName: 'Small BookShelf',
    newPrice: '$360'
  }
];

const BestSelling = () => {
  // useEffect(() => {
  //   localStorage.setItem('bestSellingData', JSON.stringify(bestProductsData));
  // }, []);

  return (
    <div className='bestSellingSection'>
      <p>
        <img src={rectangle} alt="rectangle" />This month
      </p>
      <div className='headline-flex'>
        <h2>Best Selling Products</h2>
        <button>View All</button>
      </div>
      <div className='products'>
        {bestProductsData.map(product => (
          <BestSellingCard 
            key={product.id}
            src={product.src}
            productName={product.productName}
            newPrice={product.newPrice}
            oldPrice={product.oldPrice}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSelling;
