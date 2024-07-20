import React from 'react'
import phone from '../../../assets/Phone.png';
import computer from '../../../assets/computer.png'
import Camera from '../../../assets/Camera.png'
import Headphone from '../../../assets/Headphone.png'
import smartWatch from '../../../assets/smartWatch.png'
import phoneGaming from '../../../assets/Phone=Gaming.png'
import './Category.css'

const Category = () => {


  return (
    <>
    <div className='category'>
      <p>Categories</p>
    <h1>Browse By Categories</h1>

       <div className='category-flex'>
        <img src={phone} alt="phone" />
        <img src={computer} alt="computer" />
        <img src={smartWatch} alt="smartWatch" />
        <img src={Camera} alt="Camera" />
        <img src={Headphone} alt="Headphone" />
        <img src={phoneGaming} alt="phoneGaming" />
       </div>
    </div>
      
      
    </>
  )
}

export default Category
