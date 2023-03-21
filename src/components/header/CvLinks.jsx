import React from 'react'
import CV from '../../images/cv.pdf'
import './header.css'


const CvLinks = () => {
  return (
    <div className='cvlink'>
        <a href={CV} download="Luis_Garcia_CV" className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        
    </div>
  )
}

export default CvLinks