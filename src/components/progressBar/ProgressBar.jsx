import React, { useState } from 'react';
import './progressBar.css';
// import HtmlRed from '../../icons/html-red.png';
// import HtmlBlack from '../../icons/html-small-black48.png';
// import HtmlSmall from '../../icons/html-small-red48.png';

const ProgressBar = ({ testData, getHover, hover}) => {

  return(
    <div className="direct">
      <div className='direction'>
        {testData.map((data, index) => (  
            <div key={data.name} onMouseOver={() =>  getHover(index + 1)}  className='container-styles'>
              <div 
                style= {{
                  height: `${hover === data.number ? data.completed : '3'}%`, 
                  backgroundColor: data.bgcolor, 
                  transition: '0.9s'
                  }}
                className='filler-styles'
              >
                <div className='filler-styles-logo' >
                  { hover === data.number ? <img src={data.logo} alt="image" /> : <img src={data.logoBlack} alt="image" /> }
                  <div className='label-styles'>
                    <span className='labelPercent'>{data.name}</span>
                    <span className='labelPercent'>{`${data.completed}%`}</span>
                  </div>
                </div>
              </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;

