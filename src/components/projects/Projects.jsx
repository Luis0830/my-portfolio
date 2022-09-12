import React from 'react'
import './projects.css'
import Proj1 from '../../images/project1.png'
import Proj2 from '../../images/project2.png'
import Proj3 from '../../images/project3.PNG'

function Projects() {
  return (
     <div id="projects">
        <div className="project_titles">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>
        </div>
        <div className="container portfolio__container">
        <article className='portfolio__item'>
             <div className="portfolio__item-image">
              <img src={Proj1} alt="Travel Advisor" />
             </div>
             
             <h3>Travel Advisor</h3>
             <p>Used React Hooks, Google maps API, Rapid API -travel advisor API-, Axios, Material UI</p>
             
             <div className='btn_btn'>
          <a href="https://github.com/Luis0830/travel-advisor" className='btn' target="_blank">Github</a>
             <a href='https://luis0830.github.io/travel-advisor/' className="btn btn-primary" target="_blank">Live Demo</a>
          </div>
          </article>
          <article className='portfolio__item'>
             <div className="portfolio__item-image">
              <img src={Proj2} alt="Travel Advisor" />
             </div>
             <h3>Tenzies Mini Game</h3>
             <p>Used React, styled components, react nano, npm react confetti, used Hooks</p>
             <div className='btn_btn'>
          <a href="https://github.com/Luis0830/Tenzies" className='btn' target="_blank">Github</a>
             <a href='https://luis0830.github.io/Tenzies/' className="btn btn-primary" target="_blank">Live Demo</a>
          </div>
          </article>
          <article className='portfolio__item'>
             <div className="portfolio__item-image">
              <img src={Proj3} alt="Travel Advisor" />
             </div>
             <h3>Speed Typing Text</h3>
             <p>Used React, styled components, used advance custom Hooks</p>
             <div className='btn_btn'>
          <a href="https://github.com/Luis0830/speed-typing-text" className='btn' target="_blank">Github</a>
             <a href='https://luis0830.github.io/speed-typing-text/' className="btn btn-primary" target="_blank">Live Demo</a>
          </div>
          </article>
          
          
          
          
        </div>
     </div>
  )
}

export default Projects