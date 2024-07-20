import React from 'react';
import './NewArrival.css'; 
// import newArrival1 from '../../../assets/newArrival-1.png'
// import newArrival2 from '../../../assets/newArrival-2.png'
// import newArrival3 from '../../../assets/newArrival-3.png'
// import newArrival4 from '../../../assets/newArrival-4.png'
import Arrival1 from '../../../assets/Arrival-1.png'
import Arrival2 from '../../../assets/Arrival-2.png'


const NewArrival = () => {
    return (
        <div className="new-arrival-container">
            <div className="first-row">
                {/* <div className="box equal-width">
                    <img src={newArrival1} alt="Image 1" className='arrival-product' />
                    <div className="text-overlay">Text Overlay</div>
                </div> */}

                <img src={Arrival1} alt="Arrival1" />
                
            </div>

            <div className="second-row">
                <img src={Arrival2}  alt="Arrival2" />
                {/* <div >
                    <img src={newArrival2} alt="Image 2" className='arrival-product'/>
                    <div className="text-overlay">Text Overlay</div>
                </div>
                <div >
                    <img src={newArrival3} alt="Image 3" className='arrival-product'/>
                    <div className="text-overlay">Text Overlay</div>
                </div>
                <div >
                    <img src={newArrival4} alt="Image 4" className='arrival-product'/>
                    <div className="text-overlay">Text Overlay</div>
                </div> */}
                
            </div>
        </div>
    );
}

export default NewArrival;
