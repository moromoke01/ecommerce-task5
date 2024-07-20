import React from 'react'
import './About.css'
import AboutHero  from '../../assets/About-hero-pic.png'
import aboutTag1 from '../../assets/about-sec2-1.png'
import aboutTag2 from '../../assets/about-sec2-2.png'
import aboutTag3 from '../../assets/about-sec2-3.png'
import aboutTag4 from '../../assets/about-sec2-4.png'
import thirdSection1 from '../../assets/about-sec3-1.png'
import thirdSection2 from '../../assets/about-sec3-2.png'
import thirdSection3 from '../../assets/about-sec3-3.png'
import WhyChooseUs from '../HomeComponents/WhyChooseUs/WhyChooseUs'


const About = () => {
  return (
    <div>
      
      <section className='about-hero'>
         <div className='about-hero-box'>
           <div className='about-hero-content'>
              <h1>Our story</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere vitae ipsum temporibus doloribus inventore quas vero veritatis odio, tempora aspernatur incidunt numquam adipisci alias at eum autem sunt aliquid aperiam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nobis nulla quis deleniti. <br /> <br />
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos repudiandae reiciendis praesentium et alias voluptates. Velit amet, est praesentium quasi impedit nam laborum vero odio veritatis! Magnam illum optio in.
              </p>
           </div>
           <div className='about-hero-pic'>
           <img src={AboutHero} alt="AboutHero" />
           </div>
         </div>
      </section>

       <section className='about-section2'>
         <div className='about-section2-flex'>
          <img src={aboutTag1} alt="aboutTag1" />
          <img src={aboutTag2} alt="aboutTag2" />
          <img src={aboutTag3} alt="aboutTag3" />
          <img src={aboutTag4} alt="aboutTag4" />
         </div>
       </section>


    <section className='about-section3'>
      <img src={thirdSection2} alt="thirdSection2" />
      <img src={thirdSection1} alt="thirdSection1" />
      <img src={thirdSection3} alt="thirdSection3" />
    </section>

       <section>
         <WhyChooseUs />
       </section>

  
    </div>
  )
}

export default About
