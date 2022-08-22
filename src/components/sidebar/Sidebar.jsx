import React from 'react';
import './sidebar.css';
import { ReactComponent as VK } from '../../icons/VK.svg';
import { ReactComponent as OK } from '../../icons/OK.svg';
import { ReactComponent as Mail } from '../../icons/mail.svg';


const Sidebar = () => {
  return(
    <div className='sidebar'>
      <div className="sidebar-body">
        <div className='image'></div>
        <div className="top">
          <h2>Алексей Чернолихов</h2>
          <h4 style={{textTransform: 'uppercase'}}>фронтенд разработчик</h4>
        </div>
        <div className="sidebar-description">
          Огромное желание в совершенстве освоить профессию фронтенд разработчика, стать профессионалом своего дела и найти свое место в цифровую эпоху человечества.
        </div>
        <div className='sidebar-social'>
          <div className='sidebar-social-logo'>
            <a href="https://vk.com/id135574187" target="_blank"><VK /></a>
            <a href="https://my.mail.ru/mail/alexidino/" target="_blank"><Mail /></a>
            <a href="https://ok.ru/profile/102654310767" target="_blank"><OK /></a>
          </div>
          <div className="contact">
            <a href="mailto:alexidino@gmail.com">Contact Me</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;