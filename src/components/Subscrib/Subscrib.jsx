import React from 'react';
import './Subscrib.css';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

function Subscrib() {
  return (
    <section id="SUBSCRIBE">
        <div class="sub">

            <div className='top'>
                <h5>SUBSCRIBE NOW</h5>
                <h2>GET OUR UPDATES ALWAYS FAST</h2>
                <h5>YOUR PERSONAL DATA WILL ALWAYS BE SAFE</h5>
            <div/>

            <div className="wrapper">
                 <input placeholder='Enter your email id '/><button className=" hov"><FaArrowLeft /></button>
            </div>

            <div className="row">
                <h5> <Link href="#">Search</Link> </h5>
                <h5 className='none'>/</h5>
                <h5> <Link href="#">Help</Link></h5>
                <h5 className='none'>/</h5>
                <h5> <Link href="#">InformLinktion</Link> </h5>
                <h5 className='none'>/</h5>
                <h5> <Link href="#">PrivLinkcy Policy</Link></h5>
                <h5 className='none'>/</h5>
                <h5><Link href="#">Shipping DetLinkils </Link></h5>
            </div>

          </div>
        </div>
      </section>
  )
}

export default Subscrib