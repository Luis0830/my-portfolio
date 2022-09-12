import React from 'react'
import './footer.css'
import {BsLinkedin, BsGithub} from 'react-icons/bs'
import {SiWhatsapp} from 'react-icons/si'
import {AiOutlineCopyright} from 'react-icons/ai'


const Footer = () => {
  return (
    <footer>
        <a href="#" className='footer__logo'>Luis Garcia</a>

        <ul className='footer__links'>
            <li><a href="#">Home</a></li>
            <li><a href="#abouts">About</a></li>
            <li><a href="#exp">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="footer__socials">
            <a href="https://github.com/Luis0830" target='_blank'> <BsGithub className='footer-icon'/> </a>
            <a href="https://www.linkedin.com/in/luis-carlos-garcia-gomez-2022g" target='_blank'> <BsLinkedin className='footer-icon' /> </a>
            <a href="https://api.whatsapp.com/send?phone=18099316145" target='_blank'><SiWhatsapp className='footer-icon' /></a>
        </div>
        <div className="reserved">
            <small>
                <i>© 2022, Built and designed by Luis Garcia</i>
            </small>
        </div>
    </footer>
    
  )
}

export default Footer