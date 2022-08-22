import React, { useState } from 'react';
import './projects.css';

const Projects = () => {

  const [cards, setCards] = useState([
    { title: 'Balls', description: "Создание 1000 хаотично-движущихся окружностей при помощи классов, используя Canvas и JavaScript", href: <iframe width="100%" height="auto" src="https://www.youtube.com/embed/50cdak-NxQg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> },
    { title: 'React', description: "Первый курс который я прошел по Реакту, сейчас он платный. Состоит из 27 видео, в основном на классах", href: <iframe width="100%" height="auto" src="https://www.youtube.com/embed/AcLeOeUbFd4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> },
    { title: 'Countries', description: "Еще один хороший SPA проект на React, реализованный с использованием react-router-dom, API запросов, библиотеки styled-components", href: <iframe width="100%" height="auto" src="https://www.youtube.com/embed/qVKGzyl0APQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> },
    { title: 'React фундамент', description: "Прекрасное видео по основам React, огромное спасибо автору", href: <iframe width="100%" height="auto" src="https://www.youtube.com/embed/GNrdg3PzpJQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> },
    { title: 'Admin Panel', description: "Админ панель на React, с использованием ApexCharts и Framer Motion", href: <iframe width="100%" height="auto" src="https://www.youtube.com/embed/K7vHoUwClaM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> },
    { title: 'COVID', description: "Небольшое приложение для отслеживания статистики по Ковид-19, используется Charts.js и Material UI", href:<iframe width="100%" height="auto" src="https://www.youtube.com/embed/khJlrj3Y6Ls" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> },
  ]);


  return(
    <div className='projects'>
      <div className='projects-container'>
        <p>Здесь представлено несколько небольших проектов которые помогли мне в освоении основ фронтенда и создании данного SPA портфолио при помощи React, react-router-dom, Framer Moution. 
          
        </p>
        <div className='project-cards'>
          {cards.map(card => (
            <div className="project-card">
              <div className="project-card-title">
                {card.title}
              </div>
              <div className="project-card-description">
                {card.description}
              </div>
              <div className="project-card-video">
                {card.href}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects;

