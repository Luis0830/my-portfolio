import React from 'react'
import {BsLinkedin, BsGithub} from 'react-icons/bs'

const Social = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/luis-carlos-garcia-gomez-2022g" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/Luis0830" target="_blank"><BsGithub /></a>
    </div>
  )
}

export default Social