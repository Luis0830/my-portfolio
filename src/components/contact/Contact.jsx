import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {SiWhatsapp} from 'react-icons/si'
import {FiPhone} from 'react-icons/fi'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_czm1h0h', 'template_qtbg57p', form.current, '7vaZf9UCMKKzMcjNa')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
    };

  return (
    <div id="contact">
      <div className="contact_title">
      <h5>Get in Touch</h5>
      <h2>Contact me</h2>
      </div>
      <div className="container contact__container">
      <div className="contact__options">
        <article className='contact__option'>
          <HiOutlineMail className='contact-icon' />
          <h4>Email</h4>
          <h5>luiscarlosgarcia0830@gmail.com</h5>
          <a href="mailto:luiscarlosgarcia0830@gmail.com" target="_blank">Send a message</a>
        </article>
        <article className='contact__option'>
          <SiWhatsapp className='contact-icon' />
          <h4>Whatsapp</h4>
          <a href="https://api.whatsapp.com/send?phone=18099316145" target="_blank">Send a message</a>
        </article>
        <article className='contact__option'>
          <FiPhone className='contact-icon'/>
          <h4>Phone</h4>
          <h5>+1-809-931-6145</h5>
        </article>
      </div>
      {/* form section below */}
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='name' placeholder='Your Name' required/>
        <input type="email" name='email' placeholder='Your Email' required/>
        <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>

      </form>
      </div>
    </div>
  )
}

export default Contact
