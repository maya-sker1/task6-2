import React from 'react'
import './Innovative.css'
import logo1 from './image/dual2.png'
import im from './image/mx.png'
function Innovative() {
  return (
    <div className="innovative">

      <div className='top-text'>
        <h2 class="text-center text-dark mt-5">INNOVATIVE QUALITIES & FEATURES</h2>
        <p class="text-center text-secondary p-4">SHOW YOURS TO THE WORLD</p>
      </div>

      <div className="row">   

        <div class="COL">

            <div class="card">
                <div class="col">
                    <h5>INTELLIGENT PROCESSOR</h5>
                    <p>
                        Tellus in hac habitasse platea dictumst vestibulum rhoncus srd mana erti qeueri
                    </p>
                </div>
                <img src={logo1} alt='' className='image' />
            </div>

            <div class="card">
                <div class="col">
                    <h5>INTELLIGENT PROCESSOR</h5>
                    <p>
                        Tellus in hac habitasse platea dictumst vestibulum rhoncus srd mana erti qeueri
                    </p>
                </div>
                <img src={logo1} alt='' className='image' />
            </div>

            <div class="card">
                <div class="col">
                <h5>INTELLIGENT PROCESSOR</h5>
                <p>
                    Tellus in hac habitasse platea dictumst vestibulum rhoncus srd mana erti qeueri
                </p>
                </div>
                <img src={logo1} alt='' className='image' />
            </div>
        </div>


        <div class="COL">
            <div class="card"> 
                  <img src={im} alt='' className='phone' />
            </div>
        </div>


        <div class="COL">

            <div class="card">
                <img src={logo1} alt='' className='image' />
                <div class="col">
                    <h5>INTELLIGENT PROCESSOR</h5>
                    <p>
                        Tellus in hac habitasse platea dictumst vestibulum rhoncus srd mana erti qeueri
                    </p>
                </div>
            </div>

            <div class="card">
                <img src={logo1} alt='' className='image' />
                <div class="col">
                    <h5>INTELLIGENT PROCESSOR</h5>
                    <p>
                        Tellus in hac habitasse platea dictumst vestibulum rhoncus srd mana erti qeueri
                    </p>
                </div>
            </div>

            <div class="card">
                <img src={logo1} alt='' className='image' />
                <div class="col">
                    <h5>INTELLIGENT PROCESSOR</h5>
                    <p>
                        Tellus in hac habitasse platea dictumst vestibulum rhoncus srd mana erti qeueri
                    </p>
                </div>
            </div>
        </div>
        
        </div>          
  </div>
  )
}

export default Innovative