import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import { MdOutlinePhoneIphone } from 'react-icons/md'

const Contact = () => {
    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className='contact__options'>
                    <article className='contact__option'>
                        <MdOutlineEmail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>EmmyLombardo@AOL.com</h5>
                        <a href="mailto:emmylombardo@aol.com" target='_blank'>Send Emily a Message</a>
                    </article>
                    <article className='contact__option'>
                        <MdOutlinePhoneIphone className='contact__option-icon' />
                        <h4>Call</h4>
                        <h5>239.776.4665</h5>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default Contact;