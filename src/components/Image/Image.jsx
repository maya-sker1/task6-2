import React from 'react';
import './Image.css'
import img1 from './image/gal1.webp';
import img2 from './image/gal3.webp';
import img3 from './image/gal2.webp';
import img4 from './image/gal4.webp';
import img5 from './image/gal5.webp';

function Image() {
  return (
    <div id='Image'>
        <div className='row'>
            <div className='col'>
                <div className='imgs'><img src={img1} alt=''/></div>
                <div className='imgs'><img src={img2} alt=''/></div>
            </div>

            <div className='col'>
                <div className='imgs'><img src={img3} alt=''/></div>
                <div className='imgs'><img src={img4} alt=''/></div>
            </div>

            <div className='col'>
                <div className='image'><img src={img5} alt=''/></div>
            </div>

        </div>
    </div>
  )
}

export default Image