import React from 'react'
import './HomePage.css'
import HeroSection from '../Hero/HeroSection'
import FlashSale from '../FlashSale/FlashSale'
import Category from '../Category/Category'
import BestSellingData from '../BestSellingProduct/BestSellingData'
import App_Advert from '../In-app-ad/App_Advert'
import Explore from '../Explore/Explore'
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs'
import NewArrival from '../NewArrival/NewArrival'


const HomePage = () => {
  return (
    <div className='home'>
      <HeroSection /> 
      <FlashSale />
      <Category />
      <BestSellingData />
      <App_Advert />
      <Explore />
      <NewArrival />
      <WhyChooseUs />
      
    </div>
  )
}

export default HomePage
