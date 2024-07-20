import React from 'react'
import speaker from '../../../assets/speaker.png'
import './App_Advert.css'

const App_Advert = () => {
  return (
    <div className='advert2'>
      <div className='ad-content'>
        <p className='category-title'>Categories</p>
        <h1>Enhance Your Music Experience</h1>
      <p>
       <span>23</span>
        <span>05</span>
        <span>59</span>
        <span>35</span>
      </p> 
        
        <button>Buy Now</button>
      </div>

      <div className='ad-img'>
      {/* <img src={speaker} alt="radioSet" /> */}

      </div>
    </div>
  )
}

export default App_Advert
