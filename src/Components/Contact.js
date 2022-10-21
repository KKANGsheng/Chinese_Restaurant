import React from 'react'
import about from "../Assets/Contact.jpg"
import "../styles/Contact.css"

export default function Contact() {
  return (
    <div className='contact'>
        <div className='leftside' style={{backgroundImage:`url(${about})`}}>
        
        </div >
        <div className="rightside">
            

            <form id="contact-form" method="post">
            <h1>Contact Us</h1>
                <label htmlFor="name">Full name</label>
                <input name="name" type="text"/>

                <label htmlFor="tel">Tel</label>
                <input name="tel" type="text"/>

                <label htmlFor="email">Email</label>
                <input name="email" type="text"/>

                <label htmlFor="comments">Comments</label>
                <textarea rows="6" placeholder="enter your message"></textarea>
                <button type="submit">Send message</button>
            </form>
        </div>
    </div>
  )
}
