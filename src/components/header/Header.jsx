import React, { useState, useEffect } from 'react';
import './header.css';

import Menu from '../menu/Menu';

import LightModeIcon from '@mui/icons-material/LightMode';
import Brightness2Icon from '@mui/icons-material/Brightness2';
import { ReactComponent as Burgerline }from '../../icons/Burgerline.svg';



const Header = () => {


const [menuActive, setMenuActive] = useState(false);

const [theme, setTheme] = useState('light');
const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

useEffect(() => {
  document.body.setAttribute('data-theme', theme)
}, [theme]);

  return(
    <div className="header">
        <div className="navbar" >
          <div className="title">Алексей Чернолихов</div>
          <div className='icon' onClick={() => setMenuActive(!menuActive)}>
            <Burgerline />
          </div>
          <div className='btns'>

            <Menu active={menuActive} setActive={setMenuActive}/>

            <div className={theme ==='dark' ? "switcher" : "switcher active"} onClick={() => toggleTheme()}>
              {theme === 'light' 
              ? 
              <Brightness2Icon style={{fontSize: '16px'}} /> 
              : 
              <LightModeIcon style={{fontSize: '16px'}} />}
            </div>
          </div>
        </div>
    </div>
  )
}

export default Header;