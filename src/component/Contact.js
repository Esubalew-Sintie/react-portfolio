import React from 'react'
import './contact.css'

function Contact() {
  return (
    <div className='contact' id='contact'>
      <h3>Contact</h3>
      <p>Submit the form below or shoot me an email - <a href=' esubalewsintie1302@gmail.com'>esubalewsintie1302@gmail.com</a></p>
      <form className='form' onSubmit={(e)=>{e.preventDefault()}}>
        <input type="text" placeholder='Name' />
        <input type="email" placeholder='Email' />
        <textarea placeholder='Message' cols="30" rows="10"/>
         <button>Let's collaborate</button>
      </form>
    </div>
  )
}

export default Contact