import React from 'react';
import { useState } from 'react';
import './qualification.css';

import { ReactComponent as Education } from '../../icons/Education.svg'
import { ReactComponent as Work } from '../../icons/Work.svg'
import Datepic from '../../icons/Datepic.png' 

const Qualification = () => {

  const [cardsEducation, setCards] = useState([
    {school: 'Школа-гимназия № 37', city: 'Бишкек', icon: Datepic, years: '1993 - 2003'},
    {school: 'КРСУ', city: 'Бишкек', icon: Datepic, years: '2003 - 2008'},
    // {school: 'Школа 3', city: 'Бишкек', icon: Datepic, years: '1993 - 2003'},
  ]);


  const [cardWork, setCardsWork] = useState([
    {school: 'Work 1', city: 'Бишкек', icon: Datepic, years: '1993 - 2003'},
    {school: 'Work 2', city: 'Бишкек', icon: Datepic, years: '2003 - 2008'},
    {school: 'Work 3', city: 'Penza', icon: Datepic, years: '2008 - 2022'},
  ]);

  const [qualification, setQualification] = useState(true);

  return (
    <div>
      <div className="qualification">
        <h2>Квалификация</h2>
        <span>Образовательный путь и работа</span>
      </div>
      <div className="education-work">
        <div className={qualification ? "education active-color" : "education"}
        onClick={() => setQualification(true)}
        >

          <Education />
          Образование
        </div>
        <div className={qualification ? "work" : "work active-color"}
        onClick={() => setQualification(false)}
        >
          <Work className="image-work" />
          Работа
        </div>
      </div>

      <hr style={{width: '100%', marginBottom: '20px'}}/>

      <div className={qualification ? "infoCard block-2" : "infoCard"}>
        <div className={qualification ? "infocard-education active" : "infocard-education"}>
          {cardsEducation.map(card => 
            <div key={card.school} className="education-card">
              <div className="school-header">{card.school}</div>
              <div>
                <div>{card.city}</div>
                <div className='date'>
                  <img src={card.icon} alt="Datepic" />
                  {card.years}
                </div>
              </div>
          </div>
          )}
        </div>

        <div className={qualification ? "infocard-work" : "infocard-work active"}>
          {cardWork.map(card => 
            <div key={card.school} className="education-card">
              <div className="school-header">{card.school}</div>
              <div>
                <div>{card.city}</div>
                <div className='date'>
                  <img src={card.icon} alt="Datepic" />
                  {card.years}
                </div>
              </div>
          </div>
          )}
        </div> 
      </div>
    </div>
  )
}

export default Qualification;