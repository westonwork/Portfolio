import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
    return (
        <section id='experience'>
            <h5>What I Know</h5>
            <h2>My Skills</h2>

            <div className='container experience__container'>
                <div className='experience__frontend'>
                    <h3>Languages & Databases</h3>
                    <div className='experience__content'>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <h4>HTML</h4>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <h4>C#</h4>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <h4>CSS</h4>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4>MySQL</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Javascript</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>MongoDB</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4>Python</h4>
                            </div>
                        </article>
                    </div>
                </div>
                <div className='experience__backend'>
                    <h3>Libraries & Frameworks </h3>
                    <div className='experience__content'>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Flask</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4>ExpressJS</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4>React</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4>Bootstrap</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4>NodeJS</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4>MVC Framework</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Entity Framework Core</h4>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience;