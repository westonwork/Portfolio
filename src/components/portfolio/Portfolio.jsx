import React from 'react'
import './portfolio.css'
import IMG1 from '../../images/ReadToMe3.png'
import IMG2 from '../../images/TICKIT.png'

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Technical Projects</h2>

            <div className="container portfolio__container">
                <article className='portfolio__item'>
                    <div className='portfolio__item-image'>
                        <img src={IMG1} alt="image 1" />
                    </div>
                        <h3>Read To Me: Children's Reading Fluency App</h3>
                        <div className='portfolio__item-cta'>
                            <a href="https://github.com/westonwork" className='btn' target='_blank'>Github</a>
                            <a href="#" className='btn btn-primary' target='_blank'>Live Demo</a>
                        </div>
                </article>
                <article className='portfolio__item'>
                    <div className='portfolio__item-image'>
                        <img src={IMG2} alt="image 2" />
                    </div>
                        <h3>TickIt Bug Tracker: Software Bug Tracking App</h3>
                        <div className='portfolio__item-cta'>
                            <a href="https://github.com/westonwork" className='btn' target='_blank'>Github</a>
                            <a href="#" className='btn btn-primary' target='_blank'>Live Demo</a>
                        </div>
                </article>
            </div>
        </section>
    )
}

export default Portfolio;