import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FaArrowUp } from 'react-icons/fa';

function Footer() {
  return (
      <div id="fixed-end">
        <Link href="#navbar"> <button class="button fixed-footer hov"><FaArrowUp /></button></Link>

        <div className="bottom">
          <div className="end">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ex vulputate, sagittis ipsum sed, iaculis magna.</p>
            <div>
                <button className="button_go">Accept</button>
                <button className="button_go">Decline</button>
            </div>
          </div>
        </div>
      </div> 
  )
}

export default Footer