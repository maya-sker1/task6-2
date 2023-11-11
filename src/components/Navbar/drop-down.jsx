import React, { useState } from 'react';
import './drop-down.css'
const Pages = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const options = ['About us', 'About us', 'Blog','Faqs'];

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className='drop'>
      <select value={selectedOption} onChange={handleOptionChange}>
        <option value=""> </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <p>Pages {selectedOption}</p>
    </div>
  );
};

export default Pages;