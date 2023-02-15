import React from 'react';
import './nav.css';
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai';
import {BsPatchCheckFill} from 'react-icons/bs';
import {MdWorkOutline, MdOutlinePhoneIphone} from 'react-icons/md';
import { useState } from 'react';

const Nav = () => {
    const [activeNav, setActiveNav] = useState("#");
    return (
        <nav>
            <a href="#" 
            onClick={() => setActiveNav('#')} 
            className={activeNav === '#' ? 'active' : ''}>
                <AiOutlineHome/></a>

            <a href="#about" 
            onClick={() => setActiveNav('#about')} 
            className={activeNav === '#about' ? 'active' : ''}>
                <AiOutlineUser/></a>

            <a href="#experience" 
            onClick={() => setActiveNav('#experience')} 
            className={activeNav === '#experience' ? 'active' : ''}>
                <BsPatchCheckFill/></a>

            <a href="#education" 
            onClick={() => setActiveNav('#education')} 
            className={activeNav === '#education' ? 'active' : ''}>
                <MdWorkOutline/></a>

            <a href="#contact"
            onClick={() => setActiveNav('#contact')} 
            className={activeNav === '#contact' ? 'active' : ''}>
                <MdOutlinePhoneIphone/></a>
        </nav>
    )
}

export default Nav;