import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './menu.css';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LeaderboardOutlinedIcon from '@mui/icons-material/LeaderboardOutlined';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';

const Menu = ({active, setActive}) => {

  const [menuIcons, setMenuIcons] = useState([
    { title: 'Home', link: '/home', icon: HomeOutlinedIcon},
    { title: 'About', link: '/', icon: AccountCircleIcon},
    { title: 'Skills', link: '/skills', icon: LeaderboardOutlinedIcon},
    { title: 'Projects', link: '/projects', icon: WorkOutlineIcon},
  ]);
  

  return(
    <div className={active ? 'menu active' : 'menu'}>
      <div className="blur" />
      <div className="menu-content">
        <div className="menu-header">
          <div className='menu-header-photo'></div>
          <div className='menu-header-contact'>
            <div className='menu-header-name'>Алексей</div>
            <div className='menu-header-tel'>8(909)321 51 13</div>
          </div>
        </div>
        <ul onClick={() => setActive(!active)}>
          {menuIcons.map( item => (
          <li key={item.title}>
            <Link className='menu-link' to={item.link}>
              <span className='menu-icons'><item.icon /></span>
              <span className='menu-icons'>{item.title}</span> 
            </Link>
          </li>
          ))}
        </ul>
        <div className='menu-footer'></div>
      </div>
    </div>
  )
}


export default Menu;
