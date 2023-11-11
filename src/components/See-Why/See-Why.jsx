import React from 'react';
import img from './image/bg-1.webp';
import './See-Why.css';
import Accordion from './Accordion/Accordion';

function SeeWhy() {
  return (
    <div id='SeeWhy'>
      <div className='top' >      
            <h2 >SEE WHY CUSTOMERS LOVE THE OUR MOBILES</h2>
            <p >EDESIGNED TO PERFECTION</p>
      </div>
      <div className='row'>
        <div className='col'>
          <img src={img } alt='' className='icons' /> 
        </div>
        <div className='col'>
          <Accordion />
        </div>
        </div>
      </div>
  )
}

export default SeeWhy