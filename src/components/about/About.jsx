import React from 'react'
import './about.css'
import MEtwo from '../../images/me2.jpg'
import {BsAward} from 'react-icons/bs'
import {TiHtml5} from 'react-icons/ti'
import {SiCsswizardry, SiTailwindcss, SiJavascript} from 'react-icons/si'
import { FaGitSquare, FaReact, FaPython, FaNpm, FaBootstrap, FaNodeJs } from 'react-icons/fa'

function About() {
  return (
   <div id="about">
    <div className="titles">
      <h5 id="abouts">Get To Know</h5>
    <h2>About Me</h2>
      </div>
    <div className="container about__container">
      <div className="about__me">
        <div className="me__img">
          <img src={MEtwo} alt="Me image" />
        </div>
      </div>
      <div className="about__content">
      
           <div className="about__cards">
            <article className='about__card'>
               <BsAward className='about__icon' />
                   <h5>Skills</h5>
                   <h2><TiHtml5 className='icon' /><SiCsswizardry className='icon' /><SiJavascript className='icon' /><FaPython className='icon' /><FaGitSquare className='icon' /><FaNpm className='icon' /><FaNodeJs className='icon' /><FaReact className='icon' /><SiTailwindcss className='icon' /><FaBootstrap className='icon' /></h2>
            </article>
           </div>
           <p>From an early age I am passionate about technology, I love to explore and create, I am a lifelong learner. always looking for ways to improve myself.</p>
           <p>If I had to describe myself in one word, it would be inventive. I'll take a problem, break it down into smaller parts, and find a solution. Creativity has helped me overcome difficult obstacles.</p>
           <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
    </div>
   </div>
    
  )
}

export default About