import React from 'react'
import './Performance.css'
import phone from './image/hotspot_.webp'
import im1 from './image/ic7.png'
import im2 from './image/ic10.webp'
import im3 from './image/camera.webp'
import im4 from './image/ic8.png'
import { FaCircle } from 'react-icons/fa';

function Performance() {
  return (
    <div id='Performance'>
        <div className='top-text'>
        <h2 class="text-center text-dark mt-5">POSSIBILITIES. PERFORMANCE. POWER.</h2>
        <p class="text-center text-secondary p-4">FASTER PROCESSING WITH LESS POWER</p>
      </div>
      <div className='mobile-image'>
        <img src={phone} alt='' className='image' />
      </div>
      <div className='lines'>
        <div className='col'>
          <FaCircle />
          <div class="line1 "></div>
            <div class="card-body1  ">
              <img src={im1} alt='' className='c-image' />
              <h5 class="text-dark ">SCORPION PROCESSOR  </h5>
              <p class="text-dark"> Tristique senectus et netus et malesuada fames ac turpis.</p>
            </div>
        </div>
        <div className='col'>
          <FaCircle />
          <div class="line2 "></div>
            <div class="card-body1  ">
              <img src={im2} alt='' className='c-image' />
              <h5 class="text-dark ">SCORPION PROCESSOR  </h5>
              <p class="text-dark"> Tristique senectus et netus et malesuada fames ac turpis.</p>
            </div>
        </div>
        <div className='col'>
          <FaCircle />
          <div class="line3 "></div>
            <div class="card-body1  ">
              <img src={im3} alt='' className='c-image' />
              <h5 class="text-dark ">SCORPION PROCESSOR  </h5>
              <p class="text-dark"> Tristique senectus et netus et malesuada fames ac turpis.</p>
            </div>
        </div>
        <div className='col'>
          <FaCircle />
          <div class="line4 "></div>
            <div class="card-body1  ">
              <img src={im4} alt='' className='c-image' />
              <h5 class="text-dark ">SCORPION PROCESSOR  </h5>
              <p class="text-dark"> Tristique senectus et netus et malesuada fames ac turpis.</p>
            </div>
        </div>


       
      </div>
    </div>
  )
}

export default Performance