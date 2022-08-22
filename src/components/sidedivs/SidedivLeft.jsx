import React from 'react';
import { useState, useEffect } from 'react';
import './sidedivLeft.css';

const SidedivRight = () => {

const [open, setOpen] = useState(true);

useEffect( () => {
  setTimeout(() => {
    setOpen(!open)
  },3000)
}, []);

  return(
    <div className='hidden-right-div'>
      <div className={open ? "sidediv-right" : "sidediv-right active"}></div>
    </div>
  )
}

export default SidedivRight;