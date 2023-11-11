import React, { useState } from 'react';
import './Accordion.css'
const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="accordion">
      <div className="accordion-item">
        <div
          className={`accordion-header ${activeIndex === 0 ? 'active' : ''}`}
          onClick={() => toggleAccordion(0)}
        >
            <p>
            NEW GRADIENT COLOR FINISHES</p> 
        </div>
        {activeIndex === 0 && (
          <div className="accordion-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui official.


          </div>
        )}
      </div>
      <div className="accordion-item">
        <div
          className={`accordion-header ${activeIndex === 0 ? 'active' : ''}`}
          onClick={() => toggleAccordion(0)}
        >
            <p>
            FOUR-SIDED CURVED CERAMIC BODY</p> 
        </div>
        {activeIndex === 0 && (
          <div className="accordion-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui official.


          </div>
        )}
      </div>
      
      <div className="accordion-item">
        <div
          className={`accordion-header ${activeIndex === 0 ? 'active' : ''}`}
          onClick={() => toggleAccordion(0)}
        >
            <p>
            4000MAH HIGH-CAPACITY BATTERY</p> 
        </div>
        {activeIndex === 0 && (
          <div className="accordion-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui official.


          </div>
        )}
      </div>
      <div className="accordion-item">
        <div
          className={`accordion-header ${activeIndex === 1 ? 'active' : ''}`}
          onClick={() => toggleAccordion(1)}
        >
          <p>FULLY HIDDEN CAMERA LENS</p>
        </div>
        {activeIndex === 1 && (
          <div className="accordion-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui official.


          </div>
        )}
      </div>
    </div>
  );
};

export default Accordion;