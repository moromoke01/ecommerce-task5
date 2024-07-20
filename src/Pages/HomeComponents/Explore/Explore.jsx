import React from 'react'
import explore1 from '../../../assets/explore1.png'
import explore2 from '../../../assets/explore2.png'
import explore3 from '../../../assets/explore3.png'
import explore4 from '../../../assets/explore4.png'
import explore5 from '../../../assets/explore5.png'
import explore6 from '../../../assets/explore6.png'
import explore7 from '../../../assets/explore7.png'
import explore8 from '../../../assets/explore8.png'
import rectangle from '../../../assets/Rectangle 17 (1).png'
import ExploreCard from './ExploreCard'
import './Explore.css'

const Explore = () => {

    const exploreProducts = [
        {
            id: 1,
            src: explore1,
            productName: 'Breed Dry Dog Food',
            Price: '$100',
            rating:''
        },
        {
          id:2,
          src: explore2,
          productName: 'CANON EOS DSLR Camera',
          Price: '$360',
          rating:''
      },
      {
        id:3,
        src: explore3,
        productName: 'ASUS FHD Gaming Laptop',
        Price: '$700',
        rating:''
    },
    {
      id:4,
      src: explore4,
      productName: 'Curology Product Set',
      Price: '$500',
      rating:''
  },
  {
    id:5,
    src: explore5,
    productName: 'Kids Electric Car',
    Price: '$960',
    rating:''
},
{
    id:6,
    src: explore6,
    productName: 'Jr. Zoom Soccer Cleats',
    Price: '$1160',
    rating:''
},
{
    id:7,
    src: explore7,
    productName: 'GP11 Shooter USB Gamepad',
    Price: '$660',
    rating:''
},
{
    id:4,
    src: explore8,
    productName: 'Quilted Satin Jacket',
    Price: '$660',
    rating:''
}
]
  return (
    <div className='exploreSection'>
       <div>
        <p>
          <img src={rectangle} alt="rectangle" /> Our Products</p>
       </div>
       <h2>Explore Our Products</h2>
       
       <div className='products'>
        {exploreProducts.map(myItem => (
            <ExploreCard 
              key={myItem.id}
              src={myItem.src}
              productName={myItem.productName}
              newPrice={myItem.Price}

            />
        ))}
       </div>

       <button className='explore-btn-down'>View All Product</button>
    </div>
  )
}

export default Explore
