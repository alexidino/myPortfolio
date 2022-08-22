import React, { useState } from 'react';
import ProgressBar from '../../components/progressBar/ProgressBar';
import './skills.css';

import { motion } from 'framer-motion';

import HtmlBlack from '../../icons/html-small-black48.png';
import HtmlRed from '../../icons/html-small-red48.png';
import JSBlack from '../../icons/javascript-black48.png';
import JSYellow from '../../icons/javascript-yellow48.png';
import CSSBlack from '../../icons/css-black48.png';
import CSSBlue from '../../icons/css-blue48.png';
import ReactBlue from '../../icons/react-blue48.png';
import ReactBlack from '../../icons/react-black48.png';



const Skills = () => {

  const testData = [
    { bgcolor: "#CC985B", completed: 60, name: 'HTML', logo: HtmlRed, logoBlack: HtmlBlack, number: 1 },
    { bgcolor: "#84B1DB", completed: 50, name: 'CSS', logo: CSSBlue, logoBlack: CSSBlack, number: 2 },
    { bgcolor: "#EDE98B", completed: 40, name: 'JavaScript', logo: JSYellow, logoBlack: JSBlack, number: 3 },
    { bgcolor: "#87D9D4", completed: 40, name: 'React JS', logo: ReactBlue, logoBlack: ReactBlack, number: 4 },
  ];
  
  const textAnimation = {
    hidden: {
      x: -400,
      opacity: 0,
    },
    visible: custom => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.3 },
    }),
  };

  const [hover, setHover] = useState('');

  const getHover = (hover) => {
    setHover(hover);
  };

  return(
    <motion.section
    initial='hidden'
    whileInView='visible'
    className='skills'> 
      <div className="skills-description">
        <div className="top-description">
          <motion.h2 variants={textAnimation}>Фронтенд разработчик</motion.h2>
          <motion.p variants={textAnimation}>
            1&nbsp;год обучения. За&nbsp;этот срок более менее разобрался с&nbsp;версткой, стилями и&nbsp;стал осваивать JavaScript.
            Изучил переменные, функции, объекты, массивы, работу циклов, классы, промисы, различные методы и&nbsp;т.д. 
            React начал изучать с&nbsp;классов, позднее перешёл на&nbsp;хуки. 
            Умею работать с&nbsp;формами, пропсами, в&nbsp;том числе получать значения от&nbsp;нижестоящих компонентов, 
            реализовывать обратное связывание, условную отрисовку.
            Знаком с&nbsp;асинхронными функциями, fetch API, axios.
            Работал с&nbsp;библиотекой анимаций Framer Motion.
            Небольшой опыт работы с&nbsp;консолью и&nbsp;GitHub. 
            Навык слепой печати в&nbsp;латинской раскладке.
            Английский язык на&nbsp;среднем уровне, планирую довести до&nbsp;свободного.
            На&nbsp;данном этапе пришел к&nbsp;выводу, что очень важно уметь хорошо читать код, 
            хорошо отточив этот навык можно сэкономить много времени и&nbsp;сил для более эффективного решения задач.
          </motion.p>
        </div>
        <div className='bottom-description'>
          <motion.div custom={1} variants={textAnimation} className="icons-description">
            <h2>Навыки</h2>
            <p>Мой технический уровень</p>
            <div className='icons-box'>
              {testData.map((data, index) => (
                <div key={data.name} onMouseOver={() =>  setHover(index + 1)} className='box-styles'>
                  <div 
                  style= {{
                    height: `${hover === data.number ? data.completed : '4'}%`, 
                    backgroundColor: data.bgcolor, 
                    transition: '0.9s'
                    }}
                  className='box-styles-filler'
                  >
                    <div className='little-icon'>
                      {/* { progressBarHover === data.number ? <img src={data.logo} alt="image" /> : <img src={data.logoBlack} alt="image" /> } */}
                      <img src={data.logo} alt="image" />
                      <p>{data.completed}%</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <div className='monitor-pic'></div>
        </div>
      </div>
      <ProgressBar testData={testData} getHover={getHover} hover={hover}/>  
    </motion.section>
  )
}

export default Skills;

