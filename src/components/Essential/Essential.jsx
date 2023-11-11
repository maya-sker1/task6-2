import React from 'react';
import './Essential.css';
import logo1 from './image/dual.png';
import logo2 from './image/int.png';
import logo3 from './image/ddr.png';

function Essential() {
  return (
    <div className="essential" id='essential'>
          <div className='top' >      
            <h2 >WHAT MAKES THE ESSENTIAL DIFFERENT? </h2>
            <p >EXPERIENCE HIGH PERFORMANCE AND SECURE</p>
          </div>

          <div className="row">

            <div className='card' >
                <img src={logo1} alt='' className='icons' />
                <div className='text'>
                    <h5>PERFECT CUT</h5>
                    <h4>DUAL CAMERA</h4>  
                    <p>Tristique senectus et netus et malesuada ant reiet fames.</p>
                </div>
            </div>
    
            <div className='card' > 
                <img src={logo2} alt='' className='icons' /> 
                <div className='text'>
                    <h5>PRETTY</h5>
                    <h4>INTELLIGENT PROCESSING</h4>   
                    <p>Consequat ac habit amet asse felis donec et odio pellentesque diam.</p>
                </div>    
            </div>              
    
    
            <div className='card' >
                <img src={logo3} alt='' className='icons' /> 
                <div className='text'>
                    <h5>MOST POPULAR</h5>
                    <h4>8GB DDR5 RAM</h4>
                    <p class="card-text p-1 text-secondary">Dictum varius duis at consectetur lorem donec massa sap faucibus.</p>
                </div>
            </div>
    
    
          </div>
      </div>
  )
}

export default Essential