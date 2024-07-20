// // import React, { useEffect } from 'react';
// import FlashSaleCard from './FlashSaleCard';
// import './Flashsale.css';
// import Product1 from '../../../assets/product1.png'; 
// import Product2 from '../../../assets/product2.png'; 
// import Product3 from '../../../assets/product3.png'; 
// import Product4 from '../../../assets/product4.png'; 

// const flashSalesData = [
//   {
//     id: 1,
//     img: Product1,
//     productName: 'HAVIT HV-G92 Gamepad',
//     newPrice: '$120',
//     oldPrice: '$160',
//     rating: ''
//   },
//   {
//     id: 2,
//     img: Product2,
//     productName: 'HAVIT HV-G92 Gamepad',
//     newPrice: '$250',
//     oldPrice: '$180',
//     rating: ''
//   },
//   {
//     id: 3,
//     img: Product3,
//     productName: 'HAVIT HV-G92 Gamepad',
//     newPrice: '$300',
//     oldPrice: '$260',
//     rating: ''
//   },
//   {
//     id: 4,
//     img: Product4,
//     productName: 'HAVIT HV-G92 Gamepad',
//     newPrice: '$420',
//     oldPrice: '$360',
//     rating: ''
//   },
//   {
//     id: 5,
//     img: Product4,
//     productName: 'HAVIT HV-G92 Gamepad',
//     newPrice: '$620', 
//     oldPrice: '$540',
//     rating: ''
//   }
// ];

// const FlashSales = () => {
 

//   return (
//     <div className='flashSalesPage'>
//       <p className='flashsales-headline'>Flash Sales
//         <span className='time'>03: 23: 19: 56</span>
//       </p>

//       <div className='products'>
//         {flashSalesData.map(product => (
//           <FlashSaleCard 
//             key={product.id}
//             src={product.img}
//             productName={product.productName}
//             oldPrice={product.oldPrice}
//             newPrice={product.newPrice}
//             rating={product.rating}
//           />
//         ))}
//         <button className='flash-button'>View All Products</button>
//       </div>
//     </div>
//   );
// }

// export default FlashSales;



import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import FlashSaleCard from './FlashSaleCard';
import './Flashsale.css';
import Product1 from '../../../assets/product1.png'; 
import Product2 from '../../../assets/product2.png'; 
import Product3 from '../../../assets/product3.png'; 
import Product4 from '../../../assets/product4.png'; 

const flashSalesData = [
  {
    id: 1,
    img: Product1,
    productName: 'HAVIT HV-G92 Gamepad',
    newPrice: '$120',
    oldPrice: '$160',
    rating: ''
  },
  {
    id: 2,
    img: Product2,
    productName: 'HAVIT HV-G92 Gamepad',
    newPrice: '$250',
    oldPrice: '$180',
    rating: ''
  },
  {
    id: 3,
    img: Product3,
    productName: 'HAVIT HV-G92 Gamepad',
    newPrice: '$300',
    oldPrice: '$260',
    rating: ''
  },
  {
    id: 4,
    img: Product4,
    productName: 'HAVIT HV-G92 Gamepad',
    newPrice: '$420',
    oldPrice: '$360',
    rating: ''
  },
  {
    id: 5,
    img: Product4,
    productName: 'HAVIT HV-G92 Gamepad',
    newPrice: '$620',
    oldPrice: '$540',
    rating: ''
  }
];

const FlashSales = () => {
  // useEffect(() => {
  //   localStorage.setItem('flashSalesData', JSON.stringify(flashSalesData));
  // }, []);

  

  return (
    <div className='flashSalesPage'>
      <p className='flashsales-headline'>Flash Sales
        <span className='time'>03: 23: 19: 56</span>
      </p>
      <div className='products'>
        {flashSalesData.map(product => (
          <div key={product.id} className="flash-sale-item">
            <Link to={`/product/${product.id}`}>
              <FlashSaleCard 
                src={product.img}
                productName={product.productName}
                oldPrice={product.oldPrice}
                newPrice={product.newPrice}
                rating={product.rating}
              />
            </Link>
            
          </div>
        ))}
        <button className='flash-button'>View All Products</button>
      </div>
    </div>
  );
}

export default FlashSales;
