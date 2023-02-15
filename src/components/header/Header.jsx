import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../images/emily9.png'
import HeaderSocials from '../header/HeaderSocials'

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Emily Weston</h1>
                <h5 className='text-light'>Full Stack Software Developer</h5>
                <CTA />
                <HeaderSocials />

                <div className='me'>
                    <img src={ME} alt="me" />
                </div>

                <a href="#contact" className='scroll__down'>Scroll Down</a>
            </div>
        </header>
    )
}

export default Header;