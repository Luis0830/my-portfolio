import React from 'react'
import './header.css'
import CvLinks from './CvLinks'
import Me from '../../images/me1.png'
import Social from './Social'

const Header = () => {
  return (
    <container>
        <div className="container header__container">
            <h5>Hello I'm</h5>
            <h1>Luis Garcia</h1>
            <h5 className="text-light">Web Developer</h5>
            <CvLinks />
            <Social />

            <div className="me">
              <img src={Me} alt="me" />
            </div>
            <a href="#contact" className='scroll__down'>Scroll Down</a>
        </div>
    </container>
  )
}

export default Header