import React from 'react';
import './NewArrival.css'; 
import Arrival1 from '../../../assets/Arrival-1.png'
import Arrival2 from '../../../assets/Arrival-2.png'
import Arrival3 from '../../../assets/Arrival3.png'
import Arrival4 from '../../../assets/Arrival4.png'
import rectangle from '../../../assets/Rectangle 17 (1).png'


const NewArrival = () => {
    return (
        <div>
     <div>
        <p>
          <img src={rectangle} alt="rectangle" /> Featured </p>
          <h2><b>New Arrival</b></h2>
       </div>
        <div className="new-arrival-container">
            <div className='first-row'>
                <img src={Arrival1} alt="Arrival1" />
            </div>

    <div className="second-row grid-container">
        <div className="grid-item item1">
           <img src={Arrival2} alt="Arrival2" />
        </div>
        <div className="grid-item item2">
        <img src={Arrival3} alt="Arrival3" />
        </div>
        <div className="grid-item item3">
        <img src={Arrival4} alt="Arrival4" />
        </div>
    </div>
  </div>
</div>
    );
}

export default NewArrival;
