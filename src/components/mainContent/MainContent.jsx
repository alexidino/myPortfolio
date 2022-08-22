import React, { useState } from 'react';
import Qualification from '../qualification/Qualification';
import './mainContent.css';

import Fire from '../../icons/Fire.png'
import Vector from "../../icons/Vector.png";
import House from "../../icons/House.png";


const MainContent = () => {
  const [cards, setCards] = useState([
    { icon: Fire, info: "Опыт разработки", number: 1},
    { icon: Vector, info: "Завершено проектов", number: 6},
    { icon: House, info: "Компании", number: 0},
  ]);

  return(
    <div className='main'>
      <div className="main-content" >
        <div className="about">
          <h2>О себе</h2>
          <div className='about-description'>
            Чернолихов Алексей Владимирович, 22.02.1986г. <br/>
            Окончил школу с&nbsp;углубленным изучением английского языка,
            имею высшее экономическое образование по&nbsp;специальности &laquo;финансы и&nbsp;кредит&raquo;.
            Программирование изучаю больше года, начинал с&nbsp;HTML и&nbsp;CSS, через 3&nbsp;месяца стал 
            постепенно знакомиться с&nbsp;JavaScript и&nbsp;React. Планирую связать дальнейшую 
            профессиональную деятельность с&nbsp;IT-сферой, развиваться в&nbsp;направлении фронтенда, 
            более детально изучить React и&nbsp;сопутствующий набор инстументов.
          </div>
        </div>
        <div className="experience">
          {cards.map((card,index) => 
          <div key={card.icon} className={`swell swell${index + 1}`}>
            <div>
              <img src={card.icon} alt="Fire" />
            </div>
            <div className='swell-info'>
              {card.info}
              <span>{card.number}</span>
            </div>
          </div>
          )}
        </div>
        <Qualification /> 
      </div>
    </div>
  )
}

export default MainContent;