import React from 'react'
import priority1 from '../../../assets/fast-delivery.png'
import priority2 from '../../../assets/customer-service.png'
import priority3 from '../../../assets/money-guarantee.png'
import './WhyChooseUs.css'

const WhyChooseUs = () => {
  return (
    <div className='ourPriority'>
      <img src={priority1} alt="priority1" />
      <img src={priority2} alt="priority2" />
      <img src={priority3} alt="priority3" />
    </div>
  )
}

export default WhyChooseUs
