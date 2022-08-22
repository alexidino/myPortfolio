import React from 'react';
import { useState, useEffect } from 'react';
import './sidedivRight.css';

const SidedivRight = () => {

const [open, setOpen] = useState(true);

useEffect( () => {
  setTimeout(() => {
    setOpen(!open)
  },3000)
}, []);

  return(
    <div className='hidden-div'>
      <div className={open ? "sidedivs" : "sidedivs active"}></div>
    </div>
    
  )
}

export default SidedivRight;
