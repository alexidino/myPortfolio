import React from 'react';import './main.css';
import './main.css';

import { Routes, Route, Link } from 'react-router-dom';

import SidedivRight from '../sidedivs/SidedivRight';
import SidedivLeft from '../sidedivs/SidedivLeft';
import Header from '../header/Header'
import MainContent from '../mainContent/MainContent';
import Sidebar from '../sidebar/Sidebar';
import Skills from '../../pages/skills/Skills';
import Projects from '../../pages/projects/Projects';




const Main = () => {
  return(
    <>
      <div>
        <Header />
      </div>
      <div className='content'>
        <SidedivRight />
        <div className="main-body" >
          <Sidebar />
          <Routes>
            <Route path='/' element={<MainContent />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/projects' element={<Projects />} />
          </Routes>
        </div>
        <SidedivLeft />
      </div>
    </>
  )
}

export default Main;
