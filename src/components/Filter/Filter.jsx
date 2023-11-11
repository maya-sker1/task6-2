import React from 'react'
import logo1 from './Image/free.svg';
import logo2 from './Image/offical.png';
import logo3 from './Image/helpline.png';
import './Filter.css';
function Filter() {
  return (
    <div class="filter ">
                <div class="fi">
                <img src={logo1} alt='' className='image' /> 
                    <div class="col">
                        <h5>Free Shipping</h5>
                        <p>For orders over $50</p>
                    </div>
                </div>

                <div class="fi">
                <img src={logo2} alt='' className='image' /> 
                    <div class="col">
                        <h5>Official Discounts</h5>
                        <p>Save Big on next product</p>
                    </div>
                </div>

                <div class="fi"> 
                    {/* <!-- <i class="fa-solid fa-xmark text-dark icon p-2 text-end"></i> --> */}
                    <img src={logo3} alt='' className='image' /> 
                    <div class="col">
                        <h5>24/7 Helpline</h5>
                        <p>Care till the end</p>
                    </div>
                </div>

            </div>
            
  )
}

export default Filter