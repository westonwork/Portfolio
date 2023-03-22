import React from 'react'
import './about.css'
import ME from '../../images/emily8.jpeg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className='container about__container'>
                <div className='about__me'>
                    <div className='about__me-image'>
                        <img src={ME} alt="About Image" />
                    </div>
                </div>

                <div className='about__content'>
                    <div className='about__cards'>
                        <article className='about__card'>
                            <FaAward className='about__icon'/>
                            <h5>Education</h5>
                            <small>Coding Dojo Bootcamp & Florida Gulf Coast University </small>
                        </article>

                        <article className='about__card'>
                            <FiUsers className='about__icon'/>
                            <h5>Location</h5>
                            <small>Currently residing in Southwest Florida</small>
                        </article>

                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon'/>
                            <h5>Fun Fact</h5>
                            <small>Dance Choreographer for 11+ Years</small>
                        </article>
                    </div>

                    <p>
                        I'm a full stack software developer with 5 years of exprience in mortgage lending and corporate training. I recently graduated from Coding Dojo's full time immersive software development bootcamp and I have a B.A. in Elementary Education.
                    </p>
                    <p>
                        I started coding with HTML in college as we explored how to leverage different technologies in our classrooms. That grew into doing graphic design and technical training work as a freelancer throughout the last 7 years! 
                    </p>
                    <p>
                        I've been passionate about using technology to help others and am excited to use my knowledge and skills to push the boundaries of what can be created even further!
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About;