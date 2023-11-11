import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import img from './image/logo.webp';
import { FaUser } from 'react-icons/fa';
import { FaCartArrowDown } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import Pages from './drop-down';


function Navbar() {
  return (
    <nav id='navbar'>
        <img src={img} alt=''/>
        <ul>
            <li><Link to='/' >Home</Link></li>
            <li><Link to='/collection' >Collection</Link></li>
            <li><Link to='/shop' >Shop</Link></li>
            <li><Link to='/android' >Android</Link></li>
            <li><Link to='/accessories' >Accessories</Link></li>
            <li><Link to='/Memory' >Memory&Storage</Link></li>
            <li><Link to='/About' ><Pages /></Link></li>
            <li><Link to='/Login' ><FaUser /></Link></li>
            <li><Link to='/Login' ><FaCartArrowDown /></Link></li>
            <li><Link to='/Login' ><FaSearch /></Link></li>
            <li><Link to='/Login' >RO</Link></li>
            
        </ul>
        
        
    </nav>
  )
}

export default Navbar